const add = document.getElementById("add");
const lista = document.querySelector(".list");
const inputContent = document.getElementById("input-text");

add.onclick = añadirElemento;

function añadirElemento(){
    // Contenedor
    let item  = document.createElement("DIV");
    item.classList.add("task");

    // Contenido
    let img = document.createElement("IMG");
    img.setAttribute("src", "img/unchecked.png");
    img.classList.add("unchecked");

    let contenido = document.createElement("P");
    contenido.classList.add("item-desc");
    contenido.innerHTML = inputContent.value;

    let x = document.createElement("SPAN");
    
    x.innerHTML = "\u00d7";

    // Añadir los elementos al contenedor
    item.appendChild(img)
    item.appendChild(contenido);
    item.appendChild(x)
    lista.appendChild(item);
}
