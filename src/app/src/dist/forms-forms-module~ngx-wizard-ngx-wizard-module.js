(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forms-forms-module~ngx-wizard-ngx-wizard-module"],{

/***/ "./src/app/forms/ngx-wizard/address/address.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/address/address.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Address Tab form Starts -->\r\n<form #addressForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div class=\"tab-pane active\">\r\n        <h4 class=\"head text-center\">{{title}}</h4>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-sm-12'>\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"street\">Street Address</label>  \r\n                    <input class=\"form-control input-md\" #street=\"ngModel\" required id=\"street\" name=\"street\" type=\"text\"  [(ngModel)]=\"address.street\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"!street.valid && (street.dirty || street.touched)\">This field is required!</small>\r\n                    \r\n                </div>   \r\n                <div class=\"row\">\r\n                    <div class='col-12 col-sm-4'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"city\">City</label>  \r\n                            <input class=\"form-control input-md\" #city=\"ngModel\" required id=\"city\" name=\"city\" type=\"text\"  [(ngModel)]=\"address.city\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!city.valid && (city.dirty || city.touched)\">This field is required!</small>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <div class='col-4 col-sm-offset-1 col-sm-3'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"state\">State</label>  \r\n                            <input class=\"form-control input-md\" #state=\"ngModel\" required id=\"state\" name=\"state\" type=\"text\"  [(ngModel)]=\"address.state\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!state.valid && (state.dirty || state.touched)\">This field is required!</small>\r\n                            \r\n                        </div>\r\n                    </div>\r\n                    <div class='col-offset-1 col-7 col-sm-offset-1 col-sm-3'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"zip\">Zip</label>  \r\n                            <input class=\"form-control input-md\" #zip=\"ngModel\" required id=\"zip\" name=\"zip\" type=\"text\"  [(ngModel)]=\"address.zip\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!zip.valid && (zip.dirty || zip.touched)\">This field is required!</small>\r\n                            \r\n                        </div>  \r\n                    </div> \r\n                </div>\r\n\r\n                <div class=\"form-group text-center\">\r\n                    <button uiSref=\"work\" type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"cancel()\"> <span style=\"margin-right:10px;\"><i class=\"ft-chevron-left\"></i></span> Previous</button>\r\n                    <button uiSref=\"result\" type=\"button\" class=\"btn btn-raised btn-info\" [disabled]=\"!addressForm.valid\" (click)=\"save(addressForm)\"> Next <span style=\"margin-left:10px;\"><i class=\"ft-chevron-right\"></i></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n    </div>\r\n</form>\r\n<!-- Address Tab form Ends -->"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/address/address.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/address/address.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/ngx-wizard/address/address.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/address/address.component.ts ***!
  \***************************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddressComponent = /** @class */ (function () {
    function AddressComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Where do you live?';
    }
    AddressComponent.prototype.ngOnInit = function () {
        this.address = this.formDataService.getAddress();
    };
    //Save button event Starts
    AddressComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setAddress(this.address);
        var firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].work);
        this.router.navigate(['result'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    //Save button event Ends
    //Cancel button event Starts
    AddressComponent.prototype.cancel = function () {
        this.router.navigate(['work'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/forms/ngx-wizard/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/forms/ngx-wizard/address/address.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _data_formData_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"],
            _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/data/formData.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/forms/ngx-wizard/data/formData.model.ts ***!
  \*********************************************************/
/*! exports provided: FormData, Personal, Address */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormData", function() { return FormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Personal", function() { return Personal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Address", function() { return Address; });
//Wizard form data class Starts
var FormData = /** @class */ (function () {
    function FormData() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    FormData.prototype.clear = function () {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    };
    return FormData;
}());

//Wizard form data class Ends
//Personal tab data class starts
var Personal = /** @class */ (function () {
    function Personal() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
    }
    return Personal;
}());

//Personal tab data class ends
//Address tab data class starts
var Address = /** @class */ (function () {
    function Address() {
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    return Address;
}());

//Address tab data class Ends


/***/ }),

/***/ "./src/app/forms/ngx-wizard/data/formData.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/forms/ngx-wizard/data/formData.service.ts ***!
  \***********************************************************/
/*! exports provided: FormDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormDataService", function() { return FormDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formData.model */ "./src/app/forms/ngx-wizard/data/formData.model.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/forms/ngx-wizard/workflow/workflow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FormDataService = /** @class */ (function () {
    function FormDataService(workflowService) {
        this.workflowService = workflowService;
        this.formData = new _formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"]();
        this.isPersonalFormValid = false;
        this.isWorkFormValid = false;
        this.isAddressFormValid = false;
    }
    //Get Personal Tab Data
    FormDataService.prototype.getPersonal = function () {
        // Return the Personal data
        var personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email
        };
        return personal;
    };
    //Set Personal Tab Data
    FormDataService.prototype.setPersonal = function (data) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].personal);
    };
    //Get Work Tab Data
    FormDataService.prototype.getWork = function () {
        // Return the work type
        return this.formData.work;
    };
    //Set Work Tab Data
    FormDataService.prototype.setWork = function (data) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].work);
    };
    //Get Address Tab Data
    FormDataService.prototype.getAddress = function () {
        // Return the Address data
        var address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    };
    //Set Address Tab Data
    FormDataService.prototype.setAddress = function (data) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].address);
    };
    FormDataService.prototype.getFormData = function () {
        // Return the entire Form Data
        return this.formData;
    };
    FormDataService.prototype.resetFormData = function () {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    };
    FormDataService.prototype.isFormValid = function () {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    };
    FormDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], FormDataService);
    return FormDataService;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/navbar/navbar.component.html":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/navbar/navbar.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar for Wizard Starts -->\r\n<div class=\"board-inner\" id=\"status-buttons\">\r\n    <ul class=\"nav nav-tabs nav-fill\" id=\"myTab\">\r\n        <div class=\"liner\"></div>\r\n\r\n        <li class=\"active nav-item\">\r\n            <a [ngClass]=\"(page==='Personal')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"personal\" data-toggle=\"tab\"\r\n                title=\"personal\">\r\n                <span class=\"round-tabs one\">\r\n                    <i class=\"ft-user\"></i>\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a [ngClass]=\"(page==='Work')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"work\" data-toggle=\"tab\" title=\"work\">\r\n                <span class=\"round-tabs two\">\r\n                    <i class=\"ft-message-square\"></i>\r\n                </span> \r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a [ngClass]=\"(page==='Address')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"address\" data-toggle=\"tab\" title=\"address\">\r\n                <span class=\"round-tabs three\">\r\n                    <i class=\"ft-map-pin\"></i>\r\n                </span>\r\n            </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n            <a [ngClass]=\"(page==='Result')?'nav-link active':'nav-link'\" uiSrefActive=\"active\" uiSref=\"result\" data-toggle=\"tab\" title=\"completed\">\r\n                <span class=\"round-tabs four\">\r\n                    <i class=\"ft-airplay\"></i>\r\n                </span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n<!-- Navbar for Wizard Ends -->"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/navbar/navbar.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/navbar/navbar.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/ngx-wizard/navbar/navbar.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/navbar/navbar.component.ts ***!
  \*************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.page = "Personal";
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (event) {
            var currentRoute = _this.route.root;
            while (currentRoute.children[0] !== undefined) {
                currentRoute = currentRoute.children[0];
            }
            _this.page = currentRoute.snapshot.data["title"];
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'msw-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/forms/ngx-wizard/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/forms/ngx-wizard/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/ngx-wizard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/ngx-wizard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: NGXWizardRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXWizardRoutingModule", function() { return NGXWizardRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-wizard.component */ "./src/app/forms/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/forms/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work/work.component */ "./src/app/forms/ngx-wizard/work/work.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./address/address.component */ "./src/app/forms/ngx-wizard/address/address.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/app/forms/ngx-wizard/result/result.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"],
        data: {
            title: 'ngx-wizard'
        },
        children: [
            {
                path: 'wizard',
                component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_3__["PersonalComponent"],
                data: {
                    title: 'Personal'
                }
            },
            {
                path: 'work',
                component: _work_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"],
                data: {
                    title: 'Work'
                }
            },
            {
                path: 'address',
                component: _address_address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"],
                data: {
                    title: 'Address'
                }
            },
            {
                path: 'result',
                component: _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"],
                data: {
                    title: 'Result'
                }
            }
        ]
    }
];
var NGXWizardRoutingModule = /** @class */ (function () {
    function NGXWizardRoutingModule() {
    }
    NGXWizardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], NGXWizardRoutingModule);
    return NGXWizardRoutingModule;
}());

