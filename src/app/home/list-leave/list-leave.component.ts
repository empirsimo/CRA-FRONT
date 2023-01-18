import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import {CongeService } from '../services/conge.service';

@Component({
  selector: 'app-list-leave',
  templateUrl: './list-leave.component.html',
  styleUrls: ['./list-leave.component.css']
})
export class ListLeaveComponent implements OnInit {

//  //conge
//   tpConge: any;
//   dtDebut: any;
//   dtFin: any;
//   dtDemande: any;
//   raison: any;
//   avis: any;
//   utilisateur: any;

  congeResult: any;
  congeList: any[] = [];

  //Pagination
  p: number = 1;

  user: any;

  constructor(
    private congeService: CongeService,
    private authService: AuthService
  ) { 
    this.user = this.authService.user;
  }

  ngOnInit(){
    this.getCongeList();
  }

  getCongeList(){
    this.congeService.getViewConge(this.user.id).subscribe((data: any[]) => {
      this.congeResult = data;
      this.congeList = this.congeResult.results;
    });
    
      }

}
