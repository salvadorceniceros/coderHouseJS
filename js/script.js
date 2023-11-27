// //Primera Clase:
// let nombre = (prompt("Ingrese su nombre: "));
// let edad = parseInt(prompt("Ingrese su edad: "))

// //Segunda Clase
// if (edad >= 18){
//         alert("Bienvenido "+nombre+" tu eres mayor de edad")
//     }else{
//     alert("Bienvenido "+nombre+" eres menor de edad");
//     }

// let unColor
// unColor = prompt("Ingrese el nombre del color: ");
// console.log(unColor);

// if (unColor == "Rojo"){
//     alert("El color es Rojo");
//     console.log("El color es rojo");
// }else{
//     alert("El color no es Rojo")
//     console.log("El color no es rojo");
// }

/* let precio = parseInt(prompt("Ingrese el precio: "));

if (precio < 20)
{
    alert("El precio es menor que 20");
}
else if (precio < 50){
    alert("El precio es menor que 50")
}
else if (precio < 100){
    alert("El precio es menor que 100")
}
else if (precio > 100){
    alert("El precio es mayor que 100")
}
else{
    alert("No ingresaste un precio valido")
}
console.log("Listo!") 

let nombreIngresado = prompt("Ingrese su nombre");
let apellidoIngresado = prompt("Ingrese su apellido");

if ((nombreIngresado != "") && (apellidoIngresado != "")){
    alert("Nombre "+nombreIngresado+" y su appelido es: "+apellidoIngresado)
}else{
    alert("Error al ingresay nombre y apellido")
}

let nombre = prompt("Ingrese el nommbre: ")

if((nombre == "ANA") || (nombre == "Ana")){
    alert("El nombre ingresado es An4")
}else{
    alert("El nombre ingresado no es Ana")
}let nombreIngresado = prompt("Ingrese nombre:")

if((nombreIngresado != "") && ((nombreIngresado == "ANA") || (nombreIngresado == "ana"))){
    alert("Hola Ana")
}else{
    alert("Ingresa un nombre valido")
} 

let cantidad = parseInt(prompt("Ingrese un número"))
let palabra = prompt("Ingrese la palabra")
let numero = parseInt(prompt("Ingrese un numero"))

if (cantidad < 100){
    alert("El número capturado es menor a cien")
}
else if (cantidad > 1000){
    alert("El numero capturado es mayor a mil")
}
else if (cantidad < 1000){
    alert("El número capturado es menor a mil")
}
else{
    alert("El dato capturado no es un número")
}

if(palabra == "Hola"){
    alert("La palabra es Hola")
}else{
    alert("La palabra es distinta a Hola")
}

if (numero >= 10 && numero <= 50){
    alert("El número capturado "+numero+" cae entre 10 y 50")
}else if (numero < 10){
    alert("El numero "+numero+" capturado es menor a Diez")
}else if (numero > 50){
    alert("El número "+numero+" es mayor a 50")
}else{
    alert("El valor capturado: "+numero+" NO es un valor valido")
}

for ( i = 100 ; i >= 1 ; i--){
    console.log(i+" Bienvendo")
    // alert("Bienvendo #"+i)
}


for ( i = 1 ; i <= 5 ; i++){
    if ( i == 5 )
{
    alert("Apurate, este es el último turno")
}    
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido "+nombre+" . "+"\nSu turno es: "+i)
    console.log("Turno de "+nombre+" = "+i)
}
    alert("Nos quedamos sin turnos por el día de hoy")


let nombreIngresado = ""
let turnos = prompt("Ingrese el número de turno para este día")
let contador = turnos

console.log("Los turnos para este día son: "+turnos)
for (i=1 ; i<=turnos; i++){
    contador = contador -1
    if ( i == 2 || i == 10){
        continue
    }
    else if (i == 49){
        break
    }
    console.log("Hola su turno es: "+i+"\n le quedan "+contador+" turnos")
    if (contador == 1){
        alert("Te queda solo un turno")
    }else{
    
    }
}
console.log("Te quedaste sin tuernos para esté día")


//Crearemos las tablas de multiplicar

let tabla = prompt("Cual es la tabla que quiere ver")

console.log("Esta es la tabla de multiplicar del "+tabla)
for (i = 1 ; i <= 10 ; i++){
    let resultado = tabla * i
    console.log(tabla+" X "+i+" = "+resultado)
}


for (i = 1; i <= 10; i++){
    console.log("Esta es la tabla del "+i+"\n")
    for (j = 1; j <= 10; j++){
        let resultado = i * j
        console.log(i+" X "+j+" = "+resultado)
    }
}

let repetir = false
do {
    console.log("Este re imprime cuando menos una vez!")
}while (repetir)

let numero = 0
do{
    numero = prompt("Ingrese un número")
    console.log("El numero capturado fue "+numero)
}while(parseInt(numero))
console.log("El dato caputurado no fue un numero, fue "+numero)



let numero = parseInt(prompt("Ingrese el número a validar:"))
switch (numero){
    case 1:
        if (numero >= 0 || numero <=10){
            console.log("El número proporcionado es entre 0 - 10")
        }
    break;
    default:
        console.log(numero)
        console.log("El valor proporcionado no es valido")
}
console.log("Fuera del Switch");

// Ejercicio de la 3ra. clase:

let contador = 0
let repeticiones = prompt("Canidad de veces a pedir número: ")

for (i=1 ; i <= repeticiones ; i++){
    let numero = parseInt(prompt("ingrese un número: "))
    let suma = contador + numero
    console.log("La suma de el valor caputurado es: "+suma)
    contador = contador + numero
}
console.log("Switch terminado");

let numero = parseInt(prompt("Ingrese un número"))

switch(numero){
    case numero <= 10:
        console.log("El número es menor de 10")
        break;
    default:
        console.log("Valor capturado, es invalido");    
}

let numero2 = prompt("Ingrese el nñuero de repeticiones")
let palabra = ""

for (j=1 ; j<= numero2 ; j++){
    let letra = prompt("Ingrese la letra")
    palabra = palabra + letra
    console.log("La palabra formada es: "+palabra+" ")
}
console.log("Proceso terminado!!!")


function saludar(){
    console.log("¡Hola Salvador esta es tú primer función")
}
saludar();
saludar();
saludar();
saludar();
saludar();


function solicitarNombre(){
    let nombreIngresado = prompt("Ingrese el nombre:")
    alert("El nombre ingresado es: "+nombreIngresado)
    console.log("El nombre ingresado es: "+nombreIngresado)
}
solicitarNombre()
solicitarNombre()
solicitarNombre()
solicitarNombre()
solicitarNombre()

*/
/*
let numero = 0
function suma(a,b){
    numero = a+b
    // console.log(numero)
}

function mensaje(resultado){
    console.log(resultado)
}
// suma(100,33)
// suma(10,3)

let numA = parseInt(prompt("Ingrese el primer número a sumar: "))
let numB = parseInt(prompt("Ingrese el segundo número a sumar: "))

suma(numA,numB)
mensaje(numero)
*/

