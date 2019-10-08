"use strict";

const Produto = use("App/Models/Produto");

class ProdutoController {
  async index() {
    const data = await Produto.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "nome",
      "valor",
      "unidade_medida",
      "qtd_atual",
      "qtd_minima"
    ]);

    const produto = await Produto.create(data);

    return produto;
  }

  async show({ params }) {
    const data = await Produto.findOrFail(params.id);

    return data;
  }

  async update({ params, request }) {
    const produto = await Produto.findOrFail(params.id);
    const data = request.only([
      "nome",
      "valor",
      "unidade_medida",
      "qtd_atual",
      "qtd_minima"
    ]);

    produto.merge(data);
    await produto.save();

    return produto;
  }

  async destroy({ params }) {
    const produto = await Produto.findOrFail(params.id);

    await produto.delete();
  }
}

module.exports = ProdutoController;
