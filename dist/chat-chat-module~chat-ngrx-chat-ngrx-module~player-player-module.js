(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module~chat-ngrx-chat-ngrx-module~player-player-module"],{

/***/ "./node_modules/videogular2/buffering.js":
/*!***********************************************!*\
  !*** ./node_modules/videogular2/buffering.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/buffering/buffering */ "./node_modules/videogular2/src/buffering/buffering.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsK0NBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvYnVmZmVyaW5nL2J1ZmZlcmluZyc7XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/controls.js":
/*!**********************************************!*\
  !*** ./node_modules/videogular2/controls.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/controls/controls */ "./node_modules/videogular2/src/controls/controls.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDZDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vc3JjL2NvbnRyb2xzL2NvbnRyb2xzJztcbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/core.js":
/*!******************************************!*\
  !*** ./node_modules/videogular2/core.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/core/core */ "./node_modules/videogular2/src/core/core.js"));
// CustomEvent polyfill for IE9/10/11
(function () {
    if (typeof window === "undefined" || typeof window['CustomEvent'] === "function")
        return false;
    function CustomEvent(event, params) {
        params = params || { bubbles: false, cancelable: false, detail: undefined };
        var evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt;
    }
    CustomEvent.prototype = window['Event'].prototype;
    window['CustomEvent'] = CustomEvent;
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQ0FBZ0M7O0FBR2hDLENBQUM7SUFFRyxFQUFFLENBQUMsQ0FBRSxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksT0FBTyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssVUFBVyxDQUFDO1FBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUVqRyxxQkFBdUIsS0FBSyxFQUFFLE1BQU07UUFDaEMsTUFBTSxHQUFHLE1BQU0sSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7UUFDNUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBRSxhQUFhLENBQUUsQ0FBQztRQUNoRCxHQUFHLENBQUMsZUFBZSxDQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDO1FBQy9FLE1BQU0sQ0FBQyxHQUFHLENBQUM7S0FDZDtJQUVELFdBQVcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUVsRCxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsV0FBVyxDQUFDO0NBQ3ZDLENBQUMsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvY29yZS9jb3JlJztcblxuLy8gQ3VzdG9tRXZlbnQgcG9seWZpbGwgZm9yIElFOS8xMC8xMVxuKGZ1bmN0aW9uICgpIHtcblxuICAgIGlmICggdHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlb2Ygd2luZG93WydDdXN0b21FdmVudCddID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBDdXN0b21FdmVudCAoIGV2ZW50LCBwYXJhbXMgKSB7XG4gICAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7IGJ1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZSwgZGV0YWlsOiB1bmRlZmluZWQgfTtcbiAgICAgICAgdmFyIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCAnQ3VzdG9tRXZlbnQnICk7XG4gICAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoIGV2ZW50LCBwYXJhbXMuYnViYmxlcywgcGFyYW1zLmNhbmNlbGFibGUsIHBhcmFtcy5kZXRhaWwgKTtcbiAgICAgICAgcmV0dXJuIGV2dDtcbiAgICB9XG5cbiAgICBDdXN0b21FdmVudC5wcm90b3R5cGUgPSB3aW5kb3dbJ0V2ZW50J10ucHJvdG90eXBlO1xuXG4gICAgd2luZG93WydDdXN0b21FdmVudCddID0gQ3VzdG9tRXZlbnQ7XG59KSgpO1xuIl19

/***/ }),

/***/ "./node_modules/videogular2/overlay-play.js":
/*!**************************************************!*\
  !*** ./node_modules/videogular2/overlay-play.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./src/overlay-play/overlay-play */ "./node_modules/videogular2/src/overlay-play/overlay-play.js"));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi9zcmMvb3ZlcmxheS1wbGF5L292ZXJsYXktcGxheSc7XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/buffering/buffering.js":
/*!*************************************************************!*\
  !*** ./node_modules/videogular2/src/buffering/buffering.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_buffering_1 = __webpack_require__(/*! ./vg-buffering */ "./node_modules/videogular2/src/buffering/vg-buffering.js");
var VgBufferingModule = /** @class */ (function () {
    function VgBufferingModule() {
    }
    VgBufferingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_buffering_1.VgBuffering
                    ],
                    exports: [
                        vg_buffering_1.VgBuffering
                    ]
                },] },
    ];
    return VgBufferingModule;
}());
exports.VgBufferingModule = VgBufferingModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQywrQ0FBNkM7Ozs7O2dCQUU1QyxlQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFO3dCQUNWLDBCQUFXO3FCQUNkO29CQUNELE9BQU8sRUFBRTt3QkFDTCwwQkFBVztxQkFDZDtpQkFDSjs7NEJBYkQ7O0FBY2EsOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFZnQnVmZmVyaW5nIH0gZnJvbSAnLi92Zy1idWZmZXJpbmcnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZnQnVmZmVyaW5nXG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnQnVmZmVyaW5nXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0J1ZmZlcmluZ01vZHVsZSB7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/buffering/vg-buffering.js":
/*!****************************************************************!*\
  !*** ./node_modules/videogular2/src/buffering/vg-buffering.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgBuffering = /** @class */ (function () {
    function VgBuffering(ref, API) {
        this.API = API;
        this.checkInterval = 50;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgBuffering.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgBuffering.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgBuffering.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgBuffering.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgBuffering.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-buffering',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-buffering\">\n            <div class=\"bufferingContainer\">\n                <div class=\"loadingSpinner\"></div>\n            </div>\n        </div>",
                    styles: ["\n        vg-buffering {\n            display: none;\n            z-index: 201;\n        }\n\n        vg-buffering.is-buffering {\n            display: block;\n        }\n        \n        .vg-buffering {\n            position: absolute;\n            display: block;\n            width: 100%;\n            height: 100%;\n        }\n\n        .vg-buffering .bufferingContainer {\n            width: 100%;\n            position: absolute;\n            cursor: pointer;\n            top: 50%;\n            margin-top: -50px;\n\n            zoom: 1;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        /* Loading Spinner\n        * http://www.alessioatzeni.com/blog/css3-loading-animation-loop/\n        */\n        .vg-buffering .loadingSpinner {\n            background-color: rgba(0, 0, 0, 0);\n            border: 5px solid rgba(255, 255, 255, 1);\n            opacity: .9;\n            border-top: 5px solid rgba(0, 0, 0, 0);\n            border-left: 5px solid rgba(0, 0, 0, 0);\n            border-radius: 50px;\n            box-shadow: 0 0 35px #FFFFFF;\n            width: 50px;\n            height: 50px;\n            margin: 0 auto;\n            -moz-animation: spin .5s infinite linear;\n            -webkit-animation: spin .5s infinite linear;\n        }\n\n        .vg-buffering .loadingSpinner .stop {\n            -webkit-animation-play-state: paused;\n            -moz-animation-play-state: paused;\n        }\n\n        @-moz-keyframes spin {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(360deg);\n            }\n        }\n\n        @-moz-keyframes spinoff {\n            0% {\n                -moz-transform: rotate(0deg);\n            }\n            100% {\n                -moz-transform: rotate(-360deg);\n            }\n        }\n\n        @-webkit-keyframes spin {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(360deg);\n            }\n        }\n\n        @-webkit-keyframes spinoff {\n            0% {\n                -webkit-transform: rotate(0deg);\n            }\n            100% {\n                -webkit-transform: rotate(-360deg);\n            }\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgBuffering.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgBuffering.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "isBuffering": [{ type: core_1.HostBinding, args: ['class.is-buffering',] },],
    };
    return VgBuffering;
}());
exports.VgBuffering = VgBuffering;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYnVmZmVyaW5nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYnVmZmVyaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdIO0FBQ2hILGtEQUFnRDs7SUFtSDVDLHFCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFSdEIsRUFBRTs4QkFDRCxDQUFDOzJCQUNKLENBQUM7NkJBRVMsRUFBRTsyQkFFd0IsS0FBSztRQUczRCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCw4QkFBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUNsRSxDQUFDO1NBQ0w7S0FDSjtJQUVELG1DQUFhLEdBQWI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUM5QyxVQUFBLFdBQVcsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQWhDLENBQWdDLENBQ2xELENBQ0osQ0FBQztLQUNMO0lBRUQsb0NBQWMsR0FBZCxVQUFlLFdBQVc7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7S0FDbEM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQTdJSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxjQUFjO29CQUN4QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHdLQUlDO29CQUNYLE1BQU0sRUFBRSxDQUFFLHl4RUF1RlQsQ0FBRTtpQkFDTjs7OztnQkF0R21CLGlCQUFVO2dCQUNyQixjQUFLOzs7MEJBdUdULFlBQUs7Z0NBVUwsa0JBQVcsU0FBQyxvQkFBb0I7O3NCQWxIckM7O0FBdUdhLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBJUGxheWFibGUgfSBmcm9tICcuLi9jb3JlL3ZnLW1lZGlhL2ktcGxheWFibGUnO1xuaW1wb3J0IHsgVmdTdGF0ZXMgfSBmcm9tICcuLi9jb3JlL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctYnVmZmVyaW5nJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInZnLWJ1ZmZlcmluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1ZmZlcmluZ0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkaW5nU3Bpbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB6LWluZGV4OiAyMDE7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1idWZmZXJpbmcuaXMtYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAudmctYnVmZmVyaW5nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudmctYnVmZmVyaW5nIC5idWZmZXJpbmdDb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC01MHB4O1xuXG4gICAgICAgICAgICB6b29tOiAxO1xuICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIExvYWRpbmcgU3Bpbm5lclxuICAgICAgICAqIGh0dHA6Ly93d3cuYWxlc3Npb2F0emVuaS5jb20vYmxvZy9jc3MzLWxvYWRpbmctYW5pbWF0aW9uLWxvb3AvXG4gICAgICAgICovXG4gICAgICAgIC52Zy1idWZmZXJpbmcgLmxvYWRpbmdTcGlubmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogLjk7XG4gICAgICAgICAgICBib3JkZXItdG9wOiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMzVweCAjRkZGRkZGO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBzcGluIC41cyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAuNXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZnLWJ1ZmZlcmluZyAubG9hZGluZ1NwaW5uZXIgLnN0b3Age1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICAgICAgICAgLW1vei1hbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xuICAgICAgICB9XG5cbiAgICAgICAgQC1tb3ota2V5ZnJhbWVzIHNwaW4ge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALW1vei1rZXlmcmFtZXMgc3Bpbm9mZiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzcGlub2ZmIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ0J1ZmZlcmluZyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBJUGxheWFibGU7XG4gICAgY2hlY2tJbnRlcnZhbDogbnVtYmVyID0gNTA7XG4gICAgY3VycmVudFBsYXlQb3M6IG51bWJlciA9IDA7XG4gICAgbGFzdFBsYXlQb3M6IG51bWJlciA9IDA7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1idWZmZXJpbmcnKSBpc0J1ZmZlcmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgdGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zdWJzY3JpcHRpb25zLmJ1ZmZlckRldGVjdGVkLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICBpc0J1ZmZlcmluZyA9PiB0aGlzLm9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKVxuICAgICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uVXBkYXRlQnVmZmVyKGlzQnVmZmVyaW5nKSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJpbmcgPSBpc0J1ZmZlcmluZztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/controls.js":
/*!***********************************************************!*\
  !*** ./node_modules/videogular2/src/controls/controls.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_controls_1 = __webpack_require__(/*! ./vg-controls */ "./node_modules/videogular2/src/controls/vg-controls.js");
