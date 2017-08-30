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
var message_component_1 = require("./message/message.component");
var message_list_component_1 = require("./message/message-list.component");
var message_input_component_1 = require("./message/message-input.component");
var messages_component_1 = require("./message/messages.component");
var authentication_component_1 = require("./auth/authentication.component");
var header_component_1 = require("./header.component");
var app_routing_1 = require("./app.routing");
var signin_component_1 = require("./auth/signin.component");
var signup_component_1 = require("./auth/signup.component");
var logout_component_1 = require("./auth/logout.component");
var auth_service_1 = require("./auth/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                message_component_1.MessageComponent,
                message_list_component_1.MessageListComponent,
                message_input_component_1.MessageInputComponent,
                messages_component_1.MessagesComponent,
                authentication_component_1.AuthenticationComponent,
                header_component_1.HeaderComponent,
                signin_component_1.SigninComponent,
                signup_component_1.SignupComponent,
                logout_component_1.LogoutComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule
            ],
            providers: [auth_service_1.AuthService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
