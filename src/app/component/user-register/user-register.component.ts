import { Component } from '@angular/core';

interface User{
  name: string;
  email:string;
  password:string;
  designation:string;
  bio:string;
  terms:boolean;
}

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrl: './user-register.component.css'
})
export class UserRegisterComponent {

  public user:User = {
    name: '',
    email: '',
    password:'',
    designation: '',
    bio: '',
    terms: false
  }

  public register():void {
    console.log(this.user);
  }
}
