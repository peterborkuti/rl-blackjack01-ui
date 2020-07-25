import { Injectable } from '@angular/core';
import { Player } from '../interfaces/player';
import { GamePlayer } from './gameplayer';

@Injectable({
  providedIn: 'root'
})
export class GamePlayerFactoryService {

  constructor() { }

  createGamePlayer(player: Player): GamePlayer {
    return new GamePlayer(player);
  }
}
