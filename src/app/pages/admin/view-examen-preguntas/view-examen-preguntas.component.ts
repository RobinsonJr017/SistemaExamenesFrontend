import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatDivider } from "@angular/material/divider";
import { MatCard, MatCardContent } from '@angular/material/card'; // <-- Importamos los subcomponentes específicos
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-examen-preguntas',
  imports: [MatCardModule, CommonModule, MatDivider, MatCardContent, MatCard],
  templateUrl: './view-examen-preguntas.component.html',
  styleUrl: './view-examen-preguntas.component.css'
})
export class ViewExamenPreguntasComponent implements OnInit {
  
  examenId:any;
  titulo:any;
  preguntas:any = [];

  constructor(private route:ActivatedRoute, private preguntaService:PreguntaService){ }

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
}
