import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly loginURL = 'https://burger-queen-api-dusky.vercel.app';

  constructor() { }

  login(){

  }
}
