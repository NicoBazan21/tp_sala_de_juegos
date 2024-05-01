import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    GamesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
  ]
})
export class GamesModule { }
