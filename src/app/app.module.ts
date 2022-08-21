import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BookComponent } from './book/book.component';
import { SinglebookComponent } from './singlebook/singlebook.component';

@NgModule({
    declarations:[AppComponent, BookComponent, SinglebookComponent],
    imports:[BrowserModule,FormsModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}