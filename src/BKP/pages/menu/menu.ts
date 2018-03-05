import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import * as WC from 'woocommerce-api';

import { HomePage } from '../home/home';

import { ProductsByCategory } from '../products-by-category/products-by-category';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  homePage;
  //@ViewChild('content') childNavCtrl: NavController;
  Woocommerce: any;
  categories: any[];
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.homePage = HomePage;
    this.categories = [];

    this.Woocommerce = WC({
      url: "http://localhost:81/projects/mayoristabox",
      consumerKey: 'ck_bdd0fd9f235898f10d70fc43eedff5e3f9c2d329',
      consumerSecret: 'cs_95d2fd9d1f3c0b44a7a1a81830f1814a1a1057d5'
    });

    this.Woocommerce.getAsync("products/categories").then( (data) => {
      console.log(JSON.parse(data.body).product_categories);

      let temp: any[] = JSON.parse(data.body).product_categories;

      for(let i=0; i<temp.length; i++){
        if(temp[i].parent == 0){
          this.categories.push(temp[i]);
        }
      }
    }, (err) => {
      console.log(err);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  openCategoryPage(category){

    this.navCtrl.setRoot(ProductsByCategory, {"category": category});

  }

}
