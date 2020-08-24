import { Player } from "../interfaces/player"
import { Action } from '../enums/action.enum'
import { GamePlayer } from './gameplayer';
import { State } from '../classes/state';

class MockPlayer extends Player {
    play(state: State): Action {
        return Action.HIT;
    }
}

describe('gameplayer - getReward', () => {
    let gamePlayer: GamePlayer;

    beforeEach(() => {
        gamePlayer = new GamePlayer(new MockPlayer());
    })
    it('should lose if player busts', () =>{
        gamePlayer.addCard(22);
        expect(gamePlayer.getReward(22)).toBe(-1);
    })
    it('should win if player busts but not player', () =>{
        gamePlayer.addCard(1);
        expect(gamePlayer.getReward(22)).toBe(1);
    })
    it('should win if player is closer to 21', () =>{
        gamePlayer.addCard(2);
        expect(gamePlayer.getReward(1)).toBe(1);
    })
    it('should lose if player is farther from 21', () =>{
        gamePlayer.addCard(1);
        expect(gamePlayer.getReward(2)).toBe(-1);
    })
    it('should draw if equals', () =>{
        gamePlayer.addCard(5);
        expect(gamePlayer.getReward(5)).toBe(0);
    })
})

describe('gameplayer - addCard', () => {
    let gamePlayer: GamePlayer;

    beforeEach(() => {
        gamePlayer = new GamePlayer(new MockPlayer());
    })
    it('should add card', () =>{
        expect(gamePlayer.getState().sum).toBe(0);
        gamePlayer.addCard(1);
        expect(gamePlayer.getState().sum).toBe(1);
        gamePlayer.addCard(2);
        expect(gamePlayer.getState().sum).toBe(3);
    })
    it('should add ace as 1 if busts and no usableAce', () =>{
        gamePlayer.addCard(20);
        expect(gamePlayer.getState().sum).toBe(20);
        gamePlayer.addCard(11);
        expect(gamePlayer.getState().sum).toBe(21);
        expect(gamePlayer.getState().usableAce).toBeFalse();
    })

    it('should add ace as 11 if not busts and usableAce', () =>{
        gamePlayer.addCard(10);
        expect(gamePlayer.getState().sum).toBe(10);
        gamePlayer.addCard(11);
        expect(gamePlayer.getState().sum).toBe(21);
        expect(gamePlayer.getState().usableAce).toBeTrue();
    })
    it('should count two aces as 1 if busts and no usableAce', () =>{
        gamePlayer.addCard(9);
        expect(gamePlayer.getState().sum).toBe(9);
        expect(gamePlayer.getState().usableAce).toBeFalse();

        gamePlayer.addCard(11);
        expect(gamePlayer.getState().sum).toBe(20);
        expect(gamePlayer.getState().usableAce).toBeTrue();

        gamePlayer.addCard(2);
        expect(gamePlayer.getState().sum).toBe(12);
        expect(gamePlayer.getState().usableAce).toBeFalse();

        gamePlayer.addCard(11);
        expect(gamePlayer.getState().sum).toBe(13);
        expect(gamePlayer.getState().usableAce).toBeFalse();
    })
})

describe('GamePlayer - constructor', () => {
    it('should call prepareForANewGame', () => {
        const player = jasmine.createSpyObj(['prepareForANewGame']);

        new GamePlayer(player);

        expect(player.prepareForANewGame).toHaveBeenCalled();
    })
})

describe('GamePlayer - play', () => {
    it('should call play with appropriate parameters', () => {
        const player = jasmine.createSpyObj(['play', 'prepareForANewGame']);
        const ANY_CARD = 2;
        const ANY_DEALERSUM=5;
        const USABLE_ACE=true;

        const gamePlayer = new GamePlayer(player);
        
        gamePlayer.addCard(ANY_CARD);
        gamePlayer.addCard(11); // usable ace

        gamePlayer.play(ANY_DEALERSUM);

        expect(player.play).toHaveBeenCalledWith(
            new State(2+11, USABLE_ACE, ANY_DEALERSUM), true);
    })
})

describe('GamePlayer - learn', () => {
    it('should call episodeDone with appropriate parameters', () => {
        const player = jasmine.createSpyObj(
            ['play', 'episodeDone', 'prepareForANewGame']);
        const ANY_CARD = 2;
        const ANY_DEALERSUM=5;
        const USABLE_ACE=true;
        const ANY_REWARD=-1;

        const gamePlayer = new GamePlayer(player);
        
        gamePlayer.addCard(ANY_CARD);
        gamePlayer.addCard(11); // usable ace

        gamePlayer.play(ANY_DEALERSUM);

        gamePlayer.learn(ANY_REWARD);

        expect(player.episodeDone).toHaveBeenCalledWith(
            new State(2+11, USABLE_ACE, ANY_DEALERSUM), ANY_REWARD);
    })
})