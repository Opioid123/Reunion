/// <reference path="../models/profile.ts" />
import { Injectable, Inject } from "@angular/core";
import { Http, Response, Headers, RequestOptionsArgs, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Profile } from "../models/profile";

@Injectable()
export class ApiService {
    private baseUrl: string;

    constructor(private clientHttp: Http, @Inject('BASE_URL') baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public getApiData(urlPath: string, params: URLSearchParams): Observable<Response> {
        let requestOptions = this.getBaseRequestOptions(params);
        let apiUrl = this.getApiUrl(urlPath);

        return this.clientHttp.get(apiUrl, requestOptions);
    }

    public getApiJSONData(urlPath: string, params: URLSearchParams): Observable<Response> {
        let requestOptions = this.getBaseRequestOptions(params);
        let apiUrl = this.getApiUrl(urlPath);
        return this.clientHttp.get(apiUrl, requestOptions).map((r: Response) => r.json());
    }

    public getApiDataForType<T>(urlPath: string, params: URLSearchParams): Observable<T> {
        let requestOptions = this.getBaseRequestOptions(params);
        let apiUrl = this.getApiUrl(urlPath);

        return this.clientHttp.get(apiUrl, requestOptions).map((r: Response) => r.json() as T);
    }

    public postApiData(urlPath: string, data: any, parameters:any): Observable<Response> {
        let apiUrl = this.getApiUrl(urlPath);

        let requestOptions = this.getBaseRequestOptions(parameters);
        requestOptions.headers = this.getHeaders();
        console.log(data);
        //console.log(data.FirstName);

        console.log(JSON.stringify(data));

        return this.clientHttp.post(apiUrl, data, requestOptions);
    }

    public getApiUrl(urlPath: string) {
        let url = "";
        if (urlPath.startsWith("/"))
            url = this.baseUrl + urlPath;
        else
            url = this.baseUrl + urlPath;

        // console.log("Api Service Generated the following url:" + url);
        return url;
    }

    private getBaseRequestOptions(params: URLSearchParams): RequestOptionsArgs {
        let requestOptions: RequestOptionsArgs = { withCredentials: true };

        if (params != null) {
            // console.log("ApiService params : " + params);
            requestOptions.search = params;
        }

        return requestOptions;
    }

    private getHeaders(): Headers {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        return headers;
    }
}