import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/models/product';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class JsonService {
    constructor(private http: HttpClient) {}

    getItems(): Observable<Product[]> {
        return this.http.get<Product[]>('/assets/data.json');
    }
}
