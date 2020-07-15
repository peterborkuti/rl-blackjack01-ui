import { Player } from '../interfaces/player';
import { Action } from '../enums/action.enum';
import { RandomGeneratorService } from './random-generator.service';

export class RandomPlayer extends Player {
    constructor(private randomGenerator: RandomGeneratorService){
        super();
    };

    play(hand: number, usableAce: boolean, dealer: number): Action {
        return (this.randomGenerator.getRandom() < 0.5) ? Action.HIT:Action.STICK;
    }
}
