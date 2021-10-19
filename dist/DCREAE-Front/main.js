(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rubenssilva\Desktop\_Projeto do Mestrado\public-model-to-text\src\main.ts */"zUnb");


/***/ }),

/***/ "0O/j":
/*!************************************!*\
  !*** ./src/app/api.interceptor.ts ***!
  \************************************/
/*! exports provided: ApiInterceptor, ApiInterceptorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptor", function() { return ApiInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiInterceptorModule", function() { return ApiInterceptorModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ApiInterceptor {
    intercept(req, next) {
        const baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].url_api;
        const apiReq = req.clone({ url: `${baseUrl}${req.url}` });
        return next.handle(apiReq);
    }
}
ApiInterceptor.ɵfac = function ApiInterceptor_Factory(t) { return new (t || ApiInterceptor)(); };
ApiInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ApiInterceptor, factory: ApiInterceptor.ɵfac });
class ApiInterceptorModule {
}
ApiInterceptorModule.ɵfac = function ApiInterceptorModule_Factory(t) { return new (t || ApiInterceptorModule)(); };
ApiInterceptorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ApiInterceptorModule });
ApiInterceptorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
            useClass: ApiInterceptor,
            multi: true
        }] });


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");





class HomeComponent {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
    }
    ngOnInit() { }
    createNew() {
        this.router.navigate(["/demo"]);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 14, vars: 0, consts: [[1, "clr-col-12"], [1, "content-area"], [1, "clr-row", 2, "padding", "7rem 0px", "background-color", "#52a798"], [1, "clr-col-2"], [1, "clr-col-6"], [2, "font-weight", "800", "color", "white"], [2, "color", "white"], [2, "margin-top", "2rem"], [1, "btn", "btn-primary", "float-items-right", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " D-CreEA Card Games - A Tool to Aid The Process of Creating an Educational Card Game ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "This tool was developed in a master's thesis in partnership with the Federal University of Cear\u00E1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_12_listener() { return ctx.createNew(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Run Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */", ".card-block[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #30665d;\r\n  color: white;\r\n  border-color: white;\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #52a798;\r\n  color: white;\r\n  border-color: white;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:active, .btn-link[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:active {\r\n  background-color: #30665d;\r\n  color: white;\r\n  box-shadow: 0 0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.btn-tab-details[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 -0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n  background-color: #30665d;\r\n  padding-right: 3rem;\r\n  padding-left: 1rem;\r\n  margin-left: 0rem;\r\n}\r\n\r\n\r\n\r\n.btn-nav[_ngcontent-%COMP%], .dropdown-toggle[_ngcontent-%COMP%] {\r\n  color: #52a798;\r\n  border: 0px;\r\n  border-radius: 0px;\r\n  min-height: 100% !important;\r\n  padding: 0rem 1rem 0rem 1rem;\r\n  margin: 0px;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.btn-nav[_ngcontent-%COMP%]:hover, .btn-nav[_ngcontent-%COMP%]:active {\r\n  background-color: #52a798; \r\n  color: white;\r\n}\r\n\r\n.dropdown-nav[_ngcontent-%COMP%], .dropdown-trigger-wrapper[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%] {\r\n  animation: opacity 0.8s ease;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  z-index: 999;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 13rem;\r\n  height: 3rem;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-size: contain;\r\n  animation: page-loader 2.5s linear infinite;\r\n  -webkit-animation: page-loader 2.5s linear infinite;\r\n  -moz-animation: page-loader 2.5s linear infinite;\r\n  -ms-animation: page-loader 2.5s linear infinite;\r\n  border-bottom: 4px solid #007db8;\r\n}\r\n\r\n@keyframes page-loader {\r\n  0% {\r\n    margin-left: 0;\r\n    width: 0;\r\n  }\r\n\r\n  11% {\r\n    margin-left: 0;\r\n    width: 3.5rem;\r\n  }\r\n\r\n  60% {\r\n    margin-left: calc(100% - 3.5rem);\r\n    width: 3.5rem;\r\n  }\r\n\r\n  80%,\r\n  100% {\r\n    margin-left: 100%;\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.float-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVOztBQUVWOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1EQUFtRDtFQUNuRCxnREFBZ0Q7RUFDaEQsK0NBQStDO0VBQy9DLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsYUFBYTtFQUNmOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixRQUFRO0VBQ1Y7QUFDRjs7QUF1RUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBS0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsYXJpdHkgKi9cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qQlVUVE9OUyovXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDY2NWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG46YWN0aXZlLFxyXG4uYnRuLWxpbms6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2NjVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMCAjODNhYWEzIGluc2V0O1xyXG59XHJcblxyXG4uYnRuLXRhYi1kZXRhaWxzOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCAtMC4xNXJlbSAwICM4M2FhYTMgaW5zZXQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNjY1ZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMHJlbTtcclxufVxyXG5cclxuLypOQVYtQkFSKi9cclxuXHJcbi5idG4tbmF2LFxyXG4uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzUyYTc5ODtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ0bi1uYXY6aG92ZXIsXHJcbi5idG4tbmF2OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYTc5ODsgLyogR3JlZW4gKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1uYXYsXHJcbi5kcm9wZG93bi10cmlnZ2VyLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBhZ2Utc3Bpbm5lci1jb250YWluZXIge1xyXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLlwiKTsgKi9cclxuICB3aWR0aDogMTNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGFuaW1hdGlvbjogcGFnZS1sb2FkZXIgMi41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhZ2UtbG9hZGVyIDIuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwN2RiODtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0LWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnJvdGF0ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var src_app_shared_models_app_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/app.environment */ "c+EJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function () { return ["/disclaimer"]; };
function HeaderComponent_clr_dropdown_menu_14_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-dropdown-menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_clr_dropdown_menu_14_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.closeHamburger(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Disclaimer");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/home"]; };
const _c2 = function (a0) { return { active: a0 }; };
class HeaderComponent {
    constructor(appEnvironment, appService) {
        this.appEnvironment = appEnvironment;
        this.appService = appService;
        this.activeMenu = -1;
    }
    ngOnInit() { }
    closeHamburger() {
        var headerHamburgerTrigger = document.getElementById('main-container');
        headerHamburgerTrigger.classList.remove('open-hamburger-menu');
        headerHamburgerTrigger.classList.remove('open-overflow-menu');
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_models_app_environment__WEBPACK_IMPORTED_MODULE_1__["AppEnvironment"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_0__["AppService"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 15, vars: 6, consts: [[1, "branding"], ["href", "#", 1, "nav-link", 3, "routerLink", "click"], [2, "background-color", "#30665d", "text-align", "center", "height", "100%"], ["src", "../../../assets/images/smp-logo.svg", "height", "95%", "width", "auto", "alt", "Imagem cards", 1, "img-fluid", 2, "margin-left", "7px"], [1, "header-logo-separator"], [1, "title"], [1, "header-nav", 3, "clr-nav-level"], [1, "dropdown-nav"], [1, "dropdown-trigger-wrapper", 3, "ngClass"], ["type", "button", "clrDropdownTrigger", "", 1, "btn", "btn-nav", 3, "click"], ["shape", "caret down"], [4, "clrIfOpen"], ["href", "#", "clrDropdownItem", "", 3, "routerLink", "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "clr-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_2_listener() { return ctx.closeHamburger(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "D-CreEA Card Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "clr-dropdown", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.activeMenu = 2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "clr-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, HeaderComponent_clr_dropdown_menu_14_Template, 3, 2, "clr-dropdown-menu", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("clr-nav-level", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](4, _c2, ctx.activeMenu === 2));
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrHeader"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["NavDetectionOompaLoompa"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrNavLevel"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdown"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownTrigger"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIconCustomTag"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrIfOpen"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownMenu"], _clr_angular__WEBPACK_IMPORTED_MODULE_3__["ClrDropdownItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */", ".card-block[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #30665d;\r\n  color: white;\r\n  border-color: white;\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #52a798;\r\n  color: white;\r\n  border-color: white;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:active, .btn-link[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:active {\r\n  background-color: #30665d;\r\n  color: white;\r\n  box-shadow: 0 0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.btn-tab-details[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 -0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n  background-color: #30665d;\r\n  padding-right: 3rem;\r\n  padding-left: 1rem;\r\n  margin-left: 0rem;\r\n}\r\n\r\n\r\n\r\n.btn-nav[_ngcontent-%COMP%], .dropdown-toggle[_ngcontent-%COMP%] {\r\n  color: #52a798;\r\n  border: 0px;\r\n  border-radius: 0px;\r\n  min-height: 100% !important;\r\n  padding: 0rem 1rem 0rem 1rem;\r\n  margin: 0px;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.btn-nav[_ngcontent-%COMP%]:hover, .btn-nav[_ngcontent-%COMP%]:active {\r\n  background-color: #52a798; \r\n  color: white;\r\n}\r\n\r\n.dropdown-nav[_ngcontent-%COMP%], .dropdown-trigger-wrapper[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%] {\r\n  animation: opacity 0.8s ease;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  z-index: 999;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 13rem;\r\n  height: 3rem;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-size: contain;\r\n  animation: page-loader 2.5s linear infinite;\r\n  -webkit-animation: page-loader 2.5s linear infinite;\r\n  -moz-animation: page-loader 2.5s linear infinite;\r\n  -ms-animation: page-loader 2.5s linear infinite;\r\n  border-bottom: 4px solid #007db8;\r\n}\r\n\r\n@keyframes page-loader {\r\n  0% {\r\n    margin-left: 0;\r\n    width: 0;\r\n  }\r\n\r\n  11% {\r\n    margin-left: 0;\r\n    width: 3.5rem;\r\n  }\r\n\r\n  60% {\r\n    margin-left: calc(100% - 3.5rem);\r\n    width: 3.5rem;\r\n  }\r\n\r\n  80%,\r\n  100% {\r\n    margin-left: 100%;\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.float-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVOztBQUVWOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1EQUFtRDtFQUNuRCxnREFBZ0Q7RUFDaEQsK0NBQStDO0VBQy9DLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsYUFBYTtFQUNmOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixRQUFRO0VBQ1Y7QUFDRjs7QUF1RUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBS0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsYXJpdHkgKi9cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qQlVUVE9OUyovXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDY2NWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG46YWN0aXZlLFxyXG4uYnRuLWxpbms6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2NjVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMCAjODNhYWEzIGluc2V0O1xyXG59XHJcblxyXG4uYnRuLXRhYi1kZXRhaWxzOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCAtMC4xNXJlbSAwICM4M2FhYTMgaW5zZXQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNjY1ZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMHJlbTtcclxufVxyXG5cclxuLypOQVYtQkFSKi9cclxuXHJcbi5idG4tbmF2LFxyXG4uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzUyYTc5ODtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ0bi1uYXY6aG92ZXIsXHJcbi5idG4tbmF2OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYTc5ODsgLyogR3JlZW4gKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1uYXYsXHJcbi5kcm9wZG93bi10cmlnZ2VyLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBhZ2Utc3Bpbm5lci1jb250YWluZXIge1xyXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLlwiKTsgKi9cclxuICB3aWR0aDogMTNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGFuaW1hdGlvbjogcGFnZS1sb2FkZXIgMi41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhZ2UtbG9hZGVyIDIuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwN2RiODtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0LWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnJvdGF0ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "7pS+":
/*!********************************************!*\
  !*** ./src/app/pages/summary/cardModel.ts ***!
  \********************************************/
/*! exports provided: gameCards, challengeCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameCards", function() { return gameCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "challengeCards", function() { return challengeCards; });
const gameCards = [
    {
        _id: "c1",
        deck: null,
        repetitions: 1,
        cardFront: {
            title: "Functional Test",
            art: "",
            description: "Functional testing is a type of testing that bases its test cases on the specifications of the software component ",
            effect: "",
            cost: 99,
            level: 99,
            earning: 99,
        },
        cardBack: {
            title: "Card Title 1",
            answers: "Card answers 1",
            effect: "Card effect 1",
            cost: 99,
            level: 99,
            earning: 99,
        },
    },
];
const challengeCards = [
    {
        _id: "c2",
        repetitions: 1,
        deck: null,
        cardFront: {
            title: "Case 1",
            art: "",
            description: "A user tries to search for a friend on the system but the result is don't correspond",
            effect: "",
            cost: 99,
            level: 99,
            earning: 99,
        },
        cardBack: {
            title: "Card Answers",
            answers: "Functional Test - 1 to 3",
            effect: "",
            cost: 99,
            level: 99,
            earning: 99,
        },
    },
];


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    url_api: 'https://localhost:44320/api',
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

/***/ "CA9I":
/*!*********************************************!*\
  !*** ./src/app/pages/summary/model2text.ts ***!
  \*********************************************/
/*! exports provided: ModelToText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelToText", function() { return ModelToText; });
// import { Condition, Effect, Game, State, StatementRule } from "../shared/models/api";
class ModelToText {
    constructor() {
        this.stack = [];
        this.pipe = [];
        /**
         *
         * @param effect
         * @returns
         */
        this.writeEffect = (effect) => {
            if (!effect)
                return "[error] effect is empty";
            var st = effect.simpleEffect;
            if (effect.statusChange) {
                st += `. In other words, apply '${effect.statusChange}' to `;
                st += effect.toSelf != null && effect.toSelf == true ? "self player;" : `players ${effect.toSpecific};`;
                st += ` This effect lasts for ${effect.forever != null && effect.forever == true ? "the rest of this game" : effect.turns + " turns."}`;
            }
            return st;
        };
    }
    start(game) {
        this.game = game;
        console.log("game at model 2 text", this.game);
        var errors = this.invalid();
        if (errors.length > 0)
            return errors;
        var lines = [];
        this.addToPipe(this.game.states[0].label);
        do {
            // getting the next state
            const stateName = this.pipe[0];
            const state = this.game.states.find((s) => s.label === stateName);
            // removing from pipe
            this.pipe.shift();
            const result = this.presentState(state);
            // updating the lines
            lines = lines.concat(result);
            // removing the first
        } while (this.pipe.length > 0);
        return lines;
    }
    /**
     *
     * @param state
     * @returns
     */
    presentState(state) {
        this.stack.push(state.label); // se chegou aqui, então não está na pilha
        var lines = [`* '${state.label}': ${state.purpose}.`];
        if (state.label === "Game Over")
            return lines;
        // statement rules
        if (state.statementRules && state.statementRules.length > 0) {
            lines = lines.concat(this.writeStatementRules(state));
        }
        // effect rules
        // if (state.effectRule) {
        //   lines = lines.concat(this.writeEffectRules(state));
        // }
        // conditional rules
        if (state.conditionalRule) {
            lines = lines.concat(this.writeConditionalRule(state));
        }
        else {
            // transition
            lines = lines.concat(this.writeTransition(state));
        }
        return lines;
    }
    /**
     *
     * @param state
     * @returns
     */
    writeTransition(state) {
        var lines = [];
        if (!this.stack.includes(state.transition)) {
            this.addToPipe(state.transition);
            lines.push(` Go ahead to '${state.transition}'.`);
        }
        else {
            lines.push(` And follows as '${state.transition}'.`);
        }
        return lines;
    }
    //////////////////////////////////
    /**
     *
     * @param state
     * @returns
     */
    writeStatementRules(state) {
        var lines = [];
        const writeStatement = (rule) => {
            if (!rule)
                return `[error] statement rule from state ${state.label} is empty`;
            var st = rule.me ? "me, as " + rule.me.toString() + "; " : "";
            var st = rule.to ? "in order to " + rule.to.toString() + "; " : "";
            st += rule.given ? "given that " + rule.given.toString() + "; " : "";
            st += rule.statusChange ? "" + rule.statusChange.toString() + "; " : "";
            st +=  true ? "self player " : undefined;
            st +=  true ? " the rest of the game " : undefined;
            return st;
        };
        state.statementRules.forEach((rule) => {
            lines.push(" - " + rule.simplerDescription);
            if (rule.statusChange) {
                lines.push("   * a more detailed description: " + writeStatement(rule));
            }
        });
        return lines;
    }
    // writeEffectRules(state: State): string[] {
    //   var lines = [];
    //   state.effectRule.effects.forEach((effect) => {
    //     lines.push(this.writeEffect(effect));
    //   });
    //   return lines;
    // }
    /**
     *
     * @param condition
     * @returns
     */
    writeCondition(condition) {
        return ` - If ${condition.test}, Then ${this.writeEffect(condition.effectIfTrue)}. With this, go to '${condition.stateIfTrue}'`;
    }
    /**
     *
     * @param state
     * @returns
     */
    writeConditionalRule(state) {
        var lines = [];
        var states = [];
        state.conditionalRule.conditions.forEach((condition) => {
            // - add it as priority on pipe on order
            states.unshift(condition.stateIfTrue);
            // present condition
            lines.push(this.writeCondition(condition));
        });
        // present failure
        lines.push(this.writeCondition(state.conditionalRule.failureCondition));
        // add as priority failure on pipe
        this.addAsPriority(state.conditionalRule.failureCondition.stateIfTrue);
        states.forEach((st) => {
            this.addAsPriority(st);
        });
        return lines;
    }
    ////////////////////////
    addAsPriority(stateName) {
        if (this.stack.includes(stateName))
            return;
        this.pipe.unshift(stateName);
    }
    addToPipe(stateName) {
        if (this.stack.includes(stateName))
            return;
        this.pipe.push(stateName);
    }
    findState(label) {
        for (var i = 0; i < this.game.states.length; i++) {
            if (this.game.states[i].label == label) {
                return this.game.states[i];
            }
        }
        return null;
    }
    invalid() {
        var errors = [];
        if (!this.game)
            errors.push("[error] Game is Null");
        if (this.game && this.game.states.length <= 0)
            errors.push("[error] This game has no states");
        if (this.game && !this.findState("Game Start"))
            errors.push("[error] Game Start does not exist and is required");
        if (this.game && !this.findState("Game Over"))
            errors.push("[error] Game Over does not exist and is required");
        return errors;
    }
}


/***/ }),

/***/ "Dmx0":
/*!****************************************************!*\
  !*** ./src/app/pages/summary/summary.component.ts ***!
  \****************************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _model2text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model2text */ "CA9I");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "ZgTr");
/* harmony import */ var jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf-html2canvas */ "01OO");
/* harmony import */ var jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");










const _c0 = ["printable"];
const _c1 = ["cardsToPrint"];
function SummaryComponent_div_7_ul_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("", d_r7.name, ": ", d_r7.description, ". This deck has ", d_r7.cards.length, " cards");
} }
function SummaryComponent_div_7_div_71_li_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": the title of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_li_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Art");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (optional): the art of the card. This aims to ilustrate the card's content ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": the description aims to define the card's content/meaning ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_li_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (optional): the effect of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_li_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (diamond-shape / optional): the cost to use this card. This type of point aims to balance the gain x price of a card, i.e., the highest the goods, highest the price to use. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_li_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (circle - optional): the level required to use this card. This type of point is attached to the player level on gameplay. The idea is to evolve the level as the player is playing. This is used to allow players to evolve on gameplay, i.e., highest the level, hardest the challenge s/he can/is allowed to beat. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_li_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Earning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (triangle - optional): the earning of the card when is used. It's recomended to be used on challenge or effect cards. The idea is the highest the earning, highest is the reward of the challenge. It's optional for games where all rewards are equal. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": the title of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, ": the answers of a given challenge. This is recomended to challenge cards, but can be used as any type of pr\u00E9-message (since the player will see this side first) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Effect");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (optional): the effect of the card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (diamond-shape / optional): the cost is the same as the front. However, this is seed by the player only s/he turns the card, so it's ideal to surprise cost. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Level");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (circle - optional): the level is the same as the front. However, this is seed by the player only s/he turns the card, so it's ideal to surprise level. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Earning");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " (triangle - optional): the earning is the same as the front. However, this is seed by the player only s/he turns the card, so it's ideal to surprise reward. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SummaryComponent_div_7_div_71_ul_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SummaryComponent_div_7_div_71_ul_26_li_1_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SummaryComponent_div_7_div_71_ul_26_li_2_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SummaryComponent_div_7_div_71_ul_26_li_3_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, SummaryComponent_div_7_div_71_ul_26_li_4_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, SummaryComponent_div_7_div_71_ul_26_li_5_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, SummaryComponent_div_7_div_71_ul_26_li_6_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.effect);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.earning);
} }
function SummaryComponent_div_7_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Front of each card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " of this deck, we have: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, SummaryComponent_div_7_div_71_li_14_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, SummaryComponent_div_7_div_71_li_15_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, SummaryComponent_div_7_div_71_li_16_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SummaryComponent_div_7_div_71_li_17_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, SummaryComponent_div_7_div_71_li_18_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, SummaryComponent_div_7_div_71_li_19_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, SummaryComponent_div_7_div_71_li_20_Template, 4, 0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " On ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Back of each card");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, SummaryComponent_div_7_div_71_ul_26_Template, 7, 6, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "app-card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Deck ", i_r10 + 1, " - ", d_r9.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.art);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.effect);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckFront.earning);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" of this deck, we have ", d_r9.deckBack.title || d_r9.deckBack.answers || d_r9.deckBack.effect || d_r9.deckBack.cost || d_r9.deckBack.level || d_r9.deckBack.earning ? ":" : "nothing enabled, just the logo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", d_r9.deckBack.title || d_r9.deckBack.answers || d_r9.deckBack.effect || d_r9.deckBack.cost || d_r9.deckBack.level || d_r9.deckBack.earning);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("deck", d_r9)("card", ctx_r3.cardDefault)("back", d_r9.deckBack.title || d_r9.deckBack.answers || d_r9.deckBack.effect || d_r9.deckBack.cost || d_r9.deckBack.level || d_r9.deckBack.earning);
} }
const _c2 = function (a0, a1, a2) { return { border: a0, "background-color": a1, "font-weight": a2 }; };
const _c3 = function (a0) { return { "font-weight": a0, "font-size": "large" }; };
function SummaryComponent_div_7_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction3"](3, _c2, r_r26.includes("* ") ? "2px solid #dedede" : "0px", r_r26.includes("* ") ? "#52a79850" : "#dedede50", r_r26.includes("* ") ? "800" : "regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c3, r_r26.includes("* ") ? "800" : "regular"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", r_r26, " ");
} }
function SummaryComponent_div_7_div_85_div_1_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-card", 33);
} if (rf & 2) {
    const j_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    const d_r27 = ctx_r34.$implicit;
    const i_r28 = ctx_r34.index;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("deck", d_r27)("card", ctx_r32.game.decks[i_r28].cards[j_r31])("back", d_r27.deckBack.title || d_r27.deckBack.answers || d_r27.deckBack.effect || d_r27.deckBack.cost || d_r27.deckBack.level || d_r27.deckBack.earning);
} }
function SummaryComponent_div_7_div_85_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SummaryComponent_div_7_div_85_div_1_app_card_1_Template, 1, 3, "app-card", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const j_r31 = ctx.index;
    const i_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r29.range(ctx_r29.game.decks[i_r28].cards[j_r31].repetitions));
} }
function SummaryComponent_div_7_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SummaryComponent_div_7_div_85_div_1_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r28 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r6.game.decks[i_r28].cards);
} }
const _c4 = function (a0) { return { "min-height.px": a0 }; };
function SummaryComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Game Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Game Material");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Decks");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, SummaryComponent_div_7_ul_52_Template, 3, 3, "ul", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Game Basics");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "This is a turn-based educational card game");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "In its turn, the player must solve challenges to get victory points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Wins the game the player who has more victory points");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](69, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](71, SummaryComponent_div_7_div_71_Template, 30, 14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Game Rules");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](80, SummaryComponent_div_7_div_80_Template, 4, 9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, SummaryComponent_div_7_div_85_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c4, 2.2 * ctx_r0.width * 210 / 297 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.game.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.game.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.game.authors);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c4, ctx_r0.width * 210 / 297 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.game.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx_r0.game.description, ". ", ctx_r0.game.simplyGameplay, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("target audience: ", ctx_r0.game.audience, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("knowledgeField: ", ctx_r0.game.knowledgeField, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("requirements: ", ctx_r0.game.requirements, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("authors: ", ctx_r0.game.authors, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("NumberPlayers: from ", ctx_r0.game.minNumberPlayers, " up to ", ctx_r0.game.maxNumberPlayers, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.game.decks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("We have ", ctx_r0.game.decks.length, " decks, and each one has a purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c4, ctx_r0.width * 210 / 297 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.game.decks);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c4, ctx_r0.width * 210 / 297 + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ruleLines);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.game.decks);
} }
class SummaryComponent {
    constructor(appService) {
        this.appService = appService;
        this.game = _model__WEBPACK_IMPORTED_MODULE_4__["gameModel"];
        this.ruleLines = [];
        this.isBack = false;
        this.modelErrors = [];
        this.width = window.innerWidth;
        this.cardWidth = 250;
        this.marginBetwCards = 15;
        this.marginLeft = 0;
    }
    ngOnInit() {
        const model2text = new _model2text__WEBPACK_IMPORTED_MODULE_3__["ModelToText"]();
        this.ruleLines = model2text.start(this.game);
        this.ruleLines.forEach((line) => {
            if (line.includes("[error]")) {
                this.modelErrors.push(line);
            }
        });
        if (this.modelErrors.length > 0) {
            this.appService.setAppAlerts(this.modelErrors.map((error) => ({ message: error, type: "danger" })));
        }
        this.cardDefault = {
            _id: null,
            deck: null,
            repetitions: 1,
            cardFront: {
                title: "Card Title",
                art: "Card art",
                description: "Card description",
                effect: "Card effect",
                cost: 99,
                level: 99,
                earning: 99,
            },
            cardBack: {
                title: "Card Title",
                answers: "Card answers",
                effect: "Card effect",
                cost: 99,
                level: 99,
                earning: 99,
            },
        };
    }
    downloadPDF() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.page || !this.cards) {
                this.appService.setAppAlerts([{ message: "Error while checking the print page, please try again", type: "danger" }]);
                return;
            }
            this.appService.setGlobalLoading(true);
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, "0");
            var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
            var yyyy = today.getFullYear();
            const todaystr = dd + "-" + mm + "-" + yyyy;
            try {
                yield jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(this.page.nativeElement, {
                    jsPDF: {
                        format: "a4",
                    },
                    output: `[${todaystr}] Game Manual - ${this.game.name}.pdf`,
                });
                this.appService.setAppAlerts([{ message: "Game Manual created", type: "success" }]);
                yield jspdf_html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(this.cards.nativeElement, {
                    jsPDF: {
                        format: "a4",
                    },
                    imageType: "image/jpeg",
                    output: `[${todaystr}] Cards - ${this.game.name}.pdf`,
                });
                this.appService.setAppAlerts([{ message: "Cards PDF created", type: "success" }]);
            }
            catch (error) {
                console.log("errror while pdf", error);
                this.appService.setAppAlerts([{ message: "Error while creating PDF. Please try again", type: "danger" }]);
            }
            finally {
                this.appService.setGlobalLoading(false);
            }
        });
    }
    range(m) {
        var res = [];
        for (let i = 0; i < m; i++) {
            res.push(i);
        }
        return res;
    }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"])); };
SummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], viewQuery: function SummaryComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.page = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cards = _t.first);
    } }, decls: 8, vars: 2, consts: [[1, "clr-col-12"], [1, "content-area"], [1, "clr-row"], [1, "clr-col-10"], [1, "clr-col-2"], [1, "btn", "btn-primary", "float-items-right", 3, "disabled", "click"], [4, "ngIf"], ["id", "printable"], ["printable", ""], [2, "min-height", "1.5rem"], [1, "page-manual", 3, "ngStyle"], [1, "clr-row", 2, "text-align", "center"], [1, "clr-col-12", 2, "margin-top", "6cm"], [2, "font-size", "60px"], [2, "font-weight", "800", "font-size", "larger"], [1, "clr-col-12", 2, "margin-top", "3rem"], [1, "html2pdf__page-break"], [1, "clr-col-6"], [1, "card", "card-border"], [1, "card-header"], [1, "card-block", 2, "font-size", "large", "min-height", "320px"], [1, "card-block", 2, "min-height", "320px"], [2, "font-size", "large"], [2, "font-size", "x-large"], [4, "ngFor", "ngForOf"], ["class", "clr-row", 4, "ngFor", "ngForOf"], ["id", "cardsToPrint"], ["cardsToPrint", ""], ["style", "font-size: large", 4, "ngIf"], ["cardWidth", "200", "marginBetwCards", "15", "showImageForm", "false", 3, "deck", "card", "back"], [1, "card-block", 3, "ngStyle"], [2, "margin", "3px 0px", 3, "ngStyle"], ["class", "clr-col-4", "style", "margin-bottom: 0.4rem; margin-top: 0.48rem", "cardWidth", "232", "marginBetwCards", "2", "showImageForm", "false", 3, "deck", "card", "back", 4, "ngFor", "ngForOf"], ["cardWidth", "232", "marginBetwCards", "2", "showImageForm", "false", 1, "clr-col-4", 2, "margin-bottom", "0.4rem", "margin-top", "0.48rem", 3, "deck", "card", "back"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SummaryComponent_Template_button_click_5_listener() { return ctx.downloadPDF(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Print Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, SummaryComponent_div_7_Template, 86, 29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.modelErrors.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.modelErrors.length == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"]], styles: [".page-manual[_ngcontent-%COMP%] {\r\n  padding: 1rem;\r\n  margin-top: 5rem;\r\n  margin-bottom: 1rem;\r\n  border-radius: 0.7rem;\r\n  margin-left: 2rem;\r\n  margin-right: 2rem;\r\n  min-height: 1934px;\r\n  border: 5px double #52a798;\r\n  background-color: white;\r\n}\r\n\r\n.card-border[_ngcontent-%COMP%] {\r\n  border-bottom: 2px solid #52a798;\r\n  border-right: 2px solid #52a798;\r\n  border-radius: 0.4rem;\r\n  box-shadow: 2px 5px 11px #888888;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-size: 0.3rem;\r\n  line-height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQSxtREFBbUQ7O0FBQ25ELG1EQUFtRDs7QUFDbkQsbURBQW1EOztBQUNuRCxtREFBbUQ7O0FBRW5EOztDQUVDIiwiZmlsZSI6InN1bW1hcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLW1hbnVhbCB7XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC43cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcclxuICBtaW4taGVpZ2h0OiAxOTM0cHg7XHJcbiAgYm9yZGVyOiA1cHggZG91YmxlICM1MmE3OTg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWJvcmRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1MmE3OTg7XHJcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzUyYTc5ODtcclxuICBib3JkZXItcmFkaXVzOiAwLjRyZW07XHJcbiAgYm94LXNoYWRvdzogMnB4IDVweCAxMXB4ICM4ODg4ODg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMC4zcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcbi8qIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gKi9cclxuLyogLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLyAqL1xyXG4vKiAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vICovXHJcblxyXG4vKlxyXG5jYXJkIHBva2VyIHNpemU6IDYuOTg1IHggMTIuMDY1IGNtID0gMS43MiByYXRpbyBcclxuKi9cclxuIl19 */", ".card-block[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #30665d;\r\n  color: white;\r\n  border-color: white;\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #52a798;\r\n  color: white;\r\n  border-color: white;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:active, .btn-link[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:active {\r\n  background-color: #30665d;\r\n  color: white;\r\n  box-shadow: 0 0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.btn-tab-details[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 -0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n  background-color: #30665d;\r\n  padding-right: 3rem;\r\n  padding-left: 1rem;\r\n  margin-left: 0rem;\r\n}\r\n\r\n\r\n\r\n.btn-nav[_ngcontent-%COMP%], .dropdown-toggle[_ngcontent-%COMP%] {\r\n  color: #52a798;\r\n  border: 0px;\r\n  border-radius: 0px;\r\n  min-height: 100% !important;\r\n  padding: 0rem 1rem 0rem 1rem;\r\n  margin: 0px;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.btn-nav[_ngcontent-%COMP%]:hover, .btn-nav[_ngcontent-%COMP%]:active {\r\n  background-color: #52a798; \r\n  color: white;\r\n}\r\n\r\n.dropdown-nav[_ngcontent-%COMP%], .dropdown-trigger-wrapper[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%] {\r\n  animation: opacity 0.8s ease;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  z-index: 999;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 13rem;\r\n  height: 3rem;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-size: contain;\r\n  animation: page-loader 2.5s linear infinite;\r\n  -webkit-animation: page-loader 2.5s linear infinite;\r\n  -moz-animation: page-loader 2.5s linear infinite;\r\n  -ms-animation: page-loader 2.5s linear infinite;\r\n  border-bottom: 4px solid #007db8;\r\n}\r\n\r\n@keyframes page-loader {\r\n  0% {\r\n    margin-left: 0;\r\n    width: 0;\r\n  }\r\n\r\n  11% {\r\n    margin-left: 0;\r\n    width: 3.5rem;\r\n  }\r\n\r\n  60% {\r\n    margin-left: calc(100% - 3.5rem);\r\n    width: 3.5rem;\r\n  }\r\n\r\n  80%,\r\n  100% {\r\n    margin-left: 100%;\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.float-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVOztBQUVWOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1EQUFtRDtFQUNuRCxnREFBZ0Q7RUFDaEQsK0NBQStDO0VBQy9DLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsYUFBYTtFQUNmOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixRQUFRO0VBQ1Y7QUFDRjs7QUF1RUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBS0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsYXJpdHkgKi9cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qQlVUVE9OUyovXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDY2NWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG46YWN0aXZlLFxyXG4uYnRuLWxpbms6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2NjVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMCAjODNhYWEzIGluc2V0O1xyXG59XHJcblxyXG4uYnRuLXRhYi1kZXRhaWxzOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCAtMC4xNXJlbSAwICM4M2FhYTMgaW5zZXQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNjY1ZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMHJlbTtcclxufVxyXG5cclxuLypOQVYtQkFSKi9cclxuXHJcbi5idG4tbmF2LFxyXG4uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzUyYTc5ODtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ0bi1uYXY6aG92ZXIsXHJcbi5idG4tbmF2OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYTc5ODsgLyogR3JlZW4gKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1uYXYsXHJcbi5kcm9wZG93bi10cmlnZ2VyLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBhZ2Utc3Bpbm5lci1jb250YWluZXIge1xyXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLlwiKTsgKi9cclxuICB3aWR0aDogMTNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGFuaW1hdGlvbjogcGFnZS1sb2FkZXIgMi41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhZ2UtbG9hZGVyIDIuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwN2RiODtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0LWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnJvdGF0ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbiJdfQ== */", "img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.vertical-center-input[_ngcontent-%COMP%] {\r\n  margin: auto auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.horizontal-center-input[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  display: table;\r\n}\r\n\r\n.color-picker[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  border: 1px solid #dedede;\r\n  border-radius: 3rem;\r\n  margin-left: 1rem;\r\n  margin-right: 0px;\r\n}\r\n\r\n.input-no-space[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 100%;\r\n  margin-right: 0px;\r\n  margin-left: 0px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  min-width: 1px;\r\n}\r\n\r\n.btn-deck[_ngcontent-%COMP%] {\r\n  border: 2px solid #cacaca;\r\n  border-radius: 0.2rem;\r\n  height: 4.5rem;\r\n  width: 1rem;\r\n}\r\n\r\n.btn-deck-wrapper[_ngcontent-%COMP%] {\r\n  border-color: #cacaca;\r\n  border-style: solid;\r\n  border-width: 0px;\r\n  width: 80%;\r\n  height: 100%;\r\n  padding-top: 0.1rem;\r\n  text-align: center;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.btn-deck-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #dedede80;\r\n}\r\n\r\n.card-point-label[_ngcontent-%COMP%] {\r\n  margin-left: 0.4rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzQW5kRGVja3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjYXJkc0FuZERlY2tzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXItaW5wdXQge1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvcml6b250YWwtY2VudGVyLWlucHV0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNvbG9yLXBpY2tlciB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1zcGFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtaW4td2lkdGg6IDFweDtcclxufVxyXG5cclxuLmJ0bi1kZWNrIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2FjYWNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDQuNXJlbTtcclxuICB3aWR0aDogMXJlbTtcclxufVxyXG5cclxuLmJ0bi1kZWNrLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NhY2FjYTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAwLjFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxufVxyXG5cclxuLmJ0bi1kZWNrLXdyYXBwZXIgOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlODA7XHJcbn1cclxuLmNhcmQtcG9pbnQtbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XHJcbn1cclxuIl19 */", ".card-wrapper[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  border-radius: 0.5rem;\r\n  background-color: #dedede;\r\n  border: 1px solid white;\r\n  color: white;\r\n}\r\n\r\n.card-margins[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.card-game-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #942929;\r\n  background-color: rgb(249, 249, 249, 0.7);\r\n  color: black;\r\n  border-radius: 0.5rem 0.5rem 0 0;\r\n  margin-bottom: 1%;\r\n  border: 1px solid white;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-game-header-back[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #942929;\r\n  background-color: rgb(249, 249, 249, 0.2);\r\n  color: white;\r\n  border-radius: 0.5rem 0.5rem 0 0;\r\n  margin-bottom: 1%;\r\n  border: 1px solid rgb(249, 249, 249, 0.4);\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-game-body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 78%;\r\n  min-height: 78%;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.card-art[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 50%;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n}\r\n\r\n.card-answers[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 75%;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  color: white;\r\n}\r\n\r\n.card-description[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 25%;\r\n  max-height: 50%;\r\n  \r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  color: white;\r\n}\r\n\r\n.card-effect[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 25%;\r\n  border-top: 1px solid rgb(214, 214, 214);\r\n  \r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  color: white;\r\n}\r\n\r\n.card-game-footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #dedede;\r\n  background-color: rgb(249, 249, 249, 0.7);\r\n  color: black;\r\n  margin-bottom: 1%;\r\n  border: 1px solid white;\r\n  border-radius: 0 0 0.5rem 0.5rem;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-game-footer-back[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #dedede;\r\n  background-color: rgb(249, 249, 249, 0.2);\r\n  color: white;\r\n  margin-bottom: 1%;\r\n  border: 1px solid rgb(249, 249, 249, 0.4);\r\n  border-radius: 0 0 0.5rem 0.5rem;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.card-img[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n.red-card[_ngcontent-%COMP%] {\r\n  background-color: #663030;\r\n}\r\n\r\n.green-card[_ngcontent-%COMP%] {\r\n  background-color: #30665d;\r\n}\r\n\r\n\r\n\r\n.card-input-title[_ngcontent-%COMP%] {\r\n  border: 0px;\r\n  background-color: #dedede;\r\n  align-self: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  border-radius: 1px;\r\n}\r\n\r\n.card-input-footer[_ngcontent-%COMP%] {\r\n  border: 0px;\r\n  background-color: #dedede;\r\n  align-self: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: small;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.card-body-text[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: small;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 0.4rem;\r\n}\r\n\r\n.card-answer-text[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: small;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 0.2rem 0rem 0.2rem 0.2rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  width: 100%;\r\n  overflow: hidden; \r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.centering[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdDQUFnQztFQUNoQyx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMENBQTBDO0VBQzFDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdDQUFnQztFQUNoQyx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUUsc0RBQXNEO0VBQ3hFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNhcmQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuY2FyZCBwb2tlciBzaXplOiA2Ljk4NSB4IDEyLjA2NSBjbSA9IDEuNzIgcmF0aW8gXHJcbiovXHJcblxyXG4uY2FyZC13cmFwcGVyIHtcclxuICAvKiBoZWlnaHQ6IDEyLjA2NWNtOyAqL1xyXG4gIC8qIHdpZHRoOiA2Ljk4NWNtOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtbWFyZ2lucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtZ2FtZS1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTQyOTI5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5LCAwLjcpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAvKiAvLy8vICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1nYW1lLWhlYWRlci1iYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk0MjkyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ5LCAyNDksIDAuNCk7XHJcbiAgLyogLy8vLyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZC1nYW1lLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzglO1xyXG4gIG1pbi1oZWlnaHQ6IDc4JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjIyLCAyMjIsIDAuMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5jYXJkLWFydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtYW5zd2VycyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyNSU7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIC8qIGNlbnRlcmluZyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWVmZmVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAvKiBjZW50ZXJpbmcgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjIyLCAyMjIsIDAuMik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkLWdhbWUtZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSwgMC43KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuNXJlbSAwLjVyZW07XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1nYW1lLWZvb3Rlci1iYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ5LCAyNDksIDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuNXJlbSAwLjVyZW07XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBpbWFnZXMgKi9cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBjb2xvcnMgKi9cclxuXHJcbi5yZWQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2MzAzMDtcclxufVxyXG5cclxuLmdyZWVuLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDY2NWQ7XHJcbn1cclxuXHJcbi8qIGlucHV0cyAqL1xyXG5cclxuLmNhcmQtaW5wdXQtdGl0bGUge1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuXHJcbi5jYXJkLWlucHV0LWZvb3RlciB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxufVxyXG5cclxuLmNhcmQtYW5zd2VyLXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAuMnJlbSAwcmVtIDAuMnJlbSAwLjJyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogXCJvdmVyZmxvd1wiIHZhbHVlIG11c3QgYmUgZGlmZmVyZW50IGZyb20gXCJ2aXNpYmxlXCIgKi9cclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmNlbnRlcmluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _cds_core_icon_register_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cds/core/icon/register.js */ "dwia");
/* harmony import */ var _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cds/core/icon */ "aXSi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @clr/angular */ "8MG2");




const logo = __webpack_require__(/*! !raw-loader!../../../assets/images/logo.svg */ "s9tN");
class FooterComponent {
    constructor() { }
    ngOnInit() {
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["userIcon"]);
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["envelopeIcon"]);
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["terminalIcon"]);
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["cameraIcon"]);
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["certificateIcon"]);
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(_cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["employeeIcon"]);
        _cds_core_icon__WEBPACK_IMPORTED_MODULE_1__["ClarityIcons"].addIcons(["dcreea", logo["default"]]);
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 38, vars: 0, consts: [[1, "clr-col-12", 2, "width", "100%"], [1, "content-area"], [1, "clr-row", 2, "padding", "1rem", "min-height", "8rem", "background-color", "#52a798"], [1, "clr-col-2", 2, "border-right", "1px solid #dedede"], [1, "clr-col-8", 2, "border-right", "1px solid #dedede"], [1, "clr-row"], [1, "clr-col"], [1, "clr-col-1"], [2, "text-align", "center", "width", "2rem", "margin-left", "1rem", "float", "left"], ["src", "../../../assets/images/smp-logo.svg", "width", "100%", "alt", "Imagem cards", 1, "img-fluid"], [1, "h2-footer", 2, "height", "100%", "margin-top", "0.5rem"], [1, "ph-footer", 2, "margin-left", "1.5rem"], ["shape", "envelope"], [1, "clr-col-2"], [2, "margin-left", "0.5rem", "color", "whi"], ["href", "https://github.com/rubensandersonn", "target", "_blank", 2, "color", "white"], ["inverse", "", "solid", "", "shape", "terminal"], ["href", "http://lattes.cnpq.br/7001638766945242", "target", "_blank", 2, "color", "white"], ["inverse", "", "solid", "", "shape", "certificate"], ["href", "https://www.instagram.com/rubens_andersonn/", "target", "_blank", 2, "color", "white"], ["inverse", "", "solid", "", "shape", "camera"], ["href", "https://www.linkedin.com/in/rubens-anderson", "target", "_blank", 2, "color", "white"], ["inverse", "", "solid", "", "shape", "employee"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "D-CreEA Card Games");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Contact: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "cds-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " dcreae@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "cds-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Github");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "cds-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Lattes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "cds-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, " Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "cds-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " LinkedIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_3__["CdsIconCustomTag"]], styles: [".h2-footer[_ngcontent-%COMP%] {\r\n  font-size: large;\r\n  font-weight: 900;\r\n  color: white;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.ph-footer[_ngcontent-%COMP%] {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmgyLWZvb3RlciB7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4ucGgtZm9vdGVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "OaWH":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AppService {
    constructor(http) {
        this.http = http;
        this._globalLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._confirmationModal = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._appAlerts = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._closeAppAlertByIndex = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    setAppAlerts(alerts, timeoutMs = 5000) {
        if (!alerts)
            return;
        this._appAlerts.next(alerts);
        if (alerts.length === 1)
            setTimeout(() => this.closeAppAlerts(), timeoutMs);
    }
    closeAppAlert(index) {
        this._closeAppAlertByIndex.next(index);
    }
    closeAppAlerts() {
        this._appAlerts.next([]);
    }
    getAppAlerts() {
        return this._appAlerts.asObservable();
    }
    getCloseAppAlertByIndex() {
        return this._closeAppAlertByIndex.asObservable();
    }
    getGlobalLoading() {
        return this._globalLoading.asObservable();
    }
    setGlobalLoading(show) {
        this._globalLoading.next(show);
    }
    getConfirmationModal() {
        return this._confirmationModal.asObservable();
    }
    setConfirmationModal(param) {
        this._confirmationModal.next(param);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule, MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-stack/contenteditable */ "MkJO");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "R9Cn");
/* harmony import */ var _api_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api.interceptor */ "0O/j");
/* harmony import */ var _app_imports__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.imports */ "d1tE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/summary/summary.component */ "Dmx0");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/card/card.component */ "lXt9");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/footer/footer.component */ "LmEr");
/* harmony import */ var _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/disclaimer/disclaimer.component */ "RYeu");









// import { AngularMultiSelectModule } from "angular2-multiselect-dropdown";








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
            // AngularMultiSelectModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_7__["ContenteditableModule"],
            _api_interceptor__WEBPACK_IMPORTED_MODULE_9__["ApiInterceptorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_imports__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
            _app_imports__WEBPACK_IMPORTED_MODULE_10__["commonComponents"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
        // AngularMultiSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_7__["ContenteditableModule"],
        _api_interceptor__WEBPACK_IMPORTED_MODULE_9__["ApiInterceptorModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_imports__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
        // AngularMultiSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_7__["ContenteditableModule"],
        _api_interceptor__WEBPACK_IMPORTED_MODULE_9__["ApiInterceptorModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_imports__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_5__["ClarityModule"],
        // AngularMultiSelectModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ng_stack_contenteditable__WEBPACK_IMPORTED_MODULE_7__["ContenteditableModule"],
        _api_interceptor__WEBPACK_IMPORTED_MODULE_9__["ApiInterceptorModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_imports__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]] }); })();
class MainModule {
}
MainModule.ɵfac = function MainModule_Factory(t) { return new (t || MainModule)(); };
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_13__["SummaryComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_16__["DisclaimerComponent"]], imports: [SharedModule], exports: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"], _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_13__["SummaryComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"], _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_16__["DisclaimerComponent"]] }); })();


/***/ }),

/***/ "RYeu":
/*!**********************************************************!*\
  !*** ./src/app/pages/disclaimer/disclaimer.component.ts ***!
  \**********************************************************/
/*! exports provided: DisclaimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisclaimerComponent", function() { return DisclaimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/footer/footer.component */ "LmEr");


