import { Component, NgZone } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import * as WC from 'woocommerce-api';

import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';


@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  WooCommerce: any;
  orders: any[];
  page: number;
  shownGroup = null;
  userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public zone: NgZone, private WP: WoocommerceProvider, public loadingCtrl: LoadingController) {

    this.page = 1;

    let loading = this.loadingCtrl.create({content : ""});

    this.WooCommerce = WP.init();

    loading.present();

    this.storage.get("userLoginInfo").then((userLoginInfo) => {

      this.userInfo = userLoginInfo.user;

      let cust_id = userLoginInfo.user.id;

      this.WooCommerce.getAsync("orders?filter[customer_id]=" + cust_id ).then( (data) => {
        console.log(JSON.parse(data.body));
        this.zone.run(()=>{this.orders = JSON.parse(data.body).orders; })
        loading.dismissAll();
      }, (err) => {
        console.log(err)
      });
 
    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
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
