"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class FluxoCaixaSchema extends Schema {
  up() {
    this.create("fluxo_caixas", table => {
      table.increments();
      table
        .integer("movimentacao_id")
        .unsigned()
        .references("id")
        .inTable("movimentacaos");
      table
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios");
      table.timestamps();
    });
  }

  down() {
    this.drop("fluxo_caixas");
  }
}

module.exports = FluxoCaixaSchema;
