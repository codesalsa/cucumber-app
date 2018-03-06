import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ModalController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CartPage } from '../cart/cart';

import * as WC from 'woocommerce-api';

import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

import { ProductDetailsPage } from '../product-details/product-details';


@Component({ 
  selector: 'page-products-by-category',
  templateUrl: 'products-by-category.html',
})
export class ProductsByCategory {

  WooCommerce: any;
  products: any[];
  page: number;
  category: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public zone: NgZone, public loadingCtrl: LoadingController,  private WP: WoocommerceProvider, public storage: Storage, public toastCtrl: ToastController, public modalCtrl: ModalController, public events: Events) {

    this.page = 1;
    this.category = this.navParams.get("category");

    let loading = this.loadingCtrl.create({content : ""});

    this.WooCommerce = WP.init();

    loading.present();
    this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then( (data) => {
      console.log(JSON.parse(data.body));
      //this.products = JSON.parse(data.body).products;
      this.zone.run(()=>{this.products = JSON.parse(data.body).products; })
      loading.dismissAll();
    }, (err) => {
      console.log(err)
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsByCategory');
  }

  loadMoreProducts(event){
    if(event == null){
      this.page = 2;
      this.products = [];
    } else{
      this.page++;
      console.log("Getting page " + this.page);
      this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then( (data) => {
        let parseData = (JSON.parse(data.body).products);
        this.zone.run(()=>{this.products = this.products.concat(JSON.parse(data.body).products)});
        console.log(this.products);
        if(event != null){
          event.complete();
        }
        
  
        if(parseData.length < 10){
          event.enable(false);

          this.toastCtrl.create({
            message: "End of products!",
            duration: 5000
          }).present();
        }
      }, (err) => {
        console.log(err)
      });
    }
  }

  addToCart(product){

    this.storage.get("cart").then((data)=>{
      if(data == undefined || data.length == 0){
        data= [];

        data.push({
          "product": product,
          "qty": 1,
          "amount": parseFloat(product.price)
        })
      } else{
        let added = 0;
        for(let i=0; i<data.length; i++){
          if(product.id == data[i].product.id){
            console.log("Product is already in cart");

            let qty = data[i].qty;

            data[i].qty = qty+1;
            data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price);
            added = 1;
          }
        }

        if(added == 0){
          data.push({
            "product": product,
            "qty": 1,
            "amount": parseFloat(product.price)
          });
        }
      }
      this.storage.set("cart", data).then( ()=>{
        console.log("cart updated");
        console.log(data);

        this.events.publish("updateCart");

        this.toastCtrl.create({
          message: "Product added to Cart",
          duration: 3000
        }).present();
      })
    })
  }

}
