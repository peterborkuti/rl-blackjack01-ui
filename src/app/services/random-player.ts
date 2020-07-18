import { Player } from '../interfaces/player';
import { Action } from '../enums/action.enum';
import { RandomGeneratorService } from './random-generator.service';
import { State } from '../classes/state';

export class RandomPlayer extends Player {
    constructor(private randomGenerator: RandomGeneratorService){
        super();
    };

    play(state: State): Action {
        return (this.randomGenerator.getRandom() < 0.5) ? Action.HIT:Action.STICK;
    }
}
