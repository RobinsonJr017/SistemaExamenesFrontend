import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { CategoriaService } from '../../../services/categoria.service';
import { FormsModule } from "@angular/forms";
import { MatCard } from "@angular/material/card";
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgIf } from '@angular/common';
import { MatButton } from "@angular/material/button"; 
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-examen',
  imports: [NgIf, FormsModule, MatCard, MatFormField, MatInput, MatSelectModule, MatSlideToggleModule, MatButton],
  templateUrl: './actualizar-examen.component.html',
  styleUrl: './actualizar-examen.component.css'
})
export class ActualizarExamenComponent implements OnInit {

  constructor(
    private route:ActivatedRoute, 
    private examenService:ExamenService,
    private categoriaService:CategoriaService,
    private  router:Router) {}

  examenId = 0;
  examen:any;
  categorias:any;

  ngOnInit(): void {
      this.examenId = this.route.snapshot.params['examenId'];
      this.examenService.obtenerExamen(this.examenId).subscribe(
        (data) => {
          this.examen = data;
          console.log(this.examen);
        },
        (error) => {
          console.log(error);
        }
      )

      this.categoriaService.listarCategorias().subscribe(
        (data:any) => {
          this.categorias = data;
        },
        (error) => {
          alert('Error al cargar las categorias')
        }
      )
  }

  public actualizarDatos(){
    this.examenService.actualizarExamen(this.examen).subscribe(
      (data) => {
        Swal.fire('Examen actualizado','El examen ha sido actualizado con exito','success').then(
          (e) => {
            this.router.navigate(['/admin/examenes']);
          }
        );
      },
      (error) => {
        Swal.fire('Error en el sistema','No se ha podido actualizar el examen','error');
        console.log(error);        
      }
    )
  }
}
