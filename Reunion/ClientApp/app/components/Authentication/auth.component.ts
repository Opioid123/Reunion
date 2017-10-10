import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { ReunionService } from '../services/reunion.service';
import { AuthenticationService } from '../services/authentication.service';
@Component({
    selector: 'auth-demo',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
    isLoggedIn: boolean;
    user: SocialUser;
    @Output() authEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private authService: AuthService, private authenticationService: AuthenticationService, private reunionService: ReunionService) {

    }

    ngOnInit() {
        this.authService.authState.subscribe((user) => {
            this.user = user;
        });
        if (this.user)
        {
            this.reunionService.socialUser = this.user;
            this.authenticationService.emitloginEvent(true);
            console.log(this.reunionService.socialUser);
        }
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this.authService.authState.subscribe((user) => {
            this.reunionService.socialUser = user;
            this.user = user;
            this.authenticationService.emitloginEvent(true);

        });
        //if (this.isLoggedIn != true) {
        //    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        //    this.authService.authState.subscribe((user) => {
        //        this.isLoggedIn = false;
        //        if (user.id) {
        //            this.reunionService.isLoggedIn = true;
        //            this.isLoggedIn = true;
        //        }

        //        //this.reunionService.socialUser = user;
        //        this.user = user;
        //    });
        //    this.authenticationService.emitloginEvent(this.isLoggedIn);
        //}
    }


    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.authService.authState.subscribe((user) => {
            this.reunionService.socialUser = user;
            this.user = user;
            this.authenticationService.emitloginEvent(true);

        });
        //if (this.isLoggedIn != false) {
        //    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        //    this.authService.authState.subscribe((user) => {
        //        this.isLoggedIn = false;
        //        if (user) {
        //            this.reunionService.isLoggedIn = true;
        //            this.isLoggedIn = true;
        //        }
        //        //this.reunionService.socialUser = user;
        //        this.user = user;
        //    });
        //    this.authenticationService.emitloginEvent(this.isLoggedIn);
        //}
    }

    signOut(): void {
        this.authService.signOut();
        this.authService.authState.subscribe((user) => {
            this.reunionService.socialUser = user;
            this.user = user
            this.authenticationService.emitloginEvent(false);
        });
        //if (this.isLoggedIn == true) {
        //    this.authService.signOut();
        //    this.authService.authState.subscribe((user) => {
        //        if (!user) {
        //            this.reunionService.isLoggedIn = false;
        //            this.isLoggedIn = false;
        //            //this.reunionService.socialUser = user;
        //            this.user = user;
        //        }
        //    });
        //    this.isLoggedIn = false;
        //    this.authenticationService.emitloginEvent(this.isLoggedIn);
        //}
    }

}