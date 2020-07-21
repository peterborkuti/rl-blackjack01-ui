import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { RandomGeneratorService } from './random-generator.service';
import { FirstVisitMCPredictionService } from './first-visit-mcprediction.service';

@Injectable({
  providedIn: 'root'
})
export class MCPlayerService extends Player {

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
  play(state: State): Action {
    const action = this.learnModule.getAction(state, 0.1);
    this.learnModule.addStep(state, action);

    return action;
  }

  episodeDone(state: State, reward: number): void {
    this.learnModule.learnFromEpisode(reward);
  }
}
