import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyAJb_DrCClC-a4g9mZ_lRhqDIWeG0Nbd4w",
  authDomain: "chatapper-35689.firebaseapp.com",
  databaseURL: "https://chatapper-35689.firebaseio.com",
  projectId: "chatapper-35689",
  storageBucket: "chatapper-35689.appspot.com",
  messagingSenderId: "877863515300"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
