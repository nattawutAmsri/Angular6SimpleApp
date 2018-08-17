import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { API_URL } from '../constansts/configs'

// model
import {TokenModel} from './auth.model';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  apiDomain = API_URL + "/Account/";
  authToken = "";
  constructor(private http: HttpClient){
    if(localStorage.getItem('authToken') != null){
      this.authToken = localStorage.getItem('authToken');
    }
  }

  userRegister(username, password, email, firstname, lastname, phone, birtday){
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiDomain + "Account/Register";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        username: username,
        password: password,
        email: email,
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        birtday: birtday,
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          res => { // Success
            let _result = <TokenModel>res;
            if(_result.token) {

              localStorage.setItem('authToken', _result.token);
            }
          resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }
  
  userAuth(username, password){
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiDomain + "login";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
        })
      };
      let params  = {
        email: username,
        password: password,
      };
      this.http.post(apiURL,params,httpOptions)
        .toPromise()
        .then(
          (res:any) => { // Success
            let _result = <TokenModel>res;
            if(_result.token) {
              localStorage.setItem('authToken', _result.token);
            }
            resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }

  getUserInfo(){
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.apiDomain + "/posts";
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  "application/json; charset=UTF-8",
          'Authorization': "Bearer " + this.authToken
        })
      };
      let params  = {
      };
      this.http.get(apiURL,httpOptions)
        .toPromise()
        .then(
          res => { // Success
          resolve(res);
          },
          msg => { // Error
          reject(msg);
          }
        );
    });
    return promise;
  }

  // userAuth(){
  //   let promise = new Promise((resolve, reject) => {
  //     let apiURL = 'https://jsonplaceholder.typicode.com/post/';
  //     let headers = new Headers({ 'Content-Type': 'application/json' });
  //     let options = new RequestOptions({ headers: headers });
  //     this.http.get(apiURL)
  //       .toPromise()
  //       .then(
  //         res => { // Success
  //         resolve(res);
  //         },
  //         msg => { // Error
  //         reject(msg);
  //         }
  //       );
  //   });
  //   return promise;
  // }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('authToken');
  }
}
