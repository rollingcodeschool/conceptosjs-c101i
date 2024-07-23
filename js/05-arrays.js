//como declarar un array vacio
const peliculas = [];

//como declarar un array con datos
const series = [
  "friends",
  4,
  "Big bang theory",
  true,
  "the nanny",
  "bridgerton",
];

function mostrarSeries() {
  document.write(
    `<h2>Array de series: cantidad de elementos ${series.length}</h2>`
  );
  document.write(`<ul>`);
  for (let i = 0; i < series.length; i++) {
    document.write(`<li>${series[i]}</li>`);
  }
  document.write(`</ul>`);
}

console.log(peliculas);
console.log(series);
//cantidad de elementos en el array
document.write(
  `<p>Cantida de elementos en el array de series:${series.length}</p>`
);
document.write(`<p>Primer elemento del array: ${series[0]}</p>`);
document.write(
  `<p>El ultimo elemento del array: ${series[series.length - 1]}</p>`
);
document.write(`<p>Array de series: ${series}</p>`);

//mostrar los elementos del array
mostrarSeries();

//agregar elementos en el array
series.unshift("Vikings", '2024');
mostrarSeries();

//agregar un elemento al final del array
series.push("Breaking bad");
mostrarSeries();

// agregar elementos en el medio del array
series.splice(3, 0, "Avatar");
mostrarSeries();

// metodos para borrar elementos del array
series.shift();
mostrarSeries();

//borrar el ultimo elemento del array
series.pop();
mostrarSeries();

//borrar elementos del medio del array
// series.splice(5,1);
// series.splice(5,2);
series.splice(5);
mostrarSeries();

// modificar un elemento el array
series[3] = "pokemon";
mostrarSeries();

series.push('Harry Potter y la piedra filosofal','Rambo 1', 'Rambo 2', 'Harry Potter y la cámara secreta', 'Rambo 3', 'Harry Potter y el prisionero de Azkaban','Harry Potter y la Orden del Fénix' )

mostrarSeries();

// buscar un elemento en el array find
const harryPotter = series.find((item)=> item === 'Harry Potter y la cámara secreta')
const vengadores = series.find((item)=> item === 'vengadores: infinity war')
const harryPotter2 = series.find((item)=> item.toLowerCase().includes('harry potter'))

// console.log(series[0].toLowerCase())
console.log(harryPotter)
console.log(vengadores)
console.log(harryPotter2)
document.write(`<p>Peli buscada: ${harryPotter}</p>`)
// document.write(`<p>Peli buscada: ${vengadores}</p>`)

// existe un valor valido en vengadores
// if(vengadores){
//   document.write(`<p>Peli buscada: ${vengadores}</p>`)
// } else{
//   document.write(`<p>Peli buscada: no se encontro vengadores</p>`)
// }
// operador ternario   (condicion logica)? todo lo que quiero si se cumple la condicion :todo lo que quiero si no se cumple la condicion
document.write(`<p>Peli buscada: ${(vengadores) ? vengadores: 'no se encontro vengadores'}</p>`)

const peli = 'Harry Potter y el misterio del príncipe';

console.log(peli.includes('Harry potter'))
console.log(peli.includes('misterio del'))

//buscar todos la saga de rambo (filter)
const sagaRambo = series.filter((elemento)=> elemento.includes('Rambo'));
console.log(sagaRambo)

document.write(`<h2>Array de Rambo: cantidad de elementos ${sagaRambo.length}</h2>`
);

document.write(`<ol>`);
sagaRambo.map((item, posicion)=> document.write(`<li>${item} - posicion: ${posicion}</li>`) )
document.write(`</ol>`);

//forEach
series.forEach((item )=> console.log('forEach - '+ item) )