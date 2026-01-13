import { Component } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, RouterLink, MatIconModule, MatCardModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
