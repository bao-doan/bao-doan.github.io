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

/***/ "./src/app/app-directive/forbidden-name.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/app-directive/forbidden-name.directive.ts ***!
  \***********************************************************/
/*! exports provided: forbiddenNameValidator, ForbiddenValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenValidatorDirective", function() { return ForbiddenValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** A hero's name can't match the given regular expression */
function forbiddenNameValidator(nameRe) {
    return function (control) {
        var forbidden = nameRe.test(control.value);
        return forbidden ? { 'forbiddenName': { value: control.value } } : null;
    };
}
var ForbiddenValidatorDirective = /** @class */ (function () {
    function ForbiddenValidatorDirective() {
    }
    ForbiddenValidatorDirective_1 = ForbiddenValidatorDirective;
    ForbiddenValidatorDirective.prototype.validate = function (control) {
        return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
            : null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appForbiddenName'),
        __metadata("design:type", String)
    ], ForbiddenValidatorDirective.prototype, "forbiddenName", void 0);
    ForbiddenValidatorDirective = ForbiddenValidatorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appForbiddenName]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: ForbiddenValidatorDirective_1, multi: true }]
        })
    ], ForbiddenValidatorDirective);
    return ForbiddenValidatorDirective;
    var ForbiddenValidatorDirective_1;
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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    // { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'category', component: _category_category_component__WEBPACK_IMPORTED_MODULE_3__["CategoryComponent"] },
    { path: 'product', component: _product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'product-add', component: _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_5__["ProductAddComponent"] }
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

