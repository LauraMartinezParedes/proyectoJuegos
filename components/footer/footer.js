import "./footer.css"

const template = () =>{
    return `
    <p>Laura Martinez Paredes - 2023</p>
    `
}

export const printTemplate = () =>{
    document.querySelector("footer").innerHTML = template()
}