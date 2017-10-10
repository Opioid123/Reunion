/// <reference path="components/services/api.service.ts" />
import { NgModule, ModuleWithProviders  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { SocialLoginModule, AuthServiceConfig, AuthService } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './components/services/authentication.service';

import { FileService } from './components/services/file.service';
import { ReunionService } from './components/services/reunion.service';
import { ApiService } from './components/services/api.service';
import { ValidateSelectOption } from './components/validators/selectvalidator.component';

let config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("840961498498-tf29eja9rnj3117u2e2sllsca1tqn5oi.apps.googleusercontent.com")
    },
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("141214966487855")
    }
]);


@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared,
        SocialLoginModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        ReunionService,
        FileService,
        AuthService,
        AuthenticationService,
        ApiService,
        {
            provide: 'BASE_URL', useFactory: getBaseUrl
        },
        { provide: AuthServiceConfig, useFactory: provideConfig },
        { provide: ValidateSelectOption, useValue: ValidateSelectOption}
    ]
})

export class AppModule {
    public static initialize(config: AuthServiceConfig): ModuleWithProviders {

        return {

            ngModule: SocialLoginModule,
            providers: [
                {
                    provide: AuthServiceConfig,
                    useValue: provideConfig
                }
            ]
        };
    }
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

export function provideConfig() {
    return config;
}