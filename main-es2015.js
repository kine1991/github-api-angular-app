(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-profile></app-profile>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile-body/profile-body.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile-body/profile-body.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-body\">\n    <div class=\"profile-body__user\">\n        <div class=\"spinner-container\" *ngIf=\"!profile && isLoadingProfile\">\n            <mat-spinner></mat-spinner>\n        </div>\n        <div class=\"user\" *ngIf=\"profile\">\n\n            <div class=\"image-container\">\n                <img [src]=\"profile.avatar_url\" alt=\"\">\n            </div>\n            <div class=\"text-container\">\n                <p class=\"mat-small\" >{{profile.login}}</p>\n                <p class=\"mat-small\">{{profile.name}}</p>\n                <p class=\"mat-small\">{{profile.location}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"profile-body__repos\">\n        <div class=\"spinner-container\" *ngIf=\"!repos && isLoadingRepo\">\n            <mat-spinner></mat-spinner>\n        </div>\n        <mat-list>\n            <mat-list-item *ngFor=\"let repo of repos\">\n                <mat-icon matListIcon>folder</mat-icon>\n                <h3 matLine> {{repo.name}} </h3>\n                <p matLine>\n                    <span> {{repo.description | slice:0:40}} </span>\n                </p>\n            </mat-list-item>\n        </mat-list>\n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile-content/profile-content.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile-content/profile-content.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>profile-content works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile/profile.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile/profile.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"profile-container\">\n    <mat-toolbar class=\"header\">\n        <span class=\"header__label\">Github API</span>\n        <mat-form-field class=\"header__search\">\n            <input matInput (keyup.enter)=\"onKey($event)\" [(ngModel)]=\"name\">\n            <button mat-icon-button matSuffix (click)=\"search()\">\n                <mat-icon>search</mat-icon>\n            </button>\n        </mat-form-field>\n        <span class=\"header__fill\"></span>\n    </mat-toolbar>\n\n    <div class=\"profile-content\">\n        <div class=\"profile-content__sidebar\">\n            <div class=\"spinner-container\" *ngIf=\"!profiles && isLoading\">\n                <mat-spinner></mat-spinner>\n            </div>\n            <mat-list class=\"profile-content__list\" *ngIf=\"profiles\">\n                <mat-list-item *ngFor=\"let profile of profiles\" [routerLink]=\"['/']\" (click)=\"getProfile(profile)\" [queryParams]=\"{ username: profile.login }\"> \n                    <div class=\"profile-content__image-container\">\n                        <img class=\"image\" [src]=\"profile.avatar_url\" alt=\"\">\n                    </div>\n                    <p class=\"profile-content__name\">{{profile.login}}</p>\n                    <mat-divider></mat-divider>\n                </mat-list-item>\n            </mat-list>\n        </div>\n        <div class=\"profile-content__body\">\n            <app-profile-body></app-profile-body>\n        </div>\n    </div>\n\n\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
















let AngularMaterialModule = class AngularMaterialModule {
};
AngularMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [],
        exports: [
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"]
        ],
        providers: [],
    })
], AngularMaterialModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
// { path: '**', component: ProfileComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _github_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./github/profile/profile.component */ "./src/app/github/profile/profile.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _github_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./github/profile-content/profile-content.component */ "./src/app/github/profile-content/profile-content.component.ts");
/* harmony import */ var _github_profile_body_profile_body_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./github/profile-body/profile-body.component */ "./src/app/github/profile-body/profile-body.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _github_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
            _github_profile_content_profile_content_component__WEBPACK_IMPORTED_MODULE_10__["ProfileContentComponent"],
            _github_profile_body_profile_body_component__WEBPACK_IMPORTED_MODULE_11__["ProfileBodyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/github/github.service.ts":
/*!******************************************!*\
  !*** ./src/app/github/github.service.ts ***!
  \******************************************/
/*! exports provided: GithubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GithubService", function() { return GithubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");





let GithubService = class GithubService {
    constructor(http) {
        this.http = http;
    }
    searchProfiles(name) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url}${name}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getProfile(name) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].githubUrl}/users/${name}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    getRepos(name) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].githubUrl}/users/${name}/repos`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
};
GithubService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
GithubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GithubService);



/***/ }),

