(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calendar-calendar-module"],{

/***/ "./src/app/calendar/calendar-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/calendar/calendar-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CalendarRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarRoutingModule", function() { return CalendarRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarsComponent"],
        data: {
            title: 'Calendar'
        },
    }
];
var CalendarRoutingModule = /** @class */ (function () {
    function CalendarRoutingModule() {
    }
    CalendarRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], CalendarRoutingModule);
    return CalendarRoutingModule;
}());

var routedComponents = [_calendar_component__WEBPACK_IMPORTED_MODULE_2__["CalendarsComponent"]];


/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Calendar Starts-->\r\n<section id=\"calendar\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-sm-12\">\r\n\t\t\t<div class=\"content-header\">Calendar</div>\r\n\t\t\t<p class=\"content-sub-header\">This is the most advanced example having various features. This\r\n\t\t\t\texample lists all the events on the calendar with Add new event functionality.</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<ng-template #modalContent let-close=\"close\">\r\n\t\t<div class=\"modal-header\">\r\n\t\t\t<h5 class=\"modal-title\">{{ modalData?.action }}</h5>\r\n\t\t\t<button type=\"button\" class=\"close\" (click)=\"close()\">\r\n\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t\t<div class=\"modal-body\">\r\n\t\t\t<form action=\"#\" class=\"form form-horizontal\">\r\n\t\t\t\t<div class=\"form-body\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label>Event Title:</label>\r\n\t\t\t\t\t\t<input type=\"text\" name=\"event-title\" class=\"form-control\" [(ngModel)]=\"modalData?.event.title\" (keyup)=\"refresh.next()\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Primary Color:</label>\r\n\t\t\t\t\t\t\t\t<input type=\"color\" name=\"primary-color\" [(ngModel)]=\"modalData?.event.color.primary\" (change)=\"refresh.next()\">\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Secondary Color:</label>\r\n\t\t\t\t\t\t\t\t<input type=\"color\" name=\"secondary-color\" [(ngModel)]=\"modalData?.event.color.secondary\" (change)=\"refresh.next()\">\r\n\t\t\t\t\t\t\t</div>\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Starts At:</label>\r\n\t\t\t\t\t\t\t\t<mwl-demo-utils-date-time-picker name=\"starts-at\" [(ngModel)]=\"modalData?.event.start\" (ngModelChange)=\"refresh.next()\" placeholder=\"Not set\">\r\n\t\t\t\t\t\t\t\t</mwl-demo-utils-date-time-picker>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6 col-12\">\r\n\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<label>Ends At:</label>\r\n\t\t\t\t\t\t\t\t<mwl-demo-utils-date-time-picker name=\"ends-at\" [(ngModel)]=\"modalData?.event.end\" (ngModelChange)=\"refresh.next()\" placeholder=\"Not set\">\r\n\t\t\t\t\t\t\t\t</mwl-demo-utils-date-time-picker>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"modal-footer\">\r\n\t\t\t<button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\r\n\t\t</div>\r\n\t</ng-template>\r\n\t\r\n\t<div class=\"card\">\r\n\t\t<div class=\"card-body\">\r\n\t\t\t<div class=\"card-block\">\r\n\t\t\t\t<div class=\"d-flex flex-wrap justify-content-md-between mb-3 no-gutters\">\r\n\t\t\t\t\t<div class=\"col\">\r\n\t\t\t\t\t\t<div class=\"btn-group d-none d-sm-none d-md-none d-lg-block\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n\t\t\t\t\t\t\t\tPrevious\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-danger\" mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n\t\t\t\t\t\t\t\tToday\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n\t\t\t\t\t\t\t\tNext\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"btn-group d-block d-sm-block d-md-block d-lg-none\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary ft-chevron-left\" mwlCalendarPreviousView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon icon-arrows-left\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-danger ft-bookmark\" mwlCalendarToday [(viewDate)]=\"viewDate\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon icon-arrows-sign-down\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary ft-chevron-right\" mwlCalendarNextView [view]=\"view\" [(viewDate)]=\"viewDate\">\r\n\t\t\t\t\t\t\t\t<i class=\"icon icon-arrows-right\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col text-center align-self-center\">\r\n\t\t\t\t\t\t<h6 class=\"text-uppercase mb-0\">{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h6>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col text-right\">\r\n\t\t\t\t\t\t<div class=\"btn-group d-none d-sm-none d-md-none d-lg-block\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary\" (click)=\"view = 'month'\" [class.active]=\"view === 'month'\">\r\n\t\t\t\t\t\t\t\tMonth\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary\" (click)=\"view = 'week'\" [class.active]=\"view === 'week'\">\r\n\t\t\t\t\t\t\t\tWeek\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary\" (click)=\"view = 'day'\" [class.active]=\"view === 'day'\">\r\n\t\t\t\t\t\t\t\tDay\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t<div class=\"btn-group d-block d-sm-block d-md-block d-lg-none\">\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary btn-icon-icon\" (click)=\"view = 'month'\" [class.active]=\"view === 'month'\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-th\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary btn-icon-icon\" (click)=\"view = 'week'\" [class.active]=\"view === 'week'\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-columns\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t<a class=\"btn btn-raised btn-primary btn-icon-icon\" (click)=\"view = 'day'\" [class.active]=\"view === 'day'\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-th-list\"></i>\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-12\">\r\n\t\t\t\t\t\t<button class=\"btn btn-raised btn-primary pull-right\" (click)=\"addEvent()\">\r\n\t\t\t\t\t\t\tAdd Event\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div [ngSwitch]=\"view\">\r\n\t\t\t\t\t<mwl-calendar-month-view *ngSwitchCase=\"'month'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" [activeDayIsOpen]=\"activeDayIsOpen\"\r\n\t\t\t\t\t (dayClicked)=\"dayClicked($event.day)\" (eventClicked)=\"handleEvent('Clicked', $event.event)\" (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n\t\t\t\t\t</mwl-calendar-month-view>\r\n\t\t\t\t\t<mwl-calendar-week-view *ngSwitchCase=\"'week'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n\t\t\t\t\t (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n\t\t\t\t\t</mwl-calendar-week-view>\r\n\t\t\t\t\t<mwl-calendar-day-view *ngSwitchCase=\"'day'\" [viewDate]=\"viewDate\" [events]=\"events\" [refresh]=\"refresh\" (eventClicked)=\"handleEvent('Clicked', $event.event)\"\r\n\t\t\t\t\t (eventTimesChanged)=\"eventTimesChanged($event)\">\r\n\t\t\t\t\t</mwl-calendar-day-view>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\t</section>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarsComponent", function() { return CalendarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var CalendarsComponent = /** @class */ (function () {
    function CalendarsComponent(modal) {
        var _this = this;
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.handleEvent('Edit this event', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('This event is deleted!', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = [
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 1),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                actions: this.actions
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["subDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addDays"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfMonth"])(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue
            },
            {
                start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["addHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()), 2),
                end: new Date(),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                draggable: true
            }
        ];
        this.activeDayIsOpen = true;
    }
    CalendarsComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarsComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarsComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendarsComponent.prototype.addEvent = function () {
        this.newEvent = {
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            actions: this.actions,
        };
        this.events.push(this.newEvent);
        // this.refresh.next();
        this.handleEvent('Add new event', this.newEvent);
        this.refresh.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarsComponent.prototype, "modalContent", void 0);
    CalendarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], CalendarsComponent);
    return CalendarsComponent;
}());

//Calendar event handler ends


/***/ }),

