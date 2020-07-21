import { State } from './state';
import { Action } from '../enums/action.enum';

export class SAR {
    constructor(private state: State, private action: Action, private reward = 0) {}

    getState(): State {
        return this.state;
    }

    getAction(): Action {
        return this.action;
    }

    getReward() : number {
        return this.reward;
    }
}
