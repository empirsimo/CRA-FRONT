import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { ServiceService } from '../../home/services/service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { User } from '../models/users.model';
import { ToastrService } from 'ngx-toastr';


declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


 //user
 _id: String;
 nom: String;
    prenom: String;
    email: String;
    telephone: String;
    civilite: String;
    pays_adresse: String;
    ville_adresse: String;
    rue_adresse: String;
    num_adresse: Number;
    postal_adresse: Number;
    userRole: String;
    idService: String;

 usersResult: any;
 usersList : any[] = [];

 serviceResult: any;
 serviceList : any[] = [];

 modalRef?: BsModalRef;
 //user: User;
 editForm: FormGroup; 

 //Pagination
 p: number = 1;

//delete infos
idUs: any;
nmUs: any;
preUs: any;
emlUs: any;
telUs: any;
civilUs: any;
paysAdsUs: any;
villeAdsUs: any;
rueAdsUs: any;
numAdsUs: any;
postalAdsUs: any;
roleUsUs: any;
serviceUs: any;


public listRoleUser: Array<string> = ["admin", "user"];
public listCivilite: Array<string> = ["M.", "Mme", "Mlle"];

  constructor(
    private toastr: ToastrService,
    private authService: AuthService,
    private serviceService: ServiceService,
    private modalService: BsModalService,
    private fb: FormBuilder 
  ) { }

  ngOnInit(): void {

    this.getNameOfUsers();

    this.getNameOfService();

    this.editForm = this.fb.group({
      idUs: [''],
      nm: [''],
      pre: [''],
      eml: [''],
      tel: [''],
      civil: [''],
      paysAds: [''],
      villeAds: [''],
      rueAds: [''],
      numAds: [''],
      postalAds: [''],
      roleUs: [''],
      serv: ['']
    } );

  }


  getNameOfService(){

    this.serviceService.getService().subscribe((data: any[]) => {
      this.serviceResult = data;
      this.serviceList = this.serviceResult.results;
      console.log(this.serviceList);
    });
  }

  getNameOfUsers(){

    this.authService.getUsers().subscribe((data: any[]) => {
      this.usersResult = data;
      this.usersList = this.usersResult.results;
      console.log(this.usersList);
    });
  }


  handleClear(){

    this.nom = ' ';
    this.prenom = ' ';
    this.email = ' ';
    this.telephone = ' ';
    this.civilite = ' ';
    this.pays_adresse = ' ';
    this.ville_adresse = ' ';
    this.rue_adresse = ' ';
    this.num_adresse = Number('');
    this.postal_adresse = Number('');
    this.userRole = ' ';
    this.idService = ' ';
 
  }

 
  openModalEdit(templateEdit: TemplateRef<any>, user: User) {
    this.modalRef = this.modalService.show(templateEdit);
    
    this.editForm.patchValue( {

      idUs: user._id,
      nm: user.nom,
      pre: user.prenom,
      eml: user.email,
      tel: user.telephone,
      civil: user.civilite,
      paysAds: user.pays_adresse,
      villeAds: user.ville_adresse,
      rueAds: user.rue_adresse,
      numAds: user.num_adresse,
      postalAds: user.postal_adresse,
      roleUs: user.userRole,
      serv: user.idService,
    });
 }

  onEditUserSubmit(){

    const user = {

    _id: this.editForm.controls['idUs'].value,
    nom: this.editForm.controls['nm'].value,
    prenom:this.editForm.controls['pre'].value,
    email: this.editForm.controls['eml'].value,
    telephone: this.editForm.controls['tel'].value,
    civilite: this.editForm.controls['civil'].value,
    pays_adresse: this.editForm.controls['paysAds'].value,
    ville_adresse: this.editForm.controls['villeAds'].value,
    rue_adresse: this.editForm.controls['rueAds'].value,
    num_adresse: this.editForm.controls['numAds'].value,
    postal_adresse: this.editForm.controls['postalAds'].value,
    userRole: this.editForm.controls['roleUs'].value,
    idService: this.editForm.controls['serv'].value

   };

    this.authService.editUsers(user).subscribe(data => {
      this.toastr.success("La modification de l'utilisateur à été réalisée avec succès.", "SUCCESS");
      this.ngOnInit();
      this.modalService.hide();
    }, error => {
     this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
      this.handleClear();
      this.ngOnInit();
          this.modalService.hide();
    });
  }


  onDeleteUserSubmit(){

    this.authService.deleteUsers(this.idUs).subscribe(data => {
  
      this.toastr.success("La suppression de l'utilisateur à été réalisée avec succès.", "SUCCESS");
        this.ngOnInit();
        this.modalService.hide();
  }, error => {
    this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
    this.handleClear();
    this.ngOnInit();
        this.modalService.hide();
  });
   }
  
   openModalDelete(templateDelete: TemplateRef<any>,  userId: String) {
    this.modalRef = this.modalService.show(templateDelete);
    
  
    for (let user in this.usersList) {
      let item = this.usersList[user];
  
       if(item._id == userId){
  
        this.idUs =item._id;
        this.nmUs  =item.nom;
        this.preUs  =item.prenom;;
        this.emlUs =item.email;
        this.telUs =item.telephone;
        this.civilUs =item.civilite;
        this.paysAdsUs =item.pays_adresse;
        this.villeAdsUs =item.ville_adresse;
        this.rueAdsUs =item.rue_adresse;
        this.numAdsUs =item.num_adresse;
        this.postalAdsUs =item.postal_adresse;
        this.roleUsUs =item.userRole;
        this.serviceUs =item.idService;
        break;
       }
    }
   
  }


  openServiceModal(templateService: TemplateRef<any>, serviceId: String) {
    this.modalRef = this.modalService.show(templateService);
    
  
    for (let service in this.serviceList) {
      let item = this.serviceList[service];
  
       if(item._id == serviceId){
  
        document.getElementById('idServ').setAttribute('value', item._id);
        document.getElementById('nom').setAttribute('value', item.nomService);
        break;
       }
    }
  
  }
}
