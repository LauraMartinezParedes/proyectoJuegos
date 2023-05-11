import { filterPokeapi } from "../../utils/pokemon/dataPokemon";
import "./buttonPokeapi.css";

export const printButtons = (types) => {
  types.forEach((type) => {
    const idCustom = `button${type[0].toUpperCase() + type.slice(1)}`;
    const buttonType = `<button class="buttonFilter ${type}" id=>${type}</button>`;
    const filterButton = document.getElementById("filterButton");
    filterButton.innerHTML += buttonType;
  });
  addListeners(types);
};
const addListeners = (types) => {
  types.forEach((type) => {
    const buttonType = document.querySelector(`.${type}`);
    buttonType.addEventListener("click", (e) => {
      filterPokeapi(type, "type");
    });
  });
};