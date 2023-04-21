import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BreadListComponent } from './pages/bread-list/bread-list.component';

const routes: Routes = [
  { path: 'bread-list', component: BreadListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
