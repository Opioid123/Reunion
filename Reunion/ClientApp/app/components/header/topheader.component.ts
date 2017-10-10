import { Component, Input } from '@angular/core';
import { ReunionService } from '../services/reunion.service';
@Component({
    selector: 'topheader',
    templateUrl: './topheader.component.html'
})
export class TopheaderComponent {

    private isLoggedIn: boolean;
    constructor(private reunionService: ReunionService) {
        this.isLoggedIn = reunionService.isLoggedIn;
    }
}
