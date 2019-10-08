"use strict";

const Route = use("Route");

// Route.resource("users", "UserController").apiOnly();

Route.resource("clientes", "ClienteController").apiOnly();

Route.resource("produtos", "ProdutoController").apiOnly();

Route.resource("usuarios", "UsuarioController").apiOnly();

Route.resource("enderecos", "EnderecoController").apiOnly();

Route.resource("pedidos", "PedidoController").apiOnly();

Route.resource("produtopedido", "ProdutoPedidoController").apiOnly();

Route.resource("movimentacoes", "MovimentacaoController").apiOnly();

Route.resource("fluxocaixa", "FluxoCaixaController").apiOnly();
