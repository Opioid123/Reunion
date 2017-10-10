import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

//import {
//    FileUploadModule,
//    DataTableModule,
//    SharedModule } from 'primeng/primeng';

import { ISystemFile } from './systemFile';
import { FilesService } from './files.service';

@Component({
    selector: 'files',
    templateUrl: './files.component.html'
})
export class FilesComponent implements OnInit {
    errorMessage: string;
    fileList: ISystemFile[] = [];

    // Register the service
    constructor(private _FilesService: FilesService) { }

    ngOnInit(): void {
        this.getFiles();
    }

    public getFiles() {
        this.errorMessage = "";
        //Clear Filelist
        this.fileList = [];
        // Call the service
        this._FilesService.getFiles()
            .subscribe((files) => {
                for (let file of files) {
                    this.fileList.push({
                        fileName: file.fileName,
                        filePath: file.filePath
                    });
                }
            },
            error => this.errorMessage = <any>error);
    }

    public onUpload(event) {
        this.getFiles();
    }

    public deleteFile(file: ISystemFile) {
        // Call the service
        this._FilesService.deleteFile(file)
            .subscribe((response) => {
                // Refresh file list
                this.getFiles();
            },
            error => this.errorMessage = <any>error);
    }
}