import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { ContratComponent } from './contrat.component';


const routes: Routes = [
  { path: '', component: ListContratComponent }

]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }
