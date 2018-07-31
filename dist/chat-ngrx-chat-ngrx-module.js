(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-ngrx-chat-ngrx-module"],{

/***/ "./src/app/chat-ngrx/chat-ngrx-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChatNGRXRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNGRXRoutingModule", function() { return ChatNGRXRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-ngrx.component */ "./src/app/chat-ngrx/chat-ngrx.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"],
        data: {
            title: 'Chat'
        },
    }
];
var ChatNGRXRoutingModule = /** @class */ (function () {
    function ChatNGRXRoutingModule() {
    }
    ChatNGRXRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], ChatNGRXRoutingModule);
    return ChatNGRXRoutingModule;
}());

var routedComponents = [_chat_ngrx_component__WEBPACK_IMPORTED_MODULE_2__["ChatComponent"]];


/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-application\">\r\n  <div class=\"content-overlay\"></div>\r\n  <div class=\"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block\">\r\n    <div class=\"chat-sidebar-content\">\r\n      <div class=\"chat-fixed-search p-2\">\r\n        <form>\r\n          <div class=\"position-relative has-icon-left\">\r\n            <input class=\"form-control\" id=\"timesheetinput1\" name=\"employeename\" type=\"text\">\r\n            <div class=\"form-control-position\">\r\n              <i class=\"ft-user\"></i>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div id=\"users-list\" class=\"list-group position-relative\">\r\n        <div class=\"users-list-padding\">\r\n          <a class=\"list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2\" (click)=\"SetActive($event, 'chat1')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-online\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Elizabeth Elliott\r\n                  <span class=\"font-small-3 float-right primary\">4:14 AM</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check primary font-small-2\"></i> Okay\r\n                  <span class=\"float-right primary\">\r\n                    <i class=\"font-medium-1 icon-pin blue-grey lighten-3\"></i>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat2')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-busy\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-7.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Kristopher Candy\r\n                  <span class=\"font-small-3 float-right primary\">9:04 PM</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check primary font-small-2\"></i> Thank you\r\n                  <span class=\"float-right \r\n                        primary\">\r\n                    <span class=\"badge badge-pill badge-primary\">12</span>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat3')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-away\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-8.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Sarah Woods\r\n                  <span class=\"font-small-3 float-right primary\">2:14 AM</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> Hello krish!\r\n                  <span class=\"float-right primary\">\r\n                    <i class=\"font-medium-1 icon-volume-off blue-grey lighten-3 mr-1\"></i>\r\n                    <span class=\"badge badge-pill badge-primary\">3</span>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat4')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-away\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-5.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Bruce Reid\r\n                  <span class=\"font-small-3 float-right primary\">Yesterday</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> Will connect you</p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat5')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-online\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Heather Howell\r\n                  <span class=\"font-small-3 float-right primary\">Friday</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> Thank you\r\n                  <span class=\"float-right primary\">\r\n                    <span class=\"badge badge-pill badge-primary\">4</span>\r\n                  </span>\r\n                </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat6')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-busy\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-4.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Kelly Reyes\r\n                  <span class=\"font-small-3 float-right primary\">Thrusday</span>\r\n                </h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check font-small-2\"></i> I love you </p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat7')\">\r\n            <span class=\"media\">\r\n              <span class=\"avatar avatar-md avatar-online\">\r\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.png\"\r\n                  alt=\"Generic placeholder image\">\r\n                <i></i>\r\n              </span>\r\n              <div class=\"media-body\">\r\n                <h6 class=\"list-group-item-heading\">Vincent Nelson</h6>\r\n                <p class=\"list-group-item-text text-muted\">\r\n                  <i class=\"ft-check primary font-small-2\"></i> Who you are?</p>\r\n              </div>\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"chat-name p-2 bg-white\">\r\n    <div class=\"media\">\r\n      <span class=\"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none\"></span>\r\n      <div class=\"media-body\">\r\n        <img [src]=\"[activeChatUserImg]\" width=\"37\" class=\"rounded-circle mr-1\" alt=\"avatar\" />\r\n        <span>{{ activeChatUser }}</span>\r\n        <i class=\"ft-more-vertical float-right mt-1\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\r\n    <div class=\"badge badge-dark mb-1\">NgRx Chat History</div>\r\n    <div class=\"chats\">\r\n      <div class=\"chats\">\r\n        <div [ngClass]=\"[chat.chatClass]\" *ngFor=\"let chat of chat\">\r\n          <div class=\"chat-avatar\">\r\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"[chat.avatar]\" title=\"\" data-original-title=\"\">\r\n              <img [src]=\"[chat.imagePath]\" class=\"width-50\" alt=\"avatar\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"chat-body\">\r\n            <div class=\"chat-content\" *ngFor=\"let message of chat.messages\">\r\n              <p *ngIf=\"chat.messageType === 'text'\">{{ message }}</p>\r\n              <vg-player *ngIf=\"chat.messageType === 'audio'\">\r\n                <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls>\r\n                  <source [src]=\"message\" type=\"audio/mp3\">\r\n                </audio>\r\n              </vg-player>\r\n              <vg-player *ngIf=\"chat.messageType === 'video'\" style=\"height: 250px; width: 250px\">\r\n                <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\r\n                  <source [src]=\"message\" type=\"video/mp4\">\r\n                </video>\r\n              </vg-player>\r\n            </div>\r\n          </div>\r\n          <p class=\"time\" *ngIf=\"chat.time !='' \">{{chat.time}}</p>\r\n        </div>\r\n\r\n        <div class=\"chat\" *ngIf=\"messages.length > 0\">\r\n          <div class=\"chat-avatar\">\r\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"\">\r\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"width-50\" alt=\"avatar\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"chat-body\">\r\n            <div class=\"chat-content\" *ngFor=\"let message of messages\">\r\n              <p>{{ message }}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\r\n    <form class=\"chat-app-input row\">\r\n      <fieldset class=\"form-group position-relative has-icon-left col-xl-10 col-lg-8 col-8 m-0 mb-1\">\r\n        <div class=\"form-control-position\">\r\n          <i class=\"icon-emoticon-smile\"></i>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"Type your message\" (keydown.enter)=\"onAddMessage();$event.preventDefault()\"\r\n          #messageInput>\r\n        <div class=\"form-control-position control-position-right\">\r\n          <i class=\"ft-image\"></i>\r\n        </div>\r\n      </fieldset>\r\n      <fieldset class=\"form-group position-relative has-icon-left col-xl-2 col-lg-4 col-4 m-0 mb-1\">\r\n        <button type=\"button\" class=\"btn btn-raised btn-primary\" (click)=\"onAddMessage()\">\r\n          <i class=\"fa fa-paper-plane-o hidden-lg-up\"></i> Send</button>\r\n      </fieldset>\r\n    </form>\r\n  </section>\r\n</div>"

