import { Component } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrl: './auth-user.component.css'
})
export class AuthUserComponent {

  public isLoggedIn:boolean = false;

  public login() {
    this.isLoggedIn = true;
  }

  public logOut() {
    this.isLoggedIn = false;
  }

}
