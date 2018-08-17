import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  form = {
    email: "",
    password: "",
    repassword: "",
    birthday: "",
    gender: "",
    phone: "",
  }
  alert = {
    message: "",
    sending: false,
  }

  constructor() { }

  ngOnInit() {
  }

  register() {
    
  }
}
