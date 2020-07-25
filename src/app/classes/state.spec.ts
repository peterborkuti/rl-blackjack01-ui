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
});
