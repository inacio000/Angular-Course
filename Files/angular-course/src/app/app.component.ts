import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Inacio';

  userData = {
    email: 'inacio@gmail.com',
    role: 'Admin'
  }
  
  title = 'angular-course';
}
