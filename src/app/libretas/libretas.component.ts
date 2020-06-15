import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libretas',
  templateUrl: './libretas.component.html',
  styleUrls: ['./libretas.component.css']
})
export class LibretasComponent implements OnInit {
 
  imageArtesanal = [4343, 4302, 4360].map((n) => `/assets/IMG_${n}.JPG`);
  imageBolsillo = [4319, 4326, 4327].map((n) => `/assets/IMG_${n}.JPG`);
  

  constructor() { }
                           
  ngOnInit(): void {
    

  }
} 
