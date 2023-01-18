import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { User } from '../models/users.model';
import { ContratService } from '../services/contrat.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User;

  contratResult: any;
  contratList: any[] = [];

  //Contrat User infos
  tyCont: any;
  nbrH: any;
  salaireB: any;
  nbrC: any;

  constructor(
    private authService: AuthService,
    private contratService: ContratService) { }

  ngOnInit(): void {

    this.getContratList();
    this.getContratByUserConnected();
  }

  getContratList() {
    this.contratService.getContrat().subscribe((data: any[]) => {
      this.contratResult = data;
      this.contratList = this.contratResult.results;
    });

  }

  getContratByUserConnected() {

    this.authService.getProfile().subscribe(data => {
     // console.log(data);
      this.user = data.user;
     // console.log(this.user._id);

     // console.log(this.contratList);
      for (let contrat in this.contratList) {
        let item = this.contratList[contrat];

        if (item.utilisateur == this.user._id) {

          console.log(item.typeContrat);
          console.log(item.nbrHeure);
          console.log(item.salaireBrut);
          console.log(item.nbrConges);

          this.tyCont = item.typeContrat;
          this.nbrH = item.nbrHeure;
          this.salaireB = item.salaireBrut;
          this.nbrC = item.nbrConges;

          break;
        }
      }


    }, err => {
      console.log(err);
      return false;
    });
  }
}
