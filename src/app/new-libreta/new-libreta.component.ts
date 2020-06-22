import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-libreta',
  templateUrl: './new-libreta.component.html',
  styleUrls: ['./new-libreta.component.css']
})
export class NewLibretaComponent implements OnInit {
  form: FormGroup;
  newNotebook = {
    descripcion: '', precio: 10, typeOfNotebook: '',  url: '' 
  };
 
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      url: new FormControl(''),
      typeOfNotebook: new FormControl(''),
      
    });
  }

  addNotebook(notebook) {
    console.log("Formulario Enviado ...", notebook);
    this.newNotebook = notebook;
    /*
    this.newNotebook.descripcion = notebook.descripcion; 
    this.newNotebook.precio = notebook.precio; 
    this.newNotebook.typeOfNotebook = notebook.typeOfNotebook; 
    this.newNotebook.url = notebook.url; 
    */
    
    console.log("Nueva Libreta ...", this.newNotebook);
    
  }
}

export interface notebook {
  descripcion: string;
  precio: number;
  typeOfNotebook: string;
  url: string;

}
