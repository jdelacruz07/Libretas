import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { LibretasComponent } from './libretas/libretas.component';
import { LibretaBolsilloComponent } from './libreta-bolsillo/libreta-bolsillo.component';
import { LibretaMediaCartaComponent } from './libreta-media-carta/libreta-media-carta.component';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewLibretaComponent } from './new-libreta/new-libreta.component';
import { ReactiveFormsModule} from '@angular/forms';
import { DescriptionComponent } from './description/description.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LibretasComponent,
    LibretaBolsilloComponent,
    LibretaMediaCartaComponent,
    NewLibretaComponent,
    DescriptionComponent,
    ShoppingCartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
