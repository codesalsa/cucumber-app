import { Component, NgZone } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as WC from 'woocommerce-api';

import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

import { ProductDetailsPage } from '../product-details/product-details';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  WooCommerce: any;
  products: any[];
  page: number;
  moreproducts: any[];
  sliders: any[];
  categories: any[];

  constructor(public navCtrl: NavController, public zone: NgZone, public loadingCtrl: LoadingController, public http: Http, private WP: WoocommerceProvider) {

    this.categories = [];

    
    // Fetch The slider Imagges from Wordpress Custom Post Type "slider"
    this.http.get('http://themesalsa.net/easynow/?json=get_posts&post_type=slider').map(res => res.json()).subscribe(data => {
        this.sliders = data.posts;
        console.log(data.posts);
    });

    this.page = 2;

    let loading = this.loadingCtrl.create({content : ""});

    this.WooCommerce = WP.init();

    loading.present();

    // Load categories

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

    this.loadMoreProducts();
    this.WooCommerce.getAsync("products?filter[tag]=vegetables").then( (data) => {
      this.zone.run(()=>{this.products = JSON.parse(data.body).products; })
      console.log(JSON.parse(data.body));
      loading.dismissAll();
    }, (err) => {
      console.log(err); 
    }); 

  }

  loadMoreProducts(){
    this.WooCommerce.getAsync("products?filter[tag]=vegetables&page=" + this.page).then( (data) => {
      this.zone.run(()=>{this.moreproducts = JSON.parse(data.body).products; })
    }, (err) => {
      console.log(err);
    });
  }

  openProductPage(product){
    this.navCtrl.push(ProductDetailsPage, {"product":product});
  }

}
