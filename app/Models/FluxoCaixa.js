"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class FluxoCaixa extends Model {
  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }

  movimentacao() {
    return this.belongsTo("App/Models/Movimentacao");
  }
}

module.exports = FluxoCaixa;
