import { Component, OnInit } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';
import { notebook } from '../description/description.component';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  buyOfNotebooks: notebook[] = [];
  total = 0;

  constructor(private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
   this.getBuy();
  }

  getBuy () {
    console.log("retorna la lista de la compra", this.buyNotebook.getBuy());
    this.buyOfNotebooks = this.buyNotebook.getBuy();
    for (let iterator of this.buyOfNotebooks) {
      this.total +=  iterator.precio; 
    }
  }
  

}