var vg_fullscreen_1 = __webpack_require__(/*! ./vg-fullscreen/vg-fullscreen */ "./node_modules/videogular2/src/controls/vg-fullscreen/vg-fullscreen.js");
var vg_mute_1 = __webpack_require__(/*! ./vg-mute/vg-mute */ "./node_modules/videogular2/src/controls/vg-mute/vg-mute.js");
var vg_volume_1 = __webpack_require__(/*! ./vg-volume/vg-volume */ "./node_modules/videogular2/src/controls/vg-volume/vg-volume.js");
var vg_play_pause_1 = __webpack_require__(/*! ./vg-play-pause/vg-play-pause */ "./node_modules/videogular2/src/controls/vg-play-pause/vg-play-pause.js");
var vg_playback_button_1 = __webpack_require__(/*! ./vg-playback-button/vg-playback-button */ "./node_modules/videogular2/src/controls/vg-playback-button/vg-playback-button.js");
var vg_scrub_bar_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar.js");
var vg_scrub_bar_buffering_time_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.js");
var vg_scrub_bar_cue_points_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.js");
var vg_scrub_bar_current_time_1 = __webpack_require__(/*! ./vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time */ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.js");
var vg_time_display_1 = __webpack_require__(/*! ./vg-time-display/vg-time-display */ "./node_modules/videogular2/src/controls/vg-time-display/vg-time-display.js");
var vg_track_selector_1 = __webpack_require__(/*! ./vg-track-selector/vg-track-selector */ "./node_modules/videogular2/src/controls/vg-track-selector/vg-track-selector.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var vg_quality_selector_1 = __webpack_require__(/*! ./vg-quality-selector/vg-quality-selector */ "./node_modules/videogular2/src/controls/vg-quality-selector/vg-quality-selector.js");
var VgControlsModule = /** @class */ (function () {
    function VgControlsModule() {
    }
    VgControlsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector,
                        vg_quality_selector_1.VgQualitySelector
                    ],
                    exports: [
                        vg_controls_1.VgControls,
                        vg_fullscreen_1.VgFullscreen,
                        vg_mute_1.VgMute,
                        vg_volume_1.VgVolume,
                        vg_play_pause_1.VgPlayPause,
                        vg_playback_button_1.VgPlaybackButton,
                        vg_scrub_bar_1.VgScrubBar,
                        vg_scrub_bar_buffering_time_1.VgScrubBarBufferingTime,
                        vg_scrub_bar_cue_points_1.VgScrubBarCuePoints,
                        vg_scrub_bar_current_time_1.VgScrubBarCurrentTime,
                        vg_time_display_1.VgTimeDisplay,
                        vg_time_display_1.VgUtcPipe,
                        vg_track_selector_1.VgTrackSelector,
                        vg_quality_selector_1.VgQualitySelector
                    ],
                    providers: [vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    return VgControlsModule;
}());
exports.VgControlsModule = VgControlsModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QywwQ0FBK0M7QUFDL0MsNkNBQTJDO0FBQzNDLCtEQUE2RDtBQUM3RCw2Q0FBMkM7QUFDM0MsbURBQWlEO0FBQ2pELCtEQUE0RDtBQUM1RCw4RUFBMkU7QUFDM0UsNERBQXlEO0FBQ3pELHNIQUFpSDtBQUNqSCwwR0FBcUc7QUFDckcsZ0hBQTJHO0FBQzNHLHFFQUE2RTtBQUM3RSwyRUFBd0U7QUFDeEUsMEVBQXVFO0FBQ3ZFLGlGQUE4RTs7Ozs7Z0JBRTdFLGVBQVEsU0FBQztvQkFDTixPQUFPLEVBQUUsQ0FBRSxxQkFBWSxDQUFFO29CQUN6QixZQUFZLEVBQUU7d0JBQ1Ysd0JBQVU7d0JBQ1YsNEJBQVk7d0JBQ1osZ0JBQU07d0JBQ04sb0JBQVE7d0JBQ1IsMkJBQVc7d0JBQ1gscUNBQWdCO3dCQUNoQix5QkFBVTt3QkFDVixxREFBdUI7d0JBQ3ZCLDZDQUFtQjt3QkFDbkIsaURBQXFCO3dCQUNyQiwrQkFBYTt3QkFDYiwyQkFBUzt3QkFDVCxtQ0FBZTt3QkFDZix1Q0FBaUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDTCx3QkFBVTt3QkFDViw0QkFBWTt3QkFDWixnQkFBTTt3QkFDTixvQkFBUTt3QkFDUiwyQkFBVzt3QkFDWCxxQ0FBZ0I7d0JBQ2hCLHlCQUFVO3dCQUNWLHFEQUF1Qjt3QkFDdkIsNkNBQW1CO3dCQUNuQixpREFBcUI7d0JBQ3JCLCtCQUFhO3dCQUNiLDJCQUFTO3dCQUNULG1DQUFlO3dCQUNmLHVDQUFpQjtxQkFDcEI7b0JBQ0QsU0FBUyxFQUFFLENBQUUscUNBQWdCLENBQUU7aUJBQ2xDOzsyQkFwREQ7O0FBcURhLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgVmdDb250cm9scyB9IGZyb20gJy4vdmctY29udHJvbHMnO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuL3ZnLWZ1bGxzY3JlZW4nO1xuaW1wb3J0IHsgVmdNdXRlIH0gZnJvbSAnLi92Zy1tdXRlL3ZnLW11dGUnO1xuaW1wb3J0IHsgVmdWb2x1bWUgfSBmcm9tICcuL3ZnLXZvbHVtZS92Zy12b2x1bWUnO1xuaW1wb3J0IHsgVmdQbGF5UGF1c2UgfSBmcm9tICcuL3ZnLXBsYXktcGF1c2UvdmctcGxheS1wYXVzZSc7XG5pbXBvcnQgeyBWZ1BsYXliYWNrQnV0dG9uIH0gZnJvbSAnLi92Zy1wbGF5YmFjay1idXR0b24vdmctcGxheWJhY2stYnV0dG9uJztcbmltcG9ydCB7IFZnU2NydWJCYXIgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXInO1xuaW1wb3J0IHsgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUvdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lJztcbmltcG9ydCB7IFZnU2NydWJCYXJDdWVQb2ludHMgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy92Zy1zY3J1Yi1iYXItY3VlLXBvaW50cyc7XG5pbXBvcnQgeyBWZ1NjcnViQmFyQ3VycmVudFRpbWUgfSBmcm9tICcuL3ZnLXNjcnViLWJhci92Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lL3ZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUnO1xuaW1wb3J0IHsgVmdUaW1lRGlzcGxheSwgVmdVdGNQaXBlIH0gZnJvbSAnLi92Zy10aW1lLWRpc3BsYXkvdmctdGltZS1kaXNwbGF5JztcbmltcG9ydCB7IFZnVHJhY2tTZWxlY3RvciB9IGZyb20gJy4vdmctdHJhY2stc2VsZWN0b3IvdmctdHJhY2stc2VsZWN0b3InO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcbmltcG9ydCB7IFZnUXVhbGl0eVNlbGVjdG9yIH0gZnJvbSAnLi92Zy1xdWFsaXR5LXNlbGVjdG9yL3ZnLXF1YWxpdHktc2VsZWN0b3InO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFsgQ29tbW9uTW9kdWxlIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZnQ29udHJvbHMsXG4gICAgICAgIFZnRnVsbHNjcmVlbixcbiAgICAgICAgVmdNdXRlLFxuICAgICAgICBWZ1ZvbHVtZSxcbiAgICAgICAgVmdQbGF5UGF1c2UsXG4gICAgICAgIFZnUGxheWJhY2tCdXR0b24sXG4gICAgICAgIFZnU2NydWJCYXIsXG4gICAgICAgIFZnU2NydWJCYXJCdWZmZXJpbmdUaW1lLFxuICAgICAgICBWZ1NjcnViQmFyQ3VlUG9pbnRzLFxuICAgICAgICBWZ1NjcnViQmFyQ3VycmVudFRpbWUsXG4gICAgICAgIFZnVGltZURpc3BsYXksXG4gICAgICAgIFZnVXRjUGlwZSxcbiAgICAgICAgVmdUcmFja1NlbGVjdG9yLFxuICAgICAgICBWZ1F1YWxpdHlTZWxlY3RvclxuICAgIF0sXG4gICAgZXhwb3J0czogW1xuICAgICAgICBWZ0NvbnRyb2xzLFxuICAgICAgICBWZ0Z1bGxzY3JlZW4sXG4gICAgICAgIFZnTXV0ZSxcbiAgICAgICAgVmdWb2x1bWUsXG4gICAgICAgIFZnUGxheVBhdXNlLFxuICAgICAgICBWZ1BsYXliYWNrQnV0dG9uLFxuICAgICAgICBWZ1NjcnViQmFyLFxuICAgICAgICBWZ1NjcnViQmFyQnVmZmVyaW5nVGltZSxcbiAgICAgICAgVmdTY3J1YkJhckN1ZVBvaW50cyxcbiAgICAgICAgVmdTY3J1YkJhckN1cnJlbnRUaW1lLFxuICAgICAgICBWZ1RpbWVEaXNwbGF5LFxuICAgICAgICBWZ1V0Y1BpcGUsXG4gICAgICAgIFZnVHJhY2tTZWxlY3RvcixcbiAgICAgICAgVmdRdWFsaXR5U2VsZWN0b3JcbiAgICBdLFxuICAgIHByb3ZpZGVyczogWyBWZ0NvbnRyb2xzSGlkZGVuIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdDb250cm9sc01vZHVsZSB7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-controls.js":
/*!**************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-controls.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ./../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var vg_states_1 = __webpack_require__(/*! ../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgControls = /** @class */ (function () {
    function VgControls(API, ref, hidden) {
        this.API = API;
        this.ref = ref;
        this.hidden = hidden;
        this.isAdsPlaying = 'initial';
        this.hideControls = false;
        this.vgAutohide = false;
        this.vgAutohideTime = 3;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgControls.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseMove$ = rxjs_1.fromEvent(this.API.videogularElement, 'mousemove');
        this.subscriptions.push(this.mouseMove$.subscribe(this.show.bind(this)));
        this.touchStart$ = rxjs_1.fromEvent(this.API.videogularElement, 'touchstart');
        this.subscriptions.push(this.touchStart$.subscribe(this.show.bind(this)));
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgControls.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.target.subscriptions.play.subscribe(this.onPlay.bind(this)));
        this.subscriptions.push(this.target.subscriptions.pause.subscribe(this.onPause.bind(this)));
        this.subscriptions.push(this.target.subscriptions.startAds.subscribe(this.onStartAds.bind(this)));
        this.subscriptions.push(this.target.subscriptions.endAds.subscribe(this.onEndAds.bind(this)));
    };
    VgControls.prototype.ngAfterViewInit = function () {
        if (this.vgAutohide) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    VgControls.prototype.onPlay = function () {
        if (this.vgAutohide) {
            this.hide();
        }
    };
    VgControls.prototype.onPause = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
    };
    VgControls.prototype.onStartAds = function () {
        this.isAdsPlaying = 'none';
    };
    VgControls.prototype.onEndAds = function () {
        this.isAdsPlaying = 'initial';
    };
    VgControls.prototype.hide = function () {
        if (this.vgAutohide) {
            clearTimeout(this.timer);
            this.hideAsync();
        }
    };
    VgControls.prototype.show = function () {
        clearTimeout(this.timer);
        this.hideControls = false;
        this.hidden.state(false);
        if (this.vgAutohide) {
            this.hideAsync();
        }
    };
    VgControls.prototype.hideAsync = function () {
        var _this = this;
        if (this.API.state === vg_states_1.VgStates.VG_PLAYING) {
            this.timer = setTimeout(function () {
                _this.hideControls = true;
                _this.hidden.state(true);
            }, this.vgAutohideTime * 1000);
        }
    };
    VgControls.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgControls.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-controls',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-controls {\n            position: absolute;\n            display: flex;\n            width: 100%;\n            height: 50px;\n            z-index: 300;\n            bottom: 0;\n            background-color: rgba(0, 0, 0, 0.5);\n            -webkit-transition: bottom 1s;\n            -khtml-transition: bottom 1s;\n            -moz-transition: bottom 1s;\n            -ms-transition: bottom 1s;\n            transition: bottom 1s;\n        }\n\n        vg-controls.hide {  \n            bottom: -50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgControls.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI, },
        { type: core_1.ElementRef, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgControls.propDecorators = {
        "isAdsPlaying": [{ type: core_1.HostBinding, args: ['style.pointer-events',] },],
        "hideControls": [{ type: core_1.HostBinding, args: ['class.hide',] },],
        "vgFor": [{ type: core_1.Input },],
        "vgAutohide": [{ type: core_1.Input },],
        "vgAutohideTime": [{ type: core_1.Input },],
    };
    return VgControls;
}());
exports.VgControls = VgControls;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1jb250cm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUd1QjtBQUV2QixrREFBZ0Q7QUFDaEQsNEVBQXlFO0FBRXpFLHNEQUFvRDtBQUNwRCw2QkFBK0I7O0lBOEMzQixvQkFBb0IsR0FBVSxFQUFVLEdBQWUsRUFBVSxNQUF3QjtRQUFyRSxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQWtCOzRCQWY3QixTQUFTOzRCQUNsQixLQUFLOzBCQUd6QixLQUFLOzhCQUNGLENBQUM7NkJBUUgsRUFBRTtRQUc5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsVUFBVSxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFekUsSUFBSSxDQUFDLFdBQVcsR0FBRyxnQkFBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6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QUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssS0FBSyxvQkFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQixFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDbEM7S0FDSjtJQUVELGdDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBaklKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsMkJBQTJCO29CQUNyQyxNQUFNLEVBQUUsQ0FBRSxxaEJBbUJULENBQUM7aUJBQ0w7Ozs7Z0JBOUJRLGNBQUs7Z0JBSmdCLGlCQUFVO2dCQUsvQixxQ0FBZ0I7OztpQ0FrQ3BCLGtCQUFXLFNBQUMsc0JBQXNCO2lDQUNsQyxrQkFBVyxTQUFDLFlBQVk7MEJBRXhCLFlBQUs7K0JBQ0wsWUFBSzttQ0FDTCxZQUFLOztxQkE3Q1Y7O0FBb0NhLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBBZnRlclZpZXdJbml0LCBWaWV3RW5jYXBzdWxhdGlvbixcbiAgICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSAsICBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4vLi4vY29yZS9zZXJ2aWNlcy92Zy1jb250cm9scy1oaWRkZW4nO1xuXG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQge2Zyb21FdmVudH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctY29udHJvbHMnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1jb250cm9scyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAzMDA7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgICAgICAtbW96LXRyYW5zaXRpb246IGJvdHRvbSAxcztcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMXM7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scy5oaWRlIHsgIFxuICAgICAgICAgICAgYm90dG9tOiAtNTBweDtcbiAgICAgICAgfVxuICAgIGBdXG59KVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHMgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBvaW50ZXItZXZlbnRzJykgaXNBZHNQbGF5aW5nOiBzdHJpbmcgPSAnaW5pdGlhbCc7XG4gICAgQEhvc3RCaW5kaW5nKCdjbGFzcy5oaWRlJykgaGlkZUNvbnRyb2xzOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHZnQXV0b2hpZGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASW5wdXQoKSB2Z0F1dG9oaWRlVGltZTogbnVtYmVyID0gMztcblxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcbiAgICBwcml2YXRlIGhpZGVUaW1lcjogYW55O1xuXG4gICAgbW91c2VNb3ZlJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIHRvdWNoU3RhcnQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBBUEk6IFZnQVBJLCBwcml2YXRlIHJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBoaWRkZW46IFZnQ29udHJvbHNIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMubW91c2VNb3ZlJCA9IGZyb21FdmVudCh0aGlzLkFQSS52aWRlb2d1bGFyRWxlbWVudCwgJ21vdXNlbW92ZScpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm1vdXNlTW92ZSQuc3Vic2NyaWJlKHRoaXMuc2hvdy5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0JCA9IGZyb21FdmVudCh0aGlzLkFQSS52aWRlb2d1bGFyRWxlbWVudCwgJ3RvdWNoc3RhcnQnKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50b3VjaFN0YXJ0JC5zdWJzY3JpYmUodGhpcy5zaG93LmJpbmQodGhpcykpKTtcblxuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy50YXJnZXQuc3Vic2NyaXB0aW9ucy5wbGF5LnN1YnNjcmliZSh0aGlzLm9uUGxheS5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMucGF1c2Uuc3Vic2NyaWJlKHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuc3RhcnRBZHMuc3Vic2NyaWJlKHRoaXMub25TdGFydEFkcy5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuZW5kQWRzLnN1YnNjcmliZSh0aGlzLm9uRW5kQWRzLmJpbmQodGhpcykpKTtcbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQXV0b2hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXkoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQXV0b2hpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QYXVzZSgpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB0aGlzLmhpZGVDb250cm9scyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmhpZGRlbi5zdGF0ZShmYWxzZSk7XG4gICAgfVxuXG4gICAgb25TdGFydEFkcygpIHtcbiAgICAgICAgdGhpcy5pc0Fkc1BsYXlpbmcgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgb25FbmRBZHMoKSB7XG4gICAgICAgIHRoaXMuaXNBZHNQbGF5aW5nID0gJ2luaXRpYWwnO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQXV0b2hpZGUpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgIHRoaXMuaGlkZUFzeW5jKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuaGlkZUNvbnRyb2xzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaGlkZGVuLnN0YXRlKGZhbHNlKTtcblxuICAgICAgICBpZiAodGhpcy52Z0F1dG9oaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVBc3luYygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoaWRlQXN5bmMoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5zdGF0ZSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORykge1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGlkZUNvbnRyb2xzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhpZGRlbi5zdGF0ZSh0cnVlKTtcbiAgICAgICAgICAgIH0sIHRoaXMudmdBdXRvaGlkZVRpbWUgKiAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-fullscreen/vg-fullscreen.js":
/*!******************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-fullscreen/vg-fullscreen.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../../core/services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var VgFullscreen = /** @class */ (function () {
    function VgFullscreen(ref, API, fsAPI) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.isFullscreen = false;
        this.subscriptions = [];
        this.ariaValue = 'normal mode';
        this.elem = ref.nativeElement;
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
    }
    VgFullscreen.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgFullscreen.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgFullscreen.prototype.onChangeFullscreen = function (fsState) {
        this.ariaValue = fsState ? 'fullscren mode' : 'normal mode';
        this.isFullscreen = fsState;
    };
    VgFullscreen.prototype.onClick = function () {
        this.changeFullscreenState();
    };
    VgFullscreen.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeFullscreenState();
        }
    };
    VgFullscreen.prototype.changeFullscreenState = function () {
        var element = this.target;
        if (this.target instanceof vg_api_1.VgAPI) {
            element = null;
        }
        this.fsAPI.toggleFullscreen(element);
    };
    VgFullscreen.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgFullscreen.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-fullscreen',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-fullscreen]=\"!isFullscreen\"\n             [class.vg-icon-fullscreen_exit]=\"isFullscreen\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"fullscreen button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-fullscreen {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-fullscreen .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgFullscreen.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
    ]; };
    VgFullscreen.propDecorators = {
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgFullscreen;
}());
exports.VgFullscreen = VgFullscreen;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWZ1bGxzY3JlZW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEc7QUFDMUcscURBQW1EO0FBQ25ELDJFQUF3RTs7SUFnRHBFLHNCQUFZLEdBQWUsRUFBUyxHQUFVLEVBQVMsS0FBc0I7UUFBekMsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFTLFVBQUssR0FBTCxLQUFLLENBQWlCOzRCQU5yRCxLQUFLOzZCQUVHLEVBQUU7eUJBRXRCLGFBQWE7UUFHckIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3hHO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELG9DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUVELHlDQUFrQixHQUFsQixVQUFtQixPQUFnQjtRQUMvQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztRQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztLQUMvQjtJQUdELDhCQUFPO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0lBSWpDLGdDQUFTLGFBQUMsS0FBb0I7O1FBRTFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDaEM7O0lBR0wsNENBQXFCLEdBQXJCO1FBQ0ksSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUUxQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxZQUFZLGNBQUssQ0FBQyxDQUFDLENBQUM7WUFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNsQjtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEM7SUFFRCxrQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQTdGSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO29CQUN6QixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLHNVQVFDO29CQUNYLE1BQU0sRUFBRSxDQUFFLDZpQkFvQlQsQ0FBRTtpQkFDTjs7OztnQkF2Q21CLGlCQUFVO2dCQUNyQixjQUFLO2dCQUNMLG1DQUFlOzs7NEJBdUVuQixtQkFBWSxTQUFDLE9BQU87OEJBS3BCLG1CQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzt1QkE5RXZDOztBQXdDYSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkRlc3Ryb3ksIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLWZ1bGxzY3JlZW4nLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImljb25cIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLWZ1bGxzY3JlZW5dPVwiIWlzRnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tZnVsbHNjcmVlbl9leGl0XT1cImlzRnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZnVsbHNjcmVlbiBidXR0b25cIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWV0ZXh0XT1cImFyaWFWYWx1ZVwiPlxuICAgICAgICA8L2Rpdj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLWZ1bGxzY3JlZW4ge1xuICAgICAgICAgICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xuICAgICAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1mdWxsc2NyZWVuIC5pY29uIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnRnVsbHNjcmVlbiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB2Z0Zvcjogc3RyaW5nO1xuICAgIHRhcmdldDogT2JqZWN0O1xuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGFyaWFWYWx1ZSA9ICdub3JtYWwgbW9kZSc7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJLCBwdWJsaWMgZnNBUEk6IFZnRnVsbHNjcmVlbkFQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5mc0FQSS5vbkNoYW5nZUZ1bGxzY3JlZW4uc3Vic2NyaWJlKHRoaXMub25DaGFuZ2VGdWxsc2NyZWVuLmJpbmQodGhpcykpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRnVsbHNjcmVlbihmc1N0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gZnNTdGF0ZSA/ICdmdWxsc2NyZW4gbW9kZScgOiAnbm9ybWFsIG1vZGUnO1xuICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGZzU3RhdGU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlRnVsbHNjcmVlblN0YXRlKCk7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIC8vIE9uIHByZXNzIEVudGVyICgxMykgb3IgU3BhY2UgKDMyKVxuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZUZ1bGxzY3JlZW5TdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2hhbmdlRnVsbHNjcmVlblN0YXRlKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHRoaXMudGFyZ2V0O1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCBpbnN0YW5jZW9mIFZnQVBJKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZnNBUEkudG9nZ2xlRnVsbHNjcmVlbihlbGVtZW50KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-mute/vg-mute.js":
/*!******************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-mute/vg-mute.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgMute = /** @class */ (function () {
    function VgMute(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 'unmuted';
        this.elem = ref.nativeElement;
    }
    VgMute.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgMute.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.currentVolume = this.target.volume;
    };
    VgMute.prototype.onClick = function () {
        this.changeMuteState();
    };
    VgMute.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.changeMuteState();
        }
    };
    VgMute.prototype.changeMuteState = function () {
        var volume = this.getVolume();
        if (volume === 0) {
            if (this.target.volume === 0 && this.currentVolume === 0) {
                this.currentVolume = 1;
            }
            this.target.volume = this.currentVolume;
        }
        else {
            this.currentVolume = volume;
            this.target.volume = 0;
        }
    };
    VgMute.prototype.getVolume = function () {
        var volume = this.target ? this.target.volume : 0;
        this.ariaValue = volume ? 'unmuted' : 'muted';
        return volume;
    };
    VgMute.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgMute.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-mute',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-volume_up]=\"getVolume() >= 0.75\"\n             [class.vg-icon-volume_down]=\"getVolume() >= 0.25 && getVolume() < 0.75\"\n             [class.vg-icon-volume_mute]=\"getVolume() > 0 && getVolume() < 0.25\"\n             [class.vg-icon-volume_off]=\"getVolume() === 0\"\n             tabindex=\"0\"\n             role=\"button\"\n             aria-label=\"mute button\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-mute {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-mute .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgMute.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgMute.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgMute;
}());
exports.VgMute = VgMute;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbXV0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLW11dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgscURBQW1EOztJQW1EL0MsZ0JBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPOzZCQUpkLEVBQUU7eUJBRXRCLFNBQVM7UUFHakIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQseUJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELDhCQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQzNDO0lBR0Qsd0JBQU87UUFDSCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7O0lBSTNCLDBCQUFTLGFBQUMsS0FBb0I7O1FBRTFCLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCOztJQUdMLGdDQUFlLEdBQWY7UUFDSSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFOUIsRUFBRSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztTQUMxQjtLQUNKO0lBRUQsMEJBQVMsR0FBVDtRQUNJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO1FBQzlDLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7SUFFRCw0QkFBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQXZHSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxTQUFTO29CQUNuQixhQUFhLEVBQUUsd0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLGlmQVVDO29CQUNYLE1BQU0sRUFBRSxDQUFFLGlpQkFvQlQsQ0FBRTtpQkFDTjs7OztnQkF4QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBeUNULFlBQUs7NEJBNEJMLG1CQUFZLFNBQUMsT0FBTzs4QkFLcEIsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2lCQTNFdkM7O0FBeUNhLHdCQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1tdXRlJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi12b2x1bWVfdXBdPVwiZ2V0Vm9sdW1lKCkgPj0gMC43NVwiXG4gICAgICAgICAgICAgW2NsYXNzLnZnLWljb24tdm9sdW1lX2Rvd25dPVwiZ2V0Vm9sdW1lKCkgPj0gMC4yNSAmJiBnZXRWb2x1bWUoKSA8IDAuNzVcIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXZvbHVtZV9tdXRlXT1cImdldFZvbHVtZSgpID4gMCAmJiBnZXRWb2x1bWUoKSA8IDAuMjVcIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXZvbHVtZV9vZmZdPVwiZ2V0Vm9sdW1lKCkgPT09IDBcIlxuICAgICAgICAgICAgIHRhYmluZGV4PVwiMFwiXG4gICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm11dGUgYnV0dG9uXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1tdXRlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctbXV0ZSAuaWNvbiB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ011dGUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIGN1cnJlbnRWb2x1bWU6IG51bWJlcjtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBhcmlhVmFsdWUgPSAndW5tdXRlZCc7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgICAgIHRoaXMuY3VycmVudFZvbHVtZSA9IHRoaXMudGFyZ2V0LnZvbHVtZTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdjbGljaycpXG4gICAgb25DbGljaygpIHtcbiAgICAgICAgdGhpcy5jaGFuZ2VNdXRlU3RhdGUoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gT24gcHJlc3MgRW50ZXIgKDEzKSBvciBTcGFjZSAoMzIpXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlTXV0ZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGFuZ2VNdXRlU3RhdGUoKSB7XG4gICAgICAgIGxldCB2b2x1bWUgPSB0aGlzLmdldFZvbHVtZSgpO1xuXG4gICAgICAgIGlmICh2b2x1bWUgPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRhcmdldC52b2x1bWUgPT09IDAgJiYgdGhpcy5jdXJyZW50Vm9sdW1lID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Vm9sdW1lID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy50YXJnZXQudm9sdW1lID0gdGhpcy5jdXJyZW50Vm9sdW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Vm9sdW1lID0gdm9sdW1lO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQudm9sdW1lID0gMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFZvbHVtZSgpIHtcbiAgICAgICAgY29uc3Qgdm9sdW1lID0gdGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC52b2x1bWUgOiAwO1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHZvbHVtZSA/ICd1bm11dGVkJyA6ICdtdXRlZCc7XG4gICAgICAgIHJldHVybiB2b2x1bWU7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-play-pause/vg-play-pause.js":
/*!******************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-play-pause/vg-play-pause.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_states_1 = __webpack_require__(/*! ../../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var VgPlayPause = /** @class */ (function () {
    function VgPlayPause(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = vg_states_1.VgStates.VG_PAUSED;
        this.elem = ref.nativeElement;
    }
    VgPlayPause.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlayPause.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlayPause.prototype.onClick = function () {
        this.playPause();
    };
    VgPlayPause.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.playPause();
        }
    };
    VgPlayPause.prototype.playPause = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgPlayPause.prototype.getState = function () {
        this.ariaValue = this.target ? this.target.state : vg_states_1.VgStates.VG_PAUSED;
        return this.ariaValue;
    };
    VgPlayPause.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayPause.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-play-pause',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"icon\"\n             [class.vg-icon-pause]=\"getState() === 'playing'\"\n             [class.vg-icon-play_arrow]=\"getState() === 'paused' || getState() === 'ended'\"\n             tabindex=\"0\"\n             role=\"button\"\n             [attr.aria-label]=\"getState() === 'paused'?'play':'pause'\"\n             [attr.aria-valuetext]=\"ariaValue\">\n        </div>",
                    styles: ["\n        vg-play-pause {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -khtml-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n\n        vg-play-pause .icon {\n            pointer-events: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlayPause.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgPlayPause.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgPlayPause;
}());
exports.VgPlayPause = VgPlayPause;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheS1wYXVzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXBsYXktcGF1c2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUg7QUFDakgscURBQW1EO0FBQ25ELHlEQUF1RDs7SUErQ25ELHFCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFKZCxFQUFFO3lCQUV0QixvQkFBUSxDQUFDLFNBQVM7UUFHMUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQsOEJBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELG1DQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUdELDZCQUFPO1FBQ0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDOztJQUlyQiwrQkFBUyxhQUFDLEtBQW9COztRQUUxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUNwQjs7SUFHTCwrQkFBUyxHQUFUO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRTVCLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDWixLQUFLLG9CQUFRLENBQUMsVUFBVTtnQkFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDcEIsS0FBSyxDQUFDO1lBRVYsS0FBSyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUN4QixLQUFLLG9CQUFRLENBQUMsUUFBUTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSyxDQUFDO1NBQ2I7S0FDSjtJQUVELDhCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQkFBUSxDQUFDLFNBQVMsQ0FBQztRQUN0RSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN6QjtJQUVELGlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBakdKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsd1lBUUM7b0JBQ1gsTUFBTSxFQUFFLENBQUUsNmlCQW9CVCxDQUFFO2lCQUNOOzs7O2dCQXRDbUIsaUJBQVU7Z0JBQ3JCLGNBQUs7OzswQkF1Q1QsWUFBSzs0QkEwQkwsbUJBQVksU0FBQyxPQUFPOzhCQUtwQixtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7c0JBdkV2Qzs7QUF1Q2Esa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBJbnB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1wbGF5LXBhdXNlJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpY29uXCJcbiAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1wYXVzZV09XCJnZXRTdGF0ZSgpID09PSAncGxheWluZydcIlxuICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLXBsYXlfYXJyb3ddPVwiZ2V0U3RhdGUoKSA9PT0gJ3BhdXNlZCcgfHwgZ2V0U3RhdGUoKSA9PT0gJ2VuZGVkJ1wiXG4gICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImdldFN0YXRlKCkgPT09ICdwYXVzZWQnPydwbGF5JzoncGF1c2UnXCJcbiAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1wbGF5LXBhdXNlIHtcbiAgICAgICAgICAgIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgdmctcGxheS1wYXVzZSAuaWNvbiB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1BsYXlQYXVzZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgYXJpYVZhbHVlID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnBsYXlQYXVzZSgpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgICAgICAvLyBPbiBwcmVzcyBFbnRlciAoMTMpIG9yIFNwYWNlICgzMilcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5wbGF5UGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYXlQYXVzZSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gdGhpcy5nZXRTdGF0ZSgpO1xuXG4gICAgICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfUExBWUlORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFZnU3RhdGVzLlZHX1BBVVNFRDpcbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfRU5ERUQ6XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U3RhdGUoKSB7XG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gdGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5zdGF0ZSA6IFZnU3RhdGVzLlZHX1BBVVNFRDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJpYVZhbHVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-playback-button/vg-playback-button.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-playback-button/vg-playback-button.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgPlaybackButton = /** @class */ (function () {
    function VgPlaybackButton(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.ariaValue = 1;
        this.elem = ref.nativeElement;
        this.playbackValues = ['0.5', '1.0', '1.5', '2.0'];
        this.playbackIndex = 1;
    }
    VgPlaybackButton.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgPlaybackButton.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgPlaybackButton.prototype.onClick = function () {
        this.updatePlaybackSpeed();
    };
    VgPlaybackButton.prototype.onKeyDown = function (event) {
        // On press Enter (13) or Space (32)
        if (event.keyCode === 13 || event.keyCode === 32) {
            event.preventDefault();
            this.updatePlaybackSpeed();
        }
    };
    VgPlaybackButton.prototype.updatePlaybackSpeed = function () {
        this.playbackIndex = ++this.playbackIndex % this.playbackValues.length;
        if (this.target instanceof vg_api_1.VgAPI) {
            this.target.playbackRate = (this.playbackValues[this.playbackIndex]);
        }
        else {
            this.target.playbackRate[this.vgFor] = (this.playbackValues[this.playbackIndex]);
        }
    };
    VgPlaybackButton.prototype.getPlaybackRate = function () {
        this.ariaValue = this.target ? this.target.playbackRate : 1.0;
        return this.ariaValue;
    };
    VgPlaybackButton.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlaybackButton.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-playback-button',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n    <span class=\"button\"\n          tabindex=\"0\"\n          role=\"button\"\n          aria-label=\"playback speed button\"\n          [attr.aria-valuetext]=\"ariaValue\">\n        {{getPlaybackRate()}}x\n    </span>",
                    styles: ["\n        vg-playback-button {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n\n        vg-playback-button .button {\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgPlaybackButton.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgPlaybackButton.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "playbackValues": [{ type: core_1.Input },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
        "onKeyDown": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgPlaybackButton;
}());
exports.VgPlaybackButton = VgPlaybackButton;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWJhY2stYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWJhY2stYnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlIO0FBQ2pILHFEQUFtRDs7SUFvRC9DLDBCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFKZCxFQUFFO3lCQUV0QixDQUFDO1FBR1QsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztLQUMxQjtJQUVELG1DQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCx3Q0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFHRCxrQ0FBTztRQUNILElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDOztJQUkvQixvQ0FBUyxhQUFDLEtBQW9COztRQUUxQixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQzlCOztJQUdMLDhDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBRXZFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLFlBQVksY0FBSyxDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFFLElBQUksQ0FBQyxLQUFLLENBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBRSxDQUFDLENBQUM7U0FDeEY7S0FDSjtJQUVELDBDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDOUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDekI7SUFFRCxzQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQXBHSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ09BT0Y7b0JBQ1IsTUFBTSxFQUFFLENBQUUscXJCQXVCVCxDQUFFO2lCQUNOOzs7O2dCQXZDMEIsaUJBQVU7Z0JBQzVCLGNBQUs7OzswQkF3Q1QsWUFBSzttQ0FLTCxZQUFLOzRCQTBCTCxtQkFBWSxTQUFDLE9BQU87OEJBS3BCLG1CQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOzsyQkE3RXZDOztBQXdDYSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1wbGF5YmFjay1idXR0b24nLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICA8c3BhbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwicGxheWJhY2sgc3BlZWQgYnV0dG9uXCJcbiAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAge3tnZXRQbGF5YmFja1JhdGUoKX19eFxuICAgIDwvc3Bhbj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXBsYXliYWNrLWJ1dHRvbiB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXBsYXliYWNrLWJ1dHRvbiAuYnV0dG9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1BsYXliYWNrQnV0dG9uIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIEBJbnB1dCgpIHBsYXliYWNrVmFsdWVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHBsYXliYWNrSW5kZXg6IG51bWJlcjtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBhcmlhVmFsdWUgPSAxO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wbGF5YmFja1ZhbHVlcyA9IFsgJzAuNScsICcxLjAnLCAnMS41JywgJzIuMCcgXTtcbiAgICAgICAgdGhpcy5wbGF5YmFja0luZGV4ID0gMTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVBsYXliYWNrU3BlZWQoKTtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgICBvbktleURvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgLy8gT24gcHJlc3MgRW50ZXIgKDEzKSBvciBTcGFjZSAoMzIpXG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUGxheWJhY2tTcGVlZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdXBkYXRlUGxheWJhY2tTcGVlZCgpIHtcbiAgICAgICAgdGhpcy5wbGF5YmFja0luZGV4ID0gKyt0aGlzLnBsYXliYWNrSW5kZXggJSB0aGlzLnBsYXliYWNrVmFsdWVzLmxlbmd0aDtcblxuICAgICAgICBpZiAodGhpcy50YXJnZXQgaW5zdGFuY2VvZiBWZ0FQSSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheWJhY2tSYXRlID0gKHRoaXMucGxheWJhY2tWYWx1ZXNbIHRoaXMucGxheWJhY2tJbmRleCBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBsYXliYWNrUmF0ZVsgdGhpcy52Z0ZvciBdID0gKHRoaXMucGxheWJhY2tWYWx1ZXNbIHRoaXMucGxheWJhY2tJbmRleCBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFBsYXliYWNrUmF0ZSgpIHtcbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSB0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LnBsYXliYWNrUmF0ZSA6IDEuMDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXJpYVZhbHVlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-quality-selector/vg-quality-selector.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-quality-selector/vg-quality-selector.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgQualitySelector = /** @class */ (function () {
    function VgQualitySelector(ref, API) {
        this.API = API;
        this.onBitrateChange = new core_1.EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgQualitySelector.prototype.ngOnInit = function () {
    };
    VgQualitySelector.prototype.ngOnChanges = function (changes) {
        if (changes['bitrates'].currentValue && changes['bitrates'].currentValue.length) {
            this.bitrates.forEach(function (item) { return item.label = item.label || Math.round(item.bitrate / 1000).toString(); });
        }
    };
    VgQualitySelector.prototype.selectBitrate = function (index) {
        this.bitrateSelected = this.bitrates[index];
        this.onBitrateChange.emit(this.bitrates[index]);
    };
    VgQualitySelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgQualitySelector.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-quality-selector',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"container\">\n            <div class=\"quality-selected\"\n                 [class.vg-icon-hd]=\"!bitrateSelected\">\n                {{ bitrateSelected?.label }}\n            </div>\n            \n            <select class=\"quality-selector\" \n                    (change)=\"selectBitrate($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"quality selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let bitrate of bitrates\"\n                    [value]=\"bitrate.qualityIndex\"\n                    [selected]=\"bitrate.qualityIndex === bitrateSelected?.qualityIndex\">\n                    {{ bitrate.label }}\n                </option>\n            </select>\n        </div>\n    ",
                    styles: ["\n        vg-quality-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-quality-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-quality-selector select.quality-selector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-quality-selector select.quality-selector::-ms-expand {\n            display: none;\n        }\n        vg-quality-selector select.quality-selector option {\n            color: #000;\n        }\n        vg-quality-selector .quality-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-quality-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgQualitySelector.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgQualitySelector.propDecorators = {
        "bitrates": [{ type: core_1.Input },],
        "onBitrateChange": [{ type: core_1.Output },],
    };
    return VgQualitySelector;
}());
exports.VgQualitySelector = VgQualitySelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcXVhbGl0eS1zZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXF1YWxpdHktc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FTdUI7QUFDdkIscURBQW1EOztJQW1HL0MsMkJBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPOytCQVhXLElBQUksbUJBQVksRUFBRTs2QkFPM0MsRUFBRTtRQUs5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxvQ0FBUSxHQUFSO0tBQ0M7SUFFRCx1Q0FBVyxHQUFYLFVBQVksT0FBc0I7UUFDOUIsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFlBQVksSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFyRSxDQUFxRSxDQUFDLENBQUE7U0FDdkc7S0FDSjtJQUVELHlDQUFhLEdBQWIsVUFBYyxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7S0FDbkQ7SUFFRCx1Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQW5ISixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsMnpCQW9CVDtvQkFDRCxNQUFNLEVBQUUsQ0FBRSx3ckRBdURULENBQUU7aUJBQ047Ozs7Z0JBNUZHLGlCQUFVO2dCQVFMLGNBQUs7Ozs2QkFzRlQsWUFBSztvQ0FFTCxhQUFNOzs0QkFsR1g7O0FBK0ZhLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgT25Jbml0LFxuICAgIElucHV0LFxuICAgIFZpZXdFbmNhcHN1bGF0aW9uLFxuICAgIE9uRGVzdHJveSxcbiAgICBTaW1wbGVDaGFuZ2VzLFxuICAgIE9uQ2hhbmdlcywgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQml0cmF0ZU9wdGlvbiB9IGZyb20gJy4uLy4uL2NvcmUvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctcXVhbGl0eS1zZWxlY3RvcicsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVhbGl0eS1zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLWhkXT1cIiFiaXRyYXRlU2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICB7eyBiaXRyYXRlU2VsZWN0ZWQ/LmxhYmVsIH19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cInF1YWxpdHktc2VsZWN0b3JcIiBcbiAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzZWxlY3RCaXRyYXRlKCRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cInF1YWxpdHkgc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIFxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgYml0cmF0ZSBvZiBiaXRyYXRlc1wiXG4gICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJiaXRyYXRlLnF1YWxpdHlJbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIFtzZWxlY3RlZF09XCJiaXRyYXRlLnF1YWxpdHlJbmRleCA9PT0gYml0cmF0ZVNlbGVjdGVkPy5xdWFsaXR5SW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgYml0cmF0ZS5sYWJlbCB9fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIGAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctcXVhbGl0eS1zZWxlY3RvciB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy1xdWFsaXR5LXNlbGVjdG9yIC5jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy1xdWFsaXR5LXNlbGVjdG9yIHNlbGVjdC5xdWFsaXR5LXNlbGVjdG9yIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDhweDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIHZnLXF1YWxpdHktc2VsZWN0b3Igc2VsZWN0LnF1YWxpdHktc2VsZWN0b3I6Oi1tcy1leHBhbmQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICB2Zy1xdWFsaXR5LXNlbGVjdG9yIHNlbGVjdC5xdWFsaXR5LXNlbGVjdG9yIG9wdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICB2Zy1xdWFsaXR5LXNlbGVjdG9yIC5xdWFsaXR5LXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICB2Zy1xdWFsaXR5LXNlbGVjdG9yIC52Zy1pY29uLWNsb3NlZF9jYXB0aW9uOmJlZm9yZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1F1YWxpdHlTZWxlY3RvciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIGJpdHJhdGVzOiBCaXRyYXRlT3B0aW9uW107XG5cbiAgICBAT3V0cHV0KCkgb25CaXRyYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Qml0cmF0ZU9wdGlvbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBiaXRyYXRlU2VsZWN0ZWQ6IEJpdHJhdGVPcHRpb247XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBhcmlhVmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBpZiAoY2hhbmdlc1snYml0cmF0ZXMnXS5jdXJyZW50VmFsdWUgJiYgY2hhbmdlc1snYml0cmF0ZXMnXS5jdXJyZW50VmFsdWUubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmJpdHJhdGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmxhYmVsID0gaXRlbS5sYWJlbCB8fCBNYXRoLnJvdW5kKGl0ZW0uYml0cmF0ZSAvIDEwMDApLnRvU3RyaW5nKCkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxlY3RCaXRyYXRlKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5iaXRyYXRlU2VsZWN0ZWQgPSB0aGlzLmJpdHJhdGVzW2luZGV4XTtcbiAgICAgICAgdGhpcy5vbkJpdHJhdGVDaGFuZ2UuZW1pdCh0aGlzLmJpdHJhdGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-buffering-time/vg-scrub-bar-buffering-time.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgScrubBarBufferingTime = /** @class */ (function () {
    function VgScrubBarBufferingTime(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarBufferingTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarBufferingTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarBufferingTime.prototype.getBufferTime = function () {
        var bufferTime = "0%";
        if (this.target && this.target.buffer && this.target.buffered.length) {
            if (this.target.time.total === 0) {
                bufferTime = '0%';
            }
            else {
                bufferTime = ((this.target.buffer.end / this.target.time.total) * 100) + '%';
            }
        }
        return bufferTime;
    };
    VgScrubBarBufferingTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarBufferingTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-buffering-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getBufferTime()\"></div>",
                    styles: ["\n        vg-scrub-bar-buffering-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-buffering-time .background {\n            background-color: rgba(255, 255, 255, 0.3);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n\n        vg-controls vg-scrub-bar-buffering-time .background {\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarBufferingTime.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarBufferingTime.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
    };
    return VgScrubBarBufferingTime;
}());
exports.VgScrubBarBufferingTime = VgScrubBarBufferingTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1HO0FBQ25HLHdEQUFzRDs7SUF3Q2xELGlDQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFGZCxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELDBDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkQ7SUFFRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXRCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNuRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsVUFBVSxHQUFHLElBQUksQ0FBQzthQUNyQjtZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLFVBQVUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNoRjtTQUNKO1FBRUQsTUFBTSxDQUFDLFVBQVUsQ0FBQztLQUNyQjtJQUVELDZDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBdkVKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxvRUFBZ0U7b0JBQzFFLE1BQU0sRUFBRSxDQUFFLHVvQkF1QlQsQ0FBRTtpQkFDTjs7OztnQkFoQzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBaUNULFlBQUs7O2tDQWxDVjs7QUFpQ2EsMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXNjcnViLWJhci1idWZmZXJpbmctdGltZScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCIgW3N0eWxlLndpZHRoXT1cImdldEJ1ZmZlclRpbWUoKVwiPjwvZGl2PmAsXG4gICAgc3R5bGVzOiBbIGBcbiAgICAgICAgdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1zY3J1Yi1iYXItYnVmZmVyaW5nLXRpbWUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctY29udHJvbHMgdmctc2NydWItYmFyLWJ1ZmZlcmluZy10aW1lIC5iYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhckJ1ZmZlcmluZ1RpbWUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcblxuICAgIGVsZW06IEhUTUxFbGVtZW50O1xuICAgIHRhcmdldDogYW55O1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEkpIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICB9XG5cbiAgICBnZXRCdWZmZXJUaW1lKCkge1xuICAgICAgICBsZXQgYnVmZmVyVGltZSA9IFwiMCVcIjtcblxuICAgICAgICBpZiAodGhpcy50YXJnZXQgJiYgdGhpcy50YXJnZXQuYnVmZmVyICYmIHRoaXMudGFyZ2V0LmJ1ZmZlcmVkLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnRpbWUudG90YWwgPT09IDApIHtcbiAgICAgICAgICAgICAgICBidWZmZXJUaW1lID0gJzAlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlclRpbWUgPSAoKHRoaXMudGFyZ2V0LmJ1ZmZlci5lbmQgLyB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSAqIDEwMCkgKyAnJSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYnVmZmVyVGltZTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-cue-points/vg-scrub-bar-cue-points.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgScrubBarCuePoints = /** @class */ (function () {
    function VgScrubBarCuePoints(ref, API) {
        this.API = API;
        this.onLoadedMetadataCalled = false;
        this.cuePoints = [];
        this.subscriptions = [];
        this.totalCues = 0;
        this.elem = ref.nativeElement;
    }
    VgScrubBarCuePoints.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCuePoints.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var onTimeUpdate = this.target.subscriptions.loadedMetadata;
        this.subscriptions.push(onTimeUpdate.subscribe(this.onLoadedMetadata.bind(this)));
        if (this.onLoadedMetadataCalled) {
            this.onLoadedMetadata();
        }
    };
    VgScrubBarCuePoints.prototype.onLoadedMetadata = function () {
        if (this.vgCuePoints) {
            // We need to transform the TextTrackCueList to Array or it doesn't work on IE11/Edge.
            // See: https://github.com/videogular/videogular2/issues/369
            this.cuePoints = [];
            for (var i = 0, l = this.vgCuePoints.length; i < l; i++) {
                var end = (this.vgCuePoints[i].endTime >= 0) ? this.vgCuePoints[i].endTime : this.vgCuePoints[i].startTime + 1;
                var cuePointDuration = (end - this.vgCuePoints[i].startTime) * 1000;
                var position = '0';
                var percentWidth = '0';
                if (typeof cuePointDuration === 'number' && this.target.time.total) {
                    percentWidth = ((cuePointDuration * 100) / this.target.time.total) + "%";
                    position = (this.vgCuePoints[i].startTime * 100 / (Math.round(this.target.time.total / 1000))) + "%";
                }
                this.vgCuePoints[i].$$style = {
                    width: percentWidth,
                    left: position
                };
                this.cuePoints.push(this.vgCuePoints[i]);
            }
        }
    };
    VgScrubBarCuePoints.prototype.updateCuePoints = function () {
        if (!this.target) {
            this.onLoadedMetadataCalled = true;
            return;
        }
        this.onLoadedMetadata();
    };
    VgScrubBarCuePoints.prototype.ngOnChanges = function (changes) {
        if (changes['vgCuePoints'].currentValue) {
            this.updateCuePoints();
        }
    };
    VgScrubBarCuePoints.prototype.ngDoCheck = function () {
        if (this.vgCuePoints) {
            var changes = this.totalCues !== this.vgCuePoints.length;
            if (changes) {
                this.totalCues = this.vgCuePoints.length;
                this.updateCuePoints();
            }
        }
    };
    VgScrubBarCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCuePoints.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-cue-points',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"cue-point-container\">\n            <span *ngFor=\"let cp of cuePoints\" [style.width]=\"cp.$$style?.width\" [style.left]=\"cp.$$style?.left\"\n                  class=\"cue-point\"></span>\n        </div>\n    ",
                    styles: ["\n        vg-scrub-bar-cue-points {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-cue-points .cue-point-container .cue-point {\n            position: absolute;\n            height: 5px;\n            background-color: rgba(255, 204, 0, 0.7);\n        }\n\n        vg-controls vg-scrub-bar-cue-points {\n            position: absolute;\n            top: calc(50% - 3px);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarCuePoints.propDecorators = {
        "vgCuePoints": [{ type: core_1.Input },],
        "vgFor": [{ type: core_1.Input },],
    };
    return VgScrubBarCuePoints;
}());
exports.VgScrubBarCuePoints = VgScrubBarCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1ZS1wb2ludHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQVN1QjtBQUN2Qix3REFBc0Q7O0lBOENsRCw2QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87c0NBUFosS0FBSzt5QkFDZixFQUFFOzZCQUVNLEVBQUU7eUJBRXRCLENBQUM7UUFHVCxJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsMkNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUM1RCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWxGLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDM0I7S0FDSjtJQUVELDhDQUFnQixHQUFoQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7WUFHbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7WUFFcEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQ3RELElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JILElBQUksZ0JBQWdCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3RFLElBQUksUUFBUSxHQUFHLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxZQUFZLEdBQUcsR0FBRyxDQUFDO2dCQUV2QixFQUFFLENBQUMsQ0FBQyxPQUFPLGdCQUFnQixLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNqRSxZQUFZLEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDekUsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDMUc7Z0JBRUssSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDLENBQUcsQ0FBQyxPQUFPLEdBQUc7b0JBQ25DLEtBQUssRUFBRSxZQUFZO29CQUNuQixJQUFJLEVBQUUsUUFBUTtpQkFDakIsQ0FBQztnQkFFRixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUMsQ0FBRSxDQUFDLENBQUM7YUFDOUM7U0FDSjtLQUNKO0lBRUQsNkNBQWUsR0FBZjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDO1lBQ25DLE1BQU0sQ0FBQztTQUNWO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7S0FDM0I7SUFFRCx5Q0FBVyxHQUFYLFVBQVksT0FBNkM7UUFDckQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFFLGFBQWEsQ0FBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0tBQ0o7SUFFRCx1Q0FBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUUzRCxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUMxQjtTQUNKO0tBQ0o7SUFFRCx5Q0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQXpISixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSx5QkFBeUI7b0JBQ25DLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsNE9BS1Q7b0JBQ0QsTUFBTSxFQUFFLENBQUUsNGdCQW1CVCxDQUFFO2lCQUNOOzs7O2dCQXhDRyxpQkFBVTtnQkFRTCxjQUFLOzs7Z0NBa0NULFlBQUs7MEJBQ0wsWUFBSzs7OEJBN0NWOztBQTJDYSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIElucHV0LFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPbkRlc3Ryb3ksXG4gICAgT25Jbml0LFxuICAgIFNpbXBsZUNoYW5nZSxcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctc2NydWItYmFyLWN1ZS1wb2ludHMnLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cImN1ZS1wb2ludC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCBjcCBvZiBjdWVQb2ludHNcIiBbc3R5bGUud2lkdGhdPVwiY3AuJCRzdHlsZT8ud2lkdGhcIiBbc3R5bGUubGVmdF09XCJjcC4kJHN0eWxlPy5sZWZ0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VlLXBvaW50XCI+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXNjcnViLWJhci1jdWUtcG9pbnRzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1zY3J1Yi1iYXItY3VlLXBvaW50cyAuY3VlLXBvaW50LWNvbnRhaW5lciAuY3VlLXBvaW50IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDIwNCwgMCwgMC43KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1jdWUtcG9pbnRzIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnU2NydWJCYXJDdWVQb2ludHMgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgICBASW5wdXQoKSB2Z0N1ZVBvaW50czogVGV4dFRyYWNrQ3VlTGlzdDtcbiAgICBASW5wdXQoKSB2Z0Zvcjogc3RyaW5nO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgb25Mb2FkZWRNZXRhZGF0YUNhbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGN1ZVBvaW50czogQXJyYXk8YW55PiA9IFtdO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIHRvdGFsQ3VlcyA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG5cbiAgICAgICAgbGV0IG9uVGltZVVwZGF0ZSA9IHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMubG9hZGVkTWV0YWRhdGE7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKG9uVGltZVVwZGF0ZS5zdWJzY3JpYmUodGhpcy5vbkxvYWRlZE1ldGFkYXRhLmJpbmQodGhpcykpKTtcblxuICAgICAgICBpZiAodGhpcy5vbkxvYWRlZE1ldGFkYXRhQ2FsbGVkKSB7XG4gICAgICAgICAgICB0aGlzLm9uTG9hZGVkTWV0YWRhdGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTG9hZGVkTWV0YWRhdGEoKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQ3VlUG9pbnRzKSB7XG4gICAgICAgICAgICAvLyBXZSBuZWVkIHRvIHRyYW5zZm9ybSB0aGUgVGV4dFRyYWNrQ3VlTGlzdCB0byBBcnJheSBvciBpdCBkb2Vzbid0IHdvcmsgb24gSUUxMS9FZGdlLlxuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vdmlkZW9ndWxhci92aWRlb2d1bGFyMi9pc3N1ZXMvMzY5XG4gICAgICAgICAgICB0aGlzLmN1ZVBvaW50cyA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMudmdDdWVQb2ludHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVuZCA9ICh0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uZW5kVGltZSA+PSAwKSA/IHRoaXMudmdDdWVQb2ludHNbIGkgXS5lbmRUaW1lIDogdGhpcy52Z0N1ZVBvaW50c1sgaSBdLnN0YXJ0VGltZSArIDE7XG4gICAgICAgICAgICAgICAgbGV0IGN1ZVBvaW50RHVyYXRpb24gPSAoZW5kIC0gdGhpcy52Z0N1ZVBvaW50c1sgaSBdLnN0YXJ0VGltZSkgKiAxMDAwO1xuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9ICcwJztcbiAgICAgICAgICAgICAgICBsZXQgcGVyY2VudFdpZHRoID0gJzAnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdWVQb2ludER1cmF0aW9uID09PSAnbnVtYmVyJyAmJiB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRXaWR0aCA9ICgoY3VlUG9pbnREdXJhdGlvbiAqIDEwMCkgLyB0aGlzLnRhcmdldC50aW1lLnRvdGFsKSArIFwiJVwiO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbiA9ICh0aGlzLnZnQ3VlUG9pbnRzWyBpIF0uc3RhcnRUaW1lICogMTAwIC8gKE1hdGgucm91bmQodGhpcy50YXJnZXQudGltZS50b3RhbCAvIDEwMDApKSkgKyBcIiVcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAoPGFueT50aGlzLnZnQ3VlUG9pbnRzWyBpIF0pLiQkc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBwZXJjZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBvc2l0aW9uXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRoaXMuY3VlUG9pbnRzLnB1c2godGhpcy52Z0N1ZVBvaW50c1sgaSBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZUN1ZVBvaW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgdGhpcy5vbkxvYWRlZE1ldGFkYXRhQ2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uTG9hZGVkTWV0YWRhdGEoKTtcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wTmFtZTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcbiAgICAgICAgaWYgKGNoYW5nZXNbICd2Z0N1ZVBvaW50cycgXS5jdXJyZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VlUG9pbnRzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBuZ0RvQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZnQ3VlUG9pbnRzKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy50b3RhbEN1ZXMgIT09IHRoaXMudmdDdWVQb2ludHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoY2hhbmdlcykge1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDdWVzID0gdGhpcy52Z0N1ZVBvaW50cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDdWVQb2ludHMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar-current-time/vg-scrub-bar-current-time.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgScrubBarCurrentTime = /** @class */ (function () {
    function VgScrubBarCurrentTime(ref, API) {
        this.API = API;
        this.vgSlider = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgScrubBarCurrentTime.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBarCurrentTime.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBarCurrentTime.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBarCurrentTime.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBarCurrentTime.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar-current-time',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"background\" [style.width]=\"getPercentage()\"></div><span class=\"slider\" *ngIf=\"vgSlider\"></span>",
                    styles: ["\n        vg-scrub-bar-current-time {\n            display: flex;\n            width: 100%;\n            height: 5px;\n            pointer-events: none;\n            position: absolute;\n        }\n\n        vg-scrub-bar-current-time .background {\n            background-color: white;\n        }\n\n        vg-controls vg-scrub-bar-current-time {\n            position: absolute;\n            top: calc(50% - 3px);\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n\n        vg-controls vg-scrub-bar-current-time .background {\n            border: 1px solid white;\n            -webkit-border-radius: 2px;\n            -moz-border-radius: 2px;\n            border-radius: 2px;\n        }\n        \n        vg-scrub-bar-current-time .slider{\n            background: white;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            box-shadow: 0px 0px 10px black;\n            margin-top: -5px;\n            margin-left: -10px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBarCurrentTime.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgScrubBarCurrentTime.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "vgSlider": [{ type: core_1.Input },],
    };
    return VgScrubBarCurrentTime;
}());
exports.VgScrubBarCurrentTime = VgScrubBarCurrentTime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLWN1cnJlbnQtdGltZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBbUc7QUFDbkcsd0RBQXNEOztJQXVEbEQsK0JBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPO3dCQVBqQixLQUFLOzZCQUtGLEVBQUU7UUFHOUIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDO0tBQ2pDO0lBRUQsd0NBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLEVBQUUsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDLENBQUM7U0FDNUY7S0FDSjtJQUVELDZDQUFhLEdBQWI7UUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuRDtJQUVELDZDQUFhLEdBQWI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztLQUNqRztJQUVELDJDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQztLQUNwRDs7Z0JBM0VKLGdCQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxxSEFBNkc7b0JBQ3ZILE1BQU0sRUFBRSxDQUFFLHNpQ0FxQ1QsQ0FBRTtpQkFDTjs7OztnQkE5QzBCLGlCQUFVO2dCQUM1QixjQUFLOzs7MEJBK0NULFlBQUs7NkJBQ0wsWUFBSzs7Z0NBakRWOztBQStDYSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAndmctc2NydWItYmFyLWN1cnJlbnQtdGltZScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYDxkaXYgY2xhc3M9XCJiYWNrZ3JvdW5kXCIgW3N0eWxlLndpZHRoXT1cImdldFBlcmNlbnRhZ2UoKVwiPjwvZGl2PjxzcGFuIGNsYXNzPVwic2xpZGVyXCIgKm5nSWY9XCJ2Z1NsaWRlclwiPjwvc3Bhbj5gLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1jb250cm9scyB2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogY2FsYyg1MCUgLSAzcHgpO1xuICAgICAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci1jdXJyZW50LXRpbWUgLmJhY2tncm91bmQge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB2Zy1zY3J1Yi1iYXItY3VycmVudC10aW1lIC5zbGlkZXJ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IGJsYWNrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ1NjcnViQmFyQ3VycmVudFRpbWUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2Z1NsaWRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIGdldFBlcmNlbnRhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldCA/ICgodGhpcy50YXJnZXQudGltZS5jdXJyZW50ICogMTAwKSAvIHRoaXMudGFyZ2V0LnRpbWUudG90YWwpICsgJyUnIDogJzAlJztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar.js":
/*!****************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-scrub-bar/vg-scrub-bar.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ./../../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var vg_states_1 = __webpack_require__(/*! ../../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var VgScrubBar = /** @class */ (function () {
    function VgScrubBar(ref, API, vgControlsHiddenState) {
        var _this = this;
        this.API = API;
        this.hideScrubBar = false;
        this.vgSlider = true;
        this.isSeeking = false;
        this.wasPlaying = false;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.subscriptions.push(vgControlsHiddenState.isHidden.subscribe(function (hide) { return _this.onHideScrubBar(hide); }));
    }
    VgScrubBar.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgScrubBar.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgScrubBar.prototype.seekStart = function () {
        if (this.target.canPlay) {
            this.isSeeking = true;
            if (this.target.state === vg_states_1.VgStates.VG_PLAYING) {
                this.wasPlaying = true;
            }
            this.target.pause();
        }
    };
    VgScrubBar.prototype.seekMove = function (offset) {
        if (this.isSeeking) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.time.current = percentage * this.target.time.total / 100;
            this.target.seekTime(percentage, true);
        }
    };
    VgScrubBar.prototype.seekEnd = function (offset) {
        this.isSeeking = false;
        if (this.target.canPlay) {
            var percentage = Math.max(Math.min(offset * 100 / this.elem.scrollWidth, 99.9), 0);
            this.target.seekTime(percentage, true);
            if (this.wasPlaying) {
                this.wasPlaying = false;
                this.target.play();
            }
        }
    };
    VgScrubBar.prototype.touchEnd = function () {
        this.isSeeking = false;
        if (this.wasPlaying) {
            this.wasPlaying = false;
            this.target.play();
        }
    };
    VgScrubBar.prototype.getTouchOffset = function (event) {
        var offsetLeft = 0;
        var element = event.target;
        while (element) {
            offsetLeft += element.offsetLeft;
            element = element.offsetParent;
        }
        return event.touches[0].pageX - offsetLeft;
    };
    VgScrubBar.prototype.onMouseDownScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd($event.offsetX);
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onMouseMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onMouseUpScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekEnd($event.offsetX);
            }
        }
    };
    VgScrubBar.prototype.onTouchStartScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive) {
                if (!this.vgSlider) {
                    this.seekEnd(this.getTouchOffset($event));
                }
                else {
                    this.seekStart();
                }
            }
        }
    };
    VgScrubBar.prototype.onTouchMoveScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.seekMove(this.getTouchOffset($event));
            }
        }
    };
    VgScrubBar.prototype.onTouchCancelScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.onTouchEndScrubBar = function ($event) {
        if (this.target) {
            if (!this.target.isLive && this.vgSlider && this.isSeeking) {
                this.touchEnd();
            }
        }
    };
    VgScrubBar.prototype.arrowAdjustVolume = function (event) {
        if (this.target) {
            if (event.keyCode === 38 || event.keyCode === 39) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current + 5000) / 1000, false);
            }
            else if (event.keyCode === 37 || event.keyCode === 40) {
                event.preventDefault();
                this.target.seekTime((this.target.time.current - 5000) / 1000, false);
            }
        }
    };
    VgScrubBar.prototype.getPercentage = function () {
        return this.target ? ((this.target.time.current * 100) / this.target.time.total) + '%' : '0%';
    };
    VgScrubBar.prototype.onHideScrubBar = function (hide) {
        this.hideScrubBar = hide;
    };
    VgScrubBar.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgScrubBar.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-scrub-bar',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"scrubBar\"\n             tabindex=\"0\"\n             role=\"slider\"\n             aria-label=\"scrub bar\"\n             aria-level=\"polite\"\n             [attr.aria-valuenow]=\"getPercentage()\"\n             aria-valuemin=\"0\"\n             aria-valuemax=\"100\"\n             [attr.aria-valuetext]=\"getPercentage() + '%'\">\n            <ng-content></ng-content>\n        </div>\n        \n    ",
                    styles: ["\n        vg-scrub-bar {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            position: absolute;\n            width: 100%;\n            height: 5px;\n            bottom: 50px;\n            margin: 0;\n            cursor: pointer;\n            align-items: center;\n            background: rgba(0, 0, 0, 0.75);\n            z-index: 250;\n            -webkit-transition: bottom 1s, opacity 0.5s;\n            -khtml-transition: bottom 1s, opacity 0.5s;\n            -moz-transition: bottom 1s, opacity 0.5s;\n            -ms-transition: bottom 1s, opacity 0.5s;\n            transition: bottom 1s, opacity 0.5s;\n        }\n        \n        vg-scrub-bar .scrubBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            height: 100%;\n        }\n\n        vg-controls vg-scrub-bar {\n            position: relative;\n            bottom: 0;\n            background: transparent;\n            height: 50px;\n            flex-grow: 1;\n            flex-basis: 0;\n            margin: 0 10px;\n            -webkit-transition: initial;\n            -khtml-transition: initial;\n            -moz-transition: initial;\n            -ms-transition: initial;\n            transition: initial;\n        }\n\n        vg-scrub-bar.hide {\n            bottom: 0;\n            opacity: 0;\n        }\n\n        vg-controls vg-scrub-bar.hide {\n            bottom: initial;\n            opacity: initial;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgScrubBar.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgScrubBar.propDecorators = {
        "hideScrubBar": [{ type: core_1.HostBinding, args: ['class.hide',] },],
        "vgFor": [{ type: core_1.Input },],
        "vgSlider": [{ type: core_1.Input },],
        "onMouseDownScrubBar": [{ type: core_1.HostListener, args: ['mousedown', ['$event'],] },],
        "onMouseMoveScrubBar": [{ type: core_1.HostListener, args: ['document:mousemove', ['$event'],] },],
        "onMouseUpScrubBar": [{ type: core_1.HostListener, args: ['document:mouseup', ['$event'],] },],
        "onTouchStartScrubBar": [{ type: core_1.HostListener, args: ['touchstart', ['$event'],] },],
        "onTouchMoveScrubBar": [{ type: core_1.HostListener, args: ['document:touchmove', ['$event'],] },],
        "onTouchCancelScrubBar": [{ type: core_1.HostListener, args: ['document:touchcancel', ['$event'],] },],
        "onTouchEndScrubBar": [{ type: core_1.HostListener, args: ['document:touchend', ['$event'],] },],
        "arrowAdjustVolume": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgScrubBar;
}());
exports.VgScrubBar = VgScrubBar;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc2NydWItYmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc2NydWItYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDtBQUNuRCwrRUFBNEU7QUFDNUUseURBQXVEOztJQTBGbkQsb0JBQVksR0FBZSxFQUFTLEdBQVUsRUFBRSxxQkFBdUM7UUFBdkYsaUJBR0M7UUFIbUMsUUFBRyxHQUFILEdBQUcsQ0FBTzs0QkFaSyxLQUFLO3dCQUczQixJQUFJO3lCQUlaLEtBQUs7MEJBQ0osS0FBSzs2QkFFSyxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDLENBQUM7S0FDeEc7SUFFRCw2QkFBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsa0NBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0lBRVMsOEJBQVMsR0FBbkI7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d0JBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDRhQWFUO29CQUNELE1BQU0sRUFBRSxDQUFFLG9tREF1RFQsQ0FBRTtpQkFDTjs7OztnQkFqRmMsaUJBQVU7Z0JBR2hCLGNBQUs7Z0JBQ0wscUNBQWdCOzs7aUNBK0VwQixrQkFBVyxTQUFDLFlBQVk7MEJBRXhCLFlBQUs7NkJBQ0wsWUFBSzt3Q0EyRUwsbUJBQVksU0FBQyxXQUFXLEVBQUUsQ0FBRSxRQUFRLENBQUU7d0NBY3RDLG1CQUFZLFNBQUMsb0JBQW9CLEVBQUUsQ0FBRSxRQUFRLENBQUU7c0NBUy9DLG1CQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBRSxRQUFRLENBQUU7eUNBUzdDLG1CQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFO3dDQWN2QyxtQkFBWSxTQUFDLG9CQUFvQixFQUFFLENBQUUsUUFBUSxDQUFFOzBDQVMvQyxtQkFBWSxTQUFDLHNCQUFzQixFQUFFLENBQUUsUUFBUSxDQUFFO3VDQVNqRCxtQkFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUUsUUFBUSxDQUFFO3NDQVM5QyxtQkFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7cUJBM092Qzs7QUFtRmEsZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSG9zdEJpbmRpbmcsXG4gICAgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uLy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1zY3J1Yi1iYXInLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNjcnViQmFyXCJcbiAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgIHJvbGU9XCJzbGlkZXJcIlxuICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJzY3J1YiBiYXJcIlxuICAgICAgICAgICAgIGFyaWEtbGV2ZWw9XCJwb2xpdGVcIlxuICAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVub3ddPVwiZ2V0UGVyY2VudGFnZSgpXCJcbiAgICAgICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiZ2V0UGVyY2VudGFnZSgpICsgJyUnXCI+XG4gICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXNjcnViLWJhciB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIGJvdHRvbTogNTBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgICAgICAgICAgei1pbmRleDogMjUwO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjogYm90dG9tIDFzLCBvcGFjaXR5IDAuNXM7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBib3R0b20gMXMsIG9wYWNpdHkgMC41cztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdmctc2NydWItYmFyIC5zY3J1YkJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogaW5pdGlhbDtcbiAgICAgICAgICAgIC1raHRtbC10cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgLW1vei10cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICAgICAgLW1zLXRyYW5zaXRpb246IGluaXRpYWw7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBpbml0aWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctc2NydWItYmFyLmhpZGUge1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLWNvbnRyb2xzIHZnLXNjcnViLWJhci5oaWRlIHtcbiAgICAgICAgICAgIGJvdHRvbTogaW5pdGlhbDtcbiAgICAgICAgICAgIG9wYWNpdHk6IGluaXRpYWw7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdTY3J1YkJhciBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGUnKSBoaWRlU2NydWJCYXI6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgQElucHV0KCkgdmdTbGlkZXI6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaXNTZWVraW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgd2FzUGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEksIHZnQ29udHJvbHNIaWRkZW5TdGF0ZTogVmdDb250cm9sc0hpZGRlbikge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godmdDb250cm9sc0hpZGRlblN0YXRlLmlzSGlkZGVuLnN1YnNjcmliZShoaWRlID0+IHRoaXMub25IaWRlU2NydWJCYXIoaGlkZSkpKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWVrU3RhcnQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5jYW5QbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmlzU2Vla2luZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuc3RhdGUgPT09IFZnU3RhdGVzLlZHX1BMQVlJTkcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50YXJnZXQucGF1c2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBzZWVrTW92ZShvZmZzZXQ6IG51bWJlcikge1xuICAgICAgICBpZiAodGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gTWF0aC5tYXgoTWF0aC5taW4ob2Zmc2V0ICogMTAwIC8gdGhpcy5lbGVtLnNjcm9sbFdpZHRoLCA5OS45KSwgMCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgPSBwZXJjZW50YWdlICogdGhpcy50YXJnZXQudGltZS50b3RhbCAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnNlZWtUaW1lKHBlcmNlbnRhZ2UsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNlZWtFbmQob2Zmc2V0OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5pc1NlZWtpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0LmNhblBsYXkpIHtcbiAgICAgICAgICAgIGxldCBwZXJjZW50YWdlID0gTWF0aC5tYXgoTWF0aC5taW4ob2Zmc2V0ICogMTAwIC8gdGhpcy5lbGVtLnNjcm9sbFdpZHRoLCA5OS45KSwgMCk7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZShwZXJjZW50YWdlLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLndhc1BsYXlpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdG91Y2hFbmQoKSB7XG4gICAgICAgIHRoaXMuaXNTZWVraW5nID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLndhc1BsYXlpbmcpIHtcbiAgICAgICAgICAgIHRoaXMud2FzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy50YXJnZXQucGxheSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdldFRvdWNoT2Zmc2V0KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IG9mZnNldExlZnQ6IG51bWJlciA9IDA7XG4gICAgICAgIGxldCBlbGVtZW50OiBhbnkgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICAgICAgICBvZmZzZXRMZWZ0ICs9IGVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXZlbnQudG91Y2hlc1sgMCBdLnBhZ2VYIC0gb2Zmc2V0TGVmdDtcbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbICckZXZlbnQnIF0pXG4gICAgb25Nb3VzZURvd25TY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZnU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCgkZXZlbnQub2Zmc2V0WCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZWtTdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsgJyRldmVudCcgXSlcbiAgICBvbk1vdXNlTW92ZVNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Vla01vdmUoJGV2ZW50Lm9mZnNldFgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsgJyRldmVudCcgXSlcbiAgICBvbk1vdXNlVXBTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlICYmIHRoaXMudmdTbGlkZXIgJiYgdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtFbmQoJGV2ZW50Lm9mZnNldFgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoU3RhcnRTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZnU2xpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Vla0VuZCh0aGlzLmdldFRvdWNoT2Zmc2V0KCRldmVudCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVrU3RhcnQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaG1vdmUnLCBbICckZXZlbnQnIF0pXG4gICAgb25Ub3VjaE1vdmVTY3J1YkJhcigkZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy50YXJnZXQuaXNMaXZlICYmIHRoaXMudmdTbGlkZXIgJiYgdGhpcy5pc1NlZWtpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZWtNb3ZlKHRoaXMuZ2V0VG91Y2hPZmZzZXQoJGV2ZW50KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGNhbmNlbCcsIFsgJyRldmVudCcgXSlcbiAgICBvblRvdWNoQ2FuY2VsU2NydWJCYXIoJGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGFyZ2V0LmlzTGl2ZSAmJiB0aGlzLnZnU2xpZGVyICYmIHRoaXMuaXNTZWVraW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2hlbmQnLCBbICckZXZlbnQnIF0pXG4gICAgb25Ub3VjaEVuZFNjcnViQmFyKCRldmVudDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnRhcmdldC5pc0xpdmUgJiYgdGhpcy52Z1NsaWRlciAmJiB0aGlzLmlzU2Vla2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMudG91Y2hFbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKVxuICAgIGFycm93QWRqdXN0Vm9sdW1lKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5zZWVrVGltZSgodGhpcy50YXJnZXQudGltZS5jdXJyZW50ICsgNTAwMCkgLyAxMDAwLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXlDb2RlID09PSA0MCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXQuc2Vla1RpbWUoKHRoaXMudGFyZ2V0LnRpbWUuY3VycmVudCAtIDUwMDApIC8gMTAwMCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0UGVyY2VudGFnZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gKCh0aGlzLnRhcmdldC50aW1lLmN1cnJlbnQgKiAxMDApIC8gdGhpcy50YXJnZXQudGltZS50b3RhbCkgKyAnJScgOiAnMCUnO1xuICAgIH1cblxuICAgIG9uSGlkZVNjcnViQmFyKGhpZGU6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5oaWRlU2NydWJCYXIgPSBoaWRlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-time-display/vg-time-display.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-time-display/vg-time-display.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
// Workaround until we can use UTC with Angular Date Pipe
var VgUtcPipe = /** @class */ (function () {
    function VgUtcPipe() {
    }
    VgUtcPipe.prototype.transform = function (value, format) {
        var date = new Date(value);
        var result = format;
        var ss = date.getUTCSeconds();
        var mm = date.getUTCMinutes();
        var hh = date.getUTCHours();
        if (ss < 10) {
            ss = '0' + ss;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hh < 10) {
            hh = '0' + hh;
        }
        result = result.replace(/ss/g, ss);
        result = result.replace(/mm/g, mm);
        result = result.replace(/hh/g, hh);
        return result;
    };
    VgUtcPipe.decorators = [
        { type: core_1.Pipe, args: [{ name: 'vgUtc' },] },
    ];
    return VgUtcPipe;
}());
exports.VgUtcPipe = VgUtcPipe;
var VgTimeDisplay = /** @class */ (function () {
    function VgTimeDisplay(ref, API) {
        this.API = API;
        this.vgProperty = 'current';
        this.vgFormat = 'mm:ss';
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTimeDisplay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTimeDisplay.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgTimeDisplay.prototype.getTime = function () {
        var t = 0;
        if (this.target) {
            t = Math.round(this.target.time[this.vgProperty]);
            t = isNaN(t) || this.target.isLive ? 0 : t;
        }
        return t;
    };
    VgTimeDisplay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTimeDisplay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-time-display',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <span *ngIf=\"target?.isLive\">LIVE</span>\n        <span *ngIf=\"!target?.isLive\">{{ getTime() | vgUtc:vgFormat }}</span>\n        <ng-content></ng-content>\n    ",
                    styles: ["\n        vg-time-display {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 60px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n            pointer-events: none;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTimeDisplay.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgTimeDisplay.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "vgProperty": [{ type: core_1.Input },],
        "vgFormat": [{ type: core_1.Input },],
    };
    return VgTimeDisplay;
}());
exports.VgTimeDisplay = VgTimeDisplay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdGltZS1kaXNwbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdGltZS1kaXNwbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdIO0FBQ3hILHFEQUFtRDs7Ozs7SUFNL0MsNkJBQVMsR0FBVCxVQUFVLEtBQWEsRUFBRSxNQUFjO1FBQ25DLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQixJQUFJLEVBQUUsR0FBa0IsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksRUFBRSxHQUFrQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDN0MsSUFBSSxFQUFFLEdBQWtCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUUzQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNWLEVBQUUsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ2pCO1FBQ0QsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDVixFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNqQjtRQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ1YsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDakI7UUFFRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBVSxFQUFFLENBQUMsQ0FBQztRQUUzQyxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOztnQkF4QkosV0FBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTs7b0JBTHZCOztBQU1hLDhCQUFTOztJQStEbEIsdUJBQVksR0FBZSxFQUFTLEdBQVU7UUFBVixRQUFHLEdBQUgsR0FBRyxDQUFPOzBCQVJoQixTQUFTO3dCQUNYLE9BQU87NkJBS0gsRUFBRTtRQUc5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxnQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQscUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25EO0lBRUQsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVWLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBRSxDQUFDLENBQUM7WUFDcEQsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDOUM7UUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ1o7SUFFRCxtQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQW5FSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsZ0xBSVQ7b0JBQ0QsTUFBTSxFQUFFLENBQUUsb2lCQWlCVCxDQUFFO2lCQUNOOzs7O2dCQTFEMEIsaUJBQVU7Z0JBQzVCLGNBQUs7OzswQkEyRFQsWUFBSzsrQkFDTCxZQUFLOzZCQUNMLFlBQUs7O3dCQTlEVjs7QUEyRGEsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBPbkluaXQsIFBpcGVUcmFuc2Zvcm0sIFBpcGUsIFZpZXdFbmNhcHN1bGF0aW9uLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vLi4vY29yZS9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbi8vIFdvcmthcm91bmQgdW50aWwgd2UgY2FuIHVzZSBVVEMgd2l0aCBBbmd1bGFyIERhdGUgUGlwZVxuQFBpcGUoeyBuYW1lOiAndmdVdGMnIH0pXG5leHBvcnQgY2xhc3MgVmdVdGNQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gICAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIsIGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgIGxldCByZXN1bHQgPSBmb3JtYXQ7XG4gICAgICAgIGxldCBzczogc3RyaW5nfG51bWJlciA9IGRhdGUuZ2V0VVRDU2Vjb25kcygpO1xuICAgICAgICBsZXQgbW06IHN0cmluZ3xudW1iZXIgPSBkYXRlLmdldFVUQ01pbnV0ZXMoKTtcbiAgICAgICAgbGV0IGhoOiBzdHJpbmd8bnVtYmVyID0gZGF0ZS5nZXRVVENIb3VycygpO1xuXG4gICAgICAgIGlmIChzcyA8IDEwKSB7XG4gICAgICAgICAgICBzcyA9ICcwJyArIHNzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtbSA8IDEwKSB7XG4gICAgICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaCA8IDEwKSB7XG4gICAgICAgICAgICBoaCA9ICcwJyArIGhoO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL3NzL2csIDxzdHJpbmc+c3MpO1xuICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZSgvbW0vZywgPHN0cmluZz5tbSk7XG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKC9oaC9nLCA8c3RyaW5nPmhoKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy10aW1lLWRpc3BsYXknLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGBcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJ0YXJnZXQ/LmlzTGl2ZVwiPkxJVkU8L3NwYW4+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwiIXRhcmdldD8uaXNMaXZlXCI+e3sgZ2V0VGltZSgpIHwgdmdVdGM6dmdGb3JtYXQgfX08L3NwYW4+XG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXRpbWUtZGlzcGxheSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnVGltZURpc3BsYXkgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQElucHV0KCkgdmdGb3I6IHN0cmluZztcbiAgICBASW5wdXQoKSB2Z1Byb3BlcnR5OiBzdHJpbmcgPSAnY3VycmVudCc7XG4gICAgQElucHV0KCkgdmdGb3JtYXQ6IHN0cmluZyA9ICdtbTpzcyc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBjb25zdHJ1Y3RvcihyZWY6IEVsZW1lbnRSZWYsIHB1YmxpYyBBUEk6IFZnQVBJKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgfVxuXG4gICAgZ2V0VGltZSgpIHtcbiAgICAgICAgbGV0IHQgPSAwO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgdCA9IE1hdGgucm91bmQodGhpcy50YXJnZXQudGltZVsgdGhpcy52Z1Byb3BlcnR5IF0pO1xuICAgICAgICAgICAgdCA9IGlzTmFOKHQpIHx8IHRoaXMudGFyZ2V0LmlzTGl2ZSA/IDAgOiB0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-track-selector/vg-track-selector.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-track-selector/vg-track-selector.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgTrackSelector = /** @class */ (function () {
    function VgTrackSelector(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
    }
    VgTrackSelector.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgTrackSelector.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        var subs = Array.from(this.API.getMasterMedia().elem.children)
            .filter(function (item) { return item.tagName === 'TRACK'; })
            .filter(function (item) { return item.kind === 'subtitles'; })
            .map(function (item) {
            return ({
                label: item.label,
                selected: item.default === true,
                id: item.srclang
            });
        });
        this.tracks = subs.concat([
            {
                id: null,
                label: 'Off',
                selected: subs.every(function (item) { return item.selected === false; })
            }
        ]);
        var track = this.tracks.filter(function (item) { return item.selected === true; })[0];
        this.trackSelected = track.id;
        this.ariaValue = track.label;
    };
    VgTrackSelector.prototype.selectTrack = function (trackId) {
        var _this = this;
        this.trackSelected = (trackId === 'null') ? null : trackId;
        this.ariaValue = 'No track selected';
        Array.from(this.API.getMasterMedia().elem.textTracks)
            .forEach(function (item) {
            if (item.language === trackId) {
                _this.ariaValue = item.label;
                item.mode = 'showing';
            }
            else {
                item.mode = 'hidden';
            }
        });
    };
    VgTrackSelector.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgTrackSelector.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-track-selector',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div class=\"container\">\n            <div class=\"track-selected\"\n                 [class.vg-icon-closed_caption]=\"!trackSelected\">\n                {{ trackSelected || '' }}\n            </div>\n            \n            <select class=\"trackSelector\" \n                    (change)=\"selectTrack($event.target.value)\"\n                    tabindex=\"0\"\n                    aria-label=\"track selector\"\n                    [attr.aria-valuetext]=\"ariaValue\">\n                <option \n                    *ngFor=\"let track of tracks\"\n                    [value]=\"track.id\"\n                    [selected]=\"track.selected === true\">\n                    {{ track.label }}\n                </option>\n            </select>\n        </div>\n    ",
                    styles: ["\n        vg-track-selector {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-track-selector .container {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n            \n            padding: 0;\n            margin: 5px;\n        }\n        vg-track-selector select.trackSelector {\n            width: 50px;\n            padding: 5px 8px;\n            border: none;\n            background: none;\n            -webkit-appearance: none;\n            -moz-appearance: none;\n            appearance: none;\n            color: transparent;\n            font-size: 16px;\n        }\n        vg-track-selector select.trackSelector::-ms-expand {\n            display: none;\n        }\n        vg-track-selector select.trackSelector option {\n            color: #000;\n        }\n        vg-track-selector .track-selected {\n            position: absolute;\n            width: 100%;\n            height: 50px;\n            top: -6px;\n            text-align: center;\n            text-transform: uppercase;\n            font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n            padding-top: 2px;\n            pointer-events: none;\n        }\n        vg-track-selector .vg-icon-closed_caption:before {\n            width: 100%;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgTrackSelector.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgTrackSelector.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
    };
    return VgTrackSelector;
}());
exports.VgTrackSelector = VgTrackSelector;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdHJhY2stc2VsZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy10cmFjay1zZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxxREFBbUQ7O0lBc0cvQyx5QkFBWSxHQUFlLEVBQVMsR0FBVTtRQUFWLFFBQUcsR0FBSCxHQUFHLENBQU87NkJBSmQsRUFBRTtRQUs5QixJQUFJLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7S0FDakM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBT0M7UUFORyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsRUFBRSxFQUFwQixDQUFvQixDQUFDLENBQUMsQ0FBQztTQUM1RjtLQUNKO0lBRUQsdUNBQWEsR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRWhELElBQU0sSUFBSSxHQUFrQixLQUFLLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBeUIsQ0FBQyxRQUFRLENBQUM7YUFDaEcsTUFBTSxDQUFDLFVBQUMsSUFBaUIsSUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUF4QixDQUF3QixDQUFDO2FBQ3ZELE1BQU0sQ0FBQyxVQUFDLElBQXNCLElBQUssT0FBQSxJQUFJLENBQUMsSUFBSSxLQUFLLFdBQVcsRUFBekIsQ0FBeUIsQ0FBQzthQUM3RCxHQUFHLENBQUMsVUFBQyxJQUFzQjtZQUFLLE9BQUEsQ0FBQztnQkFDOUIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJO2dCQUMvQixFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDbkIsQ0FBQztRQUorQixDQUkvQixDQUFDLENBQUM7UUFFUixJQUFJLENBQUMsTUFBTSxHQUNKLElBQUk7WUFDUDtnQkFDSSxFQUFFLEVBQUUsSUFBSTtnQkFDUixLQUFLLEVBQUUsS0FBSztnQkFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQVksSUFBSyxPQUFBLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUF2QixDQUF1QixDQUFDO2FBQ2xFO1VBQ0osQ0FBQztRQUVGLElBQU0sS0FBSyxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBWSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQXRCLENBQXNCLENBQUMsQ0FBRSxDQUFDLENBQUUsQ0FBQztRQUN4RixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO0tBQ2hDO0lBRUQscUNBQVcsR0FBWCxVQUFZLE9BQWU7UUFBM0IsaUJBY0M7UUFiRyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztRQUUzRCxJQUFJLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO1FBRXJDLEtBQUssQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUF5QixDQUFDLFVBQVUsQ0FBQzthQUN0RSxPQUFPLENBQUMsVUFBQyxJQUFlO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQzthQUN6QjtZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2FBQ3hCO1NBQ0osQ0FBQyxDQUFDO0tBQ1Y7SUFFRCxxQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQXRKSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsd3dCQW9CVDtvQkFDRCxNQUFNLEVBQUUsQ0FBRSwrcERBdURULENBQUU7aUJBQ047Ozs7Z0JBMUZtQixpQkFBVTtnQkFDckIsY0FBSzs7OzBCQTJGVCxZQUFLOzswQkE1RlY7O0FBMkZhLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE9wdGlvbiB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xuICAgIHNlbGVjdGVkOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXRyYWNrLXNlbGVjdG9yJyxcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0cmFjay1zZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgIFtjbGFzcy52Zy1pY29uLWNsb3NlZF9jYXB0aW9uXT1cIiF0cmFja1NlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAge3sgdHJhY2tTZWxlY3RlZCB8fCAnJyB9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJ0cmFja1NlbGVjdG9yXCIgXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2VsZWN0VHJhY2soJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwidHJhY2sgc2VsZWN0b3JcIlxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLXZhbHVldGV4dF09XCJhcmlhVmFsdWVcIj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIFxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdHJhY2sgb2YgdHJhY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cInRyYWNrLmlkXCJcbiAgICAgICAgICAgICAgICAgICAgW3NlbGVjdGVkXT1cInRyYWNrLnNlbGVjdGVkID09PSB0cnVlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRyYWNrLmxhYmVsIH19XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgdmctdHJhY2stc2VsZWN0b3Igc2VsZWN0LnRyYWNrU2VsZWN0b3Ige1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgICAgdmctdHJhY2stc2VsZWN0b3Igc2VsZWN0LnRyYWNrU2VsZWN0b3I6Oi1tcy1leHBhbmQge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciBzZWxlY3QudHJhY2tTZWxlY3RvciBvcHRpb24ge1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIH1cbiAgICAgICAgdmctdHJhY2stc2VsZWN0b3IgLnRyYWNrLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICB2Zy10cmFjay1zZWxlY3RvciAudmctaWNvbi1jbG9zZWRfY2FwdGlvbjpiZWZvcmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgVmdUcmFja1NlbGVjdG9yIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG5cbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcbiAgICB0YXJnZXQ6IGFueTtcbiAgICB0cmFja3M6IEFycmF5PE9wdGlvbj47XG4gICAgdHJhY2tTZWxlY3RlZDogc3RyaW5nO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIGFyaWFWYWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuQVBJLmlzUGxheWVyUmVhZHkpIHtcbiAgICAgICAgICAgIHRoaXMub25QbGF5ZXJSZWFkeSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5BUEkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5vblBsYXllclJlYWR5KCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUGxheWVyUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGhpcy5BUEkuZ2V0TWVkaWFCeUlkKHRoaXMudmdGb3IpO1xuXG4gICAgICAgIGNvbnN0IHN1YnM6IEFycmF5PE9wdGlvbj4gPSBBcnJheS5mcm9tKCh0aGlzLkFQSS5nZXRNYXN0ZXJNZWRpYSgpLmVsZW0gYXMgSFRNTE1lZGlhRWxlbWVudCkuY2hpbGRyZW4pXG4gICAgICAgICAgICAuZmlsdGVyKChpdGVtOiBIVE1MRWxlbWVudCkgPT4gaXRlbS50YWdOYW1lID09PSAnVFJBQ0snKVxuICAgICAgICAgICAgLmZpbHRlcigoaXRlbTogSFRNTFRyYWNrRWxlbWVudCkgPT4gaXRlbS5raW5kID09PSAnc3VidGl0bGVzJylcbiAgICAgICAgICAgIC5tYXAoKGl0ZW06IEhUTUxUcmFja0VsZW1lbnQpID0+ICh7XG4gICAgICAgICAgICAgICAgbGFiZWw6IGl0ZW0ubGFiZWwsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGl0ZW0uZGVmYXVsdCA9PT0gdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZDogaXRlbS5zcmNsYW5nXG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy50cmFja3MgPSBbXG4gICAgICAgICAgICAuLi5zdWJzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnT2ZmJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogc3Vicy5ldmVyeSgoaXRlbTogT3B0aW9uKSA9PiBpdGVtLnNlbGVjdGVkID09PSBmYWxzZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcblxuICAgICAgICBjb25zdCB0cmFjazogT3B0aW9uID0gdGhpcy50cmFja3MuZmlsdGVyKChpdGVtOiBPcHRpb24pID0+IGl0ZW0uc2VsZWN0ZWQgPT09IHRydWUpWyAwIF07XG4gICAgICAgIHRoaXMudHJhY2tTZWxlY3RlZCA9IHRyYWNrLmlkO1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRyYWNrLmxhYmVsO1xuICAgIH1cblxuICAgIHNlbGVjdFRyYWNrKHRyYWNrSWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnRyYWNrU2VsZWN0ZWQgPSAodHJhY2tJZCA9PT0gJ251bGwnKSA/IG51bGwgOiB0cmFja0lkO1xuXG4gICAgICAgIHRoaXMuYXJpYVZhbHVlID0gJ05vIHRyYWNrIHNlbGVjdGVkJztcblxuICAgICAgICBBcnJheS5mcm9tKCh0aGlzLkFQSS5nZXRNYXN0ZXJNZWRpYSgpLmVsZW0gYXMgSFRNTE1lZGlhRWxlbWVudCkudGV4dFRyYWNrcylcbiAgICAgICAgICAgIC5mb3JFYWNoKChpdGVtOiBUZXh0VHJhY2spID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5sYW5ndWFnZSA9PT0gdHJhY2tJZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IGl0ZW0ubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9kZSA9ICdzaG93aW5nJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLm1vZGUgPSAnaGlkZGVuJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/controls/vg-volume/vg-volume.js":
/*!**********************************************************************!*\
  !*** ./node_modules/videogular2/src/controls/vg-volume/vg-volume.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var VgVolume = /** @class */ (function () {
    function VgVolume(ref, API) {
        this.API = API;
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.isDragging = false;
    }
    VgVolume.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgVolume.prototype.onPlayerReady = function () {
        this.target = this.API.getMediaById(this.vgFor);
        this.ariaValue = this.getVolume() * 100;
    };
    VgVolume.prototype.onClick = function (event) {
        this.setVolume(this.calculateVolume(event.clientX));
    };
    VgVolume.prototype.onMouseDown = function (event) {
        this.mouseDownPosX = event.clientX;
        this.isDragging = true;
    };
    VgVolume.prototype.onDrag = function (event) {
        if (this.isDragging) {
            this.setVolume(this.calculateVolume(event.clientX));
        }
    };
    VgVolume.prototype.onStopDrag = function (event) {
        if (this.isDragging) {
            this.isDragging = false;
            if (this.mouseDownPosX === event.clientX) {
                this.setVolume(this.calculateVolume(event.clientX));
            }
        }
    };
    VgVolume.prototype.arrowAdjustVolume = function (event) {
        if (event.keyCode === 38 || event.keyCode === 39) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, (this.getVolume() * 100) + 10)));
        }
        else if (event.keyCode === 37 || event.keyCode === 40) {
            event.preventDefault();
            this.setVolume(Math.max(0, Math.min(100, (this.getVolume() * 100) - 10)));
        }
    };
    VgVolume.prototype.calculateVolume = function (mousePosX) {
        var recObj = this.volumeBarRef.nativeElement.getBoundingClientRect();
        var volumeBarOffsetLeft = recObj.left;
        var volumeBarWidth = recObj.width;
        return (mousePosX - volumeBarOffsetLeft) / volumeBarWidth * 100;
    };
    VgVolume.prototype.setVolume = function (vol) {
        this.target.volume = Math.max(0, Math.min(1, vol / 100));
        this.ariaValue = this.target.volume * 100;
    };
    VgVolume.prototype.getVolume = function () {
        return this.target ? this.target.volume : 0;
    };
    VgVolume.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgVolume.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-volume',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "\n        <div \n            #volumeBar\n            class=\"volumeBar\"\n            tabindex=\"0\"\n            role=\"slider\"\n            aria-label=\"volume level\"\n            aria-level=\"polite\"\n            [attr.aria-valuenow]=\"ariaValue\"\n            aria-valuemin=\"0\"\n            aria-valuemax=\"100\"\n            aria-orientation=\"horizontal\"\n            [attr.aria-valuetext]=\"ariaValue + '%'\"\n            (click)=\"onClick($event)\"\n            (mousedown)=\"onMouseDown($event)\">\n            <div class=\"volumeBackground\" [ngClass]=\"{dragging: isDragging}\">\n                <div class=\"volumeValue\" [style.width]=\"(getVolume() * (100-15)) + '%'\"></div>\n                <div class=\"volumeKnob\" [style.left]=\"(getVolume() * (100-15)) + '%'\"></div>\n            </div>\n        </div>\n    ",
                    styles: ["\n        vg-volume {\n            -webkit-touch-callout: none;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            -ms-user-select: none;\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            height: 50px;\n            width: 100px;\n            cursor: pointer;\n            color: white;\n            line-height: 50px;\n        }\n        vg-volume .volumeBar {\n            position: relative;\n            display: flex;\n            flex-grow: 1;\n            align-items: center;\n        }\n        vg-volume .volumeBackground {\n            display: flex;\n            flex-grow: 1;\n            height: 5px;\n            pointer-events: none;\n            background-color: #333;\n        }\n        vg-volume .volumeValue {\n            display: flex;\n            height: 5px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeKnob {\n            position: absolute;\n            width: 15px; height: 15px;\n            left: 0; top: 50%;\n            transform: translateY(-50%);\n            border-radius: 15px;\n            pointer-events: none;\n            background-color: #FFF;\n            transition:all 0.2s ease-out;\n        }\n        vg-volume .volumeBackground.dragging .volumeValue,\n        vg-volume .volumeBackground.dragging .volumeKnob {\n            transition: none;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgVolume.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
    ]; };
    VgVolume.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "volumeBarRef": [{ type: core_1.ViewChild, args: ['volumeBar',] },],
        "onDrag": [{ type: core_1.HostListener, args: ['document:mousemove', ['$event'],] },],
        "onStopDrag": [{ type: core_1.HostListener, args: ['document:mouseup', ['$event'],] },],
        "arrowAdjustVolume": [{ type: core_1.HostListener, args: ['keydown', ['$event'],] },],
    };
    return VgVolume;
}());
exports.VgVolume = VgVolume;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdm9sdW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctdm9sdW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLHFEQUFtRDs7SUEwRi9DLGtCQUFZLEdBQWUsRUFBUyxHQUFVO1FBQVYsUUFBRyxHQUFILEdBQUcsQ0FBTzs2QkFGZCxFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztLQUMzQjtJQUVELDJCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsR0FBRyxDQUFDO0tBQzNDO0lBRUQsMEJBQU8sR0FBUCxVQUFRLEtBQTBCO1FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUEwQjtRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUss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S0osZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxxMEJBb0JUO29CQUNELE1BQU0sRUFBRSxDQUFFLGcvQ0FpRFQsQ0FBRTtpQkFDTjs7OztnQkFoRnFCLGlCQUFVO2dCQUd2QixjQUFLOzs7MEJBK0VULFlBQUs7aUNBQ0wsZ0JBQVMsU0FBQyxXQUFXOzJCQXNDckIsbUJBQVksU0FBQyxvQkFBb0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTsrQkFPL0MsbUJBQVksU0FBQyxrQkFBa0IsRUFBRSxDQUFFLFFBQVEsQ0FBRTtzQ0FVN0MsbUJBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O21CQTNJdkM7O0FBa0ZhLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIFZpZXdDaGlsZCxcbiAgICBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ0FQSSB9IGZyb20gJy4uLy4uL2NvcmUvc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3ZnLXZvbHVtZScsXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFxuICAgICAgICAgICAgI3ZvbHVtZUJhclxuICAgICAgICAgICAgY2xhc3M9XCJ2b2x1bWVCYXJcIlxuICAgICAgICAgICAgdGFiaW5kZXg9XCIwXCJcbiAgICAgICAgICAgIHJvbGU9XCJzbGlkZXJcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cInZvbHVtZSBsZXZlbFwiXG4gICAgICAgICAgICBhcmlhLWxldmVsPVwicG9saXRlXCJcbiAgICAgICAgICAgIFthdHRyLmFyaWEtdmFsdWVub3ddPVwiYXJpYVZhbHVlXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICAgICAgYXJpYS1vcmllbnRhdGlvbj1cImhvcml6b250YWxcIlxuICAgICAgICAgICAgW2F0dHIuYXJpYS12YWx1ZXRleHRdPVwiYXJpYVZhbHVlICsgJyUnXCJcbiAgICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrKCRldmVudClcIlxuICAgICAgICAgICAgKG1vdXNlZG93bik9XCJvbk1vdXNlRG93bigkZXZlbnQpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lQmFja2dyb3VuZFwiIFtuZ0NsYXNzXT1cIntkcmFnZ2luZzogaXNEcmFnZ2luZ31cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidm9sdW1lVmFsdWVcIiBbc3R5bGUud2lkdGhdPVwiKGdldFZvbHVtZSgpICogKDEwMC0xNSkpICsgJyUnXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZvbHVtZUtub2JcIiBbc3R5bGUubGVmdF09XCIoZ2V0Vm9sdW1lKCkgKiAoMTAwLTE1KSkgKyAnJSdcIj48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICBgLFxuICAgIHN0eWxlczogWyBgXG4gICAgICAgIHZnLXZvbHVtZSB7XG4gICAgICAgICAgICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gICAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVCYXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVCYWNrZ3JvdW5kIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICAgICAgfVxuICAgICAgICB2Zy12b2x1bWUgLnZvbHVtZVZhbHVlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgdmctdm9sdW1lIC52b2x1bWVLbm9iIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4OyBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICBsZWZ0OiAwOyB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzIGVhc2Utb3V0O1xuICAgICAgICB9XG4gICAgICAgIHZnLXZvbHVtZSAudm9sdW1lQmFja2dyb3VuZC5kcmFnZ2luZyAudm9sdW1lVmFsdWUsXG4gICAgICAgIHZnLXZvbHVtZSAudm9sdW1lQmFja2dyb3VuZC5kcmFnZ2luZyAudm9sdW1lS25vYiB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgICAgICB9XG4gICAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIFZnVm9sdW1lIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgQFZpZXdDaGlsZCgndm9sdW1lQmFyJykgdm9sdW1lQmFyUmVmOiBFbGVtZW50UmVmO1xuXG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG4gICAgaXNEcmFnZ2luZzogYm9vbGVhbjtcbiAgICBtb3VzZURvd25Qb3NYOiBudW1iZXI7XG4gICAgYXJpYVZhbHVlOiBudW1iZXI7XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgQVBJOiBWZ0FQSSkge1xuICAgICAgICB0aGlzLmVsZW0gPSByZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLkFQSS5pc1BsYXllclJlYWR5KSB7XG4gICAgICAgICAgICB0aGlzLm9uUGxheWVyUmVhZHkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuQVBJLnBsYXllclJlYWR5RXZlbnQuc3Vic2NyaWJlKCgpID0+IHRoaXMub25QbGF5ZXJSZWFkeSgpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRoaXMuQVBJLmdldE1lZGlhQnlJZCh0aGlzLnZnRm9yKTtcbiAgICAgICAgdGhpcy5hcmlhVmFsdWUgPSB0aGlzLmdldFZvbHVtZSgpICogMTAwO1xuICAgIH1cblxuICAgIG9uQ2xpY2soZXZlbnQ6IHsgY2xpZW50WDogbnVtYmVyIH0pIHtcbiAgICAgICAgdGhpcy5zZXRWb2x1bWUodGhpcy5jYWxjdWxhdGVWb2x1bWUoZXZlbnQuY2xpZW50WCkpO1xuICAgIH1cblxuICAgIG9uTW91c2VEb3duKGV2ZW50OiB7IGNsaWVudFg6IG51bWJlciB9KSB7XG4gICAgICAgIHRoaXMubW91c2VEb3duUG9zWCA9IGV2ZW50LmNsaWVudFg7XG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2Vtb3ZlJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uRHJhZyhldmVudDogeyBjbGllbnRYOiBudW1iZXIgfSkge1xuICAgICAgICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldFZvbHVtZSh0aGlzLmNhbGN1bGF0ZVZvbHVtZShldmVudC5jbGllbnRYKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyAnJGV2ZW50JyBdKVxuICAgIG9uU3RvcERyYWcoZXZlbnQ6IHsgY2xpZW50WDogbnVtYmVyIH0pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgICAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3VzZURvd25Qb3NYID09PSBldmVudC5jbGllbnRYKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUodGhpcy5jYWxjdWxhdGVWb2x1bWUoZXZlbnQuY2xpZW50WCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXG4gICAgYXJyb3dBZGp1c3RWb2x1bWUoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCh0aGlzLmdldFZvbHVtZSgpICogMTAwKSArIDEwKSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM3IHx8IGV2ZW50LmtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRWb2x1bWUoTWF0aC5tYXgoMCwgTWF0aC5taW4oMTAwLCh0aGlzLmdldFZvbHVtZSgpICogMTAwKSAtIDEwKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2FsY3VsYXRlVm9sdW1lKG1vdXNlUG9zWDogbnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IHJlY09iaiA9IHRoaXMudm9sdW1lQmFyUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IHZvbHVtZUJhck9mZnNldExlZnQ6IG51bWJlciA9IHJlY09iai5sZWZ0O1xuICAgICAgICBjb25zdCB2b2x1bWVCYXJXaWR0aDogbnVtYmVyID0gcmVjT2JqLndpZHRoO1xuICAgICAgICByZXR1cm4gKG1vdXNlUG9zWCAtIHZvbHVtZUJhck9mZnNldExlZnQpIC8gdm9sdW1lQmFyV2lkdGggKiAxMDA7XG4gICAgfVxuXG4gICAgc2V0Vm9sdW1lKHZvbDogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0LnZvbHVtZSA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHZvbCAvIDEwMCkpO1xuICAgICAgICB0aGlzLmFyaWFWYWx1ZSA9IHRoaXMudGFyZ2V0LnZvbHVtZSAqIDEwMDtcbiAgICB9XG5cbiAgICBnZXRWb2x1bWUoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQudm9sdW1lIDogMDtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/core.js":
/*!***************************************************!*\
  !*** ./node_modules/videogular2/src/core/core.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_player_1 = __webpack_require__(/*! ./vg-player/vg-player */ "./node_modules/videogular2/src/core/vg-player/vg-player.js");
