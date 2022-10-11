import { Component, OnInit,Output ,EventEmitter} from '@angular/core';
import { Document } from './document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents:Document[]=[new Document(1,'CIT260- Object Oriented Programming','Learn how to develop Software using OPP','www.byui.edu','blablabla'),new Document(1,'WDD430- Full Stack Web Development','Learn how to develop modern applications using MEAN stack','www.byui.edu/descripton.pdf','blablabla'),new Document(1,'CIT325- Data Warehousing','This course defines the theory and practice of data analysis.','www.byui.edu/description.pdf','blablabla'),new Document(3,'CIT460- Enterprise Development','Learn how to develop Enterprise Applications','www.byui.edu/description.pdf','blablabla'),new Document(5,'CIT495- Senior Practium','Apply all the skills you learned to develop a professional application','www.byui.edu/description.pdf','blablabla')]

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedDocument(document: Document){
    this.selectedDocumentEvent.emit(document);
  }


}
