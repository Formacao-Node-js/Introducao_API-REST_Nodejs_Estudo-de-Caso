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

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.json(DB.games);
});
