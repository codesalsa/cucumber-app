import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as WC from 'woocommerce-api';

@Component({
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategory {

  WooCommerce: any;
  products: any[];
  page: number;
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.page = 1;
    this.category = this.navParams.get("category");

    this.WooCommerce = WC({
      url: "http://localhost:81/projects/mayoristabox/",
      consumerKey: 'ck_bdd0fd9f235898f10d70fc43eedff5e3f9c2d329',
      consumerSecret: 'cs_95d2fd9d1f3c0b44a7a1a81830f1814a1a1057d5'
    });

    this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then( (data) => {
      console.log(JSON.parse(data.body));
      this.products = JSON.parse(data.body).products;
    }, (err) => {
      console.log(err)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategory');
  }

}
