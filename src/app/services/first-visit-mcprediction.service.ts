import { Injectable } from '@angular/core';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { SAR } from '../classes/sar';


@Injectable({
  providedIn: 'root'
})
export class FirstVisitMCPredictionService {
  private V: {[key: string]: number} = {};
  private Returns: {[key: string]: number[]}= {};
  private episode: SAR[] = [];
  private firstStates: {[key: string]: number} = {};

  constructor() { }

  startEpisode() {
    this.episode = [];
    this.firstStates = {};
  }

  getEpisode(): SAR[] {
    return this.episode.map(sar => new SAR(sar.getState(), sar.getAction(), sar.getReward()));
  }

  addStep(state: State, action: Action, reward: number = 0) {
    const _state = new State(state.sum, state.usableAce, state.dealerCard);
    const key = state.getKey(action);
    if (!this.firstStates[key]) {
      this.firstStates[key] = this.episode.length;
    }
    this.episode.push(new SAR(_state, action, reward));
  }

  getAction(state: State, epsilon: number = 0): Action {
    const keyHit = state.getKey(Action.HIT);
    const keyStick = state.getKey(Action.STICK);
    const hitVal = this.V[keyHit];
    const stickVal = this.V[keyStick];

    let action = Action.HIT;

    // both actions have been tried, epsilon-greedy action
    if (hitVal !== undefined && stickVal !== undefined) {
      action =  (hitVal > stickVal) ? Action.HIT : Action.STICK;
      if (Math.random() < epsilon) {
        action = (action === Action.HIT) ? Action.STICK : Action.HIT;
      }
    }
    else {  // only one of the actions was tried, exploration 
      action = (hitVal === undefined) ? Action.HIT : Action.STICK;
    }

    return action;
  }

  learnFromEpisode(reward: number): void {
    const T = this.episode.length - 1;
    const lastSAR = this.episode[T];
    this.episode[T] = new SAR(lastSAR.getState(), lastSAR.getAction(), reward);

    let G = 0;
    for (let t = T; t >= 0; t--) {
      G += this.episode[t].getReward();

      const state = this.episode[t].getState();
      const action = this.episode[t].getAction();
      const key = state.getKey(action);

      if (this.firstVisit(key, t)) {
        if (!this.Returns[key]) {
          this.Returns[key]=[G];
        }
        else {
          this.Returns[key].push(G);
        }
        this.V[key] = this.Returns[key].reduce((total, actual)=> total+=actual, 0)/this.Returns[key].length;
      }
    }
  }

  getV(): {[key: string]: number} {
    return Object.assign({}, this.V);
  }

  firstVisit(key: string, t: number): boolean {
    const keyIndex = this.firstStates[key];
    return (keyIndex !== undefined && keyIndex === t);
  }
}
