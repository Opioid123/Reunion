import { Component, OnInit, Inject} from '@angular/core';
import { FileService } from '../services/file.service';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";
@Component({
    selector: 'college-image-carousel',
    templateUrl: './collegephotoscarousel.component.html'
})
export class CollegeImageCarouselComponent implements OnInit {
    title = 'Image Gallery';
    errorMessage: string;
    collegeImageIdList: Array<any>;
    imageId: string = '';
    baseUrl: string = '';
    imgUrl: string;
    counter: number;
    imageidentifier: string;

    constructor(private router: Router, private reunionService: ReunionService, private fileService: FileService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    user: SocialUser;
    ngOnInit() {
        this.user = this.reunionService.socialUser;
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
        this.getImageIdList();
        this.counter = 0;
        //document.getElementById('carousel-id').carousel();
        //$('.carousel').carousel();
    }
    getImageIdList() {
        this.fileService.getCollegeImageIdList().subscribe(

            data => {
                this.collegeImageIdList = data; this.imageidentifier = this.collegeImageIdList[this.counter];  },
            error => this.errorMessage = error
        )
    }

    
    next() {
        console.log(this.counter);
        console.log(this.collegeImageIdList.length - 1);
        if ((this.collegeImageIdList.length - 1) > this.counter) {
            this.imageidentifier = this.collegeImageIdList[this.counter + 1];
            this.counter = this.counter + 1;
        }
        else
            this.counter = -1;
    }

    previous() {
        console.log(this.counter);
        console.log(this.collegeImageIdList.length - 1);
        if (this.counter > 0) {
            this.imageidentifier = this.collegeImageIdList[this.counter - 1];
            this.counter = this.counter - 1;
        }
        else
            this.counter = this.collegeImageIdList.length - 1;
    }
}
