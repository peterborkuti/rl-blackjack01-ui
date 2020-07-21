import { Injectable } from '@angular/core';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { SAR } from '../classes/sar';
import { RandomGeneratorService } from './random-generator.service';


@Injectable({
  providedIn: 'root'
})
export class FirstVisitMCPredictionService {
  private V: {[key: string]: number} = {};
  private Returns: {[key: string]: number[]}= {};
  private episode: SAR[] = [];
  private firstStates: {[key: string]: number} = {};

  constructor(private random: RandomGeneratorService) { }

  startEpisode() {
    this.episode = [];
    this.firstStates = {};
  }

  addStep(state: State, action: Action, reward: number = 0) {
    const key = state.getKey(action);
    if (!this.firstStates[key]) {
      this.firstStates[key] = this.episode.length;
    }
    this.episode.push(new SAR(state, action, reward));
  }

  getAction(state: State, epsilon: number = 0): Action {
    const keyHit = state.getKey(Action.HIT);
    const keyStick = state.getKey(Action.STICK);
    const hitVal = this.V[keyHit];
    const stickVal = this.V[keyStick];

    // both action has been tried, epsilon-greedy action
    if (hitVal !== undefined && stickVal !== undefined) {
      return (hitVal > stickVal && this.random.getRandom() >= epsilon) ? Action.HIT : Action.STICK;
    }

    // none action was tried, random action
    if (hitVal === undefined && stickVal === undefined) {
      return  this.random.getRandom() < 0.5 ? Action.HIT : Action.STICK;
    }

    // only one of the actions was tried, exploration 
    return (hitVal === undefined) ? Action.HIT : Action.STICK;
  }

  learnFromEpisode(reward: number): {[key: string]: number} {
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

    return Object.assign({}, this.V);
  }

  private firstVisit(key: string, t: number): boolean {
    return this.firstStates[key] == t;
  }
}
