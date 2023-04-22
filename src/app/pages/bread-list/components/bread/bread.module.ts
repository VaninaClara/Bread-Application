import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadComponent } from './bread.component';

@NgModule({
  declarations: [
    BreadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadComponent
  ]
})
export class BreadModule { }
