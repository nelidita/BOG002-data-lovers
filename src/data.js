export const filtrarRoles = function (condicion, arrayAllChampions) {
  let arrayTodosCampeones = arrayAllChampions;
  let filtrandoRoles = arrayTodosCampeones.filter(array => array.tags.includes(condicion));
  console.log(filtrandoRoles);
  return filtrandoRoles;
};

//Hacer que cuando el usuario le de click a la imagen del campeón le muestre la tarjeta de estadísticas de cada uno de ellos.
export let encontrarIdChampions = function (event,arrayAllChampions) {
  let buscandoChampion = event.currentTarget.id;
  let buscando = arrayAllChampions.find(elemento => elemento.name == buscandoChampion);
  return buscando;
}

// export const filtrarDificultad = function (valueSelectDifficulty, arrayAllChampions) {
//   let arrayTodosCampeones = arrayAllChampions;
//   let optionSelect = valueSelectDifficulty;
//   if (optionSelect == 0) {
//     let filtrandoDificultad = arrayTodosCampeones.filter(array => array.info.difficulty === 1);
//     console.log(filtrandoDificultad);
//     return filtrandoDificultad;
//   }
//   if (optionSelect == 1) {
//     let filtrandoDificultad = arrayTodosCampeones.filter(array => array.info.difficulty === 2);
//     console.log(filtrandoDificultad);
//     return filtrandoDificultad;
//   }
//   if (optionSelect == 2) {
//     let filtrandoDificultad = arrayTodosCampeones.filter(array => array.info.difficulty === 3);
//     console.log(filtrandoDificultad);
//     return filtrandoDificultad;
//   }
//   if (optionSelect == 3) {
//     let filtrandoDificultad = arrayTodosCampeones.filter(array => array.info.difficulty === 4);
//     console.log(filtrandoDificultad);
//     return filtrandoDificultad;
//   }
//   if (optionSelect == 4) {
//     let filtrandoDificultad = arrayTodosCampeones.filter(array => array.info.difficulty === 5);
//     console.log(filtrandoDificultad);
//     return filtrandoDificultad;
//   }
//   if (optionSelect == 5) {
//     let filtrandoDificultad = arrayTodosCampeones.filter(array => array.info.difficulty === 6);
//     console.log(filtrandoDificultad);
//     return filtrandoDificultad;
//   }
// };