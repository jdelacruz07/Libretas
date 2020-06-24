import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BuyNotebookService {

  buy;
  
  constructor() { }

  addNotebook (notebook) {
    console.log("Se agrega al carrito la libreta ")
  }

  getBuy () {
    console.log("Lista de la compra")
  }
}
