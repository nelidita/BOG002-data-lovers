import { filtrarRoles } from './data.js';
// import { encontrarIdChampions } from './data.js';
// import { filtrarDificultad } from './data.js';
import data from './data/lol/lol.js';


//Creando una constante donde guarde la data de cada campeón que está dentro de la data completa.
const allChampions = data.data;

//Convirtiendo en array el objeto que contiene toda la data.
let convertToArray = function (object) {

    let arrayPropertiesChampions = [];
    let propertiesChampions = Object.keys(object);

    for (let i = 0; i < propertiesChampions.length; i++) {
        arrayPropertiesChampions.push(object[propertiesChampions[i]]);
    }
    return arrayPropertiesChampions;
}

//Creando un array de los nombres e imágenes de cada campeón.
let arrayAllChampions = convertToArray(allChampions);

//Creando arrays de cada item que posee información del campeón.
let arrayNames = [];
let arrayImg = [];
for (let j = 0; j < arrayAllChampions.length; j++) {
    arrayNames.push(arrayAllChampions[j].name);
    arrayImg.push(arrayAllChampions[j].img);
}

//Accediendo al div creando en html para insertar los nombres e imágenes de cada campeón.
let imgAndNameChampions = document.getElementById("root");

//Creando un array con los nombres y las imágenes juntos de cada campeón.
let imprimiendoCampeones = function (arrayAllChampions) {
    
    imgAndNameChampions.innerHTML = ""; //Se crea un .innerHTML vacío, para que cuando se filtre por orden alfabetico no se sobreeescriban todo los campeones de nuevo.

    for (let l = 0; l < arrayAllChampions.length; l++) {
        //Creando un "div", para colocar dentro el nombre y la imagen de cada campeón.
        let containerChampions = document.createElement("div");
        containerChampions.setAttribute("class", "containerChampions");
        containerChampions.setAttribute("id", arrayAllChampions[l].name);
        imgAndNameChampions.appendChild(containerChampions);

        //Creando un elemento "p", para agregar el nombre de cada campeón.
        let pNames = document.createElement("p");
        let name = document.createTextNode(arrayAllChampions[l].name);
        pNames.appendChild(name);
        containerChampions.appendChild(pNames);

        //Creando un elemento "img" para agregar la imagen de cada campeón.
        let pImg = document.createElement("img");
        pImg.setAttribute("src", arrayAllChampions[l].img);
        containerChampions.appendChild(pImg);
    }
    for (let l = 0; l < arrayAllChampions.length; l++) {
        let idChampions = document.getElementById(arrayAllChampions[l].name);
        idChampions.addEventListener("click", mostrarInfoCampeon)
    }
}
imprimiendoCampeones(arrayAllChampions);

//Trayendo el "id" donde se selecciona el tipo de orden alfabetico
let filtrarAlfabeticamente = document.getElementById("ordenAlfabetico");

//Creando función para ordenar los Campeones de la A-Z y de Z-A.
function ordenandoAlfabeticamente(valueSelect, arrayAllChampions) {
    let opcionSeleccionada = valueSelect;
    console.log(opcionSeleccionada);
    if (opcionSeleccionada == 0) {
        let ordenandoAZ = arrayAllChampions.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            console.log(ordenandoAZ);
            return 0;
        })
        return ordenandoAZ;
    }

    if (opcionSeleccionada == 1) {
        let ordenandoZA = arrayAllChampions.sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;//Para ordenarlo de la Z-A invertimos el 1 y -1 del orden anterior.
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            console.log(ordenandoZA);
            return 0;
        })
        return ordenandoZA
    }

};
// ordenandoAlfabeticamente(valueSelect, arrayAllChampions)


//Función que muestra las imágenes y nombres de los campeones ordenados alfabeticamente.
function mostrarCampeonesOrdenadosAlfabeticamente() {
    let ordenSeleccionado = filtrarAlfabeticamente.selectedIndex;
    const campeonesOrdenados = ordenandoAlfabeticamente(ordenSeleccionado, arrayAllChampions);
    console.log(campeonesOrdenados);
    imprimiendoCampeones(campeonesOrdenados);
}

filtrarAlfabeticamente.addEventListener("change", mostrarCampeonesOrdenadosAlfabeticamente);

