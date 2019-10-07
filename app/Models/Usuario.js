"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Usuario extends Model {
  pedido() {
    return this.hasOne("App/Models/Pedido");
  }

  fluxoCaixa() {
    return this.hasMany("App/Models/FluxoCaixa");
  }
}

module.exports = Usuario;
