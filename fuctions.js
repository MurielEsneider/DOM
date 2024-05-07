console.log("hola consola");



//funciones sin parámetros

function Saludar(){
    console.log('hola soy la primer funcion');
    
};

Saludar();

function Saludar2(){
    console.log('Hola soy el segundo fuction');
}

Saludar2();

/* function Suma(){
    
    let num1 = parseFloat(prompt("ingrese primer numero"));
    let num2 = parseFloat(prompt("ingrese segundo número"));
    Suma = (num1 + num2);
    console.log('resultado: '+ Suma);
}

Suma(); */

function bienvenido(){
    console.log('eres bienvenido al adso');
    
    return "hola desde Consola";
}

bienvenido();
const bienve = bienvenido();
console.log(bienve);



//funciones parámetros

function suma (numero1, numero2){
    return numero1 + numero2;

}

suma(3, 5);
const res2 = (3,5);
console.log(res2);


function Saludar3(){
    let nombre = 'Muriel';
    console.log("Hola "+nombre + " cómo estás?");
}

Saludar3();


function sumar(num1, num2){
    return num1 + num2;
}
let resultado = sumar(5,3);
console.log(resultado);




function Saludar4(Nombre){
    return 'hola ' + Nombre;

}
const saludo = Saludar4('Muriel');
console.log(saludo);


const anonimo = function(){


}

function NumeroPrimo(){
    let num12 = parseFloat(prompt("ingrese su número"));
    if (num12 % 2 === 0)
    console.log("el numero" +num12 + "es primo");
    else {
    console.log("el numero" +num12 +"no es primo");
    }
}
NumeroPrimo();

// imprimir la tabla de multiplicar del numero dado

function multiplicar2(){
    let numero = parseInt(prompt("Ingrese en número de la tabla que desea mostrar"));
    let multiplicador = 1;
    let tablaMultiplicar = "Tabla de multiplizar del: " + numero + "es: "+":\n";

    while(multiplicador <=10){
        let resultado = numero * multiplicador;
        tablaMultiplicar += + "x" + multiplicador + "=" + resultado + "\n";
        multiplicador++;
        
    }
    return tablaMultiplicar;
}
let tabla = multiplicar2();
console.log(tabla);



