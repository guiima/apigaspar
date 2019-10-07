"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class MovimentacaoSchema extends Schema {
  up() {
    this.create("movimentacaos", table => {
      table.increments();
      table.text("descricao").notNullable();
      table.string("tipo").notNullable();
      table.decimal("valor").notNullable();
      table
        .integer("pedido_id")
        .unsigned()
        .references("id")
        .inTable("pedidos");
      table.timestamps();
    });
  }

  down() {
    this.drop("movimentacaos");
  }
}

module.exports = MovimentacaoSchema;
