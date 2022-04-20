const carrinho = {
  total: 0,
  itens: [],
  addProduct: adicionarItem,
  removeProduct: removerItem,
  summary: resumoCarrinho,
  checkout: finalizaPedido,
};

function calculaTotal() {
  return carrinho.itens.reduce((acc, item) => acc + item.preco, 0);
}

function adicionarItem(item) {
  carrinho.itens.push(item);
  carrinho.total = calculaTotal();
}

function removerItem(itemParaRemover) {
  carrinho.itens = carrinho.itens.filter(
    (item) => item.nome !== itemParaRemover.nome
  );
  carrinho.total = calculaTotal();
}

function resumoCarrinho() {
  return {
    total: carrinho.total,
    itemsQuantity: carrinho.itens.length,
  };
}

function finalizaPedido() {
  const sumary = resumoCarrinho();
  carrinho.itens = [];
  carrinho.total = 0;
  return sumary;
}

export default carrinho;
