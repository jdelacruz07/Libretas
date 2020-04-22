import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libreta-media-carta',
  templateUrl: './libreta-media-carta.component.html',
  styleUrls: ['./libreta-media-carta.component.css']
})
export class LibretaMediaCartaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


 fotos = [
  /*"/assets/IMG_4299.JPG",
  "/assets/IMG_4302.JPG",
  "/assets/IMG_4317.JPG",
  "/assets/IMG_4319.JPG",
  "/assets/IMG_4326.JPG",
  "/assets/IMG_4327.JPG", 
  {url:"/assets/IMG_4338.JPG", material: "Papel"},
  {url:"/assets/IMG_4346.JPG", material: "Papel"},
  {url:"/assets/IMG_4365.JPG", material: "Papel"},
  {url:"/assets/IMG_4376.JPG", material: "Papel"},
  {url:"/assets/IMG_4392.JPG", material: "Papel"},
  {url:"/assets/IMG_4393.JPG", material: "Papel"},
  {url:"/assets/IMG_4401.JPG", material: "Papel"},
  {url:"/assets/IMG_4387.JPG", material: "Papel"},
  */
  {url:"/assets/IMG_4343.JPG", material: "Papel"},
  {url:"/assets/IMG_4360.JPG", material: "Papel"},
  {url:"/assets/IMG_4370.JPG", material: "Papel"},
  {url:"/assets/IMG_4375.JPG", material: "Tela"},
  {url:"/assets/IMG_4385.JPG", material: "Papel"},
  {url:"/assets/IMG_4402.JPG", material: "Tela"},
  {url:"/assets/IMG_4405.JPG", material: "Papel"},
  {url:"/assets/IMG_4378.JPG", material: "Papel"},
  {url:"/assets/IMG_4391.JPG", material: "Papel"},
  {url:"/assets/IMG_4394.JPG", material: "Papel"},
  /*
  {url:"/assets/IMG_4406.JPG", material: "Papel"},
  {url:"/assets/IMG_4408.JPG", material: "Papel"},
  {url:"/assets/IMG_4409.JPG", material: "Papel"},
  {url:"/assets/IMG_4410.JPG", material: "Papel"},
  {url:"/assets/IMG_4411.JPG", material: "Papel"},*/
  

];
}