/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat-ngrx.model */ "./src/app/chat-ngrx/chat-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/chat.actions */ "./src/app/chat-ngrx/store/chat.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = /** @class */ (function () {
    function ChatComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
        this.currentChatId = 'chat1';
        this.messages = new Array();
        this.item = 0;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.getScript('./assets/js/chat.js');
        this.chatState = this.store.select('chat');
        this.subscription = this.chatState.subscribe(function (data) {
            _this.chat = data.chat1;
            _this.activeChatUser = "Elizabeth Elliott";
            _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
        });
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        if (this.messageInputRef.nativeElement.value != "") {
            if (this.currentChatId === 'chat1') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat1"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat2') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat2"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat3') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat3"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat4') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat4"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat5') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat5"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat6') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat6"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat7') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_3__["AddChat7"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
        }
        this.messageInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.focus();
    };
    //chat user list click event function
    ChatComponent.prototype.SetActive = function (event, chatId) {
        var _this = this;
        this.currentChatId = chatId;
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.getElementsByClassName('list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item no-border');
        });
        //set active class for selected item 
        event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
        this.messages = [];
        if (chatId === 'chat1') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat1;
                _this.activeChatUser = "Elizabeth Elliott";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
            });
        }
        else if (chatId === 'chat2') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat2;
                _this.activeChatUser = "Kristopher Candy";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-7.png";
            });
        }
        else if (chatId === 'chat3') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat3;
                _this.activeChatUser = "Sarah Woods";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-8.png";
            });
        }
        else if (chatId === 'chat4') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat4;
                _this.activeChatUser = "Bruce Reid";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-5.png";
            });
        }
        else if (chatId === 'chat5') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat5;
                _this.activeChatUser = "Heather Howell";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-9.png";
            });
        }
        else if (chatId === 'chat6') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat6;
                _this.activeChatUser = "Kelly Reyes";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-4.png";
            });
        }
        else if (chatId === 'chat7') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat7;
                _this.activeChatUser = "Vincent Nelson";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-14.png";
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('messageInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ChatComponent.prototype, "messageInputRef", void 0);
    ChatComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ngrx-chat',
            template: __webpack_require__(/*! ./chat-ngrx.component.html */ "./src/app/chat-ngrx/chat-ngrx.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./chat-ngrx.component.scss */ "./src/app/chat-ngrx/chat-ngrx.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.model.ts":
/*!**********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.model.ts ***!
  \**********************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
var Chat = /** @class */ (function () {
    function Chat(avatar, chatClass, imagePath, time, messages, messageType) {
        this.avatar = avatar;
        this.chatClass = chatClass;
        this.imagePath = imagePath;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    return Chat;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.module.ts ***!
  \***********************************************/
/*! exports provided: ChatNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNGRXModule", function() { return ChatNGRXModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chat-ngrx-routing.module */ "./src/app/chat-ngrx/chat-ngrx-routing.module.ts");
/* harmony import */ var _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chat-ngrx.component */ "./src/app/chat-ngrx/chat-ngrx.component.ts");
/* harmony import */ var _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../chat-ngrx/store/chat.reducers */ "./src/app/chat-ngrx/store/chat.reducers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ChatNGRXModule = /** @class */ (function () {
    function ChatNGRXModule() {
    }
    ChatNGRXModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_7__["ChatNGRXRoutingModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forFeature('chat', _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_9__["chatReducer"]),
            ],
            declarations: [
                _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"]
            ]
        })
    ], ChatNGRXModule);
    return ChatNGRXModule;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/store/chat.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.actions.ts ***!
  \*************************************************/
