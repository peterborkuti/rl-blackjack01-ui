import { FirstVisitMCPredictionService } from './first-visit-mcprediction.service';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { SAR } from '../classes/sar';

describe('FirstVisitMCPredictionService - getAction', () => {
  let service: FirstVisitMCPredictionService;

  it('should get HIT nothing learned', () => {
    service = new FirstVisitMCPredictionService();
    expect(service.getAction(new State())).toBe(Action.HIT);

    service = new FirstVisitMCPredictionService();
    expect(service.getAction(new State())).toBe(Action.HIT);
  });

  it('should get STICK if only HIT was learned', () => {
    service = new FirstVisitMCPredictionService();
    const state = new State(10, false, 0);

    service.startEpisode();
    service.addStep(state, Action.HIT);
    service.learnFromEpisode(1);

    expect(service.getAction(state)).toBe(Action.STICK);
  });

  it('should get HIT if only STICK was learned', () => {
    service = new FirstVisitMCPredictionService();
    const state = new State(10, false, 0);

    service.startEpisode();
    service.addStep(state, Action.STICK);
    service.learnFromEpisode(1);

    expect(service.getAction(state)).toBe(Action.HIT);
  });

  it('should get HIT if both were learned, but HIT value > STICK value', () => {
    service = new FirstVisitMCPredictionService();
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
    service = new FirstVisitMCPredictionService();
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
    service = new FirstVisitMCPredictionService();
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
    service = new FirstVisitMCPredictionService();
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

  it("After 2 step long success episode V should contain 2 elements with reward", () => {
    service = new FirstVisitMCPredictionService();
    const state1 = new State(10, false, 0);
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

describe('FirstVisitMCPredictionService - firstVisit', () => {
  let service: FirstVisitMCPredictionService;

  it("firstStep should be in firstVisit - stick", () => {
    service = new FirstVisitMCPredictionService();
    const state = new State(10, false, 0);
 
    service.startEpisode();
    service.addStep(state, Action.STICK);

    expect(service.firstVisit(state.getKey(Action.STICK), 0)).toBeTrue();
    expect(service.firstVisit(state.getKey(Action.STICK), 1)).toBeFalse();
  })

  it("firstStep should be in firstVisit - hist", () => {
    service = new FirstVisitMCPredictionService();
    const state = new State(10, false, 0);
 
    service.startEpisode();
    service.addStep(state, Action.HIT);

    expect(service.firstVisit(state.getKey(Action.HIT), 0)).toBeTrue();
    expect(service.firstVisit(state.getKey(Action.HIT), 1)).toBeFalse();
  })

  it("two different steps should be in firstVisit", () => {
    service = new FirstVisitMCPredictionService();
    const state1 = new State(10, false, 0);
    const state2 = new State(11, false, 0);
 
    service.startEpisode();
    service.addStep(state1, Action.HIT);
    service.addStep(state2, Action.STICK);

    expect(service.firstVisit(state1.getKey(Action.HIT), 0)).toBeTrue();
    expect(service.firstVisit(state2.getKey(Action.STICK), 1)).toBeTrue();
    expect(service.firstVisit(state1.getKey(Action.STICK), 0)).toBeFalse();
    expect(service.firstVisit(state2.getKey(Action.HIT), 1)).toBeFalse();
  })
})

describe('FirstVisitMCPredictionService - getEpisode', () => {
  let service: FirstVisitMCPredictionService;

  it("episode should stored well", () => {
    service = new FirstVisitMCPredictionService();
    const state1 = new State(10, false, 5);
    const state2 = new State(12, false, 5);
    const state3 = new State(14, false, 5);

    service.startEpisode();
    service.addStep(state1, Action.HIT);
    service.addStep(state2, Action.HIT);
    service.addStep(state3, Action.HIT);

    const episode = service.getEpisode();

    expect(episode.length).toBe(3);
    expect(episode[0]).toEqual(new SAR(state1, Action.HIT));
    expect(episode[1]).toEqual(new SAR(state2, Action.HIT));
    expect(episode[2]).toEqual(new SAR(state3, Action.HIT));
  })


  it("state in episode should be cloned", () => {
      service = new FirstVisitMCPredictionService();
      const originalState = new State(10, false, 5);
      const state = new State(originalState.sum, originalState.usableAce, originalState.dealerCard);
  
      service.startEpisode();
      service.addStep(state, Action.HIT);

      state.sum = 20;
  
      const episode = service.getEpisode();
  
      expect(episode[0]).toEqual(new SAR(originalState, Action.HIT));
  })
})