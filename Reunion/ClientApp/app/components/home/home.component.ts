import { Component, OnInit} from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { AuthenticationService } from '../services/authentication.service';
import { ReunionService } from '../services/reunion.service';
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    user: SocialUser;
    college: string;
    year: string;
    constructor(private reunionService: ReunionService, private authService: AuthService, private authenticationService: AuthenticationService, private route: ActivatedRoute) {
        this.route.params.subscribe(params => {
            this.college = params['college'];
            this.year = params['year'];

            console.log(this.college);
            console.log(this.year);
        })
    }
    ngOnInit(): void {
        //this.authService.authState.subscribe((user) => {
        //    this.user = user;
        //    this.reunionService.socialUser = user;

        //});
        if (this.reunionService.socialUser)
        { this.authenticationService.emitloginEvent(true); }
    }
}
