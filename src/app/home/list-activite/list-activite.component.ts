import { Component, OnInit } from '@angular/core';
import {ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,WeekService, WorkWeekService, MonthService,YearService, ResizeService, DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import{DataManager, UrlAdaptor, Query}from '@syncfusion/ej2-data';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: 'app-list-activite',
  templateUrl: './list-activite.component.html',
  styleUrls: ['./list-activite.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
    MonthService,YearService, ResizeService, DragAndDropService]
})
export class ListActiviteComponent implements OnInit {


  user: any;

  constructor(
    private authService: AuthService) { 
      this.user = this.authService.user;
      this.dataQuery.addParams("IdUser", this.user.id);
      this.eventSettings.query =  this.dataQuery;
    }

  titre= 'activite-app';
  public setView: View[] =["WorkWeek","Month","Year"];
  public showWeekNumber: boolean = true;
  public isReadOnly: boolean = true;

  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    adaptor: new UrlAdaptor,
    crossDomain: true
  });

  private dataQuery: Query = new Query();

  public eventSettings: EventSettingsModel = { dataSource: this.dataManager };
  public selectedDate: Date;


  ngOnInit() {

    this.selectedDate = new Date();
  }

}