var vg_media_1 = __webpack_require__(/*! ./vg-media/vg-media */ "./node_modules/videogular2/src/core/vg-media/vg-media.js");
var vg_cue_points_1 = __webpack_require__(/*! ./vg-cue-points/vg-cue-points */ "./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js");
var vg_api_1 = __webpack_require__(/*! ./services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ./services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var vg_utils_1 = __webpack_require__(/*! ./services/vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ./services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
// components
__export(__webpack_require__(/*! ./vg-player/vg-player */ "./node_modules/videogular2/src/core/vg-player/vg-player.js"));
__export(__webpack_require__(/*! ./vg-media/vg-media */ "./node_modules/videogular2/src/core/vg-media/vg-media.js"));
__export(__webpack_require__(/*! ./vg-cue-points/vg-cue-points */ "./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js"));
// services
__export(__webpack_require__(/*! ./services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js"));
__export(__webpack_require__(/*! ./services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js"));
__export(__webpack_require__(/*! ./services/vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js"));
__export(__webpack_require__(/*! ./services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js"));
// types
__export(__webpack_require__(/*! ./events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js"));
__export(__webpack_require__(/*! ./states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js"));
// utility classes
__export(__webpack_require__(/*! ./vg-media/vg-media-element */ "./node_modules/videogular2/src/core/vg-media/vg-media-element.js"));
/**
 * @internal
 */
