import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { environmentDev } from '../../environments/environments.dev';
import { User } from '../home/models/users.model';



@Injectable()
export class AuthService {
  authToken: any;
  user: User = new User();

  jwtHelperService: JwtHelperService = new JwtHelperService();


  

  constructor(private http: HttpClient) {  }

  registerUser(user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
   // return this.http.post(this.serverPath + '/api/users/register', user, {headers: headers})
     return this.http.post('http://localhost:3000/users/register', user, {headers: headers});
  }

  authenticateUser(user): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    //return this.http.post(this.serverPath + '/api/users/authenticate', user, {headers: headers});
    return this.http.post('http://localhost:3000/users/login', user, {headers: headers});
  }

 getProfile(): Observable<any> {
   let headers = new HttpHeaders();
   this.loadToken();
   console.log("this.authToken= "+this.authToken);
   headers = headers.append('Authorization', this.authToken);
   headers =headers.append('Content-Type', 'application/json');
   //return this.http.get(this.serverPath + '/api/users/profile', {headers: headers});
   return this.http.get('http://localhost:3000/users/profile',{headers: headers});
 }

 storeUserData(token, user) {
   localStorage.setItem(environment.tokenIndex, token);
   localStorage.setItem('user', JSON.stringify(user));
   // localStorage.setItem('user_name', JSON.stringify(user.username));
    this.authToken = token;
    this.user = user;
  }

  loadToken() {
    const token = localStorage.getItem(environment.tokenIndex);
    this.authToken = token;
  }

  loadCurrentUser() {
    const currentUser = localStorage.getItem('user');
    Object.assign(this.user,JSON.parse(currentUser));
  }


isTokenExpired() {
    if (!localStorage.getItem(environment.tokenIndex)) {
        return true;
    }
    let tokenDecoded = this.jwtHelperService.decodeToken(localStorage.getItem(environment.tokenIndex));
    if (tokenDecoded.exp) {

        return this.jwtHelperService.isTokenExpired(localStorage.getItem(environment.tokenIndex));
    } else {
        return false;
    }
}

isHasRoles(roles: string[]): boolean {
  if (this.isTokenExpired()) return false;
    this.loadCurrentUser();
  for (let role of roles) {
    if (this.user.userRole == role) {
      return true;
    }
  }

  return false;
}

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }


// ********************************* Service User **********************************************************************************
  
  getUsers(){

    let url= environmentDev.USERS_BASE_URL+environmentDev.USERS.GET_ALL_USERS
   return this.http.get(url);

 }

 editUsers(user): Observable<any>{
  let url = environmentDev.USERS_BASE_URL+environmentDev.USERS.UPDATE_USERS+user._id
  return this.http.put(url,user);
}


deleteUsers(id: any): Observable<any>{
  const httpParams = new HttpParams({
    fromObject:{
      idUser: id
    }
  });
  let url = environmentDev.USERS_BASE_URL+environmentDev.USERS.DELETE_USERS
  return this.http.delete(url,{params: httpParams});
}

}
