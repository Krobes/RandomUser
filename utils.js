import { Contacto } from "./Contacto.js";
import { Persona } from "./Persona.js";

export function generatePerson(datos, contacto) {
  return new Promise((resolve, reject) => {
    let persona = new Persona(datos.name, contacto, datos.location.city);
    if (persona) {
      resolve(persona);
    } else {
      reject(new Error("Error al crear el objeto Persona."));
    }
  });
}

export function generateContact(datos) {
  return new Promise((resolve, reject) => {
    let contact = new Contacto(datos.email, datos.phone);
    if (contact) {
      resolve(contact);
    } else {
      reject(new Error("Error al crear el objeto Contacto."));
    }
  });
}