/*! exports provided: ADD_CHAT1, ADD_CHAT2, ADD_CHAT3, ADD_CHAT4, ADD_CHAT5, ADD_CHAT6, ADD_CHAT7, AddChat1, AddChat2, AddChat3, AddChat4, AddChat5, AddChat6, AddChat7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT1", function() { return ADD_CHAT1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT2", function() { return ADD_CHAT2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT3", function() { return ADD_CHAT3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT4", function() { return ADD_CHAT4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT5", function() { return ADD_CHAT5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT6", function() { return ADD_CHAT6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT7", function() { return ADD_CHAT7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat1", function() { return AddChat1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat2", function() { return AddChat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat3", function() { return AddChat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat4", function() { return AddChat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat5", function() { return AddChat5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat6", function() { return AddChat6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat7", function() { return AddChat7; });
var ADD_CHAT1 = 'ADD_CHAT1';
var ADD_CHAT2 = 'ADD_CHAT2';
var ADD_CHAT3 = 'ADD_CHAT3';
var ADD_CHAT4 = 'ADD_CHAT4';
var ADD_CHAT5 = 'ADD_CHAT5';
var ADD_CHAT6 = 'ADD_CHAT6';
var ADD_CHAT7 = 'ADD_CHAT7';
var AddChat1 = /** @class */ (function () {
    function AddChat1(payload) {
        this.payload = payload;
        this.type = ADD_CHAT1;
    }
    return AddChat1;
}());

var AddChat2 = /** @class */ (function () {
    function AddChat2(payload) {
        this.payload = payload;
        this.type = ADD_CHAT2;
    }
    return AddChat2;
}());

var AddChat3 = /** @class */ (function () {
    function AddChat3(payload) {
        this.payload = payload;
        this.type = ADD_CHAT3;
    }
    return AddChat3;
}());

var AddChat4 = /** @class */ (function () {
    function AddChat4(payload) {
        this.payload = payload;
        this.type = ADD_CHAT4;
    }
    return AddChat4;
}());

var AddChat5 = /** @class */ (function () {
    function AddChat5(payload) {
        this.payload = payload;
        this.type = ADD_CHAT5;
    }
    return AddChat5;
}());

var AddChat6 = /** @class */ (function () {
    function AddChat6(payload) {
        this.payload = payload;
        this.type = ADD_CHAT6;
    }
    return AddChat6;
}());

