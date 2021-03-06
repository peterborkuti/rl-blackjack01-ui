import { TestBed } from '@angular/core/testing';

import { DealerService } from './dealer.service';
import { Player } from '../interfaces/player';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { GamePlayer } from './gameplayer';
import { GamePlayerFactoryService } from './game-player-factory.service';
import { CardService } from './card.service';
import { polygonArea } from 'd3';

class MockPlayer extends Player {
  play(state: State): Action {
    return Action.HIT;
  }
}

describe('DealerService', () => {
  let service: DealerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DealerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('playWithOnePlayer', () => {
  let service: DealerService;
  let cardInDeck: number;
  const cardService = <CardService> {
    getCard: () => cardInDeck
  }

  const stickBelow15Player = <Player> {
    play(state: State): Action {
      return (state.sum < 15) ? Action.HIT : Action.STICK;
    },
    prepareForANewGame(): void {}
  }

  const gamePlayers: GamePlayer[] = [];

  const gamePlayerFactory = <GamePlayerFactoryService> {
    createGamePlayer: (player: Player) => {
      const gp = new GamePlayer(player);
      gamePlayers.push(gp);

      return gp;
    }
  }

  beforeEach(() => {
    gamePlayers.length = 0;

    TestBed.configureTestingModule({
      providers: [
        {provide: GamePlayerFactoryService, useValue: gamePlayerFactory},
        {provide: CardService, useValue: cardService}
      ]
    });
    service = TestBed.inject(DealerService);
  });

  it('should stop above 21', () => {
    cardInDeck = 10;
    const dealerCardAny = 10;
    service.addPlayer(new MockPlayer());
    service.initNewGame();

    service.playWithOnePlayer(gamePlayers[0], dealerCardAny);

    expect(gamePlayers[0].getState().sum).toBe(30);
  })

  it('should stop above 21', () => {
    cardInDeck = 1;
    const dealerCardAny = 10;
    service.addPlayer(new MockPlayer());
    service.initNewGame();

    service.playWithOnePlayer(gamePlayers[0], dealerCardAny);

    expect(gamePlayers[0].getState().sum).toBe(22);
  })

  it('should stop below 21 when player STICKs', () => {
    cardInDeck = 1;
    const dealerCardAny = 10;
    service.addPlayer(stickBelow15Player);
    service.initNewGame();

    service.playWithOnePlayer(gamePlayers[0], dealerCardAny);

    expect(gamePlayers[0].getState().sum).toBe(15);
  })
})

describe('rewardPlayers', () => {
  let service: DealerService;
  let cardInDeck: number;
  const cardService = <CardService> {
    getCard: () => cardInDeck
  }

  const hitBelow20Player = <Player> {
    play(state: State): Action {
      return (state.sum < 20) ? Action.HIT : Action.STICK;
    },
    prepareForANewGame(): void {},
    episodeDone(state, reward): void {}
  }

  const gamePlayers: GamePlayer[] = [];

  const gamePlayerFactory = <GamePlayerFactoryService> {
    createGamePlayer: (player: Player) => {
      const gp = new GamePlayer(player);
      gamePlayers.push(gp);

      return gp;
    }
  }

  beforeEach(() => {
    gamePlayers.length = 0;

    TestBed.configureTestingModule({
      providers: [
        {provide: GamePlayerFactoryService, useValue: gamePlayerFactory},
        {provide: CardService, useValue: cardService}
      ]
    });
    service = TestBed.inject(DealerService);
  });

  it('should reward winner with 1', () => {
    cardInDeck = 1;
    const dealerCardAny = 15;
    service.addPlayer(hitBelow20Player);
    service.initNewGame();

    service.playWithOnePlayer(gamePlayers[0], dealerCardAny);

    spyOn(hitBelow20Player, 'episodeDone');
    service.rewardPlayers(19);

    expect(hitBelow20Player.episodeDone).toHaveBeenCalledWith(new State(20, false, dealerCardAny), 1);
  })

  it('should reward looser with -1', () => {
    cardInDeck = 1;
    const dealerCardAny = 15;
    service.addPlayer(hitBelow20Player);
    service.initNewGame();

    service.playWithOnePlayer(gamePlayers[0], dealerCardAny);

    spyOn(hitBelow20Player, 'episodeDone');
    service.rewardPlayers(21);

    expect(hitBelow20Player.episodeDone).toHaveBeenCalledWith(new State(20, false, dealerCardAny), -1);
  })


  it('should reward draw with 0', () => {
    cardInDeck = 1;
    const dealerCardAny = 15;
    service.addPlayer(hitBelow20Player);
    service.initNewGame();

    service.playWithOnePlayer(gamePlayers[0], dealerCardAny);

    spyOn(hitBelow20Player, 'episodeDone');
    service.rewardPlayers(20);

    expect(hitBelow20Player.episodeDone).toHaveBeenCalledWith(new State(20, false, dealerCardAny), 0);
  })

})

describe('giveTwoCardToEveryPlayer, getscores', () => {
  let service: DealerService;
  let cardInDeck: number;
  const cardService = <CardService> {
    getCard: () => cardInDeck
  }

  const hitBelow20Player = <Player> {
    play(state: State): Action {
      return (state.sum < 20) ? Action.HIT : Action.STICK;
    },
    prepareForANewGame(): void {},
    episodeDone(state, reward): void {}
  }

  const gamePlayers: GamePlayer[] = [];

  const gamePlayerFactory = <GamePlayerFactoryService> {
    createGamePlayer: (player: Player) => {
      const gp = new GamePlayer(player);
      gamePlayers.push(gp);

      return gp;
    }
  }

  beforeEach(() => {
    gamePlayers.length = 0;

    TestBed.configureTestingModule({
      providers: [
        {provide: GamePlayerFactoryService, useValue: gamePlayerFactory},
        {provide: CardService, useValue: cardService}
      ]
    });
    service = TestBed.inject(DealerService);
  });

  it('giveTwoCardsToEveryPlayer should give two cards', () => {
    cardInDeck = 1;

    service.addPlayer(hitBelow20Player);
    service.initNewGame();

    spyOn(gamePlayers[0], 'addCard');

    service.giveTwoCardToEveryPlayer();

    expect(gamePlayers[0].addCard).toHaveBeenCalledTimes(2);
    expect(gamePlayers[0].addCard).toHaveBeenCalledWith(cardInDeck);
  })

  it('getScores should give valid scores', () => {
    cardInDeck = 1;

    service.addPlayer(hitBelow20Player);
    service.playWithAllPlayers(true);

    //Because every card in the deck is '1'
    //and dealers must stop at 17
    //and hitBelow20Player hits below 20

    //dealer has sum 17
    //player has sum 20 

    const scores = service.getScores();

    expect(scores.numOfGames).toBe(1);
    expect(scores.dealerReward).toBe(-1);
    expect(scores.rewards[0]).toBe(1);
  })

  it('getScores-reward should be unmutable', () => {
    cardInDeck = 1;

    const scores0 = service.getScores();

    service.addPlayer(hitBelow20Player);
    service.playWithAllPlayers(true);

    const scores1 = service.getScores();

    expect(scores0.rewards).not.toEqual(scores1.rewards);
  })

})