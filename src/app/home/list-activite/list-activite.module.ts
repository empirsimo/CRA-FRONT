import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListActiviteRoutingModule } from './list-activite-routing.module';
import { ListActiviteComponent } from './list-activite.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [ListActiviteComponent],
  imports: [
    CommonModule,
    ListActiviteRoutingModule,
    ScheduleModule, RecurrenceEditorModule, DropDownListModule, DateTimePickerModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, MonthAgendaService],
  bootstrap: [ListActiviteComponent]
})
export class ListActiviteModule { }
