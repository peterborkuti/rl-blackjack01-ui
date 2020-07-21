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
  private numOfGames = 0;
  private dealerReward = 0;

  constructor(private cardService: CardService) {
    this.clearPlayers();
  }

  clearPlayers() {
    this.rawPlayers = [];
    this.rawPlayersRewards = [];
    this.numOfGames = 0;
    this.dealerReward = 0;
  }

  getScores(): {rewards: number[], numOfGames: number, dealerReward: number} {
    return {rewards: this.rawPlayersRewards, numOfGames: this.numOfGames, dealerReward: this.dealerReward};
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

    let dealerSum = dealer.getState().sum;

    this.checkNaturals(dealerSum);

    if (this.players.length == 0) {
      return;
    }

    this.players.forEach((player) => {
      this.playWithOnePlayer(player, dealerSum);
    })

    this.playWithOnePlayer(dealer, dealerSum);

    dealerSum = dealer.getState().sum;

    this.players.forEach((player,index) => {
      const reward = player.getReward(dealerSum);
      player.learn(reward);
      this.rawPlayersRewards[index]+=reward;
      this.dealerReward += -reward;

    })
  }

  checkNaturals(dealerSum: number): void {
    this.players.filter(gp => gp.getState().sum == 21)
      .forEach(gp => gp.learn(gp.getReward(dealerSum)));
    this.players = this.players.filter(gp => gp.getState().sum != 21);
  }

  playWithOnePlayer(player: GamePlayer, dealerSum: number) {
    let action = Action.HIT;

    while(action === Action.HIT && player.getState().sum < 21) {
      action = player.play(dealerSum);
      if (action == Action.HIT) {
        player.addCard(this.cardService.getCard());
      }
    }
  }

  addPlayer(player: Player) {
    this.rawPlayers.push(player);
    this.rawPlayersRewards.push(0);
  }
}
