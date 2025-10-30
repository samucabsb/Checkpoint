
const allGames = [
    {
      "id": 1,
      "title": "The Legend of Zelda: Breath of the Wild",
      "platform": "Nintendo Switch",
      "genre": "Aventura",
      "year": 2017,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://store.epicgames.com/pt-BR/p/battlefield-6"
    },
    {
      "id": 2,
      "title": "Elden Ring",
      "platform": "PC, PlayStation, Xbox",
      "genre": "RPG",
      "year": 2022,
      "rating": 4.7,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Elden+Ring"
    },
    {
      "id": 3,
      "title": "God of War Ragnarök",
      "platform": "PlayStation",
      "genre": "Ação",
      "year": 2022,
      "rating": 4.9,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=God+of+War"
    },
    {
      "id": 4,
      "title": "Red Dead Redemption 2",
      "platform": "Multi-plataforma",
      "genre": "Aventura",
      "year": 2018,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=RDR2"
    },
    {
      "id": 5,
      "title": "Cyberpunk 2077",
      "platform": "PC, Xbox, PlayStation",
      "genre": "RPG",
      "year": 2020,
      "rating": 4.2,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Cyberpunk"
    },
    {
      "id": 6,
      "title": "The Last of Us Part II",
      "platform": "PlayStation",
      "genre": "Ação",
      "year": 2020,
      "rating": 4.6,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=TLOU2"
    },
    {
      "id": 7,
      "title": "Minecraft",
      "platform": "Multi-plataforma",
      "genre": "Simulação",
      "year": 2011,
      "rating": 4.5,
      "mode": "multiplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Minecraft"
    },
    {
      "id": 8,
      "title": "Hollow Knight",
      "platform": "PC, Nintendo Switch",
      "genre": "Ação",
      "year": 2017,
      "rating": 4.7,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Hollow+Knight"
    },
    {
      "id": 9,
      "title": "Hades",
      "platform": "PC, PlayStation, Xbox, Nintendo Switch",
      "genre": "Ação",
      "year": 2020,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Hades"
    },
    {
      "id": 10,
      "title": "Stardew Valley",
      "platform": "Multi-plataforma",
      "genre": "Simulação",
      "year": 2016,
      "rating": 4.9,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Stardew"
    },
    {
      "id": 11,
      "title": "Dark Souls III",
      "platform": "PC, PlayStation, Xbox",
      "genre": "RPG",
      "year": 2016,
      "rating": 4.6,
      "mode": "multiplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Dark+Souls"
    },
    {
      "id": 12,
      "title": "Portal 2",
      "platform": "PC, PlayStation, Xbox",
      "genre": "Puzzle",
      "year": 2011,
      "rating": 4.9,
      "mode": "coop",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Portal+2"
    },
    {
      "id": 13,
      "title": "Sekiro: Shadows Die Twice",
      "platform": "PC, PlayStation, Xbox",
      "genre": "Ação",
      "year": 2019,
      "rating": 4.7,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Sekiro"
    },
    {
      "id": 14,
      "title": "Celeste",
      "platform": "Multi-plataforma",
      "genre": "Puzzle",
      "year": 2018,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Celeste"
    },
    {
      "id": 15,
      "title": "Bloodborne",
      "platform": "PlayStation",
      "genre": "RPG",
      "year": 2015,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Bloodborne"
    },
    {
      "id": 16,
      "title": "The Witcher 3: Wild Hunt",
      "platform": "Multi-plataforma",
      "genre": "RPG",
      "year": 2015,
      "rating": 4.9,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Witcher+3"
    },
    {
      "id": 17,
      "title": "Super Mario Odyssey",
      "platform": "Nintendo Switch",
      "genre": "Aventura",
      "year": 2017,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Mario"
    },
    {
      "id": 18,
      "title": "Undertale",
      "platform": "Multi-plataforma",
      "genre": "RPG",
      "year": 2015,
      "rating": 4.7,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Undertale"
    },
    {
      "id": 19,
      "title": "Doom Eternal",
      "platform": "Multi-plataforma",
      "genre": "Ação",
      "year": 2020,
      "rating": 4.6,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Doom"
    },
    {
      "id": 20,
      "title": "Death Stranding",
      "platform": "PC, PlayStation",
      "genre": "Aventura",
      "year": 2019,
      "rating": 4.3,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Death+Stranding"
    },
    {
      "id": 21,
      "title": "Ghost of Tsushima",
      "platform": "PlayStation",
      "genre": "Ação",
      "year": 2020,
      "rating": 4.7,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Tsushima"
    },
    {
      "id": 22,
      "title": "Spider-Man",
      "platform": "PlayStation",
      "genre": "Ação",
      "year": 2018,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Spider-Man"
    },
    {
      "id": 23,
      "title": "Forza Horizon 5",
      "platform": "PC, Xbox",
      "genre": "Corrida",
      "year": 2021,
      "rating": 4.7,
      "mode": "multiplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Forza"
    },
    {
      "id": 24,
      "title": "It Takes Two",
      "platform": "Multi-plataforma",
      "genre": "Aventura",
      "year": 2021,
      "rating": 4.9,
      "mode": "coop",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=It+Takes+Two"
    },
    {
      "id": 25,
      "title": "Returnal",
      "platform": "PlayStation",
      "genre": "Ação",
      "year": 2021,
      "rating": 4.5,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Returnal"
    },
    {
      "id": 26,
      "title": "Metroid Dread",
      "platform": "Nintendo Switch",
      "genre": "Ação",
      "year": 2021,
      "rating": 4.6,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Metroid"
    },
    {
      "id": 27,
      "title": "Resident Evil Village",
      "platform": "Multi-plataforma",
      "genre": "Ação",
      "year": 2021,
      "rating": 4.6,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=RE+Village"
    },
    {
      "id": 28,
      "title": "Disco Elysium",
      "platform": "Multi-plataforma",
      "genre": "RPG",
      "year": 2019,
      "rating": 4.8,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Disco+Elysium"
    },
    {
      "id": 29,
      "title": "Control",
      "platform": "Multi-plataforma",
      "genre": "Ação",
      "year": 2019,
      "rating": 4.5,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=Control"
    },
    {
      "id": 30,
      "title": "Final Fantasy VII Remake",
      "platform": "PlayStation, PC",
      "genre": "RPG",
      "year": 2020,
      "rating": 4.7,
      "mode": "singleplayer",
      "poster": "https://via.placeholder.com/200x300/005541/FAF7EE?text=FF7"
    }
  ]

