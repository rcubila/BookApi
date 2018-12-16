 import {Component, OnInit} from '@angular/core';
 // tslint:disable-next-line:import-spacing
 import{Book} from './book';
 import {BookService} from './book.service';

@Component({
     selector: 'app-book',
     templateUrl: './book.component.html',
     styleUrls: ['./book.component.css']

})
 export class BookComponent implements OnInit {

     books: Book[];
     constructor(private _bookService: BookService) {}


    ngOnInit(): void {

        this.getBooks();
    }


     getBooks(): any {

         this._bookService.getAllBooks()
             .subscribe((bookData) => {
                 this.books = bookData,
                 console.log(bookData);
             }, (error) => {

                 console.log(error);
             });
     }

 }

