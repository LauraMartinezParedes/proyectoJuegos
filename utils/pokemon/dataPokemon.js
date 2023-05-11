import { getPokemon } from "../../services/pokeapi.service";
import { typePokemon } from "./typePokeapi";
import { createAndPrintFigure } from "../../components/cardPokemon/cardPokemon";

let dataGlobal;

export const dataPokemon = async() =>{
    const data = [];
    for (let i = 1; i < 151; i++) {
      data.push(await getPokemon(i));
    }
  
    return dataMap(data);
};

const dataMap = (data) => {
    const filterData = data.map((pokemon) => ({
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      type: pokemon.types,
      heigth: (pokemon.height)/10,
      weight: (pokemon.weight)/10,
      id: pokemon.id
    }));
    const dataType = typePokemon(filterData);
    dataGlobal = {pokemon: filterData, type: dataType}
    return dataGlobal;
}

export const filterPokeapi = (filtro, donde) => {
  switch (donde) {
    case "name":
      {
        const filterData = dataGlobal.pokemon.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(filtro.toLowerCase())
        );
        createAndPrintFigure(filterData);
      }
      break;
    case "type": {
      const filterData = dataGlobal.pokemon.filter((pokemon) =>
        pokemon.type[0].type.name.toLowerCase().includes(filtro.toLowerCase())
      );
      if (filterData.length === 0) {
        const filterData = dataGlobal.pokemon.filter((pokemon) =>
          pokemon.type[1]?.type.name
            .toLowerCase()
            .includes(filtro.toLowerCase())
        );

        createAndPrintFigure(filterData);
      } else {
        createAndPrintFigure(filterData);
      }

      break;
    }
  }
};

