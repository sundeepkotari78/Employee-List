import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { FormsModule } from '@angular/forms';
import { AppService } from './app.service';   // our custom service, see below

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [AppService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
