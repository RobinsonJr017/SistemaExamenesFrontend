import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenService } from '../../../services/examen.service';
import { NgFor, NgIf } from '@angular/common';
import { MatCard, MatCardHeader, MatCardContent, MatCardAvatar } from "@angular/material/card";
import { MatCardModule } from '@angular/material/card';
import { MatButton } from "@angular/material/button"; // Para mat-card-subtitle
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-load-examen',
  imports: [NgFor, NgIf, MatCardModule, MatCard, MatCardHeader, MatCardContent, 
    MatCardAvatar, MatButton, RouterLink],
  templateUrl: './load-examen.component.html',
  styleUrl: './load-examen.component.css'
})
export class LoadExamenComponent implements OnInit{

  catId:any;
  examenes:any;

  constructor (
    private route:ActivatedRoute,
    private examenService:ExamenService
  ) { }

  ngOnInit(): void {
      this.route.params.subscribe((params) => {
        this.catId = params['catId'];
        
        if(this.catId == 0){
        console.log("Cargando todos los examenes");
        this.examenService.obtenerExamenesActivos().subscribe(
          (data) => {
            this.examenes = data;
            console.log(this.examenes);
          },
          (error) => {
            console.log(error);
          }
        )
      }
      else {
        console.log("Cargando un examen en especifico");
        this.examenService.obtenerExamenesActivosDeUnaCategoria(this.catId).subscribe(
          (data:any) => {
            this.examenes = data;
            console.log(this.examenes);
          },
          (error) => {
            console.log(error);
          }
        )
      }
      })
  }
}
