import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';
import { OneSignal } from '@ionic-native/onesignal';

import { CustomHeaderComponent } from '../components/custom-header/custom-header';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { ProductsByCategory } from '../pages/products-by-category/products-by-category';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { CartPage } from '../pages/cart/cart';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { CheckoutPage } from '../pages/checkout/checkout';
import { SearchPage } from '../pages/search/search';
import { OrdersPage } from '../pages/orders/orders';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WoocommerceProvider } from '../providers/woocommerce/woocommerce';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    ProductsByCategory,
    ProductDetailsPage,
    CartPage,
    SignupPage,
    LoginPage,
    CheckoutPage,
    SearchPage,
    OrdersPage,
    CustomHeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    ProductsByCategory,
    ProductDetailsPage,
    CartPage,
    SignupPage,
    LoginPage,
    CheckoutPage,
    SearchPage,
    OrdersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WoocommerceProvider,
    OneSignal
  ]
})
export class AppModule {}
