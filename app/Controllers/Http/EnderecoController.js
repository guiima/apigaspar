"use strict";

const Endereco = use("App/Models/Endereco");

class EnderecoController {
  async index() {
    const data = await Endereco.query()
      .with("cliente")
      .fetch();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "rua",
      "numero",
      "bairro",
      "complemento",
      "cidade",
      "estado",
      "cliente_id"
    ]);

    const endereco = await Endereco.create(data);

    return endereco;
  }

  async show({ params }) {
    const data = await Endereco.query()
      .with("cliente")
      .where("id", params.id)
      .fetch();

    return data;
  }

  async update({ params, request }) {
    const endereco = await Endereco.findOrFail(params.id);
    const data = request.only([
      "rua",
      "numero",
      "bairro",
      "complemento",
      "cidade",
      "estado",
      "cliente_id"
    ]);

    endereco.merge(data);
    await endereco.save();

    return endereco;
  }

  async destroy({ params }) {
    const endereco = await Endereco.findOrFail(params.id);

    await endereco.delete();
  }
}

module.exports = EnderecoController;
