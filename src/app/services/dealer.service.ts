import { Injectable } from '@angular/core';
import { Action } from '../enums/action.enum';
import { Player } from '../interfaces/player';
import { CardService } from './card.service';
import { GamePlayer } from './gameplayer';
import { Dealer } from './dealer';


@Injectable({
  providedIn: 'root'
})
export class DealerService {
  private players: GamePlayer[];
  private rawPlayers: Player[];
  private rawPlayersRewards: number[];
  private numOfGames: number;

  constructor(private cardService: CardService) {}

  clearPlayers() {
    this.rawPlayers = [];
    this.rawPlayersRewards = [];
    this.numOfGames = 0;
  }

  getScores(): {rewards: number[], numOfGames: number} {
    return {rewards: this.rawPlayersRewards, numOfGames: this.numOfGames};
  }

  playWithAllPlayers() {
    const dealer = new GamePlayer(new Dealer());
    this.players = this.rawPlayers.map(player => new GamePlayer(player));
    this.numOfGames++;

    this.players.forEach(player => {
      player.addCard(this.cardService.getCard());
      player.addCard(this.cardService.getCard());
    });

    dealer.addCard(this.cardService.getCard());

    let dealerSum = dealer.getSum();

    this.checkNaturals(dealerSum);

    if (this.players.length == 0) {
      return;
    }

    this.players.forEach((player) => {
      this.playWithOnePlayer(player, dealerSum);
    })

    this.playWithOnePlayer(dealer, dealerSum);

    dealerSum = dealer.getSum();

    this.players.forEach((player,index) => {
      const reward = player.getReward(dealerSum);
      player.learn(reward, dealerSum);
      this.rawPlayersRewards[index]+=reward;
    })
  }

  checkNaturals(dealerSum: number): void {
    this.players.filter(gp => gp.getSum() == 21)
      .forEach(gp => gp.learn(gp.getReward(dealerSum), dealerSum));
    this.players = this.players.filter(gp => gp.getSum() != 21);
  }

  playWithOnePlayer(player: GamePlayer, dealerSum: number) {
    let action = Action.HIT;
    while(action === Action.HIT && player.getSum() < 21) {
      action = player.play(dealerSum);
    }
  }

  addPlayer(player: Player) {
    this.rawPlayers.push(player);
    this.rawPlayersRewards.push(0);
  }
}
