export const filtrarRoles = function (condicion, arrayAllChampions) {

  let filtrandoRoles = arrayAllChampions.filter(array => array.tags.includes(condicion));
  return filtrandoRoles;
};

//Función que encuentre la tarjeta de estadisticas del campeón al que se le hizo click según el id del mismo.
export const encontrarIdChampions = function (event,arrayAllChampions) {

  let buscandoChampion = event.currentTarget.id;
  let buscando = arrayAllChampions.find(elemento => elemento.name == buscandoChampion);
  return buscando;
}

//Creando función para ordenar los Campeones de la A-Z y de Z-A.
export const ordenandoAlfabeticamente = function (valueSelect, arrayAllChampions) {

  if (valueSelect == 0) {
      let ordenandoAZ = arrayAllChampions.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
          return 0;
      })
      return ordenandoAZ;
  }
  if (valueSelect == 1) {
      let ordenandoZA = arrayAllChampions.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;//Para ordenarlo de la Z-A invertimos el 1 y -1 del orden anterior.
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
          return 0;
      })
      return ordenandoZA
  }
};

//Función que filtra los aspectos por dificultad.
export const filtrarDificultad = function (valueSelectDifficulty, arrayAllChampions) {

  if (valueSelectDifficulty == 0) {
    let filtrandoDificultad1 = arrayAllChampions.filter(array => array.info.difficulty === 1);
    return filtrandoDificultad1;
  }
  if (valueSelectDifficulty == 1) {
    let filtrandoDificultad2 = arrayAllChampions.filter(array => array.info.difficulty === 2);
    return filtrandoDificultad2;
  }
  if (valueSelectDifficulty == 2) {
    let filtrandoDificultad3 = arrayAllChampions.filter(array => array.info.difficulty === 3);
    return filtrandoDificultad3;
  }
  if (valueSelectDifficulty == 3) {
    let filtrandoDificultad4 = arrayAllChampions.filter(array => array.info.difficulty === 4);
    return filtrandoDificultad4;
  }
  if (valueSelectDifficulty == 4) {
    let filtrandoDificultad5 = arrayAllChampions.filter(array => array.info.difficulty === 5);
    return filtrandoDificultad5;
  }
  if (valueSelectDifficulty == 5) {
    let filtrandoDificultad6 = arrayAllChampions.filter(array => array.info.difficulty === 6);
    return filtrandoDificultad6;
  }
};