import "./cardPokemon.css";

export const createAndPrintFigure = (data) => {
  document.querySelector(".galleryPokemon").innerHTML = "";
  data.map((pokemon) => {
    const classCustomType = `"figurePokemon ${pokemon.type[0].type.name}"`;
    const templateFigure = `
      <figure class=${classCustomType}>
        <img src=${pokemon.image} alt=${pokemon.name} class="imgPokemon"/>
        <h3>${pokemon.name}</h3>
        <p>id: ${pokemon.id}</p>
        <p>${pokemon.heigth} cm</p>
        <p>${pokemon.weight} kg</p>
      </figure>`;
    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};
