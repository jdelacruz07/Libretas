import { Component, OnInit } from '@angular/core';
import { BuyNotebookService } from '../buy-notebook.service';
import { notebook } from '../description/description.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  animations: [
    trigger('myAnimation', [
      state('inactive', style({
        backgroundColor: '#eee'
      })),
      state('active', style({
        backgroundColor: '#ffcc00'
      })),

      transition('* <=> void', [
        style({
          transform: 'translateX(80px)'
        }),
        animate('500ms ease-in')
      ]),
    ])
  ]
})

export class ShoppingCartComponent implements OnInit {
  buyOfNotebooks: notebook[] = [];
  total: number = 0;
  animationState = 'inactive';

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
    this.animationState = (this.animationState === 'inactive' ? 'active' : 'inactive');
  }

  getTotalPrice () {
    this.total = this.buyOfNotebooks.reduce((prev: number, item: notebook) => prev + item.precio, 0);
  }

}

