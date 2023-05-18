import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private bdServie: BdService){}

  router: Router = new Router();
  login: number = 0;
  sesionIniciada: boolean = false;
  usuario!: any;

  @Output() onReEnviarUsuario: EventEmitter<any> = new EventEmitter;

  atraparUsuario($event: any)
  {
    this.usuario = $event;
    console.log(this.usuario);
    this.login = 2;
    this.sesionIniciada = true;
    this.onReEnviarUsuario.emit(this.usuario);
    this.router.navigateByUrl('home');

  }

  irLogin()
  {
    this.login = 0;
  }

  irRegistro()
  {
    this.login = 1;
  }

  logout()
  {
    this.sesionIniciada = false;
    this.bdServie.sesionIniciada = false;
    this.login = 0;
    this.router.navigateByUrl('');
  }
}
