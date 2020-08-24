import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { FirstVisitMCPredictionService } from './first-visit-mcprediction.service';

@Injectable({
  providedIn: 'root'
})
export class MCPlayerService extends Player {
  private V = {};

  constructor(
    private learnModule: FirstVisitMCPredictionService
    ) {
      super();
    }
    
  getName() {
    return 'MCPlayer';
  }
  prepareForANewGame(): void {
    this.learnModule.startEpisode();
  }
  play(state: State, learningGame: boolean): Action {
    const action = this.learnModule.getAction(state, learningGame ? 0.3 : 0);
    this.learnModule.addStep(state, action);

    return action;
  }

  episodeDone(state: State, reward: number): void {
    this.learnModule.learnFromEpisode(reward);
  }

  getV() {
    return this.learnModule.getV();
  }
}
