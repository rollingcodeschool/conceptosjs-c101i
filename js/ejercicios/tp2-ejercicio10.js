// Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//usar prompt y pedir filas y columnas

//dibujar la tabla

//luego cargar en la primer celda fila x columna

const filas = parseInt(prompt("Ingrese un numero de filas"));
const columnas = parseInt(prompt("Ingrese un numero de columnas"));

console.log(filas)
console.log(columnas)

document.write(`<table><tbody>`);
document.write(`<tr>`);

for(let indiceColumna = 1; indiceColumna <= columnas; indiceColumna++){
    document.write(`<td>1</td>`);
}

document.write(`</tr>`);
document.write(`</tbody></table>`);
