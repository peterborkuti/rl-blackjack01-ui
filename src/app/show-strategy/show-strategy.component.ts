import { Component, OnInit, Input } from '@angular/core';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';

class Cell {
  content: string;
  probability: number;
  header = false;
  style: string;

  constructor(content: any, header = true, probability = 0) {
    this.content = '' + content;
    this.header = header;
    this.probability = probability;
    this.style = "";
    if (!header && this.content !== '?') {
      this.style = this.getStyle(probability);
    }
  }

  getStyle(probability: number): string {
    const colorNum = 255-Math.floor(Math.abs(probability) * 255);
    const c = ('0' + colorNum.toString(16)).substr(-2);

    let color = '00' + c + '00';
    if (probability < 0) {
      color = c + '0000';
    }

    return "background-color:#" + color + ((Math.abs(probability) > 0.25) ? ";color: white" : "");
  }
}

@Component({
  selector: 'show-strategy',
  templateUrl: './show-strategy.component.html',
  styleUrls: ['./show-strategy.component.css']
})
export class ShowStrategyComponent implements OnInit {
  rowsUsableAce: Cell[][] = [[]];
  rowsNoUsableAce: Cell[][] = [[]];

  @Input()
  set V(v: {}) {
    this.rowsNoUsableAce = this.getRowsAceInHand(v, false);
    this.rowsUsableAce = this.getRowsAceInHand(v, true);
  }

  constructor() { }

  getRowsAceInHand(V:  {[key: string]: number}, usableAce: boolean): Cell[][] {
    let rows = [" 23456789TA".split('').map(c => new Cell(c))];

    for (let hand=2; hand < 22; hand++) {
      let row = [new Cell(hand)];
      for (let dealerCard=2; dealerCard <12; dealerCard++) {
        const s = new State(hand, usableAce, dealerCard);
        const pHIT = V[s.getKey(Action.HIT)];
        const pSTICK = V[s.getKey(Action.STICK)];
        let choose = '?';
        let probability = 0;
        if (pHIT !== undefined && pSTICK !== undefined) {
          choose = (pHIT > pSTICK) ? 'H' : 'S';
          probability = Math.max(pHIT, pSTICK);
        }
        row.push(new Cell(choose, false, probability));
      }
      rows.push(row);
    }

    return rows;
  }

  ngOnInit(): void {
  }

}


