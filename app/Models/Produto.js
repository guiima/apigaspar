"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Produto extends Model {
  produtoPedido() {
    return this.hasMany("App/Models/ProdutoPedido");
  }
}

module.exports = Produto;
