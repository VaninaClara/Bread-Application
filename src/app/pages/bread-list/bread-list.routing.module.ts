import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadListComponent } from './bread-list.component';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: BreadListComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class BreadListRoutingModule {}


