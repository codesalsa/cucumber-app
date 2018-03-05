import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { CartPage } from '../cart/cart';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  product: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public toastCtrl: ToastController, public modalCtrl: ModalController) {

    this.product = this.navParams.get("product");
    console.log(this.product);

  }

  openCart(){
    this.modalCtrl.create(CartPage).present();
  }

}
