import { Dealer } from './dealer';
import { Action } from '../enums/action.enum';
import { State } from '../classes/state';

describe('dealer', () => {
    const dealer = new Dealer();
    const state = new State();

    it('should hit below 17', () => {
        state.sum = 16;
        expect(dealer.play(state)).toBe(Action.HIT);
    })
    it('should stick at 17', () => {
        state.sum = 17;
        expect(dealer.play(state)).toBe(Action.STICK);
    })
    it('should stick above 17', () => {
        state.sum = 18;
        expect(dealer.play(state)).toBe(Action.STICK);
    })
})