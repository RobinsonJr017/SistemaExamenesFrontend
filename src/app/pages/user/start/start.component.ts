import { LocationStrategy, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PreguntaService } from '../../../services/pregunta.service';
import Swal from 'sweetalert2';
import { MatDivider } from "@angular/material/divider";
import { MatButton } from "@angular/material/button";
import { CommonModule } from '@angular/common'; // Requerido para *ngFor
import { MatCardModule } from '@angular/material/card'; // Requerido para mat-card

@Component({
  selector: 'app-start',
  imports: [NgIf, MatDivider, MatButton, CommonModule, MatCardModule],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent implements OnInit{

  examenId:any;
  preguntas:any;

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
      },
      (error) => {
        console.log(error);
        Swal.fire('Error al cargar las preguntas de la prueba','error');
      }
    )
  }

  prevenirElBotonDeRetroceso(){
    history.pushState(null, null!,location.href);
    this.LocationSt.onPopState(() => {
      history.pushState(null, null!,location.href);
    })
  }
}
