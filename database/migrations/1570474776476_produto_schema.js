"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ProdutoSchema extends Schema {
  up() {
    this.create("produtos", table => {
      table.increments();
      table.string("nome").notNullable();
      table.decimal("valor").notNullable();
      table.string("unidade_medida").notNullable();
      table.decimal("qtd_atual").notNullable();
      table.decimal("qtd_minima").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("produtos");
  }
}

module.exports = ProdutoSchema;
