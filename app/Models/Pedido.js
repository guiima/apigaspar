"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Pedido extends Model {
  movimentacao() {
    return this.hasOne("App/Models/Movimentacao");
  }

  usuario() {
    return this.belongsTo("App/Models/Usuario");
  }

  produtoPedido() {
    return this.hasMany("App/Models/ProdutoPedido");
  }

  cliente() {
    return this.belongsTo("App/Models/Cliente");
  }
}

module.exports = Pedido;
