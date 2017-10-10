import { Injectable, Output, EventEmitter } from '@angular/core';
import { SocialUser } from "angular4-social-login";
@Injectable()

export class AuthenticationService {
    @Output() authEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    emitloginEvent(isLoggedIn:boolean)
    {
        this.authEvent.emit(isLoggedIn);
    }

}