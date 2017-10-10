/// <reference path="components/register/profile.component.ts" />
/// <reference path="components/validators/selectvalidator.component.ts" />
/// <reference path="components/register/studentregister.component.ts" />
/// <reference path="components/collegephotos/collegeimageupload.component.ts" />
/// <reference path="components/collegephotos/collegephotoscarousel.component.ts" />
/// <reference path="components/collegephotos/collegeimageupload.component.ts" />
/// <reference path="components/files/newfile.component.ts" />
/// <reference path="components/services/file.service.ts" />
/// <reference path="components/file-upload/file-upload.component.ts" />
/// <reference path="components/pictures/pictures.component.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { JntuComponent } from './components/jntu/jntu.component';
import { TopheaderComponent } from './components/header/topheader.component';
//import { MenubarModule } from 'primeng/components/menubar/menubar';
import { AuthComponent } from './components/authentication/auth.component';
//import { StepsModule } from 'primeng/primeng';
import { LandingComponent } from './components/landing/landing.component';
import { UnauthorizedComponent } from './components/authentication/unauthorized.component';
import { FilesComponent } from './components/upload/files.component';
//import { FileUploadModule } from 'primeng/primeng';
//import { ButtonModule } from 'primeng/primeng';
//import { MenuItem } from 'primeng/primeng';
//import { GrowlModule } from 'primeng/primeng';
//import { DataTableModule } from 'primeng/primeng';
//import { SharedModule } from 'primeng/primeng';

import { FileUploadComponent } from './components/file-upload/file-upload.component';

import { NewFileComponent } from './components/files/newfile.component'
import { CollegeImageUploadComponent } from './components/collegephotos/collegeimageupload.component'
import { CollegeImageCarouselComponent } from './components/collegephotos/collegephotoscarousel.component'
import { MemoryImageUploadComponent } from './components/memories/memoryimageupload.component'
import { MemoryImageCarouselComponent } from './components/memories/memoryphotoscarousel.component'
import { StudentRegisterComponent } from './components/register/studentregister.component'

//import { FileUploadModule } from 'primeng/components/fileupload/fileupload';
//import { ButtonModule } from 'primeng/components/button/button';
//import { MenuItem } from 'primeng/components/Common/menuitem';
//import { GrowlModule } from 'primeng/components/growl/growl';
//import { DataTableModule } from 'primeng/components/datatable/datatable';
//import { SharedModule } from 'primeng/components/common/shared';

import { PicturesComponent } from './components/pictures/pictures.component';
import { DirectoryComponent } from './components/directory/directory.component';
import { DeptDirectoryComponent } from './components/deptdirectory/deptdirectory.component';
import { ProfileComponent } from './components/register/profile.component';
import { StoryComponent } from './components/register/story.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        JntuComponent,
        TopheaderComponent,
        AuthComponent,
        LandingComponent,
        UnauthorizedComponent, 
        FilesComponent,
        FileUploadComponent,
        NewFileComponent,
        CollegeImageUploadComponent,
        CollegeImageCarouselComponent,
        MemoryImageUploadComponent,
        MemoryImageCarouselComponent,
        PicturesComponent,
        DirectoryComponent,
        DeptDirectoryComponent,
        StudentRegisterComponent,
        ProfileComponent,
        StoryComponent

    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        //MenubarModule,
        //StepsModule,
        //FileUploadModule,
        //ButtonModule, 
        //GrowlModule,
        //DataTableModule,
        //SharedModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home/jntu/1991', pathMatch: 'full' },
            { path: 'profile/jntu/1991', component: ProfileComponent },
            { path: 'yourstory/jntu/1991', component: StoryComponent },
            { path: 'register/jntu/1991', component: StudentRegisterComponent },
            { path: 'landing/jntu/1991', component: LandingComponent },
            { path: 'home/:college/:year', component: HomeComponent },
            { path: 'jntu/jntu/1991', component: JntuComponent },
            { path: 'auth/jntu/1991', component: AuthComponent },
            { path: 'counter/jntu/1991', component: CounterComponent },
            { path: 'unauthorized', component: UnauthorizedComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'files', component: NewFileComponent },
            { path: 'collegeimageupload/jntu/1991', component: CollegeImageUploadComponent },
            { path: 'collegeimagecarousel/jntu/1991', component: CollegeImageCarouselComponent },
            { path: 'memoryimageupload/jntu/1991', component: MemoryImageUploadComponent },
            { path: 'memoryimagecarousel/jntu/1991', component: MemoryImageCarouselComponent },
            { path: 'pictures/jntu/1991', component: PicturesComponent },
            { path: 'directory/jntu/1991', component: DirectoryComponent },
            { path: 'deptdirectory/jntu/1991/:dept', component: DeptDirectoryComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        {
            provide: 'BASE_URL', useFactory: getBaseUrl
        }
    ]
}) 
export class AppModuleShared {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
