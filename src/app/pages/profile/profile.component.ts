import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardActions } from "@angular/material/card";


@Component({
  selector: 'app-profile',
  imports: [MatListModule, MatButtonModule, MatCard, MatCardContent, MatCardActions],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