/***/ "./src/app/github/profile-body/profile-body.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/github/profile-body/profile-body.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-body {\n  border: 1px solid black;\n  height: 100%;\n  display: flex;\n}\n@media (max-width: 760px) {\n  .profile-body {\n    border: 1px solid black;\n    min-height: calc(100vh - 64px);\n    display: flex;\n    flex-direction: column;\n  }\n}\n.profile-body__user {\n  flex: 1;\n  overflow: scroll;\n}\n@media (max-width: 760px) {\n  .profile-body__user {\n    flex: 0 0 25vh;\n    overflow: scroll;\n  }\n}\n.profile-body__repos {\n  flex: 2;\n  overflow: scroll;\n}\n@media (max-width: 760px) {\n  .profile-body__repos {\n    flex: 0 0 calc(100vh - 25vh - 64px);\n    overflow: scroll;\n  }\n}\n@media (max-width: 760px) {\n  .user {\n    display: flex;\n    flex-direction: row;\n  }\n}\n.image-container > img {\n  height: 200px;\n}\n@media (max-width: 760px) {\n  .image-container {\n    flex: 1;\n  }\n}\n@media (max-width: 600px) {\n  .image-container > img {\n    height: 160px;\n  }\n}\n.text-container {\n  flex: 1;\n  padding: 1rem;\n}\n.spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvbGF5L0Rlc2t0b3Avd2ViL2FuZ3VsYXIvZ2l0aHViLWFwaS1hbmd1bGFyLWFwcC9zcmMvYXBwL2dpdGh1Yi9wcm9maWxlLWJvZHkvcHJvZmlsZS1ib2R5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9naXRodWIvcHJvZmlsZS1ib2R5L3Byb2ZpbGUtYm9keS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjtBRENJO0VBTEo7SUFNUSx1QkFBQTtJQUNBLDhCQUFBO0lBRUEsYUFBQTtJQUNBLHNCQUFBO0VDQ047QUFDRjtBRENJO0VBQ0ksT0FBQTtFQUVBLGdCQUFBO0FDQVI7QURDUTtFQUpKO0lBS1EsY0FBQTtJQUNBLGdCQUFBO0VDRVY7QUFDRjtBREVJO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0FDQVI7QURFUTtFQUpKO0lBS1EsbUNBQUE7SUFDQSxnQkFBQTtFQ0NWO0FBQ0Y7QURRSTtFQURKO0lBR1EsYUFBQTtJQUNBLG1CQUFBO0VDTk47QUFDRjtBRGNJO0VBQ0ksYUFBQTtBQ1pSO0FEY0k7RUFMSjtJQU9RLE9BQUE7RUNaTjtBQUNGO0FEYUk7RUFDSTtJQUNJLGFBQUE7RUNYVjtBQUNGO0FEZUE7RUFFSSxPQUFBO0VBQ0EsYUFBQTtBQ2JKO0FEZ0JBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDYkoiLCJmaWxlIjoic3JjL2FwcC9naXRodWIvcHJvZmlsZS1ib2R5L3Byb2ZpbGUtYm9keS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWJvZHl7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgICAgICAgLy8gYmFja2dyb3VuZDogc2FsbW9uO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICZfX3VzZXJ7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICM0NTY3OTQ7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgICAgICAgICAgZmxleDogMCAwIDI1dmg7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogcm9zeWJyb3duO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fcmVwb3N7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgY2FsYygxMDB2aCAtIDI1dmggLSA2NHB4KTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiByb3lhbGJsdWU7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgICAgICAvLyBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udXNlcntcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgICAgICAgLy8gcGFkZGluZzogMXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxufVxuXG4uaW1hZ2UtY29udGFpbmVye1xuICAgIC8vIGJhY2tncm91bmQ6ICM5OTU2NzY7XG4gICAgJiA+IGltZyB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgICAgICAvLyB3aWR0aDogNXZoO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgJiA+IGltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2MHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGV4dC1jb250YWluZXJ7XG4gICAgLy8gYmFja2dyb3VuZDogIzM0NTY3NjtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5zcGlubmVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cblxuLy8gXG4vLyAucHJvZmlsZS1ib2R5e1xuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgIC8vIG92ZXJmbG93OiBzY3JvbGw7XG5cbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbi8vICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4vLyAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICB9XG4vLyAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4vLyAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4vLyAgICAgfVxuXG4vLyAgICAgJl9fdXNlcntcbi8vICAgICAgICAgZmxleDogMTtcbi8vICAgICAgICAgLy8gYmFja2dyb3VuZDogIzQ1Njc5NDtcbi8vICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbi8vICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4vLyAgICAgICAgICAgICBmbGV4OiAwIDAgMzAlO1xuLy8gICAgICAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICZfX3JlcG9ze1xuLy8gICAgICAgICBmbGV4OiAyO1xuLy8gICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG4vLyAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuLy8gICAgICAgICAgICAgZmxleDogMCAwIGNhbGMoMTAwdmggLSAzMHZoIC0gNjRweCk7XG4vLyAgICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuLy8gICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogcm9zeWJyb3duO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAudXNlcntcbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbi8vICAgICAgICAgcGFkZGluZzogMXJlbTtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC5pbWFnZS1jb250YWluZXJ7XG4vLyAgICAgJiA+IGltZyB7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIH1cbi8vICAgICBAbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbi8vICAgICAgICAgZmxleDogMTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIC50ZXh0LWNvbnRhaW5lcntcbi8vICAgICBiYWNrZ3JvdW5kOiAjMzQ1Njc2O1xuLy8gICAgIGZsZXg6IDE7XG4vLyAgICAgcGFkZGluZzogMXJlbTtcbi8vIH1cblxuLy8gLnNwaW5uZXItY29udGFpbmVye1xuLy8gICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICBoZWlnaHQ6IDEwMCU7XG4vLyB9XG4iLCIucHJvZmlsZS1ib2R5IHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucHJvZmlsZS1ib2R5IHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ucHJvZmlsZS1ib2R5X191c2VyIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucHJvZmlsZS1ib2R5X191c2VyIHtcbiAgICBmbGV4OiAwIDAgMjV2aDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9XG59XG4ucHJvZmlsZS1ib2R5X19yZXBvcyB7XG4gIGZsZXg6IDI7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnByb2ZpbGUtYm9keV9fcmVwb3Mge1xuICAgIGZsZXg6IDAgMCBjYWxjKDEwMHZoIC0gMjV2aCAtIDY0cHgpO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAudXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG4uaW1hZ2UtY29udGFpbmVyID4gaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBmbGV4OiAxO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmltYWdlLWNvbnRhaW5lciA+IGltZyB7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgfVxufVxuXG4udGV4dC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uc3Bpbm5lci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/github/profile-body/profile-body.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/github/profile-body/profile-body.component.ts ***!
  \***************************************************************/
