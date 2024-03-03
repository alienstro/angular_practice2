import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { SimpleUploadComponent } from './simple-upload/simple-upload.component';
import { ReactiveUploadComponent } from './reactive-upload/reactive-upload.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SimpleUploadComponent, ReactiveUploadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice2';
}
