import { Component } from '@angular/core';

@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
    login = '';
    password = '';

    submit(event) {
        event.preventDefault();
        console.log(`Login is "${this.login}" and password is "${this.password}"`)
        event.target.reset();
    }
}