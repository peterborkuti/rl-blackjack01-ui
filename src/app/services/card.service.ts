import { Injectable } from '@angular/core';
import { RandomGeneratorService } from './random-generator.service';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private randomGenerator: RandomGeneratorService) {}

  public getCard(): number {
    return this.randomGenerator.getRandom(2,11);
  }


}
