import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products.service';
import { Productos } from './productos';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    productos: Productos[] = [];
  
    constructor(private productsService: ProductsService) { }
  
    ngOnInit(): void {
      this.loadProducts();
    }
  
    loadProducts(): void {
      this.productsService.getProducts().subscribe((response: any) => {
        console.log('Respuesta del API:', response);
        this.productos = response;
        console.log(this.productos);
      });
    }
  
    loadProduct(id: string): void {
      this.productsService.getProduct(id).subscribe((response: any) => {
        this.productos = response;
        console.log(this.productos);
      });
    }
  }
