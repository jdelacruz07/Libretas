import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { BuyNotebookService } from '../buy-notebook.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  libreta: notebook;
  index: number;
  addedNotebook: boolean;
  newNotebook: notebook;
  type: any;
  
  constructor(private aR: ActivatedRoute, private api: ApiService, private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      this.index = params['index'];
      this.type = params['type'];
    });
    if (this.type == "bolsillo") {
      this.libreta =  this.api.getLibretaBolsillo(this.index);
    } else {
      this.libreta = this.api.getLibreta(this.index);
    }
  }

  addCar (libreta) {
    console.log("Libreta a agregar a la compra", libreta)
    /*
    this.newNotebook = new notebook(libreta.description, libreta.precio, libreta.typeOfNotebook, libreta.url, libreta.material);
    this.buyNotebook.addNotebook(this.newNotebook);
    */
    this.buyNotebook.addNotebook(libreta);
    this.addedNotebook = true;
    }

}

export class notebook {
  description: string;
  precio: number;
  typeOfNotebook: string;
  url: string; 
  material: string;

  constructor ( description: string, precio: number, typeOfNotebook: string, url: string, material: string ) {
    this.description = description;
    this.precio = precio;
    this.typeOfNotebook = typeOfNotebook;
    this.url = url;
    this.material = material;
  }
}

