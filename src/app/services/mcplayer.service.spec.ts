import { TestBed } from '@angular/core/testing';

import { MCPlayerService } from './mcplayer.service';

describe('MCPlayerService', () => {
  let service: MCPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
