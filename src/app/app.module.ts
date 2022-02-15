import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ButtonModule} from 'primeng/button';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

// custom modules/components
import { NavigationModule } from './modules/navigation/navigation.module';
import { ScrollTopModule } from './modules/shared/scroll-top/scroll-top.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NavigationModule,
    ScrollTopModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
