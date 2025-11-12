// games-data.js
const allGames = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    genre: "Aventura / Mundo Aberto",
    year: 2017,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Zelda+BOTW",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    releaseDate: "03 de Março, 2017",
    description: "Entre em um mundo de aventura...",
    tags: ["Aventura", "Mundo Aberto", "Ação", "Exploração"],
    reviews: []
  },
  {
    id: 2,
    title: "The Witcher 3: Wild Hunt",
    platform: "PC, PS4, Xbox One",
    genre: "RPG",
    year: 2015,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Witcher+3",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    releaseDate: "19 de Maio, 2015",
    description: "Você é Geralt de Rívia...",
    tags: ["RPG", "Mundo Aberto", "Fantasia", "História"],
    reviews: []
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    platform: "PS4, Xbox One, PC",
    genre: "Ação / Mundo Aberto",
    year: 2018,
    rating: 4.8,
    mode: "Single Player / Online",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=RDR2",
    developer: "Rockstar Studios",
    publisher: "Rockstar Games",
    releaseDate: "26 de Outubro, 2018",
    description: "América, 1899...",
    tags: ["Ação", "Mundo Aberto", "Faroeste", "Narrativa"],
    reviews: []
  },
  {
    id: 4,
    title: "The Last of Us Part I",
    platform: "PS3, PS4, PS5, PC",
    genre: "Ação / Drama",
    year: 2013,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=TLOU",
    developer: "Naughty Dog",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "14 de Junho, 2013",
    description: "Em uma civilização devastada...",
    tags: ["Ação", "Sobrevivência", "Narrativa", "Pós-apocalíptico"],
    reviews: []
  },
  {
    id: 5,
    title: "Grand Theft Auto V",
    platform: "Multi-plataforma",
    genre: "Ação / Sandbox",
    year: 2013,
    rating: 4.7,
    mode: "Single Player / Online",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=GTA+V",
    developer: "Rockstar North",
    publisher: "Rockstar Games",
    releaseDate: "17 de Setembro, 2013",
    description: "Quando um jovem ladrão...",
    tags: ["Ação", "Mundo Aberto", "Crime", "Sandbox"],
    reviews: []
  },
  {
    id: 6,
    title: "Minecraft",
    platform: "Multi-plataforma",
    genre: "Sandbox / Criativo",
    year: 2011,
    rating: 4.6,
    mode: "Single Player / Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Minecraft",
    developer: "Mojang Studios",
    publisher: "Mojang Studios / Microsoft",
    releaseDate: "18 de Novembro, 2011",
    description: "Minecraft é um jogo sobre...",
    tags: ["Sandbox", "Criatividade", "Sobrevivência", "Construção"],
    reviews: []
  },
  {
    id: 7,
    title: "Dark Souls",
    platform: "Multi-plataforma",
    genre: "RPG / Ação",
    year: 2011,
    rating: 4.7,
    mode: "Single Player / Online",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Dark+Souls",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "22 de Setembro, 2011",
    description: "Dark Souls é um RPG de ação...",
    tags: ["RPG", "Souls-like", "Desafiador", "Fantasia Sombria"],
    reviews: []
  },
  {
    id: 8,
    title: "Elden Ring",
    platform: "Multi-plataforma",
    genre: "RPG / Ação",
    year: 2022,
    rating: 4.9,
    mode: "Single Player / Online",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Elden+Ring",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    releaseDate: "25 de Fevereiro, 2022",
    description: "Levante-se, Maculado...",
    tags: ["RPG", "Mundo Aberto", "Souls-like", "Fantasia"],
    reviews: []
  },
  {
    id: 9,
    title: "Super Mario Odyssey",
    platform: "Nintendo Switch",
    genre: "Plataforma 3D",
    year: 2017,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Mario+Odyssey",
    developer: "Nintendo EPD",
    publisher: "Nintendo",
    releaseDate: "27 de Outubro, 2017",
    description: "Junte-se a Mario em uma aventura...",
    tags: ["Plataforma", "Aventura", "3D", "Nintendo"],
    reviews: []
  },
  {
    id: 10,
    title: "God of War (2018)",
    platform: "PS4, PS5, PC",
    genre: "Ação / Aventura",
    year: 2018,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=God+of+War",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    releaseDate: "20 de Abril, 2018",
    description: "Kratos retorna...",
    tags: ["Ação", "Narrativa", "Mitologia", "Combate"],
    reviews: []
  },
  {
    id: 11,
    title: "Half-Life 2",
    platform: "PC",
    genre: "FPS",
    year: 2004,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Half-Life+2",
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "16 de Novembro, 2004",
    description: "Gordon Freeman...",
    tags: ["FPS", "Ciência", "Narrativa", "Clássico"],
    reviews: []
  },
  {
    id: 12,
    title: "Fortnite",
    platform: "Multi-plataforma",
    genre: "Battle Royale",
    year: 2017,
    rating: 4.2,
    mode: "Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Fortnite",
    developer: "Epic Games",
    publisher: "Epic Games",
    releaseDate: "25 de Julho, 2017",
    description: "100 jogadores...",
    tags: ["Battle Royale", "Multiplayer", "Construção"],
    reviews: []
  },
  {
    id: 13,
    title: "Super Mario 64",
    platform: "Nintendo 64",
    genre: "Plataforma 3D",
    year: 1996,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Mario+64",
    developer: "Nintendo EAD",
    publisher: "Nintendo",
    releaseDate: "23 de Junho, 1996",
    description: "O primeiro Mario 3D...",
    tags: ["Clássico", "Plataforma", "3D", "Nintendo"],
    reviews: []
  },
  {
    id: 14,
    title: "The Legend of Zelda: Ocarina of Time",
    platform: "Nintendo 64",
    genre: "Aventura",
    year: 1998,
    rating: 5.0,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Ocarina+of+Time",
    developer: "Nintendo EAD",
    publisher: "Nintendo",
    releaseDate: "21 de Novembro, 1998",
    description: "Link viaja no tempo...",
    tags: ["Aventura", "Clássico", "RPG", "Nintendo"],
    reviews: []
  },
  {
    id: 15,
    title: "Metal Gear Solid 3: Snake Eater",
    platform: "PS2",
    genre: "Stealth / Ação",
    year: 2004,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=MGS3",
    developer: "Konami",
    publisher: "Konami",
    releaseDate: "17 de Novembro, 2004",
    description: "Naked Snake...",
    tags: ["Stealth", "Narrativa", "Cinema", "Espionagem"],
    reviews: []
  },
  {
    id: 16,
    title: "Persona 5 Royal",
    platform: "PS4, PS5, PC",
    genre: "JRPG",
    year: 2019,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Persona+5+Royal",
    developer: "Atlus",
    publisher: "Atlus",
    releaseDate: "31 de Outubro, 2019",
    description: "Ladrões Fantasmas...",
    tags: ["JRPG", "Narrativa", "Estilo", "Social"],
    reviews: []
  },
  {
    id: 17,
    title: "Bloodborne",
    platform: "PS4",
    genre: "RPG / Ação",
    year: 2015,
    rating: 4.8,
    mode: "Single Player / Online",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Bloodborne",
    developer: "FromSoftware",
    publisher: "Sony",
    releaseDate: "24 de Março, 2015",
    description: "Caçador em Yharnam...",
    tags: ["Souls-like", "Terror", "Lovecraft", "Desafio"],
    reviews: []
  },
  {
    id: 18,
    title: "The Elder Scrolls V: Skyrim",
    platform: "Multi-plataforma",
    genre: "RPG / Mundo Aberto",
    year: 2011,
    rating: 4.7,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Skyrim",
    developer: "Bethesda",
    publisher: "Bethesda",
    releaseDate: "11 de Novembro, 2011",
    description: "Você é o Dragonborn...",
    tags: ["RPG", "Mundo Aberto", "Fantasia", "Mods"],
    reviews: []
  },
  {
    id: 19,
    title: "Overwatch",
    platform: "Multi-plataforma",
    genre: "FPS / Heróis",
    year: 2016,
    rating: 4.5,
    mode: "Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Overwatch",
    developer: "Blizzard",
    publisher: "Blizzard",
    releaseDate: "24 de Maio, 2016",
    description: "Heróis do mundo...",
    tags: ["FPS", "Heróis", "Multiplayer", "Equipe"],
    reviews: []
  },
  {
    id: 20,
    title: "Counter-Strike: Global Offensive",
    platform: "PC",
    genre: "FPS",
    year: 2012,
    rating: 4.6,
    mode: "Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=CS:GO",
    developer: "Valve",
    publisher: "Valve",
    releaseDate: "21 de Agosto, 2012",
    description: "Terroristas vs Contra-Terroristas...",
    tags: ["FPS", "Competitivo", "Tático", "eSports"],
    reviews: []
  },
  {
    id: 21,
    title: "League of Legends",
    platform: "PC",
    genre: "MOBA",
    year: 2009,
    rating: 4.4,
    mode: "Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=LoL",
    developer: "Riot Games",
    publisher: "Riot Games",
    releaseDate: "27 de Outubro, 2009",
    description: "5v5 no Summoner's Rift...",
    tags: ["MOBA", "Competitivo", "Estratégia", "eSports"],
    reviews: []
  },
  {
    id: 22,
    title: "Super Smash Bros. Ultimate",
    platform: "Nintendo Switch",
    genre: "Luta / Party",
    year: 2018,
    rating: 4.8,
    mode: "Single / Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Smash+Ultimate",
    developer: "Bandai Namco",
    publisher: "Nintendo",
    releaseDate: "07 de Dezembro, 2018",
    description: "Todos estão aqui...",
    tags: ["Luta", "Party", "Nintendo", "Crossover"],
    reviews: []
  },
  {
    id: 23,
    title: "Resident Evil 4 Remake",
    platform: "Multi-plataforma",
    genre: "Survival Horror",
    year: 2023,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=RE4+Remake",
    developer: "Capcom",
    publisher: "Capcom",
    releaseDate: "24 de Março, 2023",
    description: "Leon S. Kennedy...",
    tags: ["Terror", "Ação", "Remake", "Sobrevivência"],
    reviews: []
  },
  {
    id: 24,
    title: "Pokémon Red/Blue",
    platform: "Game Boy",
    genre: "RPG",
    year: 1996,
    rating: 4.7,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Pokemon+Red",
    developer: "Game Freak",
    publisher: "Nintendo",
    releaseDate: "27 de Fevereiro, 1996",
    description: "Capture todos...",
    tags: ["RPG", "Clássico", "Coleção", "Nintendo"],
    reviews: []
  },
  {
    id: 25,
    title: "Tetris",
    platform: "Multi-plataforma",
    genre: "Puzzle",
    year: 1984,
    rating: 4.9,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Tetris",
    developer: "Alexey Pajitnov",
    publisher: "Vários",
    releaseDate: "06 de Junho, 1984",
    description: "Blocos que caem...",
    tags: ["Puzzle", "Clássico", "Viciante", "Simples"],
    reviews: []
  },
  {
    id: 26,
    title: "Super Mario Bros.",
    platform: "NES",
    genre: "Plataforma 2D",
    year: 1985,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Super+Mario+Bros",
    developer: "Nintendo R&D4",
    publisher: "Nintendo",
    releaseDate: "13 de Setembro, 1985",
    description: "Salve a princesa...",
    tags: ["Plataforma", "Clássico", "2D", "Nintendo"],
    reviews: []
  },
  {
    id: 27,
    title: "DOOM (1993)",
    platform: "PC",
    genre: "FPS",
    year: 1993,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=DOOM",
    developer: "id Software",
    publisher: "id Software",
    releaseDate: "10 de Dezembro, 1993",
    description: "Mate demônios...",
    tags: ["FPS", "Clássico", "Violento", "Revolucionário"],
    reviews: []
  },
  {
    id: 28,
    title: "Chrono Trigger",
    platform: "SNES",
    genre: "JRPG",
    year: 1995,
    rating: 5.0,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Chrono+Trigger",
    developer: "Square",
    publisher: "Square",
    releaseDate: "11 de Março, 1995",
    description: "Viagem no tempo...",
    tags: ["JRPG", "Clássico", "História", "Múltiplos Finais"],
    reviews: []
  },
  {
    id: 29,
    title: "BioShock",
    platform: "Multi-plataforma",
    genre: "FPS / RPG",
    year: 2007,
    rating: 4.8,
    mode: "Single Player",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Bioshock",
    developer: "2K Boston",
    publisher: "2K Games",
    releaseDate: "21 de Agosto, 2007",
    description: "Rapture...",
    tags: ["FPS", "Narrativa", "Submerso", "Filosófico"],
    reviews: []
  },
  {
    id: 30,
    title: "Genshin Impact",
    platform: "Multi-plataforma",
    genre: "RPG / Mundo Aberto",
    year: 2020,
    rating: 4.5,
    mode: "Single / Multiplayer",
    poster: "https://via.placeholder.com/320x480/005541/FAF7EE?text=Genshin",
    developer: "miHoYo",
    publisher: "miHoYo",
    releaseDate: "28 de Setembro, 2020",
    description: "Teyvat...",
    tags: ["RPG", "Mundo Aberto", "Gacha", "Anime"],
    reviews: []
  }
];


