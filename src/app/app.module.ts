import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadListModule } from './pages/bread-list/bread-list.module';

import { CoreModule } from './core/core.modules';

import { HomeModule } from './pages/home/home.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    BreadListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
