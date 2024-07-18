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
series.unshift("Vikings", 2024);
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
