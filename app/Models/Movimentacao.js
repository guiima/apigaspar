"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Movimentacao extends Model {
  fluxoCaixa() {
    return this.hasMany("App/Models/FluxoCaixa");
  }

  pedido() {
    return this.belongsTo("App/Models/Pedido");
  }
}

module.exports = Movimentacao;