var routedComponents = [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_2__["NGXFormWizardComponent"]];


/***/ }),

/***/ "./src/app/forms/ngx-wizard/ngx-wizard.component.html":
/*!************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/ngx-wizard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <div class=\"content-header\">NGX Wizard</div>\r\n    </div>\r\n</div>\r\n<section id=\"ngx\">\r\n    <div class=\"card\">\r\n        <div class=\"card-body\">\r\n            <div class=\"card-block\">\r\n                <div class=\"board\">\r\n                    <!-- Navigation Area (Circular Tabs) -->\r\n                    <msw-navbar></msw-navbar>\r\n                    <!-- End Navigation Area (Circular Tabs) -->\r\n\r\n                    <!-- Content Area -->\r\n                    <div class=\"tab-content\">\r\n                        <!-- Nested view  -->\r\n                        <router-outlet> </router-outlet>\r\n                    </div>\r\n                    <!-- End Content Area -->\r\n                </div>\r\n                <!-- For Debugging: show our valid formData -->\r\n            </div>\r\n        </div>\r\n    </div>        \r\n</section>"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/ngx-wizard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/ngx-wizard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-content .tab-pane {\n  padding-top: 20px; }\n\n.alert {\n  padding: 8px;\n  margin-bottom: 8px; }\n\n.ng-valid[required], .ng-valid.required {\n  border-left: 5px solid #42A948;\n  /* green */ }\n\n.ng-invalid:not(form) {\n  border-left: 5px solid #a94442;\n  /* red */ }\n"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/ngx-wizard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/forms/ngx-wizard/ngx-wizard.component.ts ***!
  \**********************************************************/
/*! exports provided: NGXFormWizardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardComponent", function() { return NGXFormWizardComponent; });
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


var NGXFormWizardComponent = /** @class */ (function () {
    function NGXFormWizardComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    NGXFormWizardComponent.prototype.ngOnInit = function () {
        this.router.navigate(['/forms/ngx/wizard'], { skipLocationChange: true });
    };
    NGXFormWizardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'multi-step-wizard-app',
            template: __webpack_require__(/*! ./ngx-wizard.component.html */ "./src/app/forms/ngx-wizard/ngx-wizard.component.html"),
            styles: [__webpack_require__(/*! ./ngx-wizard.component.scss */ "./src/app/forms/ngx-wizard/ngx-wizard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NGXFormWizardComponent);
    return NGXFormWizardComponent;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/ngx-wizard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/forms/ngx-wizard/ngx-wizard.module.ts ***!
  \*******************************************************/
/*! exports provided: NGXFormWizardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NGXFormWizardModule", function() { return NGXFormWizardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-wizard-routing.module */ "./src/app/forms/ngx-wizard/ngx-wizard-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_wizard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-wizard.component */ "./src/app/forms/ngx-wizard/ngx-wizard.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/forms/ngx-wizard/navbar/navbar.component.ts");
/* harmony import */ var _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./personal/personal.component */ "./src/app/forms/ngx-wizard/personal/personal.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/forms/ngx-wizard/work/work.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./address/address.component */ "./src/app/forms/ngx-wizard/address/address.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./result/result.component */ "./src/app/forms/ngx-wizard/result/result.component.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/formData.service */ "./src/app/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./workflow/workflow.service */ "./src/app/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/* App Root */


/* Feature Components */




/* Shared Service */



var NGXFormWizardModule = /** @class */ (function () {
    function NGXFormWizardModule() {
    }
    NGXFormWizardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ngx_wizard_routing_module__WEBPACK_IMPORTED_MODULE_1__["NGXWizardRoutingModule"]
            ],
            providers: [{ provide: _data_formData_service__WEBPACK_IMPORTED_MODULE_9__["FormDataService"], useClass: _data_formData_service__WEBPACK_IMPORTED_MODULE_9__["FormDataService"] },
                { provide: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_10__["WorkflowService"], useClass: _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_10__["WorkflowService"] }],
            declarations: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_3__["NGXFormWizardComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_5__["PersonalComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _address_address_component__WEBPACK_IMPORTED_MODULE_7__["AddressComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_8__["ResultComponent"]],
            bootstrap: [_ngx_wizard_component__WEBPACK_IMPORTED_MODULE_3__["NGXFormWizardComponent"]]
        })
    ], NGXFormWizardModule);
    return NGXFormWizardModule;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/personal/personal.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/personal/personal.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Personal Tab Form Starts -->\r\n<form #personalForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div class=\"tab-pane active\">\r\n        <p class=\"font-medium-2 text-center\">{{title}}</p>\r\n        <br/>\r\n        <div class='row'>\r\n            <div class='col-12'>\r\n                <div class=\"row\">\r\n                    <div class='col-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"firstname\">First Name</label>  \r\n                            <input class=\"form-control input-md\" #firstname=\"ngModel\" required id=\"firstname\" name=\"firstname\" type=\"text\"  [(ngModel)]=\"personal.firstName\">   \r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!firstname.valid && (firstname.dirty || firstname.touched)\">This field is required!</small>\r\n                        </div>\r\n                    </div>\r\n                    <div class='col-12 col-sm-6'>\r\n                        <div class=\"form-group\">\r\n                            <label class=\"form-control-label\" for=\"lastname\">Last Name</label>  \r\n                            <input class=\"form-control input-md\" #lastname=\"ngModel\" required id=\"lastname\" name=\"lastname\" type=\"text\"  [(ngModel)]=\"personal.lastName\">\r\n                            <small class=\"form-text text-muted danger\" *ngIf=\"!lastname.valid && (lastname.dirty || lastname.touched)\">This field is required!</small>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"form-control-label\" for=\"email\">Email</label>\r\n                    <input class=\"form-control input-md\" #email=\"ngModel\" required email id=\"email\" name=\"email\" type=\"text\"  [(ngModel)]=\"personal.email\">\r\n                    <small class=\"form-text text-muted danger\" *ngIf=\"!email.valid && (email.dirty || email.touched)\">Please enter a valid email!</small>\r\n                </div>\r\n                    \r\n                <div class=\"form-group text-center\">\r\n                    <button type=\"button\" uiSref=\"work\" class=\"btn btn-success btn-raised\" [disabled]=\"!personalForm.valid\" (click)=\"save(personalForm)\"> Next <span style=\"margin-left:10px;\"><i class=\"ft-chevron-right\"></i></span></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- Personal Tab Form Ends -->"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/personal/personal.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/personal/personal.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/ngx-wizard/personal/personal.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/personal/personal.component.ts ***!
  \*****************************************************************/
/*! exports provided: PersonalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalComponent", function() { return PersonalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PersonalComponent = /** @class */ (function () {
    function PersonalComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'Please tell us about yourself.';
    }
    PersonalComponent.prototype.ngOnInit = function () {
        this.personal = this.formDataService.getPersonal();
    };
    //Save button event Starts
    PersonalComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setPersonal(this.personal);
        var firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].work);
        if (firstState.length > 0) {
        }
        ;
        this.router.navigateByUrl('/forms/ngx/work', { relativeTo: this.route.parent, skipLocationChange: true });
    };
    PersonalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-personal',
            template: __webpack_require__(/*! ./personal.component.html */ "./src/app/forms/ngx-wizard/personal/personal.component.html"),
            styles: [__webpack_require__(/*! ./personal.component.scss */ "./src/app/forms/ngx-wizard/personal/personal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _data_formData_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"],
            _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], PersonalComponent);
    return PersonalComponent;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/result/result.component.html":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/result/result.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Result tab Form starts -->\r\n<div class=\"tab-pane active\">\r\n    <h3 class=\"head text-center\">{{title}}</h3>\r\n    \r\n    <p class=\"narrow text-center\">\r\n        Here is a copy of the information you have entered:\r\n    </p>\r\n    <div class='row'>\r\n        <div class='col-offset-1 col-10 col-sm-offset-3 col-sm-8 col-md-offset-4 col-md-8'>\r\n            <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\" for=\"name\">Name: </label> \r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.firstName + ' ' + formData.lastName}}\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\" for=\"email\">Email: </label> \r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.email}}\r\n                </div>\r\n           </div>     \r\n            <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\" for=\"work\">Work: </label> \r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.work}}\r\n                </div>\r\n           </div>     \r\n           <div class=\"row\">\r\n                <div class='col-3 col-sm-2'>\r\n                    <div class=\"form-group\">\r\n                        <label class=\"form-control-label\" for=\"address\">Address: </label>\r\n                    </div>\r\n                </div>\r\n                <div class='col-9 col-sm-10'>\r\n                    {{formData.street}}\r\n                    <br/>\r\n                    {{formData.city + ' ' + formData.state + ' ' + formData.zip}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"text-center\">\r\n        <button class=\"btn btn-success btn-raised\" [disabled]=\"!isFormValid\" (click)=\"submit()\"> Submit <span style=\"margin-left:10px;\"><i class=\"ft-chevron-right\"></i></span></button>\r\n    </div>\r\n</div>\r\n<!-- Result tab Form ends -->"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/result/result.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/result/result.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/ngx-wizard/result/result.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/result/result.component.ts ***!
  \*************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.model */ "./src/app/forms/ngx-wizard/data/formData.model.ts");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/forms/ngx-wizard/data/formData.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResultComponent = /** @class */ (function () {
    function ResultComponent(formDataService) {
        this.formDataService = formDataService;
        this.title = 'Thank You!';
        this.isFormValid = false;
    }
    ResultComponent.prototype.ngOnInit = function () {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
    };
    //Submit button event Starts
    ResultComponent.prototype.submit = function () {
        alert('Excellent Job!');
        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_formData_model__WEBPACK_IMPORTED_MODULE_1__["FormData"])
    ], ResultComponent.prototype, "formData", void 0);
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/forms/ngx-wizard/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/forms/ngx-wizard/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [_data_formData_service__WEBPACK_IMPORTED_MODULE_2__["FormDataService"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/work/work.component.html":
/*!***********************************************************!*\
  !*** ./src/app/forms/ngx-wizard/work/work.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Work Tab Form Starts -->\r\n<form #workForm=\"ngForm\" class=\"editForm\" novalidate>\r\n    <div >\r\n        <div class=\"tab-pane active\">\r\n            <h4 class=\"head text-center\">{{title}}</h4>\r\n            <br/>\r\n            <div class='row'>\r\n                <div class='col-offset-4 col-10 col-sm-offset-5 col-sm-4'>\r\n                    <div class=\"form-group\">\r\n                        <div class=\"custom-control custom-radio m-0\">\r\n                            <input type=\"radio\" #work=\"ngModel\" required id=\"customRadioInline1\" name=\"work\" class=\"custom-control-input\" [(ngModel)]=\"workType\" value=\"Design\">\r\n                            <label class=\"custom-control-label\" for=\"customRadioInline1\">Design</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio m-0\">\r\n                            <input type=\"radio\" #work=\"ngModel\" required id=\"customRadioInline2\" checked name=\"work\" class=\"custom-control-input\" [(ngModel)]=\"workType\" value=\"Code\">\r\n                            <label class=\"custom-control-label\" for=\"customRadioInline2\">Code</label>\r\n                        </div>\r\n                        <div class=\"custom-control custom-radio m-0\">\r\n                            <input type=\"radio\" #work=\"ngModel\" required id=\"customRadioInline3\" checked name=\"work\" class=\"custom-control-input\" [(ngModel)]=\"workType\" value=\"Deploy\">\r\n                            <label class=\"custom-control-label\" for=\"customRadioInline3\">Deploy</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"form-group text-center space-20\">\r\n                <button uiSref=\"personal\" type=\"button\" class=\"btn btn-raised btn-secondary\" (click)=\"cancel()\"> <span style=\"margin-right:10px;\"><i class=\"ft-chevron-left\"></i></span> Previous</button>\r\n                <button uiSref=\"address\" type=\"button\" class=\"btn btn-raised btn-info\" [disabled]=\"!workForm.valid\" (click)=\"save(workForm)\"> Next <span style=\"margin-left:10px;\"><i class=\"ft-chevron-right\"></i></span></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n<!-- Work Tab Form Ends -->"

/***/ }),

