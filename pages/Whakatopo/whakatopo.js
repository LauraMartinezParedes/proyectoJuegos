import { initControler } from "../../utils/route";
import { randomTime } from "../../utils/whakatopo/randomtime";
import "./whakatopo.css"

let lastHole; 
let score = 0; 
let timeUp = false;

const template = () => `
  <div class="interface">
<h2>WhakATopo</h2>
    <span class="score">0</span>
    <button id="startGame">Let's Start</button>
  </div>
  <div class="volverajugar"></div>
  <div class="game">
    <div class="hole hole1">
      <div class="mole"></div>
    </div>
    <div class="hole hole2">
      <div class="mole"></div>
    </div>
    <div class="hole hole3">
      <div class="mole"></div>
    </div>
    <div class="hole hole4">
      <div class="mole"></div>
    </div>
    <div class="hole hole5">
      <div class="mole"></div>
    </div>
    <div class="hole hole6">
      <div class="mole"></div>
    </div>
  </div>
`;

const randomHole = () => {
const index = Math.floor(
  Math.random() * document.querySelectorAll(".hole").length
    );

const hole = document.querySelectorAll(".hole")[index];
if (hole === lastHole) {
  return randomHole(document.querySelectorAll(".hole"));
}
  
lastHole = hole;
return hole;
};

const showMole = () => {
const time = randomTime(500, 1000);
const hole = randomHole(document.querySelectorAll(".hole"));
hole.classList.add("up");
  
setTimeout(() => {
  hole.classList.remove("up");
  if (!timeUp) {
    showMole();
  }
    }, time);
  };

const startGame = () => {
    timeUp = false;
    score = 0;
    showMole();
  
    setTimeout(() => {
      timeUp = true;
      const div = document.querySelector(".game");
      div.innerHTML="";
      const h2= document.createElement("h2")
      h2.innerHTML="Has acabado";
      const button= document.createElement("button");
      button.innerHTML="Play Again";
      button.setAttribute("class", "playAgainTopo")
      const div2= document.querySelector(".volverajugar")
      div2.append(h2, button);
      addListeners2();
    }, 15000);
};

const wack = (e) => {
    score++;
    e.target.parentNode.classList.remove("up");
    document.querySelector(".score").textContent = score;
};

const addListeners = () => {
    document.querySelectorAll(".mole")
      .forEach((mole) => mole.addEventListener("click", (e) => wack(e)));
  
    document.querySelector("#startGame").addEventListener("click", startGame);
};

const addListeners2 = ()=>{
  const button = document.querySelector(".playAgainTopo");
  button.addEventListener("click", ()=>{
    initControler("whakatopo");
  })
}
export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
};