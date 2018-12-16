import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BookComponent} from 'app/book/book.component';
import {BookService} from './book/book.service';
import {HttpModule} from '@angular/http';



@NgModule({
  declarations: [
    AppComponent, BookComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [BookService],
  bootstrap: [AppComponent]
})

export class AppModule { }
