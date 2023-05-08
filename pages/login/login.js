import { initControler } from "../../utils/route";
import "./login.css"

const template = () =>
    `<div class="login">
    <input type="text" name="" id="" />
    <button id="buttonLogin">login</button>
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
  console.log("entro")
  document.querySelector("main").innerHTML = template();
    if (!localStorage.getItem("user"))
    document.querySelector("nav").style.display = "none";
    addListeners();
}