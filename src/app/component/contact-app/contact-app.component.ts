import { Component } from '@angular/core';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-app',
  templateUrl: './contact-app.component.html',
  styleUrl: './contact-app.component.css'
})
export class ContactAppComponent {

  public selectedContact:Contact = {} as Contact;

}
