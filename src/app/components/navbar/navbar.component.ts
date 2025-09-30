import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatToolbarModule, MatIconModule, RouterLink, MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  isLoggedIn = false;
  user:any = null;
  
  constructor(public login:LoginService, private router: Router){

  }

  ngOnInit(): void {
    this.isLoggedIn = this.login.isLoggedIn();
    this.user = this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(
      data => {
        this.isLoggedIn = this.login.isLoggedIn();
        this.user = this.login.getUser();
      }
    )
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