//Creando las tarjetas de estadisticas de cada campeón.
let containerInfoChampions = document.getElementById("infoChampions");
let tarjetaEstadisticas = function (infoCampeon) {

    imgAndNameChampions.style.display = "none";
    document.getElementById("infoChampions").style.display = "flex"
    //Creando "div" para introducir toda la info y estadisticas de cada campeón.
    let containerStatistics = document.createElement("div");
    containerStatistics.setAttribute("class", "containerStatistics");
    containerInfoChampions.appendChild(containerStatistics);

    //Creando un elemento "h2", para agregar el nombre de cada campeón (otra vez).
    let hNames = document.createElement("h2");
    let names = document.createTextNode(infoCampeon.name);
    hNames.appendChild(names);
    containerStatistics.appendChild(hNames);

    //Creando "h2" para el tittle de cada campeón.
    let hTitles = document.createElement("h3");
    let titles = document.createTextNode(infoCampeon.title);
    hTitles.appendChild(titles);
    containerStatistics.appendChild(hTitles);

    //Creando "img" para el splashArt de cada campeón.
    let splashArt = document.createElement("img");
    splashArt.setAttribute("src", infoCampeon.splash);
    containerStatistics.appendChild(splashArt);

    //Creando "p" para el blurb.
    let pBlurb = document.createElement("p");
    let blurb = document.createTextNode(infoCampeon.blurb);
    pBlurb.appendChild(blurb);
    containerStatistics.appendChild(pBlurb);

    //Creando "p" para el info.
    let pInfo = document.createElement("p");
    let attack = infoCampeon.info.attack;
    let defense = infoCampeon.info.defense;
    let magic = infoCampeon.info.magic;
    let difficulty = infoCampeon.info.difficulty;
    let infoAttack = document.createTextNode("Attack: " + attack + ", ");
    let infoDefense = document.createTextNode("Defense: " + defense + ", ");
    let infoMagic = document.createTextNode("Magic: " + magic + ", ");
    let infoDifficulty = document.createTextNode("Difficulty: " + difficulty + ". ");
    pInfo.appendChild(infoAttack);
    pInfo.appendChild(infoDefense);
    pInfo.appendChild(infoMagic);
    pInfo.appendChild(infoDifficulty);
    containerStatistics.appendChild(pInfo);

    //Creando "p" para el Tags.
    let pTags = document.createElement("p");
    let tags = document.createTextNode("Tags: " + infoCampeon.tags);
    pTags.appendChild(tags);
    containerStatistics.appendChild(pTags);

    //Creando "p" para el Stats.
    let pStats = document.createElement("p");
    let hp = infoCampeon.stats.hp;
    let hpperlevel = infoCampeon.stats.hpperlevel;
    let movespeed = infoCampeon.stats.movespeed;
    let armor = infoCampeon.stats.armor;
    let attackrange = infoCampeon.stats.attackrange;
    let attackdamage = infoCampeon.stats.attackdamage;
    let statsHp = document.createTextNode("Hp: " + hp + ", ");
    let statsHpperlevel = document.createTextNode("Hpperlevel: " + hpperlevel + ", ");
    let statsMovespeed = document.createTextNode("Movespeed: " + movespeed + ", ");
    let statsArmor = document.createTextNode("Armor: " + armor + ", ");
    let statsAttackrange = document.createTextNode("Attackrange: " + attackrange + ", ");
    let statsAttackdamage = document.createTextNode("Attackdamage: " + attackdamage + ". ");
    pStats.appendChild(statsHp);
    pStats.appendChild(statsHpperlevel);
    pStats.appendChild(statsMovespeed);
    pStats.appendChild(statsArmor);
    pStats.appendChild(statsAttackrange);
    pStats.appendChild(statsAttackdamage)
    containerStatistics.appendChild(pStats);
}

//Hacer que cuando el usuario le de click a la imagen del campeón le muestre la tarjeta de estadísticas de cada uno de ellos.
let encontrarIdChampions = function (event,arrayAllChampions) {
    let buscandoChampion = event.currentTarget.id;
    let buscando = arrayAllChampions.find(elemento => elemento.name == buscandoChampion);
    return buscando;
}

function mostrarInfoCampeon(event) {
    const infoCampeon = encontrarIdChampions(event, arrayAllChampions);
    console.log(infoCampeon);
    tarjetaEstadisticas(infoCampeon)
}



//Función para mostrar el inicio y las tarjetas se oculten
function mostrarInicio() {
    document.getElementById("root").style.display = "flex";
    document.getElementById("infoChampions").style.display = "none";
}

//hacer que el botón "Volver" dentro de las tarjetas de estadisticas del campeón, me vuelva al inicio.
let volverAlInicio = document.getElementById("volver");
volverAlInicio.addEventListener("click", mostrarInicio);

//Función que muestra los campeones filtrador por Rol
let mostrarCampeonesFiltradosRol = function (event) {
    let buscando = event.currentTarget.id;
    let campeonesFiltradosPorRol = filtrarRoles(buscando, arrayAllChampions);
    imprimiendoCampeones(campeonesFiltradosPorRol);
}

//Función que muestra los campeones filtrados por dificultad.
// let difficultySelect = document.getElementById("difficulty");
// let valueSelectDifficulty = difficultySelect.selectedIndex;
// let mostrandoCampeonesPorDificultad = function () {
//     let campeonesFiltradosPorDificultad = filtrarDificultad (valueSelectDifficulty,arrayAllChampions);
// }

//Cuando el usuario haga click en el icono de los roles, muestre los campeones del rol seleccionado
let llamandoBotonLuchadores = document.getElementById("Fighter");
let llamandoBotonAsesinos = document.getElementById("Assassin");
let llamandoBotonMagos = document.getElementById("Mage");
let llamandoBotonTirador = document.getElementById("Marksman");
let llamandoBotonSoporte = document.getElementById("Support");
let llamandoBotonTanques = document.getElementById("Tank");
llamandoBotonLuchadores.addEventListener("click", mostrarCampeonesFiltradosRol);
llamandoBotonAsesinos.addEventListener("click", mostrarCampeonesFiltradosRol);
llamandoBotonMagos.addEventListener("click", mostrarCampeonesFiltradosRol);
llamandoBotonTirador.addEventListener("click", mostrarCampeonesFiltradosRol);
llamandoBotonSoporte.addEventListener("click", mostrarCampeonesFiltradosRol);
llamandoBotonTanques.addEventListener("click", mostrarCampeonesFiltradosRol);


console.log(arrayAllChampions);
console.log(filtrarRoles, data);