function coreDirectives() {
    return [
        vg_player_1.VgPlayer, vg_media_1.VgMedia, vg_cue_points_1.VgCuePoints
    ];
}
exports.coreDirectives = coreDirectives;
function coreServices() {
    return [
        vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_utils_1.VgUtils, vg_controls_hidden_1.VgControlsHidden
    ];
}
exports.coreServices = coreServices;
var VgCoreModule = /** @class */ (function () {
    function VgCoreModule() {
    }
    VgCoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: coreDirectives(),
                    exports: coreDirectives(),
                    providers: coreServices()
                },] },
    ];
    return VgCoreModule;
}());
exports.VgCoreModule = VgCoreModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzQ0FBbUQ7QUFDbkQsbURBQWlEO0FBQ2pELGdEQUE4QztBQUM5QywrREFBNEQ7QUFDNUQsNENBQTBDO0FBQzFDLGtFQUErRDtBQUMvRCxnREFBOEM7QUFDOUMsb0VBQWlFO0FBR2pFLGFBQWE7QUFDYiwyQ0FBc0M7QUFDdEMseUNBQW9DO0FBQ3BDLG1EQUE4QztBQUU5QyxXQUFXO0FBQ1gsdUNBQWtDO0FBQ2xDLGtEQUE2QztBQUM3Qyx5Q0FBb0M7QUFDcEMsbURBQThDO0FBRTlDLFFBQVE7QUFDUix3Q0FBbUM7QUFDbkMsd0NBQW1DO0FBS25DLGtCQUFrQjtBQUNsQixpREFBNEM7Ozs7QUFjNUM7SUFDSSxNQUFNLENBQUM7UUFDSCxvQkFBUSxFQUFFLGtCQUFPLEVBQUUsMkJBQVc7S0FDakMsQ0FBQztDQUNMO0FBSkQsd0NBSUM7QUFFRDtJQUNJLE1BQU0sQ0FBQztRQUNILGNBQUssRUFBRSxtQ0FBZSxFQUFFLGtCQUFPLEVBQUUscUNBQWdCO0tBQ3BELENBQUM7Q0FDTDtBQUpELG9DQUlDOzs7OztnQkFFQSxlQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLGNBQWMsRUFBRTtvQkFDOUIsT0FBTyxFQUFFLGNBQWMsRUFBRTtvQkFDekIsU0FBUyxFQUFFLFlBQVksRUFBRTtpQkFDNUI7O3VCQTNERDs7QUE0RGEsb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnUGxheWVyIH0gZnJvbSAnLi92Zy1wbGF5ZXIvdmctcGxheWVyJztcbmltcG9ydCB7IFZnTWVkaWEgfSBmcm9tICcuL3ZnLW1lZGlhL3ZnLW1lZGlhJztcbmltcG9ydCB7IFZnQ3VlUG9pbnRzIH0gZnJvbSAnLi92Zy1jdWUtcG9pbnRzL3ZnLWN1ZS1wb2ludHMnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ0Z1bGxzY3JlZW5BUEkgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFZnVXRpbHMgfSBmcm9tICcuL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmltcG9ydCB7IFZnQ29udHJvbHNIaWRkZW4gfSBmcm9tICcuL3NlcnZpY2VzL3ZnLWNvbnRyb2xzLWhpZGRlbic7XG5cblxuLy8gY29tcG9uZW50c1xuZXhwb3J0ICogZnJvbSAnLi92Zy1wbGF5ZXIvdmctcGxheWVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmctbWVkaWEvdmctbWVkaWEnO1xuZXhwb3J0ICogZnJvbSAnLi92Zy1jdWUtcG9pbnRzL3ZnLWN1ZS1wb2ludHMnO1xuXG4vLyBzZXJ2aWNlc1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy92Zy1mdWxsc2NyZWVuLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3ZnLXV0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcblxuLy8gdHlwZXNcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlcy92Zy1zdGF0ZXMnO1xuXG4vLyBpbnRlcmZhY2VzXG5leHBvcnQgKiBmcm9tICcuL3ZnLW1lZGlhL2ktbWVkaWEtZWxlbWVudCc7XG5cbi8vIHV0aWxpdHkgY2xhc3Nlc1xuZXhwb3J0ICogZnJvbSAnLi92Zy1tZWRpYS92Zy1tZWRpYS1lbGVtZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBCaXRyYXRlT3B0aW9uIHtcbiAgICBxdWFsaXR5SW5kZXg6IG51bWJlcjtcbiAgICB3aWR0aDogbnVtYmVyO1xuICAgIGhlaWdodDogbnVtYmVyO1xuICAgIGJpdHJhdGU6IG51bWJlcjtcbiAgICBtZWRpYVR5cGU6IHN0cmluZztcbiAgICBsYWJlbD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaW50ZXJuYWxcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvcmVEaXJlY3RpdmVzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIFZnUGxheWVyLCBWZ01lZGlhLCBWZ0N1ZVBvaW50c1xuICAgIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb3JlU2VydmljZXMoKTogUHJvdmlkZXJbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgVmdBUEksIFZnRnVsbHNjcmVlbkFQSSwgVmdVdGlscywgVmdDb250cm9sc0hpZGRlblxuICAgIF07XG59XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBjb3JlRGlyZWN0aXZlcygpLFxuICAgIGV4cG9ydHM6IGNvcmVEaXJlY3RpdmVzKCksXG4gICAgcHJvdmlkZXJzOiBjb3JlU2VydmljZXMoKVxufSlcbmV4cG9ydCBjbGFzcyBWZ0NvcmVNb2R1bGUge1xufVxuIl19

/***/ }),

