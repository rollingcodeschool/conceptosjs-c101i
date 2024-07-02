/* if(condicion logica){
  todas las lineas de codigo si se cumple la condicion logica
}
*/

// crear un programa que solicite al usuario ingresar su edad y mostrar si es mayor de edad o no.

const edad = parseInt(prompt("Ingrese su edad"));
// NaN = is not a number
console.log(edad);
// si la edad es mayor o igual 18 años soy mayor de edad
if (edad >= 18) {
  document.write("Edad ingresada " + edad + ", sos mayor de edad");
} else {
  document.write("Edad ingresada " + edad + ", no mayor de edad");
}
