// 0 - domingo
// 1 - lunes
// 2 - martes
// 3 - miercoles

// if(opcion === 0){
//     document.write('<p>Hoy es domingo</p>')
// }else if(opcion ===1){
//     document.write('<p>Hoy es lunes</p>')
// }else if(opcion===2){
//     document.write('<p>Hoy es martes</p>')
// }else if(opcion === 3){
//     document.write('<p>Hoy es miercoles</p>')
// }else{
//     document.write('<p>Valor invalido</p>')
// }

do {
  const opcion = prompt(
    "Ingresa un valor: 0 - domingo, 1 - lunes, 2 - martes, 3 - miercoles"
  );

  switch (opcion) {
    case 0:
    case "0":
    case "domingo":
      document.write("<p>Hoy es domingo</p>");
      console.log('Hoy es domingo')
      break;
    case '1':
      document.write("<p>Hoy es lunes</p>");
      console.log('Hoy es lunes')
      break;
    case '2':
      document.write("<p>Hoy es martes</p>");
      console.log('Hoy es martes')
      break;
    case '3':
      document.write("<p>Hoy es miercoles</p>");
      console.log('Hoy es miercoles')
      break;
    default:
      document.write("<p>Valor invalido</p>");
      console.log('invalido')
  }
} while (confirm("¿Quieres realizar esta operacion nuevamente?"));
