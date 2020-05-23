import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibretasComponent } from './libretas/libretas.component';
import { LibretaBolsilloComponent } from './libreta-bolsillo/libreta-bolsillo.component'
import { LibretaMediaCartaComponent } from './libreta-media-carta/libreta-media-carta.component';

const routes: Routes = [

  { 
    path: '', redirectTo: 'libretas', pathMatch: 'full'
  },
  { 
    path: 'libretas', component: LibretasComponent
  },
  { 
    path: 'libreta-bolsillo/:material', component: LibretaBolsilloComponent
  },
  { 
    path: 'libreta-media-carta/:material', component: LibretaMediaCartaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
