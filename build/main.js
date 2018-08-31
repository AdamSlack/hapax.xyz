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

module.exports = ".wrapper {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.content {\n  flex: 1 0 auto;\n}\n.footer {\n  flex-shrink: 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"content\">\n        <app-header-bar></app-header-bar>\n        <app-nav-bar></app-nav-bar>\n\n        <router-outlet></router-outlet>\n    </div>\n    <div class=\"footer\">\n        <app-footer></app-footer>\n    </div>\n</div>"

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
        this.title = 'hapax';
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
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _components_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header-bar/header-bar.component */ "./src/app/components/header-bar/header-bar.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/projects-page/projects-page.component */ "./src/app/pages/projects-page/projects-page.component.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/pages/about-page/about-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_carousel_highlights_carousel_highlights_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carousel-highlights/carousel-highlights.component */ "./src/app/components/carousel-highlights/carousel-highlights.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_focused_highlights_focused_highlights_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/focused-highlights/focused-highlights.component */ "./src/app/components/focused-highlights/focused-highlights.component.ts");
/* harmony import */ var _components_ask_us_search_ask_us_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ask-us-search/ask-us-search.component */ "./src/app/components/ask-us-search/ask-us-search.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'home', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
    { path: 'about', component: _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"] },
    { path: 'projects', component: _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"],
                _components_header_bar_header_bar_component__WEBPACK_IMPORTED_MODULE_4__["HeaderBarComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _pages_projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_6__["ProjectsPageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_7__["AboutPageComponent"],
                _components_carousel_highlights_carousel_highlights_component__WEBPACK_IMPORTED_MODULE_9__["CarouselHighlightsComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_focused_highlights_focused_highlights_component__WEBPACK_IMPORTED_MODULE_11__["FocusedHighlightsComponent"],
                _components_ask_us_search_ask_us_search_component__WEBPACK_IMPORTED_MODULE_12__["AskUsSearchComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_13__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/image-object.ts":
/*!*****************************************!*\
  !*** ./src/app/classes/image-object.ts ***!
  \*****************************************/
/*! exports provided: ImageObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageObject", function() { return ImageObject; });
var ImageObject = /** @class */ (function () {
    function ImageObject(id, titleText, tooltipText, imgSrc, altText) {
        this.id = 0;
        this.titleText = '';
        this.tooltipText = '';
        this.imgSrc = '';
        this.altText = '';
        this.id = id;
        this.titleText = titleText;
        this.tooltipText = tooltipText;
        this.imgSrc = imgSrc;
        this.altText = altText;
    }
    return ImageObject;
}());



/***/ }),

/***/ "./src/app/components/ask-us-search/ask-us-search.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/ask-us-search/ask-us-search.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ask-us-search\">\n    <input type=\"text\" class=\"search\" placeholder={{placeholderQuery}}>\n    <button type=\"submit\" class=\"search-button\"><fa-icon [icon]=\"faSearch\"></fa-icon></button>\n</div>"

/***/ }),

/***/ "./src/app/components/ask-us-search/ask-us-search.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/ask-us-search/ask-us-search.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ask-us-search {\n  display: flex; }\n\n.search-button {\n  background-color: #ffffff;\n  border-left: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: 1px solid #222222;\n  color: #222222;\n  padding: 10px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-weight: 200;\n  font-size: 0.9em;\n  text-align: center; }\n\n.search-button:hover {\n  background-color: #eeeeee; }\n\n.search-button:focus {\n  background-color: #eeeeee;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/components/ask-us-search/ask-us-search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/ask-us-search/ask-us-search.component.ts ***!
  \*********************************************************************/
/*! exports provided: AskUsSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskUsSearchComponent", function() { return AskUsSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ask_us_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ask-us-search.service */ "./src/app/services/ask-us-search.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AskUsSearchComponent = /** @class */ (function () {
    function AskUsSearchComponent(askUs) {
        this.askUs = askUs;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faSearch"];
        this.placeholderQuery = askUs.getRandomQuery();
    }
    AskUsSearchComponent.prototype.ngOnInit = function () {
    };
    AskUsSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ask-us-search',
            template: __webpack_require__(/*! ./ask-us-search.component.html */ "./src/app/components/ask-us-search/ask-us-search.component.html"),
            styles: [__webpack_require__(/*! ./ask-us-search.component.scss */ "./src/app/components/ask-us-search/ask-us-search.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ask_us_search_service__WEBPACK_IMPORTED_MODULE_1__["AskUsSearchService"]])
    ], AskUsSearchComponent);
    return AskUsSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel-highlights/carousel-highlights.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/carousel-highlights/carousel-highlights.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel\">\n    <button (click)=\"displayPreviousHighlight()\"><</button>\n  <div class=\"secondary-highlight\">\n    <img src={{leftSecondaryHighlight.imgSrc}} alt={{leftSecondaryHighlight.altText}} title={{leftSecondaryHighlight.tooltipText}}>\n    <div>{{leftSecondaryHighlight.titleText}}</div>\n    </div>\n  <div class=\"primary-highlight\">\n      <img src={{primaryHighlight.imgSrc}} alt={{primaryHighlight.altText}} title={{primaryHighlight.tooltipText}}>\n      <div>{{primaryHighlight.titleText}}</div>\n  </div>\n  <div class=\"secondary-highlight\">\n      <img src={{rightSecondaryHighlight.imgSrc}} alt={{rightSecondaryHighlight.altText}} title={{rightSecondaryHighlight.tooltipText}}>\n      <div>{{rightSecondaryHighlight.titleText}}</div>\n    </div>\n  <button (click)=\"displayNextHighlight()\">></button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/carousel-highlights/carousel-highlights.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/carousel-highlights/carousel-highlights.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px; }\n\n.primary-highlight {\n  flex: wrap;\n  justify-content: center;\n  margin: 5px; }\n\n.primary-highlight img {\n    width: 200px; }\n\n.primary-highlight div {\n    text-align: center;\n    width: 200px;\n    overflow-wrap: normal; }\n\n.secondary-highlight {\n  width: 50%;\n  min-width: 0px;\n  max-width: 100px; }\n\n.secondary-highlight img {\n    opacity: 0.5; }\n\n.secondary-highlight div {\n    text-align: center;\n    min-width: 0px;\n    max-width: 100px;\n    overflow-wrap: normal; }\n\n@media screen and (min-width: 1201px) {\n    .secondary-highlight {\n      font-size: 0.5em; } }\n\n@media screen and (max-width: 1200px) {\n    .secondary-highlight {\n      font-size: 0px; } }\n\n@media screen and (min-width: 701px) {\n    .secondary-highlight img {\n      width: 100%; } }\n\n@media screen and (max-width: 700px) {\n    .secondary-highlight img {\n      width: 0%; } }\n\nbutton {\n  background-color: #ffffff;\n  border-left: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: 1px solid #222222;\n  color: #222222;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-weight: 200;\n  font-size: 0.9em;\n  text-align: center;\n  margin: 0px 2.5px; }\n\nbutton:hover {\n  background-color: #eeeeee; }\n\nbutton:focus {\n  background-color: #eeeeee;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/components/carousel-highlights/carousel-highlights.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/carousel-highlights/carousel-highlights.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CarouselHighlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselHighlightsComponent", function() { return CarouselHighlightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_carousel_highlights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/carousel-highlights.service */ "./src/app/services/carousel-highlights.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselHighlightsComponent = /** @class */ (function () {
    function CarouselHighlightsComponent(highlights) {
        this.highlights = highlights;
        this.highlightIndex = 0;
        this.carouselHighlights = [];
    }
    CarouselHighlightsComponent.prototype.ngOnInit = function () {
        this.carouselHighlights = this.highlights.pageImageHighlights[this.carouselName];
        this.highlightIndex = Math.floor(this.carouselHighlights.length / 2) - 1;
        this.displayNextHighlight();
    };
    CarouselHighlightsComponent.prototype.incrementHighlightIndex = function (highlightIndex) {
        var incrementedIndex = highlightIndex + 1;
        if (incrementedIndex > this.carouselHighlights.length - 1) {
            incrementedIndex = 0;
        }
        return incrementedIndex;
    };
    CarouselHighlightsComponent.prototype.decrimentHighlightIndex = function (highlightIndex) {
        var decrimentIndex = highlightIndex - 1;
        if (decrimentIndex < 0) {
            decrimentIndex = this.carouselHighlights.length - 1;
        }
        return decrimentIndex;
    };
    CarouselHighlightsComponent.prototype.displayNextHighlight = function () {
        this.leftSecondaryHighlight = this.carouselHighlights[this.highlightIndex];
        this.highlightIndex = this.incrementHighlightIndex(this.highlightIndex);
        this.primaryHighlight = this.carouselHighlights[this.highlightIndex];
        this.rightSecondaryHighlight = this.carouselHighlights[this.incrementHighlightIndex(this.highlightIndex)];
    };
    CarouselHighlightsComponent.prototype.displayPreviousHighlight = function () {
        this.rightSecondaryHighlight = this.carouselHighlights[this.highlightIndex];
        this.highlightIndex = this.decrimentHighlightIndex(this.highlightIndex);
        this.primaryHighlight = this.carouselHighlights[this.highlightIndex];
        this.leftSecondaryHighlight = this.carouselHighlights[this.decrimentHighlightIndex(this.highlightIndex)];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CarouselHighlightsComponent.prototype, "carouselName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CarouselHighlightsComponent.prototype, "carouselTitle", void 0);
    CarouselHighlightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel-highlights',
            template: __webpack_require__(/*! ./carousel-highlights.component.html */ "./src/app/components/carousel-highlights/carousel-highlights.component.html"),
            styles: [__webpack_require__(/*! ./carousel-highlights.component.scss */ "./src/app/components/carousel-highlights/carousel-highlights.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_carousel_highlights_service__WEBPACK_IMPORTED_MODULE_1__["CarouselHighlightsService"]])
    ], CarouselHighlightsComponent);
    return CarouselHighlightsComponent;
}());



/***/ }),

