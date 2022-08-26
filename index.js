const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var DB = {
  games: [
    {
      id: 0,
      name: "Dofus",
      type: "MMORPG",
      price: "Mensalidade de 15R$",
    },
    {
      id: 2,
      name: "DayZ",
      type: "Simulator Survive / MMO",
      price: "80R$",
    },
    {
      id: 3,
      name: "Call of Duty Modern Warfare 3",
      type: "FPS",
      price: "90R$",
    },
    {
      id: 4,
      name: "Sekiro Shadow Die Twice",
      type: "Soulslike",
      price: "199R$",
    },
    {
      id: 5,
      name: "Stardew Valley",
      type: "Simulator / RPG",
      price: "30R$",
    },
  ],
};

app.listen(1245, () => {
  console.log("Server Working.");
});

app.get("/games", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});

app.get("/game/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus = 400;
  } else {
    var id = parseInt(req.params.id);
    var game = DB.games.find((g) => g.id == id);
    if (game != undefined) {
      // res.sendStatus = 200;
      res.status(302).json(game);
    } else {
      res.sendStatus(404);
    }
  }
});

app.post("/cadastro", (req, res) => {
  const { id, name, type, price } = req.body;

  DB.games.forEach((e) => {
    if (e.id == id) {
      res.status(412).json();
    }
  });
  DB.games.push({
    id,
    name,
    type,
    price,
  });
  res.status(200).json(DB);
});

app.delete("/game/:id", (req, res) => {
  if (isNaN(req.params.id)) {
    res.sendStatus(302);
  } else {
    var id = req.params.id;
    var index = DB.games.findIndex((index) => index.id == id); // se achar o index, vai ser 0 ou >0. Se não achar: = -1

    if (index == -1) {
      res.sendStatus(404);
    } else {
      DB.games.splice(index, 1);
      res.sendStatus(200);
    }
  }
});