/*! exports provided: ProfileBodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBodyComponent", function() { return ProfileBodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../github.service */ "./src/app/github/github.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProfileBodyComponent = class ProfileBodyComponent {
    constructor(githubService, route) {
        this.githubService = githubService;
        this.route = route;
        this.isLoadingProfile = false;
        this.isLoadingRepo = false;
    }
    ngOnInit() {
        // console.log('singleProfile ',this.singleProfile)
        this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.isLoadingRepo = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            return this.githubService.getRepos(params.get('username'));
        }))
            .subscribe(repos => {
            this.repos = repos;
            this.isLoadingRepo = true;
            console.log(repos);
        });
        this.route.queryParamMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(() => {
            this.isLoadingProfile = true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(params => {
            return this.githubService.getProfile(params.get('username'));
        }))
            .subscribe(profile => {
            this.profile = profile;
            this.isLoadingProfile = false;
            console.log(profile);
        });
    }
};
ProfileBodyComponent.ctorParameters = () => [
    { type: _github_service__WEBPACK_IMPORTED_MODULE_2__["GithubService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
ProfileBodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-body',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-body.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile-body/profile-body.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-body.component.scss */ "./src/app/github/profile-body/profile-body.component.scss")).default]
    })
], ProfileBodyComponent);



/***/ }),

