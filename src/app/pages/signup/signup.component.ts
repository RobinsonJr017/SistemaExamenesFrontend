import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // Añade este import
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import  Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule, MatSnackBarModule],
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

  constructor(private userService: UserService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    // Validación completa en el componente
    if (!this.validarUsuario()) {
      return;
    }
    
    this.userService.anadirUsuario(this.user).subscribe({
      next: (data: any) => {
        Swal.fire('Usuario guardado', 'Usuario registrado con éxito', 'success');
      },
      error: (error) => {
        console.error(error);
        const errorMsg = error.error?.message || 'Ha ocurrido un error en el sistema';
        this.mostrarError(errorMsg);
      }
    });
  }

  private validarUsuario(): boolean {
    if (!this.user.username.trim()) {
      this.mostrarError('El nombre de usuario es requerido y debe tener entre 4-20 caracteres');
      return false;
    }
    if (!this.user.password.trim()) {
      this.mostrarError('La contraseña es requerida y debe tener al menos 6 caracteres');
      return false;
    }
    if (!this.user.nombre.trim()) {
      this.mostrarError('El nombre es requerido');
      return false;
    }
    if (!this.user.apellido.trim()) {
      this.mostrarError('El apellido es requerido');
      return false;
    }
    if (!this.user.email.trim()) {
      this.mostrarError('El email es requerido');
      return false;
    }
    if (!this.validarEmail(this.user.email)) {
      this.mostrarError('El email no es válido');
      return false;
    }
    if (!this.user.telefono.trim()) {
      this.mostrarError('El teléfono es requerido');
      return false;
    }
    return true;
  }

  private validarEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  private mostrarError(mensaje: string): void {
    this.snackBar.open(mensaje, 'Aceptar', {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}

