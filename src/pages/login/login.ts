import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, AlertController, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public toastCtrl: ToastController, public storage: Storage, public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.username = "";
    this.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    let loading = this.loadingCtrl.create({content : ""});
    loading.present();
    this.http.get("http://themesalsa.net/easynow/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
    .subscribe( (res) => {
      console.log(res.json());

      let response = res.json();
      loading.dismissAll();

      if(response.error){
        loading.dismissAll();
        this.toastCtrl.create({
          message: response.error,
          duration: 5000
        }).present();
        return;
      }

      this.storage.set("userLoginInfo", response).then( (data) =>{

        this.alertCtrl.create({
          title: "Login Successful",
          message: "You have been logged in successfully.",
          buttons: [{
            text: "OK",
            handler: () => {

              if(this.navParams.get("next")){
                this.navCtrl.push(this.navParams.get("next"));
              } else {
                this.navCtrl.pop();
              }             
            }
          }]
        }).present();


      })

    });
  }

}
