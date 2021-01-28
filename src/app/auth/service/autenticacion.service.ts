import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import auth from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  public user: User;

  constructor() { }

  login(){}
  logout(){}
  getCurrentUser(){}
}
