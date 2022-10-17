import { Document } from "./document-list/document.model";
import { MOCKDOCUMENTS } from "./MOCKDOCUMENTS";
import {EventEmitter} from "@angular/core";

export class DocumentService{
    documents:Document[] ;
    documentSelectedEvent = new EventEmitter<Document>();

    constructor(){
        this.documents = MOCKDOCUMENTS;
    }

    getDocuments():Document[]{
        return this.documents.slice();
    }

    getDocument(id:string){
        for(let document of this.documents){
            if(document.id === id){
                return document;
            }
        }
        return null;
    }
}