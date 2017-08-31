"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var messages_component_1 = require("./messages/messages.component");
var authentication_component_1 = require("./auth/authentication.component");
var auth_routes_1 = require("./auth/auth.routes");
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    { path: 'auth', component: authentication_component_1.AuthenticationComponent, children: auth_routes_1.AUTH_ROUTES }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
