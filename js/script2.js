let nombreProductoA = "Mesas"
let precioProductoA = 955
let stockProductoA = 10

let productoA = {
                    Nombre: "Mesas",
                    precio: 955,
                    stock: 10
}

let nombreProductoB = "Sillas"
let precioProductoB = 550
let stockProductoB = 50

let productoB ={
                    nombre: "Sillas",
                    precio: 550,
                    stock: 50
}

let precioTotal = 0
let totalCompra = 0
let compras = 0

let cantidadCompras = prompt("Ingrese la cantidad de productos que quiere comprar: \n *Mesas \n *Sillas")

function calculoPrecio(cantidad, precio){
    precioTotal +=  cantidad * precio
}

function calculoStock(cantidad, stock, precio){
    if (stock >= cantidad){
        // totalCompra += cantidad1 * precioProductoA
        calculoPrecio(cantidad, precio)
        alert("El precio total es de $"+(cantidad * precio))
    }
    else{
        alert("No disponemos de esa cantidad, ya que el stock es de "+stock+" unidades")
    }
}

for (i=0 ; i < cantidadCompras ; i++){
    totalCompra = 0
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n -Mesas \n -Sillas")
    let cantidad1 = prompt("Ingrese la cantidad de productos que quere comprar: ")

    if ( compra1 == "Mesas" ){
        calculoStock(cantidad1, productoA.stock, productoA.precio)
    }
    else if( compra1 == "Sillas" ){
        calculoStock(cantidad1, stockProductoB, precioProductoB)
    }else{
        alert("No tenemos ese producto")
    }
    console.log("La compra No. "+(i+1)+" son "+cantidad1+" "+compra1+" con un total de: "+totalCompra)
    precioTotal += totalCompra
}
if( cantidadCompras > 1){
    alert("La suma total de la compra es: $"+precioTotal);
}
console.log("Santencia final del FOR")
console.log("El precio total de tu compra sin descuento es: "+precioTotal)

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
        alert("No recibiste descuento en tu compra")
        break;
}
alert("El precio total a pagar por tu compra con descuento es: "+precioTotal)
console.log("El precio total a pagar por tu compra con descuento es: "+precioTotal)

function sumaIva(){
    return precioTotal * 1.16
}
let precioTotalImpuestos = sumaIva(precioTotal)
alert("El precio total con impuestos inluido es: "+precioTotalImpuestos)
console.log("El precio total con impuestos incluidos es: "+precioTotalImpuestos)
