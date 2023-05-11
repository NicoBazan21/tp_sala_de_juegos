export class Usuario
{
  public id = '';
  public nombre: string;
  public usuario: string;
  public clave: string;

  constructor(nombre: string, usuario: string, id: string, clave: string)
  {
    this.id = id;
    this.nombre = nombre;
    this.usuario = usuario;
    this.clave = clave;
  }
}
