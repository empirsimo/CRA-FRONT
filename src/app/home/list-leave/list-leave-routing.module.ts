import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListLeaveComponent } from './list-leave.component';

const routes: Routes = [{ path: '', component: ListLeaveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListLeaveRoutingModule { }
