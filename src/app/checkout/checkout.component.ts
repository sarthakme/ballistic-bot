import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    email: string = '';
    mobile: number | null = null;
    card: number | null = null;
    empty: boolean = true;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        if (this.cartService.getCart().length != 0) this.empty = false;
    }

    onSubmit(): void {
        alert('Your order has been placed!');
        this.cartService.clear();
        this.email = '';
        this.mobile = null;
        this.card = null;
    }
}
