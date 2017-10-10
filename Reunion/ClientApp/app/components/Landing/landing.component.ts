import { Component, OnInit } from '@angular/core';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";

@Component({
    selector: 'landing',
    templateUrl: './landing.component.html',
})
export class LandingComponent implements OnInit{
    user: SocialUser;
    ngOnInit(): void {
        this.user = this.reunionService.socialUser;
        if (!this.reunionService.socialUser)
        this.router.navigateByUrl('/unauthorized');
    }
    constructor(private reunionService: ReunionService, private router: Router) {

    }

}