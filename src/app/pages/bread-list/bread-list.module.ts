import { NgModule } from '@angular/core';
import { BreadListComponent } from './bread-list.component';
import { FormsModule } from '@angular/forms';
import { BreadListRoutingModule } from './bread-list.routing.module';
import { CommonModule } from '@angular/common';
import { BreadModule } from "./components/bread/bread.module";

@NgModule({
    declarations: [
        BreadListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        BreadListRoutingModule,
        BreadModule
    ]
})
export class BreadListModule { }


