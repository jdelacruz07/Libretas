import { Injectable } from '@angular/core';
import { notebook } from './new-libreta/new-libreta.component';


@Injectable({
  providedIn: 'root'
})
export class BuyNotebookService {

  buyOfNotebooks: notebook;
  
  constructor() { }

  addNotebook (libreta) {
    console.log("Libreta en service para agregar", libreta)
    this.buyOfNotebooks = libreta;
    console.log("Se agrega la Libreta en service ????????????", this.buyOfNotebooks)

  }

  getBuy () {
    console.log("Libretas compradas", this.buyOfNotebooks)
   return this.buyOfNotebooks;
  }
}
