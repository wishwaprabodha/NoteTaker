import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './home-component.component';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';
import { NoteComponent } from './components/note/note.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
