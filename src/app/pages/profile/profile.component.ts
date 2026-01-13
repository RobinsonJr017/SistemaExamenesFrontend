import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-profile',
  imports: [MatListModule, MatButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
