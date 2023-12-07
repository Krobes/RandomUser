export class Contacto {
  #mail;
  #phone;
  constructor(mail, phone) {
    this.#mail = mail;
    this.#phone = phone;
  }

  get mail() {
    return `${this.#mail}`;
  }

  get phone() {
    return `${this.#phone}`;
  }
}
