import { TestBed } from '@angular/core/testing';

import { PrintBrainService } from './print-brain.service';

describe('PrintBrainService', () => {
  let service: PrintBrainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintBrainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
