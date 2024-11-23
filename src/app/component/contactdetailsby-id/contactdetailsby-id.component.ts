import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../../service/contact.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'app-contactdetailsby-id',
  templateUrl: './contactdetailsby-id.component.html',
  styleUrl: './contactdetailsby-id.component.css'
})
export class ContactdetailsbyIdComponent {

  public contactId:string | null = '';

  public contactData:Contact = {} as Contact;

  public errorMessage:string | undefined;

  constructor(private activatedRoute:ActivatedRoute, private contactService:ContactService) {}

  ngOnInit():void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap) =>{
        this.contactId = param.get('id');
      this.getAllContacts();
  })
}

public getAllContacts():void {
  this.contactService.getAllContacts().subscribe((data)=>{
   let contacts:Contact[] = data;
   let selectedContact = contacts.find(contact=>contact.login.uuid===this.contactId);
   if (selectedContact) {
    this.contactData = selectedContact;
   }
  }, (error)=>{
    this.errorMessage = error;
  })
}

public isNotEmpty() {
  return Object.keys(this.contactData).length > 0;
}

}
