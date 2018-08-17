import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {ProductService} from '../services/product.services';
import {ProductFilterModel, ProductModel, ProductResultModel} from '../models/index';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"]
})
export class ProductListComponent implements OnInit {
  storeId = "";
  filter: ProductFilterModel;
  products: ProductModel[];
  result: ProductResultModel;
  loading = false;
  modal = {
    alertMessage : "",
    showAlert : false,
    form : {
      shopName : "",
    }
  }
  constructor(private activeRoute: ActivatedRoute, private router: Router, private ProductService: ProductService) {
    this.filter = new ProductFilterModel();
    this.filter.shopId = this.activeRoute.snapshot.paramMap.get("storeId");
        
    this.loadAllProduct();
  }

  ngOnInit() {
  }

  addProduct() {
    this.router.navigate(["shop","product", this.storeId, "create"]);
  }

  loadAllProduct() {
    let _filter = this.filter;
    this.loading = true;
    this.ProductService.getAll(_filter).then(res => {
      this.loading = false;
      this.result = <ProductResultModel>res;

      if(this.result && this.result.items){
        this.products = this.result.items;
      }
    }).catch(msg => {
      this.loading = false;
      if(msg.status == 404){
      }
    });
  }
}
