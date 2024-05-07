console.log('trabajando desde js');

var amarillo = document.querySelector('#amarillo');
console.log(amarillo);

amarillo.addEventListener('click',
    function mensaje(){
        console.log('Buscando el color amarillo');
        amarillo.style.backgroundColor = 'yellow';
    }
)



var rojo = document.querySelector('#rojo');
console.log(rojo);

rojo.addEventListener('click',
    function mensaje(){
        console.log('Buscando el color rojo');
        rojo.style.backgroundColor = 'red';
    }
)




var azul = document.querySelector('#azul');
console.log(azul);

azul.addEventListener('click',
    function mensaje(){
        console.log('Buscando el color azul');
        azul.style.backgroundColor = 'blue';
    }
)

//

var cuadro = document.querySelector('#cuadro');
console.log(cuadro);

azul.addEventListener('click',
    function mensaje(){
        console.log('Buscando el color azul');
        cuadro.style.backgroundColor = 'blue';
    }
)

rojo.addEventListener('click',
    function mensaje(){
        console.log('Buscando el color rojo');
        cuadro.style.backgroundColor = 'red';
    }
)

amarillo.addEventListener('click',
    function mensaje(){
        console.log('Buscando el color amarillo');
        cuadro.style.backgroundColor = 'yellow';
    }
)

cuadro.style.border = '2px solid black';
cuadro.style.width = '500px';
cuadro.style.height = '20vh';
cuadro.style.backgroundColor = 'black';





















