import { RandomPlayer } from './random-player';
import { RandomGeneratorService } from './random-generator.service';
import { Action } from '../enums/action.enum';

describe('RandomPlayer', () => {
  it('should create an instance', () => {
    const service = jasmine.createSpyObj(['getRandom']);
    expect(new RandomPlayer(service)).toBeTruthy();
  });
  it('should HIT when random < 0.5', () => {
    const service: RandomGeneratorService = {
      getRandom: () => 0.3
    }
    const rPlayer = new RandomPlayer(service);
    expect(rPlayer.play(0,false,0)).toBe(Action.HIT);
  });
  it('should STICK when random >= 0.5', () => {
    const service: RandomGeneratorService = {
      getRandom: () => 0.7
    }
    const rPlayer = new RandomPlayer(service);
    expect(rPlayer.play(0,false,0)).toBe(Action.STICK);
  });
});
