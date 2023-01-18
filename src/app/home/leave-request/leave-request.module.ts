import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LeaveRequestRoutingModule } from './leave-request-routing.module';
import { LeaveRequestComponent } from './leave-request.component';


@NgModule({
  declarations: [LeaveRequestComponent],
  imports: [
    CommonModule,
    LeaveRequestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LeaveRequestModule { }
