import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {ShopService} from '../services/shop.service';
import {ShopModel, ShopFilterModel, ShopResultModel} from '../models/index';
declare var UIkit: any;
import { ResultModel } from '../../../models/result.model';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit, OnDestroy {
  loading = false;
  shopid = [1,2,3,4,5,6];
  filter: ShopFilterModel;
  shops: ShopModel[];
  result: ShopResultModel;
  modal = {
    alertMessage : "",
    showAlert : false,
    form : {
      shopName : "",
    }
  }

  constructor(private route:Router, private shopService: ShopService) { }

  ngOnInit() {
    this.loadAllShop();
  }

  enterShop(id){
    UIkit.modal("#modal-create-shop").$destroy(true);
    this.route.navigate(['shop', 'info', id]); 
  }

  showModal(){
    UIkit.modal("#modal-create-shop").show();
  }

  onSubmitCreateShopModal(event){
    if(event){
      this.loadAllShop();
    }
  }

  addShop(){
    this.modal.showAlert=true;
    UIkit.notification({
      message: 'my-message!',
      timeout: 1000
    });
  }

  loadAllShop() {
    let _filter = this.filter;
    this.shopService.getAll(_filter).then(res => {
      this.loading = false;
      this.result = <ShopResultModel>res;

      if(this.result && this.result.items){
        this.shops = this.result.items;
      }
    }).catch(msg => {
      this.loading = false;
      if(msg.status == 404){
      }
    });
  }

  ngOnDestroy(): void {
    // this.filter =  new ShopFilterModel();
    // this.shops = [];
    // this.rusult = new ShopResultModel();
  }
}
