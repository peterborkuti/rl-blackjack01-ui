import { Action } from '../enums/action.enum';

export abstract class Player {
    prepareForANewGame(): void {};
    abstract play(hand: number, usableAce: boolean, dealer: number): Action;
    episodeDone(hand: number, usableAce: boolean, dealer: number, reward: number): void {};
}
