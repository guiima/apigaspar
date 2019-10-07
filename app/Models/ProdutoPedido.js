"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProdutoPedido extends Model {
  produto() {
    return this.belongsTo("App/Models/Produto");
  }

  pedido() {
    return this.belongsTo("App/Models/Pedido");
  }
}

module.exports = ProdutoPedido;
