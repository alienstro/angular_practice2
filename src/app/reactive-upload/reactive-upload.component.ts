import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-upload',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-upload.component.html',
  styleUrl: './reactive-upload.component.css'
})
export class ReactiveUploadComponent {
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  uploadForm?: FormGroup;

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      profile: [''],
      fName: ['']
    });
  }

  onFileSelect(event: any) {
    const file = event.target.files[0]; 
    console.log(file);
  }


}
