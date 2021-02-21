import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../auth/service/autenticacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public user$: Observable<any> = this.authSvc.afAuth.user;

  constructor(private authSvc: AutenticacionService, private router: Router) { }

  ngOnInit(): void {
  }

  async onLogout(): Promise<void> {
    try{
      await this.authSvc.logout();
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
    }
  }

}
