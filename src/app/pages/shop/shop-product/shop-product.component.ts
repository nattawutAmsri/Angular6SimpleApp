import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-product',
  templateUrl: './shop-product.component.html',
  styleUrls: ['./shop-product.component.scss']
})
export class ShopProductComponent implements OnInit {
  id = "";
  products=[1,2,3,4,5];
  constructor(private activeRoute : ActivatedRoute, private router : Router) { 
    this.id = activeRoute.snapshot.params['id'];
  }

  displayForm = false;

  ngOnInit() {
  }

  addProduct(){
    this.router.navigate(['shop', 'info', 'create']); 
  }

  load() {

  }
}
