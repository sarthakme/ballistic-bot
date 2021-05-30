import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { CartItem } from 'src/models/cartitem';
import { JsonService } from '../services/json.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
    productList: Product[] = [];
    details: boolean = false;
    id: number = 0;

    constructor(private json: JsonService) {}

    ngOnInit(): void {
        this.json.getItems().subscribe((data: Product[]) => {
            this.productList = data;
        });
    }

    showDetails(product: Product): void {
        this.id = product.id;
        this.details = true;
    }

    invert(): void {
        this.details = false;
    }
}
