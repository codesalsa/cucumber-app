import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';

@Injectable()
export class WoocommerceProvider {

  WooCommerce: any; 

  constructor() {
    this.WooCommerce = WC({
      url: "http://themesalsa.net/easynow",
      consumerKey: 'ck_2a1389f5dc8457e69382a8aa4c8a0f5294cc2ee4',
      consumerSecret: 'cs_cffde7f0992d1df64eecd7d5101166ceba13c6b9'
    });
  }

  init(){
    return this.WooCommerce;
  }

}
