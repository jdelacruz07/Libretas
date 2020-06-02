import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libreta-bolsillo',
  templateUrl: './libreta-bolsillo.component.html',
  styleUrls: ['./libreta-bolsillo.component.css']
})
export class LibretaBolsilloComponent implements OnInit {  
    materiales: string = '';
    fotos = [
        {url: "/assets/IMG_4319.JPG", material: "Piel"},
        {url: "/assets/IMG_4326.JPG", material: "Tela"},
        {url: "/assets/IMG_4327.JPG", material: "Papel"}
      ];

  constructor(private aR: ActivatedRoute) { }

  ngOnInit(): void {

    
      this.aR.params.subscribe((params) => {
        
          this.materiales = params['material']; 
          console.log("Este es el tipo de material 1", this.materiales)
        
      })
    

    
  }

  

}
