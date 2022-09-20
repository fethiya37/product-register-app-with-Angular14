import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../shared/product.model';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product:Product = {
    name:'',
    suk:'',
    price:'',
    size:'',
    id:0,
  };
  uniqueProduct:any[]=[];

  constructor(private productsService:ProductsService , private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.product = new Product();
  }
  onSubmit(form: NgForm){
      var product:Product = form.value;
      
      product.id = this.productsService.getIdNumber();
      this.productsService.add(form.value);
      this.router.navigateByUrl('/');
      }
      cancel(){
        this.router.navigateByUrl('/'); 
      }

}


