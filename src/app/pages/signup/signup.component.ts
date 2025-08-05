import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Añade este import

@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {

  public user = {
    username: '',
    password: '',
    nombre: '',
    apellido: '',
    email: '',
    telefono: ''
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      alert('El nombre de usuario es requerido');
      return;
    }
    
    this.userService.anadirUsuario(this.user).subscribe(
      (data) => {
        console.log(data);
        alert('Usuario guardado con éxito');
      }, 
      (error) => { // Corregido el espacio en la arrow function
        console.log(error);
        alert('Ha ocurrido un error en el sistema');
      }
    );
  }
}

