import { Component, OnInit, TemplateRef } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

 //service
 _id: String;
 nomService: String;

 serviceResult: any;
 serviceList: any[] = [];

 modalRef?: BsModalRef;
 service: Service;
 editForm: FormGroup; 

 //Pagination
 p: number = 1;

 //delete infos
 idServ:any;
 nmServ:any;


  constructor(
    private toastr: ToastrService,
    private serviceService: ServiceService,
    private modalService: BsModalService,
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {

    this.getServiceList();

    this.editForm = this.fb.group({
      idSrv: [''],
      nmService: ['']
  });

}

getServiceList(){
  this.serviceService.getService().subscribe((data: any[]) => {
    this.serviceResult = data;
    this.serviceList = this.serviceResult.results;
  });
  
    }

    handleClear(){

      this.nomService = ' ';
    }

    openModalAdd(templateAdd: TemplateRef<any>) {
      this.modalRef = this.modalService.show(templateAdd);
   }

// add contrat
onAddServiceSubmit(){
  
  const service = {

    nomService: this.nomService,
 };

this.serviceService.addService(service).subscribe(data => {
this.serviceList.push(data.serviceDetails);
this.toastr.success("L'ajout du service a été réalisée avec succès.","SUCCESS" );
  this.handleClear();
  this.ngOnInit();
    this.modalService.hide();
}, error => {
this.toastr.error("Quelque chose s'est mal passé !","ERROR" );
this.handleClear();
this.ngOnInit();
    this.modalService.hide();
});

}

onEditServiceSubmit(){

  const service = {

    _id: this.editForm.controls['idSrv'].value,
    nomService: this.editForm.controls['nmService'].value
 };

  this.serviceService.editService(service).subscribe(data => {
    this.toastr.success("La modification du service a été réalisée avec succès.", "SUCCESS");
    this.ngOnInit();
    this.modalService.hide();
  }, error => {
   this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
    this.handleClear();
    this.ngOnInit();
        this.modalService.hide();
  });
}

openModalEdit(templateEdit: TemplateRef<any>, service:Service) {
  this.modalRef = this.modalService.show(templateEdit);
  
  this.editForm.patchValue( {
    idSrv: service._id,
    nmService: service.nomService
  });
}

onDeleteServiceSubmit(){

  this.serviceService.deleteService(this.idServ).subscribe(data => {

    this.toastr.success("La suppression du service a été réalisée avec succès.", "SUCCESS");
      this.ngOnInit();
      this.modalService.hide();
}, error => {
  this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
  this.handleClear();
  this.ngOnInit();
      this.modalService.hide();
});
 }

 openModalDelete(templateDelete: TemplateRef<any>,  serviceId: String) {
  this.modalRef = this.modalService.show(templateDelete);
  

  for (let service in this.serviceList) {
    let item = this.serviceList[service];

     if(item._id == serviceId){

      this.idServ =item._id;
      this.nmServ=item.nomService;


      break;
     }
  }
 
}




}