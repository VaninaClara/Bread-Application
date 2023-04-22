import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ImportanceBreadModule } from './importance-bread/importance-bread.module';
import { WhatIsBreadModule } from './what-is-bread/what-is-bread.module';

@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ImportanceBreadModule,
        WhatIsBreadModule
    ]
})
export class HomeModule { }