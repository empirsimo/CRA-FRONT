import { Component, OnInit, ViewChild } from '@angular/core';
import {ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,WeekService, WorkWeekService, MonthService,YearService, ResizeService, DragAndDropService, ActionEventArgs} from '@syncfusion/ej2-angular-schedule';
import{DataManager, UrlAdaptor, Query}from '@syncfusion/ej2-data';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-list-activite-admin',
  templateUrl: './list-activite-admin.component.html',
  styleUrls: ['./list-activite-admin.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
    MonthService,YearService, ResizeService, DragAndDropService]
})
export class ListActiviteAdminComponent implements OnInit {

  @ViewChild('scheduleObj') 
  public scheduleObj: ScheduleComponent; 
   
  userId: string="";

   usersResult: any;
   usersList : any[] = [];

   constructor(
    private authService: AuthService) { 
    }

   titre= 'activite-app';
  public setView: View[] =["Day","WorkWeek","Month","Year"];
  public showWeekNumber: boolean = true;
  // public isReadOnly: boolean = true;

  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor,
    crossDomain: true
  });

  private dataQuery: Query = new Query().addParams("IdUser", "");

  public eventSettings: EventSettingsModel = { dataSource: this.dataManager,query : this.dataQuery };
  
  public selectedDate: Date;

  //>>>>>>>>>>> ajouter une ligne "idUser" dans le document <<<<<<<<<<<<<<

public onActionBegin(args: ActionEventArgs): void {
  if (args.requestType === 'eventCreate') {
    // This block will execute once an appointment is created
    args.addedRecords[0].IdUser = this.userId;
  }
}
  
  onListActiviteByUser(){

    console.log(this.userId);

    this.scheduleObj.eventSettings.query.params[0].value = this.userId;

    this.scheduleObj.refreshEvents();
    
  }

  ngOnInit() {

     this.selectedDate = new Date();
    this.getNameOfUsers();
  }

  getNameOfUsers(){

    this.authService.getUsers().subscribe((data: any[]) => {
      this.usersResult = data;
      this.usersList = this.usersResult.results;
    });
  }
}
