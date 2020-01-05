import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { MatSelectModule, MatButtonModule } from '@angular/material';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    // MatSelectModule,
    // MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
