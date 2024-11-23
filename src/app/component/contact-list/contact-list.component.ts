import { Component, Output, EventEmitter } from '@angular/core';
import { ContactService } from '../../service/contact.service';
import { error } from 'console';
import { Contact } from '../../model/contact';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  
  public contacts:Contact[] = [] as Contact[];

  public errorMessage:string | undefined; 

  @Output() sendContact = new EventEmitter();


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

  public selectContact(contact:Contact) {
    this.sendContact.emit(contact);
  }
}
