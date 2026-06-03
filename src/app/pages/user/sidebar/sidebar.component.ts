import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../../services/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { MatIcon } from "@angular/material/icon";
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-sidebar-user',
  imports: [MatListModule, RouterLink, MatIcon, NgFor, MatCardModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  categorias:any;

  constructor (
    private categoriaService:CategoriaService,
    private snack:MatSnackBar
  ) { }

  ngOnInit(): void {
      this.categoriaService.listarCategorias().subscribe(
        (data:any) => {
          this.categorias = data;
        },
        (error) => {
          this.snack.open('Error al cargar las categorias','',{
            duration:3000
          })
          console.log(error);
          
        }
      )
  }

}
