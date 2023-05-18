import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/class/usuario';
import { Chat } from 'src/app/models/chat';
import { BdService } from 'src/app/services/bd.service';
import { MensajesService } from 'src/app/services/mensajes.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit
{
  form!: FormGroup;

  constructor(private bdService: BdService, private mensajesService: MensajesService) {}

  listaMensajes!: any;
  usuarioActual!: Usuario;
  suscripcion!: Subscription;

  ngOnInit(): void
  {
    this.suscripcion = this.mensajesService.traerMensajes().subscribe((data)=>
    {
      this.listaMensajes = data;
    });
    this.usuarioActual = this.bdService.usuario;

    this.form = new FormGroup(
      {
        mensaje: new FormControl(""),
       });
  }

  ngOnDestroy()
  {
    this.suscripcion.unsubscribe();
  }

  enviarMensaje()
  {
    console.log(this.usuarioActual);
    this.mensajesService.guardar(new Chat(' ', this.mensaje!.value, this.usuarioActual.usuario));
    //this.mensajesService.guardar(new Chat(' ', this.mensaje!.value, 'pepito'));
  }

  get mensaje()
  {
    return this.form.get('mensaje');
  }
}
