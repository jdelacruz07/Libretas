import { Component, OnInit } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';
import { notebook } from '../new-libreta/new-libreta.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
  }

  getBuy () {
    this.buyNotebook.getBuy();
  }

}
