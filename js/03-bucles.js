// bucles while, do-while, for

// while(condicion logica){
// todas las lineas de codigo que quiero repetir
// agregar una linea que haga que la condicion logica se deje de cumplir
// }

let numero = 100;
while (numero <= 10) {
  document.write(`<p>Linea número ${numero}</p>`);
  numero = numero + 1;
}

/* 
do{
    todas las lineas de codigo que quiero repetir
    agregar una linea que haga que la condicion logica se deje de cumplir
}while(condicion logica)
*/

let renglon = 1;

do {
  document.write(`<p>Renglon número ${renglon}</p>`);
  renglon++;  //renglon = renglon + 1; 
} while (renglon <= 5);

/*
for(inicializar una variable; condicion logica; incrementar/decrementar variable){
    todas las lineas de codigo que quiero repetir
}
*/ 

for(let contador = 10; contador >= 1 ; contador--){
    document.write(`<p>Cuenta regresiva N°: ${contador}</p>`);
}
