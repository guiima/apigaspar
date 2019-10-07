"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class EnderecoSchema extends Schema {
  up() {
    this.create("enderecos", table => {
      table.increments();
      table.string("rua").notNullable();
      table.integer("numero").notNullable();
      table.string("bairro").notNullable();
      table.string("complemento").notNullable();
      table.string("cidade").notNullable();
      table.string("estado").notNullable();
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes");
      table.timestamps();
    });
  }

  down() {
    this.drop("enderecos");
  }
}

module.exports = EnderecoSchema;
