import { Component, OnInit } from '@angular/core';
import { MatCard } from "@angular/material/card";
import { MatList, MatListSubheaderCssMatStyler, MatListItem } from "@angular/material/list";
import { CommonModule } from '@angular/common';
import { MatButton } from "@angular/material/button";
import { MatDividerModule } from '@angular/material/divider';
import { CategoriaService } from '../../../services/categoria.service';
import Swal from 'sweetalert2';
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-view-categorias',
  imports: [MatCard, MatList, MatListSubheaderCssMatStyler, MatListItem, CommonModule, MatButton, MatDividerModule, MatIcon, RouterLink],
  templateUrl: './view-categorias.component.html',
  styleUrl: './view-categorias.component.css'
})
export class ViewCategoriasComponent implements OnInit {

  categorias:any = [
    
  ]

  constructor(private categoriaService:CategoriaService){}

  ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(
        (dato:any) => {
          this.categorias = dato;
          console.log(this.categorias);
        },
        (error) => {
          console.log(error);
          Swal.fire('Error !!',' al cargar las categorias','error');
        }
      )
  }
}
