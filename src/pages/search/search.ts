import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as WC from 'woocommerce-api';
import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

import { ProductDetailsPage } from '../product-details/product-details';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  searchQuery: string = "";
  WooCommerce: any;
  products: any[] = [];
  page: number = 2;

  constructor(public navCtrl: NavController, public navParams: NavParams, private WP: WoocommerceProvider, public zone: NgZone, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    console.log(this.navParams.get("searchQuery"));

    //this.searchQuery = this.navParams.get("searchQuery");
    this.searchQuery;

    this.WooCommerce = WP.init();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  onSearch(){
    if(this.searchQuery.length > 0){
      let loading = this.loadingCtrl.create({content : ""});
  
      loading.present();
  
      this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery).then( (searchData) => {
        this.zone.run(()=>{this.products = JSON.parse(searchData.body).products});
        console.log(JSON.parse(searchData.body));
        loading.dismissAll();
      }, (err) => {
        console.log(err);
      }); 
    }
  }

  loadMoreProducts(event){
    this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery + "&page=" + this.page).then( (searchData) => {
      this.zone.run(()=>{this.products = this.products.concat(JSON.parse(searchData.body).products)});

      if(JSON.parse(searchData.body).products.length < 10){
        event.enable(false);

        this.toastCtrl.create({
          message: "End of products!",
          duration: 5000
        }).present();
      }

      event.complete();
      this.page ++;
    }); 
  }

  openProductPage(product){
    this.navCtrl.push(ProductDetailsPage, {"product":product});
  }

  closeCancel(){
    this.navCtrl.pop();
  }

}
