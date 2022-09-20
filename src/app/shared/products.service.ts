import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Product[]= new Array<Product>();
  productSelected:any[] = [];
  
  constructor() { }
  getAll(){
    return this.products;
  }
  get(id:number){
   return this.products[id];
  }
  getIdNumber(){
    if(this.products.length ==0){
      return 1;
    }else{
      var lastId = this.products[this.products.length -1].id;
      return lastId +1;
    }
  }
  add(product:Product){
   let newLength =this.products.push(product);
   let index = newLength-1;
   return index;
  }
  delete(id:any){
    var index = this.products.findIndex(id);
    if(index){
      this.products.splice(index,1)
    }
    
   }

   selectItem(id:any){
    this.productSelected.push(id);
    console.log("productSElected : ",this.productSelected);
   }

   unSelectItem(id:any){
    var index = this.productSelected.indexOf(id);
    console.log("index  : ",index)
    if(index>=0){
      this.productSelected.splice(index,1);
    }
  }

  deleteSelected(){
    this.productSelected.forEach((ele)=>{
      this.removeTheOneWithId(ele);
    });
    this.productSelected = [];
  }

  removeTheOneWithId(id:number){
    this.products.forEach((ele)=>{
      if(ele.id == id){
        var index = this.products.indexOf(ele);
        if(index>=0){
          this.products.splice(index,1);
        }
      }
    })
  }
}
