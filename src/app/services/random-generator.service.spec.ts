import { TestBed } from '@angular/core/testing';

import { RandomGeneratorService } from './random-generator.service';

describe('RandomGeneratorService', () => {
  let service: RandomGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should give a number between 0 and 1', () => {
    const n = service.getRandom();
    expect(n).toBeGreaterThanOrEqual(0);
    expect(n).toBeLessThan(1);
  })

  it('should give a number between 0 and 5', () => {
    const n = service.getRandom(5);
    expect(n).toBeGreaterThanOrEqual(0);
    expect(n).toBeLessThan(5);
  })

  it('should give a number between 3 and 5', () => {
    const n = service.getRandom(3, 5);
    expect(n).toBeGreaterThanOrEqual(3);
    expect(n).toBeLessThan(5);
  })
});
