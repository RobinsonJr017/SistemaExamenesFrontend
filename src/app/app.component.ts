import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SignupComponent } from "./pages/signup/signup.component";

@Component({
  selector: 'app-root',
  imports: [MatButtonModule, NavbarComponent, RouterOutlet, SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sistema-examanes-frontend';
}
