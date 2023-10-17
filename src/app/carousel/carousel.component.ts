import { Component, Input , OnInit} from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

constructor(public servizio : ServicesService){
}

sources: string[] = [];

get currentImage(): string {
  return this.sources[this.servizio.currentSlideIndex];
}

ngOnInit():void{
  this.sources = this.servizio.carousel;
}
}
