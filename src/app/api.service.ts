import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  libretaArtesanal: any[] = [ 
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
  ]

  libretaBolsillo = [
    {url: "/assets/IMG_4319.JPG", material: "Piel"},
    {url: "/assets/IMG_4326.JPG", material: "Tela"},
    {url: "/assets/IMG_4327.JPG", material: "Papel"}
  ];

  constructor() { }

  addLibreta (libreta) {
    this.libretaArtesanal.push(libreta);
    console.log("Se agrega: ", libreta);
  }

  getAllLibretasArtesanal(){
    return this.libretaArtesanal;
  }

  getAllLibretasBolsillo(){
    return this.libretaBolsillo;
  }

  getLibretasArtesanal (materialSelect) {
    return this.libretaArtesanal.filter( x => x.material == materialSelect);
  } 
  
  getLibretasBolsillo (materialSelect) {
    return this.libretaBolsillo.filter( x => x.material == materialSelect);
  }

}
