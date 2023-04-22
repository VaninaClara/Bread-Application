import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CreateBreadRoutingModule } from "./create-bread-routing.module";
import { CreateBreadComponent } from "./create-bread.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
   declarations: [
    CreateBreadComponent
   ],
   imports: [
    CommonModule,
    CreateBreadRoutingModule,
    SharedModule
   ]
})
export class CreateBreadModule { }