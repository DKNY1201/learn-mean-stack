"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var messages_component_1 = require("./messages/messages.component");
var authentication_component_1 = require("./auth/authentication.component");
var APP_ROUTES = [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: messages_component_1.MessagesComponent },
    { path: 'auth', component: authentication_component_1.AuthenticationComponent, loadChildren: './auth/auth.module#AuthModule' }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
