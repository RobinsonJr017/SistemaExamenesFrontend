import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router'; // <-- Para la redirección
import { MatCardModule } from '@angular/material/card'; // <-- Para la tarjeta
import { MatIconModule } from '@angular/material/icon'; // <-- Para los iconos

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, RouterLink, MatCardModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}