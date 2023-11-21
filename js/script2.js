let nombreProductoA = "Mesa"
let precioProductoA = 955
let stockProductoA = 10

let nombreProductoB = "Silla"
let precioProductoB = 550
let stockProductoB = 50

let precioTotal = 0
let total = 0
let compras = 0

let cantidadCompras = prompt("Ingrese la cantidad de productos que quiere comprar: \n *Mesas \n *Sillas")

for (i=0 ; i < cantidadCompras ; i++){
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n -Mesa \n -Silla")
    let cantidad1 = prompt("Ingrese la cantidad de productos que quere comprar: ")

    if ( compra1 == "Mesa" ){
        if (stockProductoA >= cantidad1){
            precioTotal += cantidad1 * precioProductoA
            alert("El precio total es de $"+(cantidad1*precioProductoA))
        }
        else{
            alert("No disponemos de esa cantidad, ya que el stock es de "+stockProductoA+" Mesas")
        }
    }
    else if( compra1 == "Silla" ){
        if (stockProductoB >= cantidad1){
            precioTotal += cantidad1*precioProductoB
            alert("El precio total es de $"+cantidad1*precioProductoB)
        }else{
            alert("No disponemos de esa cantidad, ya que nuestro stock es de "+stockProductoB+" Sillas")
        }
    }else{
        alert("No tenemos ese producto")
    }
    console.log("La compra No. "+(i+1)+" son "+cantidad1+" "+compra1+" con un total de : "+precioTotal)
}
if( cantidadCompras > 1){
    alert("La suma total de la compra es: $"+precioTotal);
}
console.log("Santencia final del FOR");
console.log("EL precio total de tu compra sin descuento es: "+precioTotal)

switch(true){
    case precioTotal < 2000:
        precioTotal = precioTotal * .95
        alert("Recibiste un 5% de descuento del total de tu compra")
        break;
    
    case precioTotal < 5000:
        precioTotal = precioTotal * .90
        alert("Recibiste un 10% de descuento del total de tu compra")
        break;

    case precioTotal < 10000:
        precioTotal = precioTotal * .80
        alert("Recibiste un 20% de descuento del total de tu compra")
        break;
    
    case precioTotal > 10000:
        precioTotal = precioTotal * .60
        alert("Recibiste un 40% de descuento del total de tu compra")
        break;
    
    default:
        alert("No recibiste descuento en esta compra")
        break;
}
alert("El precio total de tu compra es con descuento: "+precioTotal)