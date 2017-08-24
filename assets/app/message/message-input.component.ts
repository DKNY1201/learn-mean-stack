import {Component} from "@angular/core";
import {MessageService} from "./message.service";
import {Message} from "./message.model";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    providers: [MessageService]
})
export class MessageInputComponent {
    constructor(private messageService: MessageService){}

    onSave(content: string) {
        const message = new Message(content, 'Quy');
        this.messageService.addMessage(message);
    }
}