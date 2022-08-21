import { Component, OnInit } from '@angular/core';
import { Book } from './types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books:Book[]=[
    {
      name:"Clean Code",
      author:"Robert C Martin",
      image:"https://images-na.ssl-images-amazon.com/images/I/41zoxjP9lcL._SX323_BO1,204,203,200_.jpg",
      amount:700,
    },
    {
      name:"Reminders of Him: A Novel",
      author:"Colleen Hoover",
      image:"https://images-na.ssl-images-amazon.com/images/I/41n9-p6-PpL._SX331_BO1,204,203,200_.jpg",
      amount:8000,
    }
  ];
  card:Book[]=[];
  isShowing:boolean=true;
 constructor() { }

  ngOnInit(): void {
  }

addToCart(book:Book){

}

}
