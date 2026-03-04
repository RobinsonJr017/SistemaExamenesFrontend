import { Component, OnInit } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatList, MatListSubheaderCssMatStyler, MatListItem } from "@angular/material/list";
import { CommonModule } from '@angular/common';
import { MatButton } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-view-categorias',
  imports: [MatCard, MatList, MatListSubheaderCssMatStyler, MatListItem, CommonModule, MatButton, MatDividerModule],
  templateUrl: './view-categorias.component.html',
  styleUrl: './view-categorias.component.css'
})
export class ViewCategoriasComponent implements OnInit {

  categorias = [
    {
      categoriaId : 1,
      titulo : 'Lenguajes de programacion',
      descripcion : 'Esta es una categoria prueba'
    },
    {
      categoriaId : 1,
      titulo : 'Lenguajes de programacion',
      descripcion : 'Esta es una categoria prueba'
    },
    {
      categoriaId : 1,
      titulo : 'Lenguajes de programacion',
      descripcion : 'Esta es una categoria prueba'
    },
    {
      categoriaId : 1,
      titulo : 'Lenguajes de programacion',
      descripcion : 'Esta es una categoria prueba'
    },
  ]

  constructor(){}

  ngOnInit(): void {
      
  }
}
