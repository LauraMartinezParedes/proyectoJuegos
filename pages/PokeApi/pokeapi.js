import { printButtons } from "../../components/buttonPokeapi/buttonPokeapi";
import { createAndPrintFigure } from "../../components/cardPokemon/cardPokemon";
import { dataPokemon, filterPokeapi } from "../../utils/dataPokemon";
import "./pokeapi.css"

let dataServicePokemons;
let typeGlobal;
const template = () =>
  `
  <div id="pokemon">
  <h2>Pokemon Gallery</h2> 
    <div id="containerFilter">
      <div id="filterButton"></div>
      <input type="text" id="inputPokemon" placeholder="Busca tu pokemon favorito"/>
    </div>

    <div class="galleryPokemon"></div>
  </div>`;

export const dataService = async () => {
  const getData = await dataPokemon();
  const { pokemon, type } = getData; 
  console.log(pokemon);
  dataServicePokemons = pokemon;
  typeGlobal = type;
  createAndPrintFigure(pokemon);
  printButtons(type);
};



const addListeners = () => {
  const inputPokemon = document.getElementById("inputPokemon");
  inputPokemon.addEventListener("input", (e) => {
    filterPokeapi(e.target.value, "name");
  });
};

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
  dataService();
  addListeners();
};


