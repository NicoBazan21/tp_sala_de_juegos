import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogueadoGuard } from './guard/logueado.guard';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {
    path: 'home', loadChildren: () => import('./components/home/home.module')
    .then(m => m.HomeModule),
    canActivate: [LogueadoGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
