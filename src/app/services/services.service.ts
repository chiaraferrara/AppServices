import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  videogames = [
    {source: 'https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1695752294', title: 'Lost Ark', releaseDate: 2020, isAvailable: true, price: 50},
    {source: 'https://multiplayer.net-cdn.it/thumbs/images/2023/08/14/baldurs-gate-3-cover_jpg_1600x900_crop_q85.jpg', title: 'Baldurs Gate' , releaseDate: 2023 , isAvailable: true , price: 60},
    {source: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1280w.jpg', title: 'Super Mario Bros', releaseDate: 1986 , isAvailable: true, price: 40},
    {source:'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7' , title: 'Cyberpunk', releaseDate: 2077, isAvailable: false, price:60}
  ]


  constructor() { }


getVideogames(){
  return this.videogames;
}

}

