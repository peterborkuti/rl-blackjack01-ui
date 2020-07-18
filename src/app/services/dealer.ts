import { Player } from '../interfaces/player';
import { Action } from '../enums/action.enum';
import { State } from '../classes/state';

export class Dealer extends Player {
    play(state: State): Action {
        return (state.sum >= 17) ? Action.STICK : Action.HIT; 
    }
}