// nombre,tipo, habilidades[], nivelVida 0-100, evoluciones [], numPokeDex
class Pokemon{
    constructor(nombreParam, tipo, habilidades, evoluciones, numPokedex){
        //crear la propiedad
        this.numPokedex = numPokedex;
        this.nombre = nombreParam;
        this.tipo = tipo;
        this.habilidades = habilidades;
        this.evoluciones = evoluciones;
        this.nivelVida = 100; //propiedad por defecto
    }
    //get y set

    //metodos
    nombremetodo(){
        // aqui agrego las lineas de codigo del metodo
    }
}

//crear, declarar o instanciar un objeto de la clase pokemon
const pikachu = new Pokemon('Pikachu', 'Electrico', [' Ataque rápido, Impactrueno, Rayo'], ['Pichu','Pikachu', 'Raichu'], 25);
const charizard = new Pokemon('charizard', 'Fuego', [' Ataque rápido, Impactrueno, Rayo'], ['Charmander','Charmeleon', 'Charizard'], 6);

console.log(pikachu)
console.log(charizard)