import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import {TokenModel} from '../../../models/index';

declare var jQuery: any;
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loading = false;

  form = {
    email: "",
    password: "",
  }
  alert = {
    message: "",
    show: false,
  }

  constructor(private route: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.loading = true;
    //this.alert.show = false;
    this.auth.userAuth(this.form.email, this.form.password).then(res => {
      this.loading = false;
      let _res = <TokenModel>res;
      if(_res.status == 200) {
        this.route.navigate(['shop', 'list']);
      } else {
        this.alert.message = _res.message;
        this.alert.show = true;
      }

    }).catch(msg => {
      this.loading = false;
      if(msg.status == 404){
        this.alert.message = "Cannot connect server";
        this.alert.show = true;
      }
    });
  }

  register(){
    this.route.navigate(['user', 'auth', 'register']);
  }
}
