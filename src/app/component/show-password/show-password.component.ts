import { Component } from '@angular/core';

@Component({
  selector: 'app-show-password',
  templateUrl: './show-password.component.html',
  styleUrl: './show-password.component.css'
})
export class ShowPasswordComponent {

  public inputType:string='password';

  public showPassword(event:any):void {
    event.target.checked ? this.inputType = 'text' : this.inputType = 'password';
    /*if (event.target.checked) {
      this.inputType = 'text';
    } else {
      this.inputType = 'password';
    } */
  }


}
