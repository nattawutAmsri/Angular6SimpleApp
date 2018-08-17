import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import * as Uikit from "../../../../../../node_modules/uikit";
import { ShopService } from '../../services/shop.service';
import { ResultModel } from '../../../../models/result.model';

@Component({
  selector: "create-shop-modal",
  templateUrl: "./create-shop-modal.component.html",
  styleUrls: ["./create-shop-modal.component.scss"],
})
export class CreateShopModalComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<boolean>();

  modal = {
    alertMessage: "",
    showAlert: false,
    form: {
      shopName: ""
    }
  };

  constructor(private shopService:ShopService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  showModal(event: boolean) {
    Uikit.modal("#modal-create-shop").show();
  }

  closeModal() {
    Uikit.modal("#modal-create-shop").hide();
  }

  addShop() {
    this.shopService.addShop(this.modal.form.shopName).then((res:ResultModel) => {
      this.onSubmit.emit(true);
      Uikit.modal("#modal-create-shop").hide();
      if(res.code == 500){
        this.onSubmit.emit(false);
      }
    }).catch(msg => {
      if(msg.status == 404){
      }
      this.onSubmit.emit(false);
    });
  }
}
