import { Component, OnInit, Inject } from '@angular/core';
import { FileService } from '../services/file.service';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";

@Component({
    selector: 'memory-image-carousel',
    templateUrl: './memoryphotoscarousel.component.html'
})
export class MemoryImageCarouselComponent implements OnInit {
    title = 'Image Gallery';
    errorMessage: string;
    memoryImageIdList: Array<any> = [];
    imageId: string = '';
    baseUrl: string = '';
    imgUrl: string;
    counter: number;
    imageidentifier: string;

    constructor(private reunionService: ReunionService, private router: Router, private fileService: FileService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    user: SocialUser;
    ngOnInit() {
        this.user = this.reunionService.socialUser;
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
        this.getImageIdList();
        this.counter = 0;
    }
    getImageIdList() {
        this.fileService.getMemoryImageIdList().subscribe(

            data => {
                this.memoryImageIdList = data; this.imageidentifier = this.memoryImageIdList[this.counter];  },
            error => this.errorMessage = error
        )
    }

    
    next() {
        console.log(this.counter);
        console.log(this.memoryImageIdList.length - 1);
        if ((this.memoryImageIdList.length - 1) > this.counter) {
            this.imageidentifier = this.memoryImageIdList[this.counter + 1];
            this.counter = this.counter + 1;
        }
        else
            this.counter = -1;
    }

    previous() {
        console.log(this.counter);
        console.log(this.memoryImageIdList.length - 1);
        if (this.counter > 0) {
            this.imageidentifier = this.memoryImageIdList[this.counter - 1];
            this.counter = this.counter - 1;
        }
        else
            this.counter = this.memoryImageIdList.length - 1;
    }
}
