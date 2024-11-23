import { Component } from '@angular/core';

@Component({
  selector: 'app-sms-app',
  templateUrl: './sms-app.component.html',
  styleUrl: './sms-app.component.css'
})
export class SmsAppComponent {

  public textMessage:string='';
  public maxCharLength:number=200;
}
