import { Component, OnInit } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, RouterLink, MatIconModule, MatCardModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  constructor(public login:LoginService, 
    private router:Router){
  
  }
  
  ngOnInit(): void {
    
  }
  
  public logout(): void{
    this.login.logout();
      //window.location.reload(); //opcion1
      //this.router.navigate(['/login']); // 👈 en vez de reload
      // Redirigir al home después de cerrar sesión
    this.router.navigate(['/']).then(() => {
        // Recargar para asegurar que todo se actualice
      window.location.reload();
    });
  }
}
