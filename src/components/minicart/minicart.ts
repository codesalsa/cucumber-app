import { Component } from '@angular/core';

import { ModalController, NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from '../../pages/cart/cart';

@Component({
  selector: 'minicart',
  templateUrl: 'minicart.html'
})
export class MinicartComponent {

  text: string;
  cartItems: any[] = [];

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public storage: Storage) {
    
    this.storage.ready().then(()=>{
      this.storage.get("cart").then( (data)=>{
        this.cartItems = data;
        console.log(this.cartItems);
      });
    });

  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

}

