/// <reference path="../models/profile.ts" />
import { Component, OnInit, Inject } from '@angular/core';
import { FileService } from '../services/file.service';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";
import { Profile } from '../models/profile'; 
@Component({
    selector: 'profile-photo-upload',
    templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
    title = '';
    errorMessage: string;
    images: Array<any> = [];
    imageId: string = '';
    baseUrl: string = '';
    imgUrl: string;

    constructor(private router: Router, private reunionService: ReunionService, private fileService: FileService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    user: SocialUser;
    ngOnInit(): void {
        this.user = this.reunionService.socialUser;
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
        this.reunionService.profile = {
            FirstName: '',
            LastName: '',
            Id: '',
            ImageId: '',
            Branch: '',
            MiddleInitial: '',
            Location: '',
            Email: '',
            Activated: false,
            RollNumber: '',
            PhoneNumber: '',
            Story: '',
            Code: '',
            Profession: '',
            YearOfJoining: '',
            Admin: false,
            PlaceHolder3: ''
        };
    }
    getImageData(imageId) {
        this.fileService.getImages(imageId).subscribe(

            data => { this.images = data.result; console.log(this.images); },
            error => this.errorMessage = error
        )
    }

    refreshImages(imageId) {
        this.reunionService.profile.ImageId = imageId;
        this.reunionService.profile.Email = this.reunionService.socialUser.email;
        this.imgUrl = this.baseUrl + 'api/Image/PersonImage/' + imageId;
    }
}
