import { Component } from '@angular/core';

interface Product {
  sno:string,
  name:string,
  image:string,
  quantity:number,
  price:number
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {


  public products:Product[] = [
    {
      sno: 'AA101',
      name: 'Mi Watch',
      image: 'data:image/jpeg;base64,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',
      price: 1500,
      quantity:2
    },
    {
      sno: 'AA102',
      name: 'Apple Watch',
      image: 'https://www.bing.com/th?id=OPAC.KaFGyE%2bmb6lypw474C474&o=5&pid=21.1&w=148&h=198&rs=1&qlt=100&dpr=1&bw=6&bc=FFFFFF',
      price: 1800,
      quantity:2
    },
    {
      sno: 'AA103',
      name: 'Redmi Watch',
      image: 'https://www.bing.com/th?id=OPAC.rQRoQ3x59N%2b4WA474C474&o=5&pid=21.1&w=148&h=198&rs=1&qlt=100&dpr=1&bw=6&bc=FFFFFF',
      price: 1400,
      quantity:1
    },
    {
      sno: 'AA104',
      name: 'Oppo Watch',
      image: 'https://www.bing.com/th?id=OPAC.KaFGyE%2bmb6lypw474C474&o=5&pid=21.1&w=148&h=198&rs=1&qlt=100&dpr=1&bw=6&bc=FFFFFF',
      price: 1700,
      quantity:2
    }
  ]

  public increment(productId:string):void {
    this.products = this.products.map((p:Product)=>{
      if(p.sno === productId) {
        return {
          ...p,
          quantity:p.quantity+1
          
        }
      }
      return p;
    })
  }

  public decrement(productId:string):void {
    this.products = this.products.map((p:Product)=>{
      if(p.sno === productId) {
        return {
          ...p,
          quantity:p.quantity-1 > 0 ? p.quantity-1 : 1
        }
      }
      return p;
    })
  }

  public calculateGrandTotal():number {
    let total:number=0;
    for(let product of this.products) {
      total += (product.quantity * product.price);
    }

    return total;
  }

  
}
