import { Component, OnInit, Inject } from '@angular/core';
import { FileService } from '../services/file.service';

@Component({
    selector: 'new-file',
    templateUrl: './newfile.component.html'
})
export class NewFileComponent implements OnInit {
    title = 'Image Gallery';
    errorMessage: string;
    images: Array<any> = [];
    imageId: string = '';
    baseUrl: string = '';
    imgUrl: string;

    constructor(private fileService: FileService, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    ngOnInit() {
        //this.getImageData();
    }
    getImageData(imageId) {
        this.fileService.getImages(imageId).subscribe(

            data => { console.log('testtt'); this.images = data.result; console.log(this.images); },
            error => this.errorMessage = error
        )
    }

    refreshImages(imageId) {

        //if (status == true) {
        //    console.log("Uploaded successfully!");
        this.imgUrl = this.baseUrl + 'api/Image/' + imageId;
        console.log('event raised : '  + imageId);
        //this.getImageData(imageId);



    }
}
