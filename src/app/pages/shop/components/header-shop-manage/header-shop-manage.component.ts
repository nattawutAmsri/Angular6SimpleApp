import { Component, OnInit,  EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as Uikit from 'uikit';

@Component({
  selector: 'app-header-shop-manage',
  templateUrl: './header-shop-manage.component.html',
  styleUrls: ['./header-shop-manage.component.scss']
})
export class HeaderShopManageComponent implements OnInit {
  @Input() storeId : string;
  @Input() elementId : string;
  @Output() changePage: EventEmitter<string> = new EventEmitter<string>();
  @Output() backPage: EventEmitter<string> = new EventEmitter<string>();

  constructor(private route : Router) { 
  }

  ngOnInit() {
  }

  changepage(page) {
    let _elementId = '#'+this.elementId;
    this.backPage.emit(page);
    if(page != this.route.url){
      // this.loading = true;
      Uikit.util.on(_elementId, 'hidden', function () {
        Uikit.offcanvas(_elementId).$destroy(true);
      });
      Uikit.offcanvas(_elementId).hide();
      this.route.navigate([page]);
    //   this.route.navigate([page]);
    //   setTimeout(() => {
    //     this.loading = false;
    //     this.route.navigate([page]);
    //   }, 200);
    }
  }

  backpage(){
    let _elementId = '#'+this.elementId;
    Uikit.util.on(_elementId, 'hidden', function () {
      Uikit.offcanvas(_elementId).$destroy(true);
    });
    Uikit.offcanvas('#'+this.elementId).hide();
    this.backPage.emit('back');
    this.route.navigate(['shop','list']);
  }

}
