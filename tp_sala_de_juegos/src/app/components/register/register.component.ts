import { Component, OnDestroy, OnInit } from '@angular/core';
import { BdService } from '../../services/bd.service';
import { Usuario } from '../../class/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { confirmarClave, usuarioExiste, validarCampos } from '../../validacion/validaciones';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit, OnDestroy
{
  form!: FormGroup;
  constructor(private BdService: BdService, private router: Router) {}

  suscripcion!: Subscription;
  listado: any[] = [];
  campos: boolean = false;

  home: boolean = false;

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
      repiteClave: new FormControl("", Validators.required),
     }, [confirmarClave(), Validators.nullValidator]);
  }

  ngOnDestroy()
  {
    this.suscripcion.unsubscribe();
  }

  guardar()
  {
    if(validarCampos(this.nombre?.value, this.usuario?.value, this.clave?.value, this.repiteClave?.value))
    {
      this.campos = false;
      this.home = true;
      this.BdService.guardar(new Usuario(this.nombre!.value, this.usuario!.value, ' ', this.clave!.value));

      this.nombre?.disable(this.nombre?.value);
      this.usuario?.disable(this.usuario?.value);
      this.clave?.disable(this.clave?.value);
      this.repiteClave?.disable(this.repiteClave?.value);
    }
    else
    {
      this.campos = true;
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
