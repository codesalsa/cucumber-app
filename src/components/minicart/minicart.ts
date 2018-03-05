import { Component } from '@angular/core';

import { ModalController, NavController, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartPage } from '../../pages/cart/cart';

@Component({
  selector: 'minicart',
  templateUrl: 'minicart.html'
})
export class MinicartComponent {

  text: string;
  cartItems: any[] = [];
  cart_count: number = 0;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public storage: Storage, public events: Events) {
    
    this.storage.ready().then(()=>{
      this.storage.get("cart").then( (data)=>{
        this.cartItems = data;
        console.log(this.cartItems);
      });
    });

    this.events.subscribe("updateCart", () => {
      this.updateCart();
    });

  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  ionViewDidLoad(){
    this.updateCart();
  }

  updateCart(){
    this.storage.ready().then(()=>{
      this.storage.get("cart").then( (data)=>{

        let cartItems = data;

        console.log("cart count : " + data.length);

        if(cartItems && cartItems.length > 0){
          this.cart_count = cartItems.length;
        } else{
          this.cart_count = 0;
        }
      });
    });
  }

}

