import { Dealer } from './dealer';
import { Action } from '../enums/action.enum';

describe('dealer', () => {
    const dealer = new Dealer();

    it('should hit below 17', () => {
        expect(dealer.play(16)).toBe(Action.HIT);
    })
    it('should stick at 17', () => {
        expect(dealer.play(17)).toBe(Action.STICK);
    })
    it('should stick above 17', () => {
        expect(dealer.play(18)).toBe(Action.STICK);
    })
})