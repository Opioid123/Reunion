import { Component, OnInit, Inject } from '@angular/core';
import { FileService } from '../services/file.service';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";

@Component({
    selector: 'memory-photos-upload',
    templateUrl: './memoryimageupload.component.html'
})
export class MemoryImageUploadComponent implements OnInit {
    title = 'Memory Photo Upload';
    errorMessage: string;
    images: Array<any> = [];
    imageId: string = '';
    baseUrl: string = '';
    imgUrl: string;

    constructor(private reunionService: ReunionService, private router: Router, private fileService: FileService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    user: SocialUser;
    ngOnInit(): void {
            this.user = this.reunionService.socialUser;
            if (!this.reunionService.socialUser)
                this.router.navigateByUrl('/unauthorized');
    }
    getImageData(imageId) {
        this.fileService.getImages(imageId).subscribe(

            data => {this.images = data.result; console.log(this.images); },
            error => this.errorMessage = error
        )
    }

    refreshImages(imageId) {
            console.log("Uploaded successfully!");
        this.imgUrl = this.baseUrl + 'api/Image/MemoryImage/' + imageId;
        console.log('event raised : '  + imageId);
    }
}
