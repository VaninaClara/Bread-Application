import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBreadComponent } from './create-bread.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: CreateBreadComponent
}];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class CreateBreadRoutingModule { }