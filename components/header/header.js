import "./header.css"
import { initControler } from "../../utils/route"
const template = () =>{
    return `
        <img src="./images/juego-logo.png" alt="logo" class="logo" />
        <h1>Random Games</h1>
    <nav>
         <img src="./images/home.png" 
         alt="home" 
         id="buttonhome"/>

        <img src="./images/logout.png/"
        alt="logout" 
        id="buttonlogout"/>
        
        <img src="https://res.cloudinary.com/dm78sei77/image/upload/v1683821625/noche_gu8x2g.png" alt="noche" 
        id="noche" />
    </nav>
    `
}
const addListenersTheme = () =>{
    const darkTheme = document.querySelector("#noche")
    darkTheme.addEventListener("click",()=>{
        const toggleTheme = document.querySelector("body");
        toggleTheme.classList.toggle("darkTheme");
        if (!toggleTheme.classList.contains("darkTheme")){
            noche.src="https://res.cloudinary.com/dm78sei77/image/upload/v1683821702/sol_z0jobr.png";
        } else{
            noche.src="https://res.cloudinary.com/dm78sei77/image/upload/v1683821625/noche_gu8x2g.png";
        }
        
    })
}


const addListeners = () => {
    // evento de el boton de cambiar de color
    const buttonhome= document.getElementById("buttonhome");
    buttonhome.addEventListener("click", () => {
      initControler("dashboard");
    });

    const buttonLogout = document.getElementById("buttonlogout");
    buttonLogout.addEventListener("click", (e) => {
      console.log(e);
      localStorage.removeItem("user");
      initControler("login");
      if (!localStorage.getItem("user"))
        document.querySelector("nav").style.display = "none";
    });
}

export const printTemplate = () => {
    document.querySelector("header").innerHTML = template()
    addListeners();
    addListenersTheme();
}



