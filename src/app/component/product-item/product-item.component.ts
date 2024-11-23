import { Component } from '@angular/core';

interface Product {
  sno:string,
  name:string,
  image:string,
  quantity:number,
  price:number
}

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {

  public product:Product = {
    sno: 'AA101',
    name: 'Mi Watch',
    image: 'https://cdn.fcglcdn.com/brainbees/images/products/583x720/18596534a.webp',
    quantity: 2,
    price: 1500 
  }

  public increment() {
    this.product = {
      ...this.product,
      quantity : this.product.quantity+1
    }
    
  }

  public decrement() {
    this.product = {
      ...this.product,
      quantity: this.product.quantity-1 > 0 ? this.product.quantity-1 : 1 
    }
  }
}
