import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActiviteAdminComponent } from './list-activite-admin.component';

const routes: Routes = [{ path: '', component: ListActiviteAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActiviteAdminRoutingModule { }
