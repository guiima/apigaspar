"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Cliente extends Model {
  endereco() {
    return this.hasMany("App/Models/Endereco");
  }

  pedido() {
    return this.hasMany("App/Models/Pedido");
  }
}

module.exports = Cliente;
