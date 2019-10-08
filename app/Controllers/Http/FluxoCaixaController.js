"use strict";

const FluxoCaixa = use("App/Models/FluxoCaixa");

class FluxoCaixaController {
  async index() {
    const data = await FluxoCaixa.query()
      .with("movimentacao")
      .with("usuario")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only(["movimentacao_id", "usuario_id"]);

    const fluxocaixa = await FluxoCaixa.create(data);

    return fluxocaixa;
  }

  async show({ params }) {
    const data = await FluxoCaixa.query()
      .with("movimentacao")
      .with("usuario")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const fluxocaixa = await FluxoCaixa.findOrFail(params.id);
    const data = request.only(["movimentacao_id", "usuario_id"]);

    fluxocaixa.merge(data);
    await fluxocaixa.save();

    return fluxocaixa;
  }

  async destroy({ params }) {
    const fluxocaixa = await FluxoCaixa.findOrFail(params.id);

    await fluxocaixa.delete();
  }
}

module.exports = FluxoCaixaController;