var AddChat7 = /** @class */ (function () {
    function AddChat7(payload) {
        this.payload = payload;
        this.type = ADD_CHAT7;
    }
    return AddChat7;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/store/chat.reducers.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.reducers.ts ***!
  \**************************************************/
/*! exports provided: chatReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatReducer", function() { return chatReducer; });
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chat-ngrx.model */ "./src/app/chat-ngrx/chat-ngrx.model.ts");
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chat.actions */ "./src/app/chat-ngrx/store/chat.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var initialState = {
    chat1: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help? We are here for you!'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '1 hour ago', [
            'Hey John, I am looking for the best admin template.',
            'Could you please help me to find it out?',
            'It should be angular 5 bootstrap compatible.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '30 minutes ago', [
            'Absolutely!',
            'Apex admin is the responsive angular 5 bootstrap admin template.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '20 minutes ago', [
            'Can you provide me audio link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '10 minutes ago', [
            'Can you provide me video link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', 'just now', [
            'Looks clean and fresh UI.',
            'It is perfect for my next project.',
            'How can I purchase it?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Thanks, from ThemeForest.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '', [
            'I will purchase it for sure.',
            'Thanks.'
        ], 'text'),
    ],
    chat2: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '1 hours ago', [
            'Hi, I spoke with a representative yesterday.',
            'he gave me some steps to fix my problem',
            'but they didn’t help.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 minutes ago', [
            'Can you provide me audio link of your conversation?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 minutes ago', [
            'Can you provide me video link of your issue?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'I’m sorry to hear that',
            'Can I ask which model of projector you own?',
            'What steps did he suggest you to take?',
            'What sort of issue are you having?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'An issue with the power.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Did you make sure the outlet you plugged it into was functional.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'Yes'
        ], 'text'),
    ],
    chat3: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '1 hours ago', [
            'Hey John, I am looking for the best admin template.',
            'Could you please help me to find it out?',
            'It should be angular 5 bootstrap compatible.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Absolutely!',
            'Apex admin is the responsive angular 5 bootstrap admin template.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '20 minutes ago', [
            'Can you provide me audio link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '10 minutes ago', [
            'Can you provide me video link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '', [
            'Looks clean and fresh UI.',
            'It is perfect for my next project.',
            'How can I purchase it?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Thanks, from ThemeForest.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '', [
            'I will purchase it for sure.',
            'Thanks.'
        ], 'text'),
    ],
    chat4: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '1 hours ago', [
            'Hi, I spoke with a representative yesterday.',
            'he gave me some steps to fix my problem',
            'but they didn’t help.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 minutes ago', [
            'Can you provide me audio link of your conversation?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 minutes ago', [
            'Can you provide me video link of your issue?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'I’m sorry to hear that',
            'Can I ask which model of projector you own?',
            'What steps did he suggest you to take?',
            'What sort of issue are you having?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'An issue with the power.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Did you make sure the outlet you plugged it into was functional.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'Yes'
        ], 'text'),
    ],
    chat5: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '1 hours ago', [
            'Hey John, I am looking for the best admin template.',
            'Could you please help me to find it out?',
            'It should be angular 5 bootstrap compatible.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Absolutely!',
            'Apex admin is the responsive angular 5 bootstrap admin template.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '20 minutes ago', [
            'Can you provide me audio link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '10 minutes ago', [
            'Can you provide me video link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '', [
            'Looks clean and fresh UI.',
            'It is perfect for my next project.',
            'How can I purchase it?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Thanks, from ThemeForest.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '', [
            'I will purchase it for sure.',
            'Thanks.'
        ], 'text'),
    ],
    chat6: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '1 hours ago', [
            'Hi, I spoke with a representative yesterday.',
            'he gave me some steps to fix my problem',
            'but they didn’t help.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 minutes ago', [
            'Can you provide me audio link of your conversation?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 minutes ago', [
            'Can you provide me video link of your issue?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'I’m sorry to hear that',
            'Can I ask which model of projector you own?',
            'What steps did he suggest you to take?',
            'What sort of issue are you having?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'An issue with the power.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Did you make sure the outlet you plugged it into was functional.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'Yes'
        ], 'text'),
    ],
    chat7: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'How can we help'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '1 hours ago', [
            'Hey John, I am looking for the best admin template.',
            'Could you please help me to find it out?',
            'It should be angular 4 bootstrap compatible.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Absolutely!',
            'Apex admin is the responsive angular 4 bootstrap admin template.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '20 minutes ago', [
            'Can you provide me audio link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '10 minutes ago', [
            'Can you provide me video link?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '', [
            'Looks clean and fresh UI.',
            'It is perfect for my next project.',
            'How can I purchase it?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Thanks, from ThemeForest.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_0__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '', [
            'I will purchase it for sure.',
            'Thanks.'
        ], 'text'),
    ]
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT1"]):
            var chat1 = state.chat1.slice();
            return __assign({}, state, { chat1: state.chat1.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT2"]):
            var chat2 = state.chat2.slice();
            return __assign({}, state, { chat2: state.chat2.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT3"]):
            var chat3 = state.chat3.slice();
            return __assign({}, state, { chat3: state.chat3.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT4"]):
            var chat4 = state.chat4.slice();
            return __assign({}, state, { chat4: state.chat4.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT5"]):
            var chat5 = state.chat5.slice();
            return __assign({}, state, { chat5: state.chat5.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT6"]):
            var chat6 = state.chat6.slice();
            return __assign({}, state, { chat6: state.chat6.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_1__["ADD_CHAT7"]):
            var chat7 = state.chat7.slice();
            return __assign({}, state, { chat7: state.chat7.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=chat-ngrx-chat-ngrx-module.js.map