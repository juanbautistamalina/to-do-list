function añadirElemento() {
  if (inputContent.value != "") {

    // Crear Contenedor
    let item = document.createElement("DIV");
    item.classList.add("task");

    // Crear Imagen
    let img = document.createElement("IMG");
    img.setAttribute("src", "img/unchecked.png");
    img.classList.add("unchecked");

    
    // Crear Contenido
    let contenido = document.createElement("P");
    contenido.classList.add("item-desc");
    contenido.innerHTML = inputContent.value;

    inputContent.value = "" // Vacío el input

    // Crear Botón de eliminación
    let x = document.createElement("SPAN");
    x.classList.add("x");
    x.innerHTML = "\u00d7";


    // Añadir los elementos al contenedor
    item.appendChild(img);
    item.appendChild(contenido);
    item.appendChild(x);
    lista.appendChild(item);


    // BOTONES - FUNCIONALIDAD:

    // Añadir función al BOTON CHECK
    img.onclick = function () {
        if(img.className == "unchecked"){
            img.removeAttribute("src");
            img.setAttribute("src", "img/checked.png");
            img.classList.remove("unchecked");
            img.classList.add("checked");
            contenido.style.textDecoration = "line-through"
            contenido.style.fontWeight = "400";
        }else{
            img.removeAttribute("src");
            img.setAttribute("src", "img/unchecked.png");
            img.classList.remove("checked");
            img.classList.add("unchecked");
            contenido.style.textDecoration = "none";
            contenido.style.fontWeight = "500";
        }
    };

    // Añadir funcion al BOTÓN DE ELIMINACIÓN
    x.onclick = function () {
        lista.removeChild(item);
        inputContent.value = "";
      };
  }
}

const add = document.getElementById("add");
const lista = document.querySelector(".list");
const inputContent = document.getElementById("input-text");

add.onclick = añadirElemento;
