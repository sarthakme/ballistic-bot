import { CartItem } from './cartitem';

export interface Compound {
    cartItem: CartItem;
    newAmount: number;
}
