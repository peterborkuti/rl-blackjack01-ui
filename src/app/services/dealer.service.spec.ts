import { TestBed } from '@angular/core/testing';

import { DealerService } from './dealer.service';
import { Player } from '../interfaces/player';
import { State } from '../classes/state';
import { Action } from '../enums/action.enum';
import { GamePlayer } from './gameplayer';
import { GamePlayerFactoryService } from './game-player-factory.service';

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

xdescribe('DealerService - checkNaturals', () => {
  let service: DealerService;
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
      providers: [{provide: GamePlayerFactoryService, useValue: gamePlayerFactory}]
    });
    service = TestBed.inject(DealerService);
  });

  const addTwoPlayers = () => {
    service.addPlayer(new MockPlayer());
    service.addPlayer(new MockPlayer());

    gamePlayers[0].addCard(21); // 21 in hand
    gamePlayers[1].addCard(20); // not 21 in hand
  }

  it('deletes players with 21', () => {
    addTwoPlayers();
    const players = service.checkNaturals(21);

    expect(players.length).toBe(1);
    expect(players[1].getState().sum).toBe(20);
  });

  it('rewards players in hand 21 with 1 if dealers sum < 21', () => {
    addTwoPlayers();
    gamePlayers.forEach(gp => spyOn(gp, 'learn'));
    const players = service.checkNaturals(20);

    expect(gamePlayers[0].learn).toHaveBeenCalledWith(1);
    expect(gamePlayers[1].learn).not.toHaveBeenCalled();
  });
  it('rewards players in hand 21 with 0 if dealers sum == 21', () => {
    addTwoPlayers();
    gamePlayers.forEach(gp => spyOn(gp, 'learn'));
    const players = service.checkNaturals(21);

    expect(gamePlayers[0].learn).toHaveBeenCalledWith(0);
    expect(gamePlayers[1].learn).not.toHaveBeenCalled();
  });
});
