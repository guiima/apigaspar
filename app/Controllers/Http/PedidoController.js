"use strict";

const Pedido = use("App/Models/Pedido");

class PedidoController {
  async index() {
    const data = await Pedido.query()
      .with("cliente")
      .with("usuario")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "forma_pagamento",
      "desconto",
      "cliente_id",
      "usuario_id"
    ]);

    const pedido = await Pedido.create(data);

    return pedido;
  }

  async show({ params }) {
    const data = await Pedido.query()
      .with("cliente")
      .with("usuario")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const pedido = await Pedido.findOrFail(params.id);
    const data = request.only([
      "forma_pagamento",
      "desconto",
      "cliente_id",
      "usuario_id"
    ]);

    pedido.merge(data);
    await pedido.save();

    return pedido;
  }

  async destroy({ params }) {
    const pedido = await Pedido.findOrFail(params.id);

    await pedido.delete();
  }
}

module.exports = PedidoController;
