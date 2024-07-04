/* if(condicion logica){
  todas las lineas de codigo si se cumple la condicion logica
}
*/

// crear un programa que solicite al usuario ingresar su edad y mostrar si es mayor de edad o no.

// const edad = parseInt(prompt("Ingrese su edad"));
// // NaN = is not a number
// console.log(edad);
// //preguntar si el numero es valido 1 - 100, NaN
// // AND &&
// // OR ||
// // NOT !
// if (edad >= 1 && edad <= 100) {
//   // si la edad es mayor o igual 18 años soy mayor de edad
//   if (edad >= 18) {
//     document.write("Edad ingresada " + edad + ", sos mayor de edad");
//   } else {
//     document.write("Edad ingresada " + edad + ", no mayor de edad");
//   }
// } else {
//   document.write("No ingresaste un número valido");
// }

// Ejercicio 2
const edad = parseInt(prompt("Ingrese su edad"));
/*

*/ 
// 18 a 65 años esta obligado a votar
// 16 y 17 - optativo, 66 en adelante es optativo
// menores de 16 no pueden votar > =
if (edad >= 18 && edad <= 65) {
  // document.write("Ingresaste la edad de: "+edad+" años, estas obligado a votar");
  document.write(`Ingresaste la edad de: ${edad} años, estas  obligado a votar`); 
}else{
  // sera que tiene entre 16, 17 o mas de 65
  if( edad == 16 || edad ==17 ||  edad > 65 ){
    document.write(`Ingresaste la edad de: ${edad} años, es optativo votar`); 
  }else{
    document.write(`Ingresaste la edad de: ${edad} años, no podes votar`);
  }
}

