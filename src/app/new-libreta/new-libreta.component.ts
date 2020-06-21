import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-new-libreta',
  templateUrl: './new-libreta.component.html',
  styleUrls: ['./new-libreta.component.css']
})
export class NewLibretaComponent implements OnInit {
  form: FormGroup;
  notebook: any[];
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      descripcion: new FormControl(''),
      precio: new FormControl(''),
      url: new FormControl(''),
      typeOfNotebbok: new FormControl(''),
      
    });
  }

  addNotebook(newNotebook) {
    console.log("Formulario Enviado ...", newNotebook);
    this.notebook.push(newNotebook);
    console.log("Formulario Enviado ...", this.notebook);

  }
}

export interface notebook {

}
