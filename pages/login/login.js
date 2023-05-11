import { initControler } from "../../utils/route";
import "./login.css"

const template = () =>
    `
    <div class="login">
    <img src="https://res.cloudinary.com/dm78sei77/image/upload/v1683815045/RANDOM_GAME-removebg-preview_i8gkbg.png"
    alt="login" class="imglogin"/>
    <input type="text" name="" id="" />
    <button id="buttonLogin"><h3>login</h3></button>
    </div>
  `;
    
const addListeners = () =>{
    const buttonLogin = document.getElementById("buttonLogin");
    buttonLogin.addEventListener("click", () => {
    const inputLogin = document.querySelector("input");
    localStorage.setItem("user", inputLogin.value);
    if (localStorage.getItem("user"))
      document.querySelector("nav").style.display = "block";
    initControler();
  });
}

export const printTemplate = () => {
  document.querySelector("main").innerHTML = template();
    if (!localStorage.getItem("user"))
    document.querySelector("nav").style.display = "none";
    addListeners();
}