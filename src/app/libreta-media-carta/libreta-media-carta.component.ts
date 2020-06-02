import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-libreta-media-carta',
  templateUrl: './libreta-media-carta.component.html',
  styleUrls: ['./libreta-media-carta.component.css']
})
export class LibretaMediaCartaComponent implements OnInit {
  materiales: String = '';

  constructor(private aR: ActivatedRoute) { }

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      this.materiales = params['material'];
      console.log("Este es el tipo de material de Media Carta", this.materiales);
    })
  }


  fotos = [
      
    {url:"/assets/IMG_4317.JPG", material: "Papel"},  
    {url:"/assets/IMG_4343.JPG", material: "Papel"},
    {url:"/assets/IMG_4360.JPG", material: "Papel"},
    {url:"/assets/IMG_4370.JPG", material: "Papel"},
    {url:"/assets/IMG_4375.JPG", material: "Tela"},
    {url:"/assets/IMG_4378.JPG", material: "Papel"},
    {url:"/assets/IMG_4385.JPG", material: "Papel"},
    {url:"/assets/IMG_4391.JPG", material: "Papel"},
    {url:"/assets/IMG_4394.JPG", material: "Papel"},
    {url:"/assets/IMG_4402.JPG", material: "Tela"},
    {url:"/assets/IMG_4405.JPG", material: "Papel"}
  ];

}
