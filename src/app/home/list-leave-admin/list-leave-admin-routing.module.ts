import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLeaveAdminComponent } from './list-leave-admin.component';

const routes: Routes = [{ path: '', component: ListLeaveAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListLeaveAdminRoutingModule { }
