import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormBuilder().group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(15)
        ]
      ],
      password: [
        '',
        Validators.required
      ],
      role: [
        '',
        Validators.required
      ]
    })
  }

  ngOnInit(): void {

  }

  submit() {
    console.log('enviou o form');
    console.log(this.loginForm.valid)
  }
}