module.exports = "<body class=\"app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show\">\n  <header class=\"app-header navbar\">\n            <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto\" type=\"button\" data-toggle=\"sidebar-show\" title=\"Show/Hide Menu\">\n                <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"\" routerLink=\"/dashboard\">\n                <span class=\"navbar-brand-full\" alt=\"Brand Logo Full\">Admin Panel</span>\n                <span class=\"navbar-brand-minimized\" width=\"30\" height=\"30\" alt=\"Brand Logo Mini\">B</span>\n            </a>\n        <button class=\"navbar-toggler sidebar-toggler d-md-down-none sidebar-minimizer brand-minimizer\" type=\"button\" title=\"Switch side-menu\"><i class=\"fab fa-elementor text-primary\"></i></button>\n    <ul class=\"nav navbar-nav d-md-down-none ml-auto\">\n      <li class=\"nav-item px-3\">\n        <a class=\"nav-link\" href=\"\" routerLink=\"/dashboard\">Dashboard</a>\n      </li>\n      <li class=\"nav-item px-3\">\n        <a class=\"nav-link\" href=\"https://bao-doan.github.io\">Homepage</a>\n      </li>\n      <li class=\"nav-item px-3\">\n            <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalAdminLogout\">Logout</a>\n      </li>\n    </ul>\n    \n    \n    <button class=\"navbar-toggler aside-menu-toggler d-lg-none\" type=\"button\" data-toggle=\"aside-menu-show\">\n      <i class=\"far fa-compass text-dark\" title=\"Go Dashboard or go Homepage\"></i>\n    </button>\n  </header>\n  <div class=\"app-body\">\n      <div class=\"sidebar\">\n          <nav class=\"sidebar-nav\">\n              <ul class=\"nav\">\n\n                  <li class=\"nav-title text-warning\">ADMIN</li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">\n                          <i class=\"fas fa-user nav-icon\"></i> Profile\n                      </a>\n                  </li>\n                  <li class=\"nav-title text-warning\">ACCOUNTS</li>\n                  <li class=\"nav-item\">\n                          <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">\n                              <i class=\"far fa-address-book nav-icon\"></i> Manage Users\n                          </a>\n                      </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">\n                          <i class=\"far fa-address-book nav-icon\"></i> Manage Staffs\n                      </a>\n                  </li>\n                  <li class=\"nav-title text-warning\">SHOP</li>\n                  <li class=\"nav-item\" >\n                          <a class=\"nav-link\" href=\"\" routerLink=\"/category\" routerLinkActive=\"active\">\n                              <i class=\"fas fa-book nav-icon\"></i> All Categories\n                          </a>\n                      </li>\n                  <li class=\"nav-item\" >\n                      <a class=\"nav-link\" href=\"#\" routerLink=\"/product\" routerLinkActive=\"active\">\n                          <i class=\"fas fa-book nav-icon\"></i> All Products\n                      </a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">\n                          <i class=\"fas fa-book nav-icon\"></i> Purchase Orders\n                      </a>\n                  </li>\n                  \n                  <li class=\"nav-title text-warning\">ARTICLES</li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">\n                          <i class=\"far fa-newspaper nav-icon\"></i> Articles\n                      </a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#\" routerLinkActive=\"active\">\n                          <i class=\"far fa-newspaper nav-icon\"></i> Add Article\n                      </a>\n                  </li>\n                  \n                  <li class=\"nav-title text-warning\">EXTENSION</li>\n                  \n                  <li class=\"nav-item nav-dropdown\">\n                      <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\n                          <i class=\"fas fa-list-ul nav-icon\"></i> Building</a>\n                      <ul class=\"nav-dropdown-items\">\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"#\" routerLink=\"\" routerLinkActive=\"active\">\n                                  <i class=\"nav-icon\"></i> One</a>\n                          </li>\n                          <li class=\"nav-item\">\n                              <a class=\"nav-link\" href=\"#\" routerLink=\"\" routerLinkActive=\"active\">\n                                  <i class=\"nav-icon\"></i> Two</a>\n                          </li>\n                      </ul>\n                  </li>\n\n              </ul>\n          </nav>\n          <!-- <button class=\"sidebar-minimizer brand-minimizer \" type=\"button\"></button> -->\n      </div>\n      <main class=\"main\">\n          <!-- Breadcrumb-->\n         <app-breadcrumb></app-breadcrumb>\n         \n          <!-- Main content -->\n          <router-outlet></router-outlet>\n      </main>\n    <aside class=\"aside-menu\">\n        <ul class=\"nav navbar-nav\">\n            <li class=\"nav-item px-3\">\n              <a class=\"nav-link\" href=\"\" routerLink=\"/dashboard\"><i class=\"fas fa-tachometer-alt\"></i> Dashboard</a>\n            </li>\n            <li class=\"nav-item px-3\">\n              <a class=\"nav-link\" href=\"https://bao-doan.github.io\"><i class=\"fas fa-shopping-cart\"></i> Shop Page</a>\n            </li>\n            <li class=\"nav-item px-3\">\n              <a class=\"nav-link\" href=\"#\" data-toggle=\"modal\" data-target=\"#modalAdminLogout\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a>\n            </li>\n          </ul>\n    </aside>\n  </div>\n  <footer class=\"app-footer mt-4\">\n      <div>\n          <a href=\"../../index.html\">Brand Co., Ltd</a>\n          <span>&copy; 2018.</span>\n      </div>\n      <div class=\"ml-auto\">\n          <span>Powered by</span>\n          <a href=\"https://coreui.io\">CoreUI</a>\n      </div>\n  </footer>\n</body>\n<!-- MODAL: Admin Logout -->\n  <div class=\"modal fade\" id=\"modalAdminLogout\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalAdminLogoutLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Admin Logout</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <p>Are yout sure want to logout?</p>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-primary\">Yes</button>\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n        </div>\n      </div>\n    </div>\n  </div>"

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
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-add/product-add.component */ "./src/app/product-add/product-add.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! froala-editor/js/froala_editor.pkgd.min.js */ "./node_modules/froala-editor/js/froala_editor.pkgd.min.js");
/* harmony import */ var froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(froala_editor_js_froala_editor_pkgd_min_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-froala-wysiwyg */ "./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var _app_directive_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app-directive/forbidden-name.directive */ "./src/app/app-directive/forbidden-name.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











// Import Froala Editor.

// Import Angular2 plugin.


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _product_add_product_add_component__WEBPACK_IMPORTED_MODULE_9__["ProductAddComponent"],
                _app_directive_forbidden_name_directive__WEBPACK_IMPORTED_MODULE_13__["ForbiddenValidatorDirective"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaEditorModule"].forRoot(),
                angular_froala_wysiwyg__WEBPACK_IMPORTED_MODULE_12__["FroalaViewModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = "<ol class=\"breadcrumb\">\n  <li class=\"breadcrumb-item\">\n      <a href=\"#\">Admin</a>\n  </li>\n  <li class=\"breadcrumb-item active\">Dashboard</li>\n</ol>"

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

/***/ "./src/app/category/category.component.css":
/*!*************************************************!*\
  !*** ./src/app/category/category.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-6 col-lg-5 mb-3\">\n      <h5 class=\"mb-3\">Create New Category</h5>\n        <div class=\"form-group\">\n          <label for=\"formAddCategory\">Name</label>\n          <input [(ngModel)]=\"objectGenre.name\" (keyup.enter)=\"addGenre()\" type=\"text\" id=\"formAddCategory\" name=\"formAddCategory\"\n            class=\"form-control myInput-elegant-2 d-inline\" #genrename=\"ngModel\" required minlength=\"4\" autofocus>\n          <div *ngIf=\"genrename.invalid && (genrename.dirty || genrename.touched)\" class=\"\">\n            <div *ngIf=\"genrename.errors.minlength\" class=\"alert alert-warning\">\n              Input name must be at least 4 characters long.\n            </div>\n          </div>\n        </div>\n      <button (click)=\"addGenre()\" [disabled]=\"!(objectGenre.name?.length == 4)\" class=\"btn btn-success d-block ml-auto\">\n        <i class=\"fas fa-plus\"></i> Create</button>\n    </div>\n    <div class=\"col-12\">\n      <table class=\"table table-striped table-hover table-outline mb-2\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th class=\"d-flex flex-row justify-content-between\">\n              <span>Category</span>\n              <button (click)=\"getGenres()\" class=\"btn btn-link p-0\" type=\"button\">\n                <i class=\"fas fa-sync-alt\"></i> Refresh</button>\n            </th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"genres\" class=\"\">\n          <tr *ngFor=\"let genre of genres\">\n            <td class=\"d-flex flex-row justify-content-between\">\n              <span>{{genre.name}}</span>\n              <span>\n                <a (click)=\"onSelect(genre)\" class=\"mr-3\" data-toggle=\"modal\" data-target=\"#modalEdit\" href=\"\">Edit</a>\n                <a (click)=\"onSelectDelete(genre)\" class=\"text-danger\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\" href=\"\">Delete</a>\n              </span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <p>Displaying {{genres?.length || '0 item'}}\n        <span *ngIf=\"genres?.length == 1\">item</span>\n        <span *ngIf=\"genres?.length == 0\">item</span>\n        <span *ngIf=\"genres?.length\">items</span>\n      </p>\n      <!-- <p *ngIf=\"!genres?.length\">\n        No item to display!\n      </p> -->\n    </div>\n  </div>\n</div>\n<!-- Modal: DELETE -->\n<div *ngIf=\"selectedDelete\" id=\"modalDelete\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm delete</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure want to delete?</p>\n        <b class=\"text-danger\">{{selectedDelete.name}} </b>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"deleteGenre(selectedDelete)\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Delete</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Keep</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal: EDIT -->\n<div id=\"modalEdit\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Editing</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div *ngIf=\"selectedGenre\" class=\"modal-body\">\n        <!-- doing -->\n        <div class=\"form-group\">\n          <label for=\"formAddCategory\">Category:</label>\n          <input [(ngModel)]=\"selectedGenre.name\" type=\"text\" id=\"formAddCategory\" name=\"formAddCategory\" class=\"form-control myInput-elegant-2\"\n            #genrenameEdit=\"ngModel\" required minlength=\"4\">\n          <div *ngIf=\"genrenameEdit.invalid && (genrenameEdit.dirty || genrenameEdit.touched)\" class=\"\">\n            <div *ngIf=\"genrenameEdit.errors.required\" class=\"alert alert-danger\">\n              Name is required.\n            </div>\n            <div *ngIf=\"genrenameEdit.errors.minlength\" class=\"alert alert-warning\">\n              Input name must be at least 4 characters long.\n            </div>\n          </div>\n        </div>\n        <p>Name: {{selectedGenre.name}}</p>\n        <p>Id: {{selectedGenre._id}}</p>\n        <p>Created date: {{selectedGenre.create_date}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button data-target=\"#modalConfirmUpdate\" data-toggle=\"modal\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Update</button>\n        <!-- <button (click)=\"updateGenre()\" class=\"btn btn-ghost-primary\">\n            <i class=\"fas fa-check\"></i> Update</button> -->\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Discard</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- MODAL: Confirm Update -->\n<div id=\"modalConfirmUpdate\" class=\"modal\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm Update</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure want to update?</p>\n        <p *ngIf=\"selectedGenre\">To: {{selectedGenre.name}}</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"updateGenre()\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Yes</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">No</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _view_models_genre__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/genre */ "./src/app/view-models/genre.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryComponent = /** @class */ (function () {
    // objectGenre: Genre;
    // updatingGenre= new Genre(this.selectedGenre.name);
    function CategoryComponent(genreService, location, route) {
        this.genreService = genreService;
        this.location = location;
        this.route = route;
        this.updatingGenre = this.selectedDelete;
        this.objectGenre = new _view_models_genre__WEBPACK_IMPORTED_MODULE_4__["Genre"]();
        this.on_s = "items";
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.getGenres();
        // this.countGenres();
    };
    CategoryComponent.prototype.onSelect = function (genre) {
        this.selectedGenre = genre;
    };
    CategoryComponent.prototype.onSelectDelete = function (genre) {
        this.selectedDelete = genre;
    };
    CategoryComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (z) { return _this.genres = z; });
    };
    ;
    // countGenres(): void {
    //   if (this.genres.length == 1 ) {
    //   }
    // }
    CategoryComponent.prototype.addGenre = function () {
        var _this = this;
        if (this.objectGenre.name.length > 0) {
            this.genreService.addGenre(this.objectGenre).subscribe(function (_) {
                _this.objectGenre.name = "";
                _this.genres.push(_);
            });
        }
    };
    CategoryComponent.prototype.deleteGenre = function (genre) {
        this.genres = this.genres.filter(function (h) { return h !== genre; });
        this.genreService.deleteGenre(genre).subscribe();
    };
    CategoryComponent.prototype.updateGenre = function () {
        this.genreService.updateGenre(this.selectedGenre)
            .subscribe();
    };
    CategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/category/category.component.css")]
        }),
        __metadata("design:paramtypes", [_services_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/product-add/product-add.component.css":
/*!*******************************************************!*\
  !*** ./src/app/product-add/product-add.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product-add/product-add.component.html":
/*!********************************************************!*\
  !*** ./src/app/product-add/product-add.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form #heroForm=\"ngForm\">\n        <div class=\"row\">\n            <div class=\"col-12\">\n                <h3 class=\"text-primary mb-3\">Create New Product</h3>\n                <a routerLink=\"/product\" href=\"\" class=\"text-dark\">\n                    <i class=\"far fa-address-book\"></i> All products</a>\n            </div>\n            <div class=\"col-12\">\n                <button (click)=\"addBook()\" class=\"btn btn-success d-block ml-auto\" [disabled]=\"heroForm.invalid\">\n                    <i class=\"fas fa-plus\"></i> Create</button>\n            </div>\n            <div class=\"col-12 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookTitle\">Title</label>\n                    <input type=\"text\" id=\"formAddBookTitle\" name=\"formAddBookTitle\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.title\" #title=\"ngModel\" required minlength=\"4\" autofocus>\n                    <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"\">\n                        <div *ngIf=\"title.errors.required\" class=\"alert alert-danger\">\n                            Title is required.\n                        </div>\n                        <div *ngIf=\"title.errors.minlength\" class=\"alert alert-warning\">\n                            Title must be at least 4 characters long.\n                        </div>\n                    </div>\n                </div>\n    \n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookAuthor\">Author (required)</label>\n                    <input type=\"text\" id=\"formAddBookAuthor\" name=\"formAddBookAuthor\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.author\" #author=\"ngModel\" required minlength=\"4\">\n                    <div *ngIf=\"author.invalid && (author.dirty || author.touched)\" class=\"\">\n                            <div *ngIf=\"author.errors.required\" class=\"alert alert-danger\">\n                                Author is required.\n                            </div>\n                            <div *ngIf=\"author.errors.minlength\" class=\"alert alert-warning\">\n                                Author must be at least 4 characters long.\n                            </div>\n                        </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookPublisher\">Publisher (required)</label>\n                    <input type=\"text\" id=\"formAddBookPublisher\" name=\"formAddBookPublisher\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.publisher\" #publisher=\"ngModel\" required minlength=\"4\">\n                    <div *ngIf=\"publisher.invalid && (publisher.dirty || publisher.touched)\" class=\"\">\n                            <div *ngIf=\"publisher.errors.required\" class=\"alert alert-danger\">\n                                Publisher is required.\n                            </div>\n                            <div *ngIf=\"publisher.errors.minlength\" class=\"alert alert-warning\">\n                                Publisher must be at least 4 characters long.\n                            </div>\n                        </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                    <div class=\"form-group\">\n                        <!-- <p *ngIf=\"genres\">{{genres[0].name}}</p> -->\n                        <label for=\"formAddBookSelectGenre\">Genre</label>\n                        <!-- <select *ngIf=\"genres\" [(ngModel)]=\"objectBook.genre\" #genre=\"ngModel\" class=\"form-control\" id=\"formAddBookSelectGenre\" required>\n                            <option *ngFor=\"let x of genres\" [selected]=\"x.name == genres[0].name\" [ngValue]=\"x\">{{x.name}}</option>\n                        </select> -->\n                        <!-- <div *ngIf=\"genre.errors && genre.touched\" class=\"alert alert-danger\">\n                                <div *ngIf=\"genre.errors.required\">Genre must be selected</div>\n                              </div> -->\n                    </div>\n                </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookPages\">Pages</label>\n                    <input type=\"number\" min=\"0\" id=\"formAddBookPages\" name=\"formAddBookPages\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.pages\" #pages=\"ngModel\" required>\n                    <div *ngIf=\"pages.invalid && (pages.dirty || pages.touched)\" class=\"\">\n                        <div *ngIf=\"pages.errors.required\" class=\"alert alert-danger\">\n                            Number is required.\n                        </div>\n                </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookWeight\">Weight</label>\n                    <input type=\"number\" min=\"0\" id=\"formAddBookWeight\" name=\"formAddBookWeight\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.weight\" #weight=\"ngModel\" required>\n                    <div *ngIf=\"weight.invalid && (weight.dirty || weight.touched)\" class=\"\">\n                        <div *ngIf=\"weight.errors.required\" class=\"alert alert-danger\">\n                            Number is required.\n                        </div>\n                </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookReleaseDate\">Release Date</label>\n                    <input type=\"text\" id=\"formAddBookReleaseDate\" name=\"formAddBookReleaseDate\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookSKU\">SKU</label>\n                    <input type=\"text\" id=\"formAddBookSKU\" name=\"formAddBookSKU\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookPreviousPrice\">Previous Price</label>\n                    <input type=\"number\" min=\"0\" id=\"formAddBookPreviousPrice\" name=\"formAddBookPreviousPrice\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.previousPrice\" #previousPrice=\"ngModel\" required>\n                    <div *ngIf=\"previousPrice.invalid && (previousPrice.dirty || previousPrice.touched)\" class=\"\">\n                            <div *ngIf=\"previousPrice.errors.required\" class=\"alert alert-danger\">\n                                Number is required.\n                            </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookSellingPrice\">Selling Price</label>\n                    <input type=\"number\" min=\"0\" id=\"formAddBookSellingPrice\" name=\"formAddBookSellingPrice\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.sellingPrice\" #sellingPrice=\"ngModel\" required>\n                    <div *ngIf=\"sellingPrice.invalid && (sellingPrice.dirty || sellingPrice.touched)\" class=\"\">\n                            <div *ngIf=\"sellingPrice.errors.required\" class=\"alert alert-danger\">\n                                Number is required.\n                            </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-12 col-md-8 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookImages\">Main Image</label>\n                    <input type=\"text\" id=\"formAddBookImages\" name=\"formAddBookImages\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.images.main\" #imagesmain=\"ngModel\" required minlength=\"4\">\n                    <div *ngIf=\"imagesmain.invalid && (imagesmain.dirty || imagesmain.touched)\" class=\"\">\n                        <div *ngIf=\"imagesmain.errors.required\" class=\"alert alert-danger\">\n                            Required a link.\n                        </div>\n                    </div>\n                    <a href=\"\" class=\"text-dark mt-2\" data-toggle=\"collapse\" href=\"#collapseReviewImage\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseReviewImage\">\n                        <i class=\"far fa-image\"></i> View Image</a>\n                </div>\n            </div>\n            <!--  -->\n            <!-- <div class=\"form-group\">\n                <label for=\"formAddBookTitle\">Title</label>\n                <input type=\"text\" id=\"formAddBookTitle\" name=\"formAddBookTitle\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.title\" #title=\"ngModel\" required minlength=\"4\" autofocus>\n                <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"\">\n                    <div *ngIf=\"title.errors.required\" class=\"alert alert-danger\">\n                        Title is required.\n                    </div>\n                    <div *ngIf=\"title.errors.minlength\" class=\"alert alert-warning\">\n                        Title must be at least 4 characters long.\n                    </div>\n                </div>\n            </div> -->\n            <!--  -->\n            <div class=\"col-8 col-md-4 mb-3\">\n                <div class=\"collapse\" id=\"collapseReviewImage\">\n                    <img src=\"{{objectBook.images.main}}\" alt=\"Warning: No image link found. You must add a link for image\" class=\"w-100\">\n                </div>\n    \n            </div>\n            <div class=\"col-12\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-sm-4 col-lg-4 mb-3\">\n                        <div class=\"form-group\">\n                            <label for=\"formAddBookSizeWidth\">Size (width)</label>\n                            <input type=\"number\" min=\"0\" id=\"formAddBookSizeWidth\" name=\"formAddBookSizeWidth\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.size.width\" #sizewidth=\"ngModel\" required>\n                            <div *ngIf=\"sizewidth.invalid && (sizewidth.dirty || sizewidth.touched)\" class=\"\">\n                                <div *ngIf=\"sizewidth.errors.required\" class=\"alert alert-danger\">\n                                    Number is required.\n                                </div>\n                        </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-sm-4 col-lg-4 mb-3\">\n                        <div class=\"form-group\">\n                            <label for=\"formAddBookSizeHeight\">Size (height)</label>\n                            <input type=\"number\" min=\"0\" id=\"formAddBookSizeHeight\" name=\"formAddBookSizeHeight\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.size.height\" #sizeheight=\"ngModel\" required>\n                            <div *ngIf=\"sizeheight.invalid && (sizeheight.dirty || sizeheight.touched)\" class=\"\">\n                                <div *ngIf=\"sizeheight.errors.required\" class=\"alert alert-danger\">\n                                    Number is required.\n                                </div>\n                        </div>\n                        </div>\n                    </div>\n                    <div class=\"col-12 col-sm-4 col-lg-4 mb-3\">\n                        <div class=\"form-group\">\n                            <label for=\"formAddBookSizeDepth\">Size (depth)</label>\n                            <input type=\"number\" min=\"0\" id=\"formAddBookSizeDepth\" name=\"formAddBookSizeDepth\" class=\"form-control myInput-elegant-2\" [(ngModel)]=\"objectBook.size.depth\" #sizedepth=\"ngModel\" required>\n                            <div *ngIf=\"sizedepth.invalid && (sizedepth.dirty || sizedepth.touched)\" class=\"\">\n                                <div *ngIf=\"sizedepth.errors.required\" class=\"alert alert-danger\">\n                                    Number is required.\n                                </div>\n                        </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n    \n            <div class=\"col-12 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookShortDescription\">Short Description</label>\n                    <textarea class=\"form-control myInput-elegant-2\" id=\"formAddBookShortDescription\" rows=\"3\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-12 mb-3\">\n                <div class=\"form-group\">\n                    <label for=\"formAddBookFullDescription\">Full Description</label>\n                    <!-- <textarea  class=\"form-control myInput-elegant-2\" id=\"formAddBookFullDescription\" rows=\"3\"></textarea> -->\n                    <textarea [(ngModel)]=\"objectBook.fullDescription\" [froalaEditor]=\"HelloFroala\" class=\"form-control\" id=\"formAddBookFullDescription\" rows=\"10\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                </div>\n    \n            </div>\n    \n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/product-add/product-add.component.ts":
/*!******************************************************!*\
  !*** ./src/app/product-add/product-add.component.ts ***!
  \******************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _view_models_book__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view-models/book */ "./src/app/view-models/book.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { forbiddenNameValidator } from '../app-directive/forbidden-name.directive';



var ProductAddComponent = /** @class */ (function () {
    // test: string = this.genres[0].name;
    // _id: string;
    // title: string;
    // shortDescription: string;
    // fullDescription: string;
    // author: string;
    // publisher: string;
    // pages: number;
    // weight: number;
    // sku: string;
    // previousPrice: number;
    // sellingPrice: number;
    // releaseDate: string;
    // images: Image;
    // size: Size;
    // genre: Genre;
    function ProductAddComponent(bookService, genreService) {
        this.bookService = bookService;
        this.genreService = genreService;
        // genre:Genre = new Genre();
        this.objectBook = new _view_models_book__WEBPACK_IMPORTED_MODULE_3__["Book"]();
    }
    ProductAddComponent.prototype.ngOnInit = function () {
        this.getGenre();
        // this.objectBook.genre.name = this.genres[0].name;
        if (this.objectBook.genre !== undefined) {
            // this.objectBook.genre = this.genres[0];
            alert("baodoan: " + this.objectBook.genre.name);
        }
    };
    ProductAddComponent.prototype.getGenre = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (__) { return _this.genres = __; });
    };
    ProductAddComponent.prototype.addBook = function () {
        this.bookService.addBook(this.objectBook).subscribe(function (_) {
            console.log(_);
        });
    };
    ProductAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-add',
            template: __webpack_require__(/*! ./product-add.component.html */ "./src/app/product-add/product-add.component.html"),
            styles: [__webpack_require__(/*! ./product-add.component.css */ "./src/app/product-add/product-add.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _services_genre_service__WEBPACK_IMPORTED_MODULE_2__["GenreService"]])
    ], ProductAddComponent);
    return ProductAddComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.css":
/*!***********************************************!*\
  !*** ./src/app/product/product.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <!-- <div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-12 col-md-4 mb-3\">\n      <h5 class=\"mb-3\">Create New Product (Book)</h5>\n      <div class=\"form-group\">\n        <label for=\"formAddBookTitle\">Title</label>\n        <input type=\"text\" id=\"formAddBookTitle\" name=\"formAddBookTitle\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookAuthor\">Author</label>\n        <input type=\"text\" id=\"formAddBookAuthor\" name=\"formAddBookAuthor\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookPublisher\">Publisher</label>\n        <input type=\"text\" id=\"formAddBookPublisher\" name=\"formAddBookPublisher\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookPages\">Pages</label>\n        <input type=\"number\" id=\"formAddBookPages\" name=\"formAddBookPages\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookWeight\">Weight</label>\n        <input type=\"number\" id=\"formAddBookWeight\" name=\"formAddBookWeight\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookSKU\">SKU</label>\n        <input type=\"text\" id=\"formAddBookSKU\" name=\"formAddBookSKU\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookPreviousPrice\">Previous Price</label>\n        <input type=\"number\" id=\"formAddBookPreviousPrice\" name=\"formAddBookPreviousPrice\" class=\"form-control myInput-elegant-2\"\n          placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookSellingPrice\">Selling Price</label>\n        <input type=\"number\" id=\"formAddBookSellingPrice\" name=\"formAddBookSellingPrice\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookReleaseDate\">Release Date</label>\n        <input type=\"date\" id=\"formAddBookReleaseDate\" name=\"formAddBookReleaseDate\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookShortDescription\">Short Description</label>\n        <textarea class=\"form-control myInput-elegant-2\" id=\"formAddBookShortDescription\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookFullDescription\">Full Description</label>\n        <textarea class=\"form-control myInput-elegant-2\" id=\"formAddBookFullDescription\" rows=\"3\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookImages\">Images</label>\n        <input type=\"text\" id=\"formAddBookImages\" name=\"formAddBook\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group w-50\">\n        <label for=\"formAddBookSizeWidth\">Size (width)</label>\n        <input type=\"number\" id=\"formAddBookSizeWidth\" name=\"formAddBookSizeWidth\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group w-50\">\n        <label for=\"formAddBookSizeDepth\">Size (depth)</label>\n        <input type=\"number\" id=\"formAddBookSizeDepth\" name=\"formAddBookSizeDepth\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formAddBookSelectGenre\">Genre</label>\n        <select class=\"form-control\" id=\"formAddBookSelectGenre\">\n          <option>Genre binding</option>\n          <option>Genre binding</option>\n          <option>Genre binding</option>\n          <option>Genre binding</option>\n          <option>Genre binding</option>\n        </select>\n      </div>\n      <button class=\"btn btn-success d-block ml-auto\">\n        <i class=\"fas fa-plus\"></i> Create</button>\n    </div>\n    <div class=\"col-12 col-md-4 mb-3\">\n      <div class=\"d-flex flex-row justify-content-between align-items-center mb-3\">\n        <span class=\"h5 mb-0\">Product List</span>\n        <button (click)=\"getBooks()\" class=\"btn btn-ghost-primary\">\n          <i class=\"fas fa-sync-alt\"></i> Refresh</button>\n      </div>\n\n      <ul class=\"list-group list-unstyled border-0\">\n        <li *ngFor=\"let book of books\" class=\"d-flex flex-row justify-content-between align-items-center\">\n          <span (click)=\"onSelect(book)\" class=\"\">{{book.title}}</span>\n          <button class=\"btn btn-sm\" title=\"Remove\">\n            <i class=\"fas fa-times\"></i>\n          </button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-12 col-md-4 mb-3\">\n      <div class=\"d-flex flex-row justify-content-between align-items-center mb-3\">\n        <span class=\"h5 mb-0\">Details</span>\n        <button class=\"btn btn-ghost-primary\">\n          <i class=\"fas fa-check\"></i> Update</button>\n      </div>\n      <div *ngIf=\"selectedBook\">\n        <div class=\"form-group\">\n          <label for=\"formEditBookTitle\">Title</label>\n          <input [(ngModel)]=\"selectedBook.title\" type=\"text\" id=\"formEditBookTitle\" name=\"formEditBookTitle\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookAuthor\">Author</label>\n          <input [(ngModel)]=\"selectedBook.author\" type=\"text\" id=\"formEditBookAuthor\" name=\"formEditBookAuthor\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookPublisher\">Publisher</label>\n          <input [(ngModel)]=\"selectedBook.publisher\" type=\"text\" id=\"formEditBookPublisher\" name=\"formEditBookPublisher\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookPages\">Pages</label>\n          <input [(ngModel)]=\"selectedBook.pages\" type=\"number\" id=\"formEditBookPages\" name=\"formEditBookPages\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookWeight\">Weight</label>\n          <input [(ngModel)]=\"selectedBook.weight\" type=\"number\" id=\"formEditBookWeight\" name=\"formEditBookWeight\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookSKU\">SKU</label>\n          <input [(ngModel)]=\"selectedBook.sku\" type=\"text\" id=\"formEditBookSKU\" name=\"formEditBookSKU\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookPreviousPrice\">Previous Price</label>\n          <input [(ngModel)]=\"selectedBook.previousPrice\" type=\"number\" id=\"formEditBookPreviousPrice\" name=\"formEditBookPreviousPrice\" class=\"form-control myInput-elegant-2\"\n            placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookSellingPrice\">Selling Price</label>\n          <input [(ngModel)]=\"selectedBook.sellingPrice\" type=\"number\" id=\"formEditBookSellingPrice\" name=\"formEditBookSellingPrice\" class=\"form-control myInput-elegant-2\"\n            placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookReleaseDate\">Release Date</label>\n          <input [(ngModel)]=\"selectedBook.releaseDate\" type=\"string\" id=\"formEditBookReleaseDate\" name=\"formEditBookReleaseDate\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookShortDescription\">Short Description</label>\n          <textarea [(ngModel)]=\"selectedBook.shortDescription\" class=\"form-control myInput-elegant-2\" id=\"formEditBookShortDescription\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookFullDescription\">Full Description</label>\n          <textarea [(ngModel)]=\"selectedBook.fullDescription\" class=\"form-control myInput-elegant-2\" id=\"formEditBookFullDescription\" rows=\"3\"></textarea>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formEditBookImages\">Images</label>\n          <input [(ngModel)]=\"selectedBook.images.main\" type=\"text\" id=\"formEditBookImages\" name=\"formAddBook\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group w-50\">\n          <label for=\"formEditBookSizeWidth\">Size (width)</label>\n          <input [(ngModel)]=\"selectedBook.size.width\" type=\"number\" id=\"formEditBookSizeWidth\" name=\"formEditBookSizeWidth\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group w-50\">\n          <label for=\"formEditBookSizeDepth\">Size (depth)</label>\n          <input [(ngModel)]=\"selectedBook.size.depth\" type=\"number\" id=\"formEditBookSizeDepth\" name=\"formEditBookSizeDepth\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"formAddBookReSelectGenre\">Genre</label>\n          <select class=\"form-control\" id=\"formAddBookReSelectGenre\">\n            <option *ngFor=\"let book of books\">{{book.genre.name}}</option>\n          </select>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div> -->\n    <div class=\"col-sm-6 col-md-4 mb-3\">\n      <div class=\"input-group\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search products\" aria-label=\"Search products\" aria-describedby=\"basic-addon2\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-outline-secondary\" type=\"button\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-12 mb-3\">\n      <a routerLink=\"/product-add\" href=\"\" class=\"text-success\">\n        <i class=\"fas fa-plus-circle mr-2\"></i>\n        <span class=\"text-underline\">Add new product</span>\n      </a>\n    </div>\n    <div class=\"col-12 mb-3 table-responsive\">\n      <table class=\"table table-striped table-hover table-outline mb-2\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th>Product</th>\n            <th>Author</th>\n            <th>Publisher</th>\n            <th>\n                <button (click)=\"getBooks()\" class=\"btn btn-link p-0 d-block ml-auto\" type=\"button\"><i class=\"fas fa-sync-alt\"></i> Refresh</button>\n            </th>\n          </tr>\n        </thead>\n        <tbody *ngIf=\"books\" class=\"\">\n          <tr *ngFor=\"let book of books\" title=\"Click to view details\" class=\"myCursor\">\n\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{book.title}}</td>\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{book.author}}</td>\n            <td (click)=\"onSelect(book)\" data-target=\"#modalProductDetail\" data-toggle=\"modal\">{{book.publisher}}</td>\n            <td>\n              <span class=\"d-block text-right\">\n                <a (click)=\"onSelectEdit(book)\" class=\"mr-3\" data-toggle=\"modal\" title=\"Edit this item\"  data-target=\"#modalEdit\" href=\"\">Edit</a>\n                <a (click)=\"onSelectDelete(book)\" class=\"text-danger\" title=\"Remove\" data-toggle=\"modal\" data-target=\"#modalDelete\" href=\"\">Delete</a>\n              </span>\n            </td>\n          </tr>\n         \n        </tbody>\n      </table>\n      <p>Displaying {{books?.length || '0 item'}}\n          <span *ngIf=\"books?.length == 1\">item</span> \n          <span *ngIf=\"books?.length == 0\">item</span> \n          <span *ngIf=\"books?.length\">items</span> \n        </p>\n    </div>\n    <!-- Pagination -->\n    <div class=\"col-12 d-flex justify-content-center mb-3\">\n      <nav class=\"mb-3\" aria-label=\"Page navigation example\">\n        <ul class=\"pagination\">\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">Previous</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">1</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">2</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">3</a>\n          </li>\n          <li class=\"page-item\">\n            <a class=\"page-link\" href=\"#\">Next</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n</div>\n<!-- MODAL: Details -->\n<div id=\"modalProductDetail\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Product Details</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <!-- <div class=\"row\" *ngIf=\"selectedBook\">\n            <div class=\"col-4\">\n              <img [src]=\"selectedBook.images.main\" class=\"w-100\" alt=\"\">\n            </div>\n            <div class=\"col-8 d-flex flex-column\">\n              <h6>{{selectedBook.title}}</h6>\n              <span>\n                <span>Price:</span>\n                <s class=\"mr-2\">{{selectedBook.previousPrice}}</s>\n                <span class=\"text-danger\">{{selectedBook.sellingPrice}}</span>\n              </span>\n              <span>Publisher: {{selectedBook.publisher}}</span>\n              <span>Pages: {{selectedBook.pages}}</span>\n              <span>Weight: {{selectedBook.weight}}</span>\n              <span>SKU: {{selectedBook.sku}}</span>\n              <span>Release Date: {{selectedBook.releaseDate}}</span>\n              <span>Dimension: {{selectedBook.size.width}} x {{selectedBook.size.height}} x {{selectedBook.size.depth}}</span>\n              <span>Genre: {{selectedBook.genre.name}}</span>\n              <span class=\"font-italic\">{{selectedBook.shortDescription}}</span>\n            </div>\n            <div class=\"col-12 mt-2\">\n              <div [innerHTML]=\"selectedBook.fullDescription\"></div>\n            </div>\n          </div> -->\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal: DELETE -->\n<div *ngIf=\"selectedDelete\" id=\"modalDelete\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Confirm delete</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Are you sure want to delete?</p>\n        <b class=\"text-danger\">{{selectedDelete.title}} </b>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"deleteBook(selectedDelete)\" data-dismiss=\"modal\" type=\"button\" class=\"btn btn-primary\">Delete</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Keep</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Modal: EDIT BOOK -->\n<div class=\"modal fade\" id=\"modalEdit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"modalEditLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Product</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container-fluid\">\n          <div *ngIf=\"selectedEdit\" class=\"row\">\n            <div class=\"col-12 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookTitle\">Title</label>\n                <input [(ngModel)]=\"selectedEdit.title\" type=\"text\" id=\"formAddBookTitle\" name=\"formAddBookTitle\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookAuthor\">Author</label>\n                <input [(ngModel)]=\"selectedEdit.author\" type=\"text\" id=\"formAddBookAuthor\" name=\"formAddBookAuthor\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookPublisher\">Publisher</label>\n                <input [(ngModel)]=\"selectedEdit.publisher\" type=\"text\" id=\"formAddBookPublisher\" name=\"formAddBookPublisher\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookSelectGenre\">Genre</label>\n                <select *ngIf=\"genres\" [(ngModel)]=\"selectedEdit.genre\" [compareWith]=\"compareFn\" class=\"form-control\" id=\"formAddBookSelectGenre\">\n                  <option *ngFor=\"let x of genres\" [ngValue]=\"x\">{{x.name}}</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookPages\">Pages</label>\n                <input [ngModel]=\"selectedEdit.pages\" (ngModelChange)=\"selectedEdit.pages=$event\" type=\"number\" min=\"0\" id=\"formAddBookPages\" name=\"formAddBookPages\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\" *ngIf=\"selectedEdit.weight\">\n                <label for=\"formAddBookWeight\">Weight</label>\n                <input [(ngModel)]=\"selectedEdit.weight\" type=\"number\" min=\"0\" id=\"formAddBookWeight\" name=\"formAddBookWeight\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\" *ngIf=\"selectedEdit.releaseDate\">\n                <label for=\"formAddBookReleaseDate\">Release Date</label>\n                <input [(ngModel)]=\"selectedEdit.releaseDate\" type=\"text\" id=\"formAddBookReleaseDate\" name=\"formAddBookReleaseDate\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\" *ngIf=\"selectedEdit.sku\">\n                <label for=\"formAddBookSKU\">SKU</label>\n                <input [(ngModel)]=\"selectedEdit.sku\" type=\"text\" id=\"formAddBookSKU\" name=\"formAddBookSKU\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\" *ngIf=\"selectedEdit.previousPrice\">\n                <label for=\"formAddBookPreviousPrice\">Previous Price (required)</label>\n                <input [(ngModel)]=\"selectedEdit.previousPrice\" type=\"number\" min=\"0\" id=\"formAddBookPreviousPrice\" name=\"formAddBookPreviousPrice\"\n                  class=\"form-control myInput-elegant-2\" placeholder=\"\">\n                <span>{{selectedEdit.previousPrice}}</span>\n              </div>\n            </div>\n            <div class=\"col-12 col-sm-6 col-md-4 mb-3\">\n              <div class=\"form-group\" *ngIf=\"selectedEdit.sellingPrice\">\n                <label for=\"formAddBookSellingPrice\">Selling Price (required)</label>\n                <input [(ngModel)]=\"selectedEdit.sellingPrice\" type=\"number\" min=\"0\" id=\"formAddBookSellingPrice\" name=\"formAddBookSellingPrice\" class=\"form-control myInput-elegant-2\"\n                  placeholder=\"\">\n                  <span>{{selectedEdit.sellingPrice}}</span>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-8 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookImages\">Main Image</label>\n                <input [(ngModel)]=\"selectedEdit.images.main\"  type=\"text\" id=\"formAddBookImages\" name=\"formAddBookImages\" class=\"form-control myInput-elegant-2 mb-2\"\n                  placeholder=\"\" *ngIf=\"selectedEdit.images\">\n                <a href=\"\" class=\"text-dark\" data-toggle=\"collapse\" href=\"#collapseReviewImage\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseReviewImage\">\n                  <i class=\"far fa-image\"></i> View Image</a>\n              </div>\n            </div>\n            <div class=\"col-12 col-md-10 col-lg-4 mb-3\" >\n              <div class=\"collapse\" id=\"collapseReviewImage\">\n                <img *ngIf=\"selectedEdit.images.main\" [src]=\"selectedEdit.images.main\" alt=\"Warning: No image link found. You must add a link for image\" class=\"w-100\">\n              </div>\n            </div>\n            <div class=\"col-12\">\n              <div class=\"row\">\n                <div class=\"col-12 col-sm-6 col-lg-4 mb-3\">\n                  <div class=\"form-group\">\n                    <label for=\"formAddBookSizeWidth\">Size (width)</label>\n                    <input [(ngModel)]=\"selectedEdit.size.width\" type=\"number\" min=\"0\" id=\"formAddBookSizeWidth\" name=\"formAddBookSizeWidth\" class=\"form-control myInput-elegant-2\"\n                      placeholder=\"\">\n                  </div>\n                </div>\n                <div class=\"col-12 col-sm-6 col-lg-4 mb-3\">\n                  <div class=\"form-group\">\n                    <label for=\"formAddBookSizeHeight\">Size (height)</label>\n                    <input [(ngModel)]=\"selectedEdit.size.height\" type=\"number\" min=\"0\" id=\"formAddBookSizeHeight\" name=\"formAddBookSizeHeight\" class=\"form-control myInput-elegant-2\"\n                      placeholder=\"\">\n                  </div>\n                </div>\n                <div class=\"col-12 col-sm-6 col-lg-4 mb-3\">\n                  <div class=\"form-group\">\n                    <label for=\"formAddBookSizeDepth\">Size (depth)</label>\n                    <input [(ngModel)]=\"selectedEdit.size.depth\" type=\"number\" min=\"0\" sid=\"formAddBookSizeDepth\" name=\"formAddBookSizeDepth\" class=\"form-control myInput-elegant-2\"\n                      placeholder=\"\">\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"col-12 mb-3\">\n              <div class=\"form-group\" *ngIf=\"selectedEdit.shortDescription\">\n                <label for=\"formAddBookShortDescription\">Short Description</label>\n                <textarea [(ngModel)]=\"selectedEdit.shortDescription\" class=\"form-control myInput-elegant-2\" id=\"formAddBookShortDescription\"\n                  rows=\"3\"></textarea>\n              </div>\n            </div>\n            <div class=\"col-12 mb-3\">\n              <div class=\"form-group\">\n                <label for=\"formAddBookFullDescription\" *ngIf=\"selectedEdit.fullDescription\">Full Description</label>\n                <textarea [(ngModel)]=\"selectedEdit.fullDescription\" [froalaEditor]=\"HelloFroala\" class=\"form-control\" id=\"formAddBookFullDescription\"\n                  rows=\"10\"></textarea>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button (click)=\"updateBook()\" type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Save changes</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Discard</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _view_models_book__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view-models/book */ "./src/app/view-models/book.ts");
/* harmony import */ var _services_genre_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/genre.service */ "./src/app/services/genre.service.ts");
/* harmony import */ var _view_models_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view-models/image */ "./src/app/view-models/image.ts");
/* harmony import */ var _view_models_size__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view-models/size */ "./src/app/view-models/size.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductComponent = /** @class */ (function () {
    function ProductComponent(bookService, genreService) {
        this.bookService = bookService;
        this.genreService = genreService;
        this.selectedEdit = new _view_models_book__WEBPACK_IMPORTED_MODULE_2__["Book"]();
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.getBooks();
        this.getGenres();
    };
    ProductComponent.prototype.onSelect = function (book) {
        this.selectedBook = book;
        if (this.selectedBook.images == null) {
            this.selectedBook.images = new _view_models_image__WEBPACK_IMPORTED_MODULE_4__["Image"]();
        }
    };
    ProductComponent.prototype.onSelectEdit = function (book) {
        this.selectedEdit = book;
        if (this.selectedEdit.images == null) {
            this.selectedEdit.images = new _view_models_image__WEBPACK_IMPORTED_MODULE_4__["Image"]();
        }
        // if (this.selectedEdit.previousPrice == null) {
        //   this.selectedEdit.previousPrice = ;
        // }
        if (this.selectedEdit.size == null) {
            this.selectedEdit.size = new _view_models_size__WEBPACK_IMPORTED_MODULE_5__["Size"]();
        }
    };
    ProductComponent.prototype.onSelectDelete = function (book) {
        this.selectedDelete = book;
    };
    ProductComponent.prototype.getBooks = function () {
        var _this = this;
        this.bookService.getBooks().subscribe(function (z) { return _this.books = z; });
    };
    ;
    ProductComponent.prototype.getGenres = function () {
        var _this = this;
        this.genreService.getGenres().subscribe(function (_) { return _this.genres = _; });
    };
    ;
    ProductComponent.prototype.deleteBook = function (book) {
        this.books = this.books.filter(function (h) { return h !== book; });
        this.bookService.deleteBook(book).subscribe();
    };
    ProductComponent.prototype.updateBook = function () {
        this.bookService.updateBook(this.selectedEdit)
            .subscribe();
    };
    ProductComponent.prototype.compareFn = function (optionOne, optionTwo) {
        return optionOne._id == optionTwo._id;
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"], _services_genre_service__WEBPACK_IMPORTED_MODULE_3__["GenreService"]])
    ], ProductComponent);
    return ProductComponent;
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
    function BookService(http) {
        this.http = http;
        this.booksUrl = 'http://green-web-bookshop.herokuapp.com/api/books';
    }
    /** GET api-s from the server */
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
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BookService);
    return BookService;
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
        this.genresUrl = 'http://green-web-bookshop.herokuapp.com/api/genres';
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
        //  this.title = '';
        //  this.shortDescription = '';
        //  this.fullDescription = fullDescription;
        // this.publisher = publisher;
        // this.author = author;
        // this.pages = pages;
        // this.weight = weight;
        // this.sku = sku;
        // this.previousPrice = previousPrice;
        // this.sellingPrice = sellingPrice;
        // this.releaseDate = releaseDate;
        this.images = new _image__WEBPACK_IMPORTED_MODULE_1__["Image"]();
        this.size = new _size__WEBPACK_IMPORTED_MODULE_2__["Size"]();
        this.genre = new _genre__WEBPACK_IMPORTED_MODULE_0__["Genre"]();
        //  this.images = new Image('');
        // this.size = size;
        // this.genre = genre;
    }
    return Book;
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
    function Genre() {
        // this.name = '';
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

module.exports = __webpack_require__(/*! C:\Users\baodo\OneDrive\Desktop\admin-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map