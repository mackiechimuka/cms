import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts:Contact[] =[new Contact('R. Kent Jackson','jacksonk@byui.edu',1,208-496-3771,'../../assets/images/jacksonk.jpg',[]),new Contact('Rex Barzee','barzeer@byui.edu',2,208-496-3768,'../../assets/images/barzeer.jpg',[])]

  constructor() { }

  ngOnInit(): void {
  }

}
