import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleGuard } from './guards/role.guard';

import { ShopListComponent } from './pages/shop/shop-list/shop-list.component';
import { ShopInfoComponent } from './pages/shop/shop-info/shop-info.component';
import { UserRegisterComponent } from './pages/auth/user-register/user-register.component';
import { UserLoginComponent } from './pages/auth/user-login/user-login.component';
import { UserRepasswordComponent } from './pages/auth/user-repassword/user-repassword.component';
import { UserInfoComponent } from './pages/auth/user-info/user-info.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';


const routes: Routes = [
  {
    path: '',
    component: UserLoginComponent,
  }, {
    path: 'shop',
    canActivate: [RoleGuard],
    children: [{
      path: 'list',
      component: ShopListComponent,
    },{
      path: 'info/:storeId',
      component: ShopInfoComponent,
    }, {
      path: 'product/:storeId',
      component: ProductListComponent,
    },{
      path: 'product/:storeId/:productId',
      component: ProductFormComponent,
    }]
  }, {
    path: 'user',
    canActivate: [RoleGuard],
    children: [{
      path: 'info',
      component: UserInfoComponent,
    }, {
      path: 'auth',
      children: [{
        path: 'info',
        component: UserInfoComponent,
      }, {
        path: 'login',
        component: UserLoginComponent,
      }, {
        path: 'register',
        component: UserRegisterComponent,
      }, {
        path: 'repassword',
        component: UserRepasswordComponent,
      }]
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }


