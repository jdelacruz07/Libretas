import { Injectable } from '@angular/core';
import { notebook } from './description/description.component';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  libretaArtesanal: notebook[] = [ 
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4317.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},  
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4343.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4360.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4370.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4375.JPG", material: "Tela", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4378.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4385.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4391.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4394.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4402.JPG", material: "Tela", typeOfNotebook: "Libreta media carta"},
    {description: "100% hecha a mano", precio: 230, url:"/assets/IMG_4405.JPG", material: "Papel", typeOfNotebook: "Libreta media carta"}
  ]

  libretaBolsillo = [
    {description: "100% hecha a mano", precio: 130, url: "/assets/IMG_4319.JPG", material: "Piel", typeOfNotebook: "Libreta de bolsillo"},
    {description: "100% hecha a mano", precio: 120, url: "/assets/IMG_4326.JPG", material: "Tela", typeOfNotebook: "Libreta de bolsillo"},
    {description: "100% hecha a mano", precio: 110, url: "/assets/IMG_4327.JPG", material: "Papel", typeOfNotebook: "Libreta de bolsillo"}
  ];

  constructor() { }

  addLibreta (libreta) {
    this.libretaArtesanal.push(libreta);
    console.log("Se agrega: ", libreta);
  }

  addLibretaBolsillo (libreta) {
    this.libretaBolsillo.push(libreta);
    console.log("Se agrega: ", libreta);
  }

  getLibreta(index) {
    return this.libretaArtesanal[index];
  }

  getLibretaBolsillo(index) {
    console.log("el tipo del indice en servicios es: ",typeof(index))
    console.log( this.libretaBolsillo[index]);
    return this.libretaBolsillo[index];

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