/* function solicitarNombre(){
    let ingresarNombre = prompt("Ingrese el nombre: ")
    alert("El nombre ingresado es: "+ingresarNombre)
}

solicitarNombre() 

function suma(){
    let numero = 1+2
    alert("La suma es: "+numero)
}

suma()


function suma(uno, dos){
    let numero = uno +  dos
    console.log("La suma de los números es: "+numero)
}

suma(100,10)
suma(99,990)

let numA = parseInt(prompt("Ingrese el primer valor: "))
let numB = parseInt(prompt("Ingrese el segundo valor: "))

suma(numA,numB)


let resultado = 0

function sumar(num1 , num2){
    numero = num1 + num2
}

function mostrar(resultado){
    console.log(resultado)
}


let numeroA = parseInt(prompt("ingrese el primer valor: "))
let numeroB = parseInt(prompt("Ingrese el segundo número: "))
sumar(numeroA, numeroB)
mostrar("la suma es: "+numero)

mensaje("Bienvenidos al mundo de las sumas")

function sumar(num1,num2){
    return num1 + num2 
}

function mensaje(numero){
    alert(numero)
    console.log(numero)
}

let numero1 = parseInt(prompt("Ingrese el primero número a sumar:"))
let numero2 = parseInt(prompt("Ingrese el segundo número a sumar:"))
let valor = sumar(numero1,numero2)
mensaje("La suma es: "+valor)
*/

/* function calculadora(num1, num2, operacion){
    switch(operacion){
        case "+":
            return num1 + num2
            break;
        case "-":
            return num1 - num2
            break;
        case "*":
            return num1 * num2
            break;
        case "/":
            return num1 / num2
            break;
        default:
            return 0
            break;
    }
}

let numero1 = parseFloat(prompt("Ingrese el primer valor: "))
let numero2 = parseFloat(prompt("Ingrese el segundo valor: "))



// funciones anonimas:

const suma = function (num1, num2) { return num1 + num2 }
const resta = function (num1, num2) { return num1 - num2 }
console.log("Resultados de una función anónima: "+suma(22,33))
console.log(resta(44,99))

// funciones flecha:

const sumar = (num1, num2) => {return num1 + num2}
const restar = (num1, num2) =>  num1 - num2
console.log("Resultados de una función felcha => "+sumar(11,99))
console.log(restar(88,55))

const sumarn = (n1, n2) => n1 + n2
console.log(sumarn(22,22))
const restarn = (n1,n2) => n1-n2
console.log(restarn(99,4))

// si la función es una sola línea con retorno y un parametro puede evitar los ()

const iva = x => x * 1.16
let precioProducto = 500
let descuento = 50
// Calcular el precioProducto + IVA - Descuento
let nuevoPrecio = restarn(sumarn(precioProducto, iva(precioProducto)), descuento)
console.log(nuevoPrecio)
console.log(iva(1000))
 
let nombre = "Salvador"
let edad = 41
let direccion = "Campo de Claveles 641"

const persona1 = {nombre: "Salvador", edad: 41
, direccion: "Campo de Claveles 641"}
*/
// Constructores de objetos en JS

function Persona(nombre, edad. calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
}
const persona1 = new Persona("Salvador", 41, "Campo de claveles 641");
const persona2 = new Persona("Berenice", 41, "Avenida Juárez y calle 17");