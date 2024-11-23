import { Component } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent {

  public contacts:Contact[] = [] as Contact[];
  public errorMessage:string | undefined;

  constructor(private contactService:ContactService) {}

  ngOnInit() {
    this.getContactList();
  }


  public getContactList() {
    this.contactService.getAllContacts().subscribe((data)=> {
      this.contacts = data;
    }, (error) => {
      this.errorMessage = error;
    });
  }
}
