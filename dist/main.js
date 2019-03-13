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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mainpage></app-mainpage>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(_loadingBar, _router) {
        var _this = this;
        this._loadingBar = _loadingBar;
        this._router = _router;
        this.title = 'rForms';
        this._router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
            this._loadingBar.start();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
            this._loadingBar.complete();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
            this._loadingBar.stop();
        }
        if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
            this._loadingBar.stop();
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_2__["SlimLoadingBarService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page2/page2.component */ "./src/app/page2/page2.component.ts");
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainpage/mainpage.component */ "./src/app/mainpage/mainpage.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _show_show_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show/show.component */ "./src/app/show/show.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _showreg_showreg_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./showreg/showreg.component */ "./src/app/showreg/showreg.component.ts");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot/forgot.component */ "./src/app/forgot/forgot.component.ts");
/* harmony import */ var ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-slim-loading-bar */ "./node_modules/ng2-slim-loading-bar/index.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"],
                _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"],
                _show_show_component__WEBPACK_IMPORTED_MODULE_10__["ShowComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _showreg_showreg_component__WEBPACK_IMPORTED_MODULE_14__["ShowregComponent"],
                _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__["ForgotComponent"]
            ],
            imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                ng2_slim_loading_bar__WEBPACK_IMPORTED_MODULE_16__["SlimLoadingBarModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: ' ',
                        component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"]
                    },
                    {
                        path: '', redirectTo: 'login',
                        pathMatch: 'full'
                    },
                    // {
                    //     path:'**',
                    //     component:LoginComponent
                    // }, 
                    {
                        path: 'page2',
                        component: _page2_page2_component__WEBPACK_IMPORTED_MODULE_5__["Page2Component"]
                    },
                    {
                        path: 'show',
                        component: _show_show_component__WEBPACK_IMPORTED_MODULE_10__["ShowComponent"]
                    },
                    {
                        path: 'showreg',
                        component: _showreg_showreg_component__WEBPACK_IMPORTED_MODULE_14__["ShowregComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"]
                    },
                    {
                        path: 'register',
                        component: _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
                    },
                    {
                        path: 'forgot',
                        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__["ForgotComponent"]
                    },
                    {
                        path: 'edit/:id',
                        component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"]
                    }
                ])
            ],
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_7__["MyserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <form [formGroup]=\"angForm\" novalidate>\n        <div class=\"form-group\">\n            <label class=\"col-md-4\">Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name [(ngModel)] = \"student.name\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['name'].errors.required\">\n                Name is required.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-4\">Standard </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"standard\" #standard [(ngModel)] = \"student.standard\" />\n        </div>\n        <div *ngIf=\"angForm.controls['standard'].invalid && (angForm.controls['standard'].dirty || angForm.controls['standard'].touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['standard'].errors.required\">\n                Standard is required.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-4\">Age </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"age\" #age [(ngModel)] = \"student.age\"/>\n        </div>\n        <div *ngIf=\"angForm.controls['age'].invalid && (angForm.controls['age'].dirty || angForm.controls['age'].touched)\"\n             class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['age'].errors.required\">\n                Age is required.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button (click)=\"updateStudent(name.value, standard.value, age.value)\" \n            [disabled]=\"angForm.pristine || angForm.invalid\" \n            class=\"btn btn-primary\">Update Student</button>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");





