"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class PedidoSchema extends Schema {
  up() {
    this.create("pedidos", table => {
      table.increments();
      table.string("forma_pagamento").notNullable();
      table.string("desconto");
      table
        .integer("cliente_id")
        .unsigned()
        .references("id")
        .inTable("clientes");
      table
        .integer("usuario_id")
        .unsigned()
        .references("id")
        .inTable("usuarios");
      table.timestamps();
    });
  }

  down() {
    this.drop("pedidos");
  }
}

module.exports = PedidoSchema;
