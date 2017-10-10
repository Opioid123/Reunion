import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ReunionService } from '../services/reunion.service';
import { Router } from "@angular/router";

@Component({
    selector: 'directory',
    templateUrl: './directory.component.html',
})
export class DirectoryComponent implements OnInit {
    
    constructor(private reunionService: ReunionService, private router: Router){
    }

    ngOnInit() {
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
    }
}