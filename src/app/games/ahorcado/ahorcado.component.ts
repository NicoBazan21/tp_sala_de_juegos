import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PalabrasService } from 'src/app/services/palabras.service';
import { ResultadosService } from 'src/app/services/resultados.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit{
  private path: string = '/assets/img/ahorcado/';
  protected abc = [{letra: 'Q', estado: false },{letra: 'W',estado: false},{letra: 'E',estado: false},{letra: 'R',estado: false},{letra: 'T',estado: false},{letra: 'Y',estado: false},{letra: 'U',estado: false},{letra: 'I',estado: false},{letra: 'O',estado: false},{letra: 'P',estado: false},{letra: 'A',estado: false},{letra: 'S',estado: false},{letra: 'D',estado: false},{letra: 'F',estado: false},{letra: 'G',estado: false},{letra: 'H',estado: false},{letra: 'J',estado: false},{letra: 'K',estado: false},{letra: 'L',estado: false},{letra: 'Ñ',estado: false},{letra: 'Z',estado: false},{letra: 'X',estado: false},{letra: 'C',estado: false},{letra: 'V',estado: false},{letra: 'B',estado: false},{letra: 'N',estado: false},{letra: 'M',estado: false},];
  protected palabra: string = '';
  protected palabraObj: any[] = [];
  private vidas = 1;
  protected img = `${this.path}${this.vidas}.png`;
  protected finalizar = false;

  constructor(private palabrasService: PalabrasService,
    private resultadosService: ResultadosService,
    private userService: UserServiceService,
    private router: Router){  }

  ngOnInit()
  {
    this.comenzar();
  }

  onClick($event:any)
  {
    let bandera = false;
    if(this.vidas < 5)
    {
      if(this.palabra.includes($event.srcElement.innerText.toLowerCase()))
      {
        this.palabraObj.forEach(element => {
          if(element.letra == $event.srcElement.innerText.toLowerCase())
          {
            element.estado = false;
            bandera = true;
          }
        });
      }
      if(this.palabraObj.filter(a=>a.estado == false).length == this.palabra.length)
      {
        this.gano();
      }
      else if(bandera == false)
      {
        this.vidas++;
        this.img = `${this.path}${this.vidas}.png`;
      }
      $event.srcElement.disabled = true;      
    }
    else
    {
      if(this.vidas == 5)
      {
        this.vidas++;
        this.img = `${this.path}${this.vidas}.png`;
      }
      this.resultadosService.subirResultado(this.userService.sesionFirestore.mail,0,"Ahorcado","Perdio");
      this.finalizar = true;
      Swal.fire({
        title: 'Ohh!... Te has ahorcado.',
        text: 'La palabra era  \"' + this.palabra +'\".',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo!',
        showCancelButton: true,
        cancelButtonText: "Salir",
        background: '#3b293b',
      }).then((result)=>
      {
        if(result.isConfirmed)
          this.reiniciar();
        else
          this.router.navigateByUrl('/games');
      })
    }
  }
 
  comenzar()
  {
    this.palabrasService.traerPalabra().subscribe((word)=>
    {
      this.palabra = word.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      for(let i = 0; i < this.palabra.length; i++)
      {
        this.palabraObj.push({
          letra: this.palabra[i],
          estado: true
        });
      }
      console.log(this.palabra);
    });
    document.getElementById('revisar')?.querySelectorAll('button').forEach((a)=>a.disabled = false)
  }

  gano()
  {
    Swal.fire({
      title: 'Ganaste!.',
      text: 'El crupier se pasó de 21!.',
      icon: 'success',
      confirmButtonText: 'Finalizar',
      background: '#3b293b',
    }).then((result)=>
    {
      this.reiniciar();
    });
  }

  reiniciar()
  {
    this.vidas = 1;
    this.palabraObj = [];
    this.palabra = '';
    this.finalizar = false;

    this.comenzar();
  }
}
