import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListLeaveAdminRoutingModule } from './list-leave-admin-routing.module';
import { ListLeaveAdminComponent } from './list-leave-admin.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [ListLeaveAdminComponent],
  imports: [
    CommonModule,
    ListLeaveAdminRoutingModule,
    ButtonModule,
    FormsModule,
    NgxPaginationModule,
    ModalModule.forRoot(),
    ScheduleModule, RecurrenceEditorModule, DropDownListModule, DateTimePickerModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService]
})
export class ListLeaveAdminModule { }
