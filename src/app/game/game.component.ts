import { Component, OnInit } from '@angular/core';
import { DealerService } from '../services/dealer.service';
import { RandomPlayer } from '../services/random-player';
import { RandomGeneratorService } from '../services/random-generator.service';
import { MCPlayerService } from '../services/mcplayer.service';

@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public numOfGames = 0;
  public dealersWin = 0;
  public playersWin = [];
  public playersName = [];
  constructor(
    private dealerService: DealerService,
    private random: RandomGeneratorService,
    private mcPlayer: MCPlayerService) { }

  ngOnInit(): void {
    this.dealerService.addPlayer(this.mcPlayer);

    this.playersName = ['MC'];

  }

  learn() {
    for (let i = 0; i < 10000; i++) {
      setTimeout(() => {
        this.dealerService.playWithAllPlayers()
        this.numOfGames = i;
      }, 0);

    }

  }

  play100Games(): void {
    this.numOfGames = 0;
    this.dealersWin = 0;
    this.playersWin = Array(this.playersName.length).fill(0);

    const scores0 = this.dealerService.getScores();

    for (let i = 0; i < 100; i++) {
      setTimeout(() => this.dealerService.playWithAllPlayers(), 0);

    }

    setTimeout(() => {
      const scores1 = this.dealerService.getScores();

      this.numOfGames = scores1.numOfGames - scores0.numOfGames;
      this.dealersWin = scores1.dealerReward - scores0.dealerReward;
      this.playersWin = scores1.rewards.map((v,i) => v-scores0.rewards[i]);
    }, 0);

  }

}
