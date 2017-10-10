import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { StepsModule, MenuItem } from 'primeng/primeng';
import { ReunionService } from '../services/reunion.service';
import { AuthService, SocialUser } from "angular4-social-login";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { Routes, RouterModule } from "@angular/router";

@Component({
    selector: 'nav-menu',
    templateUrl: './navmenu.component.html',
})
export class NavMenuComponent implements OnInit {
    show: boolean;
    user: SocialUser;
    @Input() isLogedIn: boolean;

    //Collapse() {
    //    console.log('toggle called');
    //    this.show = false;
    //}
    
    constructor(private reunionService: ReunionService, private authService: AuthService, private router: Router, private authenticationService: AuthenticationService) {
        authenticationService.authEvent.subscribe((isLoggedIn) => this.updateLoginStatus(isLoggedIn));
    }

    private updateLoginStatus(isLoggedIn: any): void {
        this.show = false;
        console.log('updateLoginStatus called');
        this.isLogedIn = isLoggedIn;
    }

    private logout(): void {
        
        this.authService.signOut();
        this.isLogedIn = false;
        this.authService.authState.subscribe((user) => {
            this.reunionService.socialUser = user;
            this.user = user;
            this.authenticationService.emitloginEvent(false);
            //this.Collapse();
        }, (error) => console.log(error));
    }
    //items: MenuItem[];

    //ngOnInit() {
    //    this.items = [
    //        {
    //            label: 'File',
    //            items: [{
    //                label: 'New',
    //                icon: 'fa-plus',
    //                items: [
    //                    { label: 'Project' },
    //                    { label: 'Other' },
    //                ]
    //            },
    //            { label: 'Open' },
    //            { label: 'Quit' }
    //            ]
    //        },
    //        {
    //            label: 'Edit',
    //            icon: 'fa-edit',
    //            items: [
    //                { label: 'Undo', icon: 'fa-mail-forward' },
    //                { label: 'Redo', icon: 'fa-mail-reply' }
    //            ]
    //        }
    //    ];
    //}


    //items: MenuItem[];

    ngOnInit() {
    }
}