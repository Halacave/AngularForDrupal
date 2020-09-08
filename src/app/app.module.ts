import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

import { FilmService} from './film.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'

import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MessagesComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    FormsModule, 
    BrowserAnimationsModule,

    
  ],
  providers: [FilmService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
