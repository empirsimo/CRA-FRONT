import { Component, OnInit } from '@angular/core';
import { Conge } from '../models/conge.model';
import { CongeService } from '../services/conge.service';
import { AuthService } from '../../shared/auth.service';
import { User } from '../models/users.model';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css']
})
export class LeaveRequestComponent implements OnInit {

  conge: Conge;

  //conge
  _id: string;
  typeCng: string;
  dtDebut: Date;
  dtFin: Date;
  dateDemande: Date;
  raison: string;
  avis: string;



  utilisateur: any;

  congeResult: any;
  congeList: any[] = [];

  exist: boolean = false;

  public listTypeConge: Array<string> = ["Congé Annuel", "Congé Quarantaine", "Congé Parental", "Congé Maladie"];

  constructor(
    private toastr: ToastrService,
    private congeService: CongeService,
    private authService: AuthService
  ) {
    this.utilisateur = this.authService.user
   }

  ngOnInit(): void {


    this.getCongeList();
  }

  // add Conge
  onAddCongeSubmit() {

    const conge = {

      typeConge: this.typeCng,
      dateDebut: this.dtDebut,
      dateFin: this.dtFin,
      raison: this.raison,
      dateDemande: new Date,
      avis: "Lancer",
      utilisateur: this.utilisateur.id
    };

    for (let conge in this.congeList) {
      let item = this.congeList[conge];
  
       if(item.utilisateur == this.utilisateur.id && item.avis == "Lancer"){

      this.toastr.warning("Vous avez déjà une demande de congé à l'état 'Lancer'. Vous ne pouvez pas créer une autre demande tant que votre demande actuelle n'a pas reçu de réponse", "WARNING");
      this.exist = true;
      this.handleClear();
   //   this.ngOnInit();
     
        break;
       }
    }

    if (this.exist == false){
    this.congeService.addConge(conge).subscribe(data => {
      this.congeList.push(data.congeDetails);
      this.toastr.success("L'ajout du conge a été réalisée avec succès.", "SUCCESS");
      this.handleClear();
      this.ngOnInit();
    }, error => {
      this.toastr.error("Quelque chose s'est mal passé !", "ERROR");
      this.handleClear();
      this.ngOnInit();
    });
  }

  }

  getCongeList(){
    this.congeService.getConge().subscribe((data: any[]) => {
      this.congeResult = data;
      this.congeList = this.congeResult.results;
    });
    
      }

  handleClear(){

    this.typeCng = ' ';
    this.dtDebut = null;
    this.dtFin = null;
    this.dateDemande= null;
    this.avis= ' ',
    this.raison = ' ';
   
  }

}
