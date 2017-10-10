/// <reference path="../validators/selectvalidator.component.ts" />
/// <reference path="../validators/selectvalidator.component.ts" />
import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidateSelectOption } from '../validators/selectvalidator.component';
import { Router, RouterModule } from "@angular/router";
import { ReunionService } from '../services/reunion.service';


@Component({
    selector: 'your-story',
    templateUrl: './story.component.html'
})

export class StoryComponent implements OnInit {
    form: FormGroup;
    post: any;
    currentProfession: string;
    currentLocation: string;
    yourStory: string;
    constructor(private fb: FormBuilder, private router: Router, private reunionService: ReunionService) { }
    ngOnInit() {
        if (!this.reunionService.socialUser)
            this.router.navigateByUrl('/unauthorized');
        this.form = this.fb.group({
            currentprofession: ["", [Validators.required, Validators.minLength(3)]],
            currentlocation: ["", [Validators.required, Validators.minLength(3)]],
            yourstory: ["", [Validators.required]]

        });
    }

    addPost(post) {
        this.currentProfession = post.currentprofession;
        this.currentLocation = post.currentlocation;
        this.yourStory = post.yourstory;
        this.reunionService.profile.Profession = post.currentprofession;
        this.reunionService.profile.Location = post.currentlocation;
        this.reunionService.profile.Story = post.yourstory;
        console.log(post);
        this.router.navigateByUrl('/register/jntu/1991');

    }

    Validate(value: string) {
        console.log(value);
    }

    goBack() {
        this.router.navigateByUrl('/profile/jntu/1991');
    }
}

