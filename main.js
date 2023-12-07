import { generateContact, generatePerson} from "./utils.js";
import{ consultRandomUser, consultTimeCity } from "./apis.js"

let card = "";
let image = document.createElement("img");
let url = "./img/user_nt_found.jpg";
let container = document.body.getElementsByClassName("container")[0];

let info = [
  ["Name", "name surname"],
  ["Mail", "mail"],
  ["Phone", "phone"],
  ["Location", "city"],
  ["Current Time", "time"],
];

let button = document.createElement("button");
button.textContent = "Generate User";

DOMContentLoad(url);
button.addEventListener("click", randomGenerate);

function DOMContentLoad(url) {
  createElements(url);
  info.forEach(function (propierty) {
    let span = document.createElement("span");
    let mockup = "<span><strong>" + propierty[0] + ": </strong>" + propierty[1] + "</span>";
    span.innerHTML = mockup;
    card.append(span);
  });
  container.append(button);
}

function createElements(url){
  card = document.createElement("div");
  card.id = "card";
  image.src = url;
  container.append(card);
  card.append(image);
}

async function randomGenerate() {
  let datos = await consultRandomUser();
  datos.name = datos.name.first + " " + datos.name.last;
  let contacto = await generateContact(datos);
  let persona = await generatePerson(datos, contacto);
  let tiempo = await consultTimeCity(persona.location);
  let arrayPersona = [
    persona.name,
    contacto.mail,
    contacto.phone,
    persona.location,
    tiempo.hour + ":" + tiempo.minute + ":" + tiempo.second,
  ];
  info.forEach(function (propierty, index) {
    propierty[1] = arrayPersona[index];
  });
  container.innerHTML = "";
  DOMContentLoad(datos.picture.large);
}