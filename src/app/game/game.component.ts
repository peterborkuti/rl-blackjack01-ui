import { Component, OnInit} from '@angular/core';
import { DealerService, Score } from '../services/dealer.service';
import { MCPlayerService } from '../services/mcplayer.service';
import { PrintBrainService } from '../services/print-brain.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public numOfLearningGames = 0;
  public numOfPlayedGames = 0;
  public dealersWin = 0;
  public playersWin = [];
  public playersName = [];
  public playersStrategy = {};
  public scores0 : Score = <Score>{};

  data = {};

  constructor(
    private dealerService: DealerService,
    private mcPlayer: MCPlayerService,
    private printBrain: PrintBrainService) { }

  ngOnInit(): void {
    this.dealerService.addPlayer(this.mcPlayer);

    this.playersName = ['Monte Carlo'];
  }

  learn() {
    this.numOfPlayedGames = 0;
    this.dealersWin = 0;
    this.playersWin = Array(this.playersName.length).fill(0);

    for (let i = 0; i < 10000; i++) {
      setTimeout(() => {
        this.dealerService.playWithAllPlayers(true)
        this.numOfLearningGames++;
        if (i % 100 == 0) this.playersStrategy = this.mcPlayer.getV();
      }, 0);
    }

    setTimeout(() => {
      this.data = this.mcPlayer.getV();
      this.printBrain.printV(this.data);
      this.scores0 = this.dealerService.getScores();
    }, 0);

     
  }

  play100Games(): void {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => this.dealerService.playWithAllPlayers(false), 0);
    }

    setTimeout(() => {
      const scores1 = this.dealerService.getScores();

      this.numOfPlayedGames += 100;
      this.dealersWin = scores1.dealerReward - this.scores0.dealerReward;
      this.playersWin = scores1.rewards.map((v,i) => v-this.scores0.rewards[i]);
    }, 0);

  }

}
