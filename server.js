const express = require('express');
const app = express();
const cors = require('cors')

app.set('port', process.env.PORT || 3000);
app.locals.title = 'ink hntr dnvr';

app.get('/', (request, response) => {
  response.send('Oh hey hntr');
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});

app.use(express.json());
app.use(express.static('public'))
app.use(express.static('images'))
app.use(cors())

app.locals.artists = [
  {
    name: 'Katrina Aldaco',
    id: 1,
    shop: 'Ikonik Ink Tattoo',
    keywords: ['water color abstract', 'traditional', 'color realism'],
    img: ['/images/KatrinaAldaco/KatAld1.png', '/images/KatrinaAldaco/KatAld2.png', '/images/KatrinaAldaco/KatAld3.png'],
    instagram: 'trinatatuaje',
    phone: '720-427-2326'

  },
  {
    name: 'Billy Crandall',
    id: 2,
    shop: 'Ritual Tattoo',
    keywords: ['large scale', 'american traditional', 'black work'],
    img: ['/images/billyCrandall/BilCran1.png', '/images/billyCrandall/BilCran2.png', '/images/billyCrandall/BilCran3.png'],
    instagram: 'williamroycrandall2',
    phone: '303-455-1558'
  },
  {
    name: 'Jason Lukach',
    id: 3,
    shop: 'Think Tank Tattoo',
    keywords: ['nature inspired', 'celtic', 'geometric'],
    img: ['/images/jasonLukach/JasLuk1.png', '/images/jasonLukach/JasLuk2.png', '/images/jasonLukach/JasLuk3.png'],
    instagram: 'jason_lukach_tattooer',
    phone: '720-932-0124'
  },
  {
    name: 'Dianne Chavez',
    id: 4,
    shop: 'Ikonik Ink Tattoo',
    keywords: ['black and grey', 'fine lines', 'black work', 'dot work'],
    img: ['/images/DianneChavez/DiaCha1.png', '/images/DianneChavez/DiaCha2.png', '/images/DianneChavez/DiaCha3.png'],
    instagram: 'vexit.ink', 
    phone: '720-427-2326', 
  },
  {
    name: 'Haley McMahon',
    id: 5,
    shop: 'Dedication Tattoo',
    keywords: ['lettering', 'traditional', 'black and grey'],
    img: ['/images/haleyMacMahon/HalMac1.png', '/images/haleyMacMahon/HalMac2.png', '/images/haleyMacMahon/HalMac3.png'],
    instagram: 'haleymctattoos',
    phone: '303-733-0315'
  },
  {
    name: 'Sam Yamini',
    id: 6,
    shop: 'Dedication Tattoo',
    keywords: ['japanese', 'irezumi', 'horimono'],
    img: ['./images/samYamini/SamYam1.png', './images/samYamini/SamYam2.png', './images/samYamini/SamYam3.png'],
    instagram:'therealsamyamini', 
    phone: '303-733-0315'
  },
  {
    name: 'Rachel Paton',
    id: 7,
    shop: 'Ritual Tattoo',
    keywords: ['machine free', 'stick and poke', 'fine lines' ],
    img: ['/images/RachelPatton/RacPat1.png', '/images/RachelPatton/RacPat2.png', '/images/RachelPatton/RacPat3.png'],
    instagram: 'ray_lyn_tattoos',
    phone: '303-455-1558'

  },
  {
    name: 'DJ Chilcote Jr',
    id: 8,
    shop: 'Think Tank Tattoo',
    keywords: ['bold', 'modern', 'traditional'],
    img: ['/images/djChilcoteJr/DjChi1.png', '/images/djChilcoteJr/DjChi2.png', '/images/djChilcoteJr/DjChi3.png'],
    instagram: 'chilcoterjr_tattoo',
    phone: '720-932-0124'
  },
  {
    name: 'Sara Lewis',
    id: 9,
    shop: 'All sacred Tattoo',
    keywords: ['bold', 'dark', 'horror' ],
    img: ['/images/saraLewis/SarLew1.png', '/images/saraLewis/SarLew2.png', '/images/saraLewis/SarLew3.png',],
    instagram: 'saralewistattoo',
    phone: '303-862-9172'
  },
  {
    name: 'Kevin Bledsoe',
    id: 10,
    shop: 'Think Tank Tattoo',
    keywords:['neo traditional', 'japanese', 'illustrative'],
    img: ['/images/kevinBledsoe/KevBle1.png', '/images/kevinBledsoe/KevBle2.png', '/images/kevinBledsoe/KevBle3.png'],
    instagram: 'kevinbledsoeart',
    phone: '720-932-0124'
  },
  {
    name: 'Mandy Hazell',
    id: 11,
    shop: 'The Little Black Church',
    keywords: ['flowers', 'bright colors', 'amimal'],
    img: ['/images/mandyHazell/ManHaz1.png', '/images/mandyHazell/ManHaz2.png', '/images/mandyHazell/ManHaz3.png'],
    instagram: 'mandypantstattoos',
    phone:'303-717-8717'
  },
  {
    name: 'Lo Hayes',
    id: 12,
    shop: 'Fortune Cookie Tattoo',
    keywords: ['space', 'fine line', 'bright colors'],
    img: ['/images/loHayes/LoHay1.png', '/images/loHayes/LoHay2.png', '/images/loHayes/LoHay3.png'],
    instagram:'linedbylo',
    phone: '303-210-6432.'
  },
  {
    name: 'Jake Bray',
    id: 13,
    shop: 'Think Tank Tattoo',
    keywords: ['bright colors', 'bold', 'american traditional'],
    img: ['/images/jakeBray/JakBra1.png', '/images/jakeBray/JakBra3.png', '/images/jakeBray/JakeBra2.png'],
    instagram: 'jakebray15',
    phone: '720-932-0124'
  },
  {
    name: 'Ohran Ramadani',
    id: 14,
    shop: 'Sol Tribe',
    keywords: ['black and grey', 'neo traditional', 'realism'],
    img: ['/images/ohranRamadani/OhrRam1.png', '/images/ohranRamadani/OhrRam2.png', '/images/ohranRamadani/OhrRam3.png'],
    instagram: 'ohrantattoos',
    phone: '303-832-1311'
  },
  {
    name: 'Emma Harrison',
    id: 15,
    shop: 'Dead Drift Tattoo',
    keywords: ['nature inspired', 'black and grey', 'illustrative'],
    img: ['/images/emmaHarrison/EmmHar1.png', '/images/emmaHarrison/EmmHar2.png', '/images/emmaHarrison/EmmHar3.png'],
    instagram: 'emmharr',
    phone: '720-532-0904'
  },
  {
    name: 'Slowdeath',
    id: 16,
    shop: 'Title Tattoo',
    keywords: ['micro-realism', 'portrait', 'black and grey'] ,
    img: ['/images/slowdeath/SloDea1.png', '/images/slowdeath/SloDea2.png', '/images/slowdeath/SloDea3.png'],
    instagram: 'og_slowdeath',
    phone: '303-909-9880'
  },
  {
    name: 'Timothy Heath',
    id: 17,
    shop: 'Dead Drift Tattoo',
    keywords: ['traditional', 'bright colors', 'black and grey'],
    img: ['/images/timothyHeath/TimHea1.png', '/images/timothyHeath/TimHea2.png', '/images/timothyHeath/TimHea3.png'],
    instagram: 'timothy__heath',
    phone: '720-532-0904'
  },
  {
    name: 'Kit Corbett',
    id: 18,
    shop: 'All Sacred Tattoo',
    keywords: ['ornamental', 'black and grey', 'animals'],
    img: ['/images/kitCorbett/KitCor1.png', '/images/kitCorbett/KitCor2.png', '/images/kitCorbett/KitCor3.png'],
    instagram: 'sundottir',
    phone: '303-862-9172'
  },
  {
    name: 'Violetta Nyx',
    id: 19,
    shop: 'Tribe Tattoo Denver',
    keywords: ['anime', 'flowers', 'bright colors'],
    img: [],
    instagram: 'violettanyx_art',
    phone: '720-904-8904'
  },
  {
    name: 'Jessie Super',
    id: 20,
    shop: 'Sol Tribe Tattoo',
    keywords: ['watercolor', 'geometric', 'minimalist'],
    img: ['/images/jessieSuper/JesSup1.png', '/images/jessieSuper/JesSup2.png', '/images/jessieSuper/JesSup3.png'],
    instagram: 'jessiesuperartist',
    phone: '303-832-1311'
  },
  {
    name: 'Keith Kiernan',
    id: 21,
    shop: 'Dead Drift Tattoo',
    keywords: ['japanese', 'fine lines', 'dot work'],
    img: ['/images/keithKiernan/KeiKie1.png', '/images/keithKiernan/KeiKie2.png', '/images/keithKiernan/KeiKie3.png'],
    instagram:'keithkirin_tattoos',
    phone: '720-532-0904'
  },
  {
    name: 'Graham Vogel',
    id: 22,
    shop: 'Tribe Tattoo',
    keywords: ['traditional', 'bold', 'bright colors'],
    img: ['/images/grahamVogel/GraVog1.png', '/images/grahamVogel/GraVog2.png', '/images/grahamVogel/GraVog3.png'],
    instagram: 'instagrahamvogel',
    phone:'720-904-8904'
  },
  {
    name: 'Lauren Violet',
    id: 23,
    shop: 'Bound By Design',
    keywords: [ 'nature inspired', 'flowers', 'watercolor'],
    img: ['/images/Lauren Violet/LauVio1.png', '/images/Lauren Violet/LauVio2.png', '/images/Lauren Violet/LauVio3.png'],
    instagram: 'lauren.violet',
    phone: '303-832-8282'
  },
  {
    name: 'Andie Ferko',
    id: 24,
    shop: 'Sol Tribe tattoo',
    keywords: ['japanese', 'black and grey', 'fine line'],
    img: ['/images/andieFerko/AndFer1.png', '/images/andieFerko/AndFer2.png', '/images/andieFerko/AndFer3.png'],
    instagram: 'semiprecious_synergy',
    phone: '303-832-1311'
  },
  {
    name: 'Elvis Pereira',
    id: 25,
    shop: 'Tribe Tattoo',
    keywords: ['black and grey', 'watercolor', 'dot work'],
    img: ['/images/elvisPereira/ElvPer1.png', '/images/elvisPereira/ElvPer2.png', '/images/elvisPereira/ElvPer3.png'],
    instagram: 'deliverytattoo',
    phone: '720-904-8904'
  },
  {
    name: 'Sofia Moran',
    id: 26,
    shop: 'All Sacred',
    keywords: ['surreal', 'black and grey', 'psychedelic'],
    img: ['/images/sofiaMoran/SofMor1.png', '/images/sofiaMoran/SofMor2.png', '/images/sofiaMoran/SofMor3.png'],
    instagram: 'chofiart',
    phone: '303-862-9172'
  },
  {
    name: 'Heather Reynolds',
    id: 27,
    shop: 'Fallen Owl Tattoo',
    keywords: ['flowers', 'traditional', 'neo traditional'],
    img: ['/images/heatherReynolds/HeaRey1.png', '/images/heatherReynolds/HeaRey2.png', '/images/heatherReynolds/HeaRey3.png'],
    instagram: 'heatherreynolds_tattoos',
    phone: '303-232-1350'
  },
  {
    name: 'Josh Topher',
    id: 28,
    shop: 'Bound By Design',
    keywords: ['neo traditional', 'cartoon', 'bright'],
    img: ['/images/joshTopher/JosTop1.png', '/images/joshTopher/JosTop2.png', '/images/joshTopher/JosTop3.png'],
    instagram: 'ghost_ham',
    phone: '303-832-8282'
  },
  {
    name: 'Katie Grinstead',
    id: 29,
    shop: 'Fallen Owl Tattoo',
    keywords: ['watercolor', 'nature', 'surreal'],
    img: ['/images/katieGrinstead/KatGri1.png', '/images/katieGrinstead/KatGri2.png', '/images/katieGrinstead/KatGri3.png'],
    instagram: 'katie.g.z',
    phone: '303-232-1350'
  },
  {
    name: 'Travis Koenig',
    id: 30,
    shop: 'Bound By Design',
    keywords: ['large scale', 'japanese', 'nature inspired'],
    img: ['/images/travisKoenig/TraKoe1.png', '/images/travisKoenig/TraKoe2.png', '/images/travisKoenig/TraKoe3.png'],
    instagram: 'travisktattoos',
    phone: '303-832-8282'
  }
]