/***/ "./src/app/components/focused-highlights/focused-highlights.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/focused-highlights/focused-highlights.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"carousel\">\n    <button (click)=\"displayPreviousHighlight()\"><</button>\n    <div class=\"secondary-highlight\" *ngFor=\"let highlight of leftHighlights\">\n      <img src={{highlight.imgSrc}} alt={{highlight.altText}} title={{highlight.tooltipText}}>\n      <div>{{highlight.titleText}}</div>\n    </div>\n  \n    <div class=\"primary-highlight\">\n        <img src={{selectedHighlight.imgSrc}} alt={{selectedHighlight.altText}} title={{selectedHighlight.tooltipText}}>\n        <div>{{selectedHighlight.titleText}}</div>\n    </div>\n  \n    <div class=\"secondary-highlight\" *ngFor=\"let highlight of rightHighlights\">\n      <img src={{highlight.imgSrc}} alt={{highlight.altText}} title={{highlight.tooltipText}}>\n      <div>{{highlight.titleText}}</div>\n    </div>\n    <button (click)=\"displayNextHighlight()\">></button>\n  </div>"

/***/ }),

/***/ "./src/app/components/focused-highlights/focused-highlights.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/focused-highlights/focused-highlights.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 250px; }\n\n.primary-highlight {\n  flex: wrap;\n  justify-content: center;\n  margin: 5px; }\n\n.primary-highlight img {\n    width: 200px; }\n\n.primary-highlight div {\n    text-align: center;\n    width: 200px;\n    overflow-wrap: normal; }\n\n.secondary-highlight {\n  width: 50%;\n  min-width: 0px;\n  max-width: 100px;\n  margin: 2.5px; }\n\n.secondary-highlight img {\n    opacity: 0.5; }\n\n.secondary-highlight div {\n    text-align: center;\n    min-width: 0px;\n    max-width: 100px;\n    overflow-wrap: normal; }\n\n@media screen and (min-width: 1201px) {\n    .secondary-highlight {\n      font-size: 0.5em; } }\n\n@media screen and (max-width: 1200px) {\n    .secondary-highlight {\n      font-size: 0px; } }\n\n@media screen and (min-width: 901px) {\n    .secondary-highlight img {\n      width: 100%; } }\n\n@media screen and (max-width: 900px) {\n    .secondary-highlight img {\n      width: 0%; } }\n\nbutton {\n  background-color: #ffffff;\n  border-left: none;\n  border-top: none;\n  border-right: none;\n  border-bottom: 1px solid #222222;\n  color: #222222;\n  padding: 10px 10px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-weight: 200;\n  font-size: 0.9em;\n  text-align: center;\n  margin: 0px 2.5px; }\n\nbutton:hover {\n  background-color: #eeeeee; }\n\nbutton:focus {\n  background-color: #eeeeee;\n  outline: none; }\n"

