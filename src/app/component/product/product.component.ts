import { Component, Input } from '@angular/core';

interface Product {
  sno:string,
  name:string,
  image:string,
  quantity:number,
  price:number
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input() product:Product | undefined;

}
