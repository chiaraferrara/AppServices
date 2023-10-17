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
      releaseDate: 2022,
      isAvailable: true,
      price: 50,
      buylink: 'https://store.steampowered.com/app/1599340/Lost_Ark/',
      usato: false,
    },
    {
      source: 'https://multiplayer.net-cdn.it/thumbs/images/2023/08/14/baldurs-gate-3-cover_jpg_1600x900_crop_q85.jpg',
      title: "Baldur's Gate",
      description: "Baldur's Gate is a classic RPG series known for its rich storytelling and tactical combat.",
      releaseDate: 2023,
      isAvailable: true,
      price: 60,
      buylink: 'https://store.steampowered.com/app/1086940/Baldurs_Gate_3/',
      usato: false,
    },
    {
      source: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1280w.jpg',
      title: 'Super Mario Bros',
      description: 'Super Mario Bros. is an iconic platformer franchise created by Nintendo. Players control Mario, a plumber, on his adventures to rescue Princess Peach from the villainous Bowser.',
      releaseDate: 1986,
      isAvailable: false,
      price: 40,
      buylink: ' ',
      usato: true,
    },
    {
      source: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7',
      title: 'Cyberpunk',
      description: 'Cyberpunk 2077 is a highly anticipated open-world RPG set in a dystopian future where players take on the role of V, a mercenary navigating the bustling city of Night City. ',
      releaseDate: 2020,
      isAvailable: true,
      price: 60,
      buylink: 'https://store.steampowered.com/app/1091500/Cyberpunk_2077/',
      usato: true,
    },

    {
      source: 'https://cdn.cloudflare.steamstatic.com/steam/apps/582010/capsule_616x353.jpg?t=1695662238',
      title: 'Monster Hunter World',
      description: "n Monster Hunter: World, the latest installment in the series, you can enjoy the ultimate hunting experience, using everything at your disposal to hunt monsters in a new world teeming with surprises and excitement.",
      releaseDate: 2018 ,
      isAvailable: true,
      price: 59,
      buylink: 'https://store.steampowered.com/app/582010/Monster_Hunter_World/',
      usato: false,
    },
    {
      source: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DarkSoulsRemastered.jpg",
      title: "Dark Souls Remastered",
      description: "Dark Souls is a challenging action RPG that plunges players into a dark and atmospheric world full of formidable enemies and intricate level design. Prepare to die as you embark on an epic journey to unravel the mysteries of this unforgiving realm.",
      releaseDate: 2018,
      isAvailable: true,
      price: 19.99,
      buylink: "https://store.steampowered.com/app/570940/DARK_SOULS_REMASTERED/",
      usato: true,
    },
    {
      source: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_TheWitcher3WildHunt_enGB.jpg",
      title: "The Witcher 3: Wild Hunt",
      description: "Immerse yourself in a vast open world filled with monsters, magic, and political intrigue in The Witcher 3: Wild Hunt. Play as Geralt of Rivia, a legendary monster hunter, and embark on a quest to find your adopted daughter while navigating a war-torn land.",
      releaseDate: 2015,
      isAvailable: true,
      price: 29.99,
      buylink: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
      usato: false,
    },
    {
      source: "https://cdn.akamai.steamstatic.com/steam/apps/413150/capsule_616x353.jpg?t=1666917466",
      title: "Stardew Valley",
      description: "Escape the hustle and bustle of city life by inheriting a run-down farm in Stardew Valley. Cultivate crops, raise animals, mine for resources, and build relationships with the charming inhabitants of Pelican Town in this relaxing and addictive farming simulation game.",
      releaseDate: 2016,
      isAvailable: true,
      price: 14.99,
      buylink: "https://store.steampowered.com/app/413150/Stardew_Valley/",
      usato: true,
    },
    {
      source: "https://www.uagna.it/wp-content/uploads/2023/09/lies-of-p.jpg",
      title: "Lies of P",
      description: "Lies of P is a thrilling and mysterious action-adventure game that immerses you in a gripping narrative filled with deceit and secrets. Uncover the truth in a world where nothing is as it seems, and your choices have far-reaching consequences.",
      releaseDate: 2023,
      isAvailable: true,
      price: 24.99,
      buylink: "https://store.steampowered.com/app/1627720/Lies_of_P/",
      usato: false,
    },
    {
      source: "https://image.api.playstation.com/vulcan/ap/rnd/202211/2212/4zIDTVwCOcyU0B51RywhFNE0.jpg",
      title: "Need for Speed: Unbound",
      description: "Get ready for high-speed thrills and intense racing action in Need for Speed: Unbound. Customize your dream car, compete in thrilling races, and evade the relentless police force in an open-world urban playground.",
      releaseDate: 2023,
      isAvailable: true,
      price: 49.99,
      buylink: "https://store.steampowered.com/app/1846380/Need_for_Speed_Unbound/",
      usato: false,
    },
    {
      source: "https://assets.xboxservices.com/assets/0e/6f/0e6f0524-3852-420f-924a-5a9cd9eb6517.jpg?n=029940003_GLP-Page-Hero-0_1083x609.jpg",
      title: "Starfield",
      description: "Embark on an epic journey to the stars in Starfield, the highly anticipated space exploration game from Bethesda Game Studios. Discover new worlds, engage in spacefaring adventures, and uncover the mysteries of the cosmos.",
      releaseDate: 2022,
      isAvailable: true,
      price: 59.99,
      buylink: "https://store.steampowered.com/app/1716740/Starfield/",
      usato: false,
    },
    {
      source: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/2x1_NSwitchDS_Overwatch2_Season6_image1600w.png",
      title: "Overwatch 2",
      description: "Join the iconic heroes of Overwatch once again in this highly anticipated sequel. Overwatch 2 introduces new maps, game modes, and a compelling narrative, making it a must-play for fans of team-based shooters.",
      releaseDate: 2023,
      isAvailable: true,
      price: '0',
      buylink: "https://store.steampowered.com/app/2357570/Overwatch_2/",
      usato: true,
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


