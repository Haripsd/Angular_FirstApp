import { Component } from '@angular/core';

@Component({
  selector: 'app-wish-message',
  templateUrl: './wish-message.component.html',
  styleUrl: './wish-message.component.css'
})
export class WishMessageComponent {

  public message:string='Hello';
  public goodAfternoon:string='Good Afternoon';
  public goodEvening:string='Good Evening';


  public sayGreetings(greeting:string) {
      this.message=greeting;
  }

}
