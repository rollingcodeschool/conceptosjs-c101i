// nombre,tipo, habilidades[], nivelVida 0-100, evoluciones [], numPokeDex
class Pokemon {
  // declaramos las propiedades privadas
  #numPokedex;
  #tipo;
  constructor(nombreParam, tipo, habilidades, evoluciones, numPokedex) {
    //crear la propiedad
    this.#numPokedex = numPokedex;
    this._nombre = nombreParam;
    this.#tipo = tipo;
    this.habilidades = habilidades;
    this.evoluciones = evoluciones;
    this.nivelVida = 100; //propiedad por defecto
  }
  //get y set propiedades computadas
  //get devuelven el valor de la propiedad privada
  get tipo() {
    return this.#tipo;
  }

  get numPokedex() {
    return this.#numPokedex;
  }

  //set modificar el valor de la propiedad privada
  set tipo(nuevoTipo) {
    if (nuevoTipo.length > 0) {
      this.#tipo = nuevoTipo;
    }
  }

  set numPokedex(nuevoNumPokeDex) {
    if (nuevoNumPokeDex > 0 && nuevoNumPokeDex <= 151) {
      this.#numPokedex = nuevoNumPokeDex;
    }
  }

  mostrarNombre() {
    return this._nombre;
  }
  //metodos
  mostrarDatos() {
    document.write(`<ul>
        <li>Nombre: ${this._nombre}</li>
        <li>Num de pokedex: ${this.numPokedex}</li>
        <li>Tipo: ${this.tipo}</li>
        <li>Habilidades: ${this.habilidades}</li>
        <li>Evoluciones: ${this.evoluciones}</li>
        <li>Nivel de vida: ${this.nivelVida}</li>
        </ul>`);
  }
}

class Rectangulo {
  constructor() {}
}

//herencia
class PokemonLegendario extends Pokemon {
  #habilidadOculta;
  constructor(
    habilidades,
    nombre,
    tipo,
    evoluciones,
    numPokedex,
    habilidadOculta
  ) {
    //invocar al constructor de la clase pokemon
    super(nombre, tipo, habilidades, evoluciones, numPokedex);
    this.#habilidadOculta = habilidadOculta;
  }
  get habilidadOculta() {
    return this.#habilidadOculta;
  }

  set habilidadOculta(nuevaHabilidadOculta) {
    if (nuevaHabilidadOculta.length > 0) {
      this.#habilidadOculta = nuevaHabilidadOculta;
    }
  }
  //agregar metodos nuevos
  mostrarDatosPokemonLengendario() {
  }

  //polimorfismo
  mostrarDatos() {
    document.write(`<ul>
            <li>Nombre: <strong> ${this._nombre}</strong></li>
            <li>Num de pokedex: ${this.numPokedex}</li>
            <li>Tipo: ${this.tipo}</li>
            <li>Habilidades: ${this.habilidades}</li>
            <li>Evoluciones: ${this.evoluciones}</li>
            <li>Nivel de vida: ${this.nivelVida}</li>
            <li>Habilidad Oculta: ${this.habilidadOculta}</li>
            </ul>`);
  }
}

//crear, declarar o instanciar un objeto de la clase pokemon
const pikachu = new Pokemon(
  "Pikachu",
  "Electrico",
  [" Ataque rápido", "Impactrueno", "Rayo"],
  ["Pichu", "Pikachu", "Raichu"],
  25
);
const charizard = new Pokemon(
  "charizard",
  "Fuego",
  [" Ataque rápido", "Impactrueno", "Rayo"],
  ["Charmander", "Charmeleon", "Charizard"],
  6
);

console.log(pikachu);
console.log(charizard);

document.write(`<p>Nombre de pokemon: ${pikachu.mostrarNombre()}</p>`);
document.write(`<p>Tipo de pokemon: ${pikachu.tipo}</p>`);
document.write(`<p>Num pokedex: ${pikachu.numPokedex}</p>`);

//usar el setter
pikachu.tipo = "Agua";
document.write(`<p>Tipo de pokemon: ${pikachu.tipo}</p>`);

pikachu.mostrarDatos();
charizard.mostrarDatos();

//crear un pokemon legendario
const articuno = new PokemonLegendario(
  ["presion", "canto helado"],
  "Articuno",
  "Hielo ❄️",
  "Sin evolucion",
  144,
  "manto niveo"
);

console.log(articuno);

articuno.mostrarDatos();
