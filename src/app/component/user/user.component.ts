import { Component } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  public users:User[] = [] as User[];
  public errorMessage:string = '';

  constructor(private userService:UserService) {

  }

  ngOnInit():void {
    // this.userService.getUsers().subscribe((data)=>{
    //   console.log(data);
    //   this.users=data;
    // });
  }

  public getUsersList():void {
    this.userService.getUsers().subscribe((data)=>{
      console.log(data);
      this.users=data;
    },
    (error) => {                              //Error callback
      console.error('error caught in component:')
      this.errorMessage = error;
    });
  }


}
