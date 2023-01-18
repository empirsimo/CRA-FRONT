import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environmentDev } from '../../../environments/environments.dev';
import { Service } from '../../home/models/service.model';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    service: Service = new Service();

  constructor(private httpClient: HttpClient) { }


  getService(){

     let url= environmentDev.SERVICE_BASE_URL+environmentDev.SERVICE.GET_ALL_SERVICE
    return this.httpClient.get(url);

  }

  addService(service): Observable<any>{
    let url = environmentDev.SERVICE_BASE_URL+environmentDev.SERVICE.ADD_SERVICE
    return this.httpClient.post(url,service);
  }

  editService(service): Observable<any>{
    let url = environmentDev.SERVICE_BASE_URL+environmentDev.SERVICE.UPDATE_SERVICE+service._id
    return this.httpClient.put(url,service);
  }


  deleteService(id: any): Observable<any>{
    const httpParams = new HttpParams({
      fromObject:{
        idService: id
      }
    });
    let url = environmentDev.SERVICE_BASE_URL+environmentDev.SERVICE.DELETE_SERVICE
    return this.httpClient.delete(url,{params: httpParams});
  }



  searchService(keyword){

    
  }
}
