import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Llamada } from '../../Models/llamadas.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IngresosService {

  llamadas: Observable<Llamada[]>;

  private llamadasCollection: AngularFirestoreCollection<Llamada>;

  constructor(private readonly afs: AngularFirestore) {
    this.llamadasCollection = afs.collection<Llamada>('llamadas');
    this.getLlamadas();
   }

   onEliminarLlamada(llamadaID: string): Promise<void>{
     return new Promise (async (resolve, reject) => {
       try{
         const result = await this.llamadasCollection.doc(llamadaID).delete();
         resolve(result);
       }catch (err) {
         reject(err.message);
       }
     });
   }

   onGuardarLlamada(llamada: Llamada, llamadaID: string): Promise<void>{
     return new Promise( async (resolve, reject) => {
       try{
         const id = llamadaID || this.afs.createId();
         const data = {id, ...llamada};
         const result = await this.llamadasCollection.doc(id).set(data);
         resolve(result);
       } catch (err) {
         reject(err.message);
       }
     });
   }

   /* private getLlamadas(): void{
     this.llamadas = this.llamadasCollection.snapshotChanges().pipe(
       map(actions => actions.map(a => a.payload.doc.data() as Llamada))
     );
   } */

   getLlamadas(): Observable<Llamada[]>{
    return this.llamadasCollection.snapshotChanges().pipe(
    map(actions => actions.map(
      a => {
        const data = a.payload.doc.data() as Llamada;
        const id = a.payload.doc.id;
        return {id, ...data};
      }
    )));
 }
}
