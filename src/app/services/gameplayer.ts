import { Player } from '../interfaces/player';
import { Action } from '../enums/action.enum';
import { State } from '../classes/state';

/**
 * An Ace in hand can be counted as 1 or 11
 * whichever is better
 * There would be many aces in hand, but only the last one
 * can be decidable as 1 or 11, because the previous aces
 * should be counted as 1 to not bust
 * (11 + 11 = 22, so the previous ace must be 1)
 */
export class GamePlayer {
    private state = new State(0, false, 0);

    constructor(private player: Player){
        this.player.prepareForANewGame();
    };

    getState(): State {
        return this.state;
    }

    addCard(card: number) {
        let summa = this.state.sum + card;

        // maybe a previous card was ace
        summa = this.checkBustWithAceInHand(summa);

        if (card == 11) {
            this.state.usableAce = true;
            summa = this.checkBustWithAceInHand(summa);
        }

        this.state.sum = summa;
    }

    play(dealerCard: number): Action {
        this.state.dealerCard = dealerCard;
        return this.player.play(this.state);
    }

    private checkBustWithAceInHand(summa): number {
        if (summa > 21 && this.state.usableAce) {
            summa -= 10;
            this.state.usableAce = false;
        }

        return summa;
    }

    learn(reward: number) {
        this.player.episodeDone(
            this.state, reward);
    }

    getReward(dealerSum): number {
        if (this.state.sum > 21) {
          return -1;
        }
    
        if (dealerSum > 21) {
          return 1;
        }
    
        const diffPlayer = 21 - this.state.sum;
        const diffDealer = 21 - dealerSum;
    
        if (diffDealer == diffPlayer) {
          return 0;
        }
    
        if (diffPlayer < diffDealer) {
          return 1;
        }
    
        return -1;
      }

}