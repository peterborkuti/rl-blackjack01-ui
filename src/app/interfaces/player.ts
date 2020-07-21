import { Action } from '../enums/action.enum';
import { State } from '../classes/state';

export abstract class Player {
    getName(): string { return 'Abstract player'};
    prepareForANewGame(): void {};
    abstract play(state: State): Action;
    episodeDone(state: State, reward: number): void {};
}
