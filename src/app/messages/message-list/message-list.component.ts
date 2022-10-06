import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/contacts/contacts.model';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages:Message[]= [new Message(1,'Assignment','The grades this assignment has been performed ','Bro.Jackson'), new Message(2,'Assignment Due','When is assignment due?','Steve Johnson'),new Message(2,'Assignment','Assignment 3 is due on Saturday at 11:30 pm','Bro.Jackson'),new Message(3,'Assignment','Can I meet you some time.I need help with Assignment 3.','Mark Smith'),new Message(2,'APPOINTMENT','I can meet you today with you at 4:00pm in my office','Bro.Jackson')]
  constructor() { }

  ngOnInit(): void {
  }
  
  onAddMessage(message:Message){
    this.messages.push(message);
  }

}
