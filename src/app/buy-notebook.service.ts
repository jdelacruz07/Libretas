import { Injectable } from '@angular/core';
import { notebook } from './description/description.component';



@Injectable({
  providedIn: 'root'
})
export class BuyNotebookService {

  buyOfNotebooks: notebook[] = [];
  newNotebook: notebook;
  
  constructor() { }

  deleteNotebook (index) {
    this.buyOfNotebooks.splice(index, 1);
  }


  addNotebook (libreta) {
    console.log("Libreta en service de la compra para agregar", libreta)
    this.buyOfNotebooks.push( libreta);
}

  getBuy () {
    console.log("Libretas compradas", this.buyOfNotebooks)
   return this.buyOfNotebooks;
  }

  
  
}
