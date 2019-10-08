"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class FluxoCaixa extends Model {
  movimentacao() {
    return this.belongsTo("App/Models/Movimentacao");
  }

  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }
}

module.exports = FluxoCaixa;
