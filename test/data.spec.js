import { filtrarRoles} from '../src/data.js';
let dataFake = [{name: "Ashe", tags:["Mage", "Assassin"]},{name: "Alistar", tags:["Fighter", "Tank"]},{name:"Aatrox", tags:["Fighter"]}]

describe('filtrarRoles', () => {
  test('is a function', () => {
    expect(typeof filtrarRoles).toBe('function');
  });

  test.only('returns `filtrandoRoles`', () => {
    expect(typeof filtrarRoles).toBe('function');
    let dataFiltrada = [{name: "Ashe", tags:["Mage", "Assassin"]}]
    expect(filtrarRoles("Assassin",dataFake)).toEqual(dataFiltrada);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
