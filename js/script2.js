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
}
if( cantidadCompras > 1){
    alert("La suma total de la compra es: $"+precioTotal);
}
console.log("Santencia final del FOR")