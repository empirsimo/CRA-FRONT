import { Component, OnInit, TemplateRef } from '@angular/core';
import {ContratService } from '../../services/contrat.service';
import { AuthService } from '../../../shared/auth.service';
import { Contrat } from '../../models/contrat.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { User } from '../../models/users.model';
import { ToastrService } from 'ngx-toastr';

declare var $: any;

@Component({
  selector: 'app-list-contrat',
  templateUrl: './list-contrat.component.html',
  styleUrls: ['./list-contrat.component.css']
})
export class ListContratComponent implements OnInit {


  //contrat
  _id: String;
  typeContrat: String;
  nbrHeure: Number=0;
  salaireBrut: Number=0;
  nbrConges: Number=0;
  userId: String;

  contratResult: any;
  contratList: any[] = [];

  usersResult: any;
  usersList : any[] = [];

  modalRef?: BsModalRef;
  contrat: Contrat;
  editForm: FormGroup; 

  //Pagination
  p: number = 1;

  //delete infos
  idCont:any;
  tyCont:any;
  nbrH:any;
  salaireB:any;
  nbrC:any;
  idUser:any;

  user: User = new User();

  constructor(
    private toastr: ToastrService,
    private contratService: ContratService,
    private authService: AuthService,
    private modalService: BsModalService,
    private fb: FormBuilder 
    ) { }

  ngOnInit() {

     // Find the list Contrat
    this.getContratList();

    // Find the Name of Users in dropdown select Option
    this.getNameOfUsers();


    this.editForm = this.fb.group({
      idCrt: [''],
      tyContrat: [''],
      nbH: [''],
      salBrut: [''],
      nbConge: [''],
      utils: ['']
    } );

  }

  getContratList(){
this.contratService.getContrat().subscribe((data: any[]) => {
  this.contratResult = data;
  this.contratList = this.contratResult.results;
});

  }

  getNameOfUsers(){

    this.authService.getUsers().subscribe((data: any[]) => {
      this.usersResult = data;
      this.usersList = this.usersResult.results;
     // console.log(this.usersList);
    });
  }

  handleClear(){

    this.typeContrat = ' ';
    this.nbrHeure = Number('');
    this.salaireBrut = Number('');
    this.nbrConges = Number('');
    this.userId = ' ';
  }

  openModalAdd(templateAdd: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateAdd);
 }

 // add contrat
   onAddContratSubmit(){
  
    const contrat = {

      typeContrat: this.typeContrat,
      nbrHeure: this.nbrHeure,
      salaireBrut: this.salaireBrut,
      nbrConges: this.nbrConges,
      utilisateur: this.userId,
   };

 this.contratService.addContrat(contrat).subscribe(data => {
  this.contratList.push(data.contratDetails);
  this.toastr.success("L'ajout du contrat a été réalisée avec succès.","SUCCESS" );
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

  onEditContratSubmit(){

    const contrat = {

      _id: this.editForm.controls['idCrt'].value,
      typeContrat: this.editForm.controls['tyContrat'].value,
      nbrHeure: this.editForm.controls['nbH'].value,
      salaireBrut: this.editForm.controls['salBrut'].value,
      nbrConges: this.editForm.controls['nbConge'].value,
      utilisateur: this.editForm.controls['utils'].value
   };

    this.contratService.editContrat(contrat).subscribe(data => {
      this.toastr.success("La modification du contrat a été réalisée avec succès.", "SUCCESS");
      this.ngOnInit();
      this.modalService.hide();
    }, error => {
     this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
      this.handleClear();
      this.ngOnInit();
          this.modalService.hide();
    });
  }
  
  openModalEdit(templateEdit: TemplateRef<any>, contrat: Contrat) {
    this.modalRef = this.modalService.show(templateEdit);
    
    this.editForm.patchValue( {
      idCrt: contrat._id,
      tyContrat: contrat.typeContrat, 
      nbH: contrat.nbrHeure,
      salBrut: contrat.salaireBrut,
      nbConge: contrat.nbrConges,
      utils: contrat.utilisateur
    });
 }


 onDeleteContratSubmit(){

  this.contratService.deleteContrat(this.idCont).subscribe(data => {

    this.toastr.success("La suppression du contrat a été réalisée avec succès.", "SUCCESS");
      this.ngOnInit();
      this.modalService.hide();
}, error => {
  this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
  this.handleClear();
  this.ngOnInit();
      this.modalService.hide();
});
 }

 openModalDelete(templateDelete: TemplateRef<any>,  contratId: String) {
  this.modalRef = this.modalService.show(templateDelete);
  

  for (let contrat in this.contratList) {
    let item = this.contratList[contrat];

     if(item._id == contratId){

      this.idCont =item._id;
      this.tyCont=item.typeContrat;
      this.nbrH=item.nbrHeure;
      this.salaireB=item.salaireBrut;
      this.nbrC=item.nbrConges;
      this.idUser=item.utilisateur;

      break;
     }
  }
 
}
 

 openUserModal(templateUser: TemplateRef<any>, userId: String) {
  this.modalRef = this.modalService.show(templateUser);
  

  for (let user in this.usersList) {
    let item = this.usersList[user];

     if(item._id == userId){

      document.getElementById('idUser').setAttribute('value', item._id);
      document.getElementById('nom').setAttribute('value', item.nom);
      document.getElementById('prenom').setAttribute('value', item.prenom);
      document.getElementById('email').setAttribute('value', item.email)
      break;
     }
  }

}
}
