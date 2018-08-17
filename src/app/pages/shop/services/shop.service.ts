import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResultModel } from '../../../models/result.model';
import { ShopFilterModel, ShopResultModel, ShopModel } from '../models/index';
import { API_URL } from '../../../constansts/configs';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  url: string = API_URL + "/shop/";
  results: ResultModel;
  loading:boolean;

  constructor(private http:HttpClient) { 
    this.results = new ResultModel();
    this.loading = false;
  }

  addShop(name: string) {
    let promise = new Promise((resolve, reject) => {
      let _url = this.url + "add";

      this.http.post(_url,{name: name})
        .toPromise()
        .then(
          res => { // Success
            this.results = <ResultModel>res;
            if(this.results.code == 200) {
              
            } else {
              // alert message
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

  addShopInfo(shop: ShopModel) {
    let promise = new Promise((resolve, reject) => {
      let _url = this.url + "AddShopInfo";
      this.http.post(_url,shop)
        .toPromise()
        .then(
          res => { // Success
            this.results = <ResultModel>res;
            if(this.results.code == 200) {
              
            } else {
              // alert message
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

  getAll(params: ShopFilterModel) {
    let _params = JSON.stringify(params);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  "application/json; charset=UTF-8",
      })
    };
    
    let promise = new Promise((resolve, reject) => {
      let _url = this.url + "filter";
      this.http.post<ShopResultModel>(_url,_params, httpOptions)
        .toPromise()
        .then(
          res => {
            resolve(res);
          },
          msg => {
            reject(msg);
          }
        );
    });
    return promise;
  }

  loadInfo(id: string) {
    let promise = new Promise((resolve, reject) => {
      let _url = this.url + "find/" + id;
      this.http.get(_url)
        .toPromise()
        .then(
          res => { // Success
            this.results = <ResultModel>res;
            if(this.results.code == 200) {
              
            } else {
              // alert message
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
}

