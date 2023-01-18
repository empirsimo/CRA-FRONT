import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Conge } from '../models/conge.model';
import {CongeService } from '../services/conge.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { ButtonComponent } from '@syncfusion/ej2-angular-buttons';
import {ScheduleComponent, EventSettingsModel, View, EventRenderedArgs, DayService,WeekService, WorkWeekService, MonthService,YearService, ResizeService, DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import{DataManager, UrlAdaptor, Query}from '@syncfusion/ej2-data';

@Component({
  selector: 'app-list-leave-admin',
  templateUrl: './list-leave-admin.component.html',
  styleUrls: ['./list-leave-admin.component.css'],
  providers: [DayService, WeekService, WorkWeekService,
    MonthService, YearService, ResizeService, DragAndDropService]
})
export class ListLeaveAdminComponent implements OnInit {

  userId: string="";

  congeResult: any;
  congeList: any[] = [];

  usersResult: any;
  usersList : any[] = [];

  modalRef?: BsModalRef;

  @ViewChild("scheduleObj")
  public scheduleObj: ScheduleComponent;

//   @ViewChild("addButton")
// public addButton: ButtonComponent;

  //Valide infos
  idCng:any;
  utils:any;
  tyCng:any;
  dtD:any;
  dtF:any;
  dtDm:any;
  raison:any;
  etat:any;

  //Pagination
  p: number = 1;

 constructor(
    private congeService: CongeService,
    private authService: AuthService,
    private modalService: BsModalService,
    private toastr: ToastrService
  ) {}

  titre= 'activite-app';
  public setView: View[] =["Day","WorkWeek","Month","Year"];
  public showWeekNumber: boolean = true;
  public isReadOnly: boolean = true;

  private dataManager: DataManager = new DataManager({
    url: 'http://localhost:5000/GetData',
    crudUrl: 'http://localhost:5000/BatchData',
    adaptor: new UrlAdaptor,
    crossDomain: true
  });
  
  
  private dataQuery: Query = new Query().addParams("IdUser","");
  
  // public eventSettings: EventSettingsModel = { dataSource: this.dataManager,query : this.dataQuery};
  public eventSettings: EventSettingsModel = { dataSource: [] };
  
  public selectedDate: Date;

  ngOnInit(){

    this.selectedDate = new Date();
    //this.getCongeList();
    //this.getNameOfUsers();

  }


  getCongeList(){
    this.congeService.getConge().subscribe((data: any[]) => {
      this.congeResult = data;
      this.congeList = this.congeResult.results;
    });
    
      }

      onListActiviteByUser(){
    // this.congeService.getViewConge(this.userId).subscribe((data: any[]) => {
    //   this.congeResult = data;
    //   this.congeList = this.congeResult.results;
    // });
    
  
    // // chargement de calander par les activites de l'utilisateur selectionner
      
    // console.log('this.userId: '+this.userId);

    // this.scheduleObj.eventSettings.query.params[0].value = this.userId;

    // this.scheduleObj.refreshEvents();


      }

      openModalValide(templateValider: TemplateRef<any>, conge: Conge) {
        this.modalRef = this.modalService.show(templateValider);
      
            this.idCng = conge._id;
            this.utils =conge.utilisateur;
            this.tyCng=conge.typeConge;
            this.dtD=conge.dateDebut;
            this.dtF=conge.dateFin;
            this.dtDm=conge.dateDemande;
            this.etat=conge.avis;
            this.raison=conge.raison;

      }

      openModalRefuse(templateRefuser: TemplateRef<any>,conge: Conge) {

        this.modalRef = this.modalService.show(templateRefuser);
      
            this.idCng = conge._id;
            this.utils =conge.utilisateur;
            this.tyCng=conge.typeConge;
            this.dtD=conge.dateDebut;
            this.dtF=conge.dateFin;
            this.dtDm=conge.dateDemande;
            this.etat=conge.avis;
            this.raison=conge.raison;

      }


      public dataVal: Record<string, any>[] = [{
          
        
        "Id": 1,
    "Subject": "Meeting",
    "StartTime": "2022-07-15T00:00:00.000Z",
    "EndTime": "2022-07-29T00:00:00.000Z"
       // IdUser: null,
        
              }];

public onValideCongeSubmit(){

//         if(conge.avis === "Lancer"){

//         const listConge = {

//     _id: conge._id,
//     typeConge: conge.typeConge,
//     dateDebut: conge.dateDebut,
//     dateFin: conge.dateFin,
//     dateDemande: conge.dateDemande,
//     raison: conge.raison,
//     avis: "Valider",
//     utilisateur: conge.utilisateur

//        };

//        this.congeService.editConge(listConge).subscribe(data => {
//         this.toastr.success("Le congé a été traité avec succès.", "SUCCESS");

//         console.log(data);
// console.log(conge)
//         // this.dataQuery.addParams("IdUser", this.utils);
//         // this.eventSettings.query =  this.dataQuery;


//         var dataVal: Record<string, any>[] = [{
//           // Subject: conge.typeConge,
//           // StartTime: conge.dateDebut,
//           // EndTime: conge.dateFin,
//           // IsAllDay: false,
//           // StartTimezone: null,
//           // EndTimezone: null,
//           // IdUser: conge.utilisateur

//           "_id": "62f38b53d90f632585820cf0",
//           "Subject": "MEETING",
//           "Location": "llll",
//           "StartTime": "2022-07-10T14:00:00.000Z",
//           "EndTime": "2022-07-28T14:30:00.000Z",
//           "IsAllDay": false,
//           "StartTimezone": null,
//           "EndTimezone": null,
//           "Description": "llllll",
//           "RecurrenceRule": null,

//           "IdUser": null,

//       }];


      
// console.log(dataVal);

// if(this.scheduleObj) {
//   console.log("**** here ****");
  
//       this.scheduleObj.addEvent(dataVal);
//       this.scheduleObj.refreshEvents(false);
//       console.log(this.scheduleObj)
//       this.addButton.element.setAttribute('disabled','true');
// }

//        // this.ngOnInit();
//         this.modalService.hide();
//       }, error => {
//        this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
//         //this.ngOnInit();
//             this.modalService.hide();
//       });
//     }else{
//       this.toastr.warning("Vous ne pouvez pas travailler sur ce dossier, car il a déjà été traité.", "WARNING");
//       this.modalService.hide();
//     }
 if(this.scheduleObj) {
    console.log("**** here ****");
    
        this.scheduleObj.addEvent(this.dataVal);
        console.log(this.scheduleObj)
       // this.addButton.element.setAttribute('disabled','true');
  }
      }


      onRefuseCongeSubmit(){

        if(this.etat === "Lancer"){

        const conge = {

    _id: this.idCng,
    typeConge: this.tyCng,
    dateDebut: this.dtD,
    dateFin: this.dtF,
    dateDemande: this.dtDm,
    raison: this.raison,
    avis: "Refuser",
    utilisateur: this.utils
       };

       this.congeService.editConge(conge).subscribe(data => {
        this.toastr.success("Le congé a été traité avec succès.", "SUCCESS");
        this.ngOnInit();
        this.modalService.hide();
      }, error => {
       this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
        this.ngOnInit();
            this.modalService.hide();
      });
    }else{
      this.toastr.warning("Vous ne pouvez pas travailler sur ce dossier, car il a déjà été traité.", "WARNING");
      this.modalService.hide();
    }
      }


      getNameOfUsers(){

        this.authService.getUsers().subscribe((data: any[]) => {
          this.usersResult = data;
          this.usersList = this.usersResult.results;
        });
      }
}
