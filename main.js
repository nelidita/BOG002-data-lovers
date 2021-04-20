import { filtrarRoles, encontrarIdChampions, ordenandoAlfabeticamente, filtrarDificultad } from './data.js';
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

//Función que muestra la tarjeta de estadisticas según el ID del campeón al que se le hizo click.
function mostrarInfoCampeon(event) {
    const infoCampeon = encontrarIdChampions(event, arrayAllChampions);
    tarjetaEstadisticas(infoCampeon)
}

//Función para mostrar el inicio y las tarjetas de estadisticas se oculten.
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

//Función que muestra las imágenes y nombres de los campeones ordenados alfabeticamente.
let filtrarAlfabeticamente = document.getElementById("ordenAlfabetico"); //Trayendo el "id" donde el usuario selecciona el tipo de orden alfabetico
function mostrarCampeonesOrdenadosAlfabeticamente() {
    let ordenSeleccionado = filtrarAlfabeticamente.selectedIndex;
    const campeonesOrdenados = ordenandoAlfabeticamente(ordenSeleccionado, arrayAllChampions);
    console.log(campeonesOrdenados);
    imprimiendoCampeones(campeonesOrdenados);
}
filtrarAlfabeticamente.addEventListener("change", mostrarCampeonesOrdenadosAlfabeticamente);//Evento que hace que al cambiar la opción de la selección se ejecute la función según el mismo.


//Función que muestra los campeones filtrados por dificultad.
let difficultySelect = document.getElementById("difficulty"); //Trayendo el "id" del select de Dificultad.

let mostrandoCampeonesOrdenadosPorDificultad = function () {
    let valueSelectDifficulty = difficultySelect.selectedIndex;
    let campeonesFiltradosPorDificultad = filtrarDificultad(valueSelectDifficulty, arrayAllChampions);
    imprimiendoCampeones (campeonesFiltradosPorDificultad);
}
difficultySelect.addEventListener("change", mostrandoCampeonesOrdenadosPorDificultad);

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

console.log(filtrarRoles, data);