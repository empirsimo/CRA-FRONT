import { Component, OnInit } from '@angular/core';
import {ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,WeekService, WorkWeekService, MonthService, ResizeService, DragAndDropService, ActionEventArgs} from '@syncfusion/ej2-angular-schedule';
import{DataManager, UrlAdaptor, Query}from '@syncfusion/ej2-data';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
     MonthService, ResizeService, DragAndDropService]
})
export class ActiviteComponent implements OnInit {


   user: any;

  constructor(
    private authService: AuthService) { 
      this.user = this.authService.user;
      this.dataQuery.addParams("IdUser", this.user.id);
      this.eventSettings.query =  this.dataQuery;
    }

   titre= 'activite-app';
   public setView: View ="Day";

private dataManager: DataManager = new DataManager({
  url: 'http://localhost:5000/GetData',
  crudUrl: 'http://localhost:5000/BatchData',
  adaptor: new UrlAdaptor,
  crossDomain: true
});


private dataQuery: Query = new Query();

public eventSettings: EventSettingsModel = { dataSource: this.dataManager};
public selectedDate: Date;
  

//>>>>>>>>>>> ajouter une ligne "idUser" dans le document <<<<<<<<<<<<<<

public onActionBegin(args: ActionEventArgs): void {
  if (args.requestType === 'eventCreate') {
    // This block will execute once an appointment is created
    args.addedRecords[0].IdUser = this.user.id;
  }
}

ngOnInit() {
    this.selectedDate = new Date();
   // this.getUserConnected();
}


}
