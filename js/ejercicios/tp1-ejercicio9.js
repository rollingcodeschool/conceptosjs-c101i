// Escribe un programa que pida una frase y escriba las vocales que aparecen
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//1- pedir frase
const frase = prompt("Ingrese una frase de 4 caracteres").toLowerCase();

console.log(frase);
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(frase.length);
console.log(frase.substring(0, 3));
console.log(frase.charAt(3));

// hola //aula
for(let caracter = 0; caracter < frase.length; caracter++){
  if (
    frase.charAt(caracter) === "a" ||  
    frase.charAt(caracter) === "e" ||
    frase.charAt(caracter) === "i" ||
    frase.charAt(caracter) === "o" ||
    frase.charAt(caracter) === "u"
  ) {
    document.write(frase.charAt(caracter));
  }
}

