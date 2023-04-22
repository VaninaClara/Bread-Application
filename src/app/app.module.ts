import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadListModule } from './pages/bread-list/bread-list.module';

import { CoreModule } from './core/core.modules';
import { WhatIsBreadModule } from './pages/home/what-is-bread/what-is-bread.module';
import { ImportanceBreadModule } from './pages/home/importance-bread/importance-bread.module';


@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    WhatIsBreadModule,
    ImportanceBreadModule,
    BreadListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
