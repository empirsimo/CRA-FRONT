import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environmentDev } from '../../../environments/environments.dev';
import { Contrat } from '../../home/models/contrat.model';


@Injectable({
  providedIn: 'root'
})
export class ContratService {

  contrat: Contrat = new Contrat();

  constructor(private httpClient: HttpClient) { }


  getContrat(){

     let url= environmentDev.CONTRAT_BASE_URL+environmentDev.CONTRAT.GET_ALL_CONTRAT
    return this.httpClient.get(url);

  }

  addContrat(contrat): Observable<any>{
    let url = environmentDev.CONTRAT_BASE_URL+environmentDev.CONTRAT.ADD_CONTRAT
    return this.httpClient.post(url,contrat);
  }

  editContrat(contrat): Observable<any>{
    let url = environmentDev.CONTRAT_BASE_URL+environmentDev.CONTRAT.UPDATE_CONTRAT+contrat._id
    return this.httpClient.put(url,contrat);
  }


  deleteContrat(id: any): Observable<any>{
    const httpParams = new HttpParams({
      fromObject:{
        idContrat: id
      }
    });
    let url = environmentDev.CONTRAT_BASE_URL+environmentDev.CONTRAT.DELETE_CONTRAT
    return this.httpClient.delete(url,{params: httpParams});
  }



  searchContrat(keyword){

    
  }
}
