

let texto = document.getElementById("texto");
console.log(texto);

let parra = document.getElementsByClassName("parrafo");
console.log(parra);

let item = document.getElementsByTagName("id");
console.log(item);

let nombre = document.querySelector("#titulo");
console.log (nombre);

let items = document.querySelectorAll("li");
console.log(items);

// crear nodo h2
let texto2 = document.createElement("section");
console.log(texto2);

let header = document.querySelector("header");
console.log(header);

header.appendChild(texto2);


let texto3 = document.createTextNode("Es cualquier texto");
console.log(texto3)

texto2.appendChild(texto3);








