import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  videogames = [
    {
      source: 'https://cdn.akamai.steamstatic.com/steam/apps/1599340/header.jpg?t=1695752294',
      title: 'Lost Ark',
      description: 'Lost Ark is a highly acclaimed action RPG with a focus on immersive storytelling and epic battles. ',
      releaseDate: 2020,
      isAvailable: true,
      price: 50,
      buylink: 'https://store.steampowered.com/app/1599340/Lost_Ark/',
    },
    {
      source: 'https://multiplayer.net-cdn.it/thumbs/images/2023/08/14/baldurs-gate-3-cover_jpg_1600x900_crop_q85.jpg',
      title: "Baldur's Gate",
      description: "Baldur's Gate is a classic RPG series known for its rich storytelling and tactical combat.",
      releaseDate: 2023,
      isAvailable: true,
      price: 60,
      buylink: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
    },
    {
      source: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1280w.jpg',
      title: 'Super Mario Bros',
      description: 'Super Mario Bros. is an iconic platformer franchise created by Nintendo. Players control Mario, a plumber, on his adventures to rescue Princess Peach from the villainous Bowser.',
      releaseDate: 1986,
      isAvailable: false,
      price: 40,
      buylink: ' ',
    },
    {
      source: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
      title: 'Cyberpunk',
      description: 'Cyberpunk 2077 is a highly anticipated open-world RPG set in a dystopian future where players take on the role of V, a mercenary navigating the bustling city of Night City. ',
      releaseDate: 2020,
      isAvailable: true,
      price: 60,
      buylink: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
    }
  ]


  constructor() { }


  getVideogames() {
    return this.videogames;
  }

public buyRedirect(videogame: any): void {
      if (videogame.isAvailable) {
      const link = videogame.buylink;
      window.open(link, '_blank'); //il link verrà aperto in una nuova finestra con _blank!
    }
  }
}


