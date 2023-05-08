import { printButtons } from "../../components/buttonPokeapi/buttonPokeapi";
import { createAndPrintFigure } from "../../components/cardPokemon/cardPokemon";
import { dataPokemon } from "../../utils/dataPokemon";
import "./pokeapi.css"

let dataServicePokemons;
let typeGlobal;
const template = () =>
  ` <div id="pokemon">
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
    </div>

    <div class="galleryPokemon"></div>
  </div>`;

const dataService = async () => {
  const getData = await dataPokemon();
  console.log(getData);
  const { pokemon, type } = getData; 
  dataServicePokemons = pokemon;
  console.log(pokemon);
  typeGlobal = type;
  console.log(dataServicePokemons);
  createAndPrintFigure(pokemon);
  printButtons(type);
};



const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokemon(e.target.value, "name");
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};
