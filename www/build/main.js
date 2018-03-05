webpackJsonp([3],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsPage = (function () {
    function ProductDetailsPage(navCtrl, navParams, storage, toastCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.product = this.navParams.get("product");
        console.log(this.product);
    }
    ProductDetailsPage.prototype.addToCart = function (product) {
        var _this = this;
        this.storage.get("cart").then(function (data) {
            if (data == null || data.length == 0) {
                data = [];
                data.push({
                    "product": product,
                    "qty": 1,
                    "amount": parseFloat(product.price)
                });
            }
            else {
                var added = 0;
                for (var i = 0; i < data.length; i++) {
                    if (product.id == data[i].product.id) {
                        console.log("Product is already in cart");
                        var qty = data[i].qty;
                        data[i].qty = qty + 1;
                        data[i].amount = parseFloat(data[i].amount) + parseFloat(data[i].product.price);
                        added = 1;
                    }
                }
                if (added == 0) {
                    data.push({
                        "product": product,
                        "qty": 1,
                        "amount": parseFloat(product.price)
                    });
                }
            }
            _this.storage.set("cart", data).then(function () {
                console.log("cart updated");
                console.log(data);
                _this.toastCtrl.create({
                    message: "Product added to Cart",
                    duration: 3000
                }).present();
            });
        });
    };
    ProductDetailsPage.prototype.openCart = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__cart_cart__["a" /* CartPage */]).present();
    };
    ProductDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-details',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/product-details/product-details.html"*/'<ion-header>\n    <custom-header title="{{product.title}}"></custom-header>\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-slides pager>\n      <ion-slide *ngFor="let image of product.images">\n        <img [src]="image.src" />\n      </ion-slide>\n    </ion-slides>\n    <ion-card-content>\n      <ion-card-title class="prod-single-title">\n        <span [innerHTML]="product.title"></span><br />\n        <ion-chip *ngFor="let cat of product.categories" color="dark" class="single-prod-cats">\n          <ion-label color="light">\n            {{cat}}\n          </ion-label>\n        </ion-chip>\n      </ion-card-title>\n      <p [innerHTML]="product.description"></p>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="product.attributes.length > 0">\n    <ion-card-content>\n      <ion-card-title class="specification-title">Specifications</ion-card-title>\n      <ion-grid>\n        <ion-row *ngFor="let attr of product.attributes">\n          <ion-col col-4><strong>{{attr.name}}</strong></ion-col>\n          <ion-col col-8>\n            <span *ngFor="let option of attr.options">\n              {{option}}\n            </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n  \n</ion-content>\n\n<ion-footer>\n  <ion-card>\n      <ion-card-content class="footer-card-content">\n          <ion-grid>\n              <ion-row>\n                  <ion-col col-4 class="single-price-col">\n                      <p [innerHTML]="product.price_html"></p>\n                  </ion-col>\n                  <ion-col col-8>\n                      <button ion-button icon-left block color="danger" (click)="addToCart(product)" class="single-prod-action">\n                        <ion-icon name="basket"></ion-icon> Add to Cart\n                      </button>\n                  </ion-col>\n              </ion-row>\n          </ion-grid>\n      </ion-card-content>\n    </ion-card>\n</ion-footer>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/product-details/product-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}());

