import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { BreadListComponent } from './pages/bread-list/bread-list.component';
import { CreateBreadComponent } from './pages/create-bread/create-bread.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'bread-list', component: BreadListComponent },
  { path: 'create-bread', component: CreateBreadComponent },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