/***/ "./src/app/forms/ngx-wizard/work/work.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/forms/ngx-wizard/work/work.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms/ngx-wizard/work/work.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/forms/ngx-wizard/work/work.component.ts ***!
  \*********************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_formData_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/formData.service */ "./src/app/forms/ngx-wizard/data/formData.service.ts");
/* harmony import */ var _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow/workflow.service */ "./src/app/forms/ngx-wizard/workflow/workflow.service.ts");
/* harmony import */ var _workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workflow/workflow.model */ "./src/app/forms/ngx-wizard/workflow/workflow.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkComponent = /** @class */ (function () {
    function WorkComponent(router, route, formDataService, workflowService) {
        this.router = router;
        this.route = route;
        this.formDataService = formDataService;
        this.workflowService = workflowService;
        this.title = 'What do you do?';
    }
    WorkComponent.prototype.ngOnInit = function () {
        this.workType = this.formDataService.getWork();
    };
    //Save button event Starts
    WorkComponent.prototype.save = function (form) {
        if (!form.valid)
            return;
        this.formDataService.setWork(this.workType);
        var firstState = this.workflowService.getFirstInvalidStep(_workflow_workflow_model__WEBPACK_IMPORTED_MODULE_3__["STEPS"].work);
        this.router.navigate(['address'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    //Save button event Ends
    //Cancel button event Starts
    WorkComponent.prototype.cancel = function () {
        this.router.navigate(['wizard'], { relativeTo: this.route.parent, skipLocationChange: true });
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'mt-wizard-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/forms/ngx-wizard/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/forms/ngx-wizard/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _data_formData_service__WEBPACK_IMPORTED_MODULE_1__["FormDataService"],
            _workflow_workflow_service__WEBPACK_IMPORTED_MODULE_2__["WorkflowService"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/forms/ngx-wizard/workflow/workflow.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/workflow/workflow.model.ts ***!
  \*************************************************************/
/*! exports provided: STEPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPS", function() { return STEPS; });
var STEPS = {
    personal: 'personal',
    work: 'work',
    address: 'address',
    result: 'result'
};


/***/ }),

/***/ "./src/app/forms/ngx-wizard/workflow/workflow.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/forms/ngx-wizard/workflow/workflow.service.ts ***!
  \***************************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _workflow_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow.model */ "./src/app/forms/ngx-wizard/workflow/workflow.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var WorkflowService = /** @class */ (function () {
    function WorkflowService() {
        this.workflow = [
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].personal, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].work, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].address, valid: false },
            { step: _workflow_model__WEBPACK_IMPORTED_MODULE_1__["STEPS"].result, valid: false }
        ];
    }
    WorkflowService.prototype.validateStep = function (step) {
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
            }
        }
    };
    WorkflowService.prototype.resetSteps = function () {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(function (element) {
            element.valid = false;
        });
    };
    WorkflowService.prototype.getFirstInvalidStep = function (step) {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';
        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            var item = this.workflow[i];
            if (item.step === step) {
                found = true;
                redirectToStep = '';
            }
            else {
                valid = item.valid;
                redirectToStep = item.step;
            }
        }
        return redirectToStep;
    };
    WorkflowService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], WorkflowService);
    return WorkflowService;
}());



/***/ })

}]);
//# sourceMappingURL=forms-forms-module~ngx-wizard-ngx-wizard-module.js.map