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
    path: 'yailin.herokuapp.com/libretas', component: LibretasComponent
  },
  { 
    path: 'yailin.herokuapp.com/libreta-bolsillo/:material', component: LibretaBolsilloComponent
  },
  { 
    path: 'yailin.herokuapp.com/libreta-bolsillo', component: LibretaBolsilloComponent
  },
  { 
    path: 'yailin.herokuapp.com/libreta-media-carta/:material', component: LibretaMediaCartaComponent
  },
  { 
    path: 'yailin.herokuapp.com/libreta-media-carta', component: LibretaMediaCartaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
