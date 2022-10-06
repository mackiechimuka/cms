import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts:Contact[] =[new Contact('R. Kent Jackson','jacksonk@byui.edu',1,2084963771,'../../assets/images/jacksonk.jpg',[]),new Contact('Rex Barzee','barzeer@byui.edu',2,2084963768,'../../assets/images/barzeer.jpg',[])]

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(contact: Contact){
    this.selectedContactEvent.emit(contact);
  }

}
