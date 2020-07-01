import { Component, OnInit } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';
import { notebook } from '../description/description.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('shoppingAnimation', [
      state('active', style({
        opacity: '1',
        backgroundColor: '#eee'
      })),

      transition('void => *', [
        style({transform: 'translateX(-30px)', opacity: '0'}),
        animate('700ms ease-in-out')
      ]),
      transition('* => void', [
        animate('300ms ease-in-out', style({transform: 'translateX(-30px)', opacity: '0'}))
      ]),
    ])
  ]
})

export class ShoppingCartComponent implements OnInit {
  buyOfNotebooks: notebook[] = [];
  total: number = 0;
  animationState = 'active';

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
    /*this.animationState = (this.animationState === 'inactive' ? 'active' : 'inactive');*/
  }

  getTotalPrice () {
    this.total = this.buyOfNotebooks.reduce((prev: number, item: notebook) => prev + item.precio, 0);
  }

}

