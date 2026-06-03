import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import Swal from 'sweetalert2';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCard, MatCardSubtitle, MatCardHeader } from "@angular/material/card";
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatButton } from "@angular/material/button"; //Da formato al boton
import { MatInput } from "@angular/material/input"; //Mejora el formulario a nivel general incluido el boton

@Component({
  selector: 'app-actualizar-pregunta',
  imports: [MatFormFieldModule, MatCard, MatCardSubtitle, MatCardHeader, MatCardModule, 
    MatSelectModule, FormsModule, NgIf, MatButton, MatInput],
  templateUrl: './actualizar-pregunta.component.html',
  styleUrl: './actualizar-pregunta.component.css'
})
export class ActualizarPreguntaComponent implements OnInit{

  preguntaId:any = 0;
  pregunta:any;
  examen:any;

  constructor(
    private route:ActivatedRoute,
    private preguntaService:PreguntaService,
    private router:Router
  ) { }

  ngOnInit(): void {
      this.preguntaId = this.route.snapshot.params['preguntaId'];
      this.preguntaService.obtenerPregunta(this.preguntaId).subscribe(
        (data:any) => {
          this.pregunta = data;
          console.log(this.pregunta);
        },
        (error) => {
          console.log(error);
        }
      )
  }

  public actualizarDatosDeLaPregunta(){
    this.preguntaService.actualizarPregunta(this.pregunta).subscribe(
      (data) => {
        Swal.fire('Pregunta actualizada','La pregunta ha sido actualizada con exito','success').then((e) => {
          this.router.navigate(['/admin/ver-preguntas/'+this.pregunta.examen.examenId+'/'+this.pregunta.examen.titulo])
        })
      }
    )
  }
}
