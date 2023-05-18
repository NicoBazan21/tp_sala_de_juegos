import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MayorMenorComponent } from '../mayor-menor/mayor-menor.component';
import { ChatComponent } from '../chat/chat.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mayorMenor', component: MayorMenorComponent},
  {path: 'chat', component: ChatComponent},

];

//implemento lazy loading en los juegos
//cuando hagan home/preguntados vaya hacia ahi

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
