import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../shared/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() suk:string='';
  @Input() name:string='';
  @Input() price:string='';
  @Input() size:string='';
  @Input() id:number = 0;
  value:boolean = false;
 deleteArray:any[]=[];

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
  }


  onClick($event:any){
    console.log("clicked : ",$event," clickedId : ",this.id);
    if($event){
      this.service.selectItem(this.id);
    }else{
      this.service.unSelectItem(this.id);
    }
    }
}


