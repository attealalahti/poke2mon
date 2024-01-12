const pokemonNames: { [key: string]: string } = {
  bulbasaur: "Bulbasaur",
  ivysaur: "Ivysaur",
  venusaur: "Venusaur",
  charmander: "Charmander",
  charmeleon: "Charmeleon",
  charizard: "Charizard",
  squirtle: "Squirtle",
  wartortle: "Wartortle",
  blastoise: "Blastoise",
  caterpie: "Caterpie",
  metapod: "Metapod",
  butterfree: "Butterfree",
  weedle: "Weedle",
  kakuna: "Kakuna",
  beedrill: "Beedrill",
  pidgey: "Pidgey",
  pidgeotto: "Pidgeotto",
  pidgeot: "Pidgeot",
  rattata: "Rattata",
  raticate: "Raticate",
  spearow: "Spearow",
  fearow: "Fearow",
  ekans: "Ekans",
  arbok: "Arbok",
  pikachu: "Pikachu",
  raichu: "Raichu",
  sandshrew: "Sandshrew",
  sandslash: "Sandslash",
  "nidoran-f": "Nidoran Female",
  nidorina: "Nidorina",
  nidoqueen: "Nidoqueen",
  "nidoran-m": "Nidoran Male",
  nidorino: "Nidorino",
  nidoking: "Nidoking",
  clefairy: "Clefairy",
  clefable: "Clefable",
  vulpix: "Vulpix",
  ninetales: "Ninetales",
  jigglypuff: "Jigglypuff",
  wigglytuff: "Wigglytuff",
  zubat: "Zubat",
  golbat: "Golbat",
  oddish: "Oddish",
  gloom: "Gloom",
  vileplume: "Vileplume",
  paras: "Paras",
  parasect: "Parasect",
  venonat: "Venonat",
  venomoth: "Venomoth",
  diglett: "Diglett",
  dugtrio: "Dugtrio",
  meowth: "Meowth",
  persian: "Persian",
  psyduck: "Psyduck",
  golduck: "Golduck",
  mankey: "Mankey",
  primeape: "Primeape",
  growlithe: "Growlithe",
  arcanine: "Arcanine",
  poliwag: "Poliwag",
  poliwhirl: "Poliwhirl",
  poliwrath: "Poliwrath",
  abra: "Abra",
  kadabra: "Kadabra",
  alakazam: "Alakazam",
  machop: "Machop",
  machoke: "Machoke",
  machamp: "Machamp",
  bellsprout: "Bellsprout",
  weepinbell: "Weepinbell",
  victreebel: "Victreebel",
  tentacool: "Tentacool",
  tentacruel: "Tentacruel",
  geodude: "Geodude",
  graveler: "Graveler",
  golem: "Golem",
  ponyta: "Ponyta",
  rapidash: "Rapidash",
  slowpoke: "Slowpoke",
  slowbro: "Slowbro",
  magnemite: "Magnemite",
  magneton: "Magneton",
  farfetchd: "Farfetch'd",
  doduo: "Doduo",
  dodrio: "Dodrio",
  seel: "Seel",
  dewgong: "Dewgong",
  grimer: "Grimer",
  muk: "Muk",
  shellder: "Shellder",
  cloyster: "Cloyster",
  gastly: "Gastly",
  haunter: "Haunter",
  gengar: "Gengar",
  onix: "Onix",
  drowzee: "Drowzee",
  hypno: "Hypno",
  krabby: "Krabby",
  kingler: "Kingler",
  voltorb: "Voltorb",
  electrode: "Electrode",
  exeggcute: "Exeggcute",
  exeggutor: "Exeggutor",
  cubone: "Cubone",
  marowak: "Marowak",
  hitmonlee: "Hitmonlee",
  hitmonchan: "Hitmonchan",
  lickitung: "Lickitung",
  koffing: "Koffing",
  weezing: "Weezing",
  rhyhorn: "Rhyhorn",
  rhydon: "Rhydon",
  chansey: "Chansey",
  tangela: "Tangela",
  kangaskhan: "Kangaskhan",
  horsea: "Horsea",
  seadra: "Seadra",
  goldeen: "Goldeen",
  seaking: "Seaking",
  staryu: "Staryu",
  starmie: "Starmie",
  "mr-mime": "Mr Mime",
  scyther: "Scyther",
  jynx: "Jynx",
  electabuzz: "Electabuzz",
  magmar: "Magmar",
  pinsir: "Pinsir",
  tauros: "Tauros",
  magikarp: "Magikarp",
  gyarados: "Gyarados",
  lapras: "Lapras",
  ditto: "Ditto",
  eevee: "Eevee",
  vaporeon: "Vaporeon",
  jolteon: "Jolteon",
  flareon: "Flareon",
  porygon: "Porygon",
  omanyte: "Omanyte",
  omastar: "Omastar",
  kabuto: "Kabuto",
  kabutops: "Kabutops",
  aerodactyl: "Aerodactyl",
  snorlax: "Snorlax",
  articuno: "Articuno",
  zapdos: "Zapdos",
  moltres: "Moltres",
  dratini: "Dratini",
  dragonair: "Dragonair",
  dragonite: "Dragonite",
  mewtwo: "Mewtwo",
  mew: "Mew",
  chikorita: "Chikorita",
  bayleef: "Bayleef",
  meganium: "Meganium",
  cyndaquil: "Cyndaquil",
  quilava: "Quilava",
  typhlosion: "Typhlosion",
  totodile: "Totodile",
  croconaw: "Croconaw",
  feraligatr: "Feraligatr",
  sentret: "Sentret",
  furret: "Furret",
  hoothoot: "Hoothoot",
  noctowl: "Noctowl",
  ledyba: "Ledyba",
  ledian: "Ledian",
  spinarak: "Spinarak",
  ariados: "Ariados",
  crobat: "Crobat",
  chinchou: "Chinchou",
  lanturn: "Lanturn",
  pichu: "Pichu",
  cleffa: "Cleffa",
  igglybuff: "Igglybuff",
  togepi: "Togepi",
  togetic: "Togetic",
  natu: "Natu",
  xatu: "Xatu",
  mareep: "Mareep",
  flaaffy: "Flaaffy",
  ampharos: "Ampharos",
  bellossom: "Bellossom",
  marill: "Marill",
  azumarill: "Azumarill",
  sudowoodo: "Sudowoodo",
  politoed: "Politoed",
  hoppip: "Hoppip",
  skiploom: "Skiploom",
  jumpluff: "Jumpluff",
  aipom: "Aipom",
  sunkern: "Sunkern",
  sunflora: "Sunflora",
  yanma: "Yanma",
  wooper: "Wooper",
  quagsire: "Quagsire",
  espeon: "Espeon",
  umbreon: "Umbreon",
  murkrow: "Murkrow",
  slowking: "Slowking",
  misdreavus: "Misdreavus",
  unown: "Unown",
  wobbuffet: "Wobbuffet",
  girafarig: "Girafarig",
  pineco: "Pineco",
  forretress: "Forretress",
  dunsparce: "Dunsparce",
  gligar: "Gligar",
  steelix: "Steelix",
  snubbull: "Snubbull",
  granbull: "Granbull",
  qwilfish: "Qwilfish",
  scizor: "Scizor",
  shuckle: "Shuckle",
  heracross: "Heracross",
  sneasel: "Sneasel",
  teddiursa: "Teddiursa",
  ursaring: "Ursaring",
  slugma: "Slugma",
  magcargo: "Magcargo",
  swinub: "Swinub",
  piloswine: "Piloswine",
  corsola: "Corsola",
  remoraid: "Remoraid",
  octillery: "Octillery",
  delibird: "Delibird",
  mantine: "Mantine",
  skarmory: "Skarmory",
  houndour: "Houndour",
  houndoom: "Houndoom",
  kingdra: "Kingdra",
  phanpy: "Phanpy",
  donphan: "Donphan",
  porygon2: "Porygon2",
  stantler: "Stantler",
  smeargle: "Smeargle",
  tyrogue: "Tyrogue",
  hitmontop: "Hitmontop",
  smoochum: "Smoochum",
  elekid: "Elekid",
  magby: "Magby",
  miltank: "Miltank",
  blissey: "Blissey",
  raikou: "Raikou",
  entei: "Entei",
  suicune: "Suicune",
  larvitar: "Larvitar",
  pupitar: "Pupitar",
  tyranitar: "Tyranitar",
  lugia: "Lugia",
  "ho-oh": "Ho-Oh",
  celebi: "Celebi",
  treecko: "Treecko",
  grovyle: "Grovyle",
  sceptile: "Sceptile",
  torchic: "Torchic",
  combusken: "Combusken",
  blaziken: "Blaziken",
  mudkip: "Mudkip",
  marshtomp: "Marshtomp",
  swampert: "Swampert",
  poochyena: "Poochyena",
  mightyena: "Mightyena",
  zigzagoon: "Zigzagoon",
  linoone: "Linoone",
  wurmple: "Wurmple",
  silcoon: "Silcoon",
  beautifly: "Beautifly",
  cascoon: "Cascoon",
  dustox: "Dustox",
  lotad: "Lotad",
  lombre: "Lombre",
  ludicolo: "Ludicolo",
  seedot: "Seedot",
  nuzleaf: "Nuzleaf",
  shiftry: "Shiftry",
  taillow: "Taillow",
  swellow: "Swellow",
  wingull: "Wingull",
  pelipper: "Pelipper",
  ralts: "Ralts",
  kirlia: "Kirlia",
  gardevoir: "Gardevoir",
  surskit: "Surskit",
  masquerain: "Masquerain",
  shroomish: "Shroomish",
  breloom: "Breloom",
  slakoth: "Slakoth",
  vigoroth: "Vigoroth",
  slaking: "Slaking",
  nincada: "Nincada",
  ninjask: "Ninjask",
  shedinja: "Shedinja",
  whismur: "Whismur",
  loudred: "Loudred",
  exploud: "Exploud",
  makuhita: "Makuhita",
  hariyama: "Hariyama",
  azurill: "Azurill",
  nosepass: "Nosepass",
  skitty: "Skitty",
  delcatty: "Delcatty",
  sableye: "Sableye",
  mawile: "Mawile",
  aron: "Aron",
  lairon: "Lairon",
  aggron: "Aggron",
  meditite: "Meditite",
  medicham: "Medicham",
  electrike: "Electrike",
  manectric: "Manectric",
  plusle: "Plusle",
  minun: "Minun",
  volbeat: "Volbeat",
  illumise: "Illumise",
  roselia: "Roselia",
  gulpin: "Gulpin",
  swalot: "Swalot",
  carvanha: "Carvanha",
  sharpedo: "Sharpedo",
  wailmer: "Wailmer",
  wailord: "Wailord",
  numel: "Numel",
  camerupt: "Camerupt",
  torkoal: "Torkoal",
  spoink: "Spoink",
  grumpig: "Grumpig",
  spinda: "Spinda",
  trapinch: "Trapinch",
  vibrava: "Vibrava",
  flygon: "Flygon",
  cacnea: "Cacnea",
  cacturne: "Cacturne",
  swablu: "Swablu",
  altaria: "Altaria",
  zangoose: "Zangoose",
  seviper: "Seviper",
  lunatone: "Lunatone",
  solrock: "Solrock",
  barboach: "Barboach",
  whiscash: "Whiscash",
  corphish: "Corphish",
  crawdaunt: "Crawdaunt",
  baltoy: "Baltoy",
  claydol: "Claydol",
  lileep: "Lileep",
  cradily: "Cradily",
  anorith: "Anorith",
  armaldo: "Armaldo",
  feebas: "Feebas",
  milotic: "Milotic",
  castform: "Castform",
  kecleon: "Kecleon",
  shuppet: "Shuppet",
  banette: "Banette",
  duskull: "Duskull",
  dusclops: "Dusclops",
  tropius: "Tropius",
  chimecho: "Chimecho",
  absol: "Absol",
  wynaut: "Wynaut",
  snorunt: "Snorunt",
  glalie: "Glalie",
  spheal: "Spheal",
  sealeo: "Sealeo",
  walrein: "Walrein",
  clamperl: "Clamperl",
  huntail: "Huntail",
  gorebyss: "Gorebyss",
  relicanth: "Relicanth",
  luvdisc: "Luvdisc",
  bagon: "Bagon",
  shelgon: "Shelgon",
  salamence: "Salamence",
  beldum: "Beldum",
  metang: "Metang",
  metagross: "Metagross",
  regirock: "Regirock",
  regice: "Regice",
  registeel: "Registeel",
  latias: "Latias",
  latios: "Latios",
  kyogre: "Kyogre",
  groudon: "Groudon",
  rayquaza: "Rayquaza",
  jirachi: "Jirachi",
  "deoxys-normal": "Deoxys Normal",
  turtwig: "Turtwig",
  grotle: "Grotle",
  torterra: "Torterra",
  chimchar: "Chimchar",
  monferno: "Monferno",
  infernape: "Infernape",
  piplup: "Piplup",
  prinplup: "Prinplup",
  empoleon: "Empoleon",
  starly: "Starly",
  staravia: "Staravia",
  staraptor: "Staraptor",
  bidoof: "Bidoof",
  bibarel: "Bibarel",
  kricketot: "Kricketot",
  kricketune: "Kricketune",
  shinx: "Shinx",
  luxio: "Luxio",
  luxray: "Luxray",
  budew: "Budew",
  roserade: "Roserade",
  cranidos: "Cranidos",
  rampardos: "Rampardos",
  shieldon: "Shieldon",
  bastiodon: "Bastiodon",
  burmy: "Burmy",
  "wormadam-plant": "Wormadam Plant",
  mothim: "Mothim",
  combee: "Combee",
  vespiquen: "Vespiquen",
  pachirisu: "Pachirisu",
  buizel: "Buizel",
  floatzel: "Floatzel",
  cherubi: "Cherubi",
  cherrim: "Cherrim",
  shellos: "Shellos",
  gastrodon: "Gastrodon",
  ambipom: "Ambipom",
  drifloon: "Drifloon",
  drifblim: "Drifblim",
  buneary: "Buneary",
  lopunny: "Lopunny",
  mismagius: "Mismagius",
  honchkrow: "Honchkrow",
  glameow: "Glameow",
  purugly: "Purugly",
  chingling: "Chingling",
  stunky: "Stunky",
  skuntank: "Skuntank",
  bronzor: "Bronzor",
  bronzong: "Bronzong",
  bonsly: "Bonsly",
  "mime-jr": "Mime Jr",
  happiny: "Happiny",
  chatot: "Chatot",
  spiritomb: "Spiritomb",
  gible: "Gible",
  gabite: "Gabite",
  garchomp: "Garchomp",
  munchlax: "Munchlax",
  riolu: "Riolu",
  lucario: "Lucario",
  hippopotas: "Hippopotas",
  hippowdon: "Hippowdon",
  skorupi: "Skorupi",
  drapion: "Drapion",
  croagunk: "Croagunk",
  toxicroak: "Toxicroak",
  carnivine: "Carnivine",
  finneon: "Finneon",
  lumineon: "Lumineon",
  mantyke: "Mantyke",
  snover: "Snover",
  abomasnow: "Abomasnow",
  weavile: "Weavile",
  magnezone: "Magnezone",
  lickilicky: "Lickilicky",
  rhyperior: "Rhyperior",
  tangrowth: "Tangrowth",
  electivire: "Electivire",
  magmortar: "Magmortar",
  togekiss: "Togekiss",
  yanmega: "Yanmega",
  leafeon: "Leafeon",
  glaceon: "Glaceon",
  gliscor: "Gliscor",
  mamoswine: "Mamoswine",
  "porygon-z": "Porygon-Z",
  gallade: "Gallade",
  probopass: "Probopass",
  dusknoir: "Dusknoir",
  froslass: "Froslass",
  rotom: "Rotom",
  uxie: "Uxie",
  mesprit: "Mesprit",
  azelf: "Azelf",
  dialga: "Dialga",
  palkia: "Palkia",
  heatran: "Heatran",
  regigigas: "Regigigas",
  "giratina-altered": "Giratina Altered",
  cresselia: "Cresselia",
  phione: "Phione",
  manaphy: "Manaphy",
  darkrai: "Darkrai",
  "shaymin-land": "Shaymin Land",
  arceus: "Arceus",
  victini: "Victini",
  snivy: "Snivy",
  servine: "Servine",
  serperior: "Serperior",
  tepig: "Tepig",
  pignite: "Pignite",
  emboar: "Emboar",
  oshawott: "Oshawott",
  dewott: "Dewott",
  samurott: "Samurott",
  patrat: "Patrat",
  watchog: "Watchog",
  lillipup: "Lillipup",
  herdier: "Herdier",
  stoutland: "Stoutland",
  purrloin: "Purrloin",
  liepard: "Liepard",
  pansage: "Pansage",
  simisage: "Simisage",
  pansear: "Pansear",
  simisear: "Simisear",
  panpour: "Panpour",
  simipour: "Simipour",
  munna: "Munna",
  musharna: "Musharna",
  pidove: "Pidove",
  tranquill: "Tranquill",
  unfezant: "Unfezant",
  blitzle: "Blitzle",
  zebstrika: "Zebstrika",
  roggenrola: "Roggenrola",
  boldore: "Boldore",
  gigalith: "Gigalith",
  woobat: "Woobat",
  swoobat: "Swoobat",
  drilbur: "Drilbur",
  excadrill: "Excadrill",
  audino: "Audino",
  timburr: "Timburr",
  gurdurr: "Gurdurr",
  conkeldurr: "Conkeldurr",
  tympole: "Tympole",
  palpitoad: "Palpitoad",
  seismitoad: "Seismitoad",
  throh: "Throh",
  sawk: "Sawk",
  sewaddle: "Sewaddle",
  swadloon: "Swadloon",
  leavanny: "Leavanny",
  venipede: "Venipede",
  whirlipede: "Whirlipede",
  scolipede: "Scolipede",
  cottonee: "Cottonee",
  whimsicott: "Whimsicott",
  petilil: "Petilil",
  lilligant: "Lilligant",
  "basculin-red-striped": "Basculin Red Striped",
  sandile: "Sandile",
  krokorok: "Krokorok",
  krookodile: "Krookodile",
  darumaka: "Darumaka",
  "darmanitan-standard": "Darmanitan Standard",
  maractus: "Maractus",
  dwebble: "Dwebble",
  crustle: "Crustle",
  scraggy: "Scraggy",
  scrafty: "Scrafty",
  sigilyph: "Sigilyph",
  yamask: "Yamask",
  cofagrigus: "Cofagrigus",
  tirtouga: "Tirtouga",
  carracosta: "Carracosta",
  archen: "Archen",
  archeops: "Archeops",
  trubbish: "Trubbish",
  garbodor: "Garbodor",
  zorua: "Zorua",
  zoroark: "Zoroark",
  minccino: "Minccino",
  cinccino: "Cinccino",
  gothita: "Gothita",
  gothorita: "Gothorita",
  gothitelle: "Gothitelle",
  solosis: "Solosis",
  duosion: "Duosion",
  reuniclus: "Reuniclus",
  ducklett: "Ducklett",
  swanna: "Swanna",
  vanillite: "Vanillite",
  vanillish: "Vanillish",
  vanilluxe: "Vanilluxe",
  deerling: "Deerling",
  sawsbuck: "Sawsbuck",
  emolga: "Emolga",
  karrablast: "Karrablast",
  escavalier: "Escavalier",
  foongus: "Foongus",
  amoonguss: "Amoonguss",
  frillish: "Frillish",
  jellicent: "Jellicent",
  alomomola: "Alomomola",
  joltik: "Joltik",
  galvantula: "Galvantula",
  ferroseed: "Ferroseed",
  ferrothorn: "Ferrothorn",
  klink: "Klink",
  klang: "Klang",
  klinklang: "Klinklang",
  tynamo: "Tynamo",
  eelektrik: "Eelektrik",
  eelektross: "Eelektross",
  elgyem: "Elgyem",
  beheeyem: "Beheeyem",
  litwick: "Litwick",
  lampent: "Lampent",
  chandelure: "Chandelure",
  axew: "Axew",
  fraxure: "Fraxure",
  haxorus: "Haxorus",
  cubchoo: "Cubchoo",
  beartic: "Beartic",
  cryogonal: "Cryogonal",
  shelmet: "Shelmet",
  accelgor: "Accelgor",
  stunfisk: "Stunfisk",
  mienfoo: "Mienfoo",
  mienshao: "Mienshao",
  druddigon: "Druddigon",
  golett: "Golett",
  golurk: "Golurk",
  pawniard: "Pawniard",
  bisharp: "Bisharp",
  bouffalant: "Bouffalant",
  rufflet: "Rufflet",
  braviary: "Braviary",
  vullaby: "Vullaby",
  mandibuzz: "Mandibuzz",
  heatmor: "Heatmor",
  durant: "Durant",
  deino: "Deino",
  zweilous: "Zweilous",
  hydreigon: "Hydreigon",
  larvesta: "Larvesta",
  volcarona: "Volcarona",
  cobalion: "Cobalion",
  terrakion: "Terrakion",
  virizion: "Virizion",
  "tornadus-incarnate": "Tornadus Incarnate",
  "thundurus-incarnate": "Thundurus Incarnate",
  reshiram: "Reshiram",
  zekrom: "Zekrom",
  "landorus-incarnate": "Landorus Incarnate",
  kyurem: "Kyurem",
  "keldeo-ordinary": "Keldeo Ordinary",
  "meloetta-aria": "Meloetta Aria",
  genesect: "Genesect",
  chespin: "Chespin",
  quilladin: "Quilladin",
  chesnaught: "Chesnaught",
  fennekin: "Fennekin",
  braixen: "Braixen",
  delphox: "Delphox",
  froakie: "Froakie",
  frogadier: "Frogadier",
  greninja: "Greninja",
  bunnelby: "Bunnelby",
  diggersby: "Diggersby",
  fletchling: "Fletchling",
  fletchinder: "Fletchinder",
  talonflame: "Talonflame",
  scatterbug: "Scatterbug",
  spewpa: "Spewpa",
  vivillon: "Vivillon",
  litleo: "Litleo",
  pyroar: "Pyroar",
  flabebe: "Flabebe",
  floette: "Floette",
  florges: "Florges",
  skiddo: "Skiddo",
  gogoat: "Gogoat",
  pancham: "Pancham",
  pangoro: "Pangoro",
  furfrou: "Furfrou",
  espurr: "Espurr",
  "meowstic-male": "Meowstic Male",
  honedge: "Honedge",
  doublade: "Doublade",
  "aegislash-shield": "Aegislash Shield",
  spritzee: "Spritzee",
  aromatisse: "Aromatisse",
  swirlix: "Swirlix",
  slurpuff: "Slurpuff",
  inkay: "Inkay",
  malamar: "Malamar",
  binacle: "Binacle",
  barbaracle: "Barbaracle",
  skrelp: "Skrelp",
  dragalge: "Dragalge",
  clauncher: "Clauncher",
  clawitzer: "Clawitzer",
  helioptile: "Helioptile",
  heliolisk: "Heliolisk",
  tyrunt: "Tyrunt",
  tyrantrum: "Tyrantrum",
  amaura: "Amaura",
  aurorus: "Aurorus",
  sylveon: "Sylveon",
  hawlucha: "Hawlucha",
  dedenne: "Dedenne",
  carbink: "Carbink",
  goomy: "Goomy",
  sliggoo: "Sliggoo",
  goodra: "Goodra",
  klefki: "Klefki",
  phantump: "Phantump",
  trevenant: "Trevenant",
  "pumpkaboo-average": "Pumpkaboo Average",
  "gourgeist-average": "Gourgeist Average",
  bergmite: "Bergmite",
  avalugg: "Avalugg",
  noibat: "Noibat",
  noivern: "Noivern",
  xerneas: "Xerneas",
  yveltal: "Yveltal",
  "zygarde-50": "Zygarde 50",
  diancie: "Diancie",
  hoopa: "Hoopa",
  volcanion: "Volcanion",
  rowlet: "Rowlet",
  dartrix: "Dartrix",
  decidueye: "Decidueye",
  litten: "Litten",
  torracat: "Torracat",
  incineroar: "Incineroar",
  popplio: "Popplio",
  brionne: "Brionne",
  primarina: "Primarina",
  pikipek: "Pikipek",
  trumbeak: "Trumbeak",
  toucannon: "Toucannon",
  yungoos: "Yungoos",
  gumshoos: "Gumshoos",
  grubbin: "Grubbin",
  charjabug: "Charjabug",
  vikavolt: "Vikavolt",
  crabrawler: "Crabrawler",
  crabominable: "Crabominable",
  "oricorio-baile": "Oricorio Baile",
  cutiefly: "Cutiefly",
  ribombee: "Ribombee",
  rockruff: "Rockruff",
  "lycanroc-midday": "Lycanroc Midday",
  "wishiwashi-solo": "Wishiwashi Solo",
  mareanie: "Mareanie",
  toxapex: "Toxapex",
  mudbray: "Mudbray",
  mudsdale: "Mudsdale",
  dewpider: "Dewpider",
  araquanid: "Araquanid",
  fomantis: "Fomantis",
  lurantis: "Lurantis",
  morelull: "Morelull",
  shiinotic: "Shiinotic",
  salandit: "Salandit",
  salazzle: "Salazzle",
  stufful: "Stufful",
  bewear: "Bewear",
  bounsweet: "Bounsweet",
  steenee: "Steenee",
  tsareena: "Tsareena",
  comfey: "Comfey",
  oranguru: "Oranguru",
  passimian: "Passimian",
  wimpod: "Wimpod",
  golisopod: "Golisopod",
  sandygast: "Sandygast",
  palossand: "Palossand",
  pyukumuku: "Pyukumuku",
  "type-null": "Type Null",
  silvally: "Silvally",
  "minior-red-meteor": "Minior Red Meteor",
  komala: "Komala",
  turtonator: "Turtonator",
  togedemaru: "Togedemaru",
  "mimikyu-disguised": "Mimikyu Disguised",
  bruxish: "Bruxish",
  drampa: "Drampa",
  dhelmise: "Dhelmise",
  "jangmo-o": "Jangmo-o",
  "hakamo-o": "Hakamo-o",
  "kommo-o": "Kommo-o",
  "tapu-koko": "Tapu Koko",
  "tapu-lele": "Tapu Lele",
  "tapu-bulu": "Tapu Bulu",
  "tapu-fini": "Tapu Fini",
  cosmog: "Cosmog",
  cosmoem: "Cosmoem",
  solgaleo: "Solgaleo",
  lunala: "Lunala",
  nihilego: "Nihilego",
  buzzwole: "Buzzwole",
  pheromosa: "Pheromosa",
  xurkitree: "Xurkitree",
  celesteela: "Celesteela",
  kartana: "Kartana",
  guzzlord: "Guzzlord",
  necrozma: "Necrozma",
  magearna: "Magearna",
  marshadow: "Marshadow",
  poipole: "Poipole",
  naganadel: "Naganadel",
  stakataka: "Stakataka",
  blacephalon: "Blacephalon",
  zeraora: "Zeraora",
  meltan: "Meltan",
  melmetal: "Melmetal",
  grookey: "Grookey",
  thwackey: "Thwackey",
  rillaboom: "Rillaboom",
  scorbunny: "Scorbunny",
  raboot: "Raboot",
  cinderace: "Cinderace",
  sobble: "Sobble",
  drizzile: "Drizzile",
  inteleon: "Inteleon",
  skwovet: "Skwovet",
  greedent: "Greedent",
  rookidee: "Rookidee",
  corvisquire: "Corvisquire",
  corviknight: "Corviknight",
  blipbug: "Blipbug",
  dottler: "Dottler",
  orbeetle: "Orbeetle",
  nickit: "Nickit",
  thievul: "Thievul",
  gossifleur: "Gossifleur",
  eldegoss: "Eldegoss",
  wooloo: "Wooloo",
  dubwool: "Dubwool",
  chewtle: "Chewtle",
  drednaw: "Drednaw",
  yamper: "Yamper",
  boltund: "Boltund",
  rolycoly: "Rolycoly",
  carkol: "Carkol",
  coalossal: "Coalossal",
  applin: "Applin",
  flapple: "Flapple",
  appletun: "Appletun",
  silicobra: "Silicobra",
  sandaconda: "Sandaconda",
  cramorant: "Cramorant",
  arrokuda: "Arrokuda",
  barraskewda: "Barraskewda",
  toxel: "Toxel",
  "toxtricity-amped": "Toxtricity Amped",
  sizzlipede: "Sizzlipede",
  centiskorch: "Centiskorch",
  clobbopus: "Clobbopus",
  grapploct: "Grapploct",
  sinistea: "Sinistea",
  polteageist: "Polteageist",
  hatenna: "Hatenna",
  hattrem: "Hattrem",
  hatterene: "Hatterene",
  impidimp: "Impidimp",
  morgrem: "Morgrem",
  grimmsnarl: "Grimmsnarl",
  obstagoon: "Obstagoon",
  perrserker: "Perrserker",
  cursola: "Cursola",
  sirfetchd: "Sirfetch'd",
  "mr-rime": "Mr Rime",
  runerigus: "Runerigus",
  milcery: "Milcery",
  alcremie: "Alcremie",
  falinks: "Falinks",
  pincurchin: "Pincurchin",
  snom: "Snom",
  frosmoth: "Frosmoth",
  stonjourner: "Stonjourner",
  "eiscue-ice": "Eiscue Ice",
  "indeedee-male": "Indeedee Male",
  "morpeko-full-belly": "Morpeko Full Belly",
  cufant: "Cufant",
  copperajah: "Copperajah",
  dracozolt: "Dracozolt",
  arctozolt: "Arctozolt",
  dracovish: "Dracovish",
  arctovish: "Arctovish",
  duraludon: "Duraludon",
  dreepy: "Dreepy",
  drakloak: "Drakloak",
  dragapult: "Dragapult",
  zacian: "Zacian",
  zamazenta: "Zamazenta",
  eternatus: "Eternatus",
  kubfu: "Kubfu",
  "urshifu-single-strike": "Urshifu Single Strike",
  zarude: "Zarude",
  regieleki: "Regieleki",
  regidrago: "Regidrago",
  glastrier: "Glastrier",
  spectrier: "Spectrier",
  calyrex: "Calyrex",
  wyrdeer: "Wyrdeer",
  kleavor: "Kleavor",
  ursaluna: "Ursaluna",
  "basculegion-male": "Basculegion Male",
  sneasler: "Sneasler",
  overqwil: "Overqwil",
  "enamorus-incarnate": "Enamorus Incarnate",
  sprigatito: "Sprigatito",
  floragato: "Floragato",
  meowscarada: "Meowscarada",
  fuecoco: "Fuecoco",
  crocalor: "Crocalor",
  skeledirge: "Skeledirge",
  quaxly: "Quaxly",
  quaxwell: "Quaxwell",
  quaquaval: "Quaquaval",
  lechonk: "Lechonk",
  oinkologne: "Oinkologne",
  tarountula: "Tarountula",
  spidops: "Spidops",
  nymble: "Nymble",
  lokix: "Lokix",
  pawmi: "Pawmi",
  pawmo: "Pawmo",
  pawmot: "Pawmot",
  tandemaus: "Tandemaus",
  maushold: "Maushold",
  fidough: "Fidough",
  dachsbun: "Dachsbun",
  smoliv: "Smoliv",
  dolliv: "Dolliv",
  arboliva: "Arboliva",
  squawkabilly: "Squawkabilly",
  nacli: "Nacli",
  naclstack: "Naclstack",
  garganacl: "Garganacl",
  charcadet: "Charcadet",
  armarouge: "Armarouge",
  ceruledge: "Ceruledge",
  tadbulb: "Tadbulb",
  bellibolt: "Bellibolt",
  wattrel: "Wattrel",
  kilowattrel: "Kilowattrel",
  maschiff: "Maschiff",
  mabosstiff: "Mabosstiff",
  shroodle: "Shroodle",
  grafaiai: "Grafaiai",
  bramblin: "Bramblin",
  brambleghast: "Brambleghast",
  toedscool: "Toedscool",
  toedscruel: "Toedscruel",
  klawf: "Klawf",
  capsakid: "Capsakid",
  scovillain: "Scovillain",
  rellor: "Rellor",
  rabsca: "Rabsca",
  flittle: "Flittle",
  espathra: "Espathra",
  tinkatink: "Tinkatink",
  tinkatuff: "Tinkatuff",
  tinkaton: "Tinkaton",
  wiglett: "Wiglett",
  wugtrio: "Wugtrio",
  bombirdier: "Bombirdier",
  finizen: "Finizen",
  palafin: "Palafin",
  varoom: "Varoom",
  revavroom: "Revavroom",
  cyclizar: "Cyclizar",
  orthworm: "Orthworm",
  glimmet: "Glimmet",
  glimmora: "Glimmora",
  greavard: "Greavard",
  houndstone: "Houndstone",
  flamigo: "Flamigo",
  cetoddle: "Cetoddle",
  cetitan: "Cetitan",
  veluza: "Veluza",
  dondozo: "Dondozo",
  tatsugiri: "Tatsugiri",
  annihilape: "Annihilape",
  clodsire: "Clodsire",
  farigiraf: "Farigiraf",
  dudunsparce: "Dudunsparce",
  kingambit: "Kingambit",
  "great-tusk": "Great Tusk",
  "scream-tail": "Scream Tail",
  "brute-bonnet": "Brute Bonnet",
  "flutter-mane": "Flutter Mane",
  "slither-wing": "Slither Wing",
  "sandy-shocks": "Sandy Shocks",
  "iron-treads": "Iron Treads",
  "iron-bundle": "Iron Bundle",
  "iron-hands": "Iron Hands",
  "iron-jugulis": "Iron Jugulis",
  "iron-moth": "Iron Moth",
  "iron-thorns": "Iron Thorns",
  frigibax: "Frigibax",
  arctibax: "Arctibax",
  baxcalibur: "Baxcalibur",
  gimmighoul: "Gimmighoul",
  gholdengo: "Gholdengo",
  "wo-chien": "Wo-Chien",
  "chien-pao": "Chien-Pao",
  "ting-lu": "Ting-Lu",
  "chi-yu": "Chi-Yu",
  "roaring-moon": "Roaring Moon",
  "iron-valiant": "Iron Valiant",
  koraidon: "Koraidon",
  miraidon: "Miraidon",
  "walking-wake": "Walking Wake",
  "iron-leaves": "Iron Leaves",
  dipplin: "Dipplin",
  poltchageist: "Poltchageist",
  sinistcha: "Sinistcha",
  okidogi: "Okidogi",
  munkidori: "Munkidori",
  fezandipiti: "Fezandipiti",
  ogerpon: "Ogerpon",
  archaludon: "Archaludon",
  hydrapple: "Hydrapple",
  "gouging-fire": "Gouging Fire",
  "raging-bolt": "Raging Bolt",
  "iron-boulder": "Iron Boulder",
  "iron-crown": "Iron Crown",
  terapagos: "Terapagos",
  pecharunt: "Pecharunt",
  "deoxys-attack": "Deoxys Attack",
  "deoxys-defense": "Deoxys Defense",
  "deoxys-speed": "Deoxys Speed",
  "wormadam-sandy": "Wormadam Sandy",
  "wormadam-trash": "Wormadam Trash",
  "shaymin-sky": "Shaymin Sky",
  "giratina-origin": "Giratina Origin",
  "rotom-heat": "Rotom Heat",
  "rotom-wash": "Rotom Wash",
  "rotom-frost": "Rotom Frost",
  "rotom-fan": "Rotom Fan",
  "rotom-mow": "Rotom Mow",
  "castform-sunny": "Castform Sunny",
  "castform-rainy": "Castform Rainy",
  "castform-snowy": "Castform Snowy",
  "basculin-blue-striped": "Basculin Blue Striped",
  "darmanitan-zen": "Darmanitan Zen",
  "meloetta-pirouette": "Meloetta Pirouette",
  "tornadus-therian": "Tornadus Therian",
  "thundurus-therian": "Thundurus Therian",
  "landorus-therian": "Landorus Therian",
  "kyurem-black": "Kyurem Black",
  "kyurem-white": "Kyurem White",
  "keldeo-resolute": "Keldeo Resolute",
  "meowstic-female": "Meowstic Female",
  "aegislash-blade": "Aegislash Blade",
  "pumpkaboo-small": "Pumpkaboo Small",
  "pumpkaboo-large": "Pumpkaboo Large",
  "pumpkaboo-super": "Pumpkaboo Super",
  "gourgeist-small": "Gourgeist Small",
  "gourgeist-large": "Gourgeist Large",
  "gourgeist-super": "Gourgeist Super",
  "venusaur-mega": "Venusaur Mega",
  "charizard-mega-x": "Charizard Mega X",
  "charizard-mega-y": "Charizard Mega Y",
  "blastoise-mega": "Blastoise Mega",
  "alakazam-mega": "Alakazam Mega",
  "gengar-mega": "Gengar Mega",
  "kangaskhan-mega": "Kangaskhan Mega",
  "pinsir-mega": "Pinsir Mega",
  "gyarados-mega": "Gyarados Mega",
  "aerodactyl-mega": "Aerodactyl Mega",
  "mewtwo-mega-x": "Mewtwo Mega X",
  "mewtwo-mega-y": "Mewtwo Mega Y",
  "ampharos-mega": "Ampharos Mega",
  "scizor-mega": "Scizor Mega",
  "heracross-mega": "Heracross Mega",
  "houndoom-mega": "Houndoom Mega",
  "tyranitar-mega": "Tyranitar Mega",
  "blaziken-mega": "Blaziken Mega",
  "gardevoir-mega": "Gardevoir Mega",
  "mawile-mega": "Mawile Mega",
  "aggron-mega": "Aggron Mega",
  "medicham-mega": "Medicham Mega",
  "manectric-mega": "Manectric Mega",
  "banette-mega": "Banette Mega",
  "absol-mega": "Absol Mega",
  "garchomp-mega": "Garchomp Mega",
  "lucario-mega": "Lucario Mega",
  "abomasnow-mega": "Abomasnow Mega",
  "floette-eternal": "Floette Eternal",
  "latias-mega": "Latias Mega",
  "latios-mega": "Latios Mega",
  "swampert-mega": "Swampert Mega",
  "sceptile-mega": "Sceptile Mega",
  "sableye-mega": "Sableye Mega",
  "altaria-mega": "Altaria Mega",
  "gallade-mega": "Gallade Mega",
  "audino-mega": "Audino Mega",
  "sharpedo-mega": "Sharpedo Mega",
  "slowbro-mega": "Slowbro Mega",
  "steelix-mega": "Steelix Mega",
  "pidgeot-mega": "Pidgeot Mega",
  "glalie-mega": "Glalie Mega",
  "diancie-mega": "Diancie Mega",
  "metagross-mega": "Metagross Mega",
  "kyogre-primal": "Kyogre Primal",
  "groudon-primal": "Groudon Primal",
  "rayquaza-mega": "Rayquaza Mega",
  "hoopa-unbound": "Hoopa Unbound",
  "camerupt-mega": "Camerupt Mega",
  "lopunny-mega": "Lopunny Mega",
  "salamence-mega": "Salamence Mega",
  "beedrill-mega": "Beedrill Mega",
  "rattata-alola": "Rattata Alola",
  "raticate-alola": "Raticate Alola",
  "raichu-alola": "Raichu Alola",
  "sandshrew-alola": "Sandshrew Alola",
  "sandslash-alola": "Sandslash Alola",
  "vulpix-alola": "Vulpix Alola",
  "ninetales-alola": "Ninetales Alola",
  "diglett-alola": "Diglett Alola",
  "dugtrio-alola": "Dugtrio Alola",
  "meowth-alola": "Meowth Alola",
  "persian-alola": "Persian Alola",
  "geodude-alola": "Geodude Alola",
  "graveler-alola": "Graveler Alola",
  "golem-alola": "Golem Alola",
  "grimer-alola": "Grimer Alola",
  "muk-alola": "Muk Alola",
  "exeggutor-alola": "Exeggutor Alola",
  "marowak-alola": "Marowak Alola",
  "greninja-ash": "Greninja Ash",
  "zygarde-10-power-construct": "Zygarde 10%",
  "zygarde-50-power-construct": "Zygarde 50%",
  "zygarde-complete": "Zygarde Complete",
  "oricorio-pom-pom": "Oricorio Pom Pom",
  "oricorio-pau": "Oricorio Pau",
  "oricorio-sensu": "Oricorio Sensu",
  "lycanroc-midnight": "Lycanroc Midnight",
  "wishiwashi-school": "Wishiwashi School",
  "minior-orange-meteor": "Minior Orange Meteor",
  "minior-yellow-meteor": "Minior Yellow Meteor",
  "minior-green-meteor": "Minior Green Meteor",
  "minior-blue-meteor": "Minior Blue Meteor",
  "minior-indigo-meteor": "Minior Indigo Meteor",
  "minior-violet-meteor": "Minior Violet Meteor",
  "minior-red": "Minior Red",
  "minior-orange": "Minior Orange",
  "minior-yellow": "Minior Yellow",
  "minior-green": "Minior Green",
  "minior-blue": "Minior Blue",
  "minior-indigo": "Minior Indigo",
  "minior-violet": "Minior Violet",
  "mimikyu-busted": "Mimikyu Busted",
  "magearna-original": "Magearna Original",
  "rockruff-own-tempo": "Rockruff Own Tempo",
  "lycanroc-dusk": "Lycanroc Dusk",
  "necrozma-dusk": "Necrozma Dusk",
  "necrozma-dawn": "Necrozma Dawn",
  "necrozma-ultra": "Necrozma Ultra",
  "meowth-galar": "Meowth Galar",
  "ponyta-galar": "Ponyta Galar",
  "rapidash-galar": "Rapidash Galar",
  "slowpoke-galar": "Slowpoke Galar",
  "slowbro-galar": "Slowbro Galar",
  "farfetchd-galar": "Farfetch'd Galar",
  "weezing-galar": "Weezing Galar",
  "mr-mime-galar": "Mr Mime Galar",
  "articuno-galar": "Articuno Galar",
  "zapdos-galar": "Zapdos Galar",
  "moltres-galar": "Moltres Galar",
  "slowking-galar": "Slowking Galar",
  "corsola-galar": "Corsola Galar",
  "zigzagoon-galar": "Zigzagoon Galar",
  "linoone-galar": "Linoone Galar",
  "darumaka-galar": "Darumaka Galar",
  "darmanitan-galar-standard": "Darmanitan Galar Standard",
  "darmanitan-galar-zen": "Darmanitan Galar Zen",
  "yamask-galar": "Yamask Galar",
  "stunfisk-galar": "Stunfisk Galar",
  "toxtricity-low-key": "Toxtricity Low Key",
  "eiscue-noice": "Eiscue Noice",
  "indeedee-female": "Indeedee Female",
  "morpeko-hangry": "Morpeko Hangry",
  "zacian-crowned": "Zacian Crowned",
  "zamazenta-crowned": "Zamazenta Crowned",
  "eternatus-eternamax": "Eternatus Eternamax",
  "urshifu-rapid-strike": "Urshifu Rapid Strike",
  "zarude-dada": "Zarude Dada",
  "calyrex-ice": "Calyrex Ice",
  "calyrex-shadow": "Calyrex Shadow",
  "venusaur-gmax": "Venusaur Gmax",
  "charizard-gmax": "Charizard Gmax",
  "blastoise-gmax": "Blastoise Gmax",
  "butterfree-gmax": "Butterfree Gmax",
  "pikachu-gmax": "Pikachu Gmax",
  "meowth-gmax": "Meowth Gmax",
  "machamp-gmax": "Machamp Gmax",
  "gengar-gmax": "Gengar Gmax",
  "kingler-gmax": "Kingler Gmax",
  "lapras-gmax": "Lapras Gmax",
  "eevee-gmax": "Eevee Gmax",
  "snorlax-gmax": "Snorlax Gmax",
  "garbodor-gmax": "Garbodor Gmax",
  "melmetal-gmax": "Melmetal Gmax",
  "rillaboom-gmax": "Rillaboom Gmax",
  "cinderace-gmax": "Cinderace Gmax",
  "inteleon-gmax": "Inteleon Gmax",
  "corviknight-gmax": "Corviknight Gmax",
  "orbeetle-gmax": "Orbeetle Gmax",
  "drednaw-gmax": "Drednaw Gmax",
  "coalossal-gmax": "Coalossal Gmax",
  "flapple-gmax": "Flapple Gmax",
  "appletun-gmax": "Appletun Gmax",
  "sandaconda-gmax": "Sandaconda Gmax",
  "toxtricity-amped-gmax": "Toxtricity Amped Gmax",
  "centiskorch-gmax": "Centiskorch Gmax",
  "hatterene-gmax": "Hatterene Gmax",
  "grimmsnarl-gmax": "Grimmsnarl Gmax",
  "alcremie-gmax": "Alcremie Gmax",
  "copperajah-gmax": "Copperajah Gmax",
  "duraludon-gmax": "Duraludon Gmax",
  "urshifu-single-strike-gmax": "Urshifu Single Strike Gmax",
  "urshifu-rapid-strike-gmax": "Urshifu Rapid Strike Gmax",
  "toxtricity-low-key-gmax": "Toxtricity Low Key Gmax",
  "growlithe-hisui": "Growlithe Hisui",
  "arcanine-hisui": "Arcanine Hisui",
  "voltorb-hisui": "Voltorb Hisui",
  "electrode-hisui": "Electrode Hisui",
  "typhlosion-hisui": "Typhlosion Hisui",
  "qwilfish-hisui": "Qwilfish Hisui",
  "sneasel-hisui": "Sneasel Hisui",
  "samurott-hisui": "Samurott Hisui",
  "lilligant-hisui": "Lilligant Hisui",
  "zorua-hisui": "Zorua Hisui",
  "zoroark-hisui": "Zoroark Hisui",
  "braviary-hisui": "Braviary Hisui",
  "sliggoo-hisui": "Sliggoo Hisui",
  "goodra-hisui": "Goodra Hisui",
  "avalugg-hisui": "Avalugg Hisui",
  "decidueye-hisui": "Decidueye Hisui",
  "dialga-origin": "Dialga Origin",
  "palkia-origin": "Palkia Origin",
  "basculin-white-striped": "Basculin White Striped",
  "basculegion-female": "Basculegion Female",
  "enamorus-therian": "Enamorus Therian",
  "tauros-paldea-combat-breed": "Tauros Paldea Combat Breed",
  "tauros-paldea-blaze-breed": "Tauros Paldea Blaze Breed",
  "tauros-paldea-aqua-breed": "Tauros Paldea Aqua Breed",
  "wooper-paldea": "Wooper Paldea",
  "oinkologne-female": "Oinkologne Female",
  "dudunsparce-three-segment": "Dudunsparce Three-Segment",
  "palafin-hero": "Palafin Hero",
  "maushold-family-of-three": "Maushold Family Of Three",
  "tatsugiri-droopy": "Tatsugiri Droopy",
  "tatsugiri-stretchy": "Tatsugiri Stretchy",
  "squawkabilly-blue-plumage": "Squawkabilly Blue Plumage",
  "squawkabilly-yellow-plumage": "Squawkabilly Yellow Plumage",
  "squawkabilly-white-plumage": "Squawkabilly White Plumage",
  "ursaluna-bloodmoon": "Ursaluna Bloodmoon",
  "ogerpon-wellspring-mask": "Ogerpon Wellspring Mask",
  "ogerpon-hearthflame-mask": "Ogerpon Hearthflame Mask",
  "ogerpon-cornerstone-mask": "Ogerpon Cornerstone Mask",
  "terapagos-terastal": "Terapagos Terastal",
  "terapagos-stellar": "Terapagos Stellar",
};

export default pokemonNames;