const communityLists = [
  {
    id: 1,
    title: "Melhores RPGs de Todos os Tempos",
    creator: "RPGMaster",
    likes: 892,
    gameCount: 10,
    badge: "RPG",
    category: "top-jogos",
    platform: "multi",
    genre: "rpg",
    year: 2024,
    rating: 4.8,
    games: [
      2, // Witcher 3
      8, // Elden Ring
      16, // Persona 5 Royal
      28, // Chrono Trigger
      17, // Skyrim
      4, // TLOU Part I
      9, // Super Mario Odyssey
      6, // Minecraft
      7, // Dark Souls
      10 // Half-Life 2
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Witcher+3",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Elden+Ring",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Persona+5+Royal",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Chrono+Trigger"
    ]
  },
  {
    id: 2,
    title: "Clássicos do Nintendo 64",
    creator: "RetroN64",
    likes: 645,
    gameCount: 2,
    badge: "Clássico",
    category: "por-ano",
    platform: "switch",
    genre: "plataforma",
    year: 1998,
    rating: 5.0,
    games: [
      13, // Super Mario 64
      14 // Ocarina of Time
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Super+Mario+64",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Ocarina+of+Time",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Super+Mario+64", // repete
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Ocarina+of+Time" // repete
    ]
  },
  {
    id: 3,
    title: "Melhores FPS da História",
    creator: "ShooterPro",
    likes: 721,
    gameCount: 6,
    badge: "FPS",
    category: "por-genero",
    platform: "multi",
    genre: "acao",
    year: 2023,
    rating: 4.7,
    games: [
      11, // Half-Life 2
      27, // DOOM
      20, // Counter-Strike: GO
      29, // Bioshock
      5, // GTA V
      19 // Overwatch
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Half-Life+2",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=DOOM",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=CS:GO",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Bioshock"
    ]
  },
  {
    id: 4,
    title: "Jogos Indie e Criativos",
    creator: "IndieFan",
    likes: 512,
    gameCount: 3,
    badge: "Indie",
    category: "indie",
    platform: "pc",
    genre: "indie",
    year: 2023,
    rating: 4.6,
    games: [
      6, // Minecraft
      25, // Tetris
      15 // Hollow Knight
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Minecraft",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Tetris",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Minecraft", // repete
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Tetris" // repete
    ]
  },
  {
    id: 5,
    title: "Aventura Épica em Mundo Aberto",
    creator: "Explorer",
    likes: 934,
    gameCount: 7,
    badge: "Mundo Aberto",
    category: "tematicas",
    platform: "multi",
    genre: "aventura",
    year: 2024,
    rating: 4.9,
    games: [
      1, // BOTW
      3, // RDR2
      8, // Elden Ring
      18, // Skyrim
      5, // GTA V
      2, // Witcher 3
      9 // Mario Odyssey
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Breath+of+the+Wild",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Red+Dead+Redemption+2",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Elden+Ring",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Skyrim"
    ]
  },
  {
    id: 6,
    title: "Jogos que Definiram Gerações",
    creator: "GameHistorian",
    likes: 1102,
    gameCount: 8,
    badge: "Icônico",
    category: "top-jogos",
    platform: "multi",
    genre: "aventura",
    year: 2024,
    rating: 4.9,
    games: [
      14, // Ocarina of Time
      26, // Super Mario Bros.
      27, // DOOM
      24, // Pokémon Red/Blue
      25, // Tetris
      13, // Mario 64
      12, // GTA V
      11 // Minecraft
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Ocarina+of+Time",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Super+Mario+Bros",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=DOOM",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Pokémon+Red/Blue"
    ]
  },
  {
    id: 7,
    title: "Melhor Narrativa em Jogos",
    creator: "StoryLover",
    likes: 876,
    gameCount: 5,
    badge: "Narrativa",
    category: "tematicas",
    platform: "multi",
    genre: "rpg",
    year: 2024,
    rating: 4.9,
    games: [
      4, // TLOU
      10, // God of War
      15, // MGS3
      29, // Bioshock
      3 // RDR2
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=The+Last+of+Us",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=God+of+War",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=MGS3",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Bioshock"
    ]
  },
  {
    id: 8,
    title: "Soulslike: Os Mais Desafiadores",
    creator: "SoulsVeteran",
    likes: 689,
    gameCount: 4,
    badge: "Desafio",
    category: "por-genero",
    platform: "multi",
    genre: "acao",
    year: 2024,
    rating: 4.8,
    games: [
      7, // Dark Souls
      8, // Elden Ring
      17, // Bloodborne
      28 // Sekiro
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Dark+Souls",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Elden+Ring",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Bloodborne",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Sekiro"
    ]
  },
  {
    id: 9,
    title: "Melhores Jogos de 2022",
    creator: "GameAwardsFan",
    likes: 543,
    gameCount: 2,
    badge: "2022",
    category: "por-ano",
    platform: "multi",
    genre: "rpg",
    year: 2022,
    rating: 4.8,
    games: [
      8, // Elden Ring
      10 // God of War Ragnarok
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Elden+Ring",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=God+of+War+Ragnarok",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Elden+Ring", // repete
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=God+of+War+Ragnarok" // repete
    ]
  },
  {
    id: 10,
    title: "Plataformas 2D/3D Perfeitas",
    creator: "JumpMaster",
    likes: 498,
    gameCount: 4,
    badge: "Plataforma",
    category: "por-genero",
    platform: "switch",
    genre: "plataforma",
    year: 2023,
    rating: 4.8,
    games: [
      9, // Mario Odyssey
      13, // Mario 64
      26, // Super Mario Bros.
      25 // Celeste
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Mario+Odyssey",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Mario+64",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Super+Mario+Bros",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Celeste"
    ]
  },
  {
    id: 11,
    title: "Jogos Multiplayer Viciantes",
    creator: "OnlineGamer",
    likes: 1023,
    gameCount: 6,
    badge: "Online",
    category: "tematicas",
    platform: "multi",
    genre: "acao",
    year: 2024,
    rating: 4.5,
    games: [
      12, // Fortnite
      19, // Overwatch
      20, // CS:GO
      21, // League of Legends
      30, // Among Us
      11 // Minecraft
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Fortnite",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Overwatch",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=CS:GO",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=League+of+Legends"
    ]
  },
  {
    id: 12,
    title: "Terror que Ainda Assusta",
    creator: "HorrorFan",
    likes: 667,
    gameCount: 4,
    badge: "Terror",
    category: "por-genero",
    platform: "multi",
    genre: "terror",
    year: 2024,
    rating: 4.7,
    games: [
      23, // RE4
      17, // Bloodborne
      4, // TLOU
      29 // Outlast
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=RE4",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Bloodborne",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=TLOU",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Outlast"
    ]
  },
  {
    id: 13,
    title: "Melhores Remakes da Década",
    creator: "RemakeLover",
    likes: 589,
    gameCount: 3,
    badge: "Remake",
    category: "tematicas",
    platform: "multi",
    genre: "acao",
    year: 2024,
    rating: 4.8,
    games: [
      4, // TLOU Part I
      23, // RE4
      10 // FF7 Remake
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=TLOU+Part+I",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=RE4+Remake",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=FF7+Remake",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=TLOU+Part+I" // repete
    ]
  },
  {
    id: 14,
    title: "Jogos com Melhor Trilha Sonora",
    creator: "SoundtrackKing",
    likes: 712,
    gameCount: 5,
    badge: "Música",
    category: "tematicas",
    platform: "multi",
    genre: "rpg",
    year: 2024,
    rating: 4.9,
    games: [
      14, // Ocarina of Time
      28, // Chrono Trigger
      16, // Persona 5
      10, // God of War
      9 // Nier Automata
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Ocarina+of+Time",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Chrono+Trigger",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Persona+5",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=God+of+War"
    ]
  },
  {
    id: 15,
    title: "Jogos para Jogar com Amigos",
    creator: "PartyPlayer",
    likes: 823,
    gameCount: 5,
    badge: "Co-op",
    category: "tematicas",
    platform: "multi",
    genre: "acao",
    year: 2024,
    rating: 4.6,
    games: [
      22, // Smash Ultimate
      12, // Fortnite
      6, // Minecraft
      30, // Genshin
      21 // Among Us
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Smash+Ultimate",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Fortnite",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Minecraft",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Genshin+Impact"
    ]
  },
  {
    id: 16,
    title: "JRPGs Essenciais",
    creator: "AnimeRPGFan",
    likes: 634,
    gameCount: 4,
    badge: "JRPG",
    category: "por-genero",
    platform: "multi",
    genre: "rpg",
    year: 2024,
    rating: 4.8,
    games: [
      16, // Persona 5
      28, // Chrono Trigger
      30, // Genshin
      15 // FF7
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Persona+5",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Chrono+Trigger",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Genshin+Impact",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Final+Fantasy+7"
    ]
  },
  {
    id: 17,
    title: "Jogos que Merecem Sequência",
    creator: "SequelPleaser",
    likes: 498,
    gameCount: 3,
    badge: "Sequência",
    category: "tematicas",
    platform: "multi",
    genre: "acao",
    year: 2024,
    rating: 4.7,
    games: [
      29, // Bioshock
      11, // Half-Life 2
      15 // MGS3
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Bioshock",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Half-Life+2",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=MGS3",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Bioshock" // repete
    ]
  },
  {
    id: 18,
    title: "Melhores Jogos de 2018",
    creator: "2018Fan",
    likes: 567,
    gameCount: 4,
    badge: "2018",
    category: "por-ano",
    platform: "multi",
    genre: "acao",
    year: 2018,
    rating: 4.9,
    games: [
      3, // RDR2
      10, // God of War
      22, // Smash Ultimate
      2 // Celeste
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Red+Dead+Redemption+2",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=God+of+War",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Smash+Ultimate",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Celeste"
    ]
  },
  {
    id: 19,
    title: "Jogos com Melhor Combate",
    creator: "CombatExpert",
    likes: 789,
    gameCount: 5,
    badge: "Combate",
    category: "tematicas",
    platform: "multi",
    genre: "acao",
    year: 2024,
    rating: 4.8,
    games: [
      10, // God of War
      8, // Elden Ring
      15, // MGS3
      23, // RE4
      9 // Devil May Cry 5
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=God+of+War",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Elden+Ring",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=MGS3",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=RE4"
    ]
  },
  {
    id: 20,
    title: "Clássicos dos Anos 90",
    creator: "90sKid",
    likes: 678,
    gameCount: 5,
    badge: "Clássico",
    category: "por-ano",
    platform: "multi",
    genre: "aventura",
    year: 1999,
    rating: 4.8,
    games: [
      13, // Mario 64
      14, // Ocarina
      24, // Pokémon
      28, // Chrono Trigger
      26 // DOOM
    ],
    preview: [
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Mario+64",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Ocarina+of+Time",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Pokémon+Red/Blue",
      "https://via.placeholder.com/320x480/003d2e/FFD700?text=Chrono+Trigger"
    ]
  }
];

// FUNÇÃO PARA INJETAR LISTAS COMUNITÁRIAS NO localStorage
function injectCommunityLists() {
  const key = 'checkpoint_lists';
  let lists = JSON.parse(localStorage.getItem(key) || '[]');

  // Se já tem listas com games, não faz nada
  if (lists.some(l => l.id <= 20 && l.games && l.games.length > 0)) {
    console.log("Listas comunitárias já injetadas com games.");
    return;
  }

  // Remove listas antigas sem games
  lists = lists.filter(l => l.id > 1000000000000 || !l.games);

  // Adiciona as comunitárias
  communityLists.forEach(cl => {
    if (!lists.find(l => l.id === cl.id)) {
      lists.push(cl);
    }
  });

  localStorage.setItem(key, JSON.stringify(lists));
  console.log("Listas comunitárias injetadas com sucesso!", lists);
}

// Executa ao carregar
injectCommunityLists();
