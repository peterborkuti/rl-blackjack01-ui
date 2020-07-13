import { Player } from '../interfaces/player';
import { Action } from '../enums/action.enum';

export class Dealer extends Player {
    play(hand: number): Action {
        return (hand >= 17) ? Action.STICK : Action.HIT; 
    }
}