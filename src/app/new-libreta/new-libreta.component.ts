import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service'


@Component({
  selector: 'app-new-libreta',
  templateUrl: './new-libreta.component.html',
  styleUrls: ['./new-libreta.component.css']
})
export class NewLibretaComponent implements OnInit {
  form: FormGroup;
  newNotebook: notebook;
 
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      url: new FormControl(''),
      material: new FormControl(''),
      typeOfNotebook: new FormControl(''),
      
    });
  }

  addNotebook(notebook) {
    console.log("Formulario Enviado ...", notebook);
    this.newNotebook = notebook;
    console.log("Nueva Libreta ...", this.newNotebook);
    if (this.newNotebook.typeOfNotebook == "libreta") {
      this.api.addLibreta(this.newNotebook);
      this.form.reset()
      
    } else {
      this.api.addLibretaBolsillo(this.newNotebook);
      this.form.reset()
    }
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