class DisclaimerComponent {
    constructor() { }
    ngOnInit() {
    }
}
DisclaimerComponent.ɵfac = function DisclaimerComponent_Factory(t) { return new (t || DisclaimerComponent)(); };
DisclaimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DisclaimerComponent, selectors: [["app-disclaimer"]], decls: 59, vars: 0, consts: [[1, "clr-col-12", 2, "background-color", "#fafafa"], [1, "content-area"], [1, "clr-row"], [1, "clr-col-2"], [1, "clr-col-8"], [1, "ph"], [1, "img-container"], [1, "clr-col-4"], [1, "card", 2, "border-radius", "6px"], [1, "card-block"], ["src", "../../../assets/images/Rubens-profile.jpeg", "width", "100%", "alt", "Imagem gameloop", 1, "img-fluid", 2, "border-radius", "50%", "margin-top", "1rem"], [1, "card-footer"], [1, "ph", 2, "width", "90%", "min-height", "2.45rem", "margin", "0px", "text-align", "center"], ["src", "../../../assets/images/rossana-profile.jpg", "width", "100%", "alt", "Imagem gameloop", 1, "img-fluid", 2, "border-radius", "50%", "margin-top", "1rem"], [1, "ph", 2, "width", "90%", "margin", "0px", "text-align", "center"], ["src", "../../../assets/images/mdcc.jpg", "width", "100%", "alt", "Imagem gameloop", 1, "img-fluid", 2, "border-radius", "50%", "margin-top", "1rem"], ["src", "../../../assets/images/ufc.png", "width", "100%", "alt", "Imagem gameloop", 1, "img-fluid", 2, "border-radius", "50%", "margin-top", "1rem"], ["src", "../../../assets/images/dc.png", "width", "100%", "alt", "Imagem gameloop", 1, "img-fluid", 2, "border-radius", "50%", "margin-top", "1rem"], [2, "min-height", "3rem"]], template: function DisclaimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Disclaimer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Este projeto foi desenvolvido por Rubens Anderson de Sousa Silva, Orientado pela Profa. Rossana Maria de Castro Andrade, em um projeto de mestrado vinculado ao programa de Mestrado e Doutorado em Ci\u00EAncia da Computa\u00E7\u00E3o (MDCC) da Universidade Federal do Cear\u00E1 (UFC), em conjunto com o Departamento de Computa\u00E7\u00E3o (DC). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " A ferramenta, intitulada D-CreEA Card Games, tem o objetivo de auxiliar o desenvolvimento de jogos anal\u00F3gicos educacionais personaliz\u00E1veis, por professores de Computa\u00E7\u00E3o que possuem pouca ou nenhuma experi\u00EAncia em desenvolvimento de jogos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Este \u00E9 um trabalho em constante evolu\u00E7\u00E3o. Sendo assim, podem existir falhas ou dificuldades durante o uso. Para reportar qualquer dificuldade, sugest\u00F5es ou entrar em contato: dcreea@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Authors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Rubens A. S. Silva - Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Rossana M. C. Andrade - CoAuthor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Support");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "MDCC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "UFC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "DC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-footer");
    } }, directives: [_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]], styles: ["h3[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-bottom: 3px solid #5fc2b0;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border-bottom: 3px solid #52a798;\r\n}\r\n\r\n.ph[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  font-size: medium;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  margin-top: 0.5rem;\r\n  color: #4a9286;\r\n  font-weight: 800;\r\n}\r\n\r\nol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  margin-top: 0.5rem;\r\n  font-style: italic;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  margin-bottom: 1.5rem;\r\n}\r\n\r\n.img-container[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc2NsYWltZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGlzY2xhaW1lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjNWZjMmIwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM1MmE3OTg7XHJcbn1cclxuXHJcbi5waCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbn1cclxuXHJcbnVsIGxpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgY29sb3I6ICM0YTkyODY7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxub2wgbGkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'DCREAE-Front';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [["id", "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "clr-main-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_clr_angular__WEBPACK_IMPORTED_MODULE_1__["ClrMainContainer"], _clr_angular__WEBPACK_IMPORTED_MODULE_1__["MainContainerWillyWonka"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: init_app, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init_app", function() { return init_app; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/app.service */ "OaWH");
/* harmony import */ var _shared_models_app_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/models/app.environment */ "c+EJ");
/* harmony import */ var _services_home_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/home.service */ "nr5L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "tyNb");















