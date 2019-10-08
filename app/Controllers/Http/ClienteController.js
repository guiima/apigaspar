"use strict";

const Cliente = use("App/Models/Cliente");

class ClienteController {
  async index() {
    const data = await Cliente.all();

    return data;
  }

  async store({ request }) {
    const data = request.only([
      "nome",
      "cpf",
      "data_nascimento",
      "telefone",
      "email"
    ]);

    const cliente = await Cliente.create(data);

    return cliente;
  }

  async show({ params }) {
    const data = await Cliente.findOrFail(params.id);

    return data;
  }

  async update({ params, request }) {
    const cliente = await Cliente.findOrFail(params.id);
    const data = request.only([
      "nome",
      "cpf",
      "data_nascimento",
      "telefone",
      "email"
    ]);

    cliente.merge(data);
    await cliente.save();

    return cliente;
  }

  async destroy({ params }) {
    const cliente = await Cliente.findOrFail(params.id);

    await cliente.delete();
  }
}

module.exports = ClienteController;