//# sourceMappingURL=product-details.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartPage = (function () {
    function CartPage(navCtrl, navParams, storage, toastController, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastController = toastController;
        this.viewCtrl = viewCtrl;
        this.cartItems = [];
        this.showEmptyCartMessage = false;
        this.total = 0.0;
        this.storage.ready().then(function () {
            _this.storage.get("cart").then(function (data) {
                _this.cartItems = data;
                console.log(_this.cartItems);
                if (_this.cartItems.length > 0) {
                    _this.cartItems.forEach(function (item, index) {
                        _this.total = _this.total + (item.product.price * item.qty);
                    });
                }
                else {
                    _this.showEmptyCartMessage = true;
                }
            });
        });
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.removeFromCart = function (item, i) {
        var _this = this;
        var price = item.product.price;
        var qty = item.qty;
        this.cartItems.splice(i, 1);
        this.storage.set("cart", this.cartItems).then(function () {
            _this.total = _this.total - (price * qty);
        });
        if (this.cartItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
    };
    CartPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.storage.get("userLoginInfo").then(function (data) {
            if (data != null) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */]);
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */], { next: __WEBPACK_IMPORTED_MODULE_4__checkout_checkout__["a" /* CheckoutPage */] });
            }
        });
    };
    CartPage.prototype.changeQty = function (item, i, change) {
        var _this = this;
        var price = 0;
        var qty = 0;
        price = parseFloat(item.product.price);
        qty = item.qty;
        if (change < 0 && item.qty == 1) {
            return;
        }
        qty = qty + change;
        item.qty = qty;
        item.amount = qty * price;
        item.price = price;
        this.cartItems[i] = item;
        this.storage.set("cart", this.cartItems).then(function () {
            if (change > 0) {
                _this.total = _this.total + item.price;
            }
            else {
                _this.total = _this.total - item.price;
            }
            _this.toastController.create({
                message: "Cart Updated.",
                duration: 2000,
            }).present();
        });
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/cart/cart.html"*/'<ion-header>\n  <ion-navbar color="danger">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Your Cart</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="light" (click)="onSearch()">\n        <span class="flaticon flaticon-magnifying-glass"></span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card>\n        <ion-grid>\n          <ion-row [hidden]="!showEmptyCartMessage">\n            <ion-col class="empty-cart-cont">\n              <div class="empty-cart-icon">\n                <span class="flaticon flaticon-shopping-cart-1"></span>\n              </div>\n              <p>There are no items in your cart.<br />Enjoy great shopping experience with us!</p>\n              <button ion-button color="danger" (click)="closeModal()">Continue Shopping</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    </ion-card>\n\n    <ion-list id="prod-cart-list">\n      <ion-item class="cart-list-item" *ngFor="let item of cartItems; let i = index" text-wrap>\n        <ion-thumbnail item-left>\n          <img [src]="item.product.featured_src" />\n        </ion-thumbnail>\n    \n        <h2> {{ item.product.title }} </h2>\n        <ion-row no-padding>\n          <ion-col col-3>\n            <p class="cart-item-price">\n                <span [innerHTML]="item.product.price_html"></span>\n            </p>\n          </ion-col>\n          <ion-col col-6>\n            <button class="qty-btn" ion-button icon-only clear (click)="changeQty(item, i, -1)">\n              <ion-icon name="ios-remove-circle-outline"></ion-icon>\n            </button>\n            <button class="qty-txt" ion-button clear>\n              {{ item.qty }}\n            </button>\n            <button class="qty-btn" ion-button icon-only clear (click)="changeQty(item, i, 1)">\n              <ion-icon name="ios-add-circle-outline"></ion-icon>\n            </button>\n          </ion-col>\n          <ion-col col-3>\n              <button class="cart-remove-btn" ion-button item-right clear color="danger" (click)="removeFromCart(item, i)">\n                  <ion-icon name="ios-trash-outline"></ion-icon>\n              </button>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-list>\n\n</ion-content>\n\n<ion-footer [hidden]="showEmptyCartMessage">\n    <ion-toolbar color="orange">\n      <div class="total-cont">\n        <h3>{{cartItems.length}} Items</h3>\n        <h2>INR {{ total }}</h2>\n      </div>\n      <div class="checkout-btn-cont">\n          <button ion-button color="light" clear (click)="checkout()">\n            Checkout\n            <span class="flaticon flaticon-right-chevron-1"></span>\n          </button>\n      </div>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, http, toastCtrl, storage, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.username = "";
        this.password = "";
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "" });
        loading.present();
        this.http.get("http://themesalsa.net/easynow/api/auth/generate_auth_cookie/?insecure=cool&username=" + this.username + "&password=" + this.password)
            .subscribe(function (res) {
            console.log(res.json());
            var response = res.json();
            loading.dismissAll();
            if (response.error) {
                loading.dismissAll();
                _this.toastCtrl.create({
                    message: response.error,
                    duration: 5000
                }).present();
                return;
            }
            _this.storage.set("userLoginInfo", response).then(function (data) {
                _this.alertCtrl.create({
                    title: "Login Successful",
                    message: "You have been logged in successfully.",
                    buttons: [{
                            text: "OK",
                            handler: function () {
                                if (_this.navParams.get("next")) {
                                    _this.navCtrl.push(_this.navParams.get("next"));
                                }
                                else {
                                    _this.navCtrl.pop();
                                }
                            }
                        }]
                }).present();
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar color="danger" class="transparent-navbar">\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Account Login</ion-title>\n      <ion-buttons end>\n        <button ion-button icon-only color="light" (click)="onSearch()">\n          <span class="flaticon flaticon-magnifying-glass"></span>\n        </button>\n        <button ion-button icon-only color="light" (click)="openCart()">\n            <span class="flaticon flaticon-commerce-2"></span>\n          </button>\n      </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    <img src="../assets/imgs/account_bg.jpg" class="login-cont-bg" />\n  <ion-card style="margin: 0px; border: none; width: 100%;">\n    <img src="./assets/imgs/mb_logo_small.png" style="width:70%; margin: auto; padding:20px;" />\n  </ion-card>\n\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" [(ngModel)]="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="danger" (click)="login()">Login</button>\n  <button ion-button clear block color="danger">No Account? Sign Up Here</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__product_details_product_details__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl, zone, loadingCtrl, http, WP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.WP = WP;
        this.categories = [];
        // Fetch The slider Imagges from Wordpress Custom Post Type "slider"
        this.http.get('http://themesalsa.net/easynow/?json=get_posts&post_type=slider').map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.sliders = data.posts;
            console.log(data.posts);
        });
        this.page = 2;
        var loading = this.loadingCtrl.create({ content: "" });
        this.WooCommerce = WP.init();
        loading.present();
        // Load categories
        this.WooCommerce.getAsync("products/categories").then(function (data) {
            console.log(JSON.parse(data.body).product_categories);
            var temp = JSON.parse(data.body).product_categories;
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent == 0) {
                    temp[i].subCategories = [];
                    _this.categories.push(temp[i]);
                }
            }
            //Groups Subcategories
            for (var i = 0; i < temp.length; i++) {
                for (var j = 0; j < _this.categories.length; j++) {
                    //console.log("Checking " + j + " " + i)
                    if (_this.categories[j].id == temp[i].parent) {
                        _this.categories[j].subCategories.push(temp[i]);
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
        this.loadMoreProducts();
        this.WooCommerce.getAsync("products?filter[tag]=vegetables").then(function (data) {
            _this.zone.run(function () { _this.products = JSON.parse(data.body).products; });
            console.log(JSON.parse(data.body));
            loading.dismissAll();
        }, function (err) {
            console.log(err);
        });
    }
    HomePage.prototype.loadMoreProducts = function () {
        var _this = this;
        this.WooCommerce.getAsync("products?filter[tag]=vegetables&page=" + this.page).then(function (data) {
            _this.zone.run(function () { _this.moreproducts = JSON.parse(data.body).products; });
        }, function (err) {
            console.log(err);
        });
    };
    HomePage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/home/home.html"*/'<ion-header>\n    <custom-header title="Easy NOW"></custom-header>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-slides *ngIf="sliders && sliders.length" autoplay="3000" class="slideroption" pager="true"  loop="true" speed="300">\n      <ion-slide *ngFor="let slide of sliders">\n          <span *ngFor="let item of slide.attachments">\n              <img src="{{item.images.full.url}}" />\n          </span>\n      </ion-slide>\n    </ion-slides>\n  </ion-card>\n  <div *ngFor="let category of categories; let i = index" class="card-background-page">\n    <ion-card class="home-cat-item" col-12 *ngFor="let sub of category.subCategories" (click)="openCategoryPage(sub)">\n      <img src="{{sub.image}}" />\n      <div class="card-title" [innerHTML]="sub.name"></div>\n    </ion-card>\n  </div>\n  <ion-row>\n      <ion-col col-6 *ngFor="let product of moreproducts" text-wrap (click)="openProductPage(product)">\n        <ion-thumbnail item-left>\n            <img [src]="product.featured_src" />\n          </ion-thumbnail>\n          <h2 [innerHTML]="product.title.substr(0, 50) + \'...\'"></h2>\n          <p>\n            <span [innerHTML]="product.price_html"></span>\n          </p>\n      </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutPage = (function () {
    function CheckoutPage(navCtrl, navParams, storage, zone, WP, alertCtrl, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.zone = zone;
        this.WP = WP;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.newOrder = {};
        this.newOrder.billing_address = {};
        this.newOrder.shipping_address = {};
        this.billing_shipping_same = false;
        var loading = this.loadingCtrl.create({ content: "" });
        this.paymentMethods = [
            { method_id: "bacs", method_title: "Direct Bank Transfer" },
            { method_id: "cheque", method_title: "Cheque Payment" },
            { method_id: "cod", method_title: "Cash on Delivery" },
            { method_id: "paypal", method_title: "PayPal" }
        ];
        this.WooCommerce = WP.init();
        this.storage.get("userLoginInfo").then(function (userLoginInfo) {
            loading.present();
            _this.userInfo = userLoginInfo.user;
            var email = userLoginInfo.user.email;
            _this.WooCommerce.getAsync("customers/email/" + email).then(function (data) {
                _this.zone.run(function () { _this.newOrder = JSON.parse(data.body).customer; });
                loading.dismissAll();
            });
        });
    }
    CheckoutPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
        if (this.billing_shipping_same) {
            this.newOrder.shipping_address = this.newOrder.billing_address;
        }
    };
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this = this;
        var orderItems = [];
        var data = {};
        var paymentData = {};
        var loading = this.loadingCtrl.create({ content: "" });
        var RazorpayCheckout;
        loading.present();
        this.paymentMethods.forEach(function (element, index) {
            if (element.method_id == _this.paymentMethod) {
                paymentData = element;
            }
            data = {
                payment_details: {
                    method_id: paymentData.method_id,
                    method_title: paymentData.method_title,
                    paid: true
                },
                billing_address: _this.newOrder.billing_address,
                shipping_address: _this.newOrder.shipping_address,
                customer_id: _this.userInfo.id || '',
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
                    prefill: { email: 'pranav@razorpay.com', contact: '8879524924', name: 'Pranav Gupta' },
                    theme: { color: '#F37254' }
                };
                var successCallback = function (payment_id) {
                    alert('payment_id: ' + payment_id);
                };
                var cancalCallback = function (error) {
                    alert(error.description + ' (Error ' + error.code + ')');
                };
                RazorpayCheckout.open(options, successCallback, cancalCallback);
            }
            else {
                _this.storage.get("cart").then(function (cart) {
                    cart.forEach(function (element, index) {
                        orderItems.push({
                            product_id: element.product.id,
                            quantity: element.qty
                        });
                    });
                    data.line_items = orderItems;
                    var orderData = {};
                    orderData.order = data;
                    _this.WooCommerce.postAsync("orders", orderData).then(function (data) {
                        console.log(JSON.parse(data.body).order);
                        var response = (JSON.parse(data.body).order);
                        loading.dismissAll();
                        _this.alertCtrl.create({
                            title: "Order Placed Successfully",
                            message: "Your order has been placed successfully. Your order number is " + response.order_number,
                            buttons: [{
                                    text: "OK",
                                    handler: function () {
                                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                                    }
                                }]
                        }).present();
                    });
                });
            }
        });
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/checkout/checkout.html"*/'<ion-header>\n    <custom-header title="Checkout"></custom-header>\n</ion-header>\n\n\n<ion-content>\n    <ion-list>\n      <ion-item-divider color="danger">Personal Details</ion-item-divider>\n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.billing_address.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.billing_address.last_name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input readonly type="email" [(ngModel)]="newOrder.email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-input readonly type="text" [(ngModel)]="newOrder.username"></ion-input>\n      </ion-item>\n\n      <ion-item-divider color="danger">Billing Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.billing_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.billing_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]="newOrder.billing_address.country">\n          <ion-option value="India" selected="true">India</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newOrder.billing_address.state">\n          <ion-option value="New Delhi">New Delhi</ion-option>\n          <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n          <ion-option value="Maharashtra">Maharashtra</ion-option>\n          <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n          <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.billing_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item>\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newOrder.billing_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newOrder.billing_address.phone"></ion-input>        \n      </ion-item>\n\n      <ion-item>\n        <ion-label>Same Shipping Details</ion-label>\n        <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n      </ion-item>\n\n      <ion-item-divider color="danger" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n      \n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.shipping_address.first_name"></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.shipping_address.last_name"></ion-input>\n      </ion-item>\n      \n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping_address.address_1"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping_address.address_2"></ion-textarea>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]="newOrder.shipping_address.country">\n          <ion-option value="India" selected="true">India</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newOrder.shipping_address.state">\n          <ion-option value="New Delhi">New Delhi</ion-option>\n          <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n          <ion-option value="Maharashtra">Maharashtra</ion-option>\n          <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n          <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="newOrder.shipping_address.city"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newOrder.shipping_address.postcode"></ion-input>        \n      </ion-item>\n\n      <ion-item *ngIf="!billing_shipping_same">\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newOrder.shipping_address.phone"></ion-input>        \n      </ion-item>\n\n      <ion-item-divider color="danger">Payment Details</ion-item-divider>\n\n      <ion-item>\n        <ion-label>Payment Method</ion-label>\n        <ion-select [(ngModel)]="paymentMethod">\n          <ion-option *ngFor="let p of paymentMethods" value="{{p.method_id}}">{{ p.method_title }}</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="danger" (click)="placeOrder()">Place Order</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/checkout/checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cart_cart__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__orders_orders__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_by_category_products_by_category__ = __webpack_require__(299);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MenuPage = (function () {
    function MenuPage(navCtrl, navParams, storage, modalCtrl, WP) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.WP = WP;
        this.shownGroup = null;
        this.homePage = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.categories = [];
        this.user = [];
        this.WooCommerce = WP.init();
        this.WooCommerce.getAsync("products/categories").then(function (data) {
            console.log(JSON.parse(data.body).product_categories);
            var temp = JSON.parse(data.body).product_categories;
            for (var i = 0; i < temp.length; i++) {
                if (temp[i].parent == 0) {
                    temp[i].subCategories = [];
                    _this.categories.push(temp[i]);
                }
            }
            //Groups Subcategories
            for (var i = 0; i < temp.length; i++) {
                for (var j = 0; j < _this.categories.length; j++) {
                    //console.log("Checking " + j + " " + i)
                    if (_this.categories[j].id == temp[i].parent) {
                        _this.categories[j].subCategories.push(temp[i]);
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    }
    MenuPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.ready().then(function () {
            _this.storage.get("userLoginInfo").then(function (userLoginInfo) {
                if (userLoginInfo != null) {
                    console.log("User Logged in !");
                    _this.user = userLoginInfo.user;
                    console.log(_this.user);
                    _this.loggedIn = true;
                }
                else {
                    console.log("No user found.");
                    _this.user = {};
                    _this.loggedIn = false;
                }
            });
        });
    };
    MenuPage.prototype.openCategoryPage = function (category) {
        this.childNavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__products_by_category_products_by_category__["a" /* ProductsByCategory */], { "category": category });
    };
    MenuPage.prototype.openPage = function (pageName) {
        var _this = this;
        if (pageName == "signup") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
        }
        if (pageName == "login") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
        }
        if (pageName == "logout") {
            this.storage.remove("userLoginInfo").then(function () {
                _this.user = {};
                _this.loggedIn = false;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
            });
        }
        if (pageName == "cart") {
            var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__cart_cart__["a" /* CartPage */]);
            modal.present();
        }
        if (pageName == "home") {
            this.childNavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }
        if (pageName == "orders") {
            this.childNavCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__orders_orders__["a" /* OrdersPage */]);
        }
    };
    MenuPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    MenuPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MenuPage.prototype, "childNavCtrl", void 0);
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/menu/menu.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <div id="user-profile-cont" *ngIf="loggedIn">\n        <img src="../assets/imgs/account_bg.jpg" class="profile-details-cont-bg" />\n      <div class="profile-details-cont">\n        \n        <div class="profile-pic">\n          <img src="{{ (this.user.avatar) }}" class="profile-img" />\n        </div>\n        <h2>{{ (this.user.firstname) }} {{ (this.user.lastname) }}</h2>\n        <h3 class="email">{{  (this.user.email)  }}</h3>\n      </div>\n    </div>\n\n    <div id="user-profile-cont" *ngIf="!loggedIn" class="not-loggedin">\n        <img src="../assets/imgs/account_bg.jpg" class="profile-details-cont-bg" />\n      <div class="profile-details-cont">\n        \n        <div class="profile-pic">\n          <img src="../assets/imgs/easynow_logo_small.png" class="profile-img" />\n        </div>\n      </div>\n    </div>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose (click) = "openPage(\'home\')">\n          <span class="flaticon flaticon-building" item-left></span>\n          <h2>Home</h2>\n          <p>Easynow Home</p>\n      </ion-item>\n      <ion-item-divider color="danger">Categories</ion-item-divider>\n      \n      <ion-card *ngFor="let category of categories; let i = index" class="menu-cat-items">\n        <ion-item color="light" text-wrap (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}" *ngIf="category.count > 1">\n          <span class="flaticon {{category.description}}" item-left></span>\n          <h2 [innerHTML]="category.name"></h2>\n          <span class="flaticon flaticon-right-chevron flaticon-rightarrow" item-right></span>\n      </ion-item>\n\n        <!-- Optional Subcategories Display -->\n        <ion-list no-lines *ngIf="isGroupShown(i)"  class="menu-subcat-items">\n          <ion-item *ngFor="let sub of category.subCategories" text-wrap (click)="openCategoryPage(sub)" menuClose>\n            <span class="flaticon {{sub.description}}" item-left></span>\n            <h2 [innerHTML]="sub.name"></h2>\n            <!-- <p> {{ sub.description }}</p> -->\n\n          </ion-item>\n        </ion-list>\n      </ion-card>\n\n      <ion-item-divider color="danger">Account</ion-item-divider>\n\n      <ion-item (click)="openPage(\'signup\')" menuClose *ngIf="!loggedIn">\n        <span class="flaticon flaticon-profile" item-left></span>\n        <h2>Sign Up</h2>\n        <p>For a new account</p>\n      </ion-item>\n\n      <ion-item (click)="openPage(\'login\')" menuClose *ngIf="!loggedIn">\n        <span class="flaticon flaticon-logout" item-left></span>\n        <h2>Login</h2>\n        <p>Using email and password</p>\n      </ion-item>\n\n      <ion-item menuClose *ngIf="loggedIn" (click) = "openPage(\'cart\')">\n          <span class="flaticon flaticon-shopping-cart" item-left></span>\n        <h2>Your Cart</h2>\n        <p>Check Items in your Cart</p>\n      </ion-item>\n\n      <ion-item menuClose *ngIf="loggedIn" (click) = "openPage(\'orders\')">\n          <span class="flaticon flaticon-list" item-left></span>\n        <h2>My Orders</h2>\n        <p>Check your recent Orders</p>\n      </ion-item>\n\n      <ion-item menuClose *ngIf="loggedIn" (click) = "openPage(\'orders\')">\n          <span class="flaticon flaticon-like" item-left></span>\n        <h2>My Wishlist</h2>\n        <p>Check your Wishlist</p>\n      </ion-item>\n\n      <ion-item menuClose *ngIf="loggedIn" (click) = "openPage(\'logout\')">\n        <span class="flaticon flaticon-logout" item-left></span>\n        <h2>Logout</h2>\n        <p>of your Account</p>\n      </ion-item>\n\n    </ion-list>\n  </ion-content> \n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="homePage" #content></ion-nav>'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/menu/menu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about/about.module": [
		603,
		0
	],
	"../pages/checkout/checkout.module": [
		604,
		2
	],
	"../pages/menu/menu.module": [
		605,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 236;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, toastCtrl, alertCtrl, WP, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.WP = WP;
        this.loadingCtrl = loadingCtrl;
        this.newUser = {};
        this.newUser.billing_address = {};
        this.newUser.shipping_address = {};
        this.billing_shipping_same = false;
        this.WooCommerce = WP.init();
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "" });
        loading.present();
        var customerData = {
            customer: {}
        };
        customerData.customer = {
            "email": this.newUser.email,
            "first_name": this.newUser.first_name,
            "last_name": this.newUser.last_name,
            "username": this.newUser.username,
            "password": this.newUser.password,
            "billing_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.billing_address.address_1,
                "address_2": this.newUser.billing_address.address_2,
                "city": this.newUser.billing_address.city,
                "state": this.newUser.billing_address.state,
                "postcode": this.newUser.billing_address.postcode,
                "country": this.newUser.billing_address.country,
                "email": this.newUser.email,
                "phone": this.newUser.billing_address.phone
            },
            "shipping_address": {
                "first_name": this.newUser.first_name,
                "last_name": this.newUser.last_name,
                "company": "",
                "address_1": this.newUser.shipping_address.address_1,
                "address_2": this.newUser.shipping_address.address_2,
                "city": this.newUser.shipping_address.city,
                "state": this.newUser.shipping_address.state,
                "postcode": this.newUser.shipping_address.postcode,
                "country": this.newUser.shipping_address.country
            }
        };
        if (this.billing_shipping_same) {
            this.newUser.shipping_address = this.newUser.shipping_address;
        }
        this.WooCommerce.postAsync('customers', customerData).then(function (data) {
            var response = (JSON.parse(data.body));
            if (response.customer) {
                loading.dismissAll();
                _this.alertCtrl.create({
                    title: "Account Created",
                    message: "Your account has been created successfully! Please login to proceed.",
                    buttons: [{
                            text: "Login",
                            handler: function () {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
                            }
                        }]
                }).present();
            }
            else if (response.errors) {
                loading.dismissAll();
                _this.toastCtrl.create({
                    message: response.errors[0].message,
                    showCloseButton: true
                }).present();
            }
        });
    };
    SignupPage.prototype.checkEmail = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({ content: "" });
        loading.present();
        var validEmail = false;
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.newUser.email)) {
            this.WooCommerce.getAsync('customers/email/' + this.newUser.email).then(function (data) {
                var res = (JSON.parse(data.body));
                if (res.error) {
                    validEmail = true;
                    loading.dismissAll();
                    _this.toastCtrl.create({
                        message: "Congratulations. Email is good to go.",
                        duration: 3000
                    }).present();
                }
                else {
                    validEmail = false;
                    loading.dismissAll();
                    _this.toastCtrl.create({
                        message: "Email already registered. Please check.",
                        duration: 3000
                    }).present();
                }
                console.log(validEmail);
            });
        }
        else {
            validEmail = false;
            loading.dismissAll();
            this.toastCtrl.create({
                message: "Invalid Email. Please check.",
                duration: 3000
            }).present();
            console.log(validEmail);
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/signup/signup.html"*/'<ion-header>\n    <custom-header title="Customer Signup"></custom-header>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n      <ion-item-divider color="danger">Personal Details</ion-item-divider>\n  \n      <ion-item>\n        <ion-label>First Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.first_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Last Name</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.last_name"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="newUser.email" (blur)="checkEmail()"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="newUser.password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>Confirm Password</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.confirm_password"></ion-input>\n      </ion-item>\n  \n      <ion-item-divider color="danger">Billing Details</ion-item-divider>\n  \n      <ion-item>\n        <ion-label>Address Line 1</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_1"></ion-textarea>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Address Line 2</ion-label>\n        <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.billing_address.address_2"></ion-textarea>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Country</ion-label>\n        <ion-select [(ngModel)]="newUser.billing_address.country">\n          <ion-option value="India" selected="true">India</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>State</ion-label>\n        <ion-select [(ngModel)]="newUser.billing_address.state">\n          <ion-option value="New Delhi" selected="true">New Delhi</ion-option>\n          <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n          <ion-option value="Maharashtra">Maharashtra</ion-option>\n          <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n          <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n        </ion-select>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>City</ion-label>\n        <ion-input type="text" [(ngModel)]="newUser.billing_address.city"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Postal Code</ion-label>\n        <ion-input type="number" clearInput [(ngModel)]="newUser.billing_address.postcode"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Phone</ion-label>\n        <ion-input type="tel" clearInput [(ngModel)]="newUser.billing_address.phone"></ion-input>\n      </ion-item>\n  \n      <ion-item>\n        <ion-label>Same Shipping Details</ion-label>\n        <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n      </ion-item>\n  \n  \n      <ion-item-divider color="danger" *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Address Line 1</ion-label>\n          <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_1"></ion-textarea>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Address Line 2</ion-label>\n          <ion-textarea type="text" maxlength="80" [(ngModel)]="newUser.shipping_address.address_2"></ion-textarea>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Country</ion-label>\n          <ion-select [(ngModel)]="newUser.shipping_address.country">\n            <ion-option value="India" selected="true">India</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>State</ion-label>\n          <ion-select [(ngModel)]="newUser.shipping_address.state">\n            <ion-option value="New Delhi" selected="true">New Delhi</ion-option>\n            <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n            <ion-option value="Maharashtra">Maharashtra</ion-option>\n            <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n            <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>City</ion-label>\n          <ion-input type="text" [(ngModel)]="newUser.shipping_address.city"></ion-input>        \n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Postal Code</ion-label>\n          <ion-input type="number" clearInput [(ngModel)]="newUser.shipping_address.postcode"></ion-input>        \n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Phone</ion-label>\n          <ion-input type="tel" clearInput [(ngModel)]="newUser.shipping_address.phone"></ion-input>        \n        </ion-item>\n  \n    </ion-list>\n</ion-content>\n\n<ion-footer>\n  <button ion-button block color="danger" (click)="signup()">Sign Up</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, storage, zone, WP, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.zone = zone;
        this.WP = WP;
        this.loadingCtrl = loadingCtrl;
        this.shownGroup = null;
        this.page = 1;
        var loading = this.loadingCtrl.create({ content: "" });
        this.WooCommerce = WP.init();
        loading.present();
        this.storage.get("userLoginInfo").then(function (userLoginInfo) {
            _this.userInfo = userLoginInfo.user;
            var cust_id = userLoginInfo.user.id;
            _this.WooCommerce.getAsync("orders?filter[customer_id]=" + cust_id).then(function (data) {
                console.log(JSON.parse(data.body));
                _this.zone.run(function () { _this.orders = JSON.parse(data.body).orders; });
                loading.dismissAll();
            }, function (err) {
                console.log(err);
            });
        });
    }
    OrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrdersPage');
    };
    OrdersPage.prototype.toggleGroup = function (group) {
        if (this.isGroupShown(group)) {
            this.shownGroup = null;
        }
        else {
            this.shownGroup = group;
        }
    };
    ;
    OrdersPage.prototype.isGroupShown = function (group) {
        return this.shownGroup === group;
    };
    ;
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/orders/orders.html"*/'<ion-header>\n  <custom-header title="My Orders"></custom-header>\n</ion-header>\n\n\n<ion-content>\n  <ion-list class="accordion-list">\n    <!-- First Level -->\n    <ion-list-header *ngFor="let item of orders; let i = index" no-lines no-padding>\n      <!-- Toggle Button -->\n      <button ion-item (click)="toggleGroup(i)" [ngClass]="{active: isGroupShown(i)}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n          Order No. #{{ item.id }}\n      </button>\n\n\n \n      <ion-list no-lines *ngIf="isGroupShown(i)">\n        <!-- Second Level -->\n        <ion-list-header *ngFor="let child of item.line_items" no-padding>\n          <!-- Toggle Button -->\n          <button ion-item class="child">\n            {{ child.id }}\n          </button>\n \n        </ion-list-header>\n      </ion-list>\n       \n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], OrdersPage);
    return OrdersPage;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsByCategory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsByCategory = (function () {
    function ProductsByCategory(navCtrl, navParams, zone, loadingCtrl, WP, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.WP = WP;
        this.toastCtrl = toastCtrl;
        this.page = 1;
        this.category = this.navParams.get("category");
        var loading = this.loadingCtrl.create({ content: "" });
        this.WooCommerce = WP.init();
        loading.present();
        this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug).then(function (data) {
            console.log(JSON.parse(data.body));
            //this.products = JSON.parse(data.body).products;
            _this.zone.run(function () { _this.products = JSON.parse(data.body).products; });
            loading.dismissAll();
        }, function (err) {
            console.log(err);
        });
    }
    ProductsByCategory.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsByCategory');
    };
    ProductsByCategory.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    ProductsByCategory.prototype.loadMoreProducts = function (event) {
        var _this = this;
        if (event == null) {
            this.page = 2;
            this.products = [];
        }
        else {
            this.page++;
            console.log("Getting page " + this.page);
            this.WooCommerce.getAsync("products?filter[category]=" + this.category.slug + "&page=" + this.page).then(function (data) {
                var parseData = (JSON.parse(data.body).products);
                _this.zone.run(function () { _this.products = _this.products.concat(JSON.parse(data.body).products); });
                console.log(_this.products);
                if (event != null) {
                    event.complete();
                }
                if (parseData.length < 10) {
                    event.enable(false);
                    _this.toastCtrl.create({
                        message: "End of products!",
                        duration: 5000
                    }).present();
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    ProductsByCategory = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products-by-category',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/products-by-category/products-by-category.html"*/'<ion-header>\n  <custom-header title="{{category.name}}"></custom-header>\n</ion-header>\n\n\n<ion-content id="prod-cat-list">\n<ion-list>\n  <ion-item class="cat-list-item" *ngFor="let product of products" text-wrap>\n    <ion-thumbnail item-left>\n      <img [src]="product.featured_src" />\n    </ion-thumbnail>\n\n    <h2> {{ product.title }} </h2>\n\n    <p>\n      <span [innerHTML]="product.price_html"></span>\n    </p>\n\n    <button ion-button round outline item-right color="danger" (click)="addToCart(product)">Add</button>\n  </ion-item>\n</ion-list>\n<ion-infinite-scroll (ionInfinite) = "loadMoreProducts($event)">\n  <ion-infinite-scroll-content></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</ion-content>\n\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/products-by-category/products-by-category.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ProductsByCategory);
    return ProductsByCategory;
}());

//# sourceMappingURL=products-by-category.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_details_product_details__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, WP, zone, loadingCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.WP = WP;
        this.zone = zone;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.searchQuery = "";
        this.products = [];
        this.page = 2;
        console.log(this.navParams.get("searchQuery"));
        //this.searchQuery = this.navParams.get("searchQuery");
        this.searchQuery;
        this.WooCommerce = WP.init();
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.onSearch = function () {
        var _this = this;
        if (this.searchQuery.length > 0) {
            var loading_1 = this.loadingCtrl.create({ content: "" });
            loading_1.present();
            this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery).then(function (searchData) {
                _this.zone.run(function () { _this.products = JSON.parse(searchData.body).products; });
                console.log(JSON.parse(searchData.body));
                loading_1.dismissAll();
            }, function (err) {
                console.log(err);
            });
        }
    };
    SearchPage.prototype.loadMoreProducts = function (event) {
        var _this = this;
        this.WooCommerce.getAsync("products?filter[q]=" + this.searchQuery + "&page=" + this.page).then(function (searchData) {
            _this.zone.run(function () { _this.products = _this.products.concat(JSON.parse(searchData.body).products); });
            if (JSON.parse(searchData.body).products.length < 10) {
                event.enable(false);
                _this.toastCtrl.create({
                    message: "End of products!",
                    duration: 5000
                }).present();
            }
            event.complete();
            _this.page++;
        });
    };
    SearchPage.prototype.openProductPage = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_details_product_details__["a" /* ProductDetailsPage */], { "product": product });
    };
    SearchPage.prototype.closeCancel = function () {
        this.navCtrl.pop();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/search/search.html"*/'<ion-header>\n    <custom-header title="Search"></custom-header>\n    <ion-toolbar color="danger">\n        <ion-searchbar [(ngModel)] = "searchQuery" (search)="onSearch()" placeholder="What are you looking for"></ion-searchbar>\n    </ion-toolbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n      <ion-list>\n        <ion-item *ngFor="let product of products" text-wrap  (click)="openProductPage(product)">\n          <ion-thumbnail item-left>\n            <img [src]="product.featured_src" />\n          </ion-thumbnail>\n    \n          <h2> {{ product.title }} </h2>\n    \n          <p>\n            <span [innerHTML]="product.short_description.substr(0, 50) + \'...\'"></span>\n            <span [innerHTML]="product.price_html"></span>\n            <span *ngIf="product.average_rating >= 1">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 2">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 3">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 4">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n            <span *ngIf="product.average_rating >= 5">\n              <ion-icon style="color: #d4af37" small name="star"></ion-icon>\n            </span>\n          </p>\n    \n          <button ion-button icon clear item-right>\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-item>\n      </ion-list>\n  \n      <ion-infinite-scroll (ionInfinite)="loadMoreProducts($event)">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  \n  </ion-content>\n'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(368);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_custom_header_custom_header__ = __webpack_require__(601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_products_by_category_products_by_category__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_details_product_details__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_search_search__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_woocommerce_woocommerce__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_products_by_category_products_by_category__["a" /* ProductsByCategory */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_6__components_custom_header_custom_header__["a" /* CustomHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_products_by_category_products_by_category__["a" /* ProductsByCategory */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_details_product_details__["a" /* ProductDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_checkout_checkout__["a" /* CheckoutPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_orders_orders__["a" /* OrdersPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__providers_woocommerce_woocommerce__["a" /* WoocommerceProvider */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_onesignal__["a" /* OneSignal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 445:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 446:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WoocommerceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_woocommerce_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_woocommerce_api__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WoocommerceProvider = (function () {
    function WoocommerceProvider() {
        this.WooCommerce = __WEBPACK_IMPORTED_MODULE_1_woocommerce_api__({
            url: "http://themesalsa.net/easynow",
            consumerKey: 'ck_2a1389f5dc8457e69382a8aa4c8a0f5294cc2ee4',
            consumerSecret: 'cs_cffde7f0992d1df64eecd7d5101166ceba13c6b9'
        });
    }
    WoocommerceProvider.prototype.init = function () {
        return this.WooCommerce;
    };
    WoocommerceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], WoocommerceProvider);
    return WoocommerceProvider;
}());

//# sourceMappingURL=woocommerce.js.map

/***/ }),

/***/ 513:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_cart_cart__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_search_search__ = __webpack_require__(341);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomHeaderComponent = (function () {
    function CustomHeaderComponent(modalCtrl, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
    }
    CustomHeaderComponent.prototype.openCart = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_cart_cart__["a" /* CartPage */]);
    };
    CustomHeaderComponent.prototype.onSearch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_search_search__["a" /* SearchPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('title'),
        __metadata("design:type", String)
    ], CustomHeaderComponent.prototype, "title", void 0);
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'custom-header',template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/components/custom-header/custom-header.html"*/'<ion-navbar color="danger">\n  <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n  </button>\n  <ion-title>{{ title }}</ion-title>\n  <ion-buttons end>\n    <button ion-button icon-only color="light" (click)="onSearch()">\n      <span class="flaticon flaticon-magnifying-glass"></span>\n    </button>\n    <button ion-button icon-only color="light" (click)="openCart()">\n        <span class="flaticon flaticon-online-shopping-cart"></span>\n      </button>\n  </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/components/custom-header/custom-header.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());

//# sourceMappingURL=custom-header.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__ = __webpack_require__(184);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, oneSignal) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.oneSignal = oneSignal;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_menu_menu__["a" /* MenuPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            /*this.oneSignal.startInit('2984dafa-599b-474d-9fbb-0008b7e3e985', '510370161698');
      
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
      
            this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
            });
      
            this.oneSignal.handleNotificationOpened().subscribe(() => {
              // do something when a notification is opened
            });
      
            this.oneSignal.endInit();*/
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/asktusar/Desktop/IONIC v3/easynow/src/app/app.html"*/'<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/asktusar/Desktop/IONIC v3/easynow/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map