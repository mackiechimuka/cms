import { Component, OnInit } from '@angular/core';
import { Document } from './document-list/document.model';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers:[DocumentService]
})
export class DocumentsComponent implements OnInit {
  selectedDocument:Document;

  constructor(private documentService:DocumentService) { }

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe((document:Document)=>{
      this.selectedDocument =document;
    })
  }

}
