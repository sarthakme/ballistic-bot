import { Injectable } from '@angular/core';
import { CartItem } from 'src/models/cartitem';

@Injectable({
    providedIn: 'root',
})
export class CartService {
    cart: CartItem[] = [];

    constructor() {}

    addToCart(cartItem: CartItem): void {
        //If an item is lready present in the cart, only the amount be added
        for (let i of this.cart) {
            if (i.product.id == cartItem.product.id) {
                i.amount += cartItem.amount;
                return;
            }
        }
        this.cart.push({
            product: cartItem.product,
            amount: 0,
        });
        /*Simply using push here was not working because of the last line of code in submitForm function of the product component.
		That line resets the value of the select tag after the user has selected the amount and added the item to their cart.
        The anomaly can be seen when the cartItem object is logged. It inexplicably shows two different values for an attribute.*/
        this.cart[this.cart.length - 1].amount += cartItem.amount;
    }

    getCart(): CartItem[] {
        return this.cart;
    }

    setAmount(cartItem: CartItem, newAmount: number): void {
        //This function is invoked from the cart to directly change the amount of an item.
        for (let i of this.cart) {
            if (i.product.id === cartItem.product.id) {
                i.amount = Number(newAmount);
                console.log(this.cart);
                return;
            }
        }
    }

    removeItem(cartItem: CartItem): void {
        for (let i of this.cart) {
            if (i.product.id === cartItem.product.id) {
                this.cart.splice(this.cart.indexOf(i), 1);
            }
        }
        console.log(this.cart);
    }

    clear(): void {
        //This function is called after the user submits the checkout form.
        this.cart = [];
    }
}
