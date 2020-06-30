import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiService } from '../api.service';
import { notebook } from '../description/description.component';



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
      description: new FormControl(''),
      precio: new FormControl(''),
      url: new FormControl(''),
      material: new FormControl(''),
      typeOfNotebook: new FormControl(''),
    });
    
  }

  addNotebook(notebook:notebook) {
    this.newNotebook = notebook;
    
    if (this.newNotebook.typeOfNotebook == "libreta") {
        this.api.addLibreta(this.newNotebook);
        this.form.reset()
    } else {
        this.api.addLibretaBolsillo(this.newNotebook);
        this.form.reset()
      }
  }

}


