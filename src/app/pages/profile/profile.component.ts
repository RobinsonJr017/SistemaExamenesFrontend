import { Component, OnInit } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardActions } from "@angular/material/card";
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-profile',
  imports: [MatListModule, MatButtonModule, MatCard, MatCardContent, MatCardActions],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  user:any = null;

  constructor(private loginService:LoginService){ }

  ngOnInit(): void {
      this.user = this.loginService.getUser();
      /*this.loginService.getCurrentUser().subscribe(
        (user:any) => {
          this.user = user;
        },
        (error) => {
          alert("error");
        }
      )*/
  }
}
