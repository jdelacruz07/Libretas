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
  
  constructor(private aR: ActivatedRoute, private api: ApiService, private buyNotebook: BuyNotebookService) { }

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      this.index = params['index'];
    });
    this.libreta =  this.api.getLibretaBolsillo(this.index);
    console.log("Libreta a describir", this.libreta);
  }

  addCar (libreta) {
    console.log("Libreta a agregar ", libreta)
    this.buyNotebook.addNotebook(libreta);
    
    
    }

}

export class notebook {
  descripcion: string;
  precio: number;
  typeOfNotebook: string;
  url: string; 
  material: string;

  constructor ( descripcion: string, precio: number, typeOfNotebook: string, url: string, material: string ) {
    this.descripcion = descripcion;
    this.precio = precio;
    this.typeOfNotebook = typeOfNotebook;
    this.url = url;
    this.material = material;
  }
}

