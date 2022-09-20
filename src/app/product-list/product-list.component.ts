import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = new Array<Product>();

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAll();
  }

  deleteSelected(){
    console.log("deleteSelected");
    this.productsService.deleteSelected();
    this.products = this.productsService.getAll();
  }
}


