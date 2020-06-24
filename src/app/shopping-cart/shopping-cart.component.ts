import { Component, OnInit } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';
import { notebook } from '../new-libreta/new-libreta.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  buyOfNotebooks: notebook;

  constructor(private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
   this.getBuy();
  }

  getBuy () {
    this.buyOfNotebooks = this.buyNotebook.getBuy();
  }
  

}

