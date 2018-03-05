import { Component, Input } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { CartPage } from '../../pages/cart/cart';
import { SearchPage } from '../../pages/search/search';

@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeaderComponent {

  @Input('title') title: string;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {

  }

  openCart(){
    this.navCtrl.push(CartPage);
  }

  onSearch(){
    this.navCtrl.push(SearchPage);
  }

}
