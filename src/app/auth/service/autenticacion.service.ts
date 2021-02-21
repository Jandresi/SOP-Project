import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/Models/user.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { RoleValidator } from '../helpers/roleValidator';

@Injectable({ providedIn: 'root' })
export class AutenticacionService extends RoleValidator {

  public user$: Observable<User>;

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) {

    super();
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges; /* Retorna el usuario */
        }
        return of (null);
      })
    );
   }

  async login(email: string, password: string): Promise<User> {
    try{
      const {user} = await this.afAuth.signInWithEmailAndPassword(
      email,
      password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async logout(): Promise<any> {
    try{
      await this.afAuth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  private updateUserData(user: User): Promise<any> {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      role: 'Contestador'
    };
    return userRef.set(data, {merge: true});
  }
}
