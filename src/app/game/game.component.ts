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
    this.dealerService.addPlayer(new RandomPlayer(this.random));
    this.dealerService.addPlayer(this.mcPlayer);

    this.playersName = ['Random', 'MC'];

  }

  play100Games(): void {
    for (let i = 0; i < 100; i++) {
      setTimeout(() => this.dealerService.playWithAllPlayers(), 0);
    }

    const scores = this.dealerService.getScores();
    this.numOfGames = scores.numOfGames;
    this.dealersWin =scores.dealerReward;
    this.playersWin = scores.rewards;

  }

}
