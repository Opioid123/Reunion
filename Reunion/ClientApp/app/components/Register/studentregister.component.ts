/// <reference path="../validators/selectvalidator.component.ts" />
/// <reference path="../validators/selectvalidator.component.ts" />
/// <reference path="../services/api.service.ts" />
/// <reference path="../models/profile.ts" />
import { Component, Input, OnChanges, SimpleChange, OnInit, Injectable, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {ValidateSelectOption} from '../validators/selectvalidator.component';
import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ApiService } from '../services/api.service';
import { Profile } from '../models/profile';
@Component({
    selector: 'register-student',
    templateUrl: './studentregister.component.html',
    styleUrls: ['./studentregister.component.css']
})

export class StudentRegisterComponent implements OnInit{
    form: FormGroup;
    post: any;
    firstName: string;
    lastName: string;
    middleInitial: string;
    branch: string;
    yearjoined: string;
    rollnumber: string;
    phonenumber: string;
    profilePostUrl: string;
    profileData: Profile;
    constructor(private fb: FormBuilder, private reunionService: ReunionService, private router: Router, private http: Http, @Inject('BASE_URL') baseUrl: string, private apiService: ApiService) {
        this.profilePostUrl = baseUrl + 'api/Profile/Student'
    }
    ngOnInit() {
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
        this.form = this.fb.group({
            firstname: ["", [Validators.required, Validators.minLength(3)]],
            lastname: ["", [Validators.required, Validators.minLength(3)]],
            middleinitial: [""],
            branch: ["", [Validators.required, ValidateSelectOption]],
            yearjoined: ["", [Validators.required, ValidateSelectOption]],
            rollnumber: [""],
            phonenumber: ["", [Validators.required]]

        });
    }

    addPost(post) {
        this.reunionService.profile.FirstName = post.firstname;
        this.reunionService.profile.LastName = post.lastname;
        this.reunionService.profile.MiddleInitial = post.middleinitial;
        this.reunionService.profile.RollNumber = post.rollnumber;
        this.reunionService.profile.PhoneNumber = post.phonenumber;
        this.reunionService.profile.Branch = post.branch;
        this.reunionService.profile.YearOfJoining = post.yearjoined;


        
        //this.profileData = {
        //    "id": "",
        //    "ImageId": this.reunionService.profile.ImageId,
        //    "FirstName": this.reunionService.profile.FirstName,
        //    "lastName": this.reunionService.profile.lastName,
        //    "middleInitial": this.reunionService.profile.middleInitial,
        //    "rollNumber": this.reunionService.profile.rollNumber,
        //    "phoneNumber": this.reunionService.profile.phoneNumber,
        //    "branch": this.reunionService.profile.branch,
        //    "yearOfJoining": this.reunionService.profile.yearOfJoining,
        //    "email": this.reunionService.profile.email,
        //    "location": this.reunionService.profile.location,
        //    "story": this.reunionService.profile.story,
        //    "activated": false,
        //    "profession": this.reunionService.profile.profession,
        //    "admin": false,
        //    "code": "",
        //    "placeHolder3": ""
        //}

        //this.profileData = new Profile('', this.reunionService.profile.ImageId, this.reunionService.profile.FirstName, this.reunionService.profile.LastName,
        //    this.reunionService.profile.MiddleInitial, this.reunionService.profile.Branch, this.reunionService.profile.Location, this.reunionService.profile.Email,
        //    false, this.reunionService.profile.RollNumber, this.reunionService.profile.PhoneNumber, this.reunionService.profile.Story, '', this.reunionService.profile.Profession,
        //    this.reunionService.profile.YearOfJoining, false, '');
        let profilePost = '{' +
            '"ImageId":' + '"' + this.reunionService.profile.ImageId + '", ' + 
            '"FirstName":' + '"' + this.reunionService.profile.FirstName + '", ' + 
            '"LastName":' + '"' + this.reunionService.profile.LastName + '", ' + 
            '"MiddleInitial":' + '"' + this.reunionService.profile.MiddleInitial + '", ' + 
            '"RollNumber":' + '"' + this.reunionService.profile.RollNumber + '", ' + 
            '"PhoneNumber":' + '"' + this.reunionService.profile.PhoneNumber + '", ' + 
            '"Branch":' + '"' + this.reunionService.profile.Branch + '", ' + 
            '"YearOfJoining":' + '"' + this.reunionService.profile.YearOfJoining + '", ' + 
            '"Email":' + '"' + this.reunionService.profile.Email + '", ' + 
            '"Location":' + '"' + this.reunionService.profile.Location + '", ' + 
            '"Story":' + '"' + this.reunionService.profile.Story + '", ' + 
            '"Activated":' + '"' + this.reunionService.profile.Activated + '", ' + 
            '"Profession":' + '"' + this.reunionService.profile.Profession + '", ' + 
            '"ImageId":' + '"' + this.reunionService.profile.ImageId + '", ' + 
            '"Admin":' + '"' + this.reunionService.profile.Admin + '"' 

        profilePost = profilePost + '}';
        console.log(profilePost);
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
        //options.params = parameters;
        console.log(options);
        console.log(this.profilePostUrl);
        //console.log(input);
        console.log(this.profileData);

        //return this.http.post(this.profilePostUrl, this.reunionService.profile)
        //    .map(response => response.json())
        //    .catch(error => Observable.throw(error));
        //let input = new FormData();
        //input.append("ImageId", this.reunionService.profile.ImageId);
        //input.append("FirstName", this.reunionService.profile.FirstName);
        //input.append("LastName", this.reunionService.profile.LastName);
        //input.append("MiddleInitial", this.reunionService.profile.MiddleInitial);
        //input.append("RollNumber", this.reunionService.profile.RollNumber);
        //input.append("PhoneNumber", this.reunionService.profile.PhoneNumber);
        //input.append("Branch", this.reunionService.profile.Branch);
        //input.append("YearOfJoining", this.reunionService.profile.YearOfJoining);
        //input.append("Email", this.reunionService.profile.Email);
        //input.append("Location", this.reunionService.profile.Location);
        //input.append("Story", this.reunionService.profile.Story);
        //input.append("Activated", "false");
        //input.append("Profession", this.reunionService.profile.Profession);
        //input.append("Admin", "false");

        this.apiService.postApiData("api/Profile/Student", profilePost, options).subscribe(result => {
            console.log(result);
            if (result.status === 201) {
                console.log(result);
            }
        }, error => console.log(error)
        );

    }}

