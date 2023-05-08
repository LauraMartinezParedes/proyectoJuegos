import "./cardPokemon.css";
export const createAndPrintFigure = (data) => {
  document.querySelector(".galleryPokemon").innerHTML = "";
  console.log(data);
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
      <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h2>${pokemon.name}</h2>
      </figure>`;
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};
