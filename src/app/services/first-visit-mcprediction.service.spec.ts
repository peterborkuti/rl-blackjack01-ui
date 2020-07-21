import { FirstVisitMCPredictionService } from './first-visit-mcprediction.service';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';

describe('FirstVisitMCPredictionService - getAction', () => {
  let service: FirstVisitMCPredictionService;

  it('should get random action when nothing learned', () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    expect(service.getAction(new State())).toBe(Action.HIT);

    service = new FirstVisitMCPredictionService({getRandom: () => 1});
    expect(service.getAction(new State())).toBe(Action.STICK);
  });

  it('should get STICK if only HIT was learned', () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state = new State(10, false, 0);

    service.startEpisode();
    service.addStep(state, Action.HIT);
    service.learnFromEpisode(1);

    expect(service.getAction(state)).toBe(Action.STICK);
  });

  it('should get HIT if only STICK was learned', () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state = new State(10, false, 0);

    service.startEpisode();
    service.addStep(state, Action.STICK);
    service.learnFromEpisode(1);

    expect(service.getAction(state)).toBe(Action.HIT);
  });

  it('should get HIT if both were learned, but HIT value > STICK value', () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state = new State(10, false, 0);

    service.startEpisode();
    service.addStep(state, Action.STICK);
    service.learnFromEpisode(0);

    service.startEpisode();
    service.addStep(state, Action.HIT);
    service.learnFromEpisode(1);

    expect(service.getAction(state)).toBe(Action.HIT);
  });

  it('should get STICK if both were learned, but HIT value < STICK value', () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state = new State(10, false, 0);

    service.startEpisode();
    service.addStep(state, Action.STICK);
    service.learnFromEpisode(1);

    service.startEpisode();
    service.addStep(state, Action.HIT);
    service.learnFromEpisode(0);

    expect(service.getAction(state)).toBe(Action.STICK);
  });
});

describe('FirstVisitMCPredictionService - learnFromEpisode', () => {
  let service: FirstVisitMCPredictionService;

  it("After 1 step long success episode V should contanin 1 element with reward", () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state = new State(10, false, 0);
    const REWARD = 10;

    service.startEpisode();
    service.addStep(state, Action.STICK);
    const V: {} = service.learnFromEpisode(REWARD);

    const keys = Object.keys(V);
    expect(keys.length).toBe(1);
    expect(V[keys[0]]).toBe(REWARD);
  })

  it("Same steps dont grow V", () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state = new State(10, false, 0);
    const REWARD = 10;

    service.startEpisode();
    service.addStep(state, Action.STICK);
    service.addStep(state, Action.STICK);
    service.addStep(state, Action.STICK);
    const V: {} = service.learnFromEpisode(REWARD);

    const keys = Object.keys(V);
    expect(keys.length).toBe(1);
    expect(V[keys[0]]).toBe(REWARD);
  })

  it("After 2 step long success episode V should contanin 2 element with reward", () => {
    service = new FirstVisitMCPredictionService({getRandom: () => 0});
    const state1 = new State(10, false, 0);
    const state2 = new State(20, false, 0);
    const REWARD = 10;

    service.startEpisode();
    service.addStep(state1, Action.HIT);
    service.addStep(state1, Action.STICK);
    const V: {} = service.learnFromEpisode(REWARD);

    const keys = Object.keys(V);
    expect(keys.length).toBe(2);
    expect(V[keys[0]]).toBe(REWARD);
    expect(V[keys[1]]).toBe(REWARD);
  })

})