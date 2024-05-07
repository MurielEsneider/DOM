function agregarNombre() {
  
    var nombre = document.getElementById("nombreInput").value;
    var TEXT = document.createElement("li");
    TEXT.textContent = nombre;
    document.getElementById("listaNombres").appendChild(TEXT);
    document.getElementById("nombreInput").value = ""; //PARA CUANDO NO PONEN NADA


}

