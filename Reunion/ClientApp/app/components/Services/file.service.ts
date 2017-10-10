import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileService {
    imgUrl: string = '';
    collegeImageUrl: string = '';
    memoryImageUrl: string = '';
    personImageUrl: string = '';

    constructor(private http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.imgUrl = baseUrl + 'api/Image';
        this.collegeImageUrl = baseUrl + 'api/Image/CollegeImageList';
        this.memoryImageUrl = baseUrl + 'api/Image/MemoryImageList';
        this.personImageUrl = baseUrl + 'api/Image/PersonImageListByBranch';

    }

    upload(file, parameters){      
        let input = new FormData();
        input.append("file", file);
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        options.params = parameters;
        console.log('files');
        console.log(file);
        console.log(options);
        return this.http.post(this.imgUrl, input, options)
                 .map(response => response.json())
                 .catch(error => Observable.throw(error));
                  
    }


    getImages(imageId){
        return this.http.get(this.imgUrl + '/' + imageId)
                   .map(response => response.json())
                   .catch(error => Observable.throw(error));
    }

    getImageIdList(id) {
        return this.http.get(this.personImageUrl + '/' + id)
            .map(response => { console.log(response.json()); return response.json(); })
            .catch(error => Observable.throw(error));

    }

    getCollegeImageIdList() {
        return this.http.get(this.collegeImageUrl)
            .map(response => { console.log(response.json()); return response.json(); })
            .catch(error => Observable.throw(error));
        
    }

    getMemoryImageIdList() {
        return this.http.get(this.memoryImageUrl)
            .map(response => { console.log(response.json()); return response.json(); })
            .catch(error => Observable.throw(error));

    }
}