/***/ "./node_modules/videogular2/src/core/events/vg-events.js":
/*!***************************************************************!*\
  !*** ./node_modules/videogular2/src/core/events/vg-events.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgEvents = /** @class */ (function () {
    function VgEvents() {
    }
    VgEvents.VG_ABORT = 'abort';
    VgEvents.VG_CAN_PLAY = 'canplay';
    VgEvents.VG_CAN_PLAY_THROUGH = 'canplaythrough';
    VgEvents.VG_DURATION_CHANGE = 'durationchange';
    VgEvents.VG_EMPTIED = 'emptied';
    VgEvents.VG_ENCRYPTED = 'encrypted';
    VgEvents.VG_ENDED = 'ended';
    VgEvents.VG_ERROR = 'error';
    VgEvents.VG_LOADED_DATA = 'loadeddata';
    VgEvents.VG_LOADED_METADATA = 'loadedmetadata';
    VgEvents.VG_LOAD_START = 'loadstart';
    VgEvents.VG_PAUSE = 'pause';
    VgEvents.VG_PLAY = 'play';
    VgEvents.VG_PLAYING = 'playing';
    VgEvents.VG_PROGRESS = 'progress';
    VgEvents.VG_RATE_CHANGE = 'ratechange';
    VgEvents.VG_SEEK = 'seek';
    VgEvents.VG_SEEKED = 'seeked';
    VgEvents.VG_SEEKING = 'seeking';
    VgEvents.VG_STALLED = 'stalled';
    VgEvents.VG_SUSPEND = 'suspend';
    VgEvents.VG_TIME_UPDATE = 'timeupdate';
    VgEvents.VG_VOLUME_CHANGE = 'volumechange';
    VgEvents.VG_WAITING = 'waiting';
    VgEvents.VG_LOAD = 'load';
    VgEvents.VG_ENTER = 'enter';
    VgEvents.VG_EXIT = 'exit';
    VgEvents.VG_START_ADS = 'startads';
    VgEvents.VG_END_ADS = 'endads';
    VgEvents.decorators = [
        { type: core_1.Injectable },
    ];
    return VgEvents;
}());
exports.VgEvents = VgEvents;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZXZlbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctZXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDOzs7O3dCQUlYLE9BQU87MkJBQ0osU0FBUzttQ0FDRCxnQkFBZ0I7a0NBQ2pCLGdCQUFnQjswQkFDeEIsU0FBUzs0QkFDUCxXQUFXO3dCQUNmLE9BQU87d0JBQ1AsT0FBTzs4QkFDRCxZQUFZO2tDQUNSLGdCQUFnQjs2QkFDckIsV0FBVzt3QkFDaEIsT0FBTzt1QkFDUixNQUFNOzBCQUNILFNBQVM7MkJBQ1IsVUFBVTs4QkFDUCxZQUFZO3VCQUNuQixNQUFNO3lCQUNKLFFBQVE7MEJBQ1AsU0FBUzswQkFDVCxTQUFTOzBCQUNULFNBQVM7OEJBQ0wsWUFBWTtnQ0FDVixjQUFjOzBCQUNwQixTQUFTO3VCQUVaLE1BQU07d0JBQ0wsT0FBTzt1QkFDUixNQUFNOzRCQUVELFVBQVU7MEJBQ1osUUFBUTs7Z0JBaEN2QyxpQkFBVTs7bUJBRlg7O0FBR2EsNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdFdmVudHMge1xuICAgIHN0YXRpYyBWR19BQk9SVDogc3RyaW5nID0gJ2Fib3J0JztcbiAgICBzdGF0aWMgVkdfQ0FOX1BMQVk6IHN0cmluZyA9ICdjYW5wbGF5JztcbiAgICBzdGF0aWMgVkdfQ0FOX1BMQVlfVEhST1VHSDogc3RyaW5nID0gJ2NhbnBsYXl0aHJvdWdoJztcbiAgICBzdGF0aWMgVkdfRFVSQVRJT05fQ0hBTkdFOiBzdHJpbmcgPSAnZHVyYXRpb25jaGFuZ2UnO1xuICAgIHN0YXRpYyBWR19FTVBUSUVEOiBzdHJpbmcgPSAnZW1wdGllZCc7XG4gICAgc3RhdGljIFZHX0VOQ1JZUFRFRDogc3RyaW5nID0gJ2VuY3J5cHRlZCc7XG4gICAgc3RhdGljIFZHX0VOREVEOiBzdHJpbmcgPSAnZW5kZWQnO1xuICAgIHN0YXRpYyBWR19FUlJPUjogc3RyaW5nID0gJ2Vycm9yJztcbiAgICBzdGF0aWMgVkdfTE9BREVEX0RBVEE6IHN0cmluZyA9ICdsb2FkZWRkYXRhJztcbiAgICBzdGF0aWMgVkdfTE9BREVEX01FVEFEQVRBOiBzdHJpbmcgPSAnbG9hZGVkbWV0YWRhdGEnO1xuICAgIHN0YXRpYyBWR19MT0FEX1NUQVJUOiBzdHJpbmcgPSAnbG9hZHN0YXJ0JztcbiAgICBzdGF0aWMgVkdfUEFVU0U6IHN0cmluZyA9ICdwYXVzZSc7XG4gICAgc3RhdGljIFZHX1BMQVk6IHN0cmluZyA9ICdwbGF5JztcbiAgICBzdGF0aWMgVkdfUExBWUlORzogc3RyaW5nID0gJ3BsYXlpbmcnO1xuICAgIHN0YXRpYyBWR19QUk9HUkVTUzogc3RyaW5nID0gJ3Byb2dyZXNzJztcbiAgICBzdGF0aWMgVkdfUkFURV9DSEFOR0U6IHN0cmluZyA9ICdyYXRlY2hhbmdlJztcbiAgICBzdGF0aWMgVkdfU0VFSzogc3RyaW5nID0gJ3NlZWsnO1xuICAgIHN0YXRpYyBWR19TRUVLRUQ6IHN0cmluZyA9ICdzZWVrZWQnO1xuICAgIHN0YXRpYyBWR19TRUVLSU5HOiBzdHJpbmcgPSAnc2Vla2luZyc7XG4gICAgc3RhdGljIFZHX1NUQUxMRUQ6IHN0cmluZyA9ICdzdGFsbGVkJztcbiAgICBzdGF0aWMgVkdfU1VTUEVORDogc3RyaW5nID0gJ3N1c3BlbmQnO1xuICAgIHN0YXRpYyBWR19USU1FX1VQREFURTogc3RyaW5nID0gJ3RpbWV1cGRhdGUnO1xuICAgIHN0YXRpYyBWR19WT0xVTUVfQ0hBTkdFOiBzdHJpbmcgPSAndm9sdW1lY2hhbmdlJztcbiAgICBzdGF0aWMgVkdfV0FJVElORzogc3RyaW5nID0gJ3dhaXRpbmcnO1xuICAgIFxuICAgIHN0YXRpYyBWR19MT0FEOiBzdHJpbmcgPSAnbG9hZCc7XG4gICAgc3RhdGljIFZHX0VOVEVSOiBzdHJpbmcgPSAnZW50ZXInO1xuICAgIHN0YXRpYyBWR19FWElUOiBzdHJpbmcgPSAnZXhpdCc7XG5cbiAgICBzdGF0aWMgVkdfU1RBUlRfQURTOiBzdHJpbmcgPSAnc3RhcnRhZHMnO1xuICAgIHN0YXRpYyBWR19FTkRfQURTOiBzdHJpbmcgPSAnZW5kYWRzJztcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-api.js":
/*!**************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-api.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_states_1 = __webpack_require__(/*! ../states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var VgAPI = /** @class */ (function () {
    function VgAPI() {
        this.medias = {};
        this.playerReadyEvent = new core_1.EventEmitter(true);
        this.isPlayerReady = false;
    }
    VgAPI.prototype.onPlayerReady = function (fsAPI) {
        this.fsAPI = fsAPI;
        this.isPlayerReady = true;
        this.playerReadyEvent.emit(this);
    };
    VgAPI.prototype.getDefaultMedia = function () {
        for (var item in this.medias) {
            if (this.medias[item]) {
                return this.medias[item];
            }
        }
    };
    VgAPI.prototype.getMasterMedia = function () {
        var master;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                master = this.medias[id];
                break;
            }
        }
        return master || this.getDefaultMedia();
    };
    VgAPI.prototype.isMasterDefined = function () {
        var result = false;
        for (var id in this.medias) {
            if (this.medias[id].vgMedia === 'true' || this.medias[id].vgMedia === true) {
                result = true;
                break;
            }
        }
        return result;
    };
    VgAPI.prototype.getMediaById = function (id) {
        if (id === void 0) { id = null; }
        var media = this.medias[id];
        if (!id || id === '*') {
            media = this;
        }
        return media;
    };
    VgAPI.prototype.play = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].play();
            }
        }
    };
    VgAPI.prototype.pause = function () {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id].pause();
            }
        }
    };
    Object.defineProperty(VgAPI.prototype, "duration", {
        get: function () {
            return this.$$getAllProperties('duration');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "currentTime", {
        get: function () {
            return this.$$getAllProperties('currentTime');
        },
        set: function (seconds) {
            this.$$setAllProperties('currentTime', seconds);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "state", {
        get: function () {
            return this.$$getAllProperties('state');
        },
        set: function (state) {
            this.$$setAllProperties('state', state);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "volume", {
        get: function () {
            return this.$$getAllProperties('volume');
        },
        set: function (volume) {
            this.$$setAllProperties('volume', volume);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "playbackRate", {
        get: function () {
            return this.$$getAllProperties('playbackRate');
        },
        set: function (rate) {
            this.$$setAllProperties('playbackRate', rate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlay", {
        get: function () {
            return this.$$getAllProperties('canPlay');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "canPlayThrough", {
        get: function () {
            return this.$$getAllProperties('canPlayThrough');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMetadataLoaded", {
        get: function () {
            return this.$$getAllProperties('isMetadataLoaded');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isWaiting", {
        get: function () {
            return this.$$getAllProperties('isWaiting');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isCompleted", {
        get: function () {
            return this.$$getAllProperties('isCompleted');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isLive", {
        get: function () {
            return this.$$getAllProperties('isLive');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "isMaster", {
        get: function () {
            return this.$$getAllProperties('isMaster');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "time", {
        get: function () {
            return this.$$getAllProperties('time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffer", {
        get: function () {
            return this.$$getAllProperties('buffer');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "buffered", {
        get: function () {
            return this.$$getAllProperties('buffered');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "subscriptions", {
        get: function () {
            return this.$$getAllProperties('subscriptions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgAPI.prototype, "textTracks", {
        get: function () {
            return this.$$getAllProperties('textTracks');
        },
        enumerable: true,
        configurable: true
    });
    VgAPI.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$seek(this.medias[id], value, byPercent);
            }
        }
    };
    VgAPI.prototype.$$seek = function (media, value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = media.duration;
        if (byPercent) {
            if (this.isMasterDefined()) {
                duration = this.getMasterMedia().duration;
            }
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        media.currentTime = second;
    };
    VgAPI.prototype.addTextTrack = function (type, label, language) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.$$addTextTrack(this.medias[id], type, label, language);
            }
        }
    };
    VgAPI.prototype.$$addTextTrack = function (media, type, label, language) {
        media.addTextTrack(type, label, language);
    };
    VgAPI.prototype.$$getAllProperties = function (property) {
        var medias = {};
        var result;
        for (var id in this.medias) {
            if (this.medias[id]) {
                medias[id] = this.medias[id];
            }
        }
        var nMedias = Object.keys(medias).length;
        switch (nMedias) {
            case 0:
                // Return default values until vgMedia is initialized
                switch (property) {
                    case 'state':
                        result = vg_states_1.VgStates.VG_PAUSED;
                        break;
                    case 'playbackRate':
                    case 'volume':
                        result = 1;
                        break;
                    case 'time':
                        result = { current: 0, total: 0, left: 0 };
                        break;
                }
                break;
            case 1:
                // If there's only one media element then return the plain value
                var firstMediaId = Object.keys(medias)[0];
                result = medias[firstMediaId][property];
                break;
            default:
                // TODO: return 'master' value
                var master = this.getMasterMedia();
                result = medias[master.id][property];
        }
        return result;
    };
    VgAPI.prototype.$$setAllProperties = function (property, value) {
        for (var id in this.medias) {
            if (this.medias[id]) {
                this.medias[id][property] = value;
            }
        }
    };
    VgAPI.prototype.registerElement = function (elem) {
        this.videogularElement = elem;
    };
    VgAPI.prototype.registerMedia = function (media) {
        this.medias[media.id] = media;
    };
    VgAPI.prototype.unregisterMedia = function (media) {
        delete this.medias[media.id];
    };
    VgAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgAPI.ctorParameters = function () { return []; };
    return VgAPI;
}());
exports.VgAPI = VgAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBRXZELGlEQUE2Qzs7SUFXekM7c0JBTmdCLEVBQUU7Z0NBRW9CLElBQUksbUJBQVksQ0FBQyxJQUFJLENBQUM7NkJBQ25DLEtBQUs7S0FLN0I7SUFFRCw2QkFBYSxHQUFiLFVBQWMsS0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNwQztJQUVELCtCQUFlLEdBQWY7UUFDSSxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDNUI7U0FDSjtLQUNKO0lBRUQsOEJBQWMsR0FBZDtRQUNJLElBQUksTUFBVSxDQUFDO1FBQ2YsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDekIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUssTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3pFLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN6QixLQUFLLENBQUM7YUFDVDtTQUNKO1FBQ0QsTUFBTSxDQUFD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QUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7S0FDakM7SUFFRCwrQkFBZSxHQUFmLFVBQWdCLEtBQWU7UUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQzs7Z0JBbFFKLGlCQUFVOzs7O2dCQUxYOztBQU1hLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlLCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtJUGxheWFibGV9IGZyb20gXCIuLi92Zy1tZWRpYS9pLXBsYXlhYmxlXCI7XG5pbXBvcnQge1ZnU3RhdGVzfSBmcm9tIFwiLi4vc3RhdGVzL3ZnLXN0YXRlc1wiO1xuaW1wb3J0IHsgVmdGdWxsc2NyZWVuQVBJIH0gZnJvbSAnLi92Zy1mdWxsc2NyZWVuLWFwaSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWZ0FQSSB7XG4gICAgbWVkaWFzOk9iamVjdCA9IHt9Oy8vIFRPRE86IHJlZmFjdG9yIHRvIFNldDxJUGxheWFibGU+IFxuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBhbnk7XG4gICAgcGxheWVyUmVhZHlFdmVudDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKHRydWUpO1xuICAgIGlzUGxheWVyUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBmc0FQSTogVmdGdWxsc2NyZWVuQVBJO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBvblBsYXllclJlYWR5KGZzQVBJOiBWZ0Z1bGxzY3JlZW5BUEkpIHtcbiAgICAgICAgdGhpcy5mc0FQSSA9IGZzQVBJO1xuICAgICAgICB0aGlzLmlzUGxheWVyUmVhZHkgPSB0cnVlO1xuICAgICAgICB0aGlzLnBsYXllclJlYWR5RXZlbnQuZW1pdCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREZWZhdWx0TWVkaWEoKTpJUGxheWFibGUge1xuICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaXRlbV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tZWRpYXNbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRNYXN0ZXJNZWRpYSgpOklQbGF5YWJsZSB7XG4gICAgICAgIGxldCBtYXN0ZXI6YW55O1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXS52Z01lZGlhID09PSAndHJ1ZScgfHwgdGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBtYXN0ZXIgPSB0aGlzLm1lZGlhc1tpZF07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hc3RlciB8fCB0aGlzLmdldERlZmF1bHRNZWRpYSgpO1xuICAgIH1cblxuICAgIGlzTWFzdGVyRGVmaW5lZCgpOmJvb2xlYW4ge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdLnZnTWVkaWEgPT09ICd0cnVlJyB8fCB0aGlzLm1lZGlhc1tpZF0udmdNZWRpYSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBnZXRNZWRpYUJ5SWQoaWQ6c3RyaW5nID0gbnVsbCk6SVBsYXlhYmxlIHtcbiAgICAgICAgbGV0IG1lZGlhID0gdGhpcy5tZWRpYXNbaWRdO1xuXG4gICAgICAgIGlmICghaWQgfHwgaWQgPT09ICcqJykge1xuICAgICAgICAgICAgbWVkaWEgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1lZGlhO1xuICAgIH1cblxuICAgIHBsYXkoKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXNbIGlkIF0ucGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGF1c2UoKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZWRpYXNbaWRdLnBhdXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZHVyYXRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnZHVyYXRpb24nKTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudFRpbWUoc2Vjb25kcykge1xuICAgICAgICB0aGlzLiQkc2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnLCBzZWNvbmRzKTtcbiAgICB9XG5cbiAgICBnZXQgY3VycmVudFRpbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY3VycmVudFRpbWUnKTtcbiAgICB9XG5cbiAgICBzZXQgc3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy4kJHNldEFsbFByb3BlcnRpZXMoJ3N0YXRlJywgc3RhdGUpO1xuICAgIH1cblxuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdzdGF0ZScpO1xuICAgIH1cblxuICAgIHNldCB2b2x1bWUodm9sdW1lKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCd2b2x1bWUnLCB2b2x1bWUpO1xuICAgIH1cblxuICAgIGdldCB2b2x1bWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygndm9sdW1lJyk7XG4gICAgfVxuXG4gICAgc2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICAgIHRoaXMuJCRzZXRBbGxQcm9wZXJ0aWVzKCdwbGF5YmFja1JhdGUnLCByYXRlKTtcbiAgICB9XG5cbiAgICBnZXQgcGxheWJhY2tSYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3BsYXliYWNrUmF0ZScpO1xuICAgIH1cblxuICAgIGdldCBjYW5QbGF5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2NhblBsYXknKTtcbiAgICB9XG5cbiAgICBnZXQgY2FuUGxheVRocm91Z2goKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnY2FuUGxheVRocm91Z2gnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNNZXRhZGF0YUxvYWRlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01ldGFkYXRhTG9hZGVkJyk7XG4gICAgfVxuXG4gICAgZ2V0IGlzV2FpdGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc1dhaXRpbmcnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNDb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZ2V0QWxsUHJvcGVydGllcygnaXNDb21wbGV0ZWQnKTtcbiAgICB9XG5cbiAgICBnZXQgaXNMaXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2lzTGl2ZScpO1xuICAgIH1cblxuICAgIGdldCBpc01hc3RlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdpc01hc3RlcicpO1xuICAgIH1cblxuICAgIGdldCB0aW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3RpbWUnKTtcbiAgICB9XG5cbiAgICBnZXQgYnVmZmVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ2J1ZmZlcicpO1xuICAgIH1cblxuICAgIGdldCBidWZmZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCdidWZmZXJlZCcpO1xuICAgIH1cblxuICAgIGdldCBzdWJzY3JpcHRpb25zKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGdldEFsbFByb3BlcnRpZXMoJ3N1YnNjcmlwdGlvbnMnKTtcbiAgICB9XG5cbiAgICBnZXQgdGV4dFRyYWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRnZXRBbGxQcm9wZXJ0aWVzKCd0ZXh0VHJhY2tzJyk7XG4gICAgfVxuXG4gICAgc2Vla1RpbWUodmFsdWU6bnVtYmVyLCBieVBlcmNlbnQ6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJHNlZWsodGhpcy5tZWRpYXNbIGlkIF0sIHZhbHVlLCBieVBlcmNlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJCRzZWVrKG1lZGlhOklQbGF5YWJsZSwgdmFsdWU6bnVtYmVyLCBieVBlcmNlbnQ6Ym9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGxldCBzZWNvbmQ6bnVtYmVyO1xuICAgICAgICBsZXQgZHVyYXRpb246bnVtYmVyID0gbWVkaWEuZHVyYXRpb247XG5cbiAgICAgICAgaWYgKGJ5UGVyY2VudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNYXN0ZXJEZWZpbmVkKCkpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IHRoaXMuZ2V0TWFzdGVyTWVkaWEoKS5kdXJhdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2Vjb25kID0gdmFsdWUgKiBkdXJhdGlvbiAvIDEwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgbWVkaWEuY3VycmVudFRpbWUgPSBzZWNvbmQ7XG4gICAgfVxuXG4gICAgYWRkVGV4dFRyYWNrKHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGlkIGluIHRoaXMubWVkaWFzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tZWRpYXNbaWRdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kJGFkZFRleHRUcmFjayh0aGlzLm1lZGlhc1sgaWQgXSwgdHlwZSwgbGFiZWwsIGxhbmd1YWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAkJGFkZFRleHRUcmFjayhtZWRpYTpJUGxheWFibGUsIHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nKSB7XG4gICAgICAgIG1lZGlhLmFkZFRleHRUcmFjayh0eXBlLCBsYWJlbCwgbGFuZ3VhZ2UpO1xuICAgIH1cblxuICAgICQkZ2V0QWxsUHJvcGVydGllcyhwcm9wZXJ0eTpzdHJpbmcpe1xuICAgICAgICBjb25zdCBtZWRpYXMgPSB7fTtcbiAgICAgICAgbGV0IHJlc3VsdDphbnk7XG5cbiAgICAgICAgZm9yIChsZXQgaWQgaW4gdGhpcy5tZWRpYXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1lZGlhc1tpZF0pIHtcbiAgICAgICAgICAgICAgICBtZWRpYXNbIGlkIF0gPSB0aGlzLm1lZGlhc1sgaWQgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5NZWRpYXMgPSBPYmplY3Qua2V5cyhtZWRpYXMpLmxlbmd0aDtcbiAgICAgICAgc3dpdGNoIChuTWVkaWFzKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGRlZmF1bHQgdmFsdWVzIHVudGlsIHZnTWVkaWEgaXMgaW5pdGlhbGl6ZWRcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0YXRlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXliYWNrUmF0ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZvbHVtZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGltZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB7Y3VycmVudDogMCwgdG90YWw6IDAsIGxlZnQ6IDB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IG9uZSBtZWRpYSBlbGVtZW50IHRoZW4gcmV0dXJuIHRoZSBwbGFpbiB2YWx1ZVxuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0TWVkaWFJZCA9IE9iamVjdC5rZXlzKG1lZGlhcylbMF07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbWVkaWFzW2ZpcnN0TWVkaWFJZF1bcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiByZXR1cm4gJ21hc3RlcicgdmFsdWVcbiAgICAgICAgICAgICAgICBsZXQgbWFzdGVyID0gdGhpcy5nZXRNYXN0ZXJNZWRpYSgpO1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IG1lZGlhc1ttYXN0ZXIuaWRdW3Byb3BlcnR5XTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICAkJHNldEFsbFByb3BlcnRpZXMocHJvcGVydHk6c3RyaW5nLCB2YWx1ZTphbnkpe1xuICAgICAgICBmb3IgKGxldCBpZCBpbiB0aGlzLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMubWVkaWFzW2lkXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVkaWFzWyBpZCBdWyBwcm9wZXJ0eSBdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckVsZW1lbnQoZWxlbTpIVE1MRWxlbWVudCkge1xuICAgICAgICB0aGlzLnZpZGVvZ3VsYXJFbGVtZW50ID0gZWxlbTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck1lZGlhKG1lZGlhOklQbGF5YWJsZSkge1xuICAgICAgICB0aGlzLm1lZGlhc1ttZWRpYS5pZF0gPSBtZWRpYTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyTWVkaWEobWVkaWE6SVBsYXlhYmxlKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLm1lZGlhc1ttZWRpYS5pZF07XG4gICAgfVxuXG5cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js":
/*!**************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-controls-hidden.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgControlsHidden = /** @class */ (function () {
    function VgControlsHidden() {
        this.isHiddenSubject = new rxjs_1.Subject();
        this.isHidden = this.isHiddenSubject.asObservable();
    }
    VgControlsHidden.prototype.state = function (hidden) {
        this.isHiddenSubject.next(hidden);
    };
    VgControlsHidden.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgControlsHidden.ctorParameters = function () { return []; };
    return VgControlsHidden;
}());
exports.VgControlsHidden = VgControlsHidden;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY29udHJvbHMtaGlkZGVuLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctY29udHJvbHMtaGlkZGVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQTZDO0FBQzdDLHNDQUEyQzs7SUFRdkM7K0JBRjRDLElBQUksY0FBTyxFQUFXO1FBRzlELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUN2RDtJQUVELGdDQUFLLEdBQUwsVUFBTSxNQUFlO1FBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ3JDOztnQkFaSixpQkFBVTs7OzsyQkFIWDs7QUFJYSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0ICwgIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZnQ29udHJvbHNIaWRkZW4ge1xuICAgIGlzSGlkZGVuOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gICAgcHJpdmF0ZSBpc0hpZGRlblN1YmplY3Q6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaXNIaWRkZW4gPSB0aGlzLmlzSGlkZGVuU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgICB9XG5cbiAgICBzdGF0ZShoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5pc0hpZGRlblN1YmplY3QubmV4dChoaWRkZW4pO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js":
/*!*************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-fullscreen-api.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_utils_1 = __webpack_require__(/*! ./vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgFullscreenAPI = /** @class */ (function () {
    function VgFullscreenAPI() {
        this.nativeFullscreen = true;
        this.isFullscreen = false;
        this.onChangeFullscreen = new core_1.EventEmitter();
    }
    VgFullscreenAPI.prototype.init = function (elem, medias) {
        var _this = this;
        this.videogularElement = elem;
        this.medias = medias;
        var APIs = {
            w3: {
                enabled: 'fullscreenEnabled',
                element: 'fullscreenElement',
                request: 'requestFullscreen',
                exit: 'exitFullscreen',
                onchange: 'fullscreenchange',
                onerror: 'fullscreenerror'
            },
            newWebkit: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitRequestFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            oldWebkit: {
                enabled: 'webkitIsFullScreen',
                element: 'webkitCurrentFullScreenElement',
                request: 'webkitRequestFullScreen',
                exit: 'webkitCancelFullScreen',
                onchange: 'webkitfullscreenchange',
                onerror: 'webkitfullscreenerror'
            },
            moz: {
                enabled: 'mozFullScreen',
                element: 'mozFullScreenElement',
                request: 'mozRequestFullScreen',
                exit: 'mozCancelFullScreen',
                onchange: 'mozfullscreenchange',
                onerror: 'mozfullscreenerror'
            },
            ios: {
                enabled: 'webkitFullscreenEnabled',
                element: 'webkitFullscreenElement',
                request: 'webkitEnterFullscreen',
                exit: 'webkitExitFullscreen',
                onchange: 'webkitendfullscreen',
                // Hack for iOS: webkitfullscreenchange it's not firing
                onerror: 'webkitfullscreenerror'
            },
            ms: {
                enabled: 'msFullscreenEnabled',
                element: 'msFullscreenElement',
                request: 'msRequestFullscreen',
                exit: 'msExitFullscreen',
                onchange: 'MSFullscreenChange',
                onerror: 'MSFullscreenError'
            }
        };
        for (var browser in APIs) {
            if (APIs[browser].enabled in document) {
                this.polyfill = APIs[browser];
                break;
            }
        }
        if (vg_utils_1.VgUtils.isiOSDevice()) {
            this.polyfill = APIs.ios;
        }
        this.isAvailable = (this.polyfill != null);
        if (this.polyfill == null) {
            return;
        }
        var fsElemDispatcher;
        switch (this.polyfill.onchange) {
            // Mozilla dispatches the fullscreen change event from document, not the element
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=724816#c3
            case 'mozfullscreenchange':
                fsElemDispatcher = document;
                break;
            // iOS dispatches the fullscreen change event from video element
            case 'webkitendfullscreen':
                fsElemDispatcher = this.medias.toArray()[0].elem;
                break;
            // HTML5 implementation dispatches the fullscreen change event from the element
            default:
                fsElemDispatcher = elem;
        }
        this.fsChangeSubscription = rxjs_1.fromEvent(fsElemDispatcher, this.polyfill.onchange).subscribe(function () {
            _this.onFullscreenChange();
        });
    };
    VgFullscreenAPI.prototype.onFullscreenChange = function () {
        this.isFullscreen = !!document[this.polyfill.element];
        this.onChangeFullscreen.emit(this.isFullscreen);
    };
    VgFullscreenAPI.prototype.toggleFullscreen = function (element) {
        if (element === void 0) { element = null; }
        if (this.isFullscreen) {
            this.exit();
        }
        else {
            this.request(element);
        }
    };
    VgFullscreenAPI.prototype.request = function (elem) {
        if (!elem) {
            elem = this.videogularElement;
        }
        this.isFullscreen = true;
        this.onChangeFullscreen.emit(true);
        // Perform native full screen support
        if (this.isAvailable && this.nativeFullscreen) {
            // Fullscreen for mobile devices
            if (vg_utils_1.VgUtils.isMobileDevice()) {
                // We should make fullscreen the video object if it doesn't have native fullscreen support
                // Fallback! We can't set vg-player on fullscreen, only video/audio objects
                if ((!this.polyfill.enabled && elem === this.videogularElement) || vg_utils_1.VgUtils.isiOSDevice()) {
                    elem = this.medias.toArray()[0].elem;
                }
                this.enterElementInFullScreen(elem);
            }
            else {
                this.enterElementInFullScreen(this.videogularElement);
            }
        }
    };
    VgFullscreenAPI.prototype.enterElementInFullScreen = function (elem) {
        elem[this.polyfill.request]();
    };
    VgFullscreenAPI.prototype.exit = function () {
        this.isFullscreen = false;
        this.onChangeFullscreen.emit(false);
        // Exit from native fullscreen
        if (this.isAvailable && this.nativeFullscreen) {
            document[this.polyfill.exit]();
        }
    };
    VgFullscreenAPI.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    VgFullscreenAPI.ctorParameters = function () { return []; };
    return VgFullscreenAPI;
}());
exports.VgFullscreenAPI = VgFullscreenAPI;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctZnVsbHNjcmVlbi1hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1mdWxsc2NyZWVuLWFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRTtBQUNwRSx1Q0FBcUM7QUFFckMsNkJBQTZEOztJQWdCekQ7Z0NBVDRCLElBQUk7NEJBQ1IsS0FBSztrQ0FNVyxJQUFJLG1CQUFZLEVBQUU7S0FHekQ7SUFFRCw4QkFBSSxHQUFKLFVBQUssSUFBaUIsRUFBRSxNQUEwQjtRQUFsRCxpQkE4RkM7UUE3RkcsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFNLElBQUksR0FBRztZQUNULEVBQUUsRUFBRTtnQkFDQSxPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixPQUFPLEVBQUUsbUJBQW1CO2dCQUM1QixJQUFJLEVBQUUsZ0JBQWdCO2dCQUN0QixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixPQUFPLEVBQUUsaUJBQWlCO2FBQzdCO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLE9BQU8sRUFBRSx5QkFBeUI7Z0JBQ2xDLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLE9BQU8sRUFBRSx1QkFBdUI7YUFDbkM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFLG9CQUFvQjtnQkFDN0IsT0FBTyxFQUFFLGdDQUFnQztnQkFDekMsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsSUFBSSxFQUFFLHdCQUF3QjtnQkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsT0FBTyxFQUFFLHVCQUF1QjthQUNuQztZQUNELEdBQUcsRUFBRTtnQkFDRCxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsT0FB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QUFDLENBQUMsQ0FBQztZQUM1QyxRQUFRLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUUsRUFBRSxDQUFDO1NBQ3BDO0tBQ0o7O2dCQXJLSixpQkFBVTs7OzswQkFMWDs7QUFNYSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBWZ1V0aWxzIH0gZnJvbSAnLi92Zy11dGlscyc7XG5pbXBvcnQgeyBWZ01lZGlhIH0gZnJvbSAnLi4vdmctbWVkaWEvdmctbWVkaWEnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uICwgIE9ic2VydmFibGUsIGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdGdWxsc2NyZWVuQVBJIHtcbiAgICBwb2x5ZmlsbDogYW55O1xuICAgIG9uY2hhbmdlOiBzdHJpbmc7XG4gICAgb25lcnJvcjogc3RyaW5nO1xuICAgIG5hdGl2ZUZ1bGxzY3JlZW46IGJvb2xlYW4gPSB0cnVlO1xuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGlzQXZhaWxhYmxlOiBib29sZWFuO1xuICAgIHZpZGVvZ3VsYXJFbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgICBtZWRpYXM6IFF1ZXJ5TGlzdDxWZ01lZGlhPjtcblxuICAgIGZzQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgb25DaGFuZ2VGdWxsc2NyZWVuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIGluaXQoZWxlbTogSFRNTEVsZW1lbnQsIG1lZGlhczogUXVlcnlMaXN0PFZnTWVkaWE+KSB7XG4gICAgICAgIHRoaXMudmlkZW9ndWxhckVsZW1lbnQgPSBlbGVtO1xuICAgICAgICB0aGlzLm1lZGlhcyA9IG1lZGlhcztcblxuICAgICAgICBjb25zdCBBUElzID0ge1xuICAgICAgICAgICAgdzM6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnZnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdmdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ3JlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnZXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ2Z1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuZXdXZWJraXQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnd2Via2l0RnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICd3ZWJraXRGdWxsc2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZnVsbHNjcmVlbmNoYW5nZScsXG4gICAgICAgICAgICAgICAgb25lcnJvcjogJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbGRXZWJraXQ6IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiAnd2Via2l0SXNGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBlbGVtZW50OiAnd2Via2l0Q3VycmVudEZ1bGxTY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGV4aXQ6ICd3ZWJraXRDYW5jZWxGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBvbmNoYW5nZTogJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxuICAgICAgICAgICAgICAgIG9uZXJyb3I6ICd3ZWJraXRmdWxsc2NyZWVuZXJyb3InXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW96OiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21vekZ1bGxTY3JlZW4nLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXG4gICAgICAgICAgICAgICAgcmVxdWVzdDogJ21velJlcXVlc3RGdWxsU2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXG4gICAgICAgICAgICAgICAgb25jaGFuZ2U6ICdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnbW96ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlvczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQ6ICd3ZWJraXRGdWxsc2NyZWVuRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgZWxlbWVudDogJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnd2Via2l0RW50ZXJGdWxsc2NyZWVuJyxcbiAgICAgICAgICAgICAgICBleGl0OiAnd2Via2l0RXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnd2Via2l0ZW5kZnVsbHNjcmVlbicsIC8vIEhhY2sgZm9yIGlPUzogd2Via2l0ZnVsbHNjcmVlbmNoYW5nZSBpdCdzIG5vdCBmaXJpbmdcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1zOiB7XG4gICAgICAgICAgICAgICAgZW5hYmxlZDogJ21zRnVsbHNjcmVlbkVuYWJsZWQnLFxuICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICdtc0Z1bGxzY3JlZW5FbGVtZW50JyxcbiAgICAgICAgICAgICAgICByZXF1ZXN0OiAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXG4gICAgICAgICAgICAgICAgZXhpdDogJ21zRXhpdEZ1bGxzY3JlZW4nLFxuICAgICAgICAgICAgICAgIG9uY2hhbmdlOiAnTVNGdWxsc2NyZWVuQ2hhbmdlJyxcbiAgICAgICAgICAgICAgICBvbmVycm9yOiAnTVNGdWxsc2NyZWVuRXJyb3InXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgYnJvd3NlciBpbiBBUElzKSB7XG4gICAgICAgICAgICBpZiAoQVBJc1sgYnJvd3NlciBdLmVuYWJsZWQgaW4gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvbHlmaWxsID0gQVBJc1sgYnJvd3NlciBdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFZnVXRpbHMuaXNpT1NEZXZpY2UoKSkge1xuICAgICAgICAgICAgdGhpcy5wb2x5ZmlsbCA9IEFQSXMuaW9zXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQXZhaWxhYmxlID0gKHRoaXMucG9seWZpbGwgIT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKHRoaXMucG9seWZpbGwgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZzRWxlbURpc3BhdGNoZXI7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnBvbHlmaWxsLm9uY2hhbmdlKSB7XG4gICAgICAgICAgICAvLyBNb3ppbGxhIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gZG9jdW1lbnQsIG5vdCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgLy8gU2VlOiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MjQ4MTYjYzNcbiAgICAgICAgICAgIGNhc2UgJ21vemZ1bGxzY3JlZW5jaGFuZ2UnOlxuICAgICAgICAgICAgICAgIGZzRWxlbURpc3BhdGNoZXIgPSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gaU9TIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gdmlkZW8gZWxlbWVudFxuICAgICAgICAgICAgY2FzZSAnd2Via2l0ZW5kZnVsbHNjcmVlbic6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IHRoaXMubWVkaWFzLnRvQXJyYXkoKVsgMCBdLmVsZW07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIC8vIEhUTUw1IGltcGxlbWVudGF0aW9uIGRpc3BhdGNoZXMgdGhlIGZ1bGxzY3JlZW4gY2hhbmdlIGV2ZW50IGZyb20gdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZnNFbGVtRGlzcGF0Y2hlciA9IGVsZW07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZzQ2hhbmdlU3Vic2NyaXB0aW9uID0gZnJvbUV2ZW50KGZzRWxlbURpc3BhdGNoZXIsIHRoaXMucG9seWZpbGwub25jaGFuZ2UpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uRnVsbHNjcmVlbkNoYW5nZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkZ1bGxzY3JlZW5DaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gISFkb2N1bWVudFsgdGhpcy5wb2x5ZmlsbC5lbGVtZW50IF07XG4gICAgICAgIHRoaXMub25DaGFuZ2VGdWxsc2NyZWVuLmVtaXQodGhpcy5pc0Z1bGxzY3JlZW4pO1xuICAgIH1cblxuICAgIHRvZ2dsZUZ1bGxzY3JlZW4oZWxlbWVudDogYW55ID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuZXhpdCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0KGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVxdWVzdChlbGVtOiBhbnkpIHtcbiAgICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgICAgICBlbGVtID0gdGhpcy52aWRlb2d1bGFyRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNGdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uZW1pdCh0cnVlKTtcblxuICAgICAgICAvLyBQZXJmb3JtIG5hdGl2ZSBmdWxsIHNjcmVlbiBzdXBwb3J0XG4gICAgICAgIGlmICh0aGlzLmlzQXZhaWxhYmxlICYmIHRoaXMubmF0aXZlRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgLy8gRnVsbHNjcmVlbiBmb3IgbW9iaWxlIGRldmljZXNcbiAgICAgICAgICAgIGlmIChWZ1V0aWxzLmlzTW9iaWxlRGV2aWNlKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgbWFrZSBmdWxsc2NyZWVuIHRoZSB2aWRlbyBvYmplY3QgaWYgaXQgZG9lc24ndCBoYXZlIG5hdGl2ZSBmdWxsc2NyZWVuIHN1cHBvcnRcbiAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayEgV2UgY2FuJ3Qgc2V0IHZnLXBsYXllciBvbiBmdWxsc2NyZWVuLCBvbmx5IHZpZGVvL2F1ZGlvIG9iamVjdHNcbiAgICAgICAgICAgICAgICBpZiAoKCF0aGlzLnBvbHlmaWxsLmVuYWJsZWQgJiYgZWxlbSA9PT0gdGhpcy52aWRlb2d1bGFyRWxlbWVudCkgfHwgVmdVdGlscy5pc2lPU0RldmljZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0gPSB0aGlzLm1lZGlhcy50b0FycmF5KClbIDAgXS5lbGVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJFbGVtZW50SW5GdWxsU2NyZWVuKGVsZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnRlckVsZW1lbnRJbkZ1bGxTY3JlZW4odGhpcy52aWRlb2d1bGFyRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbnRlckVsZW1lbnRJbkZ1bGxTY3JlZW4oZWxlbTogYW55KSB7XG4gICAgICAgIGVsZW1bIHRoaXMucG9seWZpbGwucmVxdWVzdCBdKCk7XG4gICAgfVxuXG4gICAgZXhpdCgpIHtcbiAgICAgICAgdGhpcy5pc0Z1bGxzY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZUZ1bGxzY3JlZW4uZW1pdChmYWxzZSk7XG5cbiAgICAgICAgLy8gRXhpdCBmcm9tIG5hdGl2ZSBmdWxsc2NyZWVuXG4gICAgICAgIGlmICh0aGlzLmlzQXZhaWxhYmxlICYmIHRoaXMubmF0aXZlRnVsbHNjcmVlbikge1xuICAgICAgICAgICAgZG9jdW1lbnRbIHRoaXMucG9seWZpbGwuZXhpdCBdKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/services/vg-utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/videogular2/src/core/services/vg-utils.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgUtils = /** @class */ (function () {
    function VgUtils() {
    }
    /**
     * Inspired by Paul Irish
     * https://gist.github.com/paulirish/211209
     * @returns {number}
     */
    /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    VgUtils.getZIndex = /**
         * Inspired by Paul Irish
         * https://gist.github.com/paulirish/211209
         * @returns {number}
         */
    function () {
        var zIndex = 1;
        var elementZIndex;
        var tags = document.getElementsByTagName('*');
        for (var i = 0, l = tags.length; i < l; i++) {
            elementZIndex = parseInt(window.getComputedStyle(tags[i])["z-index"], 10);
            if (elementZIndex > zIndex) {
                zIndex = elementZIndex + 1;
            }
        }
        return zIndex;
    };
    // Very simple mobile detection, not 100% reliable
    // Very simple mobile detection, not 100% reliable
    VgUtils.isMobileDevice = 
    // Very simple mobile detection, not 100% reliable
    function () {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf("IEMobile") !== -1);
    };
    ;
    VgUtils.isiOSDevice = function () {
        return (navigator.userAgent.match(/ip(hone|ad|od)/i) && !navigator.userAgent.match(/(iemobile)[\/\s]?([\w\.]*)/i));
    };
    ;
    VgUtils.isCordova = function () {
        return document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    };
    ;
    VgUtils.decorators = [
        { type: core_1.Injectable },
    ];
    return VgUtils;
}());
exports.VgUtils = VgUtils;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy11dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5Qzs7OztJQUlyQzs7OztPQUlHOzs7Ozs7SUFDSSxpQkFBUzs7Ozs7SUFBaEI7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLGFBQW9CLENBQUM7UUFFekIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTlDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDMUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFFMUUsRUFBRSxDQUFDLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLE1BQU0sR0FBRyxhQUFhLEdBQUcsQ0FBQyxDQUFDO2FBQzlCO1NBQ0o7UUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0lBRUQsa0RBQWtEOztJQUMzQyxzQkFBYzs7SUFBckI7UUFDSSxNQUFNLENBQUMsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzFHO0lBQUEsQ0FBQztJQUVLLG1CQUFXLEdBQWxCO1FBQ0ksTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztLQUN0SDtJQUFBLENBQUM7SUFFSyxpQkFBUyxHQUFoQjtRQUNJLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxRQUFRLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUM1RjtJQUFBLENBQUM7O2dCQW5DTCxpQkFBVTs7a0JBRlg7O0FBR2EsMEJBQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdVdGlscyB7XG4gICAgLyoqXG4gICAgICogSW5zcGlyZWQgYnkgUGF1bCBJcmlzaFxuICAgICAqIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhdWxpcmlzaC8yMTEyMDlcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRaSW5kZXgoKTpudW1iZXIge1xuICAgICAgICBsZXQgekluZGV4ID0gMTtcbiAgICAgICAgbGV0IGVsZW1lbnRaSW5kZXg6bnVtYmVyO1xuXG4gICAgICAgIGxldCB0YWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRhZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBlbGVtZW50WkluZGV4ID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFnc1tpXSlbXCJ6LWluZGV4XCJdLCAxMCk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50WkluZGV4ID4gekluZGV4KSB7XG4gICAgICAgICAgICAgICAgekluZGV4ID0gZWxlbWVudFpJbmRleCArIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gekluZGV4O1xuICAgIH1cblxuICAgIC8vIFZlcnkgc2ltcGxlIG1vYmlsZSBkZXRlY3Rpb24sIG5vdCAxMDAlIHJlbGlhYmxlXG4gICAgc3RhdGljIGlzTW9iaWxlRGV2aWNlKCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB3aW5kb3cub3JpZW50YXRpb24gIT09IFwidW5kZWZpbmVkXCIpIHx8IChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJJRU1vYmlsZVwiKSAhPT0gLTEpO1xuICAgIH07XG5cbiAgICBzdGF0aWMgaXNpT1NEZXZpY2UoKSB7XG4gICAgICAgIHJldHVybiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaXAoaG9uZXxhZHxvZCkvaSkgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpZW1vYmlsZSlbXFwvXFxzXT8oW1xcd1xcLl0qKS9pKSk7XG4gICAgfTtcblxuICAgIHN0YXRpYyBpc0NvcmRvdmEoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cDovLycpID09PSAtMSAmJiBkb2N1bWVudC5VUkwuaW5kZXhPZignaHR0cHM6Ly8nKSA9PT0gLTE7XG4gICAgfTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/core/states/vg-states.js":
/*!***************************************************************!*\
  !*** ./node_modules/videogular2/src/core/states/vg-states.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var VgStates = /** @class */ (function () {
    function VgStates() {
    }
    VgStates.VG_ENDED = 'ended';
    VgStates.VG_PAUSED = 'paused';
    VgStates.VG_PLAYING = 'playing';
    VgStates.VG_LOADING = 'waiting';
    VgStates.decorators = [
        { type: core_1.Injectable },
    ];
    return VgStates;
}());
exports.VgStates = VgStates;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctc3RhdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctc3RhdGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDOzs7O3dCQUlYLE9BQU87eUJBQ04sUUFBUTswQkFDUCxTQUFTOzBCQUNULFNBQVM7O2dCQUx4QyxpQkFBVTs7bUJBRlg7O0FBR2EsNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVmdTdGF0ZXMge1xuICAgIHN0YXRpYyBWR19FTkRFRDogc3RyaW5nID0gJ2VuZGVkJztcbiAgICBzdGF0aWMgVkdfUEFVU0VEOiBzdHJpbmcgPSAncGF1c2VkJztcbiAgICBzdGF0aWMgVkdfUExBWUlORzogc3RyaW5nID0gJ3BsYXlpbmcnO1xuICAgIHN0YXRpYyBWR19MT0FESU5HOiBzdHJpbmcgPSAnd2FpdGluZyc7XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js":
/*!**************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-cue-points/vg-cue-points.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_events_1 = __webpack_require__(/*! ../events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgCuePoints = /** @class */ (function () {
    function VgCuePoints(ref) {
        this.ref = ref;
        this.onEnterCuePoint = new core_1.EventEmitter();
        this.onUpdateCuePoint = new core_1.EventEmitter();
        this.onExitCuePoint = new core_1.EventEmitter();
        this.onCompleteCuePoint = new core_1.EventEmitter();
        this.subscriptions = [];
        this.cuesSubscriptions = [];
        this.totalCues = 0;
    }
    VgCuePoints.prototype.ngOnInit = function () {
        this.onLoad$ = rxjs_1.fromEvent(this.ref.nativeElement, vg_events_1.VgEvents.VG_LOAD);
        this.subscriptions.push(this.onLoad$.subscribe(this.onLoad.bind(this)));
    };
    VgCuePoints.prototype.onLoad = function (event) {
        var cues = event.target.track.cues;
        this.ref.nativeElement.cues = cues;
        this.updateCuePoints(cues);
    };
    VgCuePoints.prototype.updateCuePoints = function (cues) {
        this.cuesSubscriptions.forEach(function (s) { return s.unsubscribe(); });
        for (var i = 0, l = cues.length; i < l; i++) {
            this.onEnter$ = rxjs_1.fromEvent(cues[i], vg_events_1.VgEvents.VG_ENTER);
            this.cuesSubscriptions.push(this.onEnter$.subscribe(this.onEnter.bind(this)));
            this.onExit$ = rxjs_1.fromEvent(cues[i], vg_events_1.VgEvents.VG_EXIT);
            this.cuesSubscriptions.push(this.onExit$.subscribe(this.onExit.bind(this)));
        }
    };
    VgCuePoints.prototype.onEnter = function (event) {
        this.onEnterCuePoint.emit(event.target);
    };
    VgCuePoints.prototype.onExit = function (event) {
        this.onExitCuePoint.emit(event.target);
    };
    VgCuePoints.prototype.ngDoCheck = function () {
        if (this.ref.nativeElement.cues) {
            var changes = this.totalCues !== this.ref.nativeElement.track.cues.length;
            if (changes) {
                this.totalCues = this.ref.nativeElement.track.cues.length;
                this.ref.nativeElement.cues = this.ref.nativeElement.track.cues;
                this.updateCuePoints(this.ref.nativeElement.track.cues);
            }
        }
    };
    VgCuePoints.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgCuePoints.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgCuePoints]'
                },] },
    ];
    /** @nocollapse */
    VgCuePoints.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    VgCuePoints.propDecorators = {
        "onEnterCuePoint": [{ type: core_1.Output, args: ['onEnterCuePoint',] },],
        "onUpdateCuePoint": [{ type: core_1.Output, args: ['onUpdateCuePoint',] },],
        "onExitCuePoint": [{ type: core_1.Output, args: ['onExitCuePoint',] },],
        "onCompleteCuePoint": [{ type: core_1.Output, args: ['onCompleteCuePoint',] },],
    };
    return VgCuePoints;
}());
exports.VgCuePoints = VgCuePoints;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctY3VlLXBvaW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLWN1ZS1wb2ludHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Y7QUFDL0YsaURBQStDO0FBQy9DLDZCQUE2RDs7SUFvQnpELHFCQUFtQixHQUFlO1FBQWYsUUFBRyxHQUFILEdBQUcsQ0FBWTsrQkFkOEIsSUFBSSxtQkFBWSxFQUFFO2dDQUNoQixJQUFJLG1CQUFZLEVBQUU7OEJBQ3RCLElBQUksbUJBQVksRUFBRTtrQ0FDVixJQUFJLG1CQUFZLEVBQUU7NkJBRXhELEVBQUU7aUNBQ0UsRUFBRTt5QkFNMUIsQ0FBQztLQUdaO0lBRUQsOEJBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsZ0JBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzRTtJQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFVO1FBQ2IsSUFBSSxJQUFJLEdBQW1CLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztRQUVuRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBRW5DLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7SUFFRCxxQ0FBZSxHQUFmLFVBQWdCLElBQW9CO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7UUFFckQsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFTLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBRSxFQUFFLG9CQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxnQkFBUyxDQUFDLElBQUksQ0FBRSxDQUFDLENBQUUsRUFBRSxvQkFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FO0tBQ0o7SUFFRCw2QkFBTyxHQUFQLFVBQVEsS0FBVTtRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQztJQUVELDRCQUFNLEdBQU4sVUFBTyxLQUFVO1FBQ2IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQzFDO0lBRUQsK0JBQVMsR0FBVDtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDOUIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUU1RSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNWLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzFELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNoRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzRDtTQUNKO0tBQ0o7SUFFRCxpQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQWYsQ0FBZSxDQUFDLENBQUM7S0FDcEQ7O2dCQXBFSixnQkFBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO2lCQUM1Qjs7OztnQkFObUIsaUJBQVU7OztvQ0FRekIsYUFBTSxTQUFDLGlCQUFpQjtxQ0FDeEIsYUFBTSxTQUFDLGtCQUFrQjttQ0FDekIsYUFBTSxTQUFDLGdCQUFnQjt1Q0FDdkIsYUFBTSxTQUFDLG9CQUFvQjs7c0JBWGhDOztBQU9hLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnRXZlbnRzIH0gZnJvbSAnLi4vZXZlbnRzL3ZnLWV2ZW50cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3ZnQ3VlUG9pbnRzXSdcbn0pXG5leHBvcnQgY2xhc3MgVmdDdWVQb2ludHMgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgQE91dHB1dCgnb25FbnRlckN1ZVBvaW50Jykgb25FbnRlckN1ZVBvaW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBAT3V0cHV0KCdvblVwZGF0ZUN1ZVBvaW50Jykgb25VcGRhdGVDdWVQb2ludDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnb25FeGl0Q3VlUG9pbnQnKSBvbkV4aXRDdWVQb2ludDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgQE91dHB1dCgnb25Db21wbGV0ZUN1ZVBvaW50Jykgb25Db21wbGV0ZUN1ZVBvaW50OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gICAgY3Vlc1N1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbiAgICBvbkxvYWQkOiBPYnNlcnZhYmxlPGFueT47XG4gICAgb25FbnRlciQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBvbkV4aXQkOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgICB0b3RhbEN1ZXMgPSAwO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlZjogRWxlbWVudFJlZikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm9uTG9hZCQgPSBmcm9tRXZlbnQodGhpcy5yZWYubmF0aXZlRWxlbWVudCwgVmdFdmVudHMuVkdfTE9BRCk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMub25Mb2FkJC5zdWJzY3JpYmUodGhpcy5vbkxvYWQuYmluZCh0aGlzKSkpO1xuICAgIH1cblxuICAgIG9uTG9hZChldmVudDogYW55KSB7XG4gICAgICAgIGxldCBjdWVzOiBUZXh0VHJhY2tDdWVbXSA9IGV2ZW50LnRhcmdldC50cmFjay5jdWVzO1xuXG4gICAgICAgIHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY3VlcyA9IGN1ZXM7XG5cbiAgICAgICAgdGhpcy51cGRhdGVDdWVQb2ludHMoY3Vlcyk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VlUG9pbnRzKGN1ZXM6IFRleHRUcmFja0N1ZVtdKSB7XG4gICAgICAgIHRoaXMuY3Vlc1N1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBjdWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5vbkVudGVyJCA9IGZyb21FdmVudChjdWVzWyBpIF0sIFZnRXZlbnRzLlZHX0VOVEVSKTtcbiAgICAgICAgICAgIHRoaXMuY3Vlc1N1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm9uRW50ZXIkLnN1YnNjcmliZSh0aGlzLm9uRW50ZXIuYmluZCh0aGlzKSkpO1xuXG4gICAgICAgICAgICB0aGlzLm9uRXhpdCQgPSBmcm9tRXZlbnQoY3Vlc1sgaSBdLCBWZ0V2ZW50cy5WR19FWElUKTtcbiAgICAgICAgICAgIHRoaXMuY3Vlc1N1YnNjcmlwdGlvbnMucHVzaCh0aGlzLm9uRXhpdCQuc3Vic2NyaWJlKHRoaXMub25FeGl0LmJpbmQodGhpcykpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRW50ZXIoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLm9uRW50ZXJDdWVQb2ludC5lbWl0KGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgb25FeGl0KGV2ZW50OiBhbnkpIHtcbiAgICAgICAgdGhpcy5vbkV4aXRDdWVQb2ludC5lbWl0KGV2ZW50LnRhcmdldCk7XG4gICAgfVxuXG4gICAgbmdEb0NoZWNrKCkge1xuICAgICAgICBpZiAodGhpcy5yZWYubmF0aXZlRWxlbWVudC5jdWVzKSB7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VzID0gdGhpcy50b3RhbEN1ZXMgIT09IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQudHJhY2suY3Vlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChjaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbEN1ZXMgPSB0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnRyYWNrLmN1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQuY3VlcyA9IHRoaXMucmVmLm5hdGl2ZUVsZW1lbnQudHJhY2suY3VlcztcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUN1ZVBvaW50cyh0aGlzLnJlZi5uYXRpdmVFbGVtZW50LnRyYWNrLmN1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHMgPT4gcy51bnN1YnNjcmliZSgpKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-media/vg-media-element.js":
/*!************************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-media/vg-media-element.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var VgMediaElement = /** @class */ (function () {
    function VgMediaElement() {
    }
    Object.defineProperty(VgMediaElement.prototype, "audioTracks", {
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    ;
    VgMediaElement.prototype.addTextTrack = function (kind, label, language) {
        return null;
    };
    VgMediaElement.prototype.canPlayType = function (type) {
        return null;
    };
    VgMediaElement.prototype.load = function () {
    };
    VgMediaElement.prototype.msClearEffects = function () {
    };
    VgMediaElement.prototype.msGetAsCastingSource = function () {
        return null;
    };
    VgMediaElement.prototype.msInsertAudioEffect = function (activatableClassId, effectRequired, config) {
    };
    VgMediaElement.prototype.msSetMediaKeys = function (mediaKeys) {
    };
    VgMediaElement.prototype.msSetMediaProtectionManager = function (mediaProtectionManager) {
    };
    VgMediaElement.prototype.pause = function () {
    };
    VgMediaElement.prototype.play = function () {
        return null;
    };
    VgMediaElement.prototype.setMediaKeys = function (mediaKeys) {
        return null;
    };
    VgMediaElement.prototype.addEventListener = function (type, listener, useCapture) {
    };
    return VgMediaElement;
}());
exports.VgMediaElement = VgMediaElement;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEtZWxlbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZnLW1lZGlhLWVsZW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxJQUFBOzs7SUFHSSxzQkFBSSx1Q0FBVzthQUFmLGNBQW9DLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRTs7O09BQUE7SUFBQSxDQUFDO0lBaURuRCxxQ0FBWSxHQUFaLFVBQWEsSUFBWSxFQUFFLEtBQWMsRUFBRSxRQUFpQjtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCxvQ0FBVyxHQUFYLFVBQVksSUFBWTtRQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCw2QkFBSSxHQUFKO0tBQ0M7SUFFRCx1Q0FBYyxHQUFkO0tBQ0M7SUFFRCw2Q0FBb0IsR0FBcEI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCw0Q0FBbUIsR0FBbkIsVUFBb0Isa0JBQTBCLEVBQUUsY0FBdUIsRUFBRSxNQUFZO0tBQ3BGO0lBRUQsdUNBQWMsR0FBZCxVQUFlLFNBQXNCO0tBQ3BDO0lBRUQsb0RBQTJCLEdBQTNCLFVBQTRCLHNCQUE0QjtLQUN2RDtJQUVELDhCQUFLLEdBQUw7S0FDQztJQUVELDZCQUFJLEdBQUo7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDO0tBQ2Y7SUFFRCxxQ0FBWSxHQUFaLFVBQWEsU0FBMEI7UUFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQztLQUNmO0lBRUQseUNBQWdCLEdBQWhCLFVBQWlCLElBQVksRUFBRSxRQUE0QyxFQUFFLFVBQW9CO0tBQ2hHO3lCQTdGTDtJQThGQyxDQUFBO0FBNUZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSU1lZGlhRWxlbWVudCB9IGZyb20gJy4vaS1tZWRpYS1lbGVtZW50JztcblxuZXhwb3J0IGNsYXNzIFZnTWVkaWFFbGVtZW50IGltcGxlbWVudHMgSU1lZGlhRWxlbWVudCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBlbGVtOiBhbnk7XG4gICAgZ2V0IGF1ZGlvVHJhY2tzKCk6IEF1ZGlvVHJhY2tMaXN0IHsgcmV0dXJuIG51bGw7IH07XG4gICAgYXV0b3BsYXk6IGJvb2xlYW47XG4gICAgYnVmZmVyZWQ6IFRpbWVSYW5nZXM7XG4gICAgY29udHJvbHM6IGJvb2xlYW47XG4gICAgY3Jvc3NPcmlnaW46IHN0cmluZyB8IGFueTtcbiAgICBjdXJyZW50U3JjOiBzdHJpbmc7XG4gICAgY3VycmVudFRpbWU6IG51bWJlcjtcbiAgICBkZWZhdWx0TXV0ZWQ6IGJvb2xlYW47XG4gICAgZGVmYXVsdFBsYXliYWNrUmF0ZTogbnVtYmVyO1xuICAgIGR1cmF0aW9uOiBudW1iZXI7XG4gICAgZW5kZWQ6IGJvb2xlYW47XG4gICAgZXJyb3I6IE1lZGlhRXJyb3I7XG4gICAgbG9vcDogYm9vbGVhbjtcbiAgICBtZWRpYUtleXM6IE1lZGlhS2V5cyB8IGFueTtcbiAgICBtc0F1ZGlvQ2F0ZWdvcnk6IHN0cmluZztcbiAgICBtc0F1ZGlvRGV2aWNlVHlwZTogc3RyaW5nO1xuICAgIG1zR3JhcGhpY3NUcnVzdFN0YXR1czogTVNHcmFwaGljc1RydXN0O1xuICAgIG1zS2V5czogTVNNZWRpYUtleXM7XG4gICAgbXNQbGF5VG9EaXNhYmxlZDogYm9vbGVhbjtcbiAgICBtc1BsYXlUb1ByZWZlcnJlZFNvdXJjZVVyaTogc3RyaW5nO1xuICAgIG1zUGxheVRvUHJpbWFyeTogYm9vbGVhbjtcbiAgICBtc1BsYXlUb1NvdXJjZTogYW55O1xuICAgIG1zUmVhbFRpbWU6IGJvb2xlYW47XG4gICAgbXV0ZWQ6IGJvb2xlYW47XG4gICAgbmV0d29ya1N0YXRlOiBudW1iZXI7XG4gICAgb25lbmNyeXB0ZWQ6IChldjogTWVkaWFFbmNyeXB0ZWRFdmVudCkgPT4gYW55O1xuICAgIG9ubXNuZWVka2V5OiAoZXY6IE1TTWVkaWFLZXlOZWVkZWRFdmVudCkgPT4gYW55O1xuICAgIHBhdXNlZDogYm9vbGVhbjtcbiAgICBwbGF5YmFja1JhdGU6IG51bWJlcjtcbiAgICBwbGF5ZWQ6IFRpbWVSYW5nZXM7XG4gICAgcHJlbG9hZDogc3RyaW5nO1xuICAgIHJlYWR5U3RhdGU6IG51bWJlcjtcbiAgICBzZWVrYWJsZTogVGltZVJhbmdlcztcbiAgICBzZWVraW5nOiBib29sZWFuO1xuICAgIHNyYzogc3RyaW5nO1xuICAgIHNyY09iamVjdDogTWVkaWFTdHJlYW0gfCBhbnk7XG4gICAgdGV4dFRyYWNrczogVGV4dFRyYWNrTGlzdDtcbiAgICB2aWRlb1RyYWNrczogVmlkZW9UcmFja0xpc3Q7XG4gICAgdm9sdW1lOiBudW1iZXI7XG4gICAgSEFWRV9DVVJSRU5UX0RBVEE6IG51bWJlcjtcbiAgICBIQVZFX0VOT1VHSF9EQVRBOiBudW1iZXI7XG4gICAgSEFWRV9GVVRVUkVfREFUQTogbnVtYmVyO1xuICAgIEhBVkVfTUVUQURBVEE6IG51bWJlcjtcbiAgICBIQVZFX05PVEhJTkc6IG51bWJlcjtcbiAgICBORVRXT1JLX0VNUFRZOiBudW1iZXI7XG4gICAgTkVUV09SS19JRExFOiBudW1iZXI7XG4gICAgTkVUV09SS19MT0FESU5HOiBudW1iZXI7XG4gICAgTkVUV09SS19OT19TT1VSQ0U6IG51bWJlcjtcblxuICAgIGFkZFRleHRUcmFjayhraW5kOiBzdHJpbmcsIGxhYmVsPzogc3RyaW5nLCBsYW5ndWFnZT86IHN0cmluZyk6IFRleHRUcmFjayB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNhblBsYXlUeXBlKHR5cGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGxvYWQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbXNDbGVhckVmZmVjdHMoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgbXNHZXRBc0Nhc3RpbmdTb3VyY2UoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbXNJbnNlcnRBdWRpb0VmZmVjdChhY3RpdmF0YWJsZUNsYXNzSWQ6IHN0cmluZywgZWZmZWN0UmVxdWlyZWQ6IGJvb2xlYW4sIGNvbmZpZz86IGFueSk6IHZvaWQge1xuICAgIH1cblxuICAgIG1zU2V0TWVkaWFLZXlzKG1lZGlhS2V5czogTVNNZWRpYUtleXMpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBtc1NldE1lZGlhUHJvdGVjdGlvbk1hbmFnZXIobWVkaWFQcm90ZWN0aW9uTWFuYWdlcj86IGFueSk6IHZvaWQge1xuICAgIH1cblxuICAgIHBhdXNlKCk6IHZvaWQge1xuICAgIH1cblxuICAgIHBsYXkoKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgc2V0TWVkaWFLZXlzKG1lZGlhS2V5czogTWVkaWFLZXlzIHwgYW55KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lck9yRXZlbnRMaXN0ZW5lck9iamVjdCwgdXNlQ2FwdHVyZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-media/vg-media.js":
/*!****************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-media/vg-media.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var vg_states_1 = __webpack_require__(/*! ../states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var vg_api_1 = __webpack_require__(/*! ../services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_events_1 = __webpack_require__(/*! ../events/vg-events */ "./node_modules/videogular2/src/core/events/vg-events.js");
var rxjs_2 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var VgMedia = /** @class */ (function () {
    function VgMedia(api, ref) {
        this.api = api;
        this.ref = ref;
        this.state = vg_states_1.VgStates.VG_PAUSED;
        this.time = { current: 0, total: 0, left: 0 };
        this.buffer = { end: 0 };
        this.canPlay = false;
        this.canPlayThrough = false;
        this.isMetadataLoaded = false;
        this.isWaiting = false;
        this.isCompleted = false;
        this.isLive = false;
        this.isBufferDetected = false;
        this.checkInterval = 200;
        this.currentPlayPos = 0;
        this.lastPlayPos = 0;
        this.playAtferSync = false;
        this.bufferDetected = new rxjs_1.Subject();
    }
    VgMedia.prototype.ngOnInit = function () {
        var _this = this;
        if (this.vgMedia.nodeName) {
            // It's a native element
            this.elem = this.vgMedia;
        }
        else {
            // It's an Angular Class
            this.elem = this.vgMedia.elem;
        }
        // Just in case we're creating this vgMedia dynamically register again into API
        this.api.registerMedia(this);
        this.subscriptions = {
            // Native events
            abort: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ABORT),
            canPlay: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY),
            canPlayThrough: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_CAN_PLAY_THROUGH),
            durationChange: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_DURATION_CHANGE),
            emptied: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_EMPTIED),
            encrypted: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENCRYPTED),
            ended: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ENDED),
            error: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_ERROR),
            loadedData: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_DATA),
            loadedMetadata: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOADED_METADATA),
            loadStart: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_LOAD_START),
            pause: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PAUSE),
            play: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAY),
            playing: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PLAYING),
            progress: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_PROGRESS),
            rateChange: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_RATE_CHANGE),
            seeked: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKED),
            seeking: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_SEEKING),
            stalled: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_STALLED),
            suspend: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_SUSPEND),
            timeUpdate: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_TIME_UPDATE),
            volumeChange: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_VOLUME_CHANGE),
            waiting: rxjs_1.fromEvent(this.elem, vg_events_1.VgEvents.VG_WAITING),
            // Advertisement only events
            startAds: rxjs_1.fromEvent(window, vg_events_1.VgEvents.VG_START_ADS),
            endAds: rxjs_1.fromEvent(window, vg_events_1.VgEvents.VG_END_ADS),
            // See changes on <source> child elements to reload the video file
            mutation: rxjs_1.Observable.create(function (observer) {
                var domObs = new MutationObserver(function (mutations) {
                    observer.next(mutations);
                });
                domObs.observe(_this.elem, { childList: true, attributes: true });
                return function () {
                    domObs.disconnect();
                };
            }),
            // Custom buffering detection
            bufferDetected: this.bufferDetected
        };
        this.mutationObs = this.subscriptions.mutation.subscribe(this.onMutation.bind(this));
        this.canPlayObs = this.subscriptions.canPlay.subscribe(this.onCanPlay.bind(this));
        this.canPlayThroughObs = this.subscriptions.canPlayThrough.subscribe(this.onCanPlayThrough.bind(this));
        this.loadedMetadataObs = this.subscriptions.loadedMetadata.subscribe(this.onLoadMetadata.bind(this));
        this.waitingObs = this.subscriptions.waiting.subscribe(this.onWait.bind(this));
        this.progressObs = this.subscriptions.progress.subscribe(this.onProgress.bind(this));
        this.endedObs = this.subscriptions.ended.subscribe(this.onComplete.bind(this));
        this.playingObs = this.subscriptions.playing.subscribe(this.onStartPlaying.bind(this));
        this.playObs = this.subscriptions.play.subscribe(this.onPlay.bind(this));
        this.pauseObs = this.subscriptions.pause.subscribe(this.onPause.bind(this));
        this.timeUpdateObs = this.subscriptions.timeUpdate.subscribe(this.onTimeUpdate.bind(this));
        this.volumeChangeObs = this.subscriptions.volumeChange.subscribe(this.onVolumeChange.bind(this));
        this.errorObs = this.subscriptions.error.subscribe(this.onError.bind(this));
        if (this.vgMaster) {
            this.api.playerReadyEvent.subscribe(function () {
                _this.prepareSync();
            });
        }
    };
    VgMedia.prototype.prepareSync = function () {
        var _this = this;
        var canPlayAll = [];
        for (var media in this.api.medias) {
            if (this.api.medias[media]) {
                canPlayAll.push(this.api.medias[media].subscriptions.canPlay);
            }
        }
        this.canPlayAllSubscription = rxjs_2.combineLatest(canPlayAll, function () {
            var params = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                params[_i] = arguments[_i];
            }
            var allReady = params.some(function (event) { return event.target.readyState === 4; });
            if (allReady && !_this.syncSubscription) {
                _this.startSync();
                _this.syncSubscription.unsubscribe();
            }
        }).subscribe();
    };
    VgMedia.prototype.startSync = function () {
        var _this = this;
        this.syncSubscription = rxjs_2.timer(0, 1000).subscribe(function () {
            for (var media in _this.api.medias) {
                if (_this.api.medias[media] !== _this) {
                    var diff = _this.api.medias[media].currentTime - _this.currentTime;
                    if (diff < -0.3 || diff > 0.3) {
                        _this.playAtferSync = (_this.state === vg_states_1.VgStates.VG_PLAYING);
                        _this.pause();
                        _this.api.medias[media].pause();
                        _this.api.medias[media].currentTime = _this.currentTime;
                    }
                    else {
                        if (_this.playAtferSync) {
                            _this.play();
                            _this.api.medias[media].play();
                            _this.playAtferSync = false;
                        }
                    }
                }
            }
        });
    };
    VgMedia.prototype.onMutation = function (mutations) {
        // Detect changes only for source elements or src attribute
        for (var i = 0, l = mutations.length; i < l; i++) {
            var mut = mutations[i];
            if (mut.type === 'attributes' && mut.attributeName === 'src') {
                // Only load src file if it's not a blob (for DASH / HLS sources)
                if (mut.target['src'] && mut.target['src'].length > 0 && mut.target['src'].indexOf('blob:') < 0) {
                    this.loadMedia();
                    break;
                }
            }
            else if (mut.type === 'childList' && mut.removedNodes.length && mut.removedNodes[0].nodeName.toLowerCase() === 'source') {
                this.loadMedia();
                break;
            }
        }
    };
    VgMedia.prototype.loadMedia = function () {
        var _this = this;
        this.vgMedia.pause();
        this.vgMedia.currentTime = 0;
        // Start buffering until we can play the media file
        this.stopBufferCheck();
        this.isBufferDetected = true;
        this.bufferDetected.next(this.isBufferDetected);
        // TODO: This is ugly, we should find something cleaner. For some reason a TimerObservable doesn't works.
        setTimeout(function () { return _this.vgMedia.load(); }, 10);
    };
    VgMedia.prototype.play = function () {
        var _this = this;
        // short-circuit if already playing
        if (this.playPromise || (this.state !== vg_states_1.VgStates.VG_PAUSED && this.state !== vg_states_1.VgStates.VG_ENDED)) {
            return;
        }
        this.playPromise = this.vgMedia.play();
        // browser has async play promise
        if (this.playPromise && this.playPromise.then && this.playPromise.catch) {
            this.playPromise
                .then(function () {
                _this.playPromise = null;
            })
                .catch(function () {
                // deliberately empty for the sake of eating console noise
            });
        }
        return this.playPromise;
    };
    VgMedia.prototype.pause = function () {
        var _this = this;
        // browser has async play promise
        if (this.playPromise) {
            this.playPromise
                .then(function () {
                _this.vgMedia.pause();
            });
        }
        else {
            this.vgMedia.pause();
        }
    };
    Object.defineProperty(VgMedia.prototype, "id", {
        get: function () {
            // We should return undefined if vgMedia still doesn't exist
            var result = undefined;
            if (this.vgMedia) {
                result = this.vgMedia.id;
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "duration", {
        get: function () {
            return this.vgMedia.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "currentTime", {
        get: function () {
            return this.vgMedia.currentTime;
        },
        set: function (seconds) {
            this.vgMedia.currentTime = seconds;
            // this.elem.dispatchEvent(new CustomEvent(VgEvents.VG_SEEK));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "volume", {
        get: function () {
            return this.vgMedia.volume;
        },
        set: function (volume) {
            this.vgMedia.volume = volume;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "playbackRate", {
        get: function () {
            return this.vgMedia.playbackRate;
        },
        set: function (rate) {
            this.vgMedia.playbackRate = rate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "buffered", {
        get: function () {
            return this.vgMedia.buffered;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VgMedia.prototype, "textTracks", {
        get: function () {
            return this.vgMedia.textTracks;
        },
        enumerable: true,
        configurable: true
    });
    VgMedia.prototype.onCanPlay = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlay = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onCanPlayThrough = function (event) {
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
        this.canPlayThrough = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onLoadMetadata = function (event) {
        this.isMetadataLoaded = true;
        this.time = {
            current: 0,
            left: 0,
            total: this.duration * 1000
        };
        this.state = vg_states_1.VgStates.VG_PAUSED;
        // Live streaming check
        var t = Math.round(this.time.total);
        this.isLive = (t === Infinity);
        this.ref.detectChanges();
    };
    VgMedia.prototype.onWait = function (event) {
        this.isWaiting = true;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onComplete = function (event) {
        this.isCompleted = true;
        this.state = vg_states_1.VgStates.VG_ENDED;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onStartPlaying = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPlay = function (event) {
        this.state = vg_states_1.VgStates.VG_PLAYING;
        if (this.vgMaster) {
            if (!this.syncSubscription || this.syncSubscription.closed) {
                this.startSync();
            }
        }
        this.startBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onPause = function (event) {
        this.state = vg_states_1.VgStates.VG_PAUSED;
        if (this.vgMaster) {
            if (!this.playAtferSync) {
                this.syncSubscription.unsubscribe();
            }
        }
        this.stopBufferCheck();
        this.ref.detectChanges();
    };
    VgMedia.prototype.onTimeUpdate = function (event) {
        var end = this.buffered.length - 1;
        this.time = {
            current: this.currentTime * 1000,
            total: this.time.total,
            left: (this.duration - this.currentTime) * 1000
        };
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onProgress = function (event) {
        var end = this.buffered.length - 1;
        if (end >= 0) {
            this.buffer = { end: this.buffered.end(end) * 1000 };
        }
        this.ref.detectChanges();
    };
    VgMedia.prototype.onVolumeChange = function (event) {
        // TODO: Save to localstorage the current volume
        this.ref.detectChanges();
    };
    VgMedia.prototype.onError = function (event) {
        // TODO: Handle error messages
        this.ref.detectChanges();
    };
    // http://stackoverflow.com/a/23828241/779529
    // http://stackoverflow.com/a/23828241/779529
    VgMedia.prototype.bufferCheck = 
    // http://stackoverflow.com/a/23828241/779529
    function () {
        var offset = 1 / this.checkInterval;
        this.currentPlayPos = this.currentTime;
        if (!this.isBufferDetected && this.currentPlayPos < (this.lastPlayPos + offset)) {
            this.isBufferDetected = true;
        }
        if (this.isBufferDetected && this.currentPlayPos > (this.lastPlayPos + offset)) {
            this.isBufferDetected = false;
        }
        // Prevent calls to bufferCheck after ngOnDestroy have been called
        if (!this.bufferDetected.closed) {
            this.bufferDetected.next(this.isBufferDetected);
        }
        this.lastPlayPos = this.currentPlayPos;
    };
    VgMedia.prototype.startBufferCheck = function () {
        var _this = this;
        this.checkBufferSubscription = rxjs_2.timer(0, this.checkInterval).subscribe(function () {
            _this.bufferCheck();
        });
    };
    VgMedia.prototype.stopBufferCheck = function () {
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        this.isBufferDetected = false;
        this.bufferDetected.next(this.isBufferDetected);
    };
    VgMedia.prototype.seekTime = function (value, byPercent) {
        if (byPercent === void 0) { byPercent = false; }
        var second;
        var duration = this.duration;
        if (byPercent) {
            second = value * duration / 100;
        }
        else {
            second = value;
        }
        this.currentTime = second;
    };
    VgMedia.prototype.addTextTrack = function (type, label, language, mode) {
        var newTrack = this.vgMedia.addTextTrack(type, label, language);
        if (mode) {
            newTrack.mode = mode;
        }
        return newTrack;
    };
    VgMedia.prototype.ngOnDestroy = function () {
        this.vgMedia.src = '';
        this.mutationObs.unsubscribe();
        this.canPlayObs.unsubscribe();
        this.canPlayThroughObs.unsubscribe();
        this.loadedMetadataObs.unsubscribe();
        this.waitingObs.unsubscribe();
        this.progressObs.unsubscribe();
        this.endedObs.unsubscribe();
        this.playingObs.unsubscribe();
        this.playObs.unsubscribe();
        this.pauseObs.unsubscribe();
        this.timeUpdateObs.unsubscribe();
        this.volumeChangeObs.unsubscribe();
        this.errorObs.unsubscribe();
        if (this.checkBufferSubscription) {
            this.checkBufferSubscription.unsubscribe();
        }
        if (this.syncSubscription) {
            this.syncSubscription.unsubscribe();
        }
        this.bufferDetected.complete();
        this.bufferDetected.unsubscribe();
        this.api.unregisterMedia(this);
    };
    VgMedia.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[vgMedia]'
                },] },
    ];
    /** @nocollapse */
    VgMedia.ctorParameters = function () { return [
        { type: vg_api_1.VgAPI, },
        { type: core_1.ChangeDetectorRef, },
    ]; };
    VgMedia.propDecorators = {
        "vgMedia": [{ type: core_1.Input },],
        "vgMaster": [{ type: core_1.Input },],
    };
    return VgMedia;
}());
exports.VgMedia = VgMedia;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctbWVkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2Zy1tZWRpYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUVuRyw2QkFBb0Y7QUFFcEYsaURBQStDO0FBQy9DLDZDQUEyQztBQUMzQyxpREFBK0M7QUFFL0MsNkJBQTBDOztJQTBEdEMsaUJBQW9CLEdBQVUsRUFBVSxHQUFzQjtRQUExQyxRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7cUJBM0M5QyxvQkFBUSxDQUFDLFNBQVM7b0JBRXRCLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUU7c0JBQy9CLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTt1QkFJTCxLQUFLOzhCQUNFLEtBQUs7Z0NBQ0gsS0FBSzt5QkFDWixLQUFLOzJCQUNILEtBQUs7c0JBQ1YsS0FBSztnQ0FFSyxLQUFLOzZCQUVULEdBQUc7OEJBQ0YsQ0FBQzsyQkFDSixDQUFDOzZCQUtFLEtBQUs7OEJBZ0JLLElBQUksY0FBTyxFQUFFO0tBTS9DO0lBRUQsMEJBQVEsR0FBUjtRQUFBLGlCQW1GQztRQWxGRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7O1lBRXhCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUM1QjtRQUFDLElBQUksQ0FBQyxDQUFDOztZQUVKLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7U0FDakM7O1FBR0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0IsSUFBSSxDQUFDLGFBQWEsR0FBRzs7WUFFakIsS0FBSyxFQUFFLGdCQUFTLENBQU0sSUFBSSxDQUFDLElBQUksRUFBRSxvQkFBUSxDQUFDLFFB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Q0wsWUFBSzs7a0JBckJWOztBQWlCYSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBPbkluaXQsIERpcmVjdGl2ZSwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBJUGxheWFibGUsIElNZWRpYVN1YnNjcmlwdGlvbnMgfSBmcm9tIFwiLi9pLXBsYXlhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlICwgIFN1YnNjcmlwdGlvbiAsICBPYnNlcnZlciAsICBTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uL3N0YXRlcy92Zy1zdGF0ZXMnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy1hcGknO1xuaW1wb3J0IHsgVmdFdmVudHMgfSBmcm9tICcuLi9ldmVudHMvdmctZXZlbnRzJztcbmltcG9ydCB7IElNZWRpYUVsZW1lbnQgfSBmcm9tICcuL2ktbWVkaWEtZWxlbWVudCc7XG5pbXBvcnQge3RpbWVyLCBjb21iaW5lTGF0ZXN0fSBmcm9tICdyeGpzJztcblxuXG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1t2Z01lZGlhXSdcbn0pXG5leHBvcnQgY2xhc3MgVmdNZWRpYSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBJUGxheWFibGUge1xuICAgIGVsZW06IGFueTtcblxuICAgIEBJbnB1dCgpIHZnTWVkaWE6IElNZWRpYUVsZW1lbnQ7XG4gICAgQElucHV0KCkgdmdNYXN0ZXI6IGJvb2xlYW47XG5cbiAgICBzdGF0ZTogc3RyaW5nID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgdGltZTogYW55ID0geyBjdXJyZW50OiAwLCB0b3RhbDogMCwgbGVmdDogMCB9O1xuICAgIGJ1ZmZlcjogYW55ID0geyBlbmQ6IDAgfTtcbiAgICB0cmFjazogYW55O1xuICAgIHN1YnNjcmlwdGlvbnM6IElNZWRpYVN1YnNjcmlwdGlvbnMgfCBhbnk7XG5cbiAgICBjYW5QbGF5OiBib29sZWFuID0gZmFsc2U7XG4gICAgY2FuUGxheVRocm91Z2g6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc01ldGFkYXRhTG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNXYWl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgaXNDb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBpc0xpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGlzQnVmZmVyRGV0ZWN0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNoZWNrSW50ZXJ2YWw6IG51bWJlciA9IDIwMDtcbiAgICBjdXJyZW50UGxheVBvczogbnVtYmVyID0gMDtcbiAgICBsYXN0UGxheVBvczogbnVtYmVyID0gMDtcblxuICAgIGNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uOiBhbnk7XG4gICAgc3luY1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNhblBsYXlBbGxTdWJzY3JpcHRpb246IGFueTtcbiAgICBwbGF5QXRmZXJTeW5jOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBtdXRhdGlvbk9iczogU3Vic2NyaXB0aW9uO1xuICAgIGNhblBsYXlPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBjYW5QbGF5VGhyb3VnaE9iczogU3Vic2NyaXB0aW9uO1xuICAgIGxvYWRlZE1ldGFkYXRhT2JzOiBTdWJzY3JpcHRpb247XG4gICAgd2FpdGluZ09iczogU3Vic2NyaXB0aW9uO1xuICAgIHByb2dyZXNzT2JzOiBTdWJzY3JpcHRpb247XG4gICAgZW5kZWRPYnM6IFN1YnNjcmlwdGlvbjtcbiAgICBwbGF5aW5nT2JzOiBTdWJzY3JpcHRpb247XG4gICAgcGxheU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHBhdXNlT2JzOiBTdWJzY3JpcHRpb247XG4gICAgdGltZVVwZGF0ZU9iczogU3Vic2NyaXB0aW9uO1xuICAgIHZvbHVtZUNoYW5nZU9iczogU3Vic2NyaXB0aW9uO1xuICAgIGVycm9yT2JzOiBTdWJzY3JpcHRpb247XG5cbiAgICBidWZmZXJEZXRlY3RlZDogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICBwbGF5UHJvbWlzZTogUHJvbWlzZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhcGk6IFZnQVBJLCBwcml2YXRlIHJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcblxuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy52Z01lZGlhLm5vZGVOYW1lKSB7XG4gICAgICAgICAgICAvLyBJdCdzIGEgbmF0aXZlIGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMuZWxlbSA9IHRoaXMudmdNZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0J3MgYW4gQW5ndWxhciBDbGFzc1xuICAgICAgICAgICAgdGhpcy5lbGVtID0gdGhpcy52Z01lZGlhLmVsZW07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBKdXN0IGluIGNhc2Ugd2UncmUgY3JlYXRpbmcgdGhpcyB2Z01lZGlhIGR5bmFtaWNhbGx5IHJlZ2lzdGVyIGFnYWluIGludG8gQVBJXG4gICAgICAgIHRoaXMuYXBpLnJlZ2lzdGVyTWVkaWEodGhpcyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gTmF0aXZlIGV2ZW50c1xuICAgICAgICAgICAgYWJvcnQ6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfQUJPUlQpLFxuICAgICAgICAgICAgY2FuUGxheTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19DQU5fUExBWSksXG4gICAgICAgICAgICBjYW5QbGF5VGhyb3VnaDogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19DQU5fUExBWV9USFJPVUdIKSxcbiAgICAgICAgICAgIGR1cmF0aW9uQ2hhbmdlOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0RVUkFUSU9OX0NIQU5HRSksXG4gICAgICAgICAgICBlbXB0aWVkOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0VNUFRJRUQpLFxuICAgICAgICAgICAgZW5jcnlwdGVkOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0VOQ1JZUFRFRCksXG4gICAgICAgICAgICBlbmRlZDogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FTkRFRCksXG4gICAgICAgICAgICBlcnJvcjogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19FUlJPUiksXG4gICAgICAgICAgICBsb2FkZWREYXRhOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0xPQURFRF9EQVRBKSxcbiAgICAgICAgICAgIGxvYWRlZE1ldGFkYXRhOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX0xPQURFRF9NRVRBREFUQSksXG4gICAgICAgICAgICBsb2FkU3RhcnQ6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfTE9BRF9TVEFSVCksXG4gICAgICAgICAgICBwYXVzZTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QQVVTRSksXG4gICAgICAgICAgICBwbGF5OiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1BMQVkpLFxuICAgICAgICAgICAgcGxheWluZzogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19QTEFZSU5HKSxcbiAgICAgICAgICAgIHByb2dyZXNzOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1BST0dSRVNTKSxcbiAgICAgICAgICAgIHJhdGVDaGFuZ2U6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfUkFURV9DSEFOR0UpLFxuICAgICAgICAgICAgc2Vla2VkOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NFRUtFRCksXG4gICAgICAgICAgICBzZWVraW5nOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1NFRUtJTkcpLFxuICAgICAgICAgICAgc3RhbGxlZDogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19TVEFMTEVEKSxcbiAgICAgICAgICAgIHN1c3BlbmQ6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfU1VTUEVORCksXG4gICAgICAgICAgICB0aW1lVXBkYXRlOiBmcm9tRXZlbnQoPGFueT50aGlzLmVsZW0sIFZnRXZlbnRzLlZHX1RJTUVfVVBEQVRFKSxcbiAgICAgICAgICAgIHZvbHVtZUNoYW5nZTogZnJvbUV2ZW50KDxhbnk+dGhpcy5lbGVtLCBWZ0V2ZW50cy5WR19WT0xVTUVfQ0hBTkdFKSxcbiAgICAgICAgICAgIHdhaXRpbmc6IGZyb21FdmVudCg8YW55PnRoaXMuZWxlbSwgVmdFdmVudHMuVkdfV0FJVElORyksXG5cbiAgICAgICAgICAgIC8vIEFkdmVydGlzZW1lbnQgb25seSBldmVudHNcbiAgICAgICAgICAgIHN0YXJ0QWRzOiBmcm9tRXZlbnQoPGFueT53aW5kb3csIFZnRXZlbnRzLlZHX1NUQVJUX0FEUyksXG4gICAgICAgICAgICBlbmRBZHM6IGZyb21FdmVudCg8YW55PndpbmRvdywgVmdFdmVudHMuVkdfRU5EX0FEUyksXG5cbiAgICAgICAgICAgIC8vIFNlZSBjaGFuZ2VzIG9uIDxzb3VyY2U+IGNoaWxkIGVsZW1lbnRzIHRvIHJlbG9hZCB0aGUgdmlkZW8gZmlsZVxuICAgICAgICAgICAgbXV0YXRpb246IE9ic2VydmFibGUuY3JlYXRlKFxuICAgICAgICAgICAgICAgIChvYnNlcnZlcjogYW55KSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvbU9icyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQobXV0YXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgZG9tT2JzLm9ic2VydmUoPGFueT50aGlzLmVsZW0sIHsgY2hpbGRMaXN0OiB0cnVlLCBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb21PYnMuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICksXG5cbiAgICAgICAgICAgIC8vIEN1c3RvbSBidWZmZXJpbmcgZGV0ZWN0aW9uXG4gICAgICAgICAgICBidWZmZXJEZXRlY3RlZDogdGhpcy5idWZmZXJEZXRlY3RlZFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubXV0YXRpb25PYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMubXV0YXRpb24uc3Vic2NyaWJlKHRoaXMub25NdXRhdGlvbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5T2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmNhblBsYXkuc3Vic2NyaWJlKHRoaXMub25DYW5QbGF5LmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNhblBsYXlUaHJvdWdoT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmNhblBsYXlUaHJvdWdoLnN1YnNjcmliZSh0aGlzLm9uQ2FuUGxheVRocm91Z2guYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMubG9hZGVkTWV0YWRhdGFPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMubG9hZGVkTWV0YWRhdGEuc3Vic2NyaWJlKHRoaXMub25Mb2FkTWV0YWRhdGEuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMud2FpdGluZ09icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy53YWl0aW5nLnN1YnNjcmliZSh0aGlzLm9uV2FpdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc09icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5wcm9ncmVzcy5zdWJzY3JpYmUodGhpcy5vblByb2dyZXNzLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmVuZGVkT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLmVuZGVkLnN1YnNjcmliZSh0aGlzLm9uQ29tcGxldGUuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucGxheWluZ09icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy5wbGF5aW5nLnN1YnNjcmliZSh0aGlzLm9uU3RhcnRQbGF5aW5nLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnBsYXlPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucGxheS5zdWJzY3JpYmUodGhpcy5vblBsYXkuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMucGF1c2VPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMucGF1c2Uuc3Vic2NyaWJlKHRoaXMub25QYXVzZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy50aW1lVXBkYXRlT2JzID0gdGhpcy5zdWJzY3JpcHRpb25zLnRpbWVVcGRhdGUuc3Vic2NyaWJlKHRoaXMub25UaW1lVXBkYXRlLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLnZvbHVtZUNoYW5nZU9icyA9IHRoaXMuc3Vic2NyaXB0aW9ucy52b2x1bWVDaGFuZ2Uuc3Vic2NyaWJlKHRoaXMub25Wb2x1bWVDaGFuZ2UuYmluZCh0aGlzKSk7XG4gICAgICAgIHRoaXMuZXJyb3JPYnMgPSB0aGlzLnN1YnNjcmlwdGlvbnMuZXJyb3Iuc3Vic2NyaWJlKHRoaXMub25FcnJvci5iaW5kKHRoaXMpKTtcblxuICAgICAgICBpZiAodGhpcy52Z01hc3Rlcikge1xuICAgICAgICAgICAgdGhpcy5hcGkucGxheWVyUmVhZHlFdmVudC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBhcmVTeW5jKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByZXBhcmVTeW5jKCkge1xuICAgICAgICBsZXQgY2FuUGxheUFsbDogQXJyYXk8T2JzZXJ2YWJsZTxhbnk+PiA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IG1lZGlhIGluIHRoaXMuYXBpLm1lZGlhcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXBpLm1lZGlhc1sgbWVkaWEgXSkge1xuICAgICAgICAgICAgICAgIGNhblBsYXlBbGwucHVzaCh0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0uc3Vic2NyaXB0aW9ucy5jYW5QbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2FuUGxheUFsbFN1YnNjcmlwdGlvbiA9IGNvbWJpbmVMYXRlc3QoY2FuUGxheUFsbCxcbiAgICAgICAgICAgICguLi5wYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWxsUmVhZHk6IGJvb2xlYW4gPSBwYXJhbXMuc29tZShldmVudCA9PiBldmVudC50YXJnZXQucmVhZHlTdGF0ZSA9PT0gNCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWxsUmVhZHkgJiYgIXRoaXMuc3luY1N1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0U3luYygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICkuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgc3RhcnRTeW5jKCkge1xuICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24gPSB0aW1lcigwLCAxMDAwKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgbWVkaWEgaW4gdGhpcy5hcGkubWVkaWFzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0gIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkaWZmOiBudW1iZXIgPSB0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0uY3VycmVudFRpbWUgLSB0aGlzLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA8IC0wLjMgfHwgZGlmZiA+IDAuMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF0ZmVyU3luYyA9ICh0aGlzLnN0YXRlID09PSBWZ1N0YXRlcy5WR19QTEFZSU5HKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0ucGF1c2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaS5tZWRpYXNbIG1lZGlhIF0uY3VycmVudFRpbWUgPSB0aGlzLmN1cnJlbnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGxheUF0ZmVyU3luYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGkubWVkaWFzWyBtZWRpYSBdLnBsYXkoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5QXRmZXJTeW5jID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uTXV0YXRpb24obXV0YXRpb25zOiBBcnJheTxNdXRhdGlvblJlY29yZD4pIHtcbiAgICAgICAgLy8gRGV0ZWN0IGNoYW5nZXMgb25seSBmb3Igc291cmNlIGVsZW1lbnRzIG9yIHNyYyBhdHRyaWJ1dGVcbiAgICAgICAgZm9yIChsZXQgaT0wLCBsPW11dGF0aW9ucy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbXV0OiBNdXRhdGlvblJlY29yZCA9IG11dGF0aW9uc1tpXTtcblxuICAgICAgICAgICAgaWYgKG11dC50eXBlID09PSAnYXR0cmlidXRlcycgJiYgbXV0LmF0dHJpYnV0ZU5hbWUgPT09ICdzcmMnKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBsb2FkIHNyYyBmaWxlIGlmIGl0J3Mgbm90IGEgYmxvYiAoZm9yIERBU0ggLyBITFMgc291cmNlcylcbiAgICAgICAgICAgICAgICBpZiAobXV0LnRhcmdldFsnc3JjJ10gJiYgbXV0LnRhcmdldFsnc3JjJ10ubGVuZ3RoID4gMCAmJiBtdXQudGFyZ2V0WydzcmMnXS5pbmRleE9mKCdibG9iOicpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRNZWRpYSgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG11dC50eXBlID09PSAnY2hpbGRMaXN0JyAmJiBtdXQucmVtb3ZlZE5vZGVzLmxlbmd0aCAmJiBtdXQucmVtb3ZlZE5vZGVzWzBdLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzb3VyY2UnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkTWVkaWEoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvYWRNZWRpYSgpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLnBhdXNlKCk7XG4gICAgICAgIHRoaXMudmdNZWRpYS5jdXJyZW50VGltZSA9IDA7XG5cbiAgICAgICAgLy8gU3RhcnQgYnVmZmVyaW5nIHVudGlsIHdlIGNhbiBwbGF5IHRoZSBtZWRpYSBmaWxlXG4gICAgICAgIHRoaXMuc3RvcEJ1ZmZlckNoZWNrKCk7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuXG4gICAgICAgIC8vIFRPRE86IFRoaXMgaXMgdWdseSwgd2Ugc2hvdWxkIGZpbmQgc29tZXRoaW5nIGNsZWFuZXIuIEZvciBzb21lIHJlYXNvbiBhIFRpbWVyT2JzZXJ2YWJsZSBkb2Vzbid0IHdvcmtzLlxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudmdNZWRpYS5sb2FkKCksIDEwKTtcbiAgICB9XG5cbiAgICBwbGF5KCkge1xuICAgICAgICAvLyBzaG9ydC1jaXJjdWl0IGlmIGFscmVhZHkgcGxheWluZ1xuICAgICAgICBpZiAodGhpcy5wbGF5UHJvbWlzZSB8fCAodGhpcy5zdGF0ZSAhPT0gVmdTdGF0ZXMuVkdfUEFVU0VEICYmIHRoaXMuc3RhdGUgIT09IFZnU3RhdGVzLlZHX0VOREVEKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wbGF5UHJvbWlzZSA9IHRoaXMudmdNZWRpYS5wbGF5KCk7XG5cbiAgICAgICAgLy8gYnJvd3NlciBoYXMgYXN5bmMgcGxheSBwcm9taXNlXG4gICAgICAgIGlmICh0aGlzLnBsYXlQcm9taXNlICYmIHRoaXMucGxheVByb21pc2UudGhlbiAmJiB0aGlzLnBsYXlQcm9taXNlLmNhdGNoKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlQcm9taXNlXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlQcm9taXNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGliZXJhdGVseSBlbXB0eSBmb3IgdGhlIHNha2Ugb2YgZWF0aW5nIGNvbnNvbGUgbm9pc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnBsYXlQcm9taXNlO1xuICAgIH1cblxuICAgIHBhdXNlKCkge1xuICAgICAgICAvLyBicm93c2VyIGhhcyBhc3luYyBwbGF5IHByb21pc2VcbiAgICAgICAgaWYgKHRoaXMucGxheVByb21pc2UpIHtcbiAgICAgICAgICAgIHRoaXMucGxheVByb21pc2VcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmdNZWRpYS5wYXVzZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52Z01lZGlhLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIC8vIFdlIHNob3VsZCByZXR1cm4gdW5kZWZpbmVkIGlmIHZnTWVkaWEgc3RpbGwgZG9lc24ndCBleGlzdFxuICAgICAgICBsZXQgcmVzdWx0ID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0aGlzLnZnTWVkaWEpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudmdNZWRpYS5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZ2V0IGR1cmF0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLmR1cmF0aW9uO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50VGltZShzZWNvbmRzKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS5jdXJyZW50VGltZSA9IHNlY29uZHM7XG4gICAgICAgIC8vIHRoaXMuZWxlbS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudChWZ0V2ZW50cy5WR19TRUVLKSk7XG4gICAgfVxuXG4gICAgZ2V0IGN1cnJlbnRUaW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52Z01lZGlhLmN1cnJlbnRUaW1lO1xuICAgIH1cblxuICAgIHNldCB2b2x1bWUodm9sdW1lKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS52b2x1bWUgPSB2b2x1bWU7XG4gICAgfVxuXG4gICAgZ2V0IHZvbHVtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS52b2x1bWU7XG4gICAgfVxuXG4gICAgc2V0IHBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgICAgIHRoaXMudmdNZWRpYS5wbGF5YmFja1JhdGUgPSByYXRlO1xuICAgIH1cblxuICAgIGdldCBwbGF5YmFja1JhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZnTWVkaWEucGxheWJhY2tSYXRlO1xuICAgIH1cblxuICAgIGdldCBidWZmZXJlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS5idWZmZXJlZDtcbiAgICB9XG5cbiAgICBnZXQgdGV4dFRyYWNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmdNZWRpYS50ZXh0VHJhY2tzO1xuICAgIH1cblxuICAgIG9uQ2FuUGxheShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICAgICAgdGhpcy5jYW5QbGF5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uQ2FuUGxheVRocm91Z2goZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC5uZXh0KHRoaXMuaXNCdWZmZXJEZXRlY3RlZCk7XG4gICAgICAgIHRoaXMuY2FuUGxheVRocm91Z2ggPSB0cnVlO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkTWV0YWRhdGEoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzTWV0YWRhdGFMb2FkZWQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMudGltZSA9IHtcbiAgICAgICAgICAgIGN1cnJlbnQ6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgdG90YWw6IHRoaXMuZHVyYXRpb24gKiAxMDAwXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX1BBVVNFRDtcblxuICAgICAgICAvLyBMaXZlIHN0cmVhbWluZyBjaGVja1xuICAgICAgICBsZXQgdDpudW1iZXIgPSBNYXRoLnJvdW5kKHRoaXMudGltZS50b3RhbCk7XG4gICAgICAgIHRoaXMuaXNMaXZlID0gKHQgPT09IEluZmluaXR5KTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uV2FpdChldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuaXNXYWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uQ29tcGxldGUoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmlzQ29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFZnU3RhdGVzLlZHX0VOREVEO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25TdGFydFBsYXlpbmcoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnN0YXRlID0gVmdTdGF0ZXMuVkdfUExBWUlORztcbiAgICAgICAgdGhpcy5yZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH1cblxuICAgIG9uUGxheShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19QTEFZSU5HO1xuXG4gICAgICAgIGlmICh0aGlzLnZnTWFzdGVyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3luY1N1YnNjcmlwdGlvbiB8fCB0aGlzLnN5bmNTdWJzY3JpcHRpb24uY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydFN5bmMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhcnRCdWZmZXJDaGVjaygpO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25QYXVzZShldmVudDogYW55KSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBWZ1N0YXRlcy5WR19QQVVTRUQ7XG5cbiAgICAgICAgaWYgKHRoaXMudmdNYXN0ZXIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5QXRmZXJTeW5jKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zeW5jU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN0b3BCdWZmZXJDaGVjaygpO1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25UaW1lVXBkYXRlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgbGV0IGVuZCA9IHRoaXMuYnVmZmVyZWQubGVuZ3RoIC0gMTtcblxuICAgICAgICB0aGlzLnRpbWUgPSB7XG4gICAgICAgICAgICBjdXJyZW50OiB0aGlzLmN1cnJlbnRUaW1lICogMTAwMCxcbiAgICAgICAgICAgIHRvdGFsOiB0aGlzLnRpbWUudG90YWwsXG4gICAgICAgICAgICBsZWZ0OiAodGhpcy5kdXJhdGlvbiAtIHRoaXMuY3VycmVudFRpbWUpICogMTAwMFxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChlbmQgPj0gMCkge1xuICAgICAgICAgICAgdGhpcy5idWZmZXIgPSB7IGVuZDogdGhpcy5idWZmZXJlZC5lbmQoZW5kKSAqIDEwMDAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25Qcm9ncmVzcyhldmVudDogYW55KSB7XG4gICAgICAgIGxldCBlbmQgPSB0aGlzLmJ1ZmZlcmVkLmxlbmd0aCAtIDE7XG5cbiAgICAgICAgaWYgKGVuZCA+PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlciA9IHsgZW5kOiB0aGlzLmJ1ZmZlcmVkLmVuZChlbmQpICogMTAwMCB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG5cbiAgICBvblZvbHVtZUNoYW5nZShldmVudDogYW55KSB7XG4gICAgICAgIC8vIFRPRE86IFNhdmUgdG8gbG9jYWxzdG9yYWdlIHRoZSBjdXJyZW50IHZvbHVtZVxuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgb25FcnJvcihldmVudDogYW55KSB7XG4gICAgICAgIC8vIFRPRE86IEhhbmRsZSBlcnJvciBtZXNzYWdlc1xuICAgICAgICB0aGlzLnJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM4MjgyNDEvNzc5NTI5XG4gICAgYnVmZmVyQ2hlY2soKSB7XG4gICAgICAgIGNvbnN0IG9mZnNldCA9IDEgLyB0aGlzLmNoZWNrSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuY3VycmVudFBsYXlQb3MgPSB0aGlzLmN1cnJlbnRUaW1lO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0J1ZmZlckRldGVjdGVkICYmIHRoaXMuY3VycmVudFBsYXlQb3MgPCAodGhpcy5sYXN0UGxheVBvcyArIG9mZnNldCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0J1ZmZlckRldGVjdGVkICYmIHRoaXMuY3VycmVudFBsYXlQb3MgPiAodGhpcy5sYXN0UGxheVBvcyArIG9mZnNldCkpIHtcbiAgICAgICAgICAgIHRoaXMuaXNCdWZmZXJEZXRlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJldmVudCBjYWxscyB0byBidWZmZXJDaGVjayBhZnRlciBuZ09uRGVzdHJveSBoYXZlIGJlZW4gY2FsbGVkXG4gICAgICAgIGlmICghdGhpcy5idWZmZXJEZXRlY3RlZC5jbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQubmV4dCh0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sYXN0UGxheVBvcyA9IHRoaXMuY3VycmVudFBsYXlQb3M7XG4gICAgfVxuXG4gICAgc3RhcnRCdWZmZXJDaGVjaygpIHtcbiAgICAgICAgdGhpcy5jaGVja0J1ZmZlclN1YnNjcmlwdGlvbiA9IHRpbWVyKDAsIHRoaXMuY2hlY2tJbnRlcnZhbCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVmZmVyQ2hlY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdG9wQnVmZmVyQ2hlY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQnVmZmVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzQnVmZmVyRGV0ZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJ1ZmZlckRldGVjdGVkLm5leHQodGhpcy5pc0J1ZmZlckRldGVjdGVkKTtcbiAgICB9XG5cbiAgICBzZWVrVGltZSh2YWx1ZTpudW1iZXIsIGJ5UGVyY2VudDpib29sZWFuID0gZmFsc2UpIHtcbiAgICAgICAgbGV0IHNlY29uZDpudW1iZXI7XG4gICAgICAgIGxldCBkdXJhdGlvbjpudW1iZXIgPSB0aGlzLmR1cmF0aW9uO1xuXG4gICAgICAgIGlmIChieVBlcmNlbnQpIHtcbiAgICAgICAgICAgIHNlY29uZCA9IHZhbHVlICogZHVyYXRpb24gLyAxMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBzZWNvbmQ7XG4gICAgfVxuXG4gICAgYWRkVGV4dFRyYWNrKHR5cGU6c3RyaW5nLCBsYWJlbD86c3RyaW5nLCBsYW5ndWFnZT86c3RyaW5nLCBtb2RlPzonZGlzYWJsZWQnIHwgJ2hpZGRlbicgfCAnc2hvd2luZycpOiBUZXh0VHJhY2sge1xuICAgICAgICBjb25zdCBuZXdUcmFjazpUZXh0VHJhY2sgPSB0aGlzLnZnTWVkaWEuYWRkVGV4dFRyYWNrKHR5cGUsIGxhYmVsLCBsYW5ndWFnZSk7XG5cbiAgICAgICAgaWYgKG1vZGUpIHtcbiAgICAgICAgICAgIG5ld1RyYWNrLm1vZGUgPSBtb2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXdUcmFjaztcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52Z01lZGlhLnNyYyA9ICcnO1xuICAgICAgICB0aGlzLm11dGF0aW9uT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuY2FuUGxheU9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLmNhblBsYXlUaHJvdWdoT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMubG9hZGVkTWV0YWRhdGFPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy53YWl0aW5nT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5lbmRlZE9icy51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLnBsYXlpbmdPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5wbGF5T2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMucGF1c2VPYnMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy50aW1lVXBkYXRlT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMudm9sdW1lQ2hhbmdlT2JzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMuZXJyb3JPYnMudW5zdWJzY3JpYmUoKTtcblxuICAgICAgICBpZiAodGhpcy5jaGVja0J1ZmZlclN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgdGhpcy5jaGVja0J1ZmZlclN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5zeW5jU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLnN5bmNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYnVmZmVyRGV0ZWN0ZWQuY29tcGxldGUoKTtcbiAgICAgICAgdGhpcy5idWZmZXJEZXRlY3RlZC51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgIHRoaXMuYXBpLnVucmVnaXN0ZXJNZWRpYSh0aGlzKTtcbiAgICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/videogular2/src/core/vg-player/vg-player.js":
/*!******************************************************************!*\
  !*** ./node_modules/videogular2/src/core/vg-player/vg-player.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var vg_utils_1 = __webpack_require__(/*! ../services/vg-utils */ "./node_modules/videogular2/src/core/services/vg-utils.js");
var vg_media_1 = __webpack_require__(/*! ../vg-media/vg-media */ "./node_modules/videogular2/src/core/vg-media/vg-media.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ../services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var VgPlayer = /** @class */ (function () {
    function VgPlayer(ref, api, fsAPI, controlsHidden) {
        this.api = api;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isFullscreen = false;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.onPlayerReady = new core_1.EventEmitter();
        this.onMediaReady = new core_1.EventEmitter();
        this.subscriptions = [];
        this.elem = ref.nativeElement;
        this.api.registerElement(this.elem);
    }
    VgPlayer.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.medias.toArray().forEach(function (media) {
            _this.api.registerMedia(media);
        });
        this.fsAPI.init(this.elem, this.medias);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.api.onPlayerReady(this.fsAPI);
        this.onPlayerReady.emit(this.api);
    };
    VgPlayer.prototype.onChangeFullscreen = function (fsState) {
        if (!this.fsAPI.nativeFullscreen) {
            this.isFullscreen = fsState;
            this.zIndex = fsState ? vg_utils_1.VgUtils.getZIndex().toString() : 'auto';
        }
        else {
            this.isNativeFullscreen = fsState;
        }
    };
    VgPlayer.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgPlayer.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgPlayer.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-player',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    styles: ["\n        vg-player {\n            font-family: 'videogular';\n            position: relative;\n            display: flex;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            background-color: black;\n        }\n\n        vg-player.fullscreen {\n            position: fixed;\n            left: 0;\n            top: 0;\n        }\n\n        vg-player.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n    "],
                    providers: [vg_api_1.VgAPI, vg_fullscreen_api_1.VgFullscreenAPI, vg_controls_hidden_1.VgControlsHidden]
                },] },
    ];
    /** @nocollapse */
    VgPlayer.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgPlayer.propDecorators = {
        "isFullscreen": [{ type: core_1.HostBinding, args: ['class.fullscreen',] },],
        "isNativeFullscreen": [{ type: core_1.HostBinding, args: ['class.native-fullscreen',] },],
        "areControlsHidden": [{ type: core_1.HostBinding, args: ['class.controls-hidden',] },],
        "zIndex": [{ type: core_1.HostBinding, args: ['style.z-index',] },],
        "onPlayerReady": [{ type: core_1.Output },],
        "onMediaReady": [{ type: core_1.Output },],
        "medias": [{ type: core_1.ContentChildren, args: [vg_media_1.VgMedia,] },],
    };
    return VgPlayer;
}());
exports.VgPlayer = VgPlayer;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctcGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctcGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBU3VCO0FBQ3ZCLDZDQUEyQztBQUMzQyxtRUFBZ0U7QUFDaEUsaURBQStDO0FBQy9DLGlEQUErQztBQUUvQyxxRUFBa0U7O0lBZ0Q5RCxrQkFBWSxHQUFlLEVBQVMsR0FBVSxFQUFTLEtBQXNCLEVBQVUsY0FBZ0M7UUFBbkYsUUFBRyxHQUFILEdBQUcsQ0FBTztRQUFTLFVBQUssR0FBTCxLQUFLLENBQWlCO1FBQVUsbUJBQWMsR0FBZCxjQUFjLENBQWtCOzRCQWhCOUQsS0FBSztrQ0FDUSxLQUFLO2lDQUNSLEtBQUs7NkJBSXJDLElBQUksbUJBQVksRUFBRTs0QkFHbkIsSUFBSSxtQkFBWSxFQUFFOzZCQUtwQixFQUFFO1FBRzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUU5QixJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDdkM7SUFFRCxxQ0FBa0IsR0FBbEI7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUNoQyxLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDckM7SUFFRCxxQ0FBa0IsR0FBbEIsVUFBbUIsT0FBZ0I7UUFDL0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQztZQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQ25FO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDO1NBQ3JDO0tBQ0o7SUFFRCxpQ0FBYyxHQUFkLFVBQWUsTUFBZTtRQUMxQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO0tBQ25DO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFmLENBQWUsQ0FBQyxDQUFDO0tBQ3BEOztnQkFqRkosZ0JBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsV0FBVztvQkFDckIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRSxDQUFFLDRkQW9CVCxDQUFFO29CQUNILFNBQVMsRUFBRSxDQUFFLGNBQUssRUFBRSxtQ0FBZSxFQUFFLHFDQUFnQixDQUFFO2lCQUMxRDs7OztnQkF2Q0csaUJBQVU7Z0JBTUwsY0FBSztnQkFDTCxtQ0FBZTtnQkFJZixxQ0FBZ0I7OztpQ0FnQ3BCLGtCQUFXLFNBQUMsa0JBQWtCO3VDQUM5QixrQkFBVyxTQUFDLHlCQUF5QjtzQ0FDckMsa0JBQVcsU0FBQyx1QkFBdUI7MkJBQ25DLGtCQUFXLFNBQUMsZUFBZTtrQ0FFM0IsYUFBTTtpQ0FHTixhQUFNOzJCQUdOLHNCQUFlLFNBQUMsa0JBQU87O21CQTFENUI7O0FBNENhLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBPdXRwdXQsXG4gICAgQ29tcG9uZW50LFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBFbGVtZW50UmVmLFxuICAgIEhvc3RCaW5kaW5nLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBBZnRlckNvbnRlbnRJbml0LFxuICAgIENvbnRlbnRDaGlsZHJlbiwgVmlld0VuY2Fwc3VsYXRpb24sIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFZnQVBJIH0gZnJvbSAnLi4vc2VydmljZXMvdmctYXBpJztcbmltcG9ydCB7IFZnRnVsbHNjcmVlbkFQSSB9IGZyb20gJy4uL3NlcnZpY2VzL3ZnLWZ1bGxzY3JlZW4tYXBpJztcbmltcG9ydCB7IFZnVXRpbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy92Zy11dGlscyc7XG5pbXBvcnQgeyBWZ01lZGlhIH0gZnJvbSAnLi4vdmctbWVkaWEvdmctbWVkaWEnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBWZ0NvbnRyb2xzSGlkZGVuIH0gZnJvbSAnLi4vc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1wbGF5ZXInLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1wbGF5ZXIge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICd2aWRlb2d1bGFyJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLXBsYXllci5mdWxsc2NyZWVuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1wbGF5ZXIubmF0aXZlLWZ1bGxzY3JlZW4uY29udHJvbHMtaGlkZGVuIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm9uZTtcbiAgICAgICAgfVxuICAgIGAgXSxcbiAgICBwcm92aWRlcnM6IFsgVmdBUEksIFZnRnVsbHNjcmVlbkFQSSwgVmdDb250cm9sc0hpZGRlbiBdXG59KVxuZXhwb3J0IGNsYXNzIFZnUGxheWVyIGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgICBlbGVtOiBIVE1MRWxlbWVudDtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuZnVsbHNjcmVlbicpIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIEBIb3N0QmluZGluZygnY2xhc3MubmF0aXZlLWZ1bGxzY3JlZW4nKSBpc05hdGl2ZUZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbnRyb2xzLWhpZGRlbicpIGFyZUNvbnRyb2xzSGlkZGVuOiBib29sZWFuID0gZmFsc2U7XG4gICAgQEhvc3RCaW5kaW5nKCdzdHlsZS56LWluZGV4JykgekluZGV4OiBzdHJpbmc7XG5cbiAgICBAT3V0cHV0KClcbiAgICBvblBsYXllclJlYWR5OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKVxuICAgIG9uTWVkaWFSZWFkeTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAQ29udGVudENoaWxkcmVuKFZnTWVkaWEpXG4gICAgbWVkaWFzOiBRdWVyeUxpc3Q8VmdNZWRpYT47XG5cbiAgICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgYXBpOiBWZ0FQSSwgcHVibGljIGZzQVBJOiBWZ0Z1bGxzY3JlZW5BUEksIHByaXZhdGUgY29udHJvbHNIaWRkZW46IFZnQ29udHJvbHNIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5lbGVtID0gcmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy5hcGkucmVnaXN0ZXJFbGVtZW50KHRoaXMuZWxlbSk7XG4gICAgfVxuXG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgICAgICB0aGlzLm1lZGlhcy50b0FycmF5KCkuZm9yRWFjaCgobWVkaWEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYXBpLnJlZ2lzdGVyTWVkaWEobWVkaWEpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmZzQVBJLmluaXQodGhpcy5lbGVtLCB0aGlzLm1lZGlhcyk7XG5cbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5mc0FQSS5vbkNoYW5nZUZ1bGxzY3JlZW4uc3Vic2NyaWJlKHRoaXMub25DaGFuZ2VGdWxsc2NyZWVuLmJpbmQodGhpcykpKTtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2godGhpcy5jb250cm9sc0hpZGRlbi5pc0hpZGRlbi5zdWJzY3JpYmUodGhpcy5vbkhpZGVDb250cm9scy5iaW5kKHRoaXMpKSk7XG5cbiAgICAgICAgdGhpcy5hcGkub25QbGF5ZXJSZWFkeSh0aGlzLmZzQVBJKTtcbiAgICAgICAgdGhpcy5vblBsYXllclJlYWR5LmVtaXQodGhpcy5hcGkpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRnVsbHNjcmVlbihmc1N0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICghdGhpcy5mc0FQSS5uYXRpdmVGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICB0aGlzLmlzRnVsbHNjcmVlbiA9IGZzU3RhdGU7XG4gICAgICAgICAgICB0aGlzLnpJbmRleCA9IGZzU3RhdGUgPyBWZ1V0aWxzLmdldFpJbmRleCgpLnRvU3RyaW5nKCkgOiAnYXV0byc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlRnVsbHNjcmVlbiA9IGZzU3RhdGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkhpZGVDb250cm9scyhoaWRkZW46IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5hcmVDb250cm9sc0hpZGRlbiA9IGhpZGRlbjtcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/overlay-play/overlay-play.js":
/*!*******************************************************************!*\
  !*** ./node_modules/videogular2/src/overlay-play/overlay-play.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var vg_overlay_play_1 = __webpack_require__(/*! ./vg-overlay-play */ "./node_modules/videogular2/src/overlay-play/vg-overlay-play.js");
var VgOverlayPlayModule = /** @class */ (function () {
    function VgOverlayPlayModule() {
    }
    VgOverlayPlayModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [common_1.CommonModule],
                    declarations: [
                        vg_overlay_play_1.VgOverlayPlay
                    ],
                    exports: [
                        vg_overlay_play_1.VgOverlayPlay
                    ]
                },] },
    ];
    return VgOverlayPlayModule;
}());
exports.VgOverlayPlayModule = VgOverlayPlayModule;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsib3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQThDO0FBQzlDLDBDQUErQztBQUUvQyxxREFBZ0Q7Ozs7O2dCQUUvQyxlQUFRLFNBQUM7b0JBQ04sT0FBTyxFQUFFLENBQUUscUJBQVksQ0FBRTtvQkFDekIsWUFBWSxFQUFFO3dCQUNWLCtCQUFhO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUU7d0JBQ0wsK0JBQWE7cUJBQ2hCO2lCQUNKOzs4QkFiRDs7QUFjYSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQge1ZnT3ZlcmxheVBsYXl9IGZyb20gJy4vdmctb3ZlcmxheS1wbGF5JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbIENvbW1vbk1vZHVsZSBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBWZ092ZXJsYXlQbGF5XG4gICAgXSxcbiAgICBleHBvcnRzOiBbXG4gICAgICAgIFZnT3ZlcmxheVBsYXlcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFZnT3ZlcmxheVBsYXlNb2R1bGUge31cbiJdfQ==

