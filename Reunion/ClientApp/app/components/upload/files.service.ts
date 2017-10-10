import { Injectable } from '@angular/core';
import {
    Http, Response, RequestOptions,
    Request, RequestMethod, Headers
} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ISystemFile } from './systemFile';

@Injectable()
export class FilesService {

    constructor(private _http: Http) { }

    getFiles(): Observable<ISystemFile[]> {
        var _Url = 'api/Files/SystemFiles';

        return this._http.get(_Url)
            .map((response: Response) => <ISystemFile[]>response.json())
            .catch(this.handleError);
    }

    deleteFile(file: ISystemFile): Observable<string> {
        var _Url = 'api/Files';

        // This is a Post so we have to pass Headers
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        // Make the Angular 2 Post
        return this._http.post(_Url,
            JSON.stringify(file), options)
            .map((response: Response) => <string>response.statusText)
            .catch(this.handleError);
    }

    // Utility

    private handleError(error: Response) {
        // in a real world app, we may send the server to 
        // some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}