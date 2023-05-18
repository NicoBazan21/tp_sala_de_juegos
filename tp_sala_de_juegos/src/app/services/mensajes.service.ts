import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, doc, setDoc } from '@angular/fire/firestore';
import { Chat } from '../models/chat';

@Injectable({
  providedIn: 'root'
})
export class MensajesService
{

  constructor(private firestore: Firestore)
  {
  }

  coleccionMensajes: CollectionReference<DocumentData> = collection(this.firestore, 'mensajes');

  guardar(mensaje: Chat)
  {
    const documento = doc(this.coleccionMensajes);
    const id = documento.id;

    setDoc(documento,
      {
        id: id,
        mensaje: mensaje.mensaje,
        usuario: mensaje.usuario,
      });
  }

  traerMensajes()
  {
    const observable = collectionData(this.coleccionMensajes);
    return observable;
  }
}
