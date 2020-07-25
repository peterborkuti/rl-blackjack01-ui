import { TestBed } from '@angular/core/testing';

import { GamePlayerFactoryService } from './game-player-factory.service';

describe('GamePlayerFactoryService', () => {
  let service: GamePlayerFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamePlayerFactoryService);
  });

  it('should be created', () => {
    service = new GamePlayerFactoryService();
    expect(service).toBeTruthy();
  });
});
