import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import * as WC from 'woocommerce-api';

import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

import { Storage } from '@ionic/storage';


import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { CartPage } from '../cart/cart';
import { OrdersPage } from '../orders/orders';

import { ProductsByCategory } from '../products-by-category/products-by-category';

@IonicPage({})
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage;
  @ViewChild('content') childNavCtrl: NavController;
  WooCommerce: any;
  categories: any[];
  loggedIn: boolean;
  user: any;
  shownGroup = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public modalCtrl: ModalController, private WP: WoocommerceProvider) {
    this.homePage = HomePage;
    this.categories = [];
    this.user = [];


    this.WooCommerce = WP.init();

    this.WooCommerce.getAsync("products/categories").then((data) => {
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[] = JSON.parse(data.body).product_categories;

      for (let i = 0; i < temp.length; i++) {
        if (temp[i].parent == 0) {

          temp[i].subCategories = [];

          this.categories.push(temp[i]);
        }
      }

      //Groups Subcategories
      for (let i = 0; i < temp.length; i++){
        for (let j = 0; j < this.categories.length; j++){
          //console.log("Checking " + j + " " + i)
          if(this.categories[j].id == temp[i].parent){
            this.categories[j].subCategories.push(temp[i]);
          }
        }
      }



    }, (err) => {
      console.log(err)
    });
  }

  ionViewDidEnter() {
    this.storage.ready().then( () => {
      this.storage.get("userLoginInfo").then( (userLoginInfo) => {
        if(userLoginInfo != null){
          console.log("User Logged in !");
          this.user = userLoginInfo.user;
          console.log(this.user);
          this.loggedIn = true;
        } else{
          console.log("No user found.");
          this.user = {};
          this.loggedIn = false;
        }
      })
    })
  }

  openCategoryPage(category){
    this.childNavCtrl.setRoot(ProductsByCategory, {"category": category});
  }

  openPage(pageName: string){
    if(pageName == "signup"){
      this.navCtrl.push(SignupPage);
    }
    if (pageName == "login") {
      this.navCtrl.push(LoginPage);
    }
    if (pageName == "logout") {
      this.storage.remove("userLoginInfo").then( () => {
        this.user = {};
        this.loggedIn = false;
        this.navCtrl.push(LoginPage);
      });
    }
    if (pageName == "cart") {
      let modal = this.modalCtrl.create(CartPage);
      modal.present();
    }
    if (pageName == "home") {
      this.childNavCtrl.setRoot(HomePage);
    }
    if (pageName == "orders") {
      this.childNavCtrl.setRoot(OrdersPage);
    }
  }

  toggleGroup(group) {
      if (this.isGroupShown(group)) {
          this.shownGroup = null;
      } else {
          this.shownGroup = group;
      }
  };
  isGroupShown(group) {
      return this.shownGroup === group;
  };

}
