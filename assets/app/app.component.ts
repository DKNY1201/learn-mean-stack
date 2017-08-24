import { Component } from '@angular/core';
import {Message} from "./message/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messages: Message[] = [
        new Message('1st message', 'Quy'),
        new Message('2nd message', 'Thuy Anh'),
        new Message('3rd message', 'Kim Long')
    ];
}