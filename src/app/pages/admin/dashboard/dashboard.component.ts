import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
//import { MatListModule } from "@angular/material/list";
//import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
