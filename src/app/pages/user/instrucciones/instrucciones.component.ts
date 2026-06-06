import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";
import { MatButton } from "@angular/material/button";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instrucciones',
  imports: [MatCardModule, MatDivider, RouterLink, MatButton],
  templateUrl: './instrucciones.component.html',
  styleUrl: './instrucciones.component.css'
})
export class InstruccionesComponent implements OnInit {
  
  examenId:any;
  examen:any;

  constructor(
    private examenService:ExamenService,
    private route:ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
      this.examenId = this.route.snapshot.params['examenId'];
      this.examenService.obtenerExamen(this.examenId).subscribe(
        (data:any) => {
          console.log(data);
          this.examen = data;    
        },
        (error) => {
          console.log(error);
        }
      )
  }

  empezarExamen(){
    Swal.fire({
      title:'¿Quieres comenzar el examen?',
      showCancelButton:true,
      cancelButtonText:'Cancelar',
      confirmButtonText:'Empezar',
      icon:'info'
    }).then((result:any) => {
      if(result.isConfirmed){
        this.router.navigate(['/start/'+this.examenId]);
      }
    })
  }
}
