import { Component, OnDestroy, OnInit } from '@angular/core';
import { BdService } from '../services/bd.service';
import { Usuario } from '../class/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { confirmarClave, usuarioExiste, validarCampos } from '../validacion/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy
{
  form!: FormGroup;
  constructor(private BdService: BdService) {}

  suscripcion!: Subscription;
  listado: any[] = [];
  campos: boolean = false;

  ngOnInit(): void
  {
    this.suscripcion = (this.BdService.traer()).subscribe((data) =>
    {
      this.listado = data;
    });

    this.form = new FormGroup(
    {
      usuario: new FormControl("",
      {
        asyncValidators: usuarioExiste(this.BdService),
        updateOn: 'blur'
      }),
      nombre: new FormControl("", [Validators.pattern('^[a-zA-Z]+$')]),
      clave: new FormControl("", Validators.minLength(4)),
      repiteClave: new FormControl("", Validators.required)

     }, [confirmarClave(), Validators.required]);
  }

  ngOnDestroy()
  {
    this.suscripcion.unsubscribe();
  }

  guardar()
  {
    if(validarCampos(this.nombre?.value, this.usuario?.value, this.clave?.value, this.repiteClave?.value))
    {
      this.BdService.guardar(new Usuario(this.nombre!.value, this.usuario!.value, ' ', this.clave!.value));
    }
  }
  get nombre()
  {
    return this.form.get('nombre');
  }

  get usuario()
  {
    return this.form.get('usuario');
  }
  get clave()
  {
    return this.form.get('clave');
  }
  get repiteClave()
  {
    return this.form.get('repiteClave');
  }
}
