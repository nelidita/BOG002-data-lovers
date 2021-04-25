import { filtrarRoles, ordenandoAlfabeticamente} from '../src/data.js';
let dataFake = [{name: "Ashe", tags:["Mage", "Assassin"], info:{difficulty: 1}},{name: "Alistar", tags:["Fighter", "Tank"]},{name:"Aatrox", tags:["Fighter"], info:{difficulty: 2}}]

describe('filtrarRoles', () => {
  test('is a function', () => {
    expect(typeof filtrarRoles).toBe('function');
  });

  test('returns `filtrandoRoles`', () => {
    expect(typeof filtrarRoles).toBe('function');
    let dataFiltrada = [{name: "Ashe", tags:["Mage", "Assassin"],info:{difficulty: 1}}]
    expect(filtrarRoles("Assassin",dataFake)).toEqual(dataFiltrada);
  });
});


// describe('encontrarIdChampions', () => {
//   it('is a function', () => {
//     expect(typeof encontrarIdChampions).toBe('function');
//   });

//   it('returns `buscando`', () => {
//     expect(typeof encontrarIdChampions).toBe('function');
//     let dataFiltrada = [{name: "Ashe", tags:["Mage", "Assassin"]}];
//     expect(encontrarIdChampions("Ashe",dataFake)).toEqual(dataFiltrada);
//   });
// });


describe('ordenandoAlfabeticamente', () => {
  test('is a function', () => {
    expect(typeof ordenandoAlfabeticamente).toBe('function');
  });

  test('returns `ordenandoAZ`', () => {
    expect(typeof ordenandoAlfabeticamente).toBe('function');
    // let dataFiltrada = [{name: "Ashe", tags:["Mage", "Assassin"]}]
    expect(ordenandoAlfabeticamente(0,dataFake)).toEqual(dataFake);
  });
  test('returns `ordenandoZA`', () => {
    expect(typeof ordenandoAlfabeticamente).toBe('function');
    // let dataFiltrada = [{name: "Ashe", tags:["Mage", "Assassin"]}]
    expect(ordenandoAlfabeticamente(1,dataFake)).toEqual(dataFake);
  });
});

// describe('filtrarDificultad', () => {
//   test('is a function', () => {
//     expect(typeof filtrarDificultad).toBe('function');
//   });

//   test('returns `filtrandoDificultad1`', () => {
//     expect(typeof filtrarDificultad).toBe('function');
//     let dataFiltradaDificultad = [{name: "Ashe", tags:["Mage", "Assassin"], info:{difficulty: 1}}]
//     expect(filtrarDificultad("0",dataFake)).toEqual(dataFiltradaDificultad);
//   });
// });