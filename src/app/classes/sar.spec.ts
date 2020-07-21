import { SAR } from './sar';
import { State } from './state';
import { Action } from '../enums/action.enum';

describe('SAR', () => {
  it('should create an instance', () => {
    expect(new SAR(new State(0, false, 0), Action.HIT, 0)).toBeTruthy();
  });
});
