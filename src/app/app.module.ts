import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { WhatIsBreadComponent } from './pages/home/what-is-bread/what-is-bread.component';
import { ImportanceBreadComponent } from './pages/home/importance-bread/importance-bread.component';
import { BreadListComponent } from './pages/bread-list/bread-list.component';
import { BreadDetailComponent } from './pages/bread-detail/bread-detail.component';
import { CreateBreadComponent } from './pages/create-bread/create-bread.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { BreadComponent } from './pages/bread-list/components/bread/bread.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WhatIsBreadComponent,
    ImportanceBreadComponent,
    BreadListComponent,
    BreadDetailComponent,
    CreateBreadComponent,
    AboutMeComponent,
    BreadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
