import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDivider } from "@angular/material/divider";
import { MatCard, MatCardContent } from '@angular/material/card'; // <-- Importamos los subcomponentes específicos
import { MatButton } from "@angular/material/button";
import { RouterLink, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-examen-preguntas',
  imports: [MatCardModule, CommonModule, MatDivider, MatCardContent, MatCard, MatButton, RouterLink],
  templateUrl: './view-examen-preguntas.component.html',
  styleUrl: './view-examen-preguntas.component.css'
})
export class ViewExamenPreguntasComponent implements OnInit {
  
  examenId:any;
  titulo:any;
  preguntas:any = [];

  constructor(private route:ActivatedRoute, 
    private preguntaService:PreguntaService,
    private snack:MatSnackBar){ }

  ngOnInit(): void {
  // Usamos paramMap para leer de forma segura parámetros con espacios o caracteres especiales
  this.route.paramMap.subscribe(params => {
    this.examenId = params.get('examenId');
    this.titulo = params.get('titulo');

    console.log("ID recuperado:", this.examenId);
    console.log("Título recuperado:", this.titulo);

    if (this.examenId) {
      this.preguntaService.listarPreguntasDelExamen(this.examenId).subscribe(
        (data: any) => {
          console.log("Preguntas del backend:", data);
          this.preguntas = data;
        },
        (error) => {
          console.log("Error al pedir preguntas:", error);
        }
      );
    }
  });
}
  
  eliminarPregunta(preguntaId:any){
    Swal.fire({
      title:'Eliminar pregunta',
      text:'Estas seguro , quieres eliminar esta pregunta?',
      icon:'warning',
      showCancelButton:true,
      confirmButtonColor:'#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText:'Eliminar',
      cancelButtonText:'Cancelar'
    }).then((resultado) => {
      if(resultado.isConfirmed){
        this.preguntaService.eliminarPregunta(preguntaId).subscribe(
          (data) => {
            this.snack.open('Pregunta eliminada','',{
              duration: 3000
            })
            this.preguntas = this.preguntas.filter((pregunta:any) => pregunta.preguntaId != preguntaId);
          },
          (error) => {
            this.snack.open('Error al eliminar la pregunta','',{
              duration:3000
            })
            console.log(error);
          }
        )
      }
    }
  )
  }
}
