(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Fullscreen Map Starts-->\r\n<section id=\"fullscreenMap\" class=\"mb-3\">\r\n    <div class=\"row\">\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px;\r\n        background-color: rgb(229, 227, 223);\">\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n        </agm-map>\r\n    </div>\r\n</section>\r\n<!--Fullscreen Map Ends-->"

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: FullScreenMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapComponent", function() { return FullScreenMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FullScreenMapComponent = /** @class */ (function () {
    function FullScreenMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FullScreenMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-full-screen-map',
            template: __webpack_require__(/*! ./full-screen-map.component.html */ "./src/app/maps/full-screen-map/full-screen-map.component.html"),
            styles: [__webpack_require__(/*! ./full-screen-map.component.scss */ "./src/app/maps/full-screen-map/full-screen-map.component.scss")]
        })
    ], FullScreenMapComponent);
    return FullScreenMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.html":
/*!***********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Basic google map starts-->\r\n<section id=\"map\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"content-header\">Google Map</div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"card-block mt-2\">\r\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\r\n                        </agm-map>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!--Basic google map ends-->"

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-google-map',
            template: __webpack_require__(/*! ./google-map.component.html */ "./src/app/maps/google-map/google-map.component.html"),
            styles: [__webpack_require__(/*! ./google-map.component.scss */ "./src/app/maps/google-map/google-map.component.scss")],
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/maps/maps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_2__["FullScreenMapComponent"],
                data: {
                    title: 'Full Screen Map'
                }
            },
            {
                path: 'google',
                component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_3__["GoogleMapComponent"],
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], MapsRoutingModule);
    return MapsRoutingModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maps-routing.module */ "./src/app/maps/maps-routing.module.ts");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_3__["MapsRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_2__["AgmCoreModule"]
            ],
            declarations: [
                _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_4__["FullScreenMapComponent"],
                _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_5__["GoogleMapComponent"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map