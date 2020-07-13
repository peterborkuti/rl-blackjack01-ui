import { Player } from '../interfaces/player';
import { Action } from '../enums/action.enum';

/**
 * An Ace in hand can be counted as 1 or 11
 * whichever is better
 * There would be many aces in hand, but only the last one
 * can be decidable as 1 or 11, because the previous aces
 * should be counted as 1 to not bust
 * (11 + 11 = 22, so the previous ace must be 1)
 */
export class GamePlayer {
    private aceCanBeCountedAsOne = false;
    private sumOfHand = 0;

    constructor(private player: Player){
        this.player.prepareForANewGame();
    };

    getSum(): number {
        return this.sumOfHand;
    }

    getUsableAce(): boolean {
        return this.aceCanBeCountedAsOne;
    }

    addCard(card: number) {
        let summa = this.sumOfHand + card;

        // maybe a previous card was ace
        summa = this.checkBustWithAceInHand(summa);

        if (card == 11) {
            this.aceCanBeCountedAsOne = true;
            summa = this.checkBustWithAceInHand(summa);
        }

        this.sumOfHand = summa;
    }

    play(dealerSum: number): Action {
        return this.player.play(this.sumOfHand, this.aceCanBeCountedAsOne, dealerSum);
    }

    private checkBustWithAceInHand(summa): number {
        if (summa > 21 && this.aceCanBeCountedAsOne) {
            summa -= 10;
            this.aceCanBeCountedAsOne = false;
        }

        return summa;
    }

    learn(reward: number, dealerSum: number) {
        this.player.episodeDone(
            this.sumOfHand, this.aceCanBeCountedAsOne, dealerSum, reward);
    }

    getReward(dealerSum): number {
        if (this.sumOfHand > 21) {
          return -1;
        }
    
        if (dealerSum > 21) {
          return 1;
        }
    
        const diffPlayer = 21 - this.sumOfHand;
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