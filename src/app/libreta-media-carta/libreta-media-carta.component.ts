import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-libreta-media-carta',
  templateUrl: './libreta-media-carta.component.html',
  styleUrls: ['./libreta-media-carta.component.css']
})
export class LibretaMediaCartaComponent implements OnInit {
  material: String = '';
  libretas;

  constructor(private aR: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.aR.params.subscribe((params) => {
      this.material = params['material'];
      
      if (this.material) {
          this.libretas = this.apiService.getLibretasArtesanal(this.material);
        } else {
          this.libretas = this.apiService.getAllLibretasArtesanal();
          }
      })
  }

}
