import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EncryptionService } from 'src/services/encryption.service';
import { Book } from '../book/types/Book';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.css']
})
export class SinglebookComponent implements OnInit {
@Input() book:Book={}as Book;
@Output() bookemmiter=new EventEmitter<Book>();
encryptedvalue:String="";
decryptedvalue:String="";
  constructor(private encryption:EncryptionService) { }

  ngOnInit(): void {
   
   

  }

  addToCart(){
this.bookemmiter.emit(this.book)
  }

}
