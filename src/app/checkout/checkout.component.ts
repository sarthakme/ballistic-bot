import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
    fname: string = '';
    add: string = '';
    card: number | null = null;
    empty: boolean = true;
    done: boolean = false;

    constructor(private cartService: CartService) {}

    ngOnInit(): void {
        if (this.cartService.getCart().length != 0) this.empty = false;
    }

    onSubmit(): void {
        this.cartService.clear();
        this.fname = '';
        this.add = '';
        this.card = null;
        this.done = true;
    }
}
