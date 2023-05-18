import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp_sala_de_juegos';

  enviar: any;

  atraparUsuario($event: any)
  {
    console.log($event);
    this.enviar = $event;
  }
}
