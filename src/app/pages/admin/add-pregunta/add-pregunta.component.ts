import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe, NgIf } from '@angular/common';
import { MatCard, MatCardSubtitle, MatCardHeader } from "@angular/material/card";
import { MatCardModule } from '@angular/material/card';
import { MatInput } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from "@angular/material/button";
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { PreguntaService } from '../../../services/pregunta.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-pregunta',
  imports: [JsonPipe, MatCard, MatCardSubtitle, MatCardHeader, MatCardModule,
    MatInput, MatFormFieldModule, MatButton, MatSelectModule, FormsModule, NgIf],
  templateUrl: './add-pregunta.component.html',
  styleUrl: './add-pregunta.component.css'
})
export class AddPreguntaComponent implements OnInit{

  examenId:any;
  titulo:any;
  pregunta:any = {
    examen : {},
    contenido : '',
    opcion1 : '',
    opcion2 : '',
    opcion3 : '',
    opcion4 : '',
    respuesta : ''
  }

  constructor(
    private route:ActivatedRoute,
    private preguntaService:PreguntaService){
  }

  ngOnInit(): void {
    this.examenId = this.route.snapshot.params['examenId'];
    this.titulo = this.route.snapshot.params['titulo'];
    this.pregunta.examen['examenId'] = this.examenId;
  }

  formSubmit(){
    if(this.pregunta.contenido.trim() == '' || this.pregunta.contenido == null){
      return;
    }
    if(this.pregunta.opcion1.trim() == '' || this.pregunta.opcion1 == null){
      return;
    }
    if(this.pregunta.opcion2.trim() == '' || this.pregunta.opcion2 == null){
      return;
    }
    if(this.pregunta.opcion3.trim() == '' || this.pregunta.opcion3 == null){
      return;
    }
    if(this.pregunta.opcion4.trim() == '' || this.pregunta.opcion4 == null){
      return;
    }
    if(this.pregunta.respuesta.trim() == '' || this.pregunta.respuesta == null){
      return;
    }

    this.preguntaService.guardarPregunta(this.pregunta).subscribe(
      (data) => {
        Swal.fire('Pregunta guardada','La pregunta ha sido agregada con exito en la base de datos','success');
        this.pregunta.contenido = '';
        this.pregunta.opcion1 = '';
        this.pregunta.opcion2 = '';
        this.pregunta.opcion3 = '';
        this.pregunta.opcion4 = '';
        this.pregunta.respuesta = '';
      }, (error) => {
        Swal.fire('Error', 'Error al guardar la pregunta en la base de datos','error');
        console.log(error);
      }
    )
  }

}
