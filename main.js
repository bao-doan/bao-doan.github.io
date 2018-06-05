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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"app header-fixed sidebar-fixed aside-menu-fixed sidebar-md-show\">\n    <header class=\"app-header navbar\">\n        <button class=\"navbar-toggler sidebar-toggler d-lg-none mr-auto\" type=\"button\" data-toggle=\"sidebar-show\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <a class=\"navbar-brand\" href=\"index.html\">\n            <!-- <img class=\"navbar-brand-full\" src=\"img/brand/logo.svg\" width=\"89\" height=\"25\" alt=\"CoreUI Logo\">\n            <img class=\"navbar-brand-minimized\" src=\"img/brand/sygnet.svg\" width=\"30\" height=\"30\" alt=\"CoreUI Logo\"> -->\n            <span class=\"navbar-brand-full\" alt=\"Brand Logo Full\">Brand</span>\n            <span class=\"navbar-brand-minimized\" width=\"30\" height=\"30\" alt=\"Brand Logo Mini\">B</span>\n        </a>\n        <button class=\"navbar-toggler sidebar-toggler d-md-down-none\" type=\"button\" data-toggle=\"sidebar-lg-show\">\n            <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <ul class=\"nav navbar-nav d-md-down-none ml-auto\">\n            <li class=\"nav-item px-3\">\n                <a class=\"nav-link\" href=\"#\">Dashboard</a>\n            </li>\n            <li class=\"nav-item px-3\">\n                <a class=\"nav-link\" href=\"#\">Users</a>\n            </li>\n            <li class=\"nav-item px-3\">\n                <a class=\"nav-link\" href=\"#\">Settings</a>\n            </li>\n        </ul>\n    </header>\n    <div class=\"app-body\">\n        <div class=\"sidebar\">\n            <nav class=\"sidebar-nav\">\n                <ul class=\"nav\">\n\n                    <li class=\"nav-title\">ADMIN</li>\n\n                    <li class=\"nav-item open\">\n                        <a class=\"nav-link active\" href=\"admin.html\">\n                            <i class=\"fas fa-tachometer-alt nav-icon\"></i> Dashboard\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <i class=\"far fa-user nav-icon\"></i> Profile\n                        </a>\n                    </li>\n                    <li class=\"nav-item nav-dropdown\">\n                        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\n                            <i class=\"fas fa-table nav-icon\"></i> Tables</a>\n                        <ul class=\"nav-dropdown-items\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"nav-icon\"></i> Table One</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"nav-icon\"></i> Table Two</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-title\">CREATE NEW</li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <i class=\"fab fa-product-hunt nav-icon\"></i> Products\n                        </a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                            <i class=\"far fa-file-alt nav-icon\"></i> Posts\n                        </a>\n                    </li>\n                    <li class=\"nav-title\">STORE</li>\n                    <li class=\"nav-item nav-dropdown\">\n                        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\n                            <i class=\"far fa-file nav-icon\"></i> Pages</a>\n                        <ul class=\"nav-dropdown-items\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"nav-icon\"></i> One</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"nav-icon\"></i> Two</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"nav-item nav-dropdown\">\n                        <a class=\"nav-link nav-dropdown-toggle\" href=\"#\">\n                            <i class=\"fas fa-list-ul nav-icon\"></i> Categories</a>\n                        <ul class=\"nav-dropdown-items\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"nav-icon\"></i> One</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">\n                                    <i class=\"nav-icon\"></i> Two</a>\n                            </li>\n                        </ul>\n                    </li>\n\n                </ul>\n            </nav>\n            <button class=\"sidebar-minimizer brand-minimizer \" type=\"button\"></button>\n        </div>\n        <main class=\"main\">\n            <!-- Breadcrumb-->\n            <ol class=\"breadcrumb\">\n                <li class=\"breadcrumb-item\">Home</li>\n                <li class=\"breadcrumb-item\">\n                    <a href=\"#\">Admin</a>\n                </li>\n                <li class=\"breadcrumb-item active\">Dashboard</li>\n            </ol>\n            <div class=\"container-fluid\">\n                <div class=\"row\">\n                    <div class=\"col-12 col-md-4 mb-3\">\n                        <h5 class=\"mb-3\">Create New</h5>\n                        <div class=\"form-group\">\n                            <label for=\"formAddCategory\">Create new Category</label>\n                            <input type=\"text\" id=\"formAddCategory\" name=\"formAddCategory\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n                        </div>\n                        <button class=\"btn btn-success\">\n                            <i class=\"fas fa-plus\"></i> Create</button>\n                    </div>\n                    <div class=\"col-12 col-md-4 mb-3\">\n                        <div class=\"d-flex flex-row justify-content-between align-items-center mb-3\">\n                            <span class=\"h5 mb-0\">Master List</span>\n                            <button class=\"btn btn-primary\">\n                                <i class=\"fas fa-sync-alt\"></i> Refresh</button>\n                        </div>\n\n                        <ul class=\"list-group border-0\">\n                            <li class=\"\">waiting for binding</li>\n                        </ul>\n                    </div>\n                    <div class=\"col-12 col-md-4 mb-3\">\n                        <div class=\"d-flex flex-row justify-content-between align-items-center mb-3\">\n                            <span class=\"h5 mb-0\">Details</span>\n                            <button class=\"btn btn-primary\">\n                                <i class=\"fas fa-check\"></i> Update</button>\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"formAddCategory\">Category:</label>\n                            <input type=\"text\" id=\"formAddCategory\" name=\"formAddCategory\" class=\"form-control myInput-elegant-2\" placeholder=\"\">\n\n                        </div>\n                        <p>Id: 123456</p>\n                        <p>Title: Lorem ipsum ador</p>\n                        <p>Created date: 01/01/2010</p>\n                    </div>\n                </div>\n            </div>\n        </main>\n    </div>\n    <footer class=\"app-footer\">\n        <div>\n            <a href=\"https://coreui.io\">Brand Co., Ltd</a>\n            <span>&copy; 2018.</span>\n        </div>\n        <div class=\"ml-auto\">\n            <span>Powered by</span>\n            <a href=\"https://coreui.io\">CoreUI</a>\n        </div>\n    </footer>\n</body>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
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

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
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
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] }
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

module.exports = "<!-- <a routerLink=\"/admin\">Go to Admin</a> -->\n<!-- <router-outlet></router-outlet> -->\n<app-admin></app-admin>"

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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing/app-routing.module */ "./src/app/app-routing/app-routing.module.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
                // AppBootstrapModule,
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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