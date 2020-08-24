import { Action } from '../enums/action.enum';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

export class State {
    public readonly SEPARATOR = '-';
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
            actionStr = this.SEPARATOR + ((action === Action.HIT) ? 'HIT':'STICK');
        }

        return this.sum + this.SEPARATOR + this.usableAce + this.SEPARATOR + this.dealerCard + actionStr;
    }

    splitKey(key: string): {sum: number, usableAce: boolean, dealerCard: number, action: Action} {
        const splitedKey = {sum: 0, usableAce: false, dealerCard: 0, action: Action.STICK};
        const parts = key.split(this.SEPARATOR);
        splitedKey.sum = +parts[0];
        splitedKey.usableAce = (parts[1] === 'true');
        splitedKey.dealerCard = +parts[2];
        splitedKey.action = (parts[3] === 'HIT') ? Action.HIT : Action.STICK;

        return splitedKey;
    }
}