var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, bs, fb) {
        this.route = route;
        this.router = router;
        this.bs = bs;
        this.fb = fb;
        this.student = {};
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            standard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.bs.editStudent(params['id']).subscribe(function (res) {
                _this.student = res;
            });
        });
    };
    EditComponent.prototype.updateStudent = function (name, standard, age) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.bs.updateStudent(name, standard, age, params['id']);
            _this.router.navigate(['student']);
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _myservice_service__WEBPACK_IMPORTED_MODULE_4__["MyserviceService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.component.css":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/forgot/forgot.component.html":
/*!**********************************************!*\
  !*** ./src/app/forgot/forgot.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"well\"><h3 style=\"text-align: center;color: tomato\">Forgot Password</h3></div>\r\n    <form [formGroup]=\"login_form\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Enter Name</label>\r\n            <input type=\"name\" class=\"form-control\" formControlName=\"name\" #name />\r\n        </div>\r\n        <div *ngIf=\"login_form.controls['name'].invalid && (login_form.controls['name'].dirty || login_form.controls['name'].touched)\"\r\n             class=\"alert alert-danger\">\r\n            <div *ngIf=\"login_form.controls['name'].errors.required\">\r\n                Name is required.\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Enter New Password</label>\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" #password />\r\n        </div>\r\n        <div *ngIf=\"login_form.controls['password'].invalid && (login_form.controls['password'].dirty || login_form.controls['password'].touched)\"\r\n             class=\"alert alert-danger\">\r\n            <div *ngIf=\"login_form.controls['password'].errors.required\">\r\n                Enter New Password.\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <button (click)=\"updateReg(name.value,password.value)\" [disabled]=\"login_form.pristine || login_form.invalid && submitted\"\r\n                    class=\"btn btn-primary\">Re-new Password</button>\r\n            <div *ngIf=\"invalidLogin\" class=\"error\">\r\n                <!--<div>Enter New Password.</div>-->\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forgot/forgot.component.ts":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(umar, route, myservice, router) {
        this.umar = umar;
        this.route = route;
        this.myservice = myservice;
        this.router = router;
        this.submitted = false;
        this.invalidLogin = false;
        this.x = 0;
        this.createForm();
    }
    ForgotComponent.prototype.createForm = function () {
        this.login_form = this.umar.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    ForgotComponent.prototype.updateReg = function (name, password) {
        var _this = this;
        this.myservice.getRegister().subscribe(function (data) {
            //alert(JSON.stringify(data));
            for (var key in data) {
                var val = data[key];
                var a = JSON.stringify(val);
                var v = JSON.parse(a);
                if (v["name"] == name) {
                    _this.x = 1;
                    break;
                }
            }
            if (_this.x == 1)
                _this.route.params.subscribe(function (params) {
                    _this.myservice.updateReg(name, password);
                    _this.router.navigate(['login']);
                });
            else {
                alert("User Not Available");
                _this.invalidLogin = true;
            }
        });
    };
    ForgotComponent.prototype.ngOnInit = function () { };
    ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/forgot/forgot.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"well\"><h3 style=\"text-align: center;color: tomato\">LOGIN</h3></div>\r\n    <form [formGroup]=\"login_form\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Mobile No</label>\r\n            <input type=\"email\" class=\"form-control\" formControlName=\"mobile\" #mobile />\r\n        </div>\r\n        <div *ngIf=\"login_form.controls['mobile'].invalid && (login_form.controls['mobile'].dirty || login_form.controls['mobile'].touched)\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"login_form.controls['mobile'].errors.required\">\r\n                Mobile No. is required.\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <label class=\"col-md-4\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" #password />\r\n        </div>\r\n        <div *ngIf=\"login_form.controls['password'].invalid && (login_form.controls['password'].dirty || login_form.controls['password'].touched)\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"login_form.controls['password'].errors.required\">\r\n                Password is required.\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"form-group\">\r\n            <button (click)=\"loginUser(mobile.value, password.value)\" [disabled]=\"login_form.pristine || login_form.invalid &&                  submitted\"\r\n                class=\"btn btn-primary\">Login</button>\r\n            &nbsp;&nbsp;\r\n            <a routerLink=\"/register\"><button class=\"btn btn-primary\" > Register </button></a>\r\n            &nbsp;&nbsp;\r\n            <a routerLink=\"/forgot\"><button class=\"btn btn-primary\" > Forgot </button></a>\r\n            <div *ngIf=\"invalidLogin\" class=\"error\">\r\n                <!--<div>Invalid credentials.</div>-->\r\n            </div>\r\n\r\n        <!--<div class=\"btn-group btn-group-justified\">-->\r\n            <!--<a routerLink=\"/register\" class=\"btn btn-primary\">Register</a>-->\r\n            <!--<a routerLink=\"/forgot\" class=\"btn btn-primary\">Forgot</a>-->\r\n        <!--</div>-->\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <!--- fetching above form data as group in json format-->\r\n        <div class=\"well\">\r\n        {{login_form.value | json}}\r\n        <!--- fetching above form data as single-->\r\n        <!--{{mobile.value }}-->\r\n        </div>\r\n    </form>\r\n    </div>\r\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(umar, myservice, router) {
        this.umar = umar;
        this.myservice = myservice;
        this.router = router;
        this.submitted = false;
        this.invalidLogin = false;
        this.x = 0;
        this.createForm();
    }
    LoginComponent.prototype.createForm = function () {
        this.login_form = this.umar.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.loginUser = function (mobile, password) {
        // this.myservice.loginUser(mobile, password);
        //       this.submitted = true;
        //   if (this.login_form.invalid) {
        //       return;
        //   }
        //   if (this.login_form.controls.mobile.value == '11' && this.login_form.controls.password.value == '11') {
        //       this.router.navigate(['page2']);
        //   } else {
        //       this.invalidLogin = true;
        //   }
        var _this = this;
        this.myservice.getRegister().subscribe(function (data) {
            //alert(JSON.stringify(data));
            for (var key in data) {
                var val = data[key];
                var a = JSON.stringify(val);
                var v = JSON.parse(a);
                if (v["mobile"] == mobile && v['password'] == password) {
                    _this.x = 1;
                    break;
                }
            }
            if (_this.x == 1)
                _this.router.navigate(['page2']);
            else {
                alert("invalid credentials");
                _this.invalidLogin = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainpage/mainpage.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5wYWdlL21haW5wYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <ng2-slim-loading-bar color=\"red\" height='3px'></ng2-slim-loading-bar>\n<div class=\"well\" style=\"text-align: center\">\n    <!--<a routerLink=\"/page2\">Fill Form</a>&nbsp;&nbsp;-->\n    <!--<a routerLink=\"/login\">Login</a>&nbsp;&nbsp;-->\n    <a routerLink=\"/show\">Show</a>&nbsp;&nbsp;\n    <a routerLink=\"/showreg\">Show REG</a>&nbsp;&nbsp;\n    <!--<a routerLink=\"/register\">Register</a>&nbsp;&nbsp;-->\n    <!--<a routerLink=\"/forgot\">Forgot</a>&nbsp;&nbsp;-->\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/mainpage/mainpage.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainpage/mainpage.component.ts ***!
  \************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainpageComponent = /** @class */ (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/mainpage/mainpage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MyserviceService = /** @class */ (function () {
    // uri = 'https://umar01.herokuapp.com/tasks';
    // urii = 'https://umar01.herokuapp.com/user';
    //   uri = 'tasks';
    //   urii = 'user';
    function MyserviceService(http) {
        this.http = http;
        this.uri = 'http://localhost:8080/tasks';
        this.urii = 'http://localhost:8080/user';
    }
    MyserviceService.prototype.addUser = function (name, mobile, password) {
        var obj = {
            name: name,
            mobile: mobile,
            password: password
        };
        console.log(obj);
        this.http.post("" + this.urii, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    MyserviceService.prototype.loginUser = function (mobile, password) {
        var obj = {
            mobile: mobile,
            password: password
        };
        console.log(obj);
        this.http.get(this.urii + "/" + mobile)
            .subscribe(function (res) { return console.log('Done'); });
    };
    MyserviceService.prototype.getStudent = function () {
        return this
            .http
            .get("" + this.uri);
    };
    MyserviceService.prototype.getRegister = function () {
        return this
            .http
            .get("" + this.urii);
    };
    MyserviceService.prototype.addStudent = function (name, standard, age) {
        var obj = {
            name: name,
            standard: standard,
            age: age
        };
        console.log(obj);
        this.http.post("" + this.uri, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    MyserviceService.prototype.editStudent = function (id) {
        return this
            .http
            .get(this.uri + "/" + id);
    };
    MyserviceService.prototype.updateReg = function (name, password) {
        //alert(name+" "+password)
        var obj = {
            password: password,
        };
        this
            .http
            .put(this.urii + "/" + name, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    MyserviceService.prototype.updateStudent = function (name, standard, age, id) {
        var obj = {
            name: name,
            standard: standard,
            age: age
        };
        this
            .http
            .put(this.uri + "/" + id, obj)
            .subscribe(function (res) { return console.log('Done'); });
    };
    MyserviceService.prototype.deleteStudent = function (id) {
        return this
            .http
            .delete(this.uri + "/" + id);
    };
    MyserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/page2/page2.component.css":
/*!*******************************************!*\
  !*** ./src/app/page2/page2.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UyL3BhZ2UyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page2/page2.component.html":
/*!********************************************!*\
  !*** ./src/app/page2/page2.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"well\"><h3 style=\"text-align: center;color: tomato\">FILL THE FORM</h3></div>\n    <form [formGroup]=\"angForm\" novalidate>\n        <div class=\"form-group\">\n            <label class=\"col-md-4\">Name</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name />\n        </div>\n        <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['name'].errors.required\">\n                Name is required.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-4\">Standard </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"standard\" #standard />\n        </div>\n        <div *ngIf=\"angForm.controls['standard'].invalid && (angForm.controls['standard'].dirty || angForm.controls['standard'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['standard'].errors.required\">\n                Standard is required.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <label class=\"col-md-4\">Age </label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"age\" #age />\n        </div>\n        <div *ngIf=\"angForm.controls['age'].invalid && (angForm.controls['age'].dirty || angForm.controls['age'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"angForm.controls['age'].errors.required\">\n                Age is required.\n            </div>\n        </div>\n        <div class=\"form-group\">\n            <button (click)=\"addStudent (name.value, standard.value, age.value)\" \n            [disabled]=\"angForm.pristine || angForm.invalid\" \n            class=\"btn btn-primary\">Add Student</button>\n        </div>\n        <!--- fetching above form data as group in json format-->\n    {{angForm.value | json}}\n    <!--- fetching above form data as single-->\n    {{name.value }}\n    </form>\n</div>"

/***/ }),

/***/ "./src/app/page2/page2.component.ts":
/*!******************************************!*\
  !*** ./src/app/page2/page2.component.ts ***!
  \******************************************/
/*! exports provided: Page2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page2Component", function() { return Page2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var Page2Component = /** @class */ (function () {
    function Page2Component(myservice, umar, router) {
        this.myservice = myservice;
        this.umar = umar;
        this.router = router;
        this.createForm();
    }
    Page2Component.prototype.createForm = function () {
        this.angForm = this.umar.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            standard: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    Page2Component.prototype.addStudent = function (name, standard, age) {
        this.myservice.addStudent(name, standard, age);
        alert("submitted");
        this.router.navigate(['login']);
    };
    Page2Component.prototype.ngOnInit = function () {
    };
    Page2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page2',
            template: __webpack_require__(/*! ./page2.component.html */ "./src/app/page2/page2.component.html"),
            styles: [__webpack_require__(/*! ./page2.component.css */ "./src/app/page2/page2.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"well\"><h3 style=\"text-align: center;color: tomato\">REGISTER</h3></div>\n  <form [formGroup]=\"reg_form\" novalidate>\n      <div class=\"form-group\">\n          <label class=\"col-md-4\">User Name</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"name\" #name />\n      </div>\n      <div *ngIf=\"reg_form.controls['name'].invalid && (reg_form.controls['name'].dirty || reg_form.controls['name'].touched)\"\n          class=\"alert alert-info\">\n          <div *ngIf=\"reg_form.controls['name'].errors.required\">\n              User Name. is required.\n          </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Mobile No</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"mobile\" #mobile />\n    </div>\n    <div *ngIf=\"reg_form.controls['mobile'].invalid && (reg_form.controls['mobile'].dirty || reg_form.controls['mobile'].touched)\"\n        class=\"alert alert-danger\">\n        <div *ngIf=\"reg_form.controls['mobile'].errors.required\">\n            Mobile is required.\n        </div>\n    </div>\n\n\n      <div class=\"form-group\">\n          <label class=\"col-md-4\"> Set New Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" #password />\n      </div>\n      <div *ngIf=\"reg_form.controls['password'].invalid && (reg_form.controls['password'].dirty || reg_form.controls['password'].touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"reg_form.controls['password'].errors.required\">\n              Password is required.\n          </div>\n      </div>\n\n\n      <div class=\"form-group\">\n          <button (click)=\"addUser(name.value, mobile.value, password.value)\" [disabled]=\"reg_form.pristine || reg_form.invalid\"\n              class=\"btn btn-primary\">Register</button>\n      </div>\n      <div class=\"well\">\n      <!--- fetching above form data as group in json format-->\n      {{reg_form.value | json}}\n      <!--- fetching above form data as single-->\n      <!--{{mobile.value }}-->\n      </div>\n  </form>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(umar, myservice, router) {
        this.umar = umar;
        this.myservice = myservice;
        this.router = router;
        this.createForm();
    }
    RegisterComponent.prototype.createForm = function () {
        this.reg_form = this.umar.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegisterComponent.prototype.addUser = function (name, mobile, password) {
        this.myservice.addUser(name, mobile, password);
        alert("submitted");
        this.router.navigate(['login']);
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _myservice_service__WEBPACK_IMPORTED_MODULE_3__["MyserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/show/show.component.css":
/*!*****************************************!*\
  !*** ./src/app/show/show.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3cvc2hvdy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/show/show.component.html":
/*!******************************************!*\
  !*** ./src/app/show/show.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\"><h3 style=\"text-align: center;color: tomato\">LISTING ALL USER</h3></div>\n<table class=\"table table-hover\">\n    <thead>\n    <tr>\n        <td>Name</td>\n        <td>Standard</td>\n        <td>Age</td>\n        <td colspan=\"2\">Actions</td>\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let student of students\">\n        <td>{{ student.name }}</td>\n        <td>{{ student.standard }}</td>\n        <td>{{ student.age }}</td>\n        <td><a [routerLink]=\"['/edit',student._id]\" class=\"btn btn-primary\">Edit</a></td>\n        <td><a (click)=\"[deleteStudent(student._id)]\" class=\"btn btn-danger\">Delete</a></td>\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/*!****************************************!*\
  !*** ./src/app/show/show.component.ts ***!
  \****************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var ShowComponent = /** @class */ (function () {
    function ShowComponent(umar) {
        this.umar = umar;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.umar
            .getStudent()
            .subscribe(function (data) {
            _this.students = data;
        });
    };
    ShowComponent.prototype.deleteStudent = function (id) {
        this.umar.deleteStudent(id).subscribe(function (res) {
            console.log('Deleted');
        });
    };
    ShowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.css */ "./src/app/show/show.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/showreg/showreg.component.css":
/*!***********************************************!*\
  !*** ./src/app/showreg/showreg.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3dyZWcvc2hvd3JlZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/showreg/showreg.component.html":
/*!************************************************!*\
  !*** ./src/app/showreg/showreg.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"well\"><h3 style=\"text-align: center;color: tomato\">LISTING ALL REGISTER</h3></div>\n<table class=\"table table-hover\">\n    <thead>\n    <tr>\n        <td>Name</td>\n        <td>Mobile</td>\n        <td>Password</td>\n        <!--<td colspan=\"2\">Actions</td>-->\n    </tr>\n    </thead>\n\n    <tbody>\n    <tr *ngFor=\"let register of registers\">\n        <td>{{ register.name }}</td>\n        <td>{{ register.mobile }}</td>\n        <td>{{ register.password }}</td>\n        <!--<td><a [routerLink]=\"['/edit',student._id]\" class=\"btn btn-primary\">Edit</a></td>-->\n        <!--<td><a (click)=\"[deleteStudent(student._id)]\" class=\"btn btn-danger\">Delete</a></td>-->\n    </tr>\n    </tbody>\n</table>"

/***/ }),

/***/ "./src/app/showreg/showreg.component.ts":
/*!**********************************************!*\
  !*** ./src/app/showreg/showreg.component.ts ***!
  \**********************************************/
/*! exports provided: ShowregComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowregComponent", function() { return ShowregComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../myservice.service */ "./src/app/myservice.service.ts");



var ShowregComponent = /** @class */ (function () {
    function ShowregComponent(umar) {
        this.umar = umar;
    }
    ShowregComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.umar
            .getRegister()
            .subscribe(function (data) {
            _this.registers = data;
            // console.log(this.registers[1]);
        });
    };
    ShowregComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showreg',
            template: __webpack_require__(/*! ./showreg.component.html */ "./src/app/showreg/showreg.component.html"),
            styles: [__webpack_require__(/*! ./showreg.component.css */ "./src/app/showreg/showreg.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"]])
    ], ShowregComponent);
    return ShowregComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Users\Umar\WebstormProjects\Project2\rForms\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map