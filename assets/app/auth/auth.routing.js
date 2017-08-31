"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var signup_component_1 = require("./signup.component");
var signin_component_1 = require("./signin.component");
var logout_component_1 = require("./logout.component");
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'logout', component: logout_component_1.LogoutComponent }
];
exports.appRouting = router_1.RouterModule.forChild(AUTH_ROUTES);
