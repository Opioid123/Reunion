import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { ReunionService } from '../services/reunion.service';
import { Router } from "@angular/router";
import { RouterModule, ActivatedRoute } from "@angular/router";
import { FileService } from '../services/file.service';
import { SocialUser } from "angular4-social-login";


@Component({
    selector: 'dept-directory',
    templateUrl: './deptdirectory.component.html',
})
export class DeptDirectoryComponent implements OnInit {
    dept: string;
    title = 'Image Gallery';
    errorMessage: string;
    personImageIdList: Array<any> = [];
    imageId: string = '';
    baseUrl: string = '';
    imgUrl: string;
    counter: number;
    imageidentifier: string;
    constructor(private changeRef: ChangeDetectorRef, private reunionService: ReunionService, private router: Router, private route: ActivatedRoute, private fileService: FileService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }
    user: SocialUser;
    ngOnInit() {
        this.user = this.reunionService.socialUser;
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
        this.counter = 0;

        this.route.params.subscribe(params => {
            this.dept = params['dept'];
        })
        this.getImageIdList();

    }

    getImageIdList() {
        console.log(this.counter);
        this.fileService.getImageIdList(this.dept).subscribe(

            data => {
                this.personImageIdList = data; this.imageidentifier = this.personImageIdList[this.counter].imageId;
                this.changeRef.detectChanges();
            },
            error => this.errorMessage = error
        )
    }


    next() {
        console.log(this.counter);
        console.log(this.personImageIdList.length - 1);
        if ((this.personImageIdList.length - 1) > this.counter) {
            this.imageidentifier = this.personImageIdList[this.counter + 1].imageId;
            this.counter = this.counter + 1;
        }
        else
            this.counter = -1;
    }

    previous() {
        console.log(this.counter);
        console.log(this.personImageIdList.length - 1);
        if (this.counter > 0) {
            this.imageidentifier = this.personImageIdList[this.counter - 1].imageId;
            this.counter = this.counter - 1;
        }
        else
            this.counter = this.personImageIdList.length - 1;
    }

    goBack() {
        this.router.navigateByUrl('/directory/jntu/1991');
    }
}