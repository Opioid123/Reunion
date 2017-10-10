import { Component, OnInit} from '@angular/core';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";

@Component({
    selector: 'jntu',
    templateUrl: './jntu.component.html'
})
export class JntuComponent implements OnInit  {
    constructor(private router: Router, private reunionService: ReunionService) { }

    user: SocialUser;
    ngOnInit() {
        this.user = this.reunionService.socialUser;
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
    }
}
