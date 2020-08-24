import { State } from './state';
import { Action } from '../enums/action.enum';

describe('State', () => {
  it('should create an instance', () => {
    expect(new State()).toBeTruthy();
  });

  it('generates key for stick', () => {
    const state = new State(10, false, 10);
    expect(state.getKey(Action.STICK)).toBe('10-false-10-STICK');
  })

  it('generates key for hit', () => {
    const state = new State(10, false, 10);
    expect(state.getKey(Action.HIT)).toBe('10-false-10-HIT');
  })

  it('splits key well true - HIT', () => {
    const state = new State(10, true, 5);
    const splitedKey = state.splitKey(state.getKey(Action.HIT));

    expect(splitedKey).toEqual({sum: 10, usableAce: true, dealerCard: 5, action: Action.HIT});
  })

  it('splits key well false - STICK', () => {
    const state = new State(10, false, 5);
    const splitedKey = state.splitKey(state.getKey(Action.STICK));

    expect(splitedKey).toEqual({sum: 10, usableAce: false, dealerCard: 5, action: Action.STICK});
  })
});