/***/ "./src/app/calendar/calendar.module.ts":
/*!*********************************************!*\
  !*** ./src/app/calendar/calendar.module.ts ***!
  \*********************************************/
/*! exports provided: CalendarsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarsModule", function() { return CalendarsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar-routing.module */ "./src/app/calendar/calendar-routing.module.ts");
/* harmony import */ var _calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _date_time_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./date-time-picker.component */ "./src/app/calendar/date-time-picker.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CalendarsModule = /** @class */ (function () {
    function CalendarsModule() {
    }
    CalendarsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _calendar_routing_module__WEBPACK_IMPORTED_MODULE_5__["CalendarRoutingModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModalModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDatepickerModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbTimepickerModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [
                _calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarsComponent"],
                _date_time_picker_component__WEBPACK_IMPORTED_MODULE_7__["DateTimePickerComponent"]
            ]
        })
    ], CalendarsModule);
    return CalendarsModule;
}());



/***/ }),

/***/ "./src/app/calendar/date-time-picker.component.ts":
/*!********************************************************!*\
  !*** ./src/app/calendar/date-time-picker.component.ts ***!
  \********************************************************/
/*! exports provided: DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR, DateTimePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR", function() { return DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateTimePickerComponent", function() { return DateTimePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return DateTimePickerComponent; }),
    multi: true
};
var DateTimePickerComponent = /** @class */ (function () {
    function DateTimePickerComponent(cdr) {
        this.cdr = cdr;
        this.onChangeCallback = function () { };
    }
    DateTimePickerComponent.prototype.writeValue = function (date) {
        this.date = date;
        this.dateStruct = {
            day: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getDate"])(date),
            month: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMonth"])(date) + 1,
            year: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getYear"])(date)
        };
        this.timeStruct = {
            second: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getSeconds"])(date),
            minute: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getMinutes"])(date),
            hour: Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["getHours"])(date)
        };
        this.cdr.detectChanges();
    };
    DateTimePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    DateTimePickerComponent.prototype.registerOnTouched = function (fn) { };
    DateTimePickerComponent.prototype.updateDate = function () {
        var newDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setYear"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setMonth"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setDate"])(this.date, this.dateStruct.day), this.dateStruct.month - 1), this.dateStruct.year);
        this.onChangeCallback(newDate);
    };
    DateTimePickerComponent.prototype.updateTime = function () {
        var newDate = Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setHours"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setMinutes"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["setSeconds"])(this.date, this.timeStruct.second), this.timeStruct.minute), this.timeStruct.hour);
        this.onChangeCallback(newDate);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], DateTimePickerComponent.prototype, "placeholder", void 0);
    DateTimePickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mwl-demo-utils-date-time-picker',
            template: "\n    <form class=\"form-inline\">\n      <div class=\"form-group\">\n        <div class=\"input-group\">\n          <input\n            readonly\n            class=\"form-control\"\n            [placeholder]=\"placeholder\"\n            name=\"date\"\n            [(ngModel)]=\"dateStruct\"\n            (ngModelChange)=\"updateDate()\"\n            ngbDatepicker\n            #datePicker=\"ngbDatepicker\">\n            <div class=\"input-group-append\">\n              <div class=\"input-group-text\" (click)=\"datePicker.toggle()\" >\n                <i class=\"fa fa-calendar\"></i>\n              </div>\n            </div>\n        </div>\n      </div>\n    </form>\n    <ngb-timepicker\n      [(ngModel)]=\"timeStruct\"\n      (ngModelChange)=\"updateTime()\"\n      [meridian]=\"true\">\n    </ngb-timepicker>\n  ",
            styles: [
                "\n    .form-group {\n      width: 100%;\n    }\n  "
            ],
            providers: [DATE_TIME_PICKER_CONTROL_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
}());



/***/ })

}]);
//# sourceMappingURL=calendar-calendar-module.js.map