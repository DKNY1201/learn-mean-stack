import {Injectable} from "@angular/core";
import {Http, Headers, Response} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {User} from "./user.model";
import {ErrorService} from "../errors/error.service";

@Injectable()
export class AuthService{
    serverUrl = 'http://localhost:3200/user';
    constructor(private http: Http, private errorService: ErrorService) {}

    signup(user: User) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(user);
        return this.http.post(this.serverUrl, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    signin(user: User) {
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify(user);
        return this.http.post(this.serverUrl + '/signin', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                this.errorService.handleError(error.json());
                return Observable.throw(error.json());
            });
    }

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

}