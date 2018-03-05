import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Woocommerce: any;
  products: any[];
  page: number;
  moreproducts: any[];

  constructor(public navCtrl: NavController) {

    this.page = 2;

    this.Woocommerce = WC({
      url: "http://localhost:81/projects/mayoristabox",
      consumerKey: 'ck_bdd0fd9f235898f10d70fc43eedff5e3f9c2d329',
      consumerSecret: 'cs_95d2fd9d1f3c0b44a7a1a81830f1814a1a1057d5'
    });

    this.loadMoreProducts();
    this.Woocommerce.getAsync("products").then( (data) => {
      this.products = JSON.parse(data.body).products;
      console.log(JSON.parse(data.body));
    }, (err) => {
      console.log(err);
    }); 

  }

  loadMoreProducts(){
    this.Woocommerce.getAsync("products?page=" + this.page).then( (data) => {
      this.moreproducts = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err);
    });
  }

}
