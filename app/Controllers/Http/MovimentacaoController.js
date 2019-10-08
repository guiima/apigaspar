"use strict";

const Movimentacao = use("App/Models/Movimentacao");

class MovimentacaoController {
  async index() {
    const data = await Movimentacao.query()
      .with("pedido")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only(["descricao", "tipo", "valor", "pedido_id"]);

    const movimentacao = await Movimentacao.create(data);

    return movimentacao;
  }

  async show({ params }) {
    const data = await Movimentacao.query()
      .with("pedido")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const movimentacao = await Movimentacao.findOrFail(params.id);
    const data = request.only(["descricao", "tipo", "valor", "pedido_id"]);

    movimentacao.merge(data);
    await movimentacao.save();

    return movimentacao;
  }

  async destroy({ params }) {
    const movimentacao = await Movimentacao.findOrFail(params.id);

    await movimentacao.delete();
  }
}

module.exports = MovimentacaoController;