/***/ "./src/app/github/profile-content/profile-content.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/github/profile-content/profile-content.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpdGh1Yi9wcm9maWxlLWNvbnRlbnQvcHJvZmlsZS1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/github/profile-content/profile-content.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/github/profile-content/profile-content.component.ts ***!
  \*********************************************************************/
/*! exports provided: ProfileContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileContentComponent", function() { return ProfileContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProfileContentComponent = class ProfileContentComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile-content/profile-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile-content.component.scss */ "./src/app/github/profile-content/profile-content.component.scss")).default]
    })
], ProfileContentComponent);



/***/ }),

/***/ "./src/app/github/profile/profile.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/github/profile/profile.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-container {\n  max-width: 860px;\n  min-height: 600px;\n  background: #e3edf0;\n  margin: 3rem auto;\n}\n@media (max-width: 900px) {\n  .profile-container {\n    max-width: 100%;\n    margin: 0;\n    min-height: 100%;\n  }\n}\n.header__label {\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .header__label {\n    display: none;\n  }\n}\n.header__search {\n  flex: 2;\n  padding: 0 2rem;\n}\n.header__fill {\n  flex: 1;\n}\n@media (max-width: 600px) {\n  .header__fill {\n    display: none;\n  }\n}\n.profile-content {\n  display: flex;\n  height: 600px;\n}\n@media (max-width: 900px) {\n  .profile-content {\n    min-height: calc(100vh - 64px);\n  }\n}\n.profile-content__sidebar {\n  flex: 1;\n  background: #eef2f3;\n  overflow: scroll;\n}\n@media (max-width: 900px) {\n  .profile-content__sidebar {\n    min-height: calc(100vh - 64px);\n  }\n}\n@media (max-width: 760px) {\n  .profile-content__sidebar {\n    flex: 0 0 200px;\n  }\n}\n@media (max-width: 600px) {\n  .profile-content__sidebar {\n    flex: 0 0 130px;\n  }\n}\n.profile-content__body {\n  flex: 3;\n  background: #e4e8e9;\n  overflow: hidden;\n}\n@media (max-width: 900px) {\n  .profile-content__body {\n    min-height: calc(100vh - 64px);\n  }\n}\n@media (max-width: 760px) {\n  .profile-content__body {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    padding: 0;\n    min-height: calc(40vh - 64px);\n  }\n}\n.profile-content__list {\n  display: flex;\n  flex-direction: column;\n}\n.profile-content__image-container {\n  flex: 1;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.profile-content__image-container > img {\n  width: 100%;\n}\n.profile-content__name {\n  flex: 3;\n  margin-left: 1rem;\n}\n.spinner-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uaWtvbGF5L0Rlc2t0b3Avd2ViL2FuZ3VsYXIvZ2l0aHViLWFwaS1hbmd1bGFyLWFwcC9zcmMvYXBwL2dpdGh1Yi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dpdGh1Yi9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NKO0FESUk7RUFUSjtJQVVRLGVBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUNETjtBQUNGO0FEZUk7RUFDSSxPQUFBO0FDWlI7QURhUTtFQUZKO0lBR1EsYUFBQTtFQ1ZWO0FBQ0Y7QURZSTtFQUNJLE9BQUE7RUFDQSxlQUFBO0FDVlI7QURZSTtFQUNJLE9BQUE7QUNWUjtBRFlRO0VBSEo7SUFJUSxhQUFBO0VDVFY7QUFDRjtBRGdCQTtFQUNJLGFBQUE7RUFJQSxhQUFBO0FDaEJKO0FEa0JJO0VBUEo7SUFRUSw4QkFBQTtFQ2ZOO0FBQ0Y7QURrQkk7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ2hCUjtBRG1CUTtFQU5KO0lBT1EsOEJBQUE7RUNoQlY7QUFDRjtBRG1CUTtFQVhKO0lBWVEsZUFBQTtFQ2hCVjtBQUNGO0FEaUJRO0VBZEo7SUFlUSxlQUFBO0VDZFY7QUFDRjtBRGtCSTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtFQWNBLGdCQUFBO0FDN0JSO0FEaUJRO0VBSko7SUFLUSw4QkFBQTtFQ2RWO0FBQ0Y7QURnQlE7RUFSSjtJQVNRLE9BQUE7SUFFQSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxVQUFBO0lBQ0EsNkJBQUE7RUNkVjtBQUNGO0FEa0JJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDaEJSO0FEcUJJO0VBQ0ksT0FBQTtFQUlBLG1CQUFBO0VBQ0EsZ0JBQUE7QUN0QlI7QURrQlE7RUFDSSxXQUFBO0FDaEJaO0FEc0JJO0VBQ0ksT0FBQTtFQUNBLGlCQUFBO0FDcEJSO0FENEJBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDekJKIiwiZmlsZSI6InNyYy9hcHAvZ2l0aHViL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWNvbnRhaW5lcntcbiAgICBtYXgtd2lkdGg6IDg2MHB4O1xuICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgIGJhY2tncm91bmQ6ICNlM2VkZjA7XG4gICAgbWFyZ2luOiAzcmVtIGF1dG87XG5cbiAgICAvLyBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCVcbiAgICB9XG5cbi8vIC8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIGxlc3MgdGhhbiA3NjhweClcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkgeyAuLi4gfVxuXG4vLyAvLyBNZWRpdW0gZGV2aWNlcyAodGFibGV0cywgbGVzcyB0aGFuIDk5MnB4KVxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7IC4uLiB9XG5cbi8vIC8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCBsZXNzIHRoYW4gMTIwMHB4KVxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkgeyAuLi4gfVxufVxuXG5cbi5oZWFkZXJ7XG4gICAgJl9fbGFiZWx7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmX19zZWFyY2h7XG4gICAgICAgIGZsZXg6IDI7XG4gICAgICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICB9XG4gICAgJl9fZmlsbHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XG4gICAgICAgIC8vIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAvLyBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cbn1cblxuLnByb2ZpbGUtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgIC8vIGJhY2tncm91bmQ6IGhvbmV5ZGV3O1xuICAgIGhlaWdodDogNjAwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgIH1cblxuXG4gICAgJl9fc2lkZWJhcntcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZjJmMztcbiAgICAgICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICAgICAgLy8gcGFkZGluZzogMXJlbSAwO1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogIzIyMjhlOTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgICAgICAgICAgZmxleDogMCAwIDIwMHB4O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgICAgZmxleDogMCAwIDEzMHB4O1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAmX19ib2R5e1xuICAgICAgICBmbGV4OiAzO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTRlOGU5O1xuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2UxOThlOTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDB2aCAtIDY0cHgpO1xuICAgICAgICB9XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8vIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICAgIC8vIGJhY2tncm91bmQ6IGNoYXJ0cmV1c2U7XG4gICAgfVxuXG4gICAgJl9faW1hZ2UtY29udGFpbmVye1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICAmID4gaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAmX19uYW1le1xuICAgICAgICBmbGV4OiAzO1xuICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgLy8gcGFkZGluZzogLjNyZW0gMDtcbiAgICB9XG5cblxufVxuXG5cbi5zcGlubmVyLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG5cbi5zcGlubmVye1xuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyB0b3A6IC01MCU7XG4gICAgLy8gbGVmdDogLTUwJTtcbiAgICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn0iLCIucHJvZmlsZS1jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDg2MHB4O1xuICBtaW4taGVpZ2h0OiA2MDBweDtcbiAgYmFja2dyb3VuZDogI2UzZWRmMDtcbiAgbWFyZ2luOiAzcmVtIGF1dG87XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnByb2ZpbGUtY29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIH1cbn1cblxuLmhlYWRlcl9fbGFiZWwge1xuICBmbGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5oZWFkZXJfX2xhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uaGVhZGVyX19zZWFyY2gge1xuICBmbGV4OiAyO1xuICBwYWRkaW5nOiAwIDJyZW07XG59XG4uaGVhZGVyX19maWxsIHtcbiAgZmxleDogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuaGVhZGVyX19maWxsIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5wcm9maWxlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDYwMHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5wcm9maWxlLWNvbnRlbnQge1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbiAgfVxufVxuLnByb2ZpbGUtY29udGVudF9fc2lkZWJhciB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQ6ICNlZWYyZjM7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnByb2ZpbGUtY29udGVudF9fc2lkZWJhciB7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzYwcHgpIHtcbiAgLnByb2ZpbGUtY29udGVudF9fc2lkZWJhciB7XG4gICAgZmxleDogMCAwIDIwMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnByb2ZpbGUtY29udGVudF9fc2lkZWJhciB7XG4gICAgZmxleDogMCAwIDEzMHB4O1xuICB9XG59XG4ucHJvZmlsZS1jb250ZW50X19ib2R5IHtcbiAgZmxleDogMztcbiAgYmFja2dyb3VuZDogI2U0ZThlOTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5MDBweCkge1xuICAucHJvZmlsZS1jb250ZW50X19ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjRweCk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAucHJvZmlsZS1jb250ZW50X19ib2R5IHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNDB2aCAtIDY0cHgpO1xuICB9XG59XG4ucHJvZmlsZS1jb250ZW50X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wcm9maWxlLWNvbnRlbnRfX2ltYWdlLWNvbnRhaW5lciB7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucHJvZmlsZS1jb250ZW50X19pbWFnZS1jb250YWluZXIgPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9maWxlLWNvbnRlbnRfX25hbWUge1xuICBmbGV4OiAzO1xuICBtYXJnaW4tbGVmdDogMXJlbTtcbn1cblxuLnNwaW5uZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/github/profile/profile.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/github/profile/profile.component.ts ***!
  \*****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _github_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../github.service */ "./src/app/github/github.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(route, githubService) {
        this.route = route;
        this.githubService = githubService;
        this.isLoading = false;
    }
    ngOnInit() {
        this.route.queryParamMap.subscribe((params) => {
            this.username = params.get('username');
        });
    }
    onKey(event) {
        const inputValue = event.target.value;
        this.isLoading = true;
        this.githubService.searchProfiles(inputValue)
            .subscribe(items => {
            this.profiles = items.items;
            this.isLoading = false;
        });
        event.target.value = '';
    }
    search() {
        this.isLoading = true;
        this.githubService.searchProfiles(this.name)
            .subscribe(items => {
            this.profiles = items.items;
            this.isLoading = false;
        });
        this.name = '';
    }
    getProfile(profile) {
        this.singleProfile = profile;
        // console.log(profile)
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _github_service__WEBPACK_IMPORTED_MODULE_3__["GithubService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/github/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.scss */ "./src/app/github/profile/profile.component.scss")).default]
    })
], ProfileComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    url: 'https://api.github.com/search/users?q=',
    githubUrl: 'https://api.github.com'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nikolay/Desktop/web/angular/github-api-angular-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map