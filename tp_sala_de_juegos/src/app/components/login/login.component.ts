import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { BdService } from 'src/app/services/bd.service';
import { usuarioExiste } from 'src/app/validacion/validaciones';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy
{
  constructor(private BdService: BdService){}

  listado: any[] = [];
  suscripcion!: Subscription;
  form!: FormGroup;
  home: boolean = false;
  incorrect: boolean = false;

  @Output() onEnviarUsuario: EventEmitter<any> = new EventEmitter;

  ngOnInit()
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
        clave: new FormControl("", Validators.minLength(4)),
       }, [Validators.required]);
  }

  ngOnDestroy()
  {
    this.suscripcion.unsubscribe();
  }

  iniciarSesion()
  {
    for (let user of this.listado)
    {
      if(user.usuario == this.usuario!.value)
      {
        if(user.clave == this.clave!.value)
        {
          this.onEnviarUsuario.emit(user);
          this.BdService.usuarioIniciado(user);
          this.usuario?.disable(this.usuario?.value);
          this.clave?.disable(this.clave?.value);
          this.home = true;
          break;
        }
      }
    }
    this.incorrect = true;
  }

  get usuario()
  {
    return this.form.get('usuario');
  }

  get clave()
  {
    return this.form.get('clave');
  }

}