app.get('/api/v1/artists', (request, response) => {
  const artists = app.locals.artists;

  response.json({ artists });
})

app.get('/api/v1/artists/:id', (request, response) => {
  const { id } = request.params;
  const artist = app.locals.artists.find(artist => artist.id === parseInt(id));
  if (!artist) {
    return response.sendStatus(404);
  }
  response.status(200).json(artist);
});

app.post('/api/v1/artists', (request, response) => {
  const id = Date.now();
  const artist = request.body;

  for (let requiredParameter of ['name', 'shop', 'id', 'instagram']) {
    if (!artist[requiredParameter]) {
      response
        .status(422)
        .send({ error: `Expected format: { name: <String>, type: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  const { name, shop, instagram } = artist;
  app.locals.artists.push({ name, id, shop, instagram });
  response.status(201).json({ name, id, shop, instagram });
});

app.delete('/api/v1/artists/:id', (request, response) => {
  const id = parseInt(request.params.id);
  const index = app.locals.artists.findIndex(artist => artist.id === id);
  if (index === -1) {
    return response.sendStatus(404);
  }
  const deletedArtist = app.locals.artists.splice(index, 1)[0];
  response.status(200).json(deletedArtist);
});

app.get('/', (request, response) => {
});

app.patch('/api/v1/artists/:id', (request, response) => {
  const { id } = request.params;
  const { name, genre, albums } = request.body;
  
  const artistIndex = app.locals.artists.findIndex(artist => artist.id === id);
  
  if (artistIndex === -1) {
    return response.sendStatus(404);
  }
  
  const updatedArtist = {
    id,
    name: name || app.locals.artists[artistIndex].name,
    genre: genre || app.locals.artists[artistIndex].genre,
    albums: albums || app.locals.artists[artistIndex].albums
  };
  
  app.locals.artists[artistIndex] = updatedArtist;
  
  response.status(200).json(updatedArtist);
});