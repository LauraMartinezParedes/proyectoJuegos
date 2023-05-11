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
                <img src="./images/pikachu.png" alt="navigate to pokemon" 
                id="imgpikachu" />
                <h2>Pokemon</h2>
            </figure>
        </li>
        <li>
            <figure id="buttonhangman" class="figureDashboard">
                <img src="../../public/images/hangman.png" alt="navigate to hangman"
                id="imghangman"/>
                <h2>Hangman</h2>
            </figure>
        </li>
        <li>
            <figure id="buttonwhakatopo" class="figureDashboard">
                <img src="./images/whakatopo.png/" alt="navigate to whakatopo"
                id="imgwhakatopo"/>
                <h2>WhakaTopo</h2>
            </figure>
        </li>
        <li>
            <figure id="buttonquiz" class="figureDashboard">
                <img src="../../public/images/quiz.png" alt="navigate to quiz"
                id="imgquiz"/>
                <h2>Quiz</h2>
            </figure>
        </li>
        <li>
            <figure id="buttonmemorygame" class="figureDashboard">
                <img src="../../public/images/memory-game.png" alt="navigate to memorygame"
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
    const imghangman = document.getElementById("imghangman");
    imghangman.addEventListener("click", ()=>{
        initControler("Hangman");
    });
    const imgwhakatopo = document.getElementById("imgwhakatopo");
    imgwhakatopo.addEventListener("click", ()=>{
        initControler("whakatopo");
    });
    const imgquiz = document.getElementById("imgquiz");
    imgquiz.addEventListener("click", ()=>{
        initControler("quiz");
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