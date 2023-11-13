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

let precio = parseInt(prompt("Ingrese el precio: "));

if(precio == ""){
    alert("No ingresaste un precio valido")
}
else if(precio < 20)
{
    alert("El precio es menor que 20");
}
else if(precio < 50){
    alert("El precio es menor que 50")
}
else if(precio < 100){
    alert("El precio es menor que 100")
}else{
    alert("El precio es mayor que 100")
}
console.log("Listo!")