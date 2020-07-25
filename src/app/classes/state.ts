import { Action } from '../enums/action.enum';

export class State {
    sum = 0;
    usableAce = false;
    dealerCard = 0;

    constructor(sum: number = 0, usabelAce: boolean = false, dealerCard: number = 0) {
        this.sum = sum;
        this.usableAce = usabelAce;
        this.dealerCard = dealerCard;
    }

    getKey(action?: Action): string {
        let actionStr = '';
        if (action !== undefined) {
            actionStr = '-' + ((action === Action.HIT) ? 'HIT':'STICK');
        }

        return this.sum + '-' + this.usableAce + '-' + this.dealerCard + actionStr;
    }
}
