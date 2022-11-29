import Game from './js/game.js';
import './css/styles.css';
import "bootstrap";
import * as $ from "jquery";
import "bootstrap/dist/css/bootstrap.min.css";

let game = new Game("Yoonis");

const playerSpot = $(".bottom");
for (let i = 0; i < Object.values(game.human.hand).length; i++) {
  const nCard = Object.values(game.human.hand)[i];
  nCard.render(true).appendTo(playerSpot);
}

const botSpot = $(".top");
for (let i = 0; i < Object.values(game.bot.hand).length; i++) {
  const nCard = Object.values(game.bot.hand)[i];
  nCard.render(false).appendTo(botSpot);
}

$(".player-card").on("click", (c) => {
  const elId = c.currentTarget.getAttribute("id").replace("card-", "");
  console.log(elId);
});