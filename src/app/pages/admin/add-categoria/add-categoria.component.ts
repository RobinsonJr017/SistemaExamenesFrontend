import { Component, OnInit } from '@angular/core';
import { MatCardContent } from "@angular/material/card";
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-categoria',
  imports: [MatCardContent, MatCard, MatFormField, MatInput, MatLabel, MatButton, FormsModule],
  templateUrl: './add-categoria.component.html',
  styleUrl: './add-categoria.component.css'
})
export class AddCategoriaComponent implements OnInit{

  categoria = {
    titulo : '',
    descripcion : ''
  }

  constructor(private categoriaService:CategoriaService, private snack:MatSnackBar, private router:Router){}

  ngOnInit(): void {
      
  }

  formSubmit(){
    if (this.categoria.titulo.trim() == '' || this.categoria.titulo == null) {
      this.snack.open("El titulo es requerido !!", "",{
        duration: 3000
      })
      return ;
    }

    this.categoriaService.agregarCategoria(this.categoria).subscribe(
      (dato:any) => {
        this.categoria.titulo = '';
        this.categoria.descripcion = '';
        Swal.fire('Categoria agregada','La categoria ha sido agregada con exito','success')
        this.router.navigate(['/admin/categorias']);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error !!','Error al guardar la categoria','error')
      }
    )
  }
}
