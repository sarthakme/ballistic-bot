import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/models/cartitem';
import { CartService } from '../services/cart.service';
import { Compound } from 'src/models/compound';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cart: CartItem[] = [];
    notEmpty: boolean = true;
    total: number = 0;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        this.cart = this.cartService.getCart();
        console.log(this.cart);
        if (this.cart.length === 0) this.notEmpty = false;
        else this.notEmpty = true;
        this.total = 0;
        for (let cartItem of this.cart)
            this.total += cartItem.product.price * cartItem.amount;
    }

    setAmount(compoundItem: Compound): void {
        this.cartService.setAmount(
            compoundItem.cartItem,
            compoundItem.newAmount
        );
        this.total = 0;
        for (let cartItem of this.cart)
            this.total += cartItem.product.price * cartItem.amount;
    }

    removeItem(): void {
        this.total = 0;
        for (let cartItem of this.cart)
            this.total += cartItem.product.price * cartItem.amount;
    }
}
