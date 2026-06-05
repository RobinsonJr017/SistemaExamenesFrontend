import { Component, OnInit } from '@angular/core';
import { ExamenService } from '../../../services/examen.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from "@angular/material/card";
import { MatDivider } from "@angular/material/divider";

@Component({
  selector: 'app-instrucciones',
  imports: [MatCardModule, MatDivider],
  templateUrl: './instrucciones.component.html',
  styleUrl: './instrucciones.component.css'
})
export class InstruccionesComponent implements OnInit {
  
  examenId:any;
  examen:any;

  constructor(
    private examenService:ExamenService,
    private route:ActivatedRoute
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
}
