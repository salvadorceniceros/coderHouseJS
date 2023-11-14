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
}*/

let nombreIngresado = prompt("Ingrese nombre:")

if((nombreIngresado != "") && ((nombreIngresado == "ANA") || (nombreIngresado == "ana"))){
    alert("Hola Ana")
}else{
    alert("Ingresa un nombre vlalido")
}
