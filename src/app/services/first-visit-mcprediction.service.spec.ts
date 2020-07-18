import { TestBed } from '@angular/core/testing';

import { FirstVisitMCPredictionService } from './first-visit-mcprediction.service';

describe('FirstVisitMCPredictionService', () => {
  let service: FirstVisitMCPredictionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirstVisitMCPredictionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
