import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  loginData = {
    "username" : '',
    "password" : ''
  }

  constructor(private snack:MatSnackBar, private loginService:LoginService, private router:Router){}

  ngOnInit(): void {      
  }

  formSubmit(){
    if(this.loginData.username.trim() == '' || this.loginData.username.trim() == null){
      this.snack.open('El nombre de usuario es requerido!!','Aceptar',{
        duration: 3000
      })
      return;
    }
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      this.snack.open('La contraseña es requerida!!','Aceptar',{
        duration: 3000
      })
      return;
    }

    this.loginService.generateToken(this.loginData).subscribe(
      (data:any) => {
        console.log(data); 
        this.loginService.loginUser(data.token);
        this.loginService.getCurrentUser().subscribe((user:any) => {
          this.loginService.setUser(user);
          console.log(user);

          if(this.loginService.getUserRole() == "ADMIN"){
            //Dashboard
            //window.location.href = '/admin';
            this.router.navigate(['admin']);
            this.loginService.loginStatusSubject.next(true);
          } 
          else if(this.loginService.getUserRole() == "NORMAL"){
            //uSER-dASHBOARD
            //window.location.href = '/user-dashboard';
            this.router.navigate(['user-dashboard']);
            this.loginService.loginStatusSubject.next(true);
          }
          else{
            this.loginService.logout();
          }
        })
      },(error) => {
        console.log(error);
        this.snack.open('Detalles invalidos , vuelva a intentar!!','Aceptar',{
          duration: 3000
        })
      }
    )
  }
}
