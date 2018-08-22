(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_helpers/index.ts":
/*!***********************************!*\
  !*** ./src/app/_helpers/index.ts ***!
  \***********************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/_helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_0__["JwtInterceptor"]; });




/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/*!*********************************************!*\
  !*** ./src/app/_helpers/jwt.interceptor.ts ***!
  \*********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "" + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\r\n<app-not-found></app-not-found>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.componentTitle = 'About';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/account.component.html":
/*!************************************************!*\
  !*** ./src/app/account/account.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\n<!-- <div class=\"container-fluid myTitle py-3\">\n  <div class=\"container\">\n    <div class=\"row flex-column\">\n      <h3 class=\"\">MY ACCOUNT</h3>\n      <nav aria-label=\"breadcrumb myBreadcrum\">\n        <ol class=\"breadcrumb myBreadcrum\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"../index.html\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Account</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n</div> -->\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-3 mb-3\">\n      <!-- LEFT SIDEBAR -->\n      <div class=\"nav myPill-nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n        <a class=\"nav-link active\" id=\"tabMainAccountLabel\" data-toggle=\"pill\" href=\"#tabMainAccount\" role=\"tab\" aria-controls=\"tabMainAccount\"\n          aria-selected=\"true\">\n          <i class=\"fas fa-user\"></i> My Account</a>\n        <a class=\"nav-link\" id=\"tabMainCartLabel\" data-toggle=\"pill\" href=\"#tabMainCart\" role=\"tab\" aria-controls=\"tabMainCart\" aria-selected=\"false\">\n          <i class=\"fas fa-shopping-cart\"></i> My Cart</a>\n        <a class=\"nav-link\" id=\"tabMainOrderLabel\" data-toggle=\"pill\" href=\"#tabMainOrder\" role=\"tab\" aria-controls=\"tabMainOrder\"\n          aria-selected=\"false\">\n          <i class=\"fas fa-list-ul\"></i> My Order List</a>\n        <a class=\"nav-link mt-3\" id=\"tabMainLogoutLabel\" data-toggle=\"pill\" href=\"#tabMainLogout\" role=\"tab\" aria-controls=\"tabMainLogout\"\n          aria-selected=\"false\">\n          <i class=\"fas fa-sign-out-alt\"></i> Log out</a>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-9\">\n      <!-- MAIN TABS -->\n      <div class=\"tab-content\" id=\"tabMainNav\">\n        <div class=\"tab-pane fade show active\" id=\"tabMainAccount\" role=\"tabpanel\" aria-labelledby=\"tabMainAccountLabel\">\n          <!-- Tab HERE -->\n          <nav>\n            <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\n              <a class=\"nav-item nav-link active\" id=\"tabAccountInfoLabel\" data-toggle=\"tab\" href=\"#tabAccountInfo\" role=\"tab\" aria-controls=\"tabAccountInfo\"\n                aria-selected=\"true\">\n                <i class=\"fas fa-info\"></i> Info</a>\n              <a class=\"nav-item nav-link\" id=\"tabAccountAddressLabel\" data-toggle=\"tab\" href=\"#tabAccountAddress\" role=\"tab\" aria-controls=\"tabAccountAddress\"\n                aria-selected=\"false\">\n                <i class=\"far fa-address-book\"></i> Address</a>\n              <a class=\"nav-item nav-link\" id=\"tabAccountPaymentLabel\" data-toggle=\"tab\" href=\"#tabAccountPayment\" role=\"tab\" aria-controls=\"tabAccountPayment\"\n                aria-selected=\"false\">\n                <i class=\"fas fa-dollar-sign\"></i> Payment</a>\n            </div>\n          </nav>\n          <div class=\"tab-content\" id=\"tabAccount\">\n            <div class=\"tab-pane fade show active\" id=\"tabAccountInfo\" role=\"tabpanel\" aria-labelledby=\"tabAccountInfoLabel\">\n              <form class=\"mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-10 col-lg-6\">\n                    <div class=\"row\">\n                      <div class=\"col-6 pr-1\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupFirstname\" class=\"sr-only\">First Name:</label>\n                          <input [(ngModel)]=\"user.first\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control myInput-elegant-3\"\n                            id=\"formSignupFirstname\" aria-describedby=\"\" placeholder=\"First Name\">\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupLastname\" class=\"sr-only\">Last Name:</label>\n                          <input [(ngModel)]=\"user.last\" [ngModelOptions]=\"{standalone: true}\" type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSignupLastname\" aria-describedby=\"\" placeholder=\"Last Name\">\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formAccountPhone\" class=\"sr-only\">Phone Number</label>\n                          <input [(ngModel)]=\"user.phone\" [ngModelOptions]=\"{standalone: true}\" type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formAccountPhone\" placeholder=\"Phone Number\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupEmail\" class=\"sr-only\">Email:</label>\n                          <input [(ngModel)]=\"user.email\" [ngModelOptions]=\"{standalone: true}\" type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSignupEmail\" placeholder=\"Email\">\n                        </div>\n                      </div>\n                      <!-- <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupPassword\" class=\"sr-only\">Password:</label>\n                          <input type=\"password\" class=\"form-control myInput-elegant-3\" id=\"formSignupPassword\" placeholder=\"Password\">\n                        </div>\n                      </div> -->\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-12 d-flex justify-content-center\">\n                        <button type=\"submit\" class=\"btn myBtn-fill mb-3\" disabled>Update</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tabAccountAddress\" role=\"tabpanel\" aria-labelledby=\"tabAccountAddressLabel\">\n              <form class=\"mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-10 col-lg-6\">\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressStreetNumber\" class=\"sr-only\">Street Number</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressStreetNumber\" aria-describedby=\"\" placeholder=\"Street No.\">\n                        </div>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressStreet\" class=\"sr-only\">Street</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressStreet\" aria-describedby=\"\" placeholder=\"Street\">\n                        </div>\n                      </div>\n                      <div class=\"col-6 pr-0\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressWard\" class=\"sr-only\">Ward</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressWard\" aria-describedby=\"\" placeholder=\"Ward\">\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressDistrict\" class=\"sr-only\">District</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressDistrict\" aria-describedby=\"\" placeholder=\"District\">\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-4 pr-0\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressZip\" class=\"sr-only\">Zip Code</label>\n                          <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formAddressZip\" placeholder=\"Zip Code\">\n                        </div>\n                      </div>\n                      <div class=\"col-4 pr-0\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressCity\" class=\"sr-only\">State / City</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressCity\" aria-describedby=\"\" placeholder=\"State / City\">\n                        </div>\n                      </div>\n                      <div class=\"col-4\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressCountry\" class=\"sr-only\">Country</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressCountry\" aria-describedby=\"\" placeholder=\"Country\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-12 d-flex justify-content-center\">\n                        <button type=\"submit\" class=\"btn myBtn-fill mb-3\">Update</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tabAccountPayment\" role=\"tabpanel\" aria-labelledby=\"tabAccountPaymentLabel\">\n              <form class=\"mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-10 col-lg-6\">\n                    <!-- Colllap paypal -->\n                    <div class=\"row mb-2\">\n                      <div class=\"col-12\">\n                        <a href=\"#\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between px-0\" data-toggle=\"collapse\" data-target=\"#collapsePaypal\"\n                          aria-controls=\"collapsePaypal\" aria-expanded=\"false\">\n                          <span>\n                            <b>PayPal</b>\n                          </span>\n                          <i class=\"fas fa-angle-down\"></i>\n                        </a>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"collapse\" id=\"collapsePaypal\">\n                          <div class=\"form-group\">\n                            <label for=\"formPaymentEmail\" class=\"sr-only\">Paypal Email:</label>\n                            <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formPaymentEmail\" placeholder=\"Paypal Email\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Collapse Card -->\n                    <div class=\"row mb-2\">\n                      <div class=\"col-12\">\n                        <a href=\"#\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between px-0\" data-toggle=\"collapse\" data-target=\"#collapseCard\"\n                          aria-controls=\"collapseCard\" aria-expanded=\"false\">\n                          <span>\n                            <b>Credit Card</b>\n                          </span>\n                          <i class=\"fas fa-angle-down\"></i>\n                        </a>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"collapse\" id=\"collapseCard\">\n                          <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentCardNumber\" class=\"sr-only\">Card Number</label>\n                                <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formPaymentCardNumber\" placeholder=\"Card Number\">\n                              </div>\n                            </div>\n                            <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentCardCVV\" class=\"sr-only\">Security Code</label>\n                                <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formPaymentCardCVV\" placeholder=\"Security Code (CVV)\">\n                              </div>\n                            </div>\n                            <div class=\"col-6 pr-0\">\n                              <div class=\"form-group w-100\">\n                                <label for=\"formPaymentExpireMonth\" class=\"\">Expire Month</label>\n                                <select class=\"form-control myInput-elegant-2\" id=\"formPaymentExpireMonth\">\n                                  <option>1</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                  <option>6</option>\n                                  <option>7</option>\n                                  <option>8</option>\n                                  <option>9</option>\n                                  <option>10</option>\n                                  <option>11</option>\n                                  <option>12</option>\n                                </select>\n                              </div>\n                            </div>\n                            <div class=\"col-6\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentExpireYear\" class=\"\">Expire Year</label>\n                                <input type=\"number\" value=\"2020\" class=\"form-control myInput-elegant-2\" id=\"formPaymentExpireYear\" placeholder=\"\">\n                              </div>\n                            </div>\n                            <!-- Doing -->\n                            <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentCardHolder\" class=\"sr-only\">Cardholder</label>\n                                <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formPaymentCardHolder\" aria-describedby=\"\" placeholder=\"Cardholder's Name\">\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-12 d-flex justify-content-center\">\n                        <button type=\"submit\" class=\"btn myBtn-fill mb-3\">Update</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"tabMainCart\" role=\"tabpanel\" aria-labelledby=\"tabMainCartLabel\">\n          <div class=\"row d-flex flex-column align-items-center\">\n            <div class=\"col-7 col-sm-6 col-md-5 col-lg-3 text-center\">\n              <!-- <img src=\"../../assets/img/thumbnail/illustration-cart.png\" alt=\"IMAGE\" title=\"Shopping cart, Credit to Henry Brown &  Co. Ltd\"\n                class=\"w-100 myImg-fit mb-2\"> -->\n              <a href=\"\" class=\"btn myBtn-fill\" routerLink=\"/cart\">Go to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"tabMainOrder\" role=\"tabpanel\" aria-labelledby=\"tabMainOrderLabel\">\n          <nav>\n            <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\n              <a class=\"nav-item nav-link active\" id=\"tabOrderLabel\" data-toggle=\"tab\" href=\"#tabOrder\" role=\"tab\" aria-controls=\"tabOrder\"\n                aria-selected=\"true\">\n                <i class=\"fas fa-list-ul\"></i> Orders</a>\n            </div>\n          </nav>\n          <div class=\"tab-content\" id=\"tabOrderList\">\n            <div class=\"tab-pane fade show active\" id=\"tabOrder\" role=\"tabpanel\" aria-labelledby=\"tabOrderLabel\">\n              <div class=\"table-responsive-xl mt-4\">\n                <button (click)=\"orderFilter()\">Filter</button>\n                <table class=\"table table-striped table-light\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">Order number</th>\n                      <!-- <th scope=\"col\">Date</th> -->\n                      <th scope=\"col\">Total</th>\n                      <!-- <th scope=\"col\">Status</th> -->\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let order of orders\">\n                      <th scope=\"row\">\n                        <a href=\"\" routerLink=\"/order-detail/{{order._id}}\">{{order._id}}</a>\n                      </th>\n                      <!-- <td>01-Jan-2018</td> -->\n                      <td>{{order.total | currency:'VND'}}</td>\n                      <!-- <td>Complete</td> -->\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"tabMainLogout\" role=\"tabpanel\" aria-labelledby=\"tabMainLogoutLabel\">\n          <div class=\"row\">\n            <div class=\"col-12 text-center my-3\">\n              <form action=\"\">\n                <h5>LOGGING OUT</h5>\n                <p>Are you sure to logout?</p>\n                <div>\n                  <button class=\"btn myBtn-outline mr-2\">No</button>\n                  <button (click)=\"onLogout()\" class=\"btn myBtn-fill\">Yes</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _view_models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/user */ "./src/app/view-models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountComponent = /** @class */ (function () {
    // ordersFilter: Order[];
    function AccountComponent(authService, userService, orderService) {
        this.authService = authService;
        this.userService = userService;
        this.orderService = orderService;
        this.componentTitle = 'Account';
        this.user = new _view_models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
    }
    AccountComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getOrder();
    };
    AccountComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    AccountComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (_) { return _this.user = _.user; });
    };
    AccountComponent.prototype.getOrder = function () {
        var _this = this;
        this.orderService.getOrders().subscribe(function (_) {
            _this.orders = _;
            console.log("AccountComponent: getOrders() Da get " + _.length + " orders");
        });
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/app-custom/app-custom.module.ts":
/*!*************************************************!*\
  !*** ./src/app/app-custom/app-custom.module.ts ***!
  \*************************************************/
/*! exports provided: AppCustomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCustomModule", function() { return AppCustomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pipe-filter.pipe */ "./src/app/app-custom/pipe-filter.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppCustomModule = /** @class */ (function () {
    function AppCustomModule() {
    }
    AppCustomModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeFilterPipe"]],
            declarations: [_pipe_filter_pipe__WEBPACK_IMPORTED_MODULE_2__["PipeFilterPipe"]]
        })
    ], AppCustomModule);
    return AppCustomModule;
}());



