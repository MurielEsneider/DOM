console.log("Eventos del DOM");

let parrafo = document.querySelector('p');
console.log(parrafo);

parrafo.addEventListener(
    'click', () => {
    console.log('Me hiciste click');
    }
)
parrafo.addEventListener('click',
    function click (){
        console.log('Me hiciste click 2');
    }

)

let botonclick = document.querySelector('#btn-click');
    console.log(botonclick);



botonclick.addEventListener('click',
    function alerta (){
        console.log('Hiciste Click en el botón');
    }
);
botonclick.addEventListener('dblclick',
    function alerta (){
        console.log('Hiciste doble Click en el botón');
    }
);
let inputinEntrada = document.querySelector('#input-entrada');
    console.log(inputinEntrada);

botonclick.addEventListener('mouseenter',
    function alerta (){
        console.log('Entraste a la zona de input');
    }
);



// 1.