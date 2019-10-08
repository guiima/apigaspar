"use strict";

const ProdutoPedido = use("App/Models/ProdutoPedido");

class ProdutoPedidoController {
  async index() {
    const data = await ProdutoPedido.query()
      .with("produto")
      .with("pedido")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only(["quantidade", "produto_id", "pedido_id"]);

    const produto_pedido = await ProdutoPedido.create(data);

    return produto_pedido;
  }

  async show({ params }) {
    const data = await ProdutoPedido.query()
      .with("produto")
      .with("pedido")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const produto_pedido = await ProdutoPedido.findOrFail(params.id);
    const data = request.only(["quantidade", "produto_id", "pedido_id"]);

    produto_pedido.merge(data);
    await produto_pedido.save();

    return produto_pedido;
  }

  async destroy({ params }) {
    const produto_pedido = await ProdutoPedido.findOrFail(params.id);

    await produto_pedido.delete();
  }
}

module.exports = ProdutoPedidoController;
