import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environmentDev } from '../../../environments/environments.dev';
import { Conge } from '../../home/models/conge.model';


@Injectable({
  providedIn: 'root'
})
export class CongeService {

    conge: Conge = new Conge();

  constructor(private httpClient: HttpClient) { }


  getConge(){

     let url= environmentDev.CONGE_BASE_URL+environmentDev.CONGE.GET_ALL_CONGE
    return this.httpClient.get(url);

  }

  getViewConge(id: any): Observable<any>{

    const httpParams = new HttpParams({
      fromObject:{
        idUser: id
      }
    });
    let url= environmentDev.CONGE_BASE_URL+environmentDev.CONGE.GET_CONGE
   return this.httpClient.get(url,{params: httpParams});

 }

  addConge(conge): Observable<any>{
    let url = environmentDev.CONGE_BASE_URL+environmentDev.CONGE.ADD_CONGE
    return this.httpClient.post(url,conge);
  }

  editConge(conge): Observable<any>{
    let url = environmentDev.CONGE_BASE_URL+environmentDev.CONGE.UPDATE_CONGE+conge._id
    return this.httpClient.put(url,conge);
  }


  deleteConge(id: any): Observable<any>{
    const httpParams = new HttpParams({
      fromObject:{
        idConge: id
      }
    });
    let url = environmentDev.CONGE_BASE_URL+environmentDev.CONGE.DELETE_CONGE
    return this.httpClient.delete(url,{params: httpParams});
  }



  searchContrat(keyword){

    
  }
}
