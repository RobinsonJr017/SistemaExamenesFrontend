import { Component, OnInit } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButton } from "@angular/material/button"; 
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-examen',
  imports: [MatCard, MatFormField, MatLabel, MatInput, MatSlideToggleModule, FormsModule, MatSelectModule, CommonModule, MatButton, JsonPipe],
  templateUrl: './add-examen.component.html',
  styleUrl: './add-examen.component.css'
})
export class AddExamenComponent implements OnInit{

  categorias:any = [];

  examenData = {
    titulo:'',
    descripcion:'',
    puntosMaximos:'',
    numeroDePreguntas:'',
    activo:true,
    categoria:{
      categoriaId:''
    }
  }

  constructor(private categoriaService:CategoriaService){ }

  ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(
        (dato:any) => {
          this.categorias = dato;
          console.log(this.categorias);
        }, (error) => {
          console.log(error);
          Swal.fire('Error !!','Error al cargar los datos','error');
        }
      )
  }
}
