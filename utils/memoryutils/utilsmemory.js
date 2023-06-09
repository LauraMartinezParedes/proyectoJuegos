
import { getImages } from "./dataMemory";
import { initControler } from "../route";

export const randomize = () => {
  const cardData = getImages();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

export const checkCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");

  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};

export const restart = () => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
  });
};

export const resetGame = (move) => {
  const finish = document.querySelectorAll(".toggleCard");
  if (finish.length === 12) {
    setTimeout(() => 1000);
    const remove = document.querySelector("section");
    remove.innerHTML = "";
    remove.innerHTML = `
    <div class="final">
    <h2>${move} MOVIMIENTOS</h2>
    <p>¿Puedes hacerlo en menos movimientos? Vuelve a intentarlo!</p>
    <button class="resetButton">Play again</button> 
    </div>`;
    addListener(move);
  }
};

const addListener = () => {
  const buttonReset = document.querySelector(".resetButton");
  buttonReset.addEventListener("click", () => {
    initControler("memorygame");
  });
};
