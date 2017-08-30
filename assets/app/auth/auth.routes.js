"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var logout_component_1 = require("./logout.component");
exports.AUTH_ROUTES = [
    { path: '', redirectTo: 'signin', pathMatch: 'full' },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
