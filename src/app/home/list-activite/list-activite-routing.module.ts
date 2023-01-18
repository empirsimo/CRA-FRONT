import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListActiviteComponent } from './list-activite.component';

const routes: Routes = [{ path: '', component: ListActiviteComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListActiviteRoutingModule { }
