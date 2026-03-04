import { Component } from '@angular/core';
import { MatCardContent } from "@angular/material/card";
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-add-categoria',
  imports: [MatCardContent, MatCard, MatFormField, MatInput, MatLabel, MatButton],
  templateUrl: './add-categoria.component.html',
  styleUrl: './add-categoria.component.css'
})
export class AddCategoriaComponent {

}
