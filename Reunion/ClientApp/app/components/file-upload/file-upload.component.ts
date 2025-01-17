import { Component, OnInit, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';

import { FileService } from '../services/file.service';

import { ReunionService } from '../services/reunion.service';
import { Router, RouterModule } from "@angular/router";
import { SocialUser } from "angular4-social-login";

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html'
})
export class FileUploadComponent implements OnInit {
      errors: Array<string> =[];
      dragAreaClass: string = 'dragarea';
	  @Input() type: string;
      fileNameValue: string = '';
	  @Input() fileExt: string = "JPG, GIF, PNG";
	  @Input() maxFiles: number = 5;
	  @Input() maxSize: number = 5; // 5MB
      @Output() uploadStatus = new EventEmitter();
      @Output() imageId = new EventEmitter();
      @Input() redirectUrl: string = '';
      fileLoaded: boolean = false;
      
      constructor(private router: Router, private reunionService: ReunionService, private fileService: FileService) { }

      user: SocialUser;
      ngOnInit() {
          this.user = this.reunionService.socialUser;
          if (!this.reunionService.socialUser)
              this.router.navigateByUrl('/unauthorized');
      }

    @ViewChild("fileInput") fileInput;

    onFileChange(event) {
        //let files = event.target.files;
        this.fileNameValue = 'test';
        this.addFile();
    }

    addFile(): void {
        var parameters = {
                name: this.fileNameValue,
                type: this.type
        }
        let fi = this.fileInput.nativeElement;
        if (fi.files && fi.files[0]) {
            let fileToUpload = fi.files[0];
            this.fileService.upload(fileToUpload, parameters)
                .subscribe(res => {
                    this.imageId.emit(res.id);
                    this.fileLoaded = true;
                    console.log(res);
                });
        }
    }
    //onFileChange(event){
    //   let files = event.target.files; 
    //   this.saveFiles(files);
    //}

    //@HostListener('dragover', ['$event']) onDragOver(event) {
    //    this.dragAreaClass = "droparea";
    //    event.preventDefault();
    //}
    
    //@HostListener('dragenter', ['$event']) onDragEnter(event) {
    //    this.dragAreaClass = "droparea";
    //    event.preventDefault();
    //}

    //@HostListener('dragend', ['$event']) onDragEnd(event) {
    //    this.dragAreaClass = "dragarea";
    //    event.preventDefault();
    //}
    
    //@HostListener('dragleave', ['$event']) onDragLeave(event) {
    //    this.dragAreaClass = "dragarea";
    //    event.preventDefault();
    //}
    //@HostListener('drop', ['$event']) onDrop(event) {   
    //    this.dragAreaClass = "dragarea";           
    //    event.preventDefault();
    //    event.stopPropagation();
    //    var files = event.dataTransfer.files;
    //    this.saveFiles(files);
    //}


    //saveFiles(files){
    //  this.errors = []; // Clear error
    //  // Validate file size and allowed extensions
    //  if (files.length > 0 && (!this.isValidFiles(files))) {
    //      this.uploadStatus.emit(false);
    //      return;
    //  }  
     
    //  if (files.length > 0) {
    //        let formData: FormData = new FormData();
    //        for (var j = 0; j < files.length; j++) {
    //            formData.append("file[]", files[j], files[j].name);
    //        }
    //        var parameters = {
    //            projectId: this.projectId,
    //            sectionId: this.sectionId
    //        }
    //        this.fileService.upload(formData, parameters)
    //            .subscribe(
    //            success => {
    //              this.uploadStatus.emit(true);
    //              console.log(success)
    //            },
    //            error => {
    //                this.uploadStatus.emit(true);
    //                this.errors.push(error.ExceptionMessage);
    //            }) 
    //    } 
    //}


    //private isValidFiles(files){
    //   // Check Number of files
    //    if (files.length > this.maxFiles) {
    //        this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
    //        return;
    //    }        
    //    this.isValidFileExtension(files);
    //    return this.errors.length === 0;
    //}

    //private isValidFileExtension(files){
    //    // Make array of file extensions
    //      var extensions = (this.fileExt.split(','))
    //                      .map(function (x) { return x.toLocaleUpperCase().trim() });

    //      for (var i = 0; i < files.length; i++) {
    //          // Get file extension
    //          var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
    //          // Check the extension exists
    //          var exists = true;//extensions.includes(ext);
    //          if (!exists) {
    //              this.errors.push("Error (Extension): " + files[i].name);
    //          }
    //          // Check file size
    //          this.isValidFileSize(files[i]);
    //      }
    //}


    private isValidFileSize(file) {
          var fileSizeinMB = file.size / (1024 * 1000);
          var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
          if (size > this.maxSize)
              this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
    }
}
