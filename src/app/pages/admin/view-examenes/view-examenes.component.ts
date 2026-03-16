import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import Swal from 'sweetalert2';
import { MatCard, MatCardAvatar, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardContent, MatCardActions } from "@angular/material/card";
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from "@angular/router"; 

@Component({
  selector: 'app-view-examenes',
  imports: [FormsModule, MatCardModule, MatCardAvatar, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardContent, MatCardActions, MatButtonModule, CommonModule, RouterLink],
  templateUrl: './view-examenes.component.html',
  styleUrl: './view-examenes.component.css'
})
export class ViewExamenesComponent implements OnInit{

  examenes : any = [

  ]

  constructor(private examenService:ExamenService){}

  ngOnInit(): void {
      this.examenService.listarCuestionarios().subscribe(
        (dato:any) => {
          this.examenes = dato;
          console.log(this.examenes);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error','Error al cargar los examenes','error');
        }
      )
  }
}
