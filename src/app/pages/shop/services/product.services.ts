import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { ResultModel } from '../../../models/result.model';
import { ProductModel, ProductResultModel, ProductFilterModel} from '../../product/models/index';
import { API_URL } from '../../../constansts/configs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string = API_URL + "/product/";
  results: ResultModel;
  loading:boolean;

  constructor(private http:HttpClient) { 
    this.results = new ResultModel();
    this.loading = false;
  }

  addProduct(Product: ProductModel) {
    let promise = new Promise((resolve, reject) => {
      let _url = this.url + "AddProductInfo";
      this.http.post(_url,Product)
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

  getAll(params: ProductFilterModel) {
    let _params = JSON.stringify(params);

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  "application/json; charset=UTF-8",
      })
    };
    
    let promise = new Promise((resolve, reject) => {
      let _url = this.url + "filter";
      this.http.post<ProductResultModel>(_url,_params, httpOptions)
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

