import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/models/cartitem';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
    @Input() cartItem: CartItem;
    //Used to change the amount of an item from the cart itself
    @Output() eventEmitter: EventEmitter<{
        cartItem: CartItem;
        newAmount: number;
    }> = new EventEmitter();
    //Used to update the total when an item is removed
    @Output() nullEmitter: EventEmitter<null> = new EventEmitter();
    arr = new Array(12);

    constructor(private cartService: CartService) {
        this.cartItem = {
            product: {
                id: 0,
                name: '',
                price: 0,
                url: '',
                description: '',
            },
            amount: 0,
        };
    }

    ngOnInit(): void {}

    setAmount(cartItem: CartItem, newAmount: number): void {
        this.eventEmitter.emit({
            cartItem,
            newAmount,
        });
    }

    removeItem(cartItem: CartItem): void {
        let con = confirm(
            'Are you sure you want to remove this item from your cart'
        );
        if (con) {
            this.cartService.removeItem(cartItem);
        }
        this.nullEmitter.emit(null);
    }
}
