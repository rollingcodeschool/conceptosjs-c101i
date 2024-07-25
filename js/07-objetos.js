//notacion literal

const cancion = {
  //propiedades
  artista: "Ricky Martin",
  titulo: "vuelve",
  genero: ["balada", "Pop"],
  anio: 1998,
  autor: "franco de Vita",
  //metodos
  play: function () {
    console.log(this);
    document.write(`<p>▶️ Reproduciendo la cancion ${this.titulo}... </p>`);
  },
  stop: () => {
    console.log(this);
    document.write(`<p>⏹️ Se detuvo la cancion... </p>`);
  },
};
//mostrar el objeto
console.log(cancion);
document.write(cancion);
// mostrar por pantalla un objeto
document.write(`<p>Cancion: ${cancion.titulo}</p>`);
document.write(`<p>Artista: ${cancion["artista"]}</p>`);

//utilizar los metodos
cancion.play();
cancion.play();
cancion.stop();

console.log(this);

// agregar una propiedad nueva a un objeto
cancion.reproducciones = 15000;
document.write(`<p>Cantidad de reproducciones: ${cancion.reproducciones}</p>`);
console.log(cancion);

//modificar una propiedad de un objeto
cancion.reproducciones = 18000
document.write(`<p>Cantidad de reproducciones: ${cancion.reproducciones}</p>`);
console.log(cancion);

// borrar una propiedad del objeto
delete cancion.anio;
console.log(cancion);

console.log(cancion.hasOwnProperty('titulo'));
console.log(cancion.hasOwnProperty('anio'));