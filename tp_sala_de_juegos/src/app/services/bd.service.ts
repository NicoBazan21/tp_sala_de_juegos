import { outputAst } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import {Usuario} from '../class/usuario';
import { Observable } from 'rxjs';

const API_URL = "https://jsonplaceholder.typicode.com/users";

@Injectable({
  providedIn: 'root'
})

export class BdService {

  constructor(private firestore: Firestore)
  {
  }

  coleccionUsuarios: CollectionReference<DocumentData> = collection(this.firestore, 'usuarios');

  guardar(user: Usuario)
  {
    const documento = doc(this.coleccionUsuarios);
    const id = documento.id;

    setDoc(documento,
      {
        id: id,
        nombre: user.nombre,
        usuario: user.usuario,
        contrasenia: user.clave
      });
  }

  traer()
  {
    const observable = collectionData(this.coleccionUsuarios);
    return observable;
  }

  TraerUsuario(nombre: string)
  {
    return this.traer();
  }

  modificar(user: Usuario)
  {
    const coleccion = collection(this.firestore, 'usuarios');
    const documento = doc(this.coleccionUsuarios, user.id);
    updateDoc(documento, {...user});
  }

  eliminar(user: Usuario)
  {
    const documento = doc(this.coleccionUsuarios, user.id);
    deleteDoc(documento);
  }

}
