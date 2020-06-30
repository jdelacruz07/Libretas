import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-libreta-bolsillo',
  templateUrl: './libreta-bolsillo.component.html',
  styleUrls: ['./libreta-bolsillo.component.css']
})
export class LibretaBolsilloComponent implements OnInit {  
    material: string = '';
    libretas; 

  constructor(private aR: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
      this.aR.params.subscribe((params) => {
          this.material = params['material']; 
      })
      
      if (this.material) {
        this.libretas = this.apiService.getLibretasBolsillo(this.material);
      } else {
        this.libretas = this.apiService.getAllLibretasBolsillo();
      }
  }

  

}
