let main = document.querySelector("main");
console.log(main);

console.log("Crear nodos")
let div = document.createElement("div");
console.log(div);

main.appendChild(div);

let h3 = document.createElement("h3");
console.log(h3);

div.appendChild(h3);

let text = document.createTextNode("TEXTO CUALQUIERA");

h3.appendChild(text);

let p = document.createElement("p");
console.log(p)

div.appendChild(p);

let text2 = document.createTextNode("TEXTO CUALQUIERA");
console.log(text2);

p.appendChild(text2)