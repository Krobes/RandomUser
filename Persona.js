export class Persona {
  #name;
  #contacto;
  #location;
  constructor(name, contacto, location) {
    this.#name = name;
    this.#contacto = contacto;
    this.#location = location;
  }

  get name() {
    return `${this.#name}`;
  }

  get contacto() {
    return `${this.#contacto}`;
  }

  get location() {
    return `${this.#location}`;
  }
}
