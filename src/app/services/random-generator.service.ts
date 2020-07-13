import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomGeneratorService {

   /**
   * getRandom(max) - random number between 0 and max
   * getRandom() - random number between 0 and 1
   * getRandom(min, max) - random number between min and max
   * @param limits
   */

  public getRandom(...limits: number[]): number {
    if (!limits || limits.length === 0) {
      return Math.random();
    }

    if (limits.length === 1) {
      return Math.random() * limits[0];
    }

    return Math.random() * (limits[1] - limits[0]) + limits[0];
  }
}
