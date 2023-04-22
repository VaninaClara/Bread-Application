import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ImportanceBreadComponent } from './importance-bread/importance-bread.component';
import { WhatIsBreadComponent } from './what-is-bread/what-is-bread.component';

@NgModule({
  declarations: [
    HomeComponent,
    ImportanceBreadComponent,
    WhatIsBreadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
