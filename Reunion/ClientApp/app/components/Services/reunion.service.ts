/// <reference path="../models/profile.ts" />
import { Injectable } from '@angular/core';
import { SocialUser } from "angular4-social-login";
import { Profile } from '../models/profile';
@Injectable()

export class ReunionService {
    socialUser: SocialUser;
    isLoggedIn: boolean = false;
    profile: Profile;
    constructor() { }
}