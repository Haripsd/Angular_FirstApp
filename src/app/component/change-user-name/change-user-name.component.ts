import { Component } from '@angular/core';

@Component({
  selector: 'app-change-user-name',
  templateUrl: './change-user-name.component.html',
  styleUrl: './change-user-name.component.css'
})
export class ChangeUserNameComponent {

  public username:string='';

  public userName:string='';

  public updateInput(event:any):void {
    this.username=event.target.value;
  }
}
