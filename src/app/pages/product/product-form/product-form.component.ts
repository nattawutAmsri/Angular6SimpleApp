import { Component, OnInit } from "@angular/core";
import { FileUploader, FileUploaderOptions } from "ng2-file-upload/ng2-file-upload";
import { ProductModel } from "../models";
import {ProductService} from '../services/product.services';
import { ActivatedRoute, Router } from '@angular/router';

// config
import { API_URL, NO_IMAGE } from "../../../constansts/configs";
import { ResultModel } from "../../../models";

// const
const URL = API_URL + "/Document/UploadProductImage ";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"]
})
export class ProductFormComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: URL });
  public uploaderCover: FileUploader = new FileUploader({ url: URL });
  public uploaderImages: FileUploader = new FileUploader({ url: URL });
  // params
  form = new ProductModel();
  result = new ResultModel();
  loading = false;
  constructor(private ProductService: ProductService,private activeRoute : ActivatedRoute, private router : Router) {
    let productId = activeRoute.snapshot.params['productId'];
    this.form.shopId = activeRoute.snapshot.params['storeId'];
    this.form.imageUrl = NO_IMAGE;
    this.form.coverUrl = NO_IMAGE;

    if(productId != 'create'){
      // load exist 
      this.loadInfo(productId);
    }
  }

  ngOnInit() {
    // set auth header
    let currentUser = localStorage.getItem("authToken");
    let uploadOption: FileUploaderOptions = {};
    uploadOption.headers = [
      { name: "Authorization", value: `Bearer ${currentUser}` }
    ];
    /****** Upload Profile ******/
    this.uploader.setOptions(uploadOption);

    // upload file
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    // this handler response after image upload completed
    this.uploader.onCompleteItem = (item: any, response: any) => {
      let _resp = JSON.parse(response);
      this.form.imageUrl = _resp[0].url;
      this.form.imageId = _resp[0].id;
    };

    /****** Upload Cover ******/
    this.uploaderCover.setOptions(uploadOption);

    // upload file
    this.uploaderCover.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    // this handler response after image upload completed
    this.uploaderCover.onCompleteItem = (item: any, response: any) => {
      let _resp = JSON.parse(response);
      this.form.coverUrl = _resp[0].url;
      this.form.coverId = _resp[0].id;
    };

    /****** Upload Images ******/
    this.uploaderImages.setOptions(uploadOption);

    // upload file
    this.uploaderImages.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
    // this handler response after image upload completed
    this.uploaderImages.onCompleteItem = (item: any, response: any) => {
      let _resp = JSON.parse(response);

      console.log(this.form.imageCollection);
      if(typeof this.form.imageCollection == 'undefined') this.form.imageCollection = [];
      
      this.form.imageCollection.push(_resp[0]);
    };
  }

  // trigger upload file when input had been changed
  onProfileChange(event: any) {
    let profileImage = event.target.files;
    if (profileImage) {
      this.uploader.uploadAll();
    }
  }

  onCoverFileChange(event: any) {
    let cover = event.target.files;
    if (cover) {
      this.uploaderCover.uploadAll();
    }
  }

  onImgCollectionChange(event: any) {
    let images = event.target.files;
    if (images) {
      this.uploaderImages.uploadAll();
    }
  }

  save() {
    let _form = this.form;

    this.ProductService
      .addProduct(_form)
      .then(res => {
        this.loading = false;
        this.result = <ResultModel>res;

        if (this.result && this.result.code == 200) {
        } else {
        }
      })
      .catch(msg => {
        this.loading = false;
        if (msg.status == 404) {
        }
      });
  }

  loadInfo(id: string) {
    let _id = id;

    this.ProductService
      .loadInfo(_id)
      .then(res => {
        this.loading = false;
        this.form = <ProductModel>res;
      })
      .catch(msg => {
        this.loading = false;
        if (msg.status == 404) {
        }
      });
  }
}