/***/ }),

/***/ "./src/app/app-custom/pipe-filter.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/app-custom/pipe-filter.pipe.ts ***!
  \************************************************/
/*! exports provided: PipeFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeFilterPipe", function() { return PipeFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeFilterPipe = /** @class */ (function () {
    function PipeFilterPipe() {
    }
    PipeFilterPipe.prototype.transform = function (books, title, args) {
        if (!title) {
            return null;
        }
        else {
            if (title) {
                books = books.filter(function (b) {
                    return b.title.toLowerCase().toString().indexOf(title.toLowerCase()) != -1;
                });
                return books;
            }
        }
    };
    PipeFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'pipeFilter'
        })
    ], PipeFilterPipe);
    return PipeFilterPipe;
}());



/***/ }),

/***/ "./src/app/app-routing/app-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/app-routing/app-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login-layout/login-layout.component */ "./src/app/login-layout/login-layout.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    // {path: 'login', component: LoginComponent },
    { path: 'login', component: _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_5__["LoginLayoutComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_7__["CheckoutComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'product-list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_9__["ProductListComponent"] },
    { path: 'product-detail/:_id', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_10__["ProductDetailComponent"] },
    { path: 'order-detail/:_id', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_8__["OrderDetailComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"closeOverlay()\" class=\"overlay\" id=\"myOverlay\"></div>\n<nav class=\"navbar navbar-light bg-white\">\n    <a href=\"\" class=\"myBrand-logo\" routerLink=\"/home\">Brand</a>\n    <div class=\"d-flex flex-row pr-3\">\n        <div class=\"dropdown m-drop-right\">\n            <a href=\"#\" class=\"btn myOutline text-dark\" id=\"dropdownUser\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <span [class.d-none]=\"!user.first\">{{user.first}}</span>\n                <i class=\"fas fa-user\"></i>\n                <i [class.d-none]=\"!user.first\" class=\"fas fa-angle-down\"></i>\n            </a>\n            <div class=\"dropdown-menu myDropdown-floatup dropdown-menu-right\" aria-labelledby=\"dropdownUser\">\n                <span *ngIf=\"user.first\" class=\"dropdown-item pb-2\" href=\"\">Welcome\n                    <b>{{user.first}}</b>\n                </span>\n                <a *ngIf=\"user.first\" class=\"dropdown-item\" href=\"\" routerLink=\"/account\">\n                    <i class=\"fas fa-user-circle\"></i> Account</a>\n                <a *ngIf=\"user.first\" class=\"dropdown-item\" href=\"#\" data-toggle=\"modal\" data-target=\"#formLogout\">\n                    <i class=\"fas fa-sign-out-alt\"></i> Logout</a>\n                <a *ngIf=\"!user.first\" class=\"dropdown-item\" href=\"\" data-toggle=\"modal\" data-target=\"#formLogin\">\n                    <i class=\"fas fa-sign-in-alt\"></i> Login</a>\n                <a *ngIf=\"!user.first\" class=\"dropdown-item\" href=\"#\" routerLink=\"/register\">\n                    Or Register</a>\n            </div>\n        </div>\n        <div class=\"dropdown m-drop-right\">\n            <a href=\"#\" class=\"btn dropdown-toggle myBtn-icon myOutline text-dark\"\n                id=\"dropdownCart\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"fas fa-shopping-cart\"></i>\n                <b *ngIf=\"cart.book_counted\" [class.d-none]=\"!cart.book_counted\" class=\"badge badge-danger\">{{cart.book_counted}}</b>\n            </a>\n            <div class=\"dropdown-menu keep-open dropdown-menu-right myDropdown-cart rounded-0 p-3\" aria-labelledby=\"dropdownCart\">\n                <h5 class=\"mb-3\">Your Cart:</h5>\n                <div *ngIf=\"cart\" class=\"myCart d-flex flex-column\">\n                    <div class=\"d-flex flex-column myCart-scroll mb-3\">\n                        <div *ngFor=\"let item of cart.items\" class=\"d-flex flex-row myCart-product p-2\">\n                            <div class=\"myCart-img mr-2\">\n                                <img src=\"{{item.book.images.main}}\" alt=\"\">\n                            </div>\n                            <div class=\"myCart-item text-truncate\">\n                                <h6 class=\"myCart-name text-truncate\" title=\"{{item.book.title}}\">\n                                    <a href=\"\" \n                                    routerLink=\"/product-detail/{{item.book._id}}\">{{item.book.title}}</a>\n                                </h6>\n                                <p class=\"myCart-price\">{{item.quantity}} x {{item.book.sellingPrice | currency:'VND'}}</p>\n                                <button (click)=\"removeItem(item.book)\" class=\"myText-link pr-0\">Remove</button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column myCart-bottom\">\n                        <span class=\"align-self-end mb-2\">Total: {{ cart.total | currency:'VND'}}</span>\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <a href=\"\" class=\"btn myBtn-fill mr-2\" routerLink=\"/cart\">View Cart</a>\n                            <a href=\"\" class=\"btn myBtn-fill\" routerLink=\"/checkout\">Checkout</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</nav>\n<nav class=\"navbar navbar-expand-md navbar-light bg-light sticky-top py-0\">\n    <!-- <div class=\"container-fluid\"> -->\n    <!-- Button Collapse -->\n    <button class=\"navbar-toggler myBtn-icon myOutline fs-20 pl-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMenu\"\n        aria-controls=\"collapseMenu\" aria-expanded=\"false\">\n        <i class=\"fas fa-bars\"></i>\n    </button>\n    <button class=\"navbar-toggler myBtn-icon myOutline fs-20\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseSearch\"\n        aria-controls=\"collapseSearch\" aria-expanded=\"false\">\n        <i class=\"fas fa-search\"></i>\n\n    </button>\n    <!-- Collapse Menu -->\n    <div class=\"collapse navbar-collapse\" id=\"collapseMenu\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"\" routerLink=\"/home\" routerLinkActive=\"m-active\">Home\n                    <span class=\"sr-only\">(current)</span>\n                </a>\n            </li>\n            <li class=\"nav-item dropdown m-drop-left myDropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    Shop\n                </a>\n                <div class=\"dropdown-menu myHover-dropdown rounded-0\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Best Sellers</a>\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">On Sale</a>\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">New Books</a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown m-drop-left myDropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarProduct\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    Products\n                </a>\n                <div *ngIf=\"genres\" class=\"dropdown-menu rounded-0\" aria-labelledby=\"navbarProduct\">\n                    <a *ngFor=\"let genre of genres\" class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">{{genre.name}}</a>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" routerLink=\"/about\" routerLinkActive=\"m-active\">About</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" routerLink=\"/contact\" routerLinkActive=\"m-active\">Contact</a>\n            </li>\n        </ul>\n    </div>\n    <!-- Collapse Search -->\n    <div class=\"collapse navbar-collapse\" id=\"collapseSearch\">\n        <div class=\"input-group position-relative\">\n            <input [(ngModel)]=\"title\" (focus)=\"openOverlay('1000')\" (blur)=\"closeOverlay()\" type=\"text\" class=\"form-control myInput-elegant myOutline\"\n                placeholder=\"Find products...\" aria-label=\"Recipient's username\" aria-describedby=\"basic-addon2\">\n            <button *ngIf=\"title\" (click)=\"onClearSearch()\" class=\"myText-link-2 myIcon-inside\" type=\"button\">\n                <i class=\"fas fa-times\"></i>\n            </button>\n            <ul *ngIf=\"books && title\" class=\"list-group mySearch w-100 rounded-0\">\n                <li class=\"list-group-item text-success\">Results for\n                    <b>\"{{title}}\"</b>\n                </li>\n                <li *ngFor=\"let book of books | pipeFilter :title\" class=\"list-group-item myCursor-pointer list-group-item-action text-truncate\"\n                    routerLink=\"/product-detail/{{book._id}}\">\n                    <span class=\"text-truncate\" title=\"{{book.title}}\">{{book.title}}</span>\n                </li>\n            </ul>\n        </div>\n\n\n    </div>\n    <!-- </div> -->\n</nav>\n<div class=\"bg-white\">\n    <router-outlet></router-outlet>\n</div>\n\n<!-- Modal: LOGIN -->\n<div class=\"modal fade\" id=\"formLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formLoginLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"formLoginLabel\">Login</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <app-login [formId]=\"formId\"></app-login>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal: LOGOUT -->\n<div class=\"modal fade\" id=\"formLogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formLogoutLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"formLogoutLabel\">Logout</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form action=\"\" class=\"text-center\">\n                    <p>Are you sure to logout?</p>\n                    <div>\n                        <button class=\"btn myBtn-outline mr-2\" data-dismiss=\"modal\">No</button>\n                        <button (click)=\"onLogout()\" class=\"btn myBtn-fill\" data-dismiss=\"modal\">Yes</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal: SUBSCRIBE -->\n<div class=\"modal fade\" id=\"formSubscribe\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formSubscribeLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Subscribe to our\n                    <b>Newsletters</b>\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                        <span>\n                            <i>Let's stay in touch to get notified about our\n                                <a href=\"product-list.html\" class=\"myText-link\" target=\"_blank\">newest Products &amp; Promotions.</a>\n                            </i>\n                        </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSubscribeName\" class=\"sr-only\">Your name:</label>\n                        <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSubscribeName\" aria-describedby=\"\" placeholder=\"Your name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSubscribeEmail\" class=\"sr-only\">Email:</label>\n                        <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSubscribeEmail\" placeholder=\"Your email address\" aria-describedby=\"formSubscribeEmailHelp\">\n                        <small id=\"formSubscribeEmailHelp\" class=\"form-text text-muted mt-2\">(We'll never share your email with anyone else.)</small>\n                    </div>\n                    <div class=\"d-flex flex-column align-items-center mt-4\">\n                        <button type=\"submit\" class=\"btn myBtn-fill\">Subscribe</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _view_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-models */ "./src/app/view-models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(authService, loginService, userService, genreService, bookService, cartService, router) {
        var _this = this;
        this.authService = authService;
        this.loginService = loginService;
        this.userService = userService;
        this.genreService = genreService;
        this.bookService = bookService;
        this.cartService = cartService;
        this.router = router;
        this.user = new _view_models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        this.currentuser = localStorage.getItem('currentUser');
        this.login = new _view_models__WEBPACK_IMPORTED_MODULE_3__["Login"]();
        // error: string;
        // tokenAlive: boolean;
        this.status = false;
        this.selectedBook = new _view_models__WEBPACK_IMPORTED_MODULE_3__["Book"]();
        // For Shopping Cart (dropdown)
        this.cart = JSON.parse(this.cartService.getStorage());
        // For avoiding form's id conflict
        this.formId = 'app';
        this.loginService.login$.subscribe(function (_) {
            _this.login = _;
            if (_.status) {
                _this.getUser();
            }
        });
        // For get User if user has logged in
        this.loginService.status$.subscribe(function (_) {
            if (_ !== undefined) {
                _this.status = _;
                if (_ && !_this.login.error) {
                    _this.getUser();
                }
            }
        });
        // For Shopping Cart
        this.cartService.cartSource$.subscribe(function (_) { return _this.cart = JSON.parse(_); });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.getBooks();
        this.checkStorage();
        this.cartService.cartInit();
        this.cartService.getStorage();
        this.cartService.countItemInCart();
    };
    AppComponent.prototype.checkStorage = function () {
        if (this.currentuser) {
            this.status = true;
            this.loginService.announceStatus(this.status);
            this.getUser();
        }
        else {
            this.loginService.announceStatus(this.status);
        }
    };
    AppComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        if (this.selectedBook.pages == null) {
            this.selectedBook.pages = 0;
        }
        if (this.selectedBook.weight == null) {
            this.selectedBook.weight = 0;
        }
        if (this.selectedBook.releaseDate == null) {
            this.selectedBook.releaseDate = '';
        }
        if (this.selectedBook.sku == null) {
            this.selectedBook.sku = 'No SKU';
        }
        if (this.selectedBook.images == null) {
            this.selectedBook.images = new _view_models__WEBPACK_IMPORTED_MODULE_3__["Image"]();
        }
        if (this.selectedBook.size == null) {
            this.selectedBook.size = new _view_models__WEBPACK_IMPORTED_MODULE_3__["Size"]();
        }
    };
    AppComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (_) { return _this.genres = _; });
    };
    AppComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (_) { return _this.books = _; });
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        if (this.status) {
            this.userService.getUsers().subscribe(function (data) {
                // this.status = true;
                // this.loginService.announceStatus(this.status);
                _this.user = data.user;
                _this.login.error = '';
                _this.loginService.annouceLogin(_this.login);
            }, function (error) {
                _this.user = new _view_models__WEBPACK_IMPORTED_MODULE_3__["User"]();
                _this.login.error = error.error;
                _this.loginService.annouceLogin(_this.login);
            });
        }
        else {
            this.user = new _view_models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        }
    };
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.logout();
        // this.status = false;
        // this.loginService.announceStatus(this.status);
        this.login.error = '';
        this.login.loading = false;
        this.login.status = false;
        this.login.submitted = false;
        this.loginService.annouceLogin(this.login);
        this.userService.getUsers().subscribe(function (_) { return _this.user = _.user; }, function (error) { return _this.user = new _view_models__WEBPACK_IMPORTED_MODULE_3__["User"](); });
        // alert(`AppComponent: onLogout() says status = ${this.status}`);
    };
    AppComponent.prototype.removeItem = function (book) {
        this.cartService.removeItem(book);
    };
    // For clear search button
    AppComponent.prototype.onClearSearch = function () {
        this.title = '';
    };
    // For dark overlay
    AppComponent.prototype.openOverlay = function (z) {
        var overlay = document.getElementById("myOverlay");
        overlay.style.display = "block";
        overlay.style.opacity = "0.5";
        overlay.style.zIndex = z;
    };
    AppComponent.prototype.closeOverlay = function () {
        var overlay = document.getElementById("myOverlay");
        overlay.style.display = "none";
        overlay.style.opacity = "0";
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["GenreService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["BookService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_helpers */ "./src/app/_helpers/index.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./login-layout/login-layout.component */ "./src/app/login-layout/login-layout.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _app_custom_app_custom_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./app-custom/app-custom.module */ "./src/app/app-custom/app-custom.module.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';















// Authentication










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_8__["AccountComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutComponent"],
                _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_11__["OrderDetailComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_13__["ProductDetailComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_17__["RegisterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_23__["LoginLayoutComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_26__["CardComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_27__["LoadingComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_28__["BreadcrumbComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_custom_app_custom_module__WEBPACK_IMPORTED_MODULE_25__["AppCustomModule"],
            ],
            providers: [
                _auth_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"],
                _auth_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_22__["UserService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _helpers__WEBPACK_IMPORTED_MODULE_21__["JwtInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.loginUrl = 'https://green-web-ecommerce.herokuapp.com/v1/users/login';
    }
    AuthService.prototype.login = function (email, password) {
        return this.http.post(this.loginUrl, { email: email, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (res && res.token) {
                localStorage.setItem('currentUser', JSON.stringify({ email: email, token: res.token }));
            }
        }));
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.css":
/*!*****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.html":
/*!******************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-2\">\n  <div class=\"container\">\n    <nav aria-label=\"breadcrumb myBreadcrum\">\n      <ol class=\"breadcrumb myBreadcrum\">\n        <li class=\"breadcrumb-item\">\n          <a href=\"\" routerLink=\"/home\">Home</a>\n        </li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">{{(breadcrumbTitle=='Home'?'':breadcrumbTitle)}}</li>\n      </ol>\n    </nav>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/breadcrumb/breadcrumb.component.ts":
/*!****************************************************!*\
  !*** ./src/app/breadcrumb/breadcrumb.component.ts ***!
  \****************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent() {
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BreadcrumbComponent.prototype, "breadcrumbTitle", void 0);
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/breadcrumb/breadcrumb.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"myCard-product\">\n  <div class=\"myCard-upper myCursor-pointer mb-2\" title=\"Author:&#10;&#34;{{book.author}}&#34;\">\n    <div class=\"myCard-upper-img myCard-ratio\">\n      <img class=\"card-img\" src=\"{{book.images?.main}}\" alt=\"product\">\n    </div>\n    <div class=\"myCard-upper-overlay\">\n      <span *ngIf=\"book.previousPrice > book.sellingPrice\" class=\"myCard-promote btn-danger\"><small>- {{(1 - book.sellingPrice/book.previousPrice) | percent}}</small></span>\n      <span *ngIf=\"book.previousPrice < book.sellingPrice\" class=\"myCard-promote btn-success\"><small class=\"text-white\">New</small></span>\n      <div class=\"d-flex justify-content-around\">\n        <a href=\"{{book.images?.main}}\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n          <i class=\"far fa-image\"></i>\n        </a>\n        <button (click)=\"addItem(book,1)\" type=\"button\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\">\n          <i class=\"fas fa-cart-plus\"></i>\n        </button>\n        <span class=\"myCard-outofstock-text\">Out of stock</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"py-2\">\n    <h6 class=\"text-center text-small myCard-ellipsis myCursor-pointer mb-1\" routerLink=\"/product-detail/{{book._id}}\">\n      <a class=\"myText-link-2\" [routerLink]=\"['/product-detail', book._id]\" title=\"{{book.title}}\">{{book.title}}</a>\n    </h6>\n    <h6 class=\"text-center text-danger mb-1\">\n      {{book.sellingPrice | currency:'VND'}}\n    </h6>\n    <h6 *ngIf=\"book.previousPrice > book.sellingPrice\" class=\"text-center\">\n      <s class=\"text-muted\">\n        <small>{{book.previousPrice | currency:'VND'}}</small>\n      </s>\n    </h6>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _view_models_book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../view-models/book */ "./src/app/view-models/book.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardComponent = /** @class */ (function () {
    function CardComponent(cartService) {
        this.cartService = cartService;
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent.prototype.addItem = function (book, number) {
        this.cartService.addItem(book, number);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _view_models_book__WEBPACK_IMPORTED_MODULE_1__["Book"])
    ], CardComponent.prototype, "book", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\n<!-- <div class=\"container-fluid myTitle py-3\">\n  <div class=\"container\">\n      <div class=\"row flex-column\">\n          <h3 class=\"\">SHOPPING CART</h3>\n          <nav aria-label=\"breadcrumb myBreadcrum\">\n              <ol class=\"breadcrumb myBreadcrum\">\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"\" routerLink=\"/home\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\" aria-current=\"page\">Cart</li>\n              </ol>\n          </nav>\n      </div>\n  </div>\n</div> -->\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-12 col-md-8 d-flex flex-column mb-3\">\n          <h5 class=\"bg-secondary text-white py-2 pl-2 mb-0\">Shopping Products</h5>\n          <div class=\"table-responsive mb-2\">\n              <table class=\"table border\">\n                  <thead>\n                      <tr class=\"\">\n                          <th scope=\"col\"> </th>\n                          <th class=\"\" scope=\"col\">Product</th>\n                          <th scope=\"col\">Price</th>\n                          <!-- <th scope=\"col\">Author</th> -->\n                          <th scope=\"col\">Quantity</th>\n                          <th scope=\"col\">Total</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let item of cart.items\" class=\"h-auto\">\n                          <td>\n                              <div class=\"myImg-thumbnail\">\n                                  <img src=\"{{item.book.images.main}}\" class=\"w-100\" alt=\"\">\n                              </div>\n                          </td>\n                          <th class=\"myTable-product\" scope=\"row\">\n                              <h6 class=\"mb-1\"><a href=\"\" class=\"myText-link-2\" routerLink=\"/product-detail/{{item.book._id}}\">{{item.book.title}}</a></h6>\n                              <small class=\"d-block\">{{item.book.author}}</small>\n                              <button (click)=\"removeItem(item.book)\" class=\"text-small text-muted myText-link-2 pl-0\"><small><i class=\"far fa-trash-alt\"></i> Remove</small></button>\n                          </th>\n                          <td><small><s *ngIf=\"item.book.previousPrice > item.book.sellingPrice\" class=\"text-danger\">{{item.book.previousPrice | currency:'VND'}}</s></small> <span class=\"d-block\">{{item.book.sellingPrice | currency:'VND'}}</span></td>\n                          <!-- <td>{{item.book.author}}</td> -->\n                          <td>\n                              <label for=\"formCartQuantity\" class=\"sr-only\"></label>\n                              <input (change)=\"updateCart()\" [(ngModel)]=\"item.quantity\" min=\"0\" oninput=\"this.value = Math.abs(this.value)\" type=\"number\" class=\"form-control myInput-cart-quantity\" id=\"formCartQuantity\" aria-describedby=\"\">\n                          </td>\n                          <td><b>{{item.book.sellingPrice * item.quantity | currency:'VND'}}</b></td>\n                      </tr>\n                    </tbody>\n                </table>\n            </div>\n          <div class=\"form-group w-50 align-self-end\">\n              <label for=\"formCartDiscount\"><b>Apply Discount:</b></label>\n              <input [(ngModel)]=\"discount_input\" type=\"text\" class=\"form-control text-uppercase\" id=\"formCartDiscount\" aria-describedby=\"\" placeholder=\"\">\n              <span>Use code: <code>{{cartService.discount_code}}</code> ({{cartService.discount_percent | percent}} Discount)</span>\n            </div>\n          <button (click)=\"updateCart()\" type=\"button\" class=\"btn myBtn-fill align-self-end\">Apply Code</button>\n      </div>\n      <div class=\"col-12 col-md-4 d-flex flex-column\">\n          <h5 class=\"bg-secondary text-white py-2 pl-2 mb-0\">Cart Totals</h5>\n          <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Products</th>\n                    <td class=\"text-right\">{{cart.total | currency:'VND'}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Discount <span *ngIf=\"cart.discount\">({{cartService.discount_percent | percent}})</span></th>\n                    <td class=\"text-right\">- {{cart.discount | currency:'VND'}}</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">AMOUNT</th>\n                    <td class=\"text-right\"><b>{{cart.amount | currency:'VND'}}</b></td>\n                  </tr>\n                </tbody>\n          </table>\n          <a href=\"\" class=\"btn myBtn-fill align-self-end\" routerLink=\"/checkout\">Checkout</a>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        var _this = this;
        this.cartService = cartService;
        this.componentTitle = 'Shopping Cart';
        this.inputQuantity = 1;
        this.cart = JSON.parse(this.cartService.getStorage());
        this.discount_input = '';
        this.cartService.cartSource$.subscribe(function (_) { return _this.cart = JSON.parse(_); });
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent.prototype.removeItem = function (book) {
        this.cartService.removeItem(book);
    };
    CartComponent.prototype.addItem = function (book) {
        this.cartService.addItem(book, this.inputQuantity);
    };
    CartComponent.prototype.updateCart = function () {
        this.cart.discount = this.cartService.setDiscount(this.discount_input.trim());
        this.cart.amount = this.cart.total - this.cart.discount;
        this.cartService.updateCart(this.cart);
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/checkout/checkout.component.html":
/*!**************************************************!*\
  !*** ./src/app/checkout/checkout.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-8 mb-3\">\n      <form>\n        <div class=\"mb-3\">\n          <h5 class=\"mb-3\">Choose a Shipping Method:</h5>\n          <div *ngFor=\"let option of shippingOptions; let idx = index\" class=\"form-check py-2\">\n            <input (click)=\"onSelectShiping(option.fee)\" class=\"form-check-input\" type=\"radio\" name=\"shipping\" id=\"shipping_{{shippingOptions.indexOf(option)}}\"\n              [value]=\"option.fee\" [checked]=\"idx === shippingDefaultIndex\">\n            <label class=\"form-check-label\" for=\"shipping_{{shippingOptions.indexOf(option)}}\">\n              {{option.description}} ({{(option.fee==0)?'Free':option.fee | currency: 'VND'}})\n            </label>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"col-12 col-md-4 d-flex flex-column mb-3\">\n      <h5 class=\"bg-secondary text-white py-2 pl-2 mb-0\">Order Information</h5>\n      <table class=\"table\">\n        <tbody>\n          <tr>\n            <th scope=\"row\">Products</th>\n            <td class=\"text-right\">{{cart?.total || 0 | currency:'VND'}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Discount <span *ngIf=\"cart.discount\">({{cartService.discount_percent | percent}})</span></th>\n            <td class=\"text-right\">- {{cart?.discount || 0 | currency:'VND'}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">Shipping</th>\n            <td class=\"text-right\">{{cart?.shipping || 0 | currency:'VND'}}</td>\n          </tr>\n          <tr>\n            <th scope=\"row\">PAYABLE</th>\n            <td class=\"text-right\">\n              <b>{{cart?.payable || 0 | currency:'VND'}}</b>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <div class=\"form-group form-check align-self-end\">\n        <input [(ngModel)]=\"checkoutConfirm\" type=\"checkbox\" class=\"form-check-input\" id=\"checkoutConfirm\">\n        <label class=\"form-check-label\" for=\"checkoutConfirm\">Check me out</label>\n      </div>\n      <button (click)=\"checkConfirm()\" class=\"btn myBtn-fill align-self-end\">Order now</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
/* harmony import */ var _view_models_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/order */ "./src/app/view-models/order.ts");
/* harmony import */ var _view_models_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-models/user */ "./src/app/view-models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(cartService, orderService, userService) {
        var _this = this;
        this.cartService = cartService;
        this.orderService = orderService;
        this.userService = userService;
        this.componentTitle = 'Checkout';
        this.checkoutConfirm = false;
        this.shipping = 0;
        this.shippingOptions = [
            { description: 'Free Shipping', fee: 0 },
            { description: 'Standard Shipping', fee: 15000 },
            { description: 'Urgent Shipping', fee: 30000 },
        ];
        this.order = new _view_models_order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.user = new _view_models_user__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.cart = JSON.parse(this.cartService.getStorage());
        this.cartService.cartSource$.subscribe(function (_) { return _this.cart = JSON.parse(_); });
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        this.onInitShipping(1);
        this.getUser();
    };
    // auto-select radio & set shipping value when Component is once created
    CheckoutComponent.prototype.onInitShipping = function (index) {
        if (index >= this.shippingOptions.length) {
            this.shippingDefaultIndex = 0;
        }
        else {
            this.shippingDefaultIndex = index;
        }
        this.shipping = this.shippingOptions[index].fee;
    };
    // change value when user click a radio
    CheckoutComponent.prototype.onSelectShiping = function (number) {
        this.shipping = number;
        this.cart.shipping = this.shipping;
        this.cartService.updateCart(this.cart);
    };
    CheckoutComponent.prototype.checkConfirm = function () {
        if (this.checkoutConfirm) {
            this.addOrder();
        }
        else {
            var confirmation = confirm("You have to confirm your order (Check me out)\nAre you sure to make order now?");
            if (confirmation) {
                this.checkoutConfirm = true;
                this.checkConfirm();
            }
        }
    };
    CheckoutComponent.prototype.addOrder = function () {
        var _this = this;
        this.updateCart();
        if (this.cart.items.length > 0) {
            this.order._user._id = this.user._id;
            for (var i = 0; i < this.cart.items.length; i++) {
                var book = new _view_models_order__WEBPACK_IMPORTED_MODULE_4__["BOOK"]();
                book._book._id = this.cart.items[i].book._id;
                book.quantity = this.cart.items[i].quantity;
                book.price = this.cart.items[i].book.sellingPrice;
                this.order.books.push(book);
            }
            this.order.total = this.cart.payable;
            this.orderService.addOrder(this.order).subscribe(function (data) {
                alert("Da dat hang thanh cong\nThanh tien: " + data.total + "\nSo luong sach: " + data.books.length);
                _this.cartService.removeCart();
            });
        }
        else {
            alert('You have no item in Shopping Cart');
        }
    };
    CheckoutComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUsers().subscribe(function (_) { return _this.user = _.user; });
    };
    CheckoutComponent.prototype.updateCart = function () {
        this.cart.shipping = this.shipping;
        this.cartService.updateCart(this.cart);
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 370px;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\n<!-- <div class=\"container-fluid myTitle py-3\">\n    <div class=\"container\">\n        <div class=\"row flex-column\">\n            <h3 class=\"\">\n                <b></b>CONTACT US</h3>\n            <nav aria-label=\"breadcrumb myBreadcrum\">\n                <ol class=\"breadcrumb myBreadcrum\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"../index.html\">Home</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Contact</li>\n                </ol>\n            </nav>\n        </div>\n    </div>\n</div> -->\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n    <div class=\"row mb-4\">\n        <div class=\"col-12 col-md-6 mb-4\">\n            <h4 class=\"mb-4\">Google Map</h4>\n            <div>\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.70819287665!2d106.70057531480064!3d10.756957892334672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6d78116d3b%3A0xd82cbbe4c93dc37a!2zNDAgU-G7kSAxMSwgUGjGsOG7nW5nIDQsIFF14bqtbiA0LCBI4buTIENow60gTWluaA!5e0!3m2!1sen!2s!4v1530512841740\"\n                    class=\"myGoogleMap\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n            <h4 class=\"mb-4\">Send us your message:</h4>\n            <div class=\"form-group\">\n                <label for=\"formContactName\" class=\"sr-only\">Full name:</label>\n                <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formContactName\" placeholder=\"Full Name\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"formContactPhone\" class=\"sr-only\">Phone number:</label>\n                <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formContactPhone\" placeholder=\"Phone number\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"formContactEmail\" class=\"sr-only\">Email address:</label>\n                <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formContactEmail\" placeholder=\"Email address\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"formContactMessage\" class=\"sr-only\">Full name:</label>\n                <textarea class=\"form-control myInput-elegant-3\" id=\"formContactMessage\" placeholder=\"Your messages\" name=\"\" cols=\"30\" rows=\"7\"></textarea>\n            </div>\n            <button type=\"submit\" class=\"btn myBtn-fill\">Send</button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.componentTitle = 'Contact';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer -->\n<footer class=\"container-fluid bg-light py-3\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <a href=\"\" class=\"myBrand-logo\" routerLink=\"/\">Brand</a>\n    </div>\n    <div class=\"row justify-content-center myFooter-social\">\n      <a href=\"https://www.facebook.com\" target=\"_blank\">\n        <i class=\"fab fa-facebook\"></i>\n      </a>\n      <a href=\"https://www.twitter.com\" target=\"_blank\">\n        <i class=\"fab fa-twitter\"></i>\n      </a>\n      <a href=\"https://www.pinterest.com\" target=\"_blank\">\n        <i class=\"fab fa-pinterest\"></i>\n      </a>\n      <a href=\"\" class=\"\" data-toggle=\"modal\" data-target=\"#formSubscribe\" target=\"_blank\" title=\"Subscribe to our Newsletters\"\n        data-placement=\"bottom\">\n        <i class=\"far fa-envelope\"></i>\n      </a>\n    </div>\n    <div class=\"row justify-content-center myFooter-policy mb-2\">\n      <a href=\"#\" target=\"_blank\" class=\"text-dark\">Terms of service</a>\n      <span> | </span>\n      <a href=\"#\" target=\"_blank\" class=\"text-dark\">Privacy policy</a>\n    </div>\n    <div class=\"row justify-content-center myFooter-brand\">\n      <a href=\"\" class=\"m-0\" target=\"_blank\" routerLink=\"/home\">&copy; Brand 2018</a>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12 px-0\">\r\n            <app-loading *ngIf=\"!banners\"></app-loading>\r\n            <div *ngIf=\"banners\" id=\"carousel-book\" class=\"carousel slide myCarousel\" data-ride=\"carousel\">\r\n                <div class=\"carousel-inner\">\r\n                    <div *ngFor=\"let banner of banners\" [class.active]=\"banners.indexOf(banner) == 0\" class=\"carousel-item\">\r\n                        <a href=\"\" routerLink=\"/product-list\">\r\n                            <img class=\"d-block w-100\" src=\"{{banner.imageUrl}}\" alt=\"{{banner.title}}\">\r\n                        </a>\r\n                    </div>\r\n                </div>\r\n                <a class=\"carousel-control-prev\" href=\"#carousel-book\" role=\"button\" data-slide=\"prev\">\r\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                </a>\r\n                <a class=\"carousel-control-next\" href=\"#carousel-book\" role=\"button\" data-slide=\"next\">\r\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12\">\r\n            <nav>\r\n                <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\r\n                    <a class=\"nav-item nav-link active\" id=\"tabTopSale\" data-toggle=\"tab\" href=\"#navTopSale\" role=\"tab\" aria-controls=\"navTopSale\"\r\n                        aria-selected=\"true\">Top sales</a>\r\n                    <a class=\"nav-item nav-link \" id=\"tabNewProduct\" data-toggle=\"tab\" href=\"#navNewProduct\" role=\"tab\" aria-controls=\"navNewProduct\"\r\n                        aria-selected=\"false\">New Books</a>\r\n                    <a class=\"nav-item nav-link\" id=\"tabFeaturedProduct\" data-toggle=\"tab\" href=\"#navFeaturedProduct\" role=\"tab\" aria-controls=\"navFeaturedProduct\"\r\n                        aria-selected=\"false\">Featured Books</a>\r\n                </div>\r\n            </nav>\r\n            <div class=\"tab-content\">\r\n                <div class=\"tab-pane fade show active\" id=\"navTopSale\" role=\"tabpanel\" aria-labelledby=\"tabTopSale\">\r\n                    <app-loading *ngIf=\"!books\"></app-loading>\r\n                    <div class=\"row py-3\">\r\n                        <div class=\"row py-3\">\r\n                            <div *ngFor=\"let book of books_sale\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\r\n                                <app-card [book]=\"book\"></app-card>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"navNewProduct\" role=\"tabpanel\" aria-labelledby=\"tabNewProduct\">\r\n                    <app-loading *ngIf=\"!books\"></app-loading>\r\n                    <div class=\"row py-3\">\r\n                        <div *ngFor=\"let book of books_new\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\r\n                            <app-card [book]=\"book\"></app-card>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"navFeaturedProduct\" role=\"tabpanel\" aria-labelledby=\"tabFeaturedProduct\">\r\n                    <app-loading *ngIf=\"!books\"></app-loading>\r\n                    <div class=\"row py-3\">\r\n                        <div class=\"row py-3\">\r\n                            <div *ngFor=\"let book of books_featured\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\r\n                                <app-card [book]=\"book\"></app-card>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"container\">\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12 px-0\">\r\n            <h5 class=\"bg-secondary text-white py-3 pl-3\">SÁCH VĂN HỌC</h5>\r\n        </div>\r\n    </div>\r\n    <app-loading *ngIf=\"!books\"></app-loading>\r\n    <div class=\"row\">\r\n        <div *ngFor=\"let book of books\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\r\n            <app-card [book]=\"book\"></app-card>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div *ngIf=\"cart.items.length > 0\"  class=\"container\">\r\n    <div class=\"row mb-3\">\r\n        <div class=\"col-12 px-0\">\r\n            <h5 class=\"bg-secondary text-white py-3 pl-3\">TRONG GIỎ HÀNG\r\n                <b *ngIf=\"cart.book_counted\" [class.d.none]=\"!cart.book_counted\" class=\"badge badge-danger\">{{cart.book_counted}}</b>\r\n            </h5>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div *ngFor=\"let item of cart.items\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\r\n            <app-card [book]=\"item.book\"></app-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(bookService, genreService, cartService) {
        var _this = this;
        this.bookService = bookService;
        this.genreService = genreService;
        this.cartService = cartService;
        this.componentTitle = 'Home';
        this.cart = JSON.parse(localStorage.getItem('currentCart'));
        this.cartService.cartSource$.subscribe(function (_) { return _this.cart = JSON.parse(_); });
    }
    HomeComponent.prototype.setSlice = function () {
        this.books_sale = this.books.slice(0, 4);
        this.books_new = this.books.slice(4, 8);
        this.books_featured = this.books.slice(8, 12);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getBanners();
        this.getBooks();
        this.getGenres();
    };
    HomeComponent.prototype.getBanners = function () {
        var _this = this;
        this.bookService.getBanners().subscribe(function (_) { return _this.banners = _; });
    };
    HomeComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (_) {
            _this.books = _;
            _this.setSlice();
        });
    };
    HomeComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (_) { return _this.genres = _; });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"],
            _services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 w-100 d-flex flex-row justify-content-center align-items-center\">\n    <img src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n    />\n</div>"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login-layout/login-layout.component.css":
/*!*********************************************************!*\
  !*** ./src/app/login-layout/login-layout.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-layout/login-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/login-layout/login-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n  <div class=\"row mb-4\">\n      <div class=\"col-12 col-md-2 col-lg-3\"></div>\n      <div class=\"col-12 col-md-8 col-lg-6\">\n          <div class=\"mySignup p-4\">\n            <app-login [formId]=\"formId\"></app-login>\n          </div>\n      </div>\n      <div class=\"col-12 col-md-2 col-lg-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-layout/login-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/login-layout/login-layout.component.ts ***!
  \********************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = /** @class */ (function () {
    function LoginLayoutComponent() {
        this.componentTitle = 'Login';
        this.formId = 'login';
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-layout',
            template: __webpack_require__(/*! ./login-layout.component.html */ "./src/app/login-layout/login-layout.component.html"),
            styles: [__webpack_require__(/*! ./login-layout.component.css */ "./src/app/login-layout/login-layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Migrate -->\n<form [formGroup]=\"loginShopForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group mt-2\">\n        <label for=\"formLoginEmail\" class=\"sr-only\">Email address:</label>\n        <input type=\"text\" class=\"form-control text-truncate myInput-elegant-3\" id=\"{{formId}}-formLoginEmail\" aria-describedby=\"emailHelp\"\n            placeholder=\"Email address\" formControlName=\"username\" required>\n        <div *ngIf=\"login.submitted && f.username.errors\">\n            <div *ngIf=\"f.username.errors.required\" class=\"text-danger\">\n                <small>Email is required</small>\n            </div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"formLoginPassword\" class=\"sr-only\">Password:</label>\n        <div class=\"position-relative\">\n            <input [type]=\"show\" class=\"form-control text-truncate myInput-elegant-3 mb-2\" id=\"{{formId}}-formLoginPassword\" placeholder=\"Password\"\n                formControlName=\"password\" required>\n            <button (click)=\"onToggle()\" type=\"button\" class=\"myText-link myIcon-inside text-muted\">\n                <i *ngIf=\"!value\" class=\"far fa-eye\"></i>\n                <i *ngIf=\"value\" class=\"far fa-eye-slash\"></i>\n            </button>\n        </div>\n        <div *ngIf=\"login.submitted && f.password.errors\">\n            <div *ngIf=\"f.password.errors.required\" class=\"text-danger\">\n                <small>Password is required</small>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"form-group form-check\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"{{formId}}-formLoginRemember\">\n        <label class=\"form-check-label text-muted\" for=\"formLoginRemember\">Remember login</label>\n    </div>\n    <div class=\"d-flex flex-column align-items-center mt-4\">\n        <button type=\"submit\" class=\"btn myBtn-fill\" id=\"{{formId}}-loginButton\">Log in</button>\n        <img *ngIf=\"login.loading\" class=\"mt-2\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n        />\n        <div *ngIf=\"login.submitted && login.error\" class=\"text-danger mt-2\">\n            <small><i class=\"icon-close\"></i> Cannot login because: <b>{{login.error}}</b></small>\n        </div>\n\n        <span class=\"mt-2 mb-2\">\n            <small class=\"text-muted\">I don't have an account. </small>\n            <a href=\"\" class=\"myText-link\" routerLink=\"/register\">Register</a>\n        </span>\n        <div>\n            <a href=\"\" class=\"text-muted\">\n                <small>I forgot my password.</small>\n            </a>\n        </div>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
/* harmony import */ var _view_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-models */ "./src/app/view-models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, route, router, authService, loginService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loginService = loginService;
        this.componentTitle = 'Login';
        this.user = new _view_models__WEBPACK_IMPORTED_MODULE_5__["User"]();
        // Properties for login communicating
        this.login = this.loginService.loginObject;
        // For toggle Show or Hide password input
        this.show = "password";
        this.value = 0;
        this.loginService.status$.subscribe(function (_) { _this.status = _; });
        this.loginService.login$.subscribe(function (_) { _this.login = _; });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.createLoginForm();
        this.login.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginService.annouceLogin(this.login);
    };
    LoginComponent.prototype.createLoginForm = function () {
        this.loginShopForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginShopForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onToggle = function () {
        if (this.value % 2 == 1) {
            this.show = "password";
            this.value = 0;
        }
        else {
            this.show = "text";
            this.value = 1;
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        this.loginService.onSubmit(this.loginShopForm, this.login.returnUrl);
        // this.loginService.annouceLogin(this.login);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "formId", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center myBody-buffer d-flex flex-column justify-content-center py-3\">\n        <h1>NOT FOUND.</h1>\n        <h3 class=\"text-danger\">Site is not available now.</h3>\n        <p>This site is under construction, please visit later.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/order-detail/order-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n    <div *ngIf=\"order\" class=\"row\">\n        <div class=\"col-12 mb-3\">\n            <h5 class=\"bg-info text-white py-2 pl-2 mb-0\">Order Information</h5>\n            <div class=\"table-responsive-xl\">\n                <table class=\"table table-light table-striped border\">\n                    <tbody>\n                        <tr>\n                            <th scope=\"row\">Order ID</th>\n                            <td>{{order._id}}</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Customer Email</th>\n                            <td>{{order._user.email}}</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\">Amount</th>\n                            <td>{{order.total | currency:'VND'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div class=\"col-12 mb-3\">\n            <h5 class=\"bg-info text-white py-2 pl-2 mb-0\">Purchased Products</h5>\n            <div class=\"table-responsive-xl\">\n                <table class=\"table table-light table-striped border\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\">Product</th>\n                            <th scope=\"col\">Price</th>\n                            <th scope=\"col\">Quantity</th>\n                            <th scope=\"col\">Total</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr *ngFor=\"let book of order.books\">\n                            <td class=\"d-flex align-items-center justify-content-center\">\n                                <div class=\"myCart-img\">\n                                    <img src=\"{{book.images?.main}}\" alt=\"\">\n                                </div>\n                            </td>\n                            <td>{{book._book.title}}</td>\n                            <td>{{book.price || 'N/A' | currency:'VND'}}</td>\n                            <td class=\"text-center\">{{book.quantity}}</td>\n                            <td>{{book.price * book.quantity || 'N/A' | currency:'VND'}}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/order-detail/order-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order-detail/order-detail.component.ts ***!
  \********************************************************/
/*! exports provided: OrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailComponent", function() { return OrderDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/order.service */ "./src/app/services/order.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailComponent = /** @class */ (function () {
    function OrderDetailComponent(route, orderService) {
        this.route = route;
        this.orderService = orderService;
        this.componentTitle = 'Order Details';
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
        this.getOrder();
    };
    OrderDetailComponent.prototype.getOrder = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('_id');
        this.orderService.getOrder(id)
            .subscribe(function (_) { _this.order = _; });
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"]])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-detail/product-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n    <div class=\"row py-3 mb-2 bg-light\">\n        <!-- Advanced Carousel-->\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 mb-3\">\n            <div *ngIf=\"book$ | async as book\" class=\"row\">\n                <div class=\"col-12 mb-2\">\n                    <div id=\"carouselProductIndicator\" class=\"carousel slide myCarousel\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner myCarousel-img-view\">\n                            <div  class=\"carousel-item active\">\n                                <a href=\"{{book.images.main}}\" data-toggle=\"lightbox\" data-gallery=\"gallery\">\n                                    <img class=\"d-block w-100\" src=\"{{book.images.main}}\" alt=\"First slide\">\n                                </a>\n                            </div>\n                            <!-- <div class=\"carousel-item\">\n                                <a href=\"../assets/img/item/item-camera-2.jpg\" data-toggle=\"lightbox\" data-gallery=\"gallery\">\n                                    <img class=\"d-block w-100\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"Second slide\">\n                                </a>\n                            </div> -->\n                            <!-- <div class=\"carousel-item\"> \n                                <a href=\"../assets/img/item/item-camera-3.jpg\" data-toggle=\"lightbox\" data-gallery=\"gallery\">\n                                    <img class=\"d-block w-100\" src=\"../assets/img/item/item-camera-3.jpg\" alt=\"Third slide\">\n                                </a>\n                            </div> -->\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#carouselProductIndicator\" role=\"button\" data-slide=\"prev\">\n                           <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselProductIndicator\" role=\"button\" data-slide=\"next\">\n                                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-12 d-flex flex-row flex-wrap myCarousel-img-nav\">\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"0\" class=\"active\">\n                        <img src=\"{{book.images.main}}\" alt=\"\" class=\"w-100\">\n                    </div>\n                    <!-- <div data-target=\"#carouselProductIndicator\" data-slide-to=\"1\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-2.jpg\" alt=\"\" class=\"w-100\">\n                    </div> -->\n                    <!-- <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div> -->\n                    <!-- <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div> -->\n                    <!-- <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div> -->\n                    <!-- <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div> -->\n                </div>\n            </div>\n        </div>\n        <!-- Add to Cart site  -->\n        <div *ngIf=\"book$ | async as book\" class=\"col-12 col-sm-6 col-md-6 col-lg-8 mb-3\">\n            <p class=\"sr-only\">Product</p>\n            <h5>{{book.title}}</h5>\n            <h6 class=\"text-muted\">{{book.author}}</h6>\n            <h6 class=\"\">\n                <s *ngIf=\"book.previousPrice > book.sellingPrice\">{{book.previousPrice | currency:'VND'}}</s> <span class=\"text-danger\"> {{book.sellingPrice | currency:'VND'}}</span>\n            </h6>\n            <div class=\"d-flex flex-row mb-3\">\n                <h6 class=\"text-success mr-3\">\n                    <i class=\"fas fa-check\"></i> In stock \n                </h6>\n            </div>\n            <p class=\"text-muted\">{{book.shortDescription}}</p>\n            <div class=\"row\">\n                <div class=\"col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 pr-0\">\n                    <label for=\"productQuantity\" class=\"\">Quantity</label>\n                    <input type=\"number\" [(ngModel)]=\"inputQuantity\" id=\"productQuantity\" class=\"form-control \">\n                </div>\n            </div>\n            <button (click)=\"addItem(book)\" class=\"btn myBtn-fill mt-3\" title=\"Add to Cart\">\n                <i class=\"fas fa-cart-plus\"></i> Add to Cart</button>\n            <!-- <div class=\"w-25\">\n                \n            </div> -->\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 col-md-8\">\n            <!-- Tab Here -->\n            <nav>\n                <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\n                    <a class=\"nav-item nav-link\" id=\"tabDescriptionLabel\" data-toggle=\"tab\" href=\"#tabDescription\" role=\"tab\" aria-controls=\"tabDescription\"\n                        aria-selected=\"true\">Description</a>\n                    <a class=\"nav-item nav-link active\" id=\"tabSpecificationLabel\" data-toggle=\"tab\" href=\"#tabSpecification\" role=\"tab\" aria-controls=\"tabSpecification\"\n                        aria-selected=\"false\">Specification</a>\n                    <a class=\"nav-item nav-link\" id=\"tabReviewLabel\" data-toggle=\"tab\" href=\"#tabReview\" role=\"tab\" aria-controls=\"tabReview\"\n                        aria-selected=\"false\">Reviews</a>\n                </div>\n            </nav>\n            <div class=\"tab-content\" id=\"tabAccount\">\n                <div *ngIf=\"book\" [innerHTML]=\"book.fullDescription\" class=\"tab-pane myPost fade py-3\" id=\"tabDescription\" role=\"tabpanel\" aria-labelledby=\"tabDescriptionLabel\">\n                    \n                </div>\n                <div  *ngIf=\"book\" class=\"tab-pane fade py-2 show active\" id=\"tabSpecification\" role=\"tabpanel\" aria-labelledby=\"tabSpecificationLabel\">\n                    <h4 class=\"my-4\">SPECIFICATION</h4>\n                    <table class=\"table table-striped\">\n                        <tbody>\n                          <tr>\n                            <th scope=\"row\">Title</th>\n                            <td>{{book.title}}</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Author</th>\n                            <td>{{book.author}}</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Publisher</th>\n                            <td>{{book.publisher}}</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Page</th>\n                            <td>{{book.pages}}</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Weight</th>\n                            <td>{{book.weight}}</td>\n                          </tr>\n                          <tr>\n                                <th scope=\"row\">Dimension\n                                        <br>(\n                                        <span *ngIf=\"book.size.width\">Width</span>\n                                        <span *ngIf=\"book.size.height\"> x Height</span>\n                                        <span *ngIf=\"book.size.depth\"> x Depth</span>)</th>\n                                      <td>\n                                        <span *ngIf=\"book.size.width\">{{book.size.width}} cm</span>\n                                        <span *ngIf=\"book.size.height\"> x {{book.size.height}} cm</span>\n                                        <span *ngIf=\"book.size.depth\"> x {{book.size.depth}} cm</span>\n                                      </td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Release date</th>\n                            <td>{{book.releaseDate | date:'mediumDate'}}</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">SKU</th>\n                            <td>{{book.sku}}</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Price</th>\n                            <td>{{book.sellingPrice | currency:'VND'}}</td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div   *ngIf=\"book\" class=\"tab-pane fade py-2\" id=\"tabReview\" role=\"tabpanel\" aria-labelledby=\"tabReviewLabel\">\n                    <h4 class=\"my-4\">REVIEWS</h4>\n                    <div class=\"form-group\">\n                        <label for=\"formReviewMessage\" class=\"\">Comment:</label>\n                        <textarea class=\"form-control myInput-elegant-3\" id=\"formReviewMessage\" placeholder=\"Write your comment here\" name=\"\" cols=\"30\" rows=\"3\"></textarea>\n                        <!-- Doing -->\n                        <button type=\"submit\" class=\"btn myBtn-fill mt-3 mb-3\" data-toggle=\"modal\" data-target=\"#formSenderInfo\">Send</button>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 mb-3 myReview-level-1\">\n                            <div class=\"d-flex flex-row align-items-center mb-2\">\n                                <div class=\"myReview-user-img mr-3\">\n                                    <img src=\"../../assets/img/thumbnail/ava-user.jpg\" alt=\"User\" class=\"w-100 rounded-circle\">\n                                </div>\n                                <div class=\"div\">\n                                        <h6 class=\"mb-0\">John Doe</h6>\n                                        <small class=\"text-muted\">03 hours ago</small>\n                                </div>\n                            </div>\n                            <div class=\"myReview-user-comment\">\n                                <p class=\"\">Very good!</p>\n                                <p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores voluptatem officia eligendi quisquam aperiam blanditiis neque at ratione placeat, aliquid laudantium dolorum accusantium quae nostrum ab molestiae, assumenda quam!</p>\n                                <a href=\"#\">Reply</a>\n                            </div>\n                            \n                        </div>\n                        <div class=\"col-12 mb-3 myReview-level-2\">\n                            <div class=\"d-flex flex-row align-items-center mb-2\">\n                                <div class=\"myReview-user-img mr-3\">\n                                    <img src=\"../assets/img/thumbnail/ava-user.jpg\" alt=\"User\" class=\"w-100 rounded-circle\">\n                                </div>\n                                <div class=\"div\">\n                                        <h6 class=\"mb-0\">Customer Service<span class=\"badge badge-secondary ml-2\">Admin</span></h6>\n                                        <small class=\"text-muted\">01 hours ago</small>\n                                </div>\n                            </div>\n                            <div class=\"myReview-user-comment\">\n                                <p class=\"\">Thank you!</p>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores voluptatem.</p>\n                                <a href=\"#\">Reply</a>\n                            </div>\n                            \n                        </div>\n                    </div>\n                    <div class=\"row my-4\">\n                        <div class=\"col-12 d-flex justify-content-center\">\n                            <nav aria-label=\"...\">\n                                <ul class=\"pagination\">\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\" tabindex=\"-1\">\n                                        <i class=\"fas fa-angle-double-left\"></i>\n                                    </a>\n                                  </li>\n                                  <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1<span class=\"sr-only\">(current)</span></a></li>\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\">2</a>\n                                  </li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\">\n                                        <i class=\"fas fa-angle-double-right\"></i>\n                                    </a>\n                                  </li>\n                                </ul>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-4\">\n            <h6 class=\"mt-3 mb-4\">Related Products</h6>\n            <div *ngIf=\"book\" class=\"d-flex flex-column\">\n                <div class=\"row mb-3\">\n                    <div class=\"col-4 pr-0\">\n                        <a href=\"\" routerLink=\"/product-detail/{{book._id}}\">\n                            <img class=\"w-100\" src=\"{{book.images.main}}\" alt=\"(Image)\">\n                        </a>\n                    </div>\n                    <div class=\"col-8 d-flex flex-column\">\n                        <h6 class=\"mb-1 text-truncate\" title=\"Nikon 2018 New Edition Summer\"><a href=\"\" class=\"myText-link\" routerLink=\"/product-detail/{{book._id}}\">{{book.title}}</a></h6>\n                        <span>{{book.sellingPrice | currency:'VND'}}</span>\n                        <small><a href=\"\" class=\"myText-link\" routerLink=\"/product-detail/{{book._id}}\">See more</a></small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal: SEND REVIEW | Sender Info -->\n<div class=\"modal fade\" id=\"formSenderInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formSenderInfoLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Thank you for your comment!</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                        <span class=\"text-justify text-muted\">Just a quick step, please let us know some information to notify you.\n                        </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSenderName\" class=\"sr-only\">Your name:</label>\n                        <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSenderName\" aria-describedby=\"\" placeholder=\"Your name (required)\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSenderEmail\" class=\"sr-only\">Email:</label>\n                        <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSenderEmail\" placeholder=\"Email address (required)\" aria-describedby=\"formSenderEmailHelp\">\n                        <small id=\"formSenderEmailHelp\" class=\"form-text text-muted mt-2\">(In order to get notification about our Responses)</small>\n                    </div>\n                    <div class=\"d-flex flex-column align-items-center mt-4\">\n                        <button type=\"submit\" class=\"btn myBtn-fill\">Finish</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/product-detail/product-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-detail/product-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(genreService, bookService, cartService, route, router, location) {
        this.genreService = genreService;
        this.bookService = bookService;
        this.cartService = cartService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.componentTitle = 'Product Details';
        this.inputQuantity = 1;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.getBooks();
        this.getBook();
        this.getBook$();
    };
    ProductDetailComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (_) { return _this.genres = _; });
    };
    ProductDetailComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (_) { return _this.books = _; });
    };
    ProductDetailComponent.prototype.getBook = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('_id');
        this.bookService.getBook(id)
            .subscribe(function (_) {
            _this.book = _;
            // this.showRelatedBook(_ , 3);
        });
    };
    ProductDetailComponent.prototype.getBook$ = function () {
        var _this = this;
        this.book$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            return _this.bookService.getBook(params.get('_id'));
        }));
    };
    ProductDetailComponent.prototype.addItem = function (book) {
        this.cartService.addItem(book, this.inputQuantity);
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_services_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"],
            _services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\n<!-- <div class=\"container-fluid myTitle py-3\">\n  <div class=\"container\">\n    <div class=\"row flex-column\">\n      <h3 class=\"sr-only\">PRODUCT LIST</h3>\n      <nav aria-label=\"breadcrumb myBreadcrum\">\n        <ol class=\"breadcrumb myBreadcrum\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"../index.html\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Product list</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n</div> -->\n<app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n<div class=\"container\">\n  <div class=\"row\">\n    <!-- Colllape filter -->\n    <div class=\"col-12 col-sm-4 col-md-3 mb-3 bg-light\">\n      <div class=\"row\">\n        <div class=\"col-12 bg-secondary\">\n          <a href=\"#\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\" data-toggle=\"collapse\"\n            data-target=\"#collapseFilter\" aria-controls=\"collapseFilter\" aria-expanded=\"false\">\n            <span class=\"text-white\">\n              <b>Filter by</b>\n            </span>\n            <i class=\"fas fa-angle-down fs-23 text-white\"></i>\n          </a>\n        </div>\n      </div>\n      <div class=\"row mx-0\">\n        <div class=\"col-12 px-0\">\n          <div class=\"collapse show\" id=\"collapseFilter\">\n            <!-- Sub collapse: categories -->\n            <div class=\"row mx-0 mt-2\">\n              <div class=\"col-12 px-0\">\n                <a class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\" data-toggle=\"collapse\"\n                  data-toggle=\"collapse\" href=\"#collapseCategories\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseCategories\">\n                  <span class=\"myText-padding-left\">\n                    <b>Categories</b>\n                  </span>\n                  <i class=\"fas fa-angle-down\"></i>\n                </a>\n              </div>\n              <div class=\"col-12 px-0\">\n                <app-loading *ngIf=\"!genres\"></app-loading>\n                <div *ngIf=\"genres\" class=\"collapse show myCollapse-filter myText-margin-left myBorder-bottom\" id=\"collapseCategories\">\n                  <a *ngFor=\"let genre of genres\" class=\"myText-link-2 d-block mb-1\" href=\"\">{{genre.name}}</a>\n                </div>\n              </div>\n            </div>\n            <!-- Sub collapse: brands -->\n            <div class=\"row mx-0 mt-2\">\n              <div class=\"col-12 px-0\">\n                <a href=\"#collapseBrand\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\"\n                  data-toggle=\"collapse\" data-target=\"#collapseBrand\" aria-controls=\"collapseBrand\" aria-expanded=\"false\">\n                  <span class=\"myText-margin-left\">\n                    <b>Brands</b>\n                  </span>\n                  <i class=\"fas fa-angle-down\"></i>\n                </a>\n              </div>\n              <div class=\"col-12 px-0\">\n                <app-loading *ngIf=\"!books\"></app-loading>\n                <div *ngIf=\"books\" class=\"collapse show myCollapse-filter myText-margin-left myBorder-bottom\" id=\"collapseBrand\">\n                  <a *ngFor=\"let book of books\" class=\"myText-link-2 d-block mb-1\" href=\"\">{{book.publisher}}</a>\n                </div>\n              </div>\n\n            </div>\n            <!-- Sub collapse: price ranges -->\n            <div class=\"row mx-0 mt-2\">\n              <div class=\"col-12 px-0\">\n                <a href=\"#collapsePrice\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\"\n                  data-toggle=\"collapse\" data-target=\"#collapsePrice\" aria-controls=\"collapsePrice\" aria-expanded=\"false\">\n                  <span class=\"myText-margin-left\">\n                    <b>Prices</b>\n                  </span>\n                  <i class=\"fas fa-angle-down\"></i>\n                </a>\n              </div>\n              <div class=\"col-12 px-0\">\n                <div class=\"collapse show myCollapse-filter myText-margin-left myBorder-bottom\" id=\"collapsePrice\">\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">$0 - $100</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">$100 - $1000</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">$1000 - $2000</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Cards of Products  -->\n    <div class=\"col-12 col-sm-8 col-md-9 mb-3 bg-light d-flex flex-column justify-content-between\">\n\n      <div *ngIf=\"books\" class=\"row myCardBoard mt-2 mb-2\">\n        <div class=\"col-12 mb-2\">\n          <h5>All Products</h5>\n          <p class=\"text-muted\">Displaying {{books2?.length || '0'}} {{checkPluralItems}} out of {{books?.length|| '0'}} {{checkPluralBooks}}</p>\n        </div>\n        <div class=\"col-12 mb-2\">\n          <div class=\"form-group float-right\">\n            <label class=\"sr-only\" for=\"selectPagination\">Items per Page</label>\n            <select [(ngModel)]=\"step\" (change)=\"onShowOption(step)\" class=\"form-control myInput-elegant-3 w-auto\" id=\"selectPagination\"\n              required>\n              <option [ngValue]=\"books?.length\">Show all</option>\n              <option [ngValue]=\"2\">Show 2 items</option>\n              <option [ngValue]=\"4\">Show 4 items</option>\n              <option [ngValue]=\"12\">Show 12 items</option>\n              <option [ngValue]=\"20\">Show 20 items</option>\n            </select>\n          </div>\n        </div>\n\n        <div *ngFor=\"let book of books2\" class=\"col-6 col-sm-6 col-md-4 col-lg-3 mb-3\">\n          <app-card [book]=\"book\"></app-card>\n        </div>\n\n        <!-- <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper myCursor-pointer myCard-outofstock\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-1.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../assets/img/item/item-camera-1.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small myCursor-pointer\">\n                <a href=\"\" class=\"myText-link\" routerLink=\"/product-detail\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../assets/img/item/item-camera-2.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small\">\n                <a href=\"product-detail.html\" class=\"myText-link\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper myCard-outofstock\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../img/item/item-camera-1.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small\">\n                <a href=\"product-detail.html\" class=\"myText-link\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div> -->\n      </div>\n      <app-loading *ngIf=\"!books\" class=\"mt-5\"></app-loading>\n      <!-- Pagination -->\n      <div class=\"row align-self-center mt-3\">\n        <div class=\"col-12 d-flex justify-content-center mb-3\">\n          <nav *ngIf=\"pageArray\" class=\"mb-3\" aria-label=\"Page navigation example\">\n            <ul class=\"pagination\">\n              <li class=\"\">\n                <button (click)=\"onPrevPage(selectedPage)\" [class.invisible]=\"selectedPage == 1\" class=\"btn btn-link text-dark\" title=\"Previous\">\n                  <i class=\"fas fa-chevron-left\"></i>\n                  <span class=\"sr-only\">Prev</span>\n                </button>\n              </li>\n              <li class=\"page-item\" *ngFor=\"let page of pageArray\" [class.active]=\"page == selectedPage\">\n                <button class=\"btn rounded-circle page-link mx-1\" *ngIf=\"page < 6\" (click)=\"onShowItems(page)\">{{page}}</button>\n                <button class=\"btn rounded-circle page-link mx-1\" *ngIf=\"page >= 6\" (click)=\"onShowItems(page)\">...</button>\n              </li>\n              <li class=\"\">\n                <button (click)=\"onNextPage(selectedPage)\" [class.invisible]=\"selectedPage == pages\" class=\"btn btn-link text-dark\" title=\"Next\">\n                  <i class=\"fas fa-chevron-right\"></i>\n                  <span class=\"sr-only\">Next</span>\n                </button>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(genreService, bookService, cartService) {
        this.genreService = genreService;
        this.bookService = bookService;
        this.cartService = cartService;
        this.componentTitle = 'Product List';
        this.booksInCart = [];
        this.selectedPage = 1;
        this.checkPluralItems = '';
        this.checkPluralBooks = '';
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getGenres();
        this.getBooks();
        this.step = 12;
    };
    // For get Genres & Books
    ProductListComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (_) { return _this.genres = _; });
    };
    ProductListComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (z) {
            _this.books = z;
            _this.books2 = z.slice(0, _this.step);
            _this.onCountPages(z, _this.step);
            _this.onPrintLabel();
            _this.checkPluralHandler();
        });
    };
    // For Pagination
    ProductListComponent.prototype.onCountPages = function (books, step) {
        var items = this.books.length;
        var pages;
        if (items % step == 0) {
            pages = items / step;
        }
        else {
            pages = Math.floor(items / step) + 1;
        }
        this.pages = pages;
    };
    ProductListComponent.prototype.onPrintLabel = function () {
        this.pageArray = new Array(this.pages);
        for (var i = 0; i < this.pageArray.length; i++) {
            this.pageArray[i] = i + 1;
        }
    };
    ProductListComponent.prototype.onShowItems = function (i) {
        this.selectedPage = i;
        var a = this.step * i - this.step;
        var b;
        if (this.step * i >= this.books.length) {
            b = this.books.length;
        }
        else {
            b = this.step * i;
        }
        this.books2 = this.books.slice(a, b);
        this.checkPluralHandler();
    };
    ProductListComponent.prototype.onShowAll = function () {
        this.books2 = this.books;
        this.checkPluralHandler();
    };
    ProductListComponent.prototype.onShowOption = function (step) {
        this.onCountPages(this.books, this.step);
        this.onPrintLabel();
        this.onShowItems(1);
    };
    ProductListComponent.prototype.onNextPage = function (selectedPage) {
        this.selectedPage = (selectedPage < this.pages) ? (this.selectedPage = selectedPage + 1) : (this.selectedPage = selectedPage);
        this.onShowItems(this.selectedPage);
    };
    ProductListComponent.prototype.onPrevPage = function (selectedPage) {
        this.selectedPage = (selectedPage > 1) ? (this.selectedPage = selectedPage - 1) : (this.selectedPage = 1);
        this.onShowItems(this.selectedPage);
    };
    ProductListComponent.prototype.checkPluralHandler = function () {
        this.checkPluralBooks = (this.books.length > 1) ? "items" : "item";
        this.checkPluralItems = (this.books2.length > 1) ? "items" : "item";
    };
    // For Shopping Cart
    ProductListComponent.prototype.addItem = function (book) {
        this.cartService.addItem(book, 1);
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_genre_service__WEBPACK_IMPORTED_MODULE_1__["GenreService"],
            _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"],
            _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <app-breadcrumb [breadcrumbTitle]=\"componentTitle\"></app-breadcrumb>\n  <div class=\"container\">\n      <div class=\"row mb-4\">\n          <div class=\"col-12 col-md-2 col-lg-3\"></div>\n          <div class=\"col-12 col-md-8 col-lg-6\">\n              <div class=\"mySignup p-4\">\n                  \n                  <h4 class=\"text-center mt-3 mb-5\">CREATE YOUR ACCOUNT</h4>\n                  <form [formGroup]=\"registerForm\" #formDir=\"ngForm\">\n                      <div class=\"form-group\">\n                          <label for=\"formSignupFirstname\" class=\"sr-only\">First Name:</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-2\" id=\"formSignupFirstname\" aria-describedby=\"\" placeholder=\"First Name\" formControlName=\"first\" required autofocus>\n                          <div *ngIf=\"first.invalid && submitted\" class=\"\">\n                              <small *ngIf=\"first.errors.required\" class=\"text-danger\">\n                                  First Name is required\n                              </small>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"formSignupLastname\" class=\"sr-only\">Last Name:</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-2\" id=\"formSignupLastname\" aria-describedby=\"\" placeholder=\"Last Name\" formControlName=\"last\" required>\n                          <div *ngIf=\"last.invalid && submitted\" class=\"\">\n                              <small *ngIf=\"last.errors.required\" class=\"text-danger\">\n                                  Last Name is required\n                              </small>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"formSignupPhone\" class=\"sr-only\">Phone:</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-2\" id=\"formSignupPhone\" placeholder=\"Phone Number\" formControlName=\"phone\" required>\n                          <div *ngIf=\"phone.invalid && submitted\" class=\"\">\n                              <small *ngIf=\"phone.errors.required\" class=\"text-danger\">\n                                  Phone Number is required\n                              </small>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"formSignupEmail\" class=\"sr-only\">Email:</label>\n                          <input type=\"email\" class=\"form-control myInput-elegant-2\" id=\"formSignupEmail\" placeholder=\"Email\" formControlName=\"email\" required>\n                          <div *ngIf=\"email.invalid && submitted\" class=\"\">\n                              <small *ngIf=\"email.errors.required\" class=\"text-danger\">\n                                  Email is required\n                              </small>\n                          </div>\n                      </div>\n                      <div class=\"form-group position-relative\">\n                          <label for=\"formSignupPassword\" class=\"sr-only\">Password:</label>\n                          <input [type]=\"show\" class=\"form-control myInput-elegant-2\" id=\"formSignupPassword\" placeholder=\"Password\" formControlName=\"password\" required>\n                          <button (click)=\"onToggle()\"  class=\"myText-link myIcon-inside text-muted\"><i *ngIf=\"!value\" class=\"far fa-eye\"></i><i *ngIf=\"value\" class=\"far fa-eye-slash\"></i></button>\n                          <div *ngIf=\"password.invalid && submitted\" class=\"\">\n                              <small *ngIf=\"password.errors.required\" class=\"text-danger\">\n                                  Password is required\n                              </small>\n                          </div>\n                      </div>\n                      <div class=\"form-group\">\n                          <label for=\"formSignupPasswordConfirm\" class=\"sr-only\">Confirm Password:</label>\n                          <input [type]=\"show\" class=\"form-control myInput-elegant-2\" id=\"formSignupPasswordConfirm\" placeholder=\"Confirm Password\" formControlName=\"confirm\" required>\n                      </div>\n                      <div class=\"form-group form-check\">\n                          <input type=\"checkbox\" class=\"form-check-input\" id=\"formSignupPolicy\" formControlName=\"check\">\n                          <label class=\"form-check-label\" for=\"formSignupPolicy\">\n                              I have read\n                              <a href=\"#\" class=\"myText-link\" target=\"_blank\">Terms of Service</a> and\n                              <a href=\"#\" class=\"myText-link\" target=\"_blank\">Privacy Policy</a>\n                          </label>\n                      </div>\n                      <div class=\"d-flex flex-column align-items-center mt-4\">\n                          <div *ngIf=\"error\" class=\"mb-2\"><small class=\"text-danger\"><i class=\"icon-close\"></i> Cannot register because: <b>{{error.error.error}}</b></small></div>\n                          <button type=\"submit\" (click)=\"onSaveRegister()\" class=\"btn myBtn-fill mb-3\">Sign up</button>\n                          <span class=\"text-muted mb-2\">\n                              <small>Already have an account?</small>\n                              <a href=\"\" class=\"myText-link\" data-toggle=\"modal\" data-target=\"#formLogin\">Login</a>\n                          </span>\n                          <a href=\"forgot.html\" class=\"text-muted\" target=\"_blank\">Forgot your password?</a>\n                      </div>\n                  </form>\n              </div>\n          </div>\n          <div class=\"col-12 col-md-2 col-lg-3\"></div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _view_models_user_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-models/user.register */ "./src/app/view-models/user.register.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService) {
        this.userService = userService;
        this.componentTitle = 'Register';
        this.objectUser = new _view_models_user_register__WEBPACK_IMPORTED_MODULE_2__["UserRegister"]();
        this.checkbox = false;
        // For toggle Show or Hide password input
        this.show = "password";
        this.value = 0;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'first': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.objectUser.first, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'last': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.objectUser.last, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.objectUser.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.objectUser.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.objectUser.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'confirm': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.objectUser.password, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'check': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.checkbox, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "first", {
        get: function () { return this.registerForm.get('first'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "last", {
        get: function () { return this.registerForm.get('last'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "phone", {
        get: function () { return this.registerForm.get('phone'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () { return this.registerForm.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () { return this.registerForm.get('password'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "confirm", {
        get: function () { return this.registerForm.get('confirm'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "check", {
        get: function () { return this.registerForm.get('check'); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSaveRegister = function () {
        this.submitted = (this.registerForm.value.check) ? true : false;
        var x = this.objectUser;
        var y = this.registerForm.value;
        if (y.check == false) {
            alert('You have to agree with our Terms of Service and Privacy Policy');
        }
        else if (y.password !== y.confirm) {
            alert("You have to confirm correct password that you've typed");
        }
        else if (y.first && y.last && y.phone && y.email && y.password && y.confirm) {
            x.first = y.first;
            x.last = y.last;
            x.phone = y.phone;
            x.email = y.email;
            x.password = y.password;
            this.addUsers();
        }
        else {
            alert('Cannot register: some fields are missing.');
        }
    };
    RegisterComponent.prototype.addUsers = function () {
        var _this = this;
        this.userService.addUser(this.objectUser).subscribe(function (data) { alert("Sucessfully registerd: " + _this.objectUser.first + " " + _this.objectUser.last + " as a User"); }, function (error) {
            _this.error = error;
        });
    };
    RegisterComponent.prototype.onToggle = function () {
        if (this.value % 2 == 1) {
            this.show = "password";
            this.value = 0;
        }
        else {
            this.show = "text";
            this.value = 1;
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var BookService = /** @class */ (function () {
    function BookService(http, router) {
        this.http = http;
        this.router = router;
        this.booksUrl = 'https://green-web-bookshop.herokuapp.com/api/books';
        this.bannersUrl = 'https://green-web-bookstore.herokuapp.com/api/banners';
    }
    BookService.prototype.getBooks = function () {
        return this.http.get(this.booksUrl);
    };
    BookService.prototype.addBook = function (book) {
        return this.http.post(this.booksUrl, book, httpOptions);
    };
    BookService.prototype.deleteBook = function (book) {
        // const id = typeof genre === 'string' ? genre : genre._id;
        var url = this.booksUrl + "/" + book._id;
        return this.http.delete(url, httpOptions);
    };
    BookService.prototype.updateBook = function (book) {
        var url = this.booksUrl + "/" + book._id;
        return this.http.put(url, book, httpOptions);
    };
    BookService.prototype.getBook = function (id) {
        var url = this.booksUrl + "/" + id;
        return this.http.get(url);
    };
    // Banners
    BookService.prototype.getBanners = function () {
        return this.http.get(this.bannersUrl);
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _view_models_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-models/cart */ "./src/app/view-models/cart.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService() {
        this.cartProduct = new _view_models_cart__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        this.cartSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.cartSource$ = this.cartSource.asObservable();
        // public discount_input: string = '';
        this.discount_code = 'BLACK_FRIDAY';
        this.discount_percent = 30 / 100;
    }
    // For localStorage methods
    CartService.prototype.getStorage = function () {
        return localStorage.getItem('currentCart');
    };
    CartService.prototype.removeStorage = function () {
        localStorage.removeItem('currentCart');
    };
    CartService.prototype.setStorage = function () {
        localStorage.setItem('currentCart', JSON.stringify(this.currentCart));
        this.cartSource.next(JSON.stringify(this.currentCart));
    };
    // For Shoping Cart methods
    CartService.prototype.cartInit = function () {
        if (this.getStorage()) {
            this.currentCart = JSON.parse(this.getStorage());
        }
        else {
            this.currentCart = new _view_models_cart__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
            localStorage.setItem('currentCart', JSON.stringify(this.currentCart));
        }
    };
    CartService.prototype.removeCart = function () {
        if (localStorage.getItem('currentCart')) {
            this.removeStorage();
            this.currentCart = new _view_models_cart__WEBPACK_IMPORTED_MODULE_2__["Cart"]();
            this.cartProduct = new _view_models_cart__WEBPACK_IMPORTED_MODULE_2__["Product"]();
            this.countItemInCart();
            this.calculateAll();
            this.setStorage();
        }
        else {
        }
    };
    CartService.prototype.addItem = function (book, inputQuantity) {
        var cartProduct = new _view_models_cart__WEBPACK_IMPORTED_MODULE_2__["Product"]();
        var find_product = this.currentCart.items.find(function (p) { return p.book._id == book._id; });
        var find_index = this.currentCart.items.findIndex(function (p) { return p.book._id == book._id; });
        if (find_product) {
            this.currentCart.items[find_index].quantity += inputQuantity;
        }
        else {
            cartProduct.book = book;
            cartProduct.quantity = inputQuantity;
            this.currentCart.items.push(cartProduct);
        }
        this.countItemInCart();
        this.currentCart.total = this.setTotal();
        this.setStorage();
    };
    CartService.prototype.removeItem = function (book) {
        var currentCart = this.currentCart;
        var find_index = this.currentCart.items.findIndex(function (p) { return p.book._id == book._id; });
        var find_product = this.currentCart.items.find(function (p) { return p.book._id == book._id; });
        if (find_product) {
            this.currentCart.items[find_index].quantity = 0;
            currentCart.items = this.currentCart.items.filter(function (i) { return i.quantity > 0; });
        }
        else {
        }
        this.currentCart = currentCart;
        this.countItemInCart();
        this.currentCart.total = this.setTotal();
        this.calculateAll();
        this.setStorage();
    };
    CartService.prototype.calculateAll = function () {
        var cart = this.currentCart; // For shorthand typing
        cart.total = this.setTotal();
        cart.discount = (JSON.parse(this.getStorage()).items.length == 0) ? 0 : cart.discount;
        cart.amount = cart.total - cart.discount;
        cart.shipping = cart.shipping;
        cart.payable = cart.total - cart.discount + cart.shipping;
    };
    CartService.prototype.updateCart = function (cart) {
        this.currentCart = cart;
        this.countItemInCart();
        this.calculateAll();
        this.setStorage();
    };
    CartService.prototype.setTotal = function () {
        var total = 0;
        for (var i = 0; i < this.currentCart.items.length; i++) {
            total += this.currentCart.items[i].book.sellingPrice * this.currentCart.items[i].quantity;
        }
        return total;
    };
    CartService.prototype.setDiscount = function (input) {
        var code = this.discount_code;
        var percent = this.discount_percent;
        return this.currentCart.total * ((input == code) ? percent : 0);
    };
    CartService.prototype.setDiscountAmount = function () {
        return 0;
    };
    CartService.prototype.setShipping = function (input) {
        return input;
        // maybe I'll delete this method
    };
    CartService.prototype.countItemInCart = function () {
        var count = 0;
        for (var i = 0; i < this.currentCart.items.length; i++) {
            count += this.currentCart.items[i].quantity;
        }
        this.currentCart.book_counted = count;
        this.setStorage();
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/genre.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/genre.service.ts ***!
  \*******************************************/
/*! exports provided: GenreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenreService", function() { return GenreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json'
    })
};
var GenreService = /** @class */ (function () {
    function GenreService(http) {
        this.http = http;
        this.genresUrl = 'https://green-web-bookshop.herokuapp.com/api/genres';
    }
    GenreService.prototype.getGenres = function () {
        return this.http.get(this.genresUrl);
    };
    GenreService.prototype.addGenre = function (genre) {
        return this.http.post(this.genresUrl, genre, httpOptions);
    };
    GenreService.prototype.deleteGenre = function (genre) {
        // const id = typeof genre === 'string' ? genre : genre._id;
        var url = this.genresUrl + "/" + genre._id;
        return this.http.delete(url, httpOptions);
    };
    /** PUT: update the hero on the server */
    // updateGenre (genre: Genre): Observable<any> {
    //   return this.http.put(this.genresUrl, genre, httpOptions);
    // }
    GenreService.prototype.updateGenre = function (genre) {
        var url = this.genresUrl + "/" + genre._id;
        return this.http.put(url, genre, httpOptions);
    };
    GenreService.prototype.searchHeroes = function (term) {
        if (!term.trim()) {
            // if not search term, return empty hero array.
            // return of([]);
        }
        return this.http.get(this.genresUrl + "/?name=" + term);
    };
    GenreService.prototype.onType = function (ten) {
        // return !this.name;
        if (this.ten.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }; // Note: this onType() makes button disabled when there is no value in Input
    GenreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GenreService);
    return GenreService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: BookService, CartService, GenreService, OrderService, UserService, LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _book_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book.service */ "./src/app/services/book.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return _book_service__WEBPACK_IMPORTED_MODULE_0__["BookService"]; });

/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart.service */ "./src/app/services/cart.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return _cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]; });

/* harmony import */ var _genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genre.service */ "./src/app/services/genre.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenreService", function() { return _genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"]; });

/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.service */ "./src/app/services/login.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return _login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]; });

/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order.service */ "./src/app/services/order.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return _order_service__WEBPACK_IMPORTED_MODULE_4__["OrderService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]; });









/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _view_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../view-models */ "./src/app/view-models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginService = /** @class */ (function () {
    function LoginService(fb, route, router, authService) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.loginObject = new _view_models__WEBPACK_IMPORTED_MODULE_6__["Login"]();
        this.login = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.login$ = this.login.asObservable();
        this.status$ = this.status.asObservable();
    }
    LoginService.prototype.announceStatus = function (status) { this.status.next(status); };
    LoginService.prototype.annouceLogin = function (login) { this.login.next(login); };
    Object.defineProperty(LoginService.prototype, "f", {
        // createLoginForm() {
        //   this.loginShopForm = this.fb.group({
        //     username: ['', Validators.required],
        //     password: ['', Validators.required]
        //   });
        // }
        get: function () { return this.loginShopForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.onSubmit = function (form, returnUrl) {
        this.loginShopForm = form;
        this.loginObject.submitted = true;
        this.loginObject.returnUrl = returnUrl;
        this.annouceLogin(this.loginObject);
        if (form.invalid) {
            return;
        }
        this.isLoggedIn();
    };
    LoginService.prototype.isLoggedIn = function () {
        // console.log(`LoginService: status$ = ${this.status$}`);
        if (this.status$) {
            // console.log(`LoginService: Ready to login`);
            this.onLogin();
        }
        else {
            // console.log(`LoginService: Cannot login`);
        }
    };
    LoginService.prototype.onLogin = function () {
        var _this = this;
        this.loginObject.loading = true;
        this.annouceLogin(this.loginObject);
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            // console.log(`status$: Da co Token = ${JSON.parse(localStorage.getItem('currentUser')).token}`);
            _this.announceStatus(true);
            // console.log(`return URL = ${this.loginObject.returnUrl}`);
            _this.router.navigate([_this.loginObject.returnUrl]);
            _this.loginObject.loading = false;
            _this.loginObject.error = '';
            _this.loginObject.status = true;
            _this.annouceLogin(_this.loginObject);
        }, function (error) {
            _this.loginObject.error = error.error.error;
            _this.loginObject.loading = false;
            _this.annouceLogin(_this.loginObject);
            _this.announceStatus(false);
        });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/order.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/order.service.ts ***!
  \*******************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var OrderService = /** @class */ (function () {
    function OrderService(http) {
        this.http = http;
        this.ordersUrl = 'https://green-web-bookshop.herokuapp.com/api/orders';
    }
    OrderService.prototype.addOrder = function (order) {
        return this.http.post(this.ordersUrl, order, httpOptions);
    };
    OrderService.prototype.getOrders = function () {
        return this.http.get(this.ordersUrl);
    };
    OrderService.prototype.getOrder = function (id) {
        var url = this.ordersUrl + "/" + id;
        return this.http.get(url);
    };
    OrderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = 'https://green-web-ecommerce.herokuapp.com/v1/users/';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl);
    };
    UserService.prototype.addUser = function (users) {
        return this.http.post(this.userUrl, users, httpOptions);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/view-models/banner.ts":
/*!***************************************!*\
  !*** ./src/app/view-models/banner.ts ***!
  \***************************************/
/*! exports provided: Banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
var Banner = /** @class */ (function () {
    function Banner() {
    }
    return Banner;
}());



/***/ }),

/***/ "./src/app/view-models/book.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/book.ts ***!
  \*************************************/
/*! exports provided: Book */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genre */ "./src/app/view-models/genre.ts");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/app/view-models/image.ts");
/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./size */ "./src/app/view-models/size.ts");



var Book = /** @class */ (function () {
    function Book() {
        this.images = new _image__WEBPACK_IMPORTED_MODULE_1__["Image"]();
        this.size = new _size__WEBPACK_IMPORTED_MODULE_2__["Size"]();
        this.genre = new _genre__WEBPACK_IMPORTED_MODULE_0__["Genre"]('');
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/view-models/cart.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/cart.ts ***!
  \*************************************/
/*! exports provided: Cart, Product */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return Product; });
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ "./src/app/view-models/book.ts");

var Cart = /** @class */ (function () {
    function Cart() {
        this.items = new Array();
        this.book_counted = 0;
        this.discount = 0;
        this.total = 0;
        this.amount = this.total - this.discount;
        this.shipping = 0;
        this.payable = 0;
    }
    return Cart;
}());

// Used for Class Cart
var Product = /** @class */ (function () {
    function Product() {
        this.quantity = 0;
        this.book = new _book__WEBPACK_IMPORTED_MODULE_0__["Book"]();
    }
    return Product;
}());



/***/ }),

/***/ "./src/app/view-models/comment.ts":
/*!****************************************!*\
  !*** ./src/app/view-models/comment.ts ***!
  \****************************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/view-models/genre.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/genre.ts ***!
  \**************************************/
/*! exports provided: Genre */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return Genre; });
var Genre = /** @class */ (function () {
    function Genre(name) {
        this.name = name;
    }
    return Genre;
}());



/***/ }),

/***/ "./src/app/view-models/image.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/image.ts ***!
  \**************************************/
/*! exports provided: Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
var Image = /** @class */ (function () {
    function Image() {
    }
    return Image;
}());



/***/ }),

/***/ "./src/app/view-models/index.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/index.ts ***!
  \**************************************/
/*! exports provided: Book, Cart, Product, Order, BOOK, UserOrder, BookOrder, UserRegister, User, Banner, Comment, Genre, Image, Size, Users, Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner */ "./src/app/view-models/banner.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return _banner__WEBPACK_IMPORTED_MODULE_0__["Banner"]; });

/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/app/view-models/book.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return _book__WEBPACK_IMPORTED_MODULE_1__["Book"]; });

/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart */ "./src/app/view-models/cart.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return _cart__WEBPACK_IMPORTED_MODULE_2__["Cart"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _cart__WEBPACK_IMPORTED_MODULE_2__["Product"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment */ "./src/app/view-models/comment.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return _comment__WEBPACK_IMPORTED_MODULE_3__["Comment"]; });

/* harmony import */ var _genre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./genre */ "./src/app/view-models/genre.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Genre", function() { return _genre__WEBPACK_IMPORTED_MODULE_4__["Genre"]; });

/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image */ "./src/app/view-models/image.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image__WEBPACK_IMPORTED_MODULE_5__["Image"]; });

/* harmony import */ var _order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order */ "./src/app/view-models/order.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["Order"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOK", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["BOOK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserOrder", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["UserOrder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BookOrder", function() { return _order__WEBPACK_IMPORTED_MODULE_6__["BookOrder"]; });

/* harmony import */ var _size__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./size */ "./src/app/view-models/size.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return _size__WEBPACK_IMPORTED_MODULE_7__["Size"]; });

/* harmony import */ var _user_register__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.register */ "./src/app/view-models/user.register.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserRegister", function() { return _user_register__WEBPACK_IMPORTED_MODULE_8__["UserRegister"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user */ "./src/app/view-models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_9__["User"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./users */ "./src/app/view-models/users.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _users__WEBPACK_IMPORTED_MODULE_10__["Users"]; });

/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/view-models/login.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _login__WEBPACK_IMPORTED_MODULE_11__["Login"]; });















/***/ }),

/***/ "./src/app/view-models/login.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/login.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
var Login = /** @class */ (function () {
    function Login() {
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.status = false;
    }
    return Login;
}());



/***/ }),

/***/ "./src/app/view-models/order.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/order.ts ***!
  \**************************************/
/*! exports provided: Order, BOOK, UserOrder, BookOrder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK", function() { return BOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserOrder", function() { return UserOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOrder", function() { return BookOrder; });
var Order = /** @class */ (function () {
    function Order() {
        this._user = new UserOrder();
        this.books = new Array();
    }
    return Order;
}());

var BOOK = /** @class */ (function () {
    function BOOK() {
        this._book = new BookOrder();
    }
    return BOOK;
}());

var UserOrder = /** @class */ (function () {
    function UserOrder() {
    }
    return UserOrder;
}());

var BookOrder = /** @class */ (function () {
    function BookOrder() {
    }
    return BookOrder;
}());



/***/ }),

/***/ "./src/app/view-models/size.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/size.ts ***!
  \*************************************/
/*! exports provided: Size */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Size", function() { return Size; });
var Size = /** @class */ (function () {
    function Size() {
        // this.width = width;
        // this.height = height;
        // this.depth = depth;
    }
    return Size;
}());



/***/ }),

/***/ "./src/app/view-models/user.register.ts":
/*!**********************************************!*\
  !*** ./src/app/view-models/user.register.ts ***!
  \**********************************************/
/*! exports provided: UserRegister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegister", function() { return UserRegister; });
var UserRegister = /** @class */ (function () {
    function UserRegister() {
    }
    return UserRegister;
}());



/***/ }),

/***/ "./src/app/view-models/user.ts":
/*!*************************************!*\
  !*** ./src/app/view-models/user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    // createdAt: string;
    // updatedAt: string;
    // id: string;
    function User() {
        // this.first = first;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/view-models/users.ts":
/*!**************************************!*\
  !*** ./src/app/view-models/users.ts ***!
  \**************************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/view-models/user.ts");

var Users = /** @class */ (function () {
    function Users() {
        this.user = new _user__WEBPACK_IMPORTED_MODULE_0__["User"]();
        // this.user = new User();
    }
    return Users;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\baodo\OneDrive\Desktop\__DEVELOPER\4_my-projects\Do An Green\angular-bookshop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map