import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent{
    myForm: FormGroup;

    ngOnInit(): void {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.email
            ]),
            password: new FormControl(null, Validators.required)
        });
    }

    onSubmit() {
        console.log(this.myForm);
        setTimeout(() => {
            this.myForm.reset()
        }, 500);
    }
}