/***/ }),

/***/ "./node_modules/videogular2/src/overlay-play/vg-overlay-play.js":
/*!**********************************************************************!*\
  !*** ./node_modules/videogular2/src/overlay-play/vg-overlay-play.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var vg_api_1 = __webpack_require__(/*! ../core/services/vg-api */ "./node_modules/videogular2/src/core/services/vg-api.js");
var vg_states_1 = __webpack_require__(/*! ../core/states/vg-states */ "./node_modules/videogular2/src/core/states/vg-states.js");
var vg_fullscreen_api_1 = __webpack_require__(/*! ../core/services/vg-fullscreen-api */ "./node_modules/videogular2/src/core/services/vg-fullscreen-api.js");
var vg_controls_hidden_1 = __webpack_require__(/*! ../core/services/vg-controls-hidden */ "./node_modules/videogular2/src/core/services/vg-controls-hidden.js");
var VgOverlayPlay = /** @class */ (function () {
    function VgOverlayPlay(ref, API, fsAPI, controlsHidden) {
        this.API = API;
        this.fsAPI = fsAPI;
        this.controlsHidden = controlsHidden;
        this.isNativeFullscreen = false;
        this.areControlsHidden = false;
        this.subscriptions = [];
        this.isBuffering = false;
        this.elem = ref.nativeElement;
    }
    VgOverlayPlay.prototype.ngOnInit = function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.subscriptions.push(this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); }));
        }
    };
    VgOverlayPlay.prototype.onPlayerReady = function () {
        var _this = this;
        this.target = this.API.getMediaById(this.vgFor);
        this.subscriptions.push(this.fsAPI.onChangeFullscreen.subscribe(this.onChangeFullscreen.bind(this)));
        this.subscriptions.push(this.controlsHidden.isHidden.subscribe(this.onHideControls.bind(this)));
        this.subscriptions.push(this.target.subscriptions.bufferDetected.subscribe(function (isBuffering) { return _this.onUpdateBuffer(isBuffering); }));
    };
    VgOverlayPlay.prototype.onUpdateBuffer = function (isBuffering) {
        this.isBuffering = isBuffering;
    };
    VgOverlayPlay.prototype.onChangeFullscreen = function (fsState) {
        if (this.fsAPI.nativeFullscreen) {
            this.isNativeFullscreen = fsState;
        }
    };
    VgOverlayPlay.prototype.onHideControls = function (hidden) {
        this.areControlsHidden = hidden;
    };
    VgOverlayPlay.prototype.onClick = function () {
        var state = this.getState();
        switch (state) {
            case vg_states_1.VgStates.VG_PLAYING:
                this.target.pause();
                break;
            case vg_states_1.VgStates.VG_PAUSED:
            case vg_states_1.VgStates.VG_ENDED:
                this.target.play();
                break;
        }
    };
    VgOverlayPlay.prototype.getState = function () {
        var state = vg_states_1.VgStates.VG_PAUSED;
        if (this.target) {
            if (this.target.state instanceof Array) {
                for (var i = 0, l = this.target.state.length; i < l; i++) {
                    if (this.target.state[i] === vg_states_1.VgStates.VG_PLAYING) {
                        state = vg_states_1.VgStates.VG_PLAYING;
                        break;
                    }
                }
            }
            else {
                state = this.target.state;
            }
        }
        return state;
    };
    VgOverlayPlay.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    VgOverlayPlay.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'vg-overlay-play',
                    encapsulation: core_1.ViewEncapsulation.None,
                    template: "<div class=\"vg-overlay-play\"\n                    [class.native-fullscreen]=\"isNativeFullscreen\"\n                    [class.controls-hidden]=\"areControlsHidden\">\n                   <div class=\"overlay-play-container\"\n                        [class.vg-icon-play_arrow]=\"getState() !== 'playing'\">\n                   </div>\n               </div>",
                    styles: ["\n        vg-overlay-play {\n            z-index: 200;\n        }\n\n        vg-overlay-play.is-buffering {\n            display: none;\n        }\n\n        vg-overlay-play .vg-overlay-play {\n            transition: all 0.5s;\n            cursor: pointer;\n            position: absolute;\n            display: block;\n            color: white;\n            width: 100%;\n            height: 100%;\n            font-size: 80px;\n            filter: alpha(opacity=60);\n            opacity: 0.6;\n        }\n\n        vg-overlay-play .vg-overlay-play.native-fullscreen.controls-hidden {\n            cursor: none;\n        }\n\n        vg-overlay-play .vg-overlay-play .overlay-play-container.vg-icon-play_arrow {\n            pointer-events: none;\n            width: 100%;\n            height: 100%;\n            position: absolute;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-size: 80px;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover {\n            filter: alpha(opacity=100);\n            opacity: 1;\n        }\n\n        vg-overlay-play .vg-overlay-play:hover .overlay-play-container.vg-icon-play_arrow:before {\n            transform: scale(1.2);\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    VgOverlayPlay.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: vg_api_1.VgAPI, },
        { type: vg_fullscreen_api_1.VgFullscreenAPI, },
        { type: vg_controls_hidden_1.VgControlsHidden, },
    ]; };
    VgOverlayPlay.propDecorators = {
        "vgFor": [{ type: core_1.Input },],
        "isBuffering": [{ type: core_1.HostBinding, args: ['class.is-buffering',] },],
        "onClick": [{ type: core_1.HostListener, args: ['click',] },],
    };
    return VgOverlayPlay;
}());
exports.VgOverlayPlay = VgOverlayPlay;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmctb3ZlcmxheS1wbGF5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidmctb3ZlcmxheS1wbGF5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBR3VCO0FBQ3ZCLGtEQUFnRDtBQUNoRCxzREFBb0Q7QUFFcEQsd0VBQXFFO0FBQ3JFLDBFQUF1RTs7SUF1RW5FLHVCQUFZLEdBQWUsRUFBUyxHQUFVLEVBQVMsS0FBc0IsRUFBVSxjQUFnQztRQUFuRixRQUFHLEdBQUgsR0FBRyxDQUFPO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBaUI7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBa0I7a0NBUHpGLEtBQUs7aUNBQ04sS0FBSzs2QkFFRixFQUFFOzJCQUV3QixLQUFLO1FBRzNELElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQztLQUNqQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5HLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLENBQUMsQ0FBQztZQUNGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsYUFBYSxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQyxDQUFDO1NBQzVGO0tBQ0o7SUFFRCxxQ0FBYSxHQUFiO1FBQUEsaUJBU0M7UUFSRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENB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QUFLO2dCQUdMLG1DQUFlO2dCQUNmLHFDQUFnQjs7OzBCQTREcEIsWUFBSztnQ0FTTCxrQkFBVyxTQUFDLG9CQUFvQjs0QkF3Q2hDLG1CQUFZLFNBQUMsT0FBTzs7d0JBckh6Qjs7QUFtRWEsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBWaWV3RW5jYXBzdWxhdGlvbiwgT25EZXN0cm95LFxuICAgIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVmdBUEkgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3ZnLWFwaSc7XG5pbXBvcnQgeyBWZ1N0YXRlcyB9IGZyb20gJy4uL2NvcmUvc3RhdGVzL3ZnLXN0YXRlcyc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFZnRnVsbHNjcmVlbkFQSSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctZnVsbHNjcmVlbi1hcGknO1xuaW1wb3J0IHsgVmdDb250cm9sc0hpZGRlbiB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdmctY29udHJvbHMtaGlkZGVuJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICd2Zy1vdmVybGF5LXBsYXknLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gICAgdGVtcGxhdGU6IGA8ZGl2IGNsYXNzPVwidmctb3ZlcmxheS1wbGF5XCJcbiAgICAgICAgICAgICAgICAgICAgW2NsYXNzLm5hdGl2ZS1mdWxsc2NyZWVuXT1cImlzTmF0aXZlRnVsbHNjcmVlblwiXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5jb250cm9scy1oaWRkZW5dPVwiYXJlQ29udHJvbHNIaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1wbGF5LWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MudmctaWNvbi1wbGF5X2Fycm93XT1cImdldFN0YXRlKCkgIT09ICdwbGF5aW5nJ1wiPlxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgPC9kaXY+YCxcbiAgICBzdHlsZXM6IFsgYFxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkge1xuICAgICAgICAgICAgei1pbmRleDogMjAwO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5LmlzLWJ1ZmZlcmluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmctb3ZlcmxheS1wbGF5IC52Zy1vdmVybGF5LXBsYXkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgZm9udC1zaXplOiA4MHB4O1xuICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTYwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZnLW92ZXJsYXktcGxheSAudmctb3ZlcmxheS1wbGF5Lm5hdGl2ZS1mdWxsc2NyZWVuLmNvbnRyb2xzLWhpZGRlbiB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkgLnZnLW92ZXJsYXktcGxheSAub3ZlcmxheS1wbGF5LWNvbnRhaW5lci52Zy1pY29uLXBsYXlfYXJyb3cge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDgwcHg7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkgLnZnLW92ZXJsYXktcGxheTpob3ZlciB7XG4gICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MTAwKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cblxuICAgICAgICB2Zy1vdmVybGF5LXBsYXkgLnZnLW92ZXJsYXktcGxheTpob3ZlciAub3ZlcmxheS1wbGF5LWNvbnRhaW5lci52Zy1pY29uLXBsYXlfYXJyb3c6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICAgICAgfVxuICAgIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBWZ092ZXJsYXlQbGF5IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIEBJbnB1dCgpIHZnRm9yOiBzdHJpbmc7XG4gICAgZWxlbTogSFRNTEVsZW1lbnQ7XG4gICAgdGFyZ2V0OiBhbnk7XG5cbiAgICBpc05hdGl2ZUZ1bGxzY3JlZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBhcmVDb250cm9sc0hpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuICAgIEBIb3N0QmluZGluZygnY2xhc3MuaXMtYnVmZmVyaW5nJykgaXNCdWZmZXJpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIGNvbnN0cnVjdG9yKHJlZjogRWxlbWVudFJlZiwgcHVibGljIEFQSTogVmdBUEksIHB1YmxpYyBmc0FQSTogVmdGdWxsc2NyZWVuQVBJLCBwcml2YXRlIGNvbnRyb2xzSGlkZGVuOiBWZ0NvbnRyb2xzSGlkZGVuKSB7XG4gICAgICAgIHRoaXMuZWxlbSA9IHJlZi5uYXRpdmVFbGVtZW50O1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZiAodGhpcy5BUEkuaXNQbGF5ZXJSZWFkeSkge1xuICAgICAgICAgICAgdGhpcy5vblBsYXllclJlYWR5KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaCh0aGlzLkFQSS5wbGF5ZXJSZWFkeUV2ZW50LnN1YnNjcmliZSgoKSA9PiB0aGlzLm9uUGxheWVyUmVhZHkoKSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25QbGF5ZXJSZWFkeSgpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0aGlzLkFQSS5nZXRNZWRpYUJ5SWQodGhpcy52Z0Zvcik7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuZnNBUEkub25DaGFuZ2VGdWxsc2NyZWVuLnN1YnNjcmliZSh0aGlzLm9uQ2hhbmdlRnVsbHNjcmVlbi5iaW5kKHRoaXMpKSk7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHRoaXMuY29udHJvbHNIaWRkZW4uaXNIaWRkZW4uc3Vic2NyaWJlKHRoaXMub25IaWRlQ29udHJvbHMuYmluZCh0aGlzKSkpO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnN1YnNjcmlwdGlvbnMuYnVmZmVyRGV0ZWN0ZWQuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgIGlzQnVmZmVyaW5nID0+IHRoaXMub25VcGRhdGVCdWZmZXIoaXNCdWZmZXJpbmcpXG4gICAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb25VcGRhdGVCdWZmZXIoaXNCdWZmZXJpbmcpIHtcbiAgICAgICAgdGhpcy5pc0J1ZmZlcmluZyA9IGlzQnVmZmVyaW5nO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlRnVsbHNjcmVlbihmc1N0YXRlOiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLmZzQVBJLm5hdGl2ZUZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmVGdWxsc2NyZWVuID0gZnNTdGF0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSGlkZUNvbnRyb2xzKGhpZGRlbjogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmFyZUNvbnRyb2xzSGlkZGVuID0gaGlkZGVuO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgICBvbkNsaWNrKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSB0aGlzLmdldFN0YXRlKCk7XG5cbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19QTEFZSU5HOlxuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgVmdTdGF0ZXMuVkdfUEFVU0VEOlxuICAgICAgICAgICAgY2FzZSBWZ1N0YXRlcy5WR19FTkRFRDpcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldC5wbGF5KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRTdGF0ZSgpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gVmdTdGF0ZXMuVkdfUEFVU0VEO1xuXG4gICAgICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudGFyZ2V0LnN0YXRlIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHRoaXMudGFyZ2V0LnN0YXRlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50YXJnZXQuc3RhdGVbIGkgXSA9PT0gVmdTdGF0ZXMuVkdfUExBWUlORykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBWZ1N0YXRlcy5WR19QTEFZSU5HO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHRoaXMudGFyZ2V0LnN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gICAgfVxufVxuIl19

/***/ })

}]);
//# sourceMappingURL=chat-chat-module~chat-ngrx-chat-ngrx-module~player-player-module.js.map