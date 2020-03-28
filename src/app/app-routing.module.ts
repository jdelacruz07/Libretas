import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibretasComponent } from './libretas/libretas.component';
import { LibretaBolsilloComponent } from './libreta-bolsillo/libreta-bolsillo.component'
import { LibretaMediaCartaComponent } from './libreta-media-carta/libreta-media-carta.component';

const routes: Routes = [
{ path: 'libretas', component: LibretasComponent}, 
{ path: 'libreta-bolsillo', component: LibretaBolsilloComponent},
{ path: 'libreta-media-carta', component: LibretaMediaCartaComponent},
{ path: '',
  redirectTo: 'libretas',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
