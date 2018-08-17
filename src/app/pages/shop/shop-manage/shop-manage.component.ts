import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-shop-manage',
  templateUrl: './shop-manage.component.html',
  styleUrls: ['./shop-manage.component.scss']
})
export class ShopManageComponent implements OnInit {

  shopId = 0;
  panel = {
    information : {
      show:true,
    },
    application : {
      show:false,
    },
    setting : {
      show:false,
    },
    product : {
      show:false,
    },
    stock : {
      show:false,
    },
    member : {
      show:false,
    },
  }
  constructor(private activeRoute : ActivatedRoute, private router : Router) { 
    this.shopId = activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

  changePage(page){
    this.panel.information.show = false;
    this.panel.application.show = false;
    this.panel.setting.show = false;
    this.panel.product.show = false;
    this.panel.stock.show = false;
    this.panel.member.show = false;
    this.panel[page].show = true;
  }

  backPage(){
    this.router.navigate(['shop', 'list']); 
  }

}
