"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var messages_component_1 = require("./messages.component");
var message_list_component_1 = require("./message-list.component");
var message_component_1 = require("./message.component");
var message_input_component_1 = require("./message-input.component");
var message_service_1 = require("./message.service");
var MessageModule = (function () {
    function MessageModule() {
    }
    MessageModule = __decorate([
        core_1.NgModule({
            declarations: [
                messages_component_1.MessagesComponent,
                message_list_component_1.MessageListComponent,
                message_component_1.MessageComponent,
                message_input_component_1.MessageInputComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule
            ],
            providers: [message_service_1.MessageService]
        })
    ], MessageModule);
    return MessageModule;
}());
exports.MessageModule = MessageModule;
