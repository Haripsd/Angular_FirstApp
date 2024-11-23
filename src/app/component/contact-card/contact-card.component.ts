import { Component, Input } from '@angular/core';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrl: './contact-card.component.css'
})
export class ContactCardComponent {

  @Input() selectedContact:Contact = {} as Contact;

  public isNotEmpty() {
    return Object.keys(this.selectedContact).length > 0;
  }


}
