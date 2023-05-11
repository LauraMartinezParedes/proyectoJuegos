import { initControler } from "../../utils/route";
import { username } from "../../utils/usuario";


import "./dashboard.css"


// funcion template
const template = () => `
<div class="boxbienvenida">
<h2>Hola ${username()} !</h2>
</div>

<div id="containerDashboard">
    <ul>
        <li>
            <figure id="buttonpokeapi" class="figureDashboard">
                <img src="https://res.cloudinary.com/dm78sei77/image/upload/v1683821746/pikachu_stj2ej.png" alt="navigate to pokemon" 
                id="imgpikachu" />
                <h2>Pokemon</h2>
            </figure>
        </li>
        <li>
            <figure id="buttonwhakatopo" class="figureDashboard">
                <img src=".https://res.cloudinary.com/dm78sei77/image/upload/v1683821741/whakatopo_sxwhex.png" alt="navigate to whakatopo"
                id="imgwhakatopo"/>
                <h2>WhakaTopo</h2>
            </figure>
        </li>
        <li>
            <figure id="buttonmemorygame" class="figureDashboard">
                <img src="https://res.cloudinary.com/dm78sei77/image/upload/v1683821615/memory-game_qpfdus.png" alt="navigate to memorygame"
                id="imgmemorygame"/>
                <h2>Memory Game</h2>
            </figure>
        </li>
    </ul>
</div>
`;

const addListeners = () =>{
    const imgpikachu = document.getElementById("imgpikachu");
    imgpikachu.addEventListener("click", ()=>{
        initControler("pokeapi");
    });
    const imgwhakatopo = document.getElementById("imgwhakatopo");
    imgwhakatopo.addEventListener("click", ()=>{
        initControler("whakatopo");
    });
    const imgmemorygame = document.getElementById("imgmemorygame");
    imgmemorygame.addEventListener("click", ()=>{
        initControler("memorygame");
    });
};

export const printTemplate = () => {
    document.querySelector("main").innerHTML = template();
    addListeners();
};