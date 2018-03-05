import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

import * as WC from 'woocommerce-api';

import { WoocommerceProvider } from '../../providers/woocommerce/woocommerce';

@IonicPage({})
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {

  WooCommerce: any;
  newOrder: any;
  paymentMethods: any[];
  paymentMethod: any;
  billing_shipping_same: boolean;
  userInfo: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public zone: NgZone, private WP: WoocommerceProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

    this.newOrder = {};
    this.newOrder.billing_address = {};
    this.newOrder.shipping_address = {};
    this.billing_shipping_same = false;
    let loading = this.loadingCtrl.create({content : ""});

    this.paymentMethods = [
      { method_id: "bacs", method_title: "Direct Bank Transfer" },
      { method_id: "cheque", method_title: "Cheque Payment" },
      { method_id: "cod", method_title: "Cash on Delivery" },
      { method_id: "paypal", method_title: "PayPal" }];

    this.WooCommerce = WP.init();

    this.storage.get("userLoginInfo").then((userLoginInfo) => {

      loading.present();

      this.userInfo = userLoginInfo.user;

      let email = userLoginInfo.user.email;

      this.WooCommerce.getAsync("customers/email/" + email).then((data) => {

        this.zone.run(()=>{this.newOrder = JSON.parse(data.body).customer});
        loading.dismissAll();

      })

    })
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;

    if (this.billing_shipping_same) {
      this.newOrder.shipping_address = this.newOrder.billing_address;
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  placeOrder(){
    let orderItems: any[] = [];
    let data: any = {};

    let paymentData: any = {};
    let loading = this.loadingCtrl.create({content : ""});

    let RazorpayCheckout: any;

    loading.present();

    this.paymentMethods.forEach((element, index) => {
      if (element.method_id == this.paymentMethod) {
        paymentData = element;
      }

      data = {
        payment_details: {
          method_id: paymentData.method_id,
          method_title: paymentData.method_title,
          paid: true
        },
  
        billing_address: this.newOrder.billing_address,
        shipping_address: this.newOrder.shipping_address,
        customer_id: this.userInfo.id || '',
        line_items: orderItems
      };

      if (paymentData.method_id == "paypal") {
        var options = {
            description: 'Credits towards consultation',
            image: 'https://i.imgur.com/3g7nmJC.png',
            currency: 'INR',
            key: 'rzp_test_EwUQfANUV4pxYR',
            amount: '5000',
            name: 'foo',
            prefill: {email: 'pranav@razorpay.com', contact: '8879524924', name: 'Pranav Gupta'},
            theme: {color: '#F37254'}
        }
        
        var successCallback = function(payment_id) {
            alert('payment_id: ' + payment_id);
        }
        
        var cancalCallback = function(error) {
            alert(error.description + ' (Error '+error.code+')');
        }
        
        RazorpayCheckout.open(options, successCallback, cancalCallback);

      } else{
        this.storage.get("cart").then((cart) => {
          
          cart.forEach((element, index) => {
            orderItems.push({
              product_id: element.product.id,
              quantity: element.qty
            });
          });

          data.line_items = orderItems;

          let orderData: any = {};

          orderData.order = data;

          this.WooCommerce.postAsync("orders", orderData).then((data) => {
            console.log(JSON.parse(data.body).order);

            let response = (JSON.parse(data.body).order);
            loading.dismissAll();

            this.alertCtrl.create({
              title: "Order Placed Successfully",
              message: "Your order has been placed successfully. Your order number is " + response.order_number,
              buttons: [{
                text: "OK",
                handler: () => {
                  this.navCtrl.setRoot(HomePage);
                }
              }]
            }).present();

          })
        })
      }
    });
  }

}
