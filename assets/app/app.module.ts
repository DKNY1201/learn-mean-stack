import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {FormsModule} from "@angular/forms";
import {MessageComponent} from "./message/message.component";
import {MessageListComponent} from "./message/message-list.component";

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent
    ],
    imports: [BrowserModule, FormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}