import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MouseEvent } from '@agm/core';
import {
  FileUploader,
  FileUploaderOptions
} from "ng2-file-upload/ng2-file-upload";

// service
import { ShopService } from "../services/shop.service";

// model
import { ShopModel } from "../models";
import { ResultModel } from "../../../models";

// config
import { API_URL } from "../../../constansts/configs";

// const
const URL = API_URL + "/Document/UploadShopImage";

@Component({
  selector: "app-shop-info",
  templateUrl: "./shop-info.component.html",
  styleUrls: ["./shop-info.component.css"]
})
export class ShopInfoComponent implements OnInit {
  @Input()
  shopId: string;

  public uploader: FileUploader = new FileUploader({ url: URL });
  public uploaderCover: FileUploader = new FileUploader({ url: URL });
  public uploaderImages: FileUploader = new FileUploader({ url: URL });

  loading = false;
  model: any = {};
  form = new ShopModel();
  result = new ResultModel();
  storeId = "";

  //map
  marker: marker = {
		  lat: 13.7286873,
		  lng: 100.5154113,
		  label: 'A',
		  draggable: true
	};

  // will change to no image
  imgProfile = "../../../../assets/background/IMG_3254.jpg";

  constructor(
    private shopService: ShopService,
    private activatedRoute: ActivatedRoute
  ) {
    let id = this.activatedRoute.snapshot.paramMap.get("storeId");
    this.form.lat = this.marker.lat;
    this.form.lng = this.marker.lng;
    this.loadInfo(id);
    this.storeId = id;

    // // get current location
    // if (navigator) {
    //   navigator.geolocation.getCurrentPosition( pos => {
    //     this.form.lat = +pos.coords.longitude;
    //     this.form.lng = +pos.coords.latitude;
    //   });
    // }
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
    this.uploader.onCompleteItem = (
      item: any,
      response: any    ) => {
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
    this.uploaderCover.onCompleteItem = (
      item: any,
      response: any    ) => {
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
    this.uploaderImages.onCompleteItem = (
      item: any,
      response: any    ) => {
      let _resp = JSON.parse(response);
      
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
    this.loading = true;
    this.shopService
      .addShopInfo(_form)
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
    this.loading = true;
    this.shopService
      .loadInfo(_id)
      .then(res => {
        this.loading = false;
        this.form = <ShopModel>res;

        if(this.form.lat <= 0 && this.form.lng <= 0){
          this.form.lat = this.marker.lat;
          this.form.lng = this.marker.lng;
        }
      })
      .catch(msg => {
        this.loading = false;
        if (msg.status == 404) {
        }
      });
  }

  /**** google map ****/
  markerDragEnd(m: marker, $event: MouseEvent) {
    this.form.lat = $event.coords.lat;
    this.form.lng = $event.coords.lng;
  }
}

export interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
