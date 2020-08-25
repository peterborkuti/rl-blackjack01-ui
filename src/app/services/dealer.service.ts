import { Injectable } from '@angular/core';
import { Action } from '../enums/action.enum';
import { Player } from '../interfaces/player';
import { CardService } from './card.service';
import { GamePlayer } from './gameplayer';
import { Dealer } from './dealer';
import { GamePlayerFactoryService } from './game-player-factory.service';

export class Score {
  rewards: number[]; numOfGames: number; dealerReward: number
}

@Injectable({
  providedIn: 'root'
})
export class DealerService {
  private players: GamePlayer[];
  private rawPlayers: Player[];
  private rawPlayersRewards: number[];
  private numOfGames = 0;
  private dealerReward = 0;

  constructor(private cardService: CardService, private gamePlayerFactory: GamePlayerFactoryService) {
    this.clearPlayers();
  }

  clearPlayers() {
    this.rawPlayers = [];
    this.rawPlayersRewards = [];
    this.numOfGames = 0;
    this.dealerReward = 0;
  }

  getScores(): Score {
    return {rewards: this.rawPlayersRewards.map(r => r), numOfGames: this.numOfGames, dealerReward: this.dealerReward};
  }

  playWithAllPlayers(learningGame: boolean) {
    const dealer = this.initNewGame();

    if (this.players.length == 0) {
      return;
    }

    this.giveTwoCardToEveryPlayer();

    dealer.addCard(this.cardService.getCard());
    const dealerSecondCard = this.cardService.getCard();
    dealer.addCard(dealerSecondCard);

    this.players.forEach((player) => {
      this.playWithOnePlayer(player, dealerSecondCard, learningGame);
    })

    this.playWithOnePlayer(dealer, dealerSecondCard, learningGame);

    this.rewardPlayers(dealer.getState().sum);
  }

  initNewGame(): GamePlayer {
    this.players = this.rawPlayers.map(player => this.gamePlayerFactory.createGamePlayer(player));
    this.numOfGames++;

    return this.gamePlayerFactory.createGamePlayer(new Dealer());
  }

  rewardPlayers(dealerSum: number) {
    this.players.forEach((player,index) => {
      const reward = player.getReward(dealerSum);
      player.learn(reward);
      this.rawPlayersRewards[index]+=reward;
      this.dealerReward += -reward;
    })
  }

  giveTwoCardToEveryPlayer() {
    this.players.forEach(player => {
      player.addCard(this.cardService.getCard());
      player.addCard(this.cardService.getCard());
    });
  }

  playWithOnePlayer(player: GamePlayer, dealerOpenCard: number, learningGame = true) {
    let action = Action.HIT;

    while(action === Action.HIT && player.getState().sum <= 21) {
      action = player.play(dealerOpenCard, learningGame);
      if (action === Action.HIT) {
        player.addCard(this.cardService.getCard());
      }
    }
  }

  addPlayer(player: Player) {
    this.rawPlayers.push(player);
    this.rawPlayersRewards.push(0);
  }
}
