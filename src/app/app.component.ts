import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SignupComponent } from "./pages/signup/signup.component";
import { HttpClientModule } from '@angular/common/http';
//import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, RouterOutlet, SignupComponent, HttpClientModule, /*MatSnackBarModule*/],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-examanes-frontend';
}
