import { LocationStrategy, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import Swal from 'sweetalert2';
import { MatDivider } from "@angular/material/divider";
import { MatButton } from "@angular/material/button";
import { CommonModule } from '@angular/common'; // Requerido para *ngFor
import { MatCardModule } from '@angular/material/card'; // Requerido para mat-card
import { FormsModule } from '@angular/forms'; //Para usar ngMOdel
@Component({
  selector: 'app-start',
  imports: [NgIf, MatDivider, MatButton, CommonModule, MatCardModule, FormsModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit{

  examenId:any;
  preguntas:any;
  puntosConseguidos = 0;
  respuestasCorrectas = 0;
  intentos = 0;

  esEnviado = false;

  constructor(
    private LocationSt:LocationStrategy,
    private route:ActivatedRoute,
    private preguntaService:PreguntaService
  ) { }

  ngOnInit(): void {
      this.prevenirElBotonDeRetroceso();
      this.examenId = this.route.snapshot.params['examenId'];
      console.log(this.examenId);
      this.cargarPreguntas();
      
  }

  cargarPreguntas(){
    this.preguntaService.listarPreguntasDelExamenParaLaPrueba(this.examenId).subscribe(
      (data:any) => {
        console.log(data);
        this.preguntas = data;

        this.preguntas.forEach((p:any) => {
          p['respuestaDada'] = '';
        })
        console.log(this.preguntas);
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','al cargar las preguntas de la prueba','error');
      }
    )
  }

  prevenirElBotonDeRetroceso(){
    history.pushState(null, null!,location.href);
    this.LocationSt.onPopState(() => {
      history.pushState(null, null!,location.href);
    })
  }

  enviarCuestionario(){
    Swal.fire({
          title:'¿Quieres enviar el examen?',
          showCancelButton:true,
          cancelButtonText:'Cancelar',
          confirmButtonText:'Enviar',
        }).then((result) => {
          if(result.isConfirmed){
            this.esEnviado = true;
            this.preguntas.forEach((p:any) => {
              if(p.respuestaDada == p.respuesta){
                this.respuestasCorrectas ++;
                let puntos = this.preguntas[0].examen.puntosMaximos/this.preguntas.length;
                this.puntosConseguidos += puntos;
              }
              if(p.respuestaDada.trim() != ''){
                this.intentos ++;
              }
            })
            console.log("Respuestas correctas : " + this.respuestasCorrectas);
            console.log("Puntos conseguidos : " + this.puntosConseguidos);
            console.log("Intentos : " + this.intentos);
            
            console.log(this.preguntas);
          }
        })
  }
}