function init_app(homeService, appEnvironment) {
    return () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        yield delay(1);
    });
}
function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
class AppModule {
    constructor() { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [
        _services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"],
        _shared_models_app_environment__WEBPACK_IMPORTED_MODULE_10__["AppEnvironment"],
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
            useFactory: init_app,
            deps: [_services_home_service__WEBPACK_IMPORTED_MODULE_11__["HomeService"], _shared_models_app_environment__WEBPACK_IMPORTED_MODULE_10__["AppEnvironment"]],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_8__["AppRouting"],
        ], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"]], exports: [_clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClarityModule"]] }); })();


/***/ }),

/***/ "ZgTr":
/*!****************************************!*\
  !*** ./src/app/pages/summary/model.ts ***!
  \****************************************/
/*! exports provided: gameModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameModel", function() { return gameModel; });
/* harmony import */ var _cardModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cardModel */ "7pS+");

const gameModel = {
    id: "z",
    audience: "computer science students",
    authors: ["Rubens Silva"],
    description: "A game to practice software testing",
    simplyGameplay: "In this game, the players must resolve challenges by combining types of software testing with software application scenarios. The objective is to choose the type of test that best suits the software scenario",
    knowledgeField: "Software Testing",
    maxNumberPlayers: 7,
    minNumberPlayers: 3,
    name: "GreaTest Card Game",
    requirements: "Software testing types",
    decks: [
        {
            _id: "98",
            game: null,
            cards: _cardModel__WEBPACK_IMPORTED_MODULE_0__["challengeCards"],
            color: "#663030",
            name: "Challenges Deck",
            description: "This deck has all the challenges of this game. Each challenge is a software use description",
            deckFront: {
                title: true,
                art: true,
                description: true,
                effect: false,
                cost: false,
                level: false,
                earning: false,
            },
            deckBack: {
                title: false,
                answers: true,
                effect: false,
                cost: false,
                level: false,
                earning: false,
            },
        },
        {
            _id: "99",
            game: null,
            cards: _cardModel__WEBPACK_IMPORTED_MODULE_0__["gameCards"],
            color: "#30665d",
            name: "Game Deck",
            description: "This deck has the types of software testing, e.g., Unit Test, Usability Test",
            deckFront: {
                title: true,
                art: true,
                description: true,
                effect: false,
                cost: false,
                level: false,
                earning: false,
            },
            deckBack: {
                title: false,
                answers: false,
                effect: false,
                cost: false,
                level: false,
                earning: false,
            },
        },
        {
            _id: "999",
            game: null,
            cards: _cardModel__WEBPACK_IMPORTED_MODULE_0__["gameCards"],
            color: "#613d61",
            name: "Bonus Deck",
            description: "This deck has all bonus cards. Every bonus card has an effect",
            deckFront: {
                title: true,
                art: true,
                description: true,
                effect: false,
                cost: false,
                level: false,
                earning: false,
            },
            deckBack: {
                title: false,
                answers: false,
                effect: false,
                cost: false,
                level: false,
                earning: false,
            },
        },
    ],
    states: [
        {
            id: "1",
            purpose: "sets the begining of the game",
            label: "Game Start",
            conditionalRule: null,
            effectRule: null,
            statementRules: [],
            transition: "Game Setup",
        },
        {
            id: "2",
            purpose: "sets the setup of every begining of a game",
            label: "Game Setup",
            conditionalRule: null,
            effectRule: null,
            statementRules: [
                {
                    _id: "a",
                    label: "st rule 1",
                    simplerDescription: "all players draw 5 cards from game deck",
                },
                {
                    _id: "a",
                    label: "st rule 2",
                    simplerDescription: "chose random player to start",
                },
            ],
            transition: "Turn setup",
        },
        {
            id: "3",
            purpose: "sets the setup of every begining of a turn",
            label: "Turn setup",
            conditionalRule: null,
            effectRule: null,
            statementRules: [
                {
                    _id: "c",
                    label: "rule 6",
                    simplerDescription: "the player of the turn draws 1 card from game deck",
                },
                {
                    _id: "d",
                    label: "rule 5",
                    simplerDescription: "the table is filled with 5 challenge cards, if not already",
                },
            ],
            transition: "Play or next player",
        },
        {
            id: "3.1",
            purpose: "Decides what is the play",
            label: "Play or next player",
            conditionalRule: {
                id: "b",
                label: "Choose next play",
                conditions: [
                    {
                        test: "the player of the turn has not tried a challenge yet",
                        effectIfTrue: {
                            simpleEffect: "S/he can play a challenge",
                        },
                        stateIfTrue: "Play a challenge",
                    },
                    {
                        test: "the player of the turn has not tried to bargain",
                        effectIfTrue: {
                            simpleEffect: "S/he can try to negotiate with other players",
                        },
                        stateIfTrue: "Do a bargain",
                    },
                    {
                        test: "the player of the turn has not used a Bonus Card effect",
                        effectIfTrue: {
                            simpleEffect: "S/he can use it",
                        },
                        stateIfTrue: "Bonus play",
                    },
                ],
                failureCondition: {
                    test: "can't do any play",
                    effectIfTrue: {
                        simpleEffect: "pass the turn to next player",
                    },
                    stateIfTrue: "Turn setup",
                },
            },
            effectRule: null,
            statementRules: null,
            transition: null,
        },
        {
            id: "4",
            purpose: "Describes the way to resolve a challenge",
            label: "Play a challenge",
            conditionalRule: {
                id: "e",
                label: "play a challenge",
                conditions: [
                    {
                        test: "the player beats the challenge AND the dice throw shows a number present in the answers",
                        effectIfTrue: {
                            simpleEffect: "S/he wins the challenge",
                        },
                        stateIfTrue: "Update status: success",
                    },
                    {
                        test: "the player beats the challenge but the dice throw shows a number NOT present in the answers",
                        effectIfTrue: {
                            simpleEffect: "S/he wins the challenge",
                        },
                        stateIfTrue: "Play or next player",
                    },
                ],
                failureCondition: {
                    test: "the player used a game card that DO NOT answers correctly the challenge",
                    effectIfTrue: {
                        simpleEffect: "S/he looses the challenge",
                    },
                    stateIfTrue: "Update status: failure",
                },
            },
            effectRule: null,
            statementRules: [
                {
                    _id: "g1",
                    label: "rule 8.1",
                    simplerDescription: "The player combines 1 Game Card with 1 Challenge Card to make it's play",
                },
                {
                    _id: "g1",
                    label: "rule 8.1",
                    simplerDescription: "the player beats the challenge if S/He uses a game card that answers correctly the challenge card that s/he chose from table",
                },
                {
                    _id: "g1",
                    label: "rule 8.1",
                    simplerDescription: "the player throw the dice if S/He beats the challenge",
                },
            ],
            transition: null,
        },
        {
            id: "10",
            purpose: "Negotiate with another player",
            label: "Do a bargain",
            conditionalRule: null,
            effectRule: null,
            statementRules: [
                {
                    _id: "c",
                    label: "rule 6",
                    simplerDescription: "the player can offer card to trade. This negotiation is made in front of all other players",
                },
            ],
            transition: "Play or next player",
        },
        {
            id: "11",
            purpose: "To use the effect of a Bonus card",
            label: "Bonus play",
            conditionalRule: null,
            effectRule: null,
            statementRules: [
                {
                    _id: "c",
                    label: "rule 6",
                    simplerDescription: "the player can use a Bonus Card if S/He has",
                },
            ],
            transition: "Play or next player",
        },
        {
            id: "5",
            purpose: "Describes the way to change the points in case of win a challenge",
            label: "Update status: success",
            conditionalRule: null,
            effectRule: null,
            statementRules: [
                {
                    _id: "h",
                    label: "st rule 3",
                    simplerDescription: "the player earns +1 victory point",
                },
                {
                    _id: "h",
                    label: "st rule 3",
                    simplerDescription: "the player draws a card from the Deck Bonus to it's hand",
                },
            ],
            transition: "Check if game completed",
        },
        {
            id: "6",
            purpose: "Describes the way to change the points in case of miss a challenge",
            label: "Update status: failure",
            conditionalRule: null,
            effectRule: null,
            statementRules: [
                {
                    _id: "i",
                    label: "rule",
                    simplerDescription: "there is no penalties for loosing",
                },
            ],
            transition: "Play or next player",
        },
        {
            id: "7",
            purpose: "if someone won, the game must end",
            label: "Check if game completed",
            conditionalRule: {
                id: "j",
                label: "end game condition",
                conditions: [
                    {
                        test: "any player achieved 7 victory points",
                        effectIfTrue: {
                            simpleEffect: "S/he wins the game",
                        },
                        stateIfTrue: "Game Over",
                    },
                ],
                failureCondition: {
                    test: "no player achieved 7 victory points yet",
                    effectIfTrue: {
                        simpleEffect: "next player",
                    },
                    stateIfTrue: "Play or next player",
                },
            },
            effectRule: null,
            statementRules: [],
            transition: null,
        },
        {
            id: "-1",
            purpose: "The end of the game. Lets see the winners",
            label: "Game Over",
            conditionalRule: null,
            effectRule: null,
            statementRules: [],
            transition: null,
        },
    ],
};


