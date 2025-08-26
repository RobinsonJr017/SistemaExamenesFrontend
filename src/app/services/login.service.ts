import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  //LLama a un metodo del servidor y va generar un token
  public generateToken(loginData:any){
    return this.http.post(`${baserUrl}/generate-token`, loginData);
  }
}