/***/ }),

/***/ "./src/app/components/focused-highlights/focused-highlights.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/focused-highlights/focused-highlights.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FocusedHighlightsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusedHighlightsComponent", function() { return FocusedHighlightsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_carousel_highlights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/carousel-highlights.service */ "./src/app/services/carousel-highlights.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FocusedHighlightsComponent = /** @class */ (function () {
    function FocusedHighlightsComponent(highlights) {
        this.highlights = highlights;
        this.highlightIndex = 0;
        this.carouselHighlights = [];
    }
    FocusedHighlightsComponent.prototype.ngOnInit = function () {
        this.carouselHighlights = this.highlights.pageImageHighlights[this.carouselName];
        this.highlightIndex = Math.floor(this.carouselHighlights.length / 2) - 1;
        this.displayNextHighlight();
    };
    FocusedHighlightsComponent.prototype.incrementHighlightIndex = function (highlightIndex) {
        var incrementedIndex = highlightIndex + 1;
        if (incrementedIndex > this.carouselHighlights.length - 1) {
            incrementedIndex = 0;
        }
        return incrementedIndex;
    };
    FocusedHighlightsComponent.prototype.decrimentHighlightIndex = function (highlightIndex) {
        var decrimentIndex = highlightIndex - 1;
        if (decrimentIndex < 0) {
            decrimentIndex = this.carouselHighlights.length - 1;
        }
        return decrimentIndex;
    };
    FocusedHighlightsComponent.prototype.displayNextHighlight = function () {
        this.highlightIndex = this.incrementHighlightIndex(this.highlightIndex);
        this.leftHighlights = this.carouselHighlights.slice(0, this.highlightIndex);
        this.rightHighlights = this.carouselHighlights.slice(this.highlightIndex + 1);
        this.selectedHighlight = this.carouselHighlights[this.highlightIndex];
    };
    FocusedHighlightsComponent.prototype.displayPreviousHighlight = function () {
        this.highlightIndex = this.decrimentHighlightIndex(this.highlightIndex);
        this.leftHighlights = this.carouselHighlights.slice(0, this.highlightIndex);
        this.rightHighlights = this.carouselHighlights.slice(this.highlightIndex + 1);
        this.selectedHighlight = this.carouselHighlights[this.highlightIndex];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], FocusedHighlightsComponent.prototype, "carouselName", void 0);
    FocusedHighlightsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-focused-highlights',
            template: __webpack_require__(/*! ./focused-highlights.component.html */ "./src/app/components/focused-highlights/focused-highlights.component.html"),
            styles: [__webpack_require__(/*! ./focused-highlights.component.scss */ "./src/app/components/focused-highlights/focused-highlights.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_carousel_highlights_service__WEBPACK_IMPORTED_MODULE_1__["CarouselHighlightsService"]])
    ], FocusedHighlightsComponent);
    return FocusedHighlightsComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <div class=\"footer-container nine-tengths-container\">\n      <div class=\"full-container copyright\">© 2018 Hapax.xyz | Adam Slack | All Rights Reserved</div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  width: 100%;\n  padding: 10px; }\n\n.footer-container {\n  display: flex; }\n\n.copyright {\n  font-size: 0.75em; }\n\n@media screen and (min-width: 801px) {\n  .copyright {\n    font-size: 0.75em; } }\n\n@media screen and (max-width: 800px) {\n  .copyright {\n    font-size: 0.66em; } }\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
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
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header-bar/header-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/header-bar/header-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header-bar/header-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/header-bar/header-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-bar\">\n    <h1>Hapax.xyz</h1>\n    <h2>Building the one of a kind</h2>\n</div>\n"

/***/ }),

/***/ "./src/app/components/header-bar/header-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/header-bar/header-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: HeaderBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function() { return HeaderBarComponent; });
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

var HeaderBarComponent = /** @class */ (function () {
    function HeaderBarComponent() {
    }
    HeaderBarComponent.prototype.ngOnInit = function () {
    };
    HeaderBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-bar',
            template: __webpack_require__(/*! ./header-bar.component.html */ "./src/app/components/header-bar/header-bar.component.html"),
            styles: [__webpack_require__(/*! ./header-bar.component.css */ "./src/app/components/header-bar/header-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderBarComponent);
    return HeaderBarComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <button class=\"nav-button\" routerLink=\"/home\">Home</button>\n  <button class=\"nav-button\" routerLink=\"/about\">About</button>\n  <button class=\"nav-button\" routerLink=\"/projects\">Projects</button>\n  <button class=\"nav-button\" onclick=\"location.href='https://www.github.com/adamslack'\">GitHub</button>\n</div>"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
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

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"desktop-half-container centred-container mobile-nine-tenths-container\">We are experts in:</div>\n<br>\n<div class=\"mobile-half-container desktop-half-container centred-container\">\n        <app-carousel-highlights [carouselName]=\"'homePage'\" [carouselTitle]=\"'We are experts in:'\"></app-carousel-highlights>\n</div>\n\n<br><br>\n<div class=\"line-break centred-container desktop-two-third-container mobile-nine-tenths-container\"></div>\n<br><br>\n\n<div class=\"mobile-half-container desktop-half-container centred-container\">\n                <app-focused-highlights [carouselName]=\"'homePage'\"></app-focused-highlights>\n</div>\n\n<br><br>\n<div class=\"line-break centred-container desktop-two-third-container mobile-nine-tenths-container\"></div>\n<br><br>\n\n"

/***/ }),

/***/ "./src/app/pages/about-page/about-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/about-page/about-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
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

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/pages/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<div class=\"mobile-nine-tenths-container desktop-third-container centred-container description\">\n        Hapax Legomenon - A word that only occurs once within a body text.\n        We specialise in building the hapax legomena of software. We do this\n        by turning your unique ideas into bespoke solutions.\n</div>\n<br>\n<br>\n<br>\n<div class=\"line-break centred-container desktop-two-third-container mobile-nine-tenths-container\"></div>\n<br>\n<br>\n<br>\n<div class=\"desktop-two-third-container mobile-nine-tenths-container centred-container\">\n        <h1>See if we can help?</h1>\n        <app-ask-us-search></app-ask-us-search>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
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

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Projects Page</div>\n"

/***/ }),

