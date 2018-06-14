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

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 text-center myBody-buffer d-flex flex-column justify-content-center py-3\">\n        <h1>SORRY!</h1>\n        <h3 class=\"text-danger\">Site not available.</h3>\n        <p>This site is under construction, please visit later.</p>\n    </div>\n  </div>\n</div>"

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

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle py-3\">\n  <div class=\"container\">\n    <div class=\"row flex-column\">\n      <h3 class=\"\">MY ACCOUNT</h3>\n      <nav aria-label=\"breadcrumb myBreadcrum\">\n        <ol class=\"breadcrumb myBreadcrum\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"../index.html\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Account</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-3 mb-3\">\n      <!-- LEFT SIDEBAR -->\n      <div class=\"nav myPill-nav flex-column nav-pills\" id=\"v-pills-tab\" role=\"tablist\" aria-orientation=\"vertical\">\n        <a class=\"nav-link active\" id=\"tabMainAccountLabel\" data-toggle=\"pill\" href=\"#tabMainAccount\" role=\"tab\" aria-controls=\"tabMainAccount\"\n          aria-selected=\"true\">\n          <i class=\"fas fa-user\"></i> My Account</a>\n        <a class=\"nav-link\" id=\"tabMainCartLabel\" data-toggle=\"pill\" href=\"#tabMainCart\" role=\"tab\" aria-controls=\"tabMainCart\" aria-selected=\"false\">\n          <i class=\"fas fa-shopping-cart\"></i> My Cart</a>\n        <a class=\"nav-link\" id=\"tabMainOrderLabel\" data-toggle=\"pill\" href=\"#tabMainOrder\" role=\"tab\" aria-controls=\"tabMainOrder\"\n          aria-selected=\"false\">\n          <i class=\"fas fa-list-ul\"></i> My Order List</a>\n        <a class=\"nav-link mt-3\" id=\"tabMainLogoutLabel\" data-toggle=\"pill\" href=\"#tabMainLogout\" role=\"tab\" aria-controls=\"tabMainLogout\"\n          aria-selected=\"false\">\n          <i class=\"fas fa-sign-out-alt\"></i> Log out</a>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-9\">\n      <!-- MAIN TABS -->\n      <div class=\"tab-content\" id=\"tabMainNav\">\n        <div class=\"tab-pane fade show active\" id=\"tabMainAccount\" role=\"tabpanel\" aria-labelledby=\"tabMainAccountLabel\">\n          <!-- Tab HERE -->\n          <nav>\n            <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\n              <a class=\"nav-item nav-link active\" id=\"tabAccountInfoLabel\" data-toggle=\"tab\" href=\"#tabAccountInfo\" role=\"tab\" aria-controls=\"tabAccountInfo\"\n                aria-selected=\"true\">\n                <i class=\"fas fa-info\"></i> Info</a>\n              <a class=\"nav-item nav-link\" id=\"tabAccountAddressLabel\" data-toggle=\"tab\" href=\"#tabAccountAddress\" role=\"tab\" aria-controls=\"tabAccountAddress\"\n                aria-selected=\"false\">\n                <i class=\"far fa-address-book\"></i> Address</a>\n              <a class=\"nav-item nav-link\" id=\"tabAccountPaymentLabel\" data-toggle=\"tab\" href=\"#tabAccountPayment\" role=\"tab\" aria-controls=\"tabAccountPayment\"\n                aria-selected=\"false\">\n                <i class=\"fas fa-dollar-sign\"></i> Payment</a>\n            </div>\n          </nav>\n          <div class=\"tab-content\" id=\"tabAccount\">\n            <div class=\"tab-pane fade show active\" id=\"tabAccountInfo\" role=\"tabpanel\" aria-labelledby=\"tabAccountInfoLabel\">\n              <form class=\"mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-10 col-lg-6\">\n                    <div class=\"row\">\n                      <div class=\"col-4\">\n                        <div class=\"form-group w-100\">\n                          <label for=\"formSignupGender\" class=\"sr-only\">Gender</label>\n                          <select class=\"form-control myInput-elegant-2\" id=\"formSignupGender\">\n                            <option>Mr.</option>\n                            <option>Ms.</option>\n                          </select>\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-6 pr-1\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupFirstname\" class=\"sr-only\">First Name:</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSignupFirstname\" aria-describedby=\"\" placeholder=\"First Name\">\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupLastname\" class=\"sr-only\">Last Name:</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSignupLastname\" aria-describedby=\"\" placeholder=\"Last Name\">\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-4 pr-0\">\n                        <div class=\"form-group w-100\">\n                          <label for=\"formAccountBirthday\" class=\"sr-only\">Day</label>\n                          <select class=\"form-control myInput-elegant-2\" id=\"formAccountBirthday\">\n                            <option>1</option>\n                            <option>2</option>\n                            <option>3</option>\n                            <option>4</option>\n                            <option>5</option>\n                            <option>6</option>\n                            <option>7</option>\n                            <option>8</option>\n                            <option>9</option>\n                            <option>10</option>\n                            <option>11</option>\n                            <option>12</option>\n                            <option>13</option>\n                            <option>14</option>\n                            <option>15</option>\n                            <option>16</option>\n                            <option>17</option>\n                            <option>18</option>\n                            <option>19</option>\n                            <option>20</option>\n                            <option>21</option>\n                            <option>22</option>\n                            <option>23</option>\n                            <option>24</option>\n                            <option>25</option>\n                            <option>26</option>\n                            <option>27</option>\n                            <option>28</option>\n                            <option>29</option>\n                            <option>30</option>\n                            <option>31</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-4 pr-0\">\n                        <div class=\"form-group w-100\">\n                          <label for=\"formAccountBirthmonth\" class=\"sr-only\">Month</label>\n                          <select class=\"form-control myInput-elegant-2\" id=\"formAccountBirthmonth\">\n                            <option>January</option>\n                            <option>February</option>\n                            <option>March</option>\n                            <option>April</option>\n                            <option>May</option>\n                            <option>June</option>\n                            <option>July</option>\n                            <option>August</option>\n                            <option>September</option>\n                            <option>October</option>\n                            <option>November</option>\n                            <option>December</option>\n                          </select>\n                        </div>\n                      </div>\n                      <div class=\"col-4\">\n                        <div class=\"form-group\">\n                          <label for=\"formAccountBirthyear\" class=\"sr-only\">BirthYear</label>\n                          <input type=\"number\" value=\"1995\" class=\"form-control myInput-elegant-2\" id=\"formAccountBirthyear\" placeholder=\"Year\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formAccountPhone\" class=\"sr-only\">Phone Number</label>\n                          <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formAccountPhone\" placeholder=\"Phone Number\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupEmail\" class=\"sr-only\">Email:</label>\n                          <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSignupEmail\" placeholder=\"Email\">\n                        </div>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formSignupPassword\" class=\"sr-only\">Password:</label>\n                          <input type=\"password\" class=\"form-control myInput-elegant-3\" id=\"formSignupPassword\" placeholder=\"Password\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-12 d-flex justify-content-center\">\n                        <button type=\"submit\" class=\"btn myBtn-fill mb-3\">Update</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tabAccountAddress\" role=\"tabpanel\" aria-labelledby=\"tabAccountAddressLabel\">\n              <form class=\"mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-10 col-lg-6\">\n                    <div class=\"row\">\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressStreetNumber\" class=\"sr-only\">Street Number</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressStreetNumber\" aria-describedby=\"\" placeholder=\"Street No.\">\n                        </div>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressStreet\" class=\"sr-only\">Street</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressStreet\" aria-describedby=\"\" placeholder=\"Street\">\n                        </div>\n                      </div>\n                      <div class=\"col-6 pr-0\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressWard\" class=\"sr-only\">Ward</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressWard\" aria-describedby=\"\" placeholder=\"Ward\">\n                        </div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressDistrict\" class=\"sr-only\">District</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressDistrict\" aria-describedby=\"\" placeholder=\"District\">\n                        </div>\n                      </div>\n\n                    </div>\n                    <div class=\"row\">\n                      <div class=\"col-4 pr-0\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressZip\" class=\"sr-only\">Zip Code</label>\n                          <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formAddressZip\" placeholder=\"Zip Code\">\n                        </div>\n                      </div>\n                      <div class=\"col-4 pr-0\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressCity\" class=\"sr-only\">State / City</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressCity\" aria-describedby=\"\" placeholder=\"State / City\">\n                        </div>\n                      </div>\n                      <div class=\"col-4\">\n                        <div class=\"form-group\">\n                          <label for=\"formAddressCountry\" class=\"sr-only\">Country</label>\n                          <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formAddressCountry\" aria-describedby=\"\" placeholder=\"Country\">\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-12 d-flex justify-content-center\">\n                        <button type=\"submit\" class=\"btn myBtn-fill mb-3\">Update</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"tab-pane fade\" id=\"tabAccountPayment\" role=\"tabpanel\" aria-labelledby=\"tabAccountPaymentLabel\">\n              <form class=\"mt-4\">\n                <div class=\"row\">\n                  <div class=\"col-12 col-md-10 col-lg-6\">\n                    <!-- Colllap paypal -->\n                    <div class=\"row mb-2\">\n                      <div class=\"col-12\">\n                        <a href=\"#\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between px-0\" data-toggle=\"collapse\" data-target=\"#collapsePaypal\"\n                          aria-controls=\"collapsePaypal\" aria-expanded=\"false\">\n                          <span>\n                            <b>PayPal</b>\n                          </span>\n                          <i class=\"fas fa-angle-down\"></i>\n                        </a>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"collapse\" id=\"collapsePaypal\">\n                          <div class=\"form-group\">\n                            <label for=\"formPaymentEmail\" class=\"sr-only\">Paypal Email:</label>\n                            <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formPaymentEmail\" placeholder=\"Paypal Email\">\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- Collapse Card -->\n                    <div class=\"row mb-2\">\n                      <div class=\"col-12\">\n                        <a href=\"#\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between px-0\" data-toggle=\"collapse\" data-target=\"#collapseCard\"\n                          aria-controls=\"collapseCard\" aria-expanded=\"false\">\n                          <span>\n                            <b>Credit Card</b>\n                          </span>\n                          <i class=\"fas fa-angle-down\"></i>\n                        </a>\n                      </div>\n                      <div class=\"col-12\">\n                        <div class=\"collapse\" id=\"collapseCard\">\n                          <div class=\"row\">\n                            <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentCardNumber\" class=\"sr-only\">Card Number</label>\n                                <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formPaymentCardNumber\" placeholder=\"Card Number\">\n                              </div>\n                            </div>\n                            <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentCardCVV\" class=\"sr-only\">Security Code</label>\n                                <input type=\"number\" value=\"\" class=\"form-control myInput-elegant-2\" id=\"formPaymentCardCVV\" placeholder=\"Security Code (CVV)\">\n                              </div>\n                            </div>\n                            <div class=\"col-6 pr-0\">\n                              <div class=\"form-group w-100\">\n                                <label for=\"formPaymentExpireMonth\" class=\"\">Expire Month</label>\n                                <select class=\"form-control myInput-elegant-2\" id=\"formPaymentExpireMonth\">\n                                  <option>1</option>\n                                  <option>2</option>\n                                  <option>3</option>\n                                  <option>4</option>\n                                  <option>5</option>\n                                  <option>6</option>\n                                  <option>7</option>\n                                  <option>8</option>\n                                  <option>9</option>\n                                  <option>10</option>\n                                  <option>11</option>\n                                  <option>12</option>\n                                </select>\n                              </div>\n                            </div>\n                            <div class=\"col-6\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentExpireYear\" class=\"\">Expire Year</label>\n                                <input type=\"number\" value=\"2020\" class=\"form-control myInput-elegant-2\" id=\"formPaymentExpireYear\" placeholder=\"\">\n                              </div>\n                            </div>\n                            <!-- Doing -->\n                            <div class=\"col-12\">\n                              <div class=\"form-group\">\n                                <label for=\"formPaymentCardHolder\" class=\"sr-only\">Cardholder</label>\n                                <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formPaymentCardHolder\" aria-describedby=\"\" placeholder=\"Cardholder's Name\">\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row mt-2\">\n                      <div class=\"col-12 d-flex justify-content-center\">\n                        <button type=\"submit\" class=\"btn myBtn-fill mb-3\">Update</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"tabMainCart\" role=\"tabpanel\" aria-labelledby=\"tabMainCartLabel\">\n          <div class=\"row d-flex flex-column align-items-center\">\n            <div class=\"col-7 col-sm-6 col-md-5 col-lg-3 text-center\">\n              <img src=\"../assets/img/thumbnail/illustration-cart.png\" alt=\"IMAGE\" title=\"Shopping cart, Credit to Henry Brown &  Co. Ltd\" class=\"w-100 myImg-fit mb-2\">\n              <a href=\"cart.html\" class=\"btn myBtn-fill\" target=\"_blank\">Go to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"tabMainOrder\" role=\"tabpanel\" aria-labelledby=\"tabMainOrderLabel\">\n          <nav>\n            <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\n              <a class=\"nav-item nav-link active\" id=\"tabOrderLabel\" data-toggle=\"tab\" href=\"#tabOrder\" role=\"tab\" aria-controls=\"tabOrder\"\n                aria-selected=\"true\">\n                <i class=\"fas fa-list-ul\"></i> Orders</a>\n            </div>\n          </nav>\n          <div class=\"tab-content\" id=\"tabOrderList\">\n            <div class=\"tab-pane fade show active\" id=\"tabOrder\" role=\"tabpanel\" aria-labelledby=\"tabOrderLabel\">\n              <div class=\"table-responsive-xl mt-4\">\n                <table class=\"table table-striped table-light\">\n                  <thead>\n                    <tr>\n                      <th scope=\"col\">Order number</th>\n                      <th scope=\"col\">Date</th>\n                      <th scope=\"col\">Total</th>\n                      <th scope=\"col\">Status</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr>\n                      <th scope=\"row\">\n                        <a href=\"\" target=\"_blank\" routerLink=\"/order-detail\">#18050101</a>\n                      </th>\n                      <td>01-Jan-2018</td>\n                      <td>$1,000</td>\n                      <td>Complete</td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\">\n                        <a href=\"order-detail.html\" target=\"_blank\">#18050101</a>\n                      </th>\n                      <td>01-Jan-2018</td>\n                      <td>$1,000</td>\n                      <td>Complete</td>\n                    </tr>\n                    <tr>\n                      <th scope=\"row\">\n                        <a href=\"order-detail.html\" target=\"_blank\">#18050101</a>\n                      </th>\n                      <td>01-Jan-2018</td>\n                      <td>$1,000</td>\n                      <td>Complete</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"tab-pane fade\" id=\"tabMainLogout\" role=\"tabpanel\" aria-labelledby=\"tabMainLogoutLabel\">\n          <div class=\"row\">\n            <div class=\"col-12 text-center my-3\">\n              <form action=\"\">\n                <h5>LOGGING OUT</h5>\n                <p>Are you sure to logout?</p>\n                <div>\n                  <button class=\"btn myBtn-outline mr-2\">No</button>\n                  <button type=\"submit\" class=\"btn myBtn-fill\">Yes</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(/*! ./account.component.html */ "./src/app/account/account.component.html"),
            styles: [__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
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
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: '/account', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"] },
    { path: 'checkout', component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_6__["CheckoutComponent"] },
    { path: 'order-detail', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_7__["OrderDetailComponent"] },
    { path: 'product-list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"] },
    { path: 'product-detail', component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] }
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

module.exports = "\n<app-header></app-header>\n<div class=\"bg-white\">\n    <router-outlet></router-outlet>\n</div>\n    \n<!-- Modal: LOGIN -->\n<div class=\"modal fade\" id=\"formLogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formLoginLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"formLoginLabel\">Login</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group mt-2\">\n                        <label for=\"formLoginEmail\" class=\"sr-only\">Email address:</label>\n                        <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formLoginEmail\" aria-describedby=\"emailHelp\" placeholder=\"Email address\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formLoginPassword\" class=\"sr-only\">Password:</label>\n                        <input type=\"password\" class=\"form-control myInput-elegant-3 mb-2\" id=\"formLoginPassword\" placeholder=\"Password\">\n                        <a href=\"\" class=\"text-muted\" target=\"_blank\">\n                            <small>I forgot my password.</small>\n                        </a>\n                    </div>\n                    <div class=\"form-group form-check\">\n                        <input type=\"checkbox\" class=\"form-check-input\" id=\"formLoginRemember\">\n                        <label class=\"form-check-label text-muted\" for=\"formLoginRemember\">Remember login</label>\n                    </div>\n                    <div class=\"d-flex flex-column align-items-center mt-4\">\n                        <button type=\"submit\" class=\"btn myBtn-fill\">Log in</button>\n                        <a href=\"\" class=\"text-muted mt-2 mb-2\" target=\"_blank\"  routerLink=\"/signup\">\n                            <small>I don't have an account.</small>\n                        </a>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal: LOGOUT -->\n<div class=\"modal fade\" id=\"formLogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formLogoutLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h5 class=\"modal-title\" id=\"formLogoutLabel\">Logout</h5>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\">&times;</span>\n                    </button>\n                </div>\n                <div class=\"modal-body\">\n                    <form action=\"\" class=\"text-center\">\n                        <p>Are you sure to logout?</p>\n                        <div>\n                            <button class=\"btn myBtn-outline mr-2\">No</button>\n                            <button type=\"submit\" class=\"btn myBtn-fill\">Yes</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n<!-- Modal: SUBSCRIBE -->\n<div class=\"modal fade\" id=\"formSubscribe\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formSubscribeLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Subscribe to our\n                    <b>Newsletters</b>\n                </h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                        <span>\n                            <i>Let's stay in touch to get notified about our\n                                <a href=\"product-list.html\" class=\"myText-link\"\n                                    target=\"_blank\">newest Products &amp; Promotions.</a>\n                            </i>\n                        </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSubscribeName\" class=\"sr-only\">Your name:</label>\n                        <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSubscribeName\" aria-describedby=\"\" placeholder=\"Your name\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSubscribeEmail\" class=\"sr-only\">Email:</label>\n                        <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSubscribeEmail\" placeholder=\"Your email address\" aria-describedby=\"formSubscribeEmailHelp\">\n                        <small id=\"formSubscribeEmailHelp\" class=\"form-text text-muted mt-2\">(We'll never share your email with anyone else.)</small>\n                    </div>\n                    <div class=\"d-flex flex-column align-items-center mt-4\">\n                        <button type=\"submit\" class=\"btn myBtn-fill\">Subscribe</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n<app-footer></app-footer>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./order-detail/order-detail.component */ "./src/app/order-detail/order-detail.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/product-detail/product-detail.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _account_account_component__WEBPACK_IMPORTED_MODULE_9__["AccountComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_10__["SignupComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
                _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_12__["CheckoutComponent"],
                _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__["OrderDetailComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_14__["ProductListComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_18__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                // AppBootstrapModule,
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAKoMhjN0nLfVZjgrUjsp8tRFrDL_GYZ7w'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle py-3\">\n  <div class=\"container\">\n      <div class=\"row flex-column\">\n          <h3 class=\"\">SHOPPING CART</h3>\n          <nav aria-label=\"breadcrumb myBreadcrum\">\n              <ol class=\"breadcrumb myBreadcrum\">\n                  <li class=\"breadcrumb-item\">\n                      <a href=\"\" routerLink=\"/home\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\" aria-current=\"page\">Cart</li>\n              </ol>\n          </nav>\n      </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-12 col-md-8 d-flex flex-column mb-3\">\n          <h5 class=\"bg-secondary text-white py-2 pl-2 mb-4\">Shopping Products</h5>\n          <div class=\"table-responsive mb-2\">\n              <table class=\"table border\">\n                  <thead>\n                      <tr class=\" \">\n                          <th scope=\"col\"> </th>\n                          <th class=\"myTable-product\" scope=\"col\">Product</th>\n                          <th scope=\"col\">Price</th>\n                          <th scope=\"col\">Color</th>\n                          <th scope=\"col\">Quantity</th>\n                          <th scope=\"col\">Total</th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr class=\"myTable-row\">\n                          <td>\n                              <div class=\"myImg-thumbnail\">\n                                  <img src=\"../assets/img/item/item-camera-1.jpg\" class=\"w-100\" alt=\"\">\n                              </div>\n                          </td>\n                          <th class=\"myTable-product\" scope=\"row\">\n                              <h6 class=\"mb-1\"><a href=\"\" class=\"myText-link\" routerLink=\"product-detail\">Canon EOS 2018 New Edition Limited 100% New US Imported</a></h6>\n                              <a href=\"#\" class=\"text-small text-muted\"><small><i class=\"far fa-trash-alt\"></i> Remove</small></a>\n                          </th>\n                          <td>$450</td>\n                          <td>Black</td>\n                          <td>\n                              <label for=\"formCartQuantity\" class=\"sr-only\"></label>\n                              <input type=\"number\" class=\"form-control myInput-cart-quantity\" id=\"formCartQuantity\" aria-describedby=\"\" value=\"1\" name=\"\">\n                          </td>\n                          <td><b>$450</b></td>\n                      </tr>\n                      \n                  </tbody>\n              </table>\n          </div>\n          <div class=\"form-group w-50 align-self-end\">\n              <label for=\"formCartDiscount\"><b>Apply Discount:</b></label>\n              <input type=\"text\" class=\"form-control text-uppercase\" id=\"formCartDiscount\" aria-describedby=\"\" placeholder=\"\">\n            </div>\n          <button type=\"submit\" class=\"btn myBtn-fill align-self-end\">Update Cart</button>\n      </div>\n      <div class=\"col-12 col-md-4 d-flex flex-column\">\n          <h5 class=\"bg-secondary text-white py-2 pl-2 mb-4\">Cart Totals</h5>\n          <table class=\"table\">\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">Products</th>\n                    <td class=\"text-right\">$1350</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">Discount</th>\n                    <td class=\"text-right\">-$0</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">TOTAL</th>\n                    <td class=\"text-right\"><b>$1370</b></td>\n                  </tr>\n                </tbody>\n          </table>\n          <a href=\"\" class=\"btn myBtn-fill align-self-end\" target=\"_blank\" routerLink=\"/checkout\">Checkout</a>\n      </div>\n  </div>\n</div>"

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
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<p>\n  checkout works!\n</p>\n"

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
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle py-3\">\n    <div class=\"container\">\n        <div class=\"row flex-column\">\n          <h3 class=\"\"><b></b>CONTACT US</h3>\n          <nav aria-label=\"breadcrumb myBreadcrum\">\n              <ol class=\"breadcrumb myBreadcrum\">\n                <li class=\"breadcrumb-item\"><a href=\"../index.html\">Home</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">Contact</li>\n              </ol>\n          </nav>\n        </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row mb-4\">\n      <div class=\"col-12 col-md-6 mb-4\">\n        <h4 class=\"mb-4\">Google Map</h4>\n        <div id=\"googleMap\" class=\"myGoogleMap\">\n                <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                </agm-map>\n        </div>\n      </div>\n      <div class=\"col-12 col-md-6\">\n          <h4 class=\"mb-4\">Send us your message:</h4>\n          <div class=\"form-group\">\n              <label for=\"formContactName\" class=\"sr-only\">Full name:</label>\n              <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formContactName\" placeholder=\"Full Name\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"formContactPhone\" class=\"sr-only\">Phone number:</label>\n              <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formContactPhone\" placeholder=\"Phone number\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"formContactEmail\" class=\"sr-only\">Email address:</label>\n              <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formContactEmail\" placeholder=\"Email address\">\n          </div>\n          <div class=\"form-group\">\n              <label for=\"formContactMessage\" class=\"sr-only\">Full name:</label>\n              <textarea class=\"form-control myInput-elegant-3\" id=\"formContactMessage\" placeholder=\"Your messages\" name=\"\" cols=\"30\" rows=\"7\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn myBtn-fill\">Send</button>\n      </div>\n    </div>\n  </div>\n  <!-- For google map working -->\n  <!-- <script>\n     \n  </script>\n      \n      <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAKoMhjN0nLfVZjgrUjsp8tRFrDL_GYZ7w&callback=myMap\"></script> -->"

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
        this.lat = 10.8231;
        this.lng = 106.6297;
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

module.exports = "<!-- Footer -->\n<footer class=\"container-fluid bg-light py-3\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <a href=\"../index.html\" class=\"myBrand-logo\" target=\"_blank\">Brand</a>\n    </div>\n    <div class=\"row justify-content-center myFooter-social\">\n      <a href=\"https://www.facebook.com\" target=\"_blank\">\n        <i class=\"fab fa-facebook\"></i>\n      </a>\n      <a href=\"https://www.twitter.com\" target=\"_blank\">\n        <i class=\"fab fa-twitter\"></i>\n      </a>\n      <a href=\"https://www.pinterest.com\" target=\"_blank\">\n        <i class=\"fab fa-pinterest\"></i>\n      </a>\n      <a href=\"\" class=\"\" data-toggle=\"modal\" data-target=\"#formSubscribe\" target=\"_blank\" title=\"Subscribe to our Newsletters\" data-placement=\"bottom\">\n        <i class=\"far fa-envelope\"></i>\n      </a>\n    </div>\n    <div class=\"row justify-content-center myFooter-policy mb-2\">\n      <a href=\"#\" target=\"_blank\" class=\"text-dark\">Terms of service</a>\n      <span> | </span>\n      <a href=\"#\" target=\"_blank\" class=\"text-dark\">Privacy policy</a>\n    </div>\n    <div class=\"row justify-content-center myFooter-brand\">\n      <a href=\"\" class=\"m-0\" target=\"_blank\" routerLink=\"/home\">&copy; Brand 2018</a>\n    </div>\n  </div>\n</footer>\n"

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

module.exports = "<nav class=\"navbar navbar-light bg-white\">\n    <a href=\"\" class=\"myBrand-logo\" target=\"_blank\" routerLink=\"/home\">Brand</a>\n    <div class=\"d-flex flex-row pr-3\">\n        <a href=\"#\" class=\"btn myBtn-icon myOutline text-dark\" data-toggle=\"collapse\" data-target=\"#collapseAccount\" aria-controls=\"collapseAccount\"\n            aria-expanded=\"false\">\n            <i class=\"fas fa-user\"></i>\n            <i class=\"fas fa-angle-down\"></i>\n        </a>\n\n        <div class=\"dropdown\">\n            <a href=\"#\" class=\"btn dropdown-toggle myBtn-icon myOutline text-dark\" id=\"dropdownCart\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                aria-expanded=\"false\">\n                <i class=\"fas fa-shopping-cart\"></i>\n                <b class=\"badge badge-danger\">5</b>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right myDropdown-cart rounded-0 p-3\" aria-labelledby=\"dropdownCart\">\n                <h5 class=\"mb-3\">Your Cart:</h5>\n                <div class=\"myCart d-flex flex-column\">\n                    <div class=\"d-flex flex-column myCart-scroll mb-3\">\n                        <div class=\"d-flex flex-row myCart-product p-2\">\n                            <div class=\"myCart-img mr-2\">\n                                <img src=\"../assets/img/item/item-macbook-1.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"myCart-item text-truncate\">\n                                <h6 class=\"myCart-name\">\n                                    <a href=\"pages/product-detail.html\">Macbook Macbook Macbook Macbook</a>\n                                </h6>\n                                <p class=\"myCart-price\">1 x $2,000</p>\n                            </div>\n                        </div>\n                        <div class=\"d-flex flex-row myCart-product p-2\">\n                            <div class=\"myCart-img mr-2\">\n                                <img src=\"../assets/img/item/item-macbook-1.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"myCart-item text-truncate\">\n                                <h6 class=\"myCart-name\">\n                                    <a href=\"pages/product-detail.html\">Macbook Macbook Macbook Macbook</a>\n                                </h6>\n                                <p class=\"myCart-price\">1 x $2,000</p>\n                            </div>\n                        </div>\n                        <div class=\"d-flex flex-row myCart-product p-2\">\n                            <div class=\"myCart-img mr-2\">\n                                <img src=\"../assets/img/item/item-macbook-1.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"myCart-item text-truncate\">\n                                <h6 class=\"myCart-name\">\n                                    <a href=\"pages/product-detail.html\">Macbook Macbook Macbook Macbook</a>\n                                </h6>\n                                <p class=\"myCart-price\">1 x $2,000</p>\n                            </div>\n                        </div>\n                        <div class=\"d-flex flex-row myCart-product p-2\">\n                            <div class=\"myCart-img mr-2\">\n                                <img src=\"../assets/img/item/item-macbook-1.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"myCart-item text-truncate\">\n                                <h6 class=\"myCart-name\">\n                                    <a href=\"pages/product-detail.html\">Macbook Macbook Macbook Macbook</a>\n                                </h6>\n                                <p class=\"myCart-price\">1 x $2,000</p>\n                            </div>\n                        </div>\n                        <div class=\"d-flex flex-row myCart-product p-2\">\n                            <div class=\"myCart-img mr-2\">\n                                <img src=\"../assets/img/item/item-macbook-1.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"myCart-item text-truncate\">\n                                <h6 class=\"myCart-name\">\n                                    <a href=\"pages/product-detail.html\">Macbook Macbook Macbook Macbook</a>\n                                </h6>\n                                <p class=\"myCart-price\">1 x $2,000</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"d-flex flex-column myCart-bottom\">\n                        <span class=\"align-self-end mb-2\">Total: $10,000</span>\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <a href=\"\" class=\"btn myBtn-fill mr-2\" target=\"_blank\" routerLink=\"/cart\">View Cart</a>\n                            <a href=\"\" class=\"btn myBtn-fill\" target=\"_blank\" routerLink=\"/checkout\">Checkout</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"collapse navbar-collapse\" id=\"collapseAccount\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item mx-auto\">\n                <a class=\"nav-link\" routerLink=\"/account\">Account</a>\n            </li>\n            <li class=\"nav-item mx-auto\">\n                <a class=\"nav-link\" href=\"\" data-toggle=\"modal\" data-target=\"#formLogin\">Log in</a>\n            </li>\n            <li class=\"nav-item mx-auto\">\n                <a class=\"nav-link\" routerLink=\"/signup\">Sign up</a>\n            </li>\n            <li class=\"nav-item mx-auto\">\n                <a class=\"nav-link\" href=\"\" data-toggle=\"modal\" data-target=\"#formLogout\">Log out</a>\n            </li>\n        </ul>\n    </div>\n</nav>\n<nav class=\"navbar navbar-expand-md navbar-light bg-light sticky-top\">\n    <!-- Button Collapse -->\n    <button class=\"navbar-toggler myBtn-icon myOutline fs-20 pl-0\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseMenu\"\n        aria-controls=\"collapseMenu\" aria-expanded=\"false\">\n        <i class=\"fas fa-bars\"></i>\n    </button>\n    <button class=\"navbar-toggler myBtn-icon myOutline fs-20\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseSearch\"\n        aria-controls=\"collapseSearch\" aria-expanded=\"false\">\n        <i class=\"fas fa-search\"></i>\n       \n    </button>\n    <!-- Collapse Menu -->\n    <div class=\"collapse navbar-collapse\" id=\"collapseMenu\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item active\">\n                <a class=\"nav-link\" href=\"\" routerLink=\"/home\">Home\n                    <span class=\"sr-only\">(current)</span>\n                </a>\n            </li>\n            <li class=\"nav-item dropdown myDropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    Shop\n                </a>\n                <div class=\"dropdown-menu myHover-dropdown rounded-0\" aria-labelledby=\"navbarDropdown\">\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Best Sellers</a>\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">On Sale</a>\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">New Arrivals</a>\n                    <div class=\"dropdown-divider my-0\"></div>\n                    <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Coming Soon</a>\n                </div>\n            </li>\n            <li class=\"nav-item dropdown myDropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarProduct\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                    aria-expanded=\"false\">\n                    Products\n                </a>\n                <div class=\"dropdown-menu rounded-0\" aria-labelledby=\"navbarProduct\">\n                    <a class=\"dropdown-item\" href=\"\"  routerLink=\"/product-list\">Laptop</a>\n                    <a class=\"dropdown-item\" href=\"\"  routerLink=\"/product-list\">Macbook</a>\n                    <a class=\"dropdown-item\" href=\"\"  routerLink=\"/product-list\">iPhone</a>\n                    <a class=\"dropdown-item\" href=\"\"  routerLink=\"/product-list\">iPad</a>\n                    <a class=\"dropdown-item\" href=\"\"  routerLink=\"/product-list\">Smartphone</a>\n                    <a class=\"dropdown-item\" href=\"\"  routerLink=\"/product-list\">Camera</a>\n                    <!-- *** Test site *** -->\n                    <a class=\"dropdown-item dropdown-toggle\" href=\"#\" id=\"navbarAccessories\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                        aria-expanded=\"false\">Accessories</a>\n                    <div class=\"dropdown-menu ml-4 rounded-0\" aria-labelledby=\"navbarAccessories\">\n                        <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Headphone</a>\n                        <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Wireless mouse</a>\n                        <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Camera len</a>\n                        <a class=\"dropdown-item\" href=\"\" routerLink=\"/product-list\">Camera flash</a>\n                    </div>\n                </div>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"\" target=\"_blank\" routerLink=\"/about\">About</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"pages/contact.html\" target=\"_blank\" routerLink=\"/contact\">Contact</a>\n            </li>\n        </ul>\n    </div>\n    <!-- Collapse Search -->\n    <div class=\"collapse navbar-collapse\" id=\"collapseSearch\">\n        <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control myInput-elegant myOutline\" placeholder=\"Find products...\" aria-label=\"Recipient's username\"\n                aria-describedby=\"basic-addon2\">\n            <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary myBtn-icon w-auto\" type=\"button\">Go</button>\n            </div>\n        </div>\n    </div>\n</nav>"

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

module.exports = "<p>HomeComponent hoat dong</p>"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle py-3\">\n    <div class=\"container\">\n        <div class=\"row flex-column\">\n            <h3 class=\"\">ORDER DETAILS</h3>\n            <nav aria-label=\"breadcrumb myBreadcrum\">\n                <ol class=\"breadcrumb myBreadcrum\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"../index.html\">Home</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Order details</li>\n                </ol>\n            </nav>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-12 mb-3\">\n                <div class=\"table-responsive-xl mt-4\">\n                        <table class=\"table table-striped table-light\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Order number</th>\n                                    <th scope=\"col\">Date</th>\n                                    <th scope=\"col\">Total</th>\n                                    <th scope=\"col\">Status</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">\n                                        <a href=\"order-detail.html\" target=\"_blank\">#18050101</a>\n                                    </th>\n                                    <td>01-Jan-2018</td>\n                                    <td>$1,000</td>\n                                    <td>Complete</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n        </div>\n        <!-- Doing -->\n        <div class=\"col-12 mb-3\">\n                <h5>Billing Information</h5>\n                <div class=\"table-responsive-xl mt-4\">\n                        <table class=\"table table-light\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Content</th>\n                                    <th scope=\"col\">Description</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">Shipper</th>\n                                    <td>Brand Co., Ltd</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Receiver</th>\n                                    <td>Bao Doan</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">From</th>\n                                    <td>100 Main Street, <br> USA</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">To</th>\n                                    <td>12 Nguyen Thi Minh Khai,<br>Ward 12, <br>District 1 <br>Ho Chi Minh city, <br>Zip code 700000 <br>Vietnam</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Shipping</th>\n                                    <td>FedEx Economy</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Freight</th>\n                                    <td>Prepaid</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Payment method</th>\n                                    <td>By Paypal</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Card number</th>\n                                    <td>**** **** **** 6978</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                </div>\n        </div>\n        <div class=\"col-12 mb-3\">\n                <h5>Payment Information</h5>\n                <div class=\"table-responsive-xl mt-4\">\n                        <table class=\"table table-light\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\">Content</th>\n                                    <th scope=\"col\">Description</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <th scope=\"row\">Products</th>\n                                    <td>$1,500</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Discount</th>\n                                    <td>-$0</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">Freight</th>\n                                    <td>$30</td>\n                                </tr>\n                                <tr>\n                                    <th scope=\"row\">TOTAL</th>\n                                    <td>$1,530</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                </div>\n        </div>\n        <div class=\"col-12 mb-3\">\n                <h5>Purchased Products</h5>\n                <div class=\"table-responsive-xl mt-4\">\n                        <table class=\"table table-light\">\n                            <thead>\n                                <tr>\n                                    <th scope=\"col\"></th>\n                                    <th scope=\"col\">Product</th>\n                                    <th scope=\"col\">Price</th>\n                                    <th scope=\"col\">Quantity</th>\n                                    <th scope=\"col\">Total</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td class=\"d-flex align-items-center justify-content-center\">\n                                        <div class=\"myCart-img\"><img src=\"../img/item/item-macbook-1.jpg\" alt=\"\"></div>\n                                    </td>\n                                    <td>Macbook Pro 2017</td>\n                                    <td>$500</td>\n                                    <td>1</td>\n                                    <td>$500</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"d-flex align-items-center justify-content-center\">\n                                        <div class=\"myCart-img\"><img src=\"../img/item/item-macbook-1.jpg\" alt=\"\"></div>\n                                    </td>\n                                    <td>Macbook Pro 2017</td>\n                                    <td>$500</td>\n                                    <td>1</td>\n                                    <td>$500</td>\n                                </tr>\n                                <tr>\n                                    <td class=\"d-flex align-items-center justify-content-center\">\n                                        <div class=\"myCart-img\"><img src=\"../img/item/item-macbook-1.jpg\" alt=\"\"></div>\n                                    </td>\n                                    <td>Macbook Pro 2017</td>\n                                    <td>$500</td>\n                                    <td>1</td>\n                                    <td>$500</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                </div>\n        </div>\n    </div>\n</div>"

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
    function OrderDetailComponent() {
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.component.html */ "./src/app/order-detail/order-detail.component.html"),
            styles: [__webpack_require__(/*! ./order-detail.component.css */ "./src/app/order-detail/order-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle mb-0\">\n    <div class=\"container\">\n        <div class=\"row flex-column mb-0\">\n            <!-- <h3 class=\"\">PRODUCT DETAILS</h3> -->\n            <nav aria-label=\"breadcrumb myBreadcrum\">\n                <ol class=\"breadcrumb myBreadcrum\">\n                    <li class=\"breadcrumb-item\">\n                        <a href=\"../index.html\">Home</a>\n                    </li>\n                    <li class=\"breadcrumb-item active\" aria-current=\"page\">Product details</li>\n                </ol>\n            </nav>\n        </div>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row py-3 mb-2 bg-light\">\n        <!-- Advanced Carousel-->\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-4 mb-3\">\n            <div class=\"row\">\n                <div class=\"col-12 mb-2\">\n                    <div id=\"carouselProductIndicator\" class=\"carousel slide myCarousel\" data-ride=\"carousel\">\n                        <div class=\"carousel-inner myCarousel-img-view\">\n                            <div class=\"carousel-item active\">\n                                <a href=\"../assets/img/item/item-camera-1.jpg\" data-toggle=\"lightbox\" data-gallery=\"gallery\">\n                                    <img class=\"d-block w-100\" src=\"../assets/img/item/item-camera-1.jpg\" alt=\"First slide\">\n                                </a>\n                            </div>\n                            <div class=\"carousel-item\">\n                                <a href=\"../assets/img/item/item-camera-2.jpg\" data-toggle=\"lightbox\" data-gallery=\"gallery\">\n                                    <img class=\"d-block w-100\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"Second slide\">\n                                </a>\n                            </div>\n                            <div class=\"carousel-item\"> \n                                <a href=\"../assets/img/item/item-camera-3.jpg\" data-toggle=\"lightbox\" data-gallery=\"gallery\">\n                                    <img class=\"d-block w-100\" src=\"../assets/img/item/item-camera-3.jpg\" alt=\"Third slide\">\n                                </a>\n                            </div>\n                        </div>\n                        <a class=\"carousel-control-prev\" href=\"#carouselProductIndicator\" role=\"button\" data-slide=\"prev\">\n                           <i class=\"fas fa-angle-left\" aria-hidden=\"true\"></i>\n                            <span class=\"sr-only\">Previous</span>\n                        </a>\n                        <a class=\"carousel-control-next\" href=\"#carouselProductIndicator\" role=\"button\" data-slide=\"next\">\n                                <i class=\"fas fa-angle-right\" aria-hidden=\"true\"></i>\n                            <span class=\"sr-only\">Next</span>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"col-12 d-flex flex-row flex-wrap myCarousel-img-nav\">\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"0\" class=\"active\">\n                        <img src=\"../assets/img/item/item-camera-1.jpg\" alt=\"\" class=\"w-100\">\n                    </div>\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"1\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-2.jpg\" alt=\"\" class=\"w-100\">\n                    </div>\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div>\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div>\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div>\n                    <div data-target=\"#carouselProductIndicator\" data-slide-to=\"2\" class=\"\">\n                        <img src=\"../assets/img/item/item-camera-3.jpg\" alt=\"\" class=\"w-100\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Add to Cart site  -->\n        <div class=\"col-12 col-sm-6 col-md-6 col-lg-8 mb-3\">\n            <p class=\"sr-only\">Product</p>\n            <h5>Canon EOS 2018 New Edition</h5>\n            <h6 class=\"\">\n                <s>$500</s> <span class=\"text-danger\">$450</span>\n            </h6>\n            <div class=\"d-flex flex-row mb-3\">\n                <h6 class=\"text-success mr-3\">\n                    <i class=\"fas fa-check\"></i> In stock \n                </h6>\n                <h6 class=\"text-danger\">\n                    <i class=\"fas fa-exclamation\"></i> Out of stock <a href=\"#\" class=\"myText-link\">(Order)</a>\n                </h6>\n            </div>\n            \n            <div class=\"d-flex flex-column\">\n                <span>Warranty:\n                    <span>12 months</span>\n                </span>\n                <span>Return:\n                    <span>15 days</span>\n                </span>\n                <span>Specification:\n                    <a class=\"myText-link\" href=\"#tabSpecification\"> View</a>\n                </span>\n                <span>Bonus gift:</span>\n                <ul class=\"mt-1\">\n                    <li>Handbag</li>\n                    <li>Free batterry change</li>\n                    <li>SD Memory Card</li>\n                </ul>\n\n            </div>\n            <div class=\"row\">\n                <div class=\"col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 pr-0\">\n                    <label for=\"productQuantity\" class=\"\">Quantity</label>\n                    <input type=\"number\" id=\"productQuantity\" class=\"form-control \" name=\"\" value=\"1\">\n                </div>\n                <div class=\"col-5 col-sm-6 col-md-4 col-lg-3 col-xl-3 pr-0\">\n                    <label for=\"productColor\" class=\"\">Color</label>\n                    <select class=\"form-control myInput-elegant-2\" id=\"productColor\">\n                        <option>White</option>\n                        <option>Gray</option>\n                        <option>Black</option>\n                        <option>Gold</option>\n                        <option>Rose</option>\n                    </select>\n                </div>\n            </div>\n            <a href=\"#\" class=\"btn myBtn-fill mt-3\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                <i class=\"fas fa-cart-plus\"></i> Add to Cart</a>\n            <!-- <div class=\"w-25\">\n                \n            </div> -->\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 col-md-8 col-lg-9\">\n            <!-- Tab Here -->\n            <nav>\n                <div class=\"nav nav-tabs myTab-nav\" id=\"nav-tab\" role=\"tablist\">\n                    <a class=\"nav-item nav-link\" id=\"tabDescriptionLabel\" data-toggle=\"tab\" href=\"#tabDescription\" role=\"tab\" aria-controls=\"tabDescription\"\n                        aria-selected=\"true\">Description</a>\n                    <a class=\"nav-item nav-link\" id=\"tabSpecificationLabel\" data-toggle=\"tab\" href=\"#tabSpecification\" role=\"tab\" aria-controls=\"tabSpecification\"\n                        aria-selected=\"false\">Specification</a>\n                    <a class=\"nav-item nav-link active\" id=\"tabReviewLabel\" data-toggle=\"tab\" href=\"#tabReview\" role=\"tab\" aria-controls=\"tabReview\"\n                        aria-selected=\"false\">Reviews</a>\n                </div>\n            </nav>\n            <div class=\"tab-content\" id=\"tabAccount\">\n                <div class=\"tab-pane myPost fade py-2\" id=\"tabDescription\" role=\"tabpanel\" aria-labelledby=\"tabDescriptionLabel\">\n                    <h4 class=\"my-4\">CANON EOS 2018 NEW EDITION</h4>\n                    <p class=\"myText-subtitle\">Canon has done a brilliant job to revamp its DSLR line from top to bottom over the past couple of years, from the baby EOS Rebel T7/2000D and EOS 4000D through to the full-frame EOS 6D Mark II and EOS 5D Mark IV models.</p>\n                    <h5>New Design</h5>\n                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut soluta nisi necessitatibus impedit, ab earum, eum voluptatem vel, sunt error perspiciatis? Officia harum et vero minus ratione odio nostrum magni?</p>\n                    <div class=\"myFigure mx-auto mb-2 bg-primary\">\n                        <div class=\"myFigure-img\"><img src=\"../img/item/item-camera-1.jpg\" alt=\"\" class=\"\"></div>\n                        <div class=\"myFigure-caption\">Canon EOS 2018</div>\n                    </div>\n                    <h5>New Features</h5>\n                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum vel eos laboriosam eligendi illo totam ipsam ratione, facilis repellendus molestiae nesciunt, aliquid nisi placeat quisquam, a sed nam est saepe?</p>\n                </div>\n                <div class=\"tab-pane fade py-2\" id=\"tabSpecification\" role=\"tabpanel\" aria-labelledby=\"tabSpecificationLabel\">\n                    <h4 class=\"my-4\">SPECIFICATION</h4>\n                    <table class=\"table table-striped\">\n                        <tbody>\n                          <tr>\n                            <th scope=\"row\">Product name</th>\n                            <td>CANON EOS 2018 New Edition</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Brand</th>\n                            <td>Canon</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">New</th>\n                            <td>New 100%</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Screen</th>\n                            <td>4 inch</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Battery</th>\n                            <td>05 hours</td>\n                          </tr>\n                          <tr>\n                            <th scope=\"row\">Box included</th>\n                            <td>Camera, len, cable, adaptor, SD Card, Guide</td>\n                          </tr>\n                        </tbody>\n                    </table>\n                </div>\n                <div class=\"tab-pane fade py-2 show active\" id=\"tabReview\" role=\"tabpanel\" aria-labelledby=\"tabReviewLabel\">\n                    <h4 class=\"my-4\">REVIEWS</h4>\n                    <div class=\"form-group\">\n                        <label for=\"formReviewMessage\" class=\"\">Comment:</label>\n                        <textarea class=\"form-control myInput-elegant-3\" id=\"formReviewMessage\" placeholder=\"Write your comment here\" name=\"\" cols=\"30\" rows=\"3\"></textarea>\n                        <!-- Doing -->\n                        <button type=\"submit\" class=\"btn myBtn-fill mt-3 mb-3\" data-toggle=\"modal\" data-target=\"#formSenderInfo\">Send</button>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-12 mb-3 myReview-level-1\">\n                            <div class=\"d-flex flex-row align-items-center mb-2\">\n                                <div class=\"myReview-user-img mr-3\">\n                                    <img src=\"../assets/img/thumbnail/ava-user.jpg\" alt=\"User\" class=\"w-100 rounded-circle\">\n                                </div>\n                                <div class=\"div\">\n                                        <h6 class=\"mb-0\">John Doe</h6>\n                                        <small class=\"text-muted\">03 hours ago</small>\n                                </div>\n                            </div>\n                            <div class=\"myReview-user-comment\">\n                                <p class=\"\">Very good!</p>\n                                <p class=\"text-justify\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores voluptatem officia eligendi quisquam aperiam blanditiis neque at ratione placeat, aliquid laudantium dolorum accusantium quae nostrum ab molestiae, assumenda quam!</p>\n                                <a href=\"#\">Reply</a>\n                            </div>\n                            \n                        </div>\n                        <div class=\"col-12 mb-3 myReview-level-2\">\n                            <div class=\"d-flex flex-row align-items-center mb-2\">\n                                <div class=\"myReview-user-img mr-3\">\n                                    <img src=\"../assets/img/thumbnail/ava-user.jpg\" alt=\"User\" class=\"w-100 rounded-circle\">\n                                </div>\n                                <div class=\"div\">\n                                        <h6 class=\"mb-0\">Customer Service<span class=\"badge badge-secondary ml-2\">Admin</span></h6>\n                                        <small class=\"text-muted\">01 hours ago</small>\n                                </div>\n                            </div>\n                            <div class=\"myReview-user-comment\">\n                                <p class=\"\">Thank you!</p>\n                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est asperiores voluptatem.</p>\n                                <a href=\"#\">Reply</a>\n                            </div>\n                            \n                        </div>\n                    </div>\n                    <div class=\"row my-4\">\n                        <div class=\"col-12 d-flex justify-content-center\">\n                            <nav aria-label=\"...\">\n                                <ul class=\"pagination\">\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\" tabindex=\"-1\">\n                                        <i class=\"fas fa-angle-double-left\"></i>\n                                    </a>\n                                  </li>\n                                  <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1<span class=\"sr-only\">(current)</span></a></li>\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\">2</a>\n                                  </li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n                                  <li class=\"page-item\"><a class=\"page-link\" href=\"#\">...</a></li>\n                                  <li class=\"page-item\">\n                                    <a class=\"page-link\" href=\"#\">\n                                        <i class=\"fas fa-angle-double-right\"></i>\n                                    </a>\n                                  </li>\n                                </ul>\n                            </nav>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-4 col-lg-3\">\n            <h6 class=\"mt-3 mb-4\">Related Products</h6>\n            <div class=\"d-flex flex-column\">\n                <div class=\"row mb-3\">\n                    <div class=\"col-4 pr-0\">\n                        <a href=\"\" target=\"_blank\" routerLink=\"/product-detail\">\n                            <img class=\"w-100\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"(Image)\">\n                        </a>\n                    </div>\n                    <div class=\"col-8 d-flex flex-column\">\n                        <h6 class=\"mb-1 text-truncate\" title=\"Nikon 2018 New Edition Summer\"><a href=\"\" class=\"myText-link\" target=\"_blank\" routerLink=\"/product-detail\">Nikon 2018 New Edition Summer</a></h6>\n                        <span>$500</span>\n                        <small><a href=\"\" class=\"myText-link\" target=\"_blank\" routerLink=\"/product-detail\">See more</a></small>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- Modal: SEND REVIEW | Sender Info -->\n<div class=\"modal fade\" id=\"formSenderInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"formSenderInfoLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\">Thank you for your comment!</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <form>\n                    <div class=\"form-group\">\n                        <span class=\"text-justify text-muted\">Just a quick step, please let us know some information to notify you.\n                        </span>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSenderName\" class=\"sr-only\">Your name:</label>\n                        <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSenderName\" aria-describedby=\"\" placeholder=\"Your name (required)\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"formSenderEmail\" class=\"sr-only\">Email:</label>\n                        <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSenderEmail\" placeholder=\"Email address (required)\" aria-describedby=\"formSenderEmailHelp\">\n                        <small id=\"formSenderEmailHelp\" class=\"form-text text-muted mt-2\">(In order to get notification about our Responses)</small>\n                    </div>\n                    <div class=\"d-flex flex-column align-items-center mt-4\">\n                        <button type=\"submit\" class=\"btn myBtn-fill\">Finish</button>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>"

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
    function ProductDetailComponent() {
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-detail.component.css */ "./src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle py-3\">\n  <div class=\"container\">\n    <div class=\"row flex-column\">\n      <h3 class=\"sr-only\">PRODUCT LIST</h3>\n      <nav aria-label=\"breadcrumb myBreadcrum\">\n        <ol class=\"breadcrumb myBreadcrum\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"../index.html\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Product list</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n    <!-- Colllape filter -->\n    <div class=\"col-12 col-sm-4 col-md-3 mb-3 bg-light\">\n      <div class=\"row\">\n        <div class=\"col-12 bg-secondary\">\n          <a href=\"#\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\" data-toggle=\"collapse\"\n            data-target=\"#collapseFilter\" aria-controls=\"collapseFilter\" aria-expanded=\"false\">\n            <span class=\"text-white\">\n              <b>Filter by</b>\n            </span>\n            <i class=\"fas fa-angle-down fs-23 text-white\"></i>\n          </a>\n        </div>\n      </div>\n      <div class=\"row mx-0\">\n        <div class=\"col-12 px-0\">\n          <div class=\"collapse show\" id=\"collapseFilter\">\n            <!-- Sub collapse: categories -->\n            <div class=\"row mx-0\">\n              <div class=\"col-12 px-0\">\n                <a class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\" data-toggle=\"collapse\"\n                  \n                  data-toggle=\"collapse\" href=\"#collapseCategories\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseCategories\">\n                  <span class=\"myText-padding-left\">\n                    <b>Categories</b>\n                  </span>\n                  <i class=\"fas fa-angle-down\"></i>\n                </a>\n              </div>\n              <div class=\"col-12 px-0\">\n                <div class=\"collapse show myCollapse-filter myText-margin-left myBorder-bottom\" id=\"collapseCategories\">\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">All</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">Macbook</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">Laptop</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">Iphone</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">Ipad</a>\n                  <a class=\"myText-link-2 d-block mb-1\" href=\"\">Smartphone</a>\n                </div>\n              </div>\n            </div>\n            <!-- Sub collapse: brands -->\n            <div class=\"row mx-0\">\n              <div class=\"col-12 px-0\">\n                <a href=\"#collapseBrand\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\" data-toggle=\"collapse\"\n                  data-target=\"#collapseBrand\" aria-controls=\"collapseBrand\" aria-expanded=\"false\">\n                  <span class=\"myText-margin-left\">\n                    <b>Brands</b>\n                  </span>\n                  <i class=\"fas fa-angle-down\"></i>\n                </a>\n              </div>\n              <div class=\"col-12 px-0\">\n                <div class=\"collapse show myCollapse-filter myText-margin-left myBorder-bottom\" id=\"collapseBrand\">\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">Apple</a>\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">Asus</a>\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">Dell</a>\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">Samsung</a>\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">Sony</a>\n                </div>\n              </div>\n            </div>\n            <!-- Sub collapse: price ranges -->\n            <div class=\"row mx-0\">\n              <div class=\"col-12 px-0\">\n                <a href=\"#collapsePrice\" class=\"btn myOutline text-dark w-100 d-flex flex-row justify-content-between align-items-center px-0\" data-toggle=\"collapse\"\n                  data-target=\"#collapsePrice\" aria-controls=\"collapsePrice\" aria-expanded=\"false\">\n                  <span class=\"myText-margin-left\">\n                    <b>Prices</b>\n                  </span>\n                  <i class=\"fas fa-angle-down\"></i>\n                </a>\n              </div>\n              <div class=\"col-12 px-0\">\n                <div class=\"collapse show myCollapse-filter myText-margin-left myBorder-bottom\" id=\"collapsePrice\">\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">$0 - $100</a>\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">$100 - $1000</a>\n                    <a class=\"myText-link-2 d-block mb-1\" href=\"\">$1000 - $2000</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- Cards of Products  -->\n    <div class=\"col-12 col-sm-8 col-md-9 mb-3 bg-light d-flex flex-column justify-content-between\">\n      <div class=\"row myCardBoard mt-2 mb-2\">\n        <div class=\"col-12 mb-2\">\n          <h5>All Products</h5>\n          <p class=\"text-muted\">Displaying 4 items</p>\n        </div>\n        <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper myCursor-pointer\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-1.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../assets/img/item/item-camera-1.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small myCursor-pointer\">\n                <a href=\"\" class=\"myText-link\" routerLink=\"/product-detail\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper myCursor-pointer myCard-outofstock\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-1.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../assets/img/item/item-camera-1.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small myCursor-pointer\">\n                <a href=\"\" class=\"myText-link\" routerLink=\"/product-detail\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../assets/img/item/item-camera-2.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small\">\n                <a href=\"product-detail.html\" class=\"myText-link\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"myCard-product\">\n            <div class=\"myCard-upper myCard-outofstock\">\n              <div class=\"myCard-upper-img\">\n                <img class=\"card-img rounded-0\" src=\"../assets/img/item/item-camera-2.jpg\" alt=\"product\">\n              </div>\n              <div class=\"myCard-upper-overlay\">\n                <span class=\"myCard-promote btn-danger\">New</span>\n                <div class=\"d-flex justify-content-around\">\n                  <a href=\"../img/item/item-camera-1.jpg\" data-toggle=\"lightbox\" title=\"View larger image\" class=\"myCard-btn btn-danger\">\n                    <i class=\"far fa-image\"></i>\n                  </a>\n                  <a href=\"#\" class=\"myCard-btn btn-danger\" title=\"Add to Cart\" data-toggle=\"tooltip\">\n                    <i class=\"fas fa-cart-plus\"></i>\n                  </a>\n                  <span class=\"myCard-outofstock-text\">Out of stock</span>\n                </div>\n              </div>\n            </div>\n            <div class=\"\">\n              <h6 class=\"text-center text-small\">\n                <a href=\"product-detail.html\" class=\"myText-link\">Canon EOS</a>\n              </h6>\n              <h6 class=\"text-center\">\n                <s class=\"text-danger\">$500</s> $450</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row align-self-center mt-3\">\n        <div class=\"col-12\">\n          <nav aria-label=\"...\">\n            <ul class=\"pagination\">\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\" tabindex=\"-1\">\n                  <i class=\"fas fa-angle-double-left\"></i>\n                </a>\n              </li>\n              <li class=\"page-item active\">\n                <a class=\"page-link\" href=\"#\">1\n                  <span class=\"sr-only\">(current)</span>\n                </a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">2</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">3</a>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"#\">\n                  <i class=\"fas fa-angle-double-right\"></i>\n                </a>\n              </li>\n            </ul>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

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
    function ProductListComponent() {
    }
    ProductListComponent.prototype.ngOnInit = function () {
    };
    ProductListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Content -->\n<div class=\"container-fluid myTitle py-3 \">\n  <div class=\"container\">\n    <div class=\"row flex-column\">\n      <h3 class=\"\">SIGN UP</h3>\n      <nav aria-label=\"breadcrumb myBreadcrum\">\n        <ol class=\"breadcrumb myBreadcrum\">\n          <li class=\"breadcrumb-item\">\n            <a href=\"../index.html\">Home</a>\n          </li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Signup</li>\n        </ol>\n      </nav>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row mb-4\">\n    <div class=\"col-12 col-md-2 col-lg-3\"></div>\n    <div class=\"col-12 col-md-8 col-lg-6\">\n      <div class=\"mySignup p-4\">\n        <h4 class=\"text-center mt-3 mb-5\">CREATE YOUR ACCOUNT</h4>\n        <form>\n          <div class=\"form-group w-25\">\n            <label for=\"formSignupGender\" class=\"sr-only\">Gender</label>\n            <select class=\"form-control myInput-elegant-2\" id=\"formSignupGender\">\n              <option>Mr.</option>\n              <option>Ms.</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formSignupFirstname\" class=\"sr-only\">First Name:</label>\n            <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSignupFirstname\" aria-describedby=\"\" placeholder=\"First Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formSignupLastname\" class=\"sr-only\">Last Name:</label>\n            <input type=\"text\" class=\"form-control myInput-elegant-3\" id=\"formSignupLastname\" aria-describedby=\"\" placeholder=\"Last Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formSignupEmail\" class=\"sr-only\">Email:</label>\n            <input type=\"email\" class=\"form-control myInput-elegant-3\" id=\"formSignupEmail\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formSignupPassword\" class=\"sr-only\">Password:</label>\n            <input type=\"password\" class=\"form-control myInput-elegant-3\" id=\"formSignupPassword\" placeholder=\"Password\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"formSignupPasswordConfirm\" class=\"sr-only\">Confirm Password:</label>\n            <input type=\"password\" class=\"form-control myInput-elegant-3\" id=\"formSignupPasswordConfirm\" placeholder=\"Confirm Password\">\n          </div>\n          <div class=\"form-group form-check mt-4\">\n            <input type=\"checkbox\" class=\"form-check-input\" id=\"formSignupPolicy\">\n            <label class=\"form-check-label\" for=\"formSignupPolicy\">\n              I have read\n              <a href=\"#\" class=\"myText-link\" target=\"_blank\">Terms of Service</a> and\n              <a href=\"#\" class=\"myText-link\" target=\"_blank\">Privacy Policy</a>\n            </label>\n          </div>\n          <div class=\"d-flex flex-column align-items-center mt-4\">\n            <button type=\"submit\" class=\"btn myBtn-fill mb-3\">Sign up</button>\n            <span class=\"text-muted mb-2\">\n              <small>Already have an account?</small>\n              <a href=\"\" class=\"myText-link\" data-toggle=\"modal\" data-target=\"#formLogin\">Login</a>\n            </span>\n            <a href=\"forgot.html\" class=\"text-muted\" target=\"_blank\">Forgot your password?</a>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-12 col-md-2 col-lg-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
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

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignupComponent);
    return SignupComponent;
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

module.exports = __webpack_require__(/*! C:\Users\baodo\OneDrive\Desktop\my-project-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map