import { Injectable } from '@angular/core';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';

@Injectable({
  providedIn: 'root'
})
export class PrintBrainService {

  constructor() { }

  public printV(V:  {[key: string]: number}): void {
    this.printAceInHand(V, false);
    this.printAceInHand(V, true);
  }

  printAceInHand(V:  {[key: string]: number}, usableAce: boolean) {
    console.log("Usable ace: " + usableAce);
    console.log("   23456789TA");
    for (let hand=2; hand < 22; hand++) {
      let line = (' ' + hand + "|").substr(-3);;
      for (let dealerCard=2; dealerCard <12; dealerCard++) {
        const s = new State(hand, usableAce, dealerCard);
        const pHIT = V[s.getKey(Action.HIT)];
        const pSTICK = V[s.getKey(Action.STICK)];
        let choose = '?';
        if (pHIT !== undefined && pSTICK !== undefined) {
          choose = (pHIT > pSTICK) ? 'H' : 'S';
        }
        line += choose;
      }
      console.log(line);
    }
    console.log("");
  }
}
