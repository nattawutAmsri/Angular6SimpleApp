import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FileSelectDirective } from 'ng2-file-upload';
import { CommonModule } from '@angular/common'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AgmCoreModule } from '@agm/core';

import { RoleGuard } from './guards/role.guard';

import { AuthService } from './service/auth.service';
import {ErrorInterceptor, JwtInterceptor} from './helpers';

import { AppComponent } from './app.component';
import { ShopListComponent } from './pages/shop/shop-list/shop-list.component';
import { ShopSettingComponent } from './pages/shop/shop-setting/shop-setting.component';
import { ShopInfoComponent } from './pages/shop/shop-info/shop-info.component';
import { ShopManageComponent } from './pages/shop/shop-manage/shop-manage.component';
import { HeaderShopComponent } from './pages/shop/components/header-shop/header-shop.component';
import { HeaderShopManageComponent } from './pages/shop/components/header-shop-manage/header-shop-manage.component';
import { UserRegisterComponent } from './pages/auth/user-register/user-register.component';
import { UserLoginComponent } from './pages/auth/user-login/user-login.component';
import { UserRepasswordComponent } from './pages/auth/user-repassword/user-repassword.component';
import { UserInfoComponent } from './pages/auth/user-info/user-info.component';
import { FooterShopComponent } from './pages/shop/components/footer-shop/footer-shop.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CreateShopModalComponent } from './pages/shop/components/create-shop-modal/create-shop-modal.component';
import { ProductListComponent } from './pages/product/product-list/product-list.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { ProductFormComponent } from './pages/product/product-form/product-form.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ShopListComponent,
    ShopSettingComponent,
    ShopInfoComponent,
    UserRegisterComponent,
    UserLoginComponent,
    UserRepasswordComponent,
    UserInfoComponent,
    HeaderShopComponent,
    ShopManageComponent,
    HeaderShopManageComponent,
    FooterShopComponent,
    LoaderComponent,
    CreateShopModalComponent,
    FileSelectDirective,
    ProductListComponent,
    ConfirmModalComponent,
    ProductFormComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCGAvkD0KquhUPhJ4dedD0g6fhW8tYWouY'
    }),
    RouterModule,TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule
  ],
  providers: [
    RoleGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
