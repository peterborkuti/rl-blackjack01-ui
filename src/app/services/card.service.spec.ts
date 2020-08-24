import { TestBed } from '@angular/core/testing';

import { CardService } from './card.service';
import { RandomGeneratorService } from './random-generator.service';

const randomService: RandomGeneratorService = {
  getRandom: (a, b) => a*100+b
}

describe('DealerService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: RandomGeneratorService, useValue: randomService}]
    });

    service = TestBed.inject(CardService, );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getRandomNumber should called with 2,11 ', () => {
    expect(service.getCard()).toBe(212);
  })
});
