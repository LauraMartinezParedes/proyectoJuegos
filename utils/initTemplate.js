import { printTemplate as printHeader } from "../components/header/header";
import { printTemplate as printFooter } from "../components/footer/footer";


export const initTemplate = () => {
    const app = document.getElementById("app")
    const header = document.createElement("header")
    const main = document.createElement("main")
    const footer = document.createElement("footer")

    app.append(header, main, footer)
    printHeader();
    printFooter();
}