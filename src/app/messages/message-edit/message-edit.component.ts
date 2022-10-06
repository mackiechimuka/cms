import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  currentSender='McNeill Chimuka'
  @ViewChild('subject') subjectRef:ElementRef;
  @ViewChild('msgText') msgTextRef:ElementRef;
  @Output() addMessageEvent =new EventEmitter<Message>();

  constructor() { }

  ngOnInit(): void {
  }

  onSendMessage(){
    const subject =this.subjectRef.nativeElement.value;
    const msgText =  this.msgTextRef.nativeElement.value;
    const sender =this.currentSender;
    const newMsg = new Message(4,subject,msgText,sender);
    this.addMessageEvent.emit(newMsg);
  }

  onClear(){
    this.subjectRef.nativeElement.value ='';
    this.msgTextRef.nativeElement.value ='';
  }



}
