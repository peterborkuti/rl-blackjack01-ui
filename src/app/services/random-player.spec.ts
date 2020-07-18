import { RandomPlayer } from './random-player';
import { RandomGeneratorService } from './random-generator.service';
import { Action } from '../enums/action.enum';
import { State } from '../classes/state';

describe('RandomPlayer', () => {
  const state = new State();

  it('should create an instance', () => {
    const service = jasmine.createSpyObj(['getRandom']);
    expect(new RandomPlayer(service)).toBeTruthy();
  });
  it('should HIT when random < 0.5', () => {
    const service: RandomGeneratorService = {
      getRandom: () => 0.3
    }
    const rPlayer = new RandomPlayer(service);
    expect(rPlayer.play(state)).toBe(Action.HIT);
  });
  it('should STICK when random >= 0.5', () => {
    const service: RandomGeneratorService = {
      getRandom: () => 0.7
    }
    const rPlayer = new RandomPlayer(service);
    expect(rPlayer.play(state)).toBe(Action.STICK);
  });
});
