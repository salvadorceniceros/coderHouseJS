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
*/

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