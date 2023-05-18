import { Component, OnInit } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})

export class MayorMenorComponent implements OnInit
{
  static path: string = '/assets/img/cartas/';
  constructor(private bdService: BdService){  }

  numeroActual = this.obtenerRandom();
  img = `${this.path}${this.numeroActual}.png`;

  usuario!: any;
  gano = false;
  perdio = false;

  get path()
  {
    return MayorMenorComponent.path;
  }

  ngOnInit()
  {
    //this.usuario = this.bdService.traerUsuarioIniciado();
  }

  obtenerRandom()
  {
    return Math.floor(Math.random() * 12);
  }

  mayor() : void | number
  {
    let mayor = this.obtenerRandom();
    this.img = `${this.path}${mayor}.png`;
    if(this.numeroActual < mayor)
    {
      this.perdio = false;
      this.gano = true;
      this.numeroActual = mayor;
      return 0;
    }
    this.perdio = true;
    this.gano = false;
    this.numeroActual = mayor;
  }

  menor() : void | number
  {
    let menor = this.obtenerRandom();
    this.img = `${this.path}${menor}.png`;
    if(this.numeroActual > menor)
    {
      this.perdio = false;
      this.gano = true;
      this.numeroActual = menor;
      return 0;
    }
    this.perdio = true;
    this.gano = false;
    this.numeroActual = menor;
  }

}
