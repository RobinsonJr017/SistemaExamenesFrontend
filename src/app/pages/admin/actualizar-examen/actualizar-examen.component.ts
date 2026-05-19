import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-examen',
  imports: [],
  templateUrl: './actualizar-examen.component.html',
  styleUrl: './actualizar-examen.component.css'
})
export class ActualizarExamenComponent implements OnInit {

  constructor(private route:ActivatedRoute) {}

  examenId = 0;

  ngOnInit(): void {
      this.examenId = this.route.snapshot.params['examenId'];
      alert(this.examenId);
  }
}
