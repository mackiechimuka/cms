import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[] =[];
  constructor(private contactService:ContactService) { }

  ngOnInit() {
    this.contacts =this.contactService.getContacts();
    this.contactService.contactChangedEvent.subscribe((contacts:Contact[])=>{
      this.contacts = contacts;
    })
  }

  onSelected(contact: Contact){
    this.contactService.contactSelectedEvent.emit(contact);
  }

}