/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: ROUTES, AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/disclaimer/disclaimer.component */ "RYeu");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/summary/summary.component */ "Dmx0");




const ROUTES = [
    { path: "", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "home", component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "demo", component: _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"] },
    { path: "disclaimer", component: _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_1__["DisclaimerComponent"] },
];
const AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(ROUTES);


/***/ }),

/***/ "c+EJ":
/*!**************************************************!*\
  !*** ./src/app/shared/models/app.environment.ts ***!
  \**************************************************/
/*! exports provided: AppEnvironment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEnvironment", function() { return AppEnvironment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AppEnvironment {
}
AppEnvironment.ɵfac = function AppEnvironment_Factory(t) { return new (t || AppEnvironment)(); };
AppEnvironment.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppEnvironment, factory: AppEnvironment.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "d1tE":
/*!********************************!*\
  !*** ./src/app/app.imports.ts ***!
  \********************************/
/*! exports provided: PageComponents, Pipes, flattenPageComponents, commonComponents, PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponents", function() { return PageComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipes", function() { return Pipes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flattenPageComponents", function() { return flattenPageComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonComponents", function() { return commonComponents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/summary/summary.component */ "Dmx0");
/* harmony import */ var _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/disclaimer/disclaimer.component */ "RYeu");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






const PageComponents = {
    SummaryComponent: _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__["SummaryComponent"],
    CardComponent: _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"],
    FooterComponent: _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
    DisclaimerComponent: _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_2__["DisclaimerComponent"],
};
const Pipes = {};
const flattenPageComponents = [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"], _pages_summary_summary_component__WEBPACK_IMPORTED_MODULE_1__["SummaryComponent"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"], _pages_disclaimer_disclaimer_component__WEBPACK_IMPORTED_MODULE_2__["DisclaimerComponent"]];
const commonComponents = [];
class PipeModule {
}
PipeModule.ɵfac = function PipeModule_Factory(t) { return new (t || PipeModule)(); };
PipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: PipeModule });
PipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({});


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "OaWH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clr_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clr/angular */ "8MG2");







function CardComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.card.cardFront.art);
} }
function CardComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r2.card.cardFront.effect, "", ctx_r2.d.deckFront.effect, "");
} }
function CardComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "rect", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "rect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.card.cardFront.cost);
} }
function CardComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.card.cardFront.level);
} }
function CardComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.card.cardFront.earning);
} }
function CardComponent_div_0_div_15_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.card.cardBack.effect);
} }
function CardComponent_div_0_div_15_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "rect", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "rect", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.card.cardBack.cost);
} }
function CardComponent_div_0_div_15_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "circle", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "circle", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.card.cardBack.level);
} }
function CardComponent_div_0_div_15_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "g", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r11.card.cardBack.earning);
} }
const _c0 = function (a0, a1, a2) { return { "background-color": a0, "width.px": a1, "height.px": a2 }; };
const _c1 = function (a0) { return { height: a0 }; };
function CardComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, CardComponent_div_0_div_15_div_8_Template, 3, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CardComponent_div_0_div_15_div_10_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, CardComponent_div_0_div_15_div_11_Template, 7, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CardComponent_div_0_div_15_div_12_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](8, _c0, ctx_r6.d.color, ctx_r6.cardWidth, ctx_r6.cardHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.card.cardBack.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](12, _c1, ctx_r6.d.deckBack.effect ? "75%" : "100%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.card.cardBack.answers);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.d.deckBack.effect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.d.deckBack.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.d.deckBack.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.d.deckBack.earning);
} }
function CardComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](1, _c0, ctx_r7.d.color, ctx_r7.cardWidth, ctx_r7.cardHeight));
} }
const _c2 = function (a0, a1, a2, a3) { return { "background-color": a0, "width.px": a1, "height.px": a2, "margin-right.px": a3 }; };
function CardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, CardComponent_div_0_div_6_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CardComponent_div_0_div_10_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, CardComponent_div_0_div_12_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, CardComponent_div_0_div_13_Template, 7, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CardComponent_div_0_div_14_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, CardComponent_div_0_div_15_Template, 13, 14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CardComponent_div_0_div_16_Template, 1, 5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](11, _c2, ctx_r0.d.color, ctx_r0.cardWidth, ctx_r0.cardHeight, ctx_r0.marginBetwCards));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.card.cardFront.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.d.deckFront.art);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](16, _c1, ctx_r0.d.deckFront.effect ? "25%" : "50%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.card.cardFront.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.d.deckFront.effect);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.d.deckFront.cost);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.d.deckFront.level);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.d.deckFront.earning);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.back);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.back);
} }
class CardComponent {
    constructor(appService, router) {
        this.appService = appService;
        this.router = router;
        this.cardWidth = 250;
        this.marginBetwCards = 15;
    }
    ngOnInit() {
        this.cardHeight = this.cardWidth * 1.72;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"])); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { d: ["deck", "d"], card: "card", back: "back", cardWidth: "cardWidth", marginBetwCards: "marginBetwCards" }, decls: 1, vars: 1, consts: [["class", "clr-row", 4, "ngIf"], [1, "clr-row"], [1, "card-wrapper", 3, "ngStyle"], [1, "card-margins"], [1, "card-game-header"], [1, "card-game-body"], ["class", "card-art", 4, "ngIf"], [1, "card-description", 3, "ngStyle"], [1, "card-text"], ["class", "card-effect", 4, "ngIf"], [1, "card-game-footer"], ["class", "float-items-right clr-col-4 vertical-center-input", 4, "ngIf"], ["class", "float-items-right clr-col-4 vertical-center-input", "style", "border-left: 1px solid #707070; border-right: 1px solid #707070", 4, "ngIf"], ["class", "card-wrapper", 3, "ngStyle", 4, "ngIf"], [1, "card-art"], [1, "card-effect"], [1, "float-items-right", "clr-col-4", "vertical-center-input"], ["xmlns", "http://www.w3.org/2000/svg", "width", "26.87", "height", "26.87", "viewBox", "0 0 26.87 26.87"], ["id", "Ret\u00E2ngulo_28", "data-name", "Ret\u00E2ngulo 28", "transform", "translate(0 13.435) rotate(-45)", "fill", "#e5ee9a", "stroke", "#707070", "stroke-width", "3"], ["width", "19", "height", "19", "stroke", "none"], ["x", "1.5", "y", "1.5", "width", "16", "height", "16", "fill", "none"], [1, "card-point-label"], [1, "float-items-right", "clr-col-4", "vertical-center-input", 2, "border-left", "1px solid #707070", "border-right", "1px solid #707070"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["id", "Elipse_5", "data-name", "Elipse 5", "fill", "#956aea", "stroke", "#707070", "stroke-width", "3"], ["cx", "12", "cy", "12", "r", "12", "stroke", "none"], ["cx", "12", "cy", "12", "r", "10.5", "fill", "none"], ["xmlns", "http://www.w3.org/2000/svg", "width", "28", "height", "24", "viewBox", "0 0 28 24"], ["id", "Pol\u00EDgono_4", "data-name", "Pol\u00EDgono 4", "fill", "#66f9be"], ["d", "M 25.38844108581543 22.5 L 2.611559152603149 22.5 L 14 2.976958513259888 L 25.38844108581543 22.5 Z", "stroke", "none"], ["d", "M 14 5.953907012939453 L 5.223112106323242 21 L 22.77688789367676 21 L 14 5.953907012939453 M 14 0 L 28 24 L 0 24 L 14 0 Z", "stroke", "none", "fill", "#707070"], [1, "card-answers", 3, "ngStyle"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CardComponent_div_0_Template, 17, 18, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.card);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _clr_angular__WEBPACK_IMPORTED_MODULE_4__["ClrLabel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5jc3MifQ== */", ".card-block[_ngcontent-%COMP%] {\r\n  margin-top: 0px;\r\n}\r\n\r\n\r\n\r\n.btn-primary[_ngcontent-%COMP%] {\r\n  background-color: #30665d;\r\n  color: white;\r\n  border-color: white;\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-danger[_ngcontent-%COMP%] {\r\n  font-size: 0.5rem;\r\n  border-radius: 0.2rem;\r\n}\r\n\r\n.btn-primary[_ngcontent-%COMP%]:hover {\r\n  background-color: #52a798;\r\n  color: white;\r\n  border-color: white;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:active, .btn-link[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:active {\r\n  background-color: #30665d;\r\n  color: white;\r\n  box-shadow: 0 0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.btn-tab-details[_ngcontent-%COMP%]:active {\r\n  box-shadow: 0 -0.15rem 0 #83aaa3 inset;\r\n}\r\n\r\n.card-header[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  color: #707070;\r\n  background-color: #30665d;\r\n  padding-right: 3rem;\r\n  padding-left: 1rem;\r\n  margin-left: 0rem;\r\n}\r\n\r\n\r\n\r\n.btn-nav[_ngcontent-%COMP%], .dropdown-toggle[_ngcontent-%COMP%] {\r\n  color: #52a798;\r\n  border: 0px;\r\n  border-radius: 0px;\r\n  min-height: 100% !important;\r\n  padding: 0rem 1rem 0rem 1rem;\r\n  margin: 0px;\r\n  transition-duration: 0.2s;\r\n}\r\n\r\n.btn-nav[_ngcontent-%COMP%]:hover, .btn-nav[_ngcontent-%COMP%]:active {\r\n  background-color: #52a798; \r\n  color: white;\r\n}\r\n\r\n.dropdown-nav[_ngcontent-%COMP%], .dropdown-trigger-wrapper[_ngcontent-%COMP%] {\r\n  margin: 0px;\r\n  padding: 0px;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%] {\r\n  animation: opacity 0.8s ease;\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n  z-index: 999;\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  \r\n  width: 13rem;\r\n  height: 3rem;\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.page-spinner-container[_ngcontent-%COMP%]   .any-page-loading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-size: contain;\r\n  animation: page-loader 2.5s linear infinite;\r\n  -webkit-animation: page-loader 2.5s linear infinite;\r\n  -moz-animation: page-loader 2.5s linear infinite;\r\n  -ms-animation: page-loader 2.5s linear infinite;\r\n  border-bottom: 4px solid #007db8;\r\n}\r\n\r\n@keyframes page-loader {\r\n  0% {\r\n    margin-left: 0;\r\n    width: 0;\r\n  }\r\n\r\n  11% {\r\n    margin-left: 0;\r\n    width: 3.5rem;\r\n  }\r\n\r\n  60% {\r\n    margin-left: calc(100% - 3.5rem);\r\n    width: 3.5rem;\r\n  }\r\n\r\n  80%,\r\n  100% {\r\n    margin-left: 100%;\r\n    width: 0;\r\n  }\r\n}\r\n\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.float-left[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%] {\r\n  overflow: auto;\r\n}\r\n\r\n.clearfix[_ngcontent-%COMP%]::after {\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.rotate[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZOztBQUVaO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxVQUFVOztBQUVWO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQSxVQUFVOztBQUVWOztFQUVFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSx5QkFBeUIsRUFBRSxVQUFVO0VBQ3JDLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixpQ0FBaUM7RUFDakMsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQTRCO0VBQzVCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsMkNBQTJDO0VBQzNDLG1EQUFtRDtFQUNuRCxnREFBZ0Q7RUFDaEQsK0NBQStDO0VBQy9DLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFO0lBQ0UsY0FBYztJQUNkLFFBQVE7RUFDVjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsYUFBYTtFQUNmOztFQUVBOztJQUVFLGlCQUFpQjtJQUNqQixRQUFRO0VBQ1Y7QUFDRjs7QUF1RUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBS0Usd0JBQXdCO0FBQzFCIiwiZmlsZSI6InN0eWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGNsYXJpdHkgKi9cclxuXHJcbi5jYXJkLWJsb2NrIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbn1cclxuXHJcbi8qQlVUVE9OUyovXHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDY2NWQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1MmE3OTg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5idG46YWN0aXZlLFxyXG4uYnRuLWxpbms6YWN0aXZlLFxyXG4uYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzA2NjVkO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAwIDAuMTVyZW0gMCAjODNhYWEzIGluc2V0O1xyXG59XHJcblxyXG4uYnRuLXRhYi1kZXRhaWxzOmFjdGl2ZSB7XHJcbiAgYm94LXNoYWRvdzogMCAtMC4xNXJlbSAwICM4M2FhYTMgaW5zZXQ7XHJcbn1cclxuXHJcbi5jYXJkLWhlYWRlciB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMwNjY1ZDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogMHJlbTtcclxufVxyXG5cclxuLypOQVYtQkFSKi9cclxuXHJcbi5idG4tbmF2LFxyXG4uZHJvcGRvd24tdG9nZ2xlIHtcclxuICBjb2xvcjogIzUyYTc5ODtcclxuICBib3JkZXI6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDByZW0gMXJlbSAwcmVtIDFyZW07XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcclxufVxyXG5cclxuLmJ0bi1uYXY6aG92ZXIsXHJcbi5idG4tbmF2OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUyYTc5ODsgLyogR3JlZW4gKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1uYXYsXHJcbi5kcm9wZG93bi10cmlnZ2VyLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnBhZ2Utc3Bpbm5lci1jb250YWluZXIge1xyXG4gIGFuaW1hdGlvbjogb3BhY2l0eSAwLjhzIGVhc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLlwiKTsgKi9cclxuICB3aWR0aDogMTNyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4ucGFnZS1zcGlubmVyLWNvbnRhaW5lciAuYW55LXBhZ2UtbG9hZGluZyBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGFuaW1hdGlvbjogcGFnZS1sb2FkZXIgMi41cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHBhZ2UtbG9hZGVyIDIuNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIC1tb3otYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAtbXMtYW5pbWF0aW9uOiBwYWdlLWxvYWRlciAyLjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgIzAwN2RiODtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBwYWdlLWxvYWRlciB7XHJcbiAgMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcblxyXG4gIDExJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA2MCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTAwJSAtIDMuNXJlbSk7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gIH1cclxuXHJcbiAgODAlLFxyXG4gIDEwMCUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICB9XHJcbn1cclxuXHJcbkAtbXMta2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIHBhZ2UtbG9hZGVyIHtcclxuICAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxuXHJcbiAgMjAlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDMuNXJlbTtcclxuICB9XHJcblxyXG4gIDYwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogY2FsYygxMDAlIC0gMy41cmVtKTtcclxuICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgfVxyXG5cclxuICA4MCUsXHJcbiAgMTAwJSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcclxuICAgIHdpZHRoOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBvcGFjaXR5IHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuXHJcbiAgMTAwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLmZsb2F0LWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY2xlYXJmaXg6OmFmdGVyIHtcclxuICBjbGVhcjogYm90aDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLnJvdGF0ZSB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG59XHJcbiJdfQ== */", "img[_ngcontent-%COMP%] {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n}\r\n\r\n.vertical-center-input[_ngcontent-%COMP%] {\r\n  margin: auto auto;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n}\r\n\r\n.horizontal-center-input[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  display: table;\r\n}\r\n\r\n.color-picker[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  border: 1px solid #dedede;\r\n  border-radius: 3rem;\r\n  margin-left: 1rem;\r\n  margin-right: 0px;\r\n}\r\n\r\n.input-no-space[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-width: 100%;\r\n  margin-right: 0px;\r\n  margin-left: 0px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  min-width: 1px;\r\n}\r\n\r\n.btn-deck[_ngcontent-%COMP%] {\r\n  border: 2px solid #cacaca;\r\n  border-radius: 0.2rem;\r\n  height: 4.5rem;\r\n  width: 1rem;\r\n}\r\n\r\n.btn-deck-wrapper[_ngcontent-%COMP%] {\r\n  border-color: #cacaca;\r\n  border-style: solid;\r\n  border-width: 0px;\r\n  width: 80%;\r\n  height: 100%;\r\n  padding-top: 0.1rem;\r\n  text-align: center;\r\n  border-radius: 0.3rem;\r\n}\r\n\r\n.btn-deck-wrapper[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background-color: #dedede80;\r\n}\r\n\r\n.card-point-label[_ngcontent-%COMP%] {\r\n  margin-left: 0.4rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzQW5kRGVja3MuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJjYXJkc0FuZERlY2tzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbC1jZW50ZXItaW5wdXQge1xyXG4gIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhvcml6b250YWwtY2VudGVyLWlucHV0IHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG5cclxuLmNvbG9yLXBpY2tlciB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dC1uby1zcGFjZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBtaW4td2lkdGg6IDFweDtcclxufVxyXG5cclxuLmJ0bi1kZWNrIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjY2FjYWNhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcclxuICBoZWlnaHQ6IDQuNXJlbTtcclxuICB3aWR0aDogMXJlbTtcclxufVxyXG5cclxuLmJ0bi1kZWNrLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NhY2FjYTtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci13aWR0aDogMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAwLjFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuM3JlbTtcclxufVxyXG5cclxuLmJ0bi1kZWNrLXdyYXBwZXIgOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlODA7XHJcbn1cclxuLmNhcmQtcG9pbnQtbGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjRyZW07XHJcbn1cclxuIl19 */", ".card-wrapper[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  border-radius: 0.5rem;\r\n  background-color: #dedede;\r\n  border: 1px solid white;\r\n  color: white;\r\n}\r\n\r\n.card-margins[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  padding: 0.5rem;\r\n}\r\n\r\n.card-game-header[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #942929;\r\n  background-color: rgb(249, 249, 249, 0.7);\r\n  color: black;\r\n  border-radius: 0.5rem 0.5rem 0 0;\r\n  margin-bottom: 1%;\r\n  border: 1px solid white;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-game-header-back[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #942929;\r\n  background-color: rgb(249, 249, 249, 0.2);\r\n  color: white;\r\n  border-radius: 0.5rem 0.5rem 0 0;\r\n  margin-bottom: 1%;\r\n  border: 1px solid rgb(249, 249, 249, 0.4);\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-game-body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 78%;\r\n  min-height: 78%;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.card-art[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 50%;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n}\r\n\r\n.card-answers[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 75%;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  color: white;\r\n}\r\n\r\n.card-description[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  min-height: 25%;\r\n  max-height: 50%;\r\n  \r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  color: white;\r\n}\r\n\r\n.card-effect[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 25%;\r\n  border-top: 1px solid rgb(214, 214, 214);\r\n  \r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: flex-start;\r\n  background-color: rgba(222, 222, 222, 0.2);\r\n  color: white;\r\n}\r\n\r\n.card-game-footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #dedede;\r\n  background-color: rgb(249, 249, 249, 0.7);\r\n  color: black;\r\n  margin-bottom: 1%;\r\n  border: 1px solid white;\r\n  border-radius: 0 0 0.5rem 0.5rem;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card-game-footer-back[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 10%;\r\n  border-bottom: 1px solid #dedede;\r\n  background-color: rgb(249, 249, 249, 0.2);\r\n  color: white;\r\n  margin-bottom: 1%;\r\n  border: 1px solid rgb(249, 249, 249, 0.4);\r\n  border-radius: 0 0 0.5rem 0.5rem;\r\n  \r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.card-img[_ngcontent-%COMP%] {\r\n  width: auto;\r\n  height: 100%;\r\n}\r\n\r\n\r\n\r\n.red-card[_ngcontent-%COMP%] {\r\n  background-color: #663030;\r\n}\r\n\r\n.green-card[_ngcontent-%COMP%] {\r\n  background-color: #30665d;\r\n}\r\n\r\n\r\n\r\n.card-input-title[_ngcontent-%COMP%] {\r\n  border: 0px;\r\n  background-color: #dedede;\r\n  align-self: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  border-radius: 1px;\r\n}\r\n\r\n.card-input-footer[_ngcontent-%COMP%] {\r\n  border: 0px;\r\n  background-color: #dedede;\r\n  align-self: center;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n}\r\n\r\n.card-text[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: small;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.card-body-text[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: small;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 0.4rem;\r\n}\r\n\r\n.card-answer-text[_ngcontent-%COMP%] {\r\n  color: white;\r\n  font-size: small;\r\n  line-height: 100%;\r\n  text-align: center;\r\n  width: 100%;\r\n  margin: 0.2rem 0rem 0.2rem 0.2rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  white-space: normal;\r\n  width: 100%;\r\n  overflow: hidden; \r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.centering[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztDQUVDOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdDQUFnQztFQUNoQyx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsU0FBUztFQUNULGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2YsMENBQTBDO0VBQzFDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsMENBQTBDO0VBQzFDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0NBQXdDO0VBQ3hDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLHVCQUF1QjtFQUN2QiwwQ0FBMEM7RUFDMUMsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMseUNBQXlDO0VBQ3pDLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQyxjQUFjO0VBQ2QsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGdDQUFnQztFQUNoQyx5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsZ0NBQWdDO0VBQ2hDLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxXQUFXOztBQUVYO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUUsc0RBQXNEO0VBQ3hFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImNhcmQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuY2FyZCBwb2tlciBzaXplOiA2Ljk4NSB4IDEyLjA2NSBjbSA9IDEuNzIgcmF0aW8gXHJcbiovXHJcblxyXG4uY2FyZC13cmFwcGVyIHtcclxuICAvKiBoZWlnaHQ6IDEyLjA2NWNtOyAqL1xyXG4gIC8qIHdpZHRoOiA2Ljk4NWNtOyAqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtbWFyZ2lucyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG5cclxuLmNhcmQtZ2FtZS1oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAlO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTQyOTI5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDksIDI0OSwgMjQ5LCAwLjcpO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAvKiAvLy8vICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1nYW1lLWhlYWRlci1iYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk0MjkyOTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtIDAuNXJlbSAwIDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ5LCAyNDksIDAuNCk7XHJcbiAgLyogLy8vLyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uY2FyZC1nYW1lLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNzglO1xyXG4gIG1pbi1oZWlnaHQ6IDc4JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjIyLCAyMjIsIDAuMik7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5jYXJkLWFydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmNhcmQtYW5zd2VycyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3NSU7XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyNSU7XHJcbiAgbWF4LWhlaWdodDogNTAlO1xyXG4gIC8qIGNlbnRlcmluZyAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIyLCAyMjIsIDIyMiwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkLWVmZmVjdCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyNSU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMTQsIDIxNCwgMjE0KTtcclxuICAvKiBjZW50ZXJpbmcgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMiwgMjIyLCAyMjIsIDAuMik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5jYXJkLWdhbWUtZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSwgMC43KTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuNXJlbSAwLjVyZW07XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1nYW1lLWZvb3Rlci1iYWNrIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwJTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZGVkZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5LCAyNDksIDI0OSwgMC4yKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ5LCAyNDksIDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIDAuNXJlbSAwLjVyZW07XHJcbiAgLyogY2VudGVyaW5nICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBpbWFnZXMgKi9cclxuXHJcbi5jYXJkLWltZyB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vKiBjb2xvcnMgKi9cclxuXHJcbi5yZWQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2MzAzMDtcclxufVxyXG5cclxuLmdyZWVuLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMDY2NWQ7XHJcbn1cclxuXHJcbi8qIGlucHV0cyAqL1xyXG5cclxuLmNhcmQtaW5wdXQtdGl0bGUge1xyXG4gIGJvcmRlcjogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWRlZGU7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbn1cclxuXHJcbi5jYXJkLWlucHV0LWZvb3RlciB7XHJcbiAgYm9yZGVyOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlZGVkZTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxufVxyXG5cclxuLmNhcmQtdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgbGluZS1oZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5LXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAuNHJlbTtcclxufVxyXG5cclxuLmNhcmQtYW5zd2VyLXRleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAuMnJlbSAwcmVtIDAuMnJlbSAwLjJyZW07XHJcbn1cclxuXHJcbnAge1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogXCJvdmVyZmxvd1wiIHZhbHVlIG11c3QgYmUgZGlmZmVyZW50IGZyb20gXCJ2aXNpYmxlXCIgKi9cclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmNlbnRlcmluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "nr5L":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class HomeService {
    constructor(http) {
        this.http = http;
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "s9tN":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/assets/images/logo.svg ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"116.698\" height=\"118.989\" viewBox=\"0 0 116.698 118.989\">\r\n  <g id=\"Retângulo_35\" data-name=\"Retângulo 35\" transform=\"matrix(0.545, -0.839, 0.839, 0.545, 4.11, 83.944)\" fill=\"#2d5c30\" stroke=\"#21745b\" stroke-width=\"3\">\r\n    <rect width=\"100.092\" height=\"64.345\" rx=\"3\" stroke=\"none\"/>\r\n    <rect x=\"1.5\" y=\"1.5\" width=\"97.092\" height=\"61.345\" rx=\"1.5\" fill=\"none\"/>\r\n  </g>\r\n  <g id=\"Retângulo_36\" data-name=\"Retângulo 36\" transform=\"matrix(0.719, -0.695, 0.695, 0.719, 0, 71.116)\" fill=\"#fff\" stroke=\"#21745b\" stroke-width=\"3\">\r\n    <rect width=\"100.092\" height=\"64.345\" rx=\"3\" stroke=\"none\"/>\r\n    <rect x=\"1.5\" y=\"1.5\" width=\"97.092\" height=\"61.345\" rx=\"1.5\" fill=\"none\"/>\r\n  </g>\r\n  <g id=\"Polígono_9\" data-name=\"Polígono 9\" transform=\"translate(98.606 30.936) rotate(90)\" fill=\"rgba(0,0,0,0.3)\">\r\n    <path d=\"M 51.33133697509766 44.64631652832031 L 2.614202260971069 44.64631652832031 L 26.97276878356934 2.9725022315979 L 51.33133697509766 44.64631652832031 Z\" stroke=\"none\"/>\r\n    <path d=\"M 26.97276878356934 5.944992065429688 L 5.228397369384766 43.14631652832031 L 48.71714019775391 43.14631652832031 L 26.97276878356934 5.944992065429688 M 26.97276878356934 -3.814697265625e-06 L 53.94553756713867 46.14631652832031 L 0 46.14631652832031 L 26.97276878356934 -3.814697265625e-06 Z\" stroke=\"none\" fill=\"#707070\"/>\r\n  </g>\r\n  <g id=\"Retângulo_34\" data-name=\"Retângulo 34\" transform=\"translate(53.385 30.275) rotate(45)\" fill=\"rgba(0,143,33,0.3)\" stroke=\"#707070\" stroke-width=\"3\">\r\n    <rect width=\"38.997\" height=\"40.297\" stroke=\"none\"/>\r\n    <rect x=\"1.5\" y=\"1.5\" width=\"35.997\" height=\"37.297\" fill=\"none\"/>\r\n  </g>\r\n  <g id=\"Polígono_10\" data-name=\"Polígono 10\" transform=\"translate(38.56 42.002)\" fill=\"rgba(102,249,190,0.3)\">\r\n    <path d=\"M 27.23635101318359 23.19795989990234 L 2.661259651184082 23.19795989990234 L 14.94879341125488 2.8968505859375 L 27.23635101318359 23.19795989990234 Z\" stroke=\"none\"/>\r\n    <path d=\"M 14.94879531860352 5.793701171875 L 5.322511672973633 21.69795989990234 L 24.5750846862793 21.69795989990234 L 14.94879531860352 5.793701171875 M 14.94879531860352 -1.9073486328125e-06 L 29.89760398864746 24.69795989990234 L -5.7220458984375e-06 24.69795989990234 L 14.94879531860352 -1.9073486328125e-06 Z\" stroke=\"none\" fill=\"#707070\"/>\r\n  </g>\r\n</svg>\r\n");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map