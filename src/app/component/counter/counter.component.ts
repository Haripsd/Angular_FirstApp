import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  public count:number = 0;

  public incrementCount():void {
    this.count = this.count+1;
  }

  public decrementCount():void {
    this.count = this.count > 0 ? this.count - 1 : 0;
  }

}
