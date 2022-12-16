import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ButtonModule} from 'primeng/button';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppComponent } from './app.component';
import { GooMapComponent } from './goo-map/goo-map.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    GooMapComponent
    ],
  imports: [
    BrowserModule,
    ButtonModule,
    FormsModule,
    GoogleMapsModule,
    InputTextModule,
    HttpClientModule,
    HttpClientJsonpModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
