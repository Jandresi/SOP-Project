import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AutenticacionService } from '../service/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  async onLogin() {
    const {email, password} = this.loginForm.value;
    try{
      const user = await this.authSvc.login(email, password);
      if (user) {
        /* Redireccionar a la página principal */
        this.router.navigate(['ingresos']);
      }
    } catch (error) {
      console.log(error);
    }
  }

}