/***/ "./src/app/pages/projects-page/projects-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/projects-page/projects-page.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
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

var ProjectsPageComponent = /** @class */ (function () {
    function ProjectsPageComponent() {
    }
    ProjectsPageComponent.prototype.ngOnInit = function () {
    };
    ProjectsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-page',
            template: __webpack_require__(/*! ./projects-page.component.html */ "./src/app/pages/projects-page/projects-page.component.html"),
            styles: [__webpack_require__(/*! ./projects-page.component.css */ "./src/app/pages/projects-page/projects-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsPageComponent);
    return ProjectsPageComponent;
}());



/***/ }),

/***/ "./src/app/services/ask-us-search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/ask-us-search.service.ts ***!
  \***************************************************/
/*! exports provided: AskUsSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AskUsSearchService", function() { return AskUsSearchService; });
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

var AskUsSearchService = /** @class */ (function () {
    function AskUsSearchService() {
        this.exampleQueries = [
            'What are my options when it comes to ad revenue?',
            'How would i go about building a CRM Chatbot?',
            'What frameworks can i use to build a website?',
            'How can i leverage A.I. accross my business?',
            'How can i better understand the needs of my customers?',
            'How can i run analytics across a natural language dataset',
            'What is Natural Language Processing?',
            'How can i leverage Natural Language Processing across my business?',
            'Is there a more adaptable way of managing projects?',
            'How can i integrate analytics frameworks into my project?',
            'What are my options when it comes to analytics?',
            'Can you help conduct research on Data Privacy?',
            'How can i benefit from Open Source Software',
            'How can my business be Open Source?',
            'How will Open Source help my business?',
            'How can i best store data for my business?',
        ];
    }
    AskUsSearchService.prototype.getRandomQuery = function () {
        return this.exampleQueries[Math.floor(Math.random() * this.exampleQueries.length)];
    };
    AskUsSearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AskUsSearchService);
    return AskUsSearchService;
}());



/***/ }),

/***/ "./src/app/services/carousel-highlights.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/carousel-highlights.service.ts ***!
  \*********************************************************/
/*! exports provided: CarouselHighlightsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselHighlightsService", function() { return CarouselHighlightsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_image_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/image-object */ "./src/app/classes/image-object.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarouselHighlightsService = /** @class */ (function () {
    function CarouselHighlightsService() {
        this.pageImageHighlights = {
            'homePage': [
                new _classes_image_object__WEBPACK_IMPORTED_MODULE_1__["ImageObject"](1, 'Angular 5', 'Experts in Angular 5', 'assets/images/angularicon.svg', 'Angular 5'),
                new _classes_image_object__WEBPACK_IMPORTED_MODULE_1__["ImageObject"](2, 'PostgreSQL', 'Experts in PostgreSQL', 'assets/images/postgresqlicon.png', 'PostgreSQL'),
                new _classes_image_object__WEBPACK_IMPORTED_MODULE_1__["ImageObject"](3, 'Android', 'Experts in Android', 'assets/images/androidicon.png', 'Android'),
                new _classes_image_object__WEBPACK_IMPORTED_MODULE_1__["ImageObject"](4, 'Natural Language Processing', 'Experts in Natural Language Processing', 'assets/images/chatboticon.png', 'Natural Language Processing'),
                new _classes_image_object__WEBPACK_IMPORTED_MODULE_1__["ImageObject"](5, 'Machine Learning', 'Experts in Machine Learning', 'assets/images/machinelearningicon.png', 'Machine Learning')
            ]
        };
    }
    CarouselHighlightsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CarouselHighlightsService);
    return CarouselHighlightsService;
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
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /home/hapax/github/adamslack/hapax.xyz/hapax/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map