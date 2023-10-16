import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ServicesService } from '../services/services.service';
import { CommonModule } from '@angular/common';

import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatDividerModule],
})


export class VideogamesComponent {
  isAvailable !: boolean;
  videogames : any[] = [];
 

  constructor(public servizio : ServicesService){

  }

  

  ngOnInit() :void{
    console.log(this.servizio.getVideogames())
    this.videogames = this.servizio.getVideogames();
  }

  

}
