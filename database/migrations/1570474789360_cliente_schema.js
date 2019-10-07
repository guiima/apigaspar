"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ClienteSchema extends Schema {
  up() {
    this.create("clientes", table => {
      table.increments();
      table.string("nome").notNullable();
      table
        .string("cpf")
        .notNullable()
        .unique();
      table.date("data_nascimento").notNullable();
      table.string("telefone").notNullable();
      table
        .string("email")
        .notNullable()
        .unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("clientes");
  }
}

module.exports = ClienteSchema;
