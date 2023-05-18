export class Chat
{
  id: string;
  mensaje: string;
  usuario: string;

  constructor(id: string, mensaje: string, usuario: string)
  {
    this.id = id;
    this.mensaje = mensaje;
    this.usuario = usuario;
  }
}
