import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListActiviteAdminRoutingModule } from './list-activite-admin-routing.module';
import { ListActiviteAdminComponent } from './list-activite-admin.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListActiviteAdminComponent],
  imports: [
    FormsModule,
    CommonModule,
    ListActiviteAdminRoutingModule,
    ScheduleModule, RecurrenceEditorModule, DropDownListModule, DateTimePickerModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [ListActiviteAdminComponent]
})
export class ListActiviteAdminModule { }
