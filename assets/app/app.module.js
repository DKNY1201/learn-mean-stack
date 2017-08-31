"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var authentication_component_1 = require("./auth/authentication.component");
var header_component_1 = require("./header.component");
var app_routing_1 = require("./app.routing");
var logout_component_1 = require("./auth/logout.component");
var signup_component_1 = require("./auth/signup.component");
var signin_component_1 = require("./auth/signin.component");
var auth_service_1 = require("./auth/auth.service");
var error_component_1 = require("./errors/error.component");
var error_service_1 = require("./errors/error.service");
var message_module_1 = require("./messages/message.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                authentication_component_1.AuthenticationComponent,
                header_component_1.HeaderComponent,
                logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                error_component_1.ErrorComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                message_module_1.MessageModule
            ],
            providers: [auth_service_1.AuthService, error_service_1.ErrorService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
