import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibretasComponent } from './libretas/libretas.component';
import { LibretaBolsilloComponent } from './libreta-bolsillo/libreta-bolsillo.component'
import { LibretaMediaCartaComponent } from './libreta-media-carta/libreta-media-carta.component';

const routes: Routes = [

  { 
    path: '', component: LibretasComponent
  }, 
  { 
    path: 'yailin.heokuapp.com/libreta-bolsillo', component: LibretaBolsilloComponent
  },
  { 
    path: 'yailin.heokuapp.com/libreta-media-carta', component: LibretaMediaCartaComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
