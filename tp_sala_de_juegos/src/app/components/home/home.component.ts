import { Component, Input } from '@angular/core';
import { BdService } from 'src/app/services/bd.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private bdService: BdService){}


  mostrar()
  {
    //console.log(this.bdService.traerUsuarioIniciado());
  }
}
