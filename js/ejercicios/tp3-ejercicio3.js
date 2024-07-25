// simular el lanzar los dados
function dadosLanzados() {
    return Math.floor(Math.random() * 6) + 1;
}
//generar un array  
const apariciones = [0,0,0,0,0,0,0,0,0,0,0,0,0]
console.log(apariciones.length)
console.log(apariciones)
// const apariciones = new Array(13).fill(0);
  

  for (let i = 0; i < 50; i++) {
    let dado1 = dadosLanzados();
    console.log(dado1)
    let dado2 = dadosLanzados();
    console.log(dado2)
    let suma = dado1 + dado2;
    console.log(suma)
    apariciones[suma]++;
    console.log(apariciones)
  }


  document.write(`<table>`);
    document.write(`<tr>`);
    document.write(`<td>Suma 🎲🎲</td>`); 
    document.write(`<td>Apariciones</td>`);
    document.write(`</tr>`);
  // Imprimimos los resultados
  for (let i = 2; i <= 12; i++) {
      document.write(`<tr>`);
    document.write(`<td>${i}</td>`);
    document.write(`<td>${apariciones[i]}</td>`);
    document.write(`</tr>`);
  }
  
  document.write(`</table>`);