import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListLeaveRoutingModule } from './list-leave-routing.module';
import { ListLeaveComponent } from './list-leave.component';


@NgModule({
  declarations: [ListLeaveComponent],
  imports: [
    CommonModule,
    ListLeaveRoutingModule,
    NgxPaginationModule
  ]
})
export class ListLeaveModule { }
