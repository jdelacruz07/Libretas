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
  total: number = 0;

  constructor(private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
   this.getBuy();
  }

  getBuy () {
    this.buyOfNotebooks = this.buyNotebook.getBuy();
    this.getTotalPrice();
  }
  
  deleteItem(index) {
    this.buyNotebook.deleteNotebook(index);
    this.getTotalPrice();
  }

  getTotalPrice () {
    this.total = this.buyOfNotebooks.reduce((prev: number, item: notebook) => prev + item.precio, 0);
  }

}

