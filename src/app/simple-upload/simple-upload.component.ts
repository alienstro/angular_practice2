import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-simple-upload',
  standalone: true,
  imports: [],
  templateUrl: './simple-upload.component.html',
  styleUrl: './simple-upload.component.css'
})
export class SimpleUploadComponent {

  constructor(private http: HttpClient) {}

  selectedFile?: File

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];

    console.log(this.selectedFile);
  }

  onUpload() {
    if (this.selectedFile) {
      const uploadData = new FormData();
      uploadData.append('userFile', this.selectedFile, this.selectedFile.name);
      this.http.post('http://localhost/ANGULAR/angular_practice2/fileUpload/upload.php', uploadData, {
        reportProgress: true,
        observe: 'events'
      })
      .subscribe(event => {
        console.log(event);
      });
    }

  }
}
