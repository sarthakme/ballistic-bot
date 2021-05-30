import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models/product';
import { CartItem } from 'src/models/cartitem';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
    @Input() product: Product;
    //Used to determine which item needs to be expanded
    @Output() eventEmitter: EventEmitter<number> = new EventEmitter();
    cartItem: CartItem;

    arr = new Array(12);

    constructor(private cartService: CartService) {
        this.product = {
            id: 0,
            name: '',
            price: 0,
            url: '',
            description: '',
        };
        this.cartItem = {
            product: this.product,
            amount: 1,
        };
    }

    ngOnInit(): void {
        this.cartItem.product = this.product;
    }

    submitForm(): void {
        console.log(this.cartItem);
        this.cartService.addToCart(this.cartItem);
        console.log(this.cartService.getCart());
        alert('Added to cart');
        this.cartItem.amount = 1;
    }

    showDetails(product: Product): void {
        this.eventEmitter.emit(product.id);
    }
}
