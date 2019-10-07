"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutoPedidoSchema extends Schema {
  up() {
    this.create("produto_pedidos", table => {
      table.increments();
      table.integer("quantidade").notNullable();
      table
        .integer("produto_id")
        .unsigned()
        .references("id")
        .inTable("produtos");
      table
        .integer("pedido_id")
        .unsigned()
        .references("id")
        .inTable("pedidos");
      table.timestamps();
    });
  }

  down() {
    this.drop("produto_pedidos");
  }
}

module.exports = ProdutoPedidoSchema;
