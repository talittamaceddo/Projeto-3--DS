// Lista de funcionários cadastrados
let funcionarios = [];

// Lista de pedidos cadastrados
let pedidos = [];

// Captura o formulário de cadastro de funcionário
document.getElementById('form-funcionario').addEventListener('submit', function(event) {
  event.preventDefault();

  // Captura os valores dos inputs
  const nomeFuncionario = document.getElementById('nomeFuncionario').value;
  const cpfFuncionario = document.getElementById('cpfFuncionario').value;

  // Adiciona o funcionário à lista
  funcionarios.push({ nome: nomeFuncionario, cpf: cpfFuncionario });

  // Atualiza a lista de funcionários no formulário de pedidos
  atualizarListaFuncionarios();

  // Limpa o formulário
  document.getElementById('form-funcionario').reset();
});

// Função para atualizar a lista de funcionários no formulário de pedidos
function atualizarListaFuncionarios() {
  const selectResponsavel = document.getElementById('responsavelPedido');
  
  // Limpa as opções anteriores
  selectResponsavel.innerHTML = '<option value="">Selecione um Funcionário</option>';

  // Adiciona os funcionários cadastrados ao select
  funcionarios.forEach((funcionario, index) => {
    const option = document.createElement('option');
    option.value = index; // Usa o índice como valor
    option.textContent = funcionario.nome;
    selectResponsavel.appendChild(option);
  });
}

// Captura o formulário de cadastro de pedidos
document.getElementById('form-pedido').addEventListener('submit', function(event) {
  event.preventDefault();

  // Captura os valores dos inputs
  const nomePedido = document.getElementById('nomePedido').value;
  const descricaoPedido = document.getElementById('descricaoPedido').value;
  const responsavelIndex = document.getElementById('responsavelPedido').value;
  const statusPedido = document.getElementById('statusPedido').value;

  if (responsavelIndex === "") {
    alert("Selecione um funcionário responsável.");
    return;
  }

  // Adiciona o pedido à lista de pedidos
  pedidos.push({
    nomePedido: nomePedido,
    descricaoPedido: descricaoPedido,
    responsavel: funcionarios[responsavelIndex].nome,
    status: statusPedido
  });

  // Atualiza a tabela de pedidos
  atualizarTabelaPedidos();

  // Limpa o formulário
  document.getElementById('form-pedido').reset();
});

// Função para atualizar a tabela de pedidos cadastrados
function atualizarTabelaPedidos() {
  const tabelaPedidos = document.getElementById('tabela-pedidos');

  // Limpa a tabela antes de adicionar os pedidos
  tabelaPedidos.innerHTML = '';

  // Adiciona cada pedido como uma linha na tabela
  pedidos.forEach(pedido => {
    const row = document.createElement('tr');

    const nomeTd = document.createElement('td');
    nomeTd.textContent = pedido.nomePedido;
    row.appendChild(nomeTd);

    const responsavelTd = document.createElement('td');
    responsavelTd.textContent = pedido.responsavel;
    row.appendChild(responsavelTd);

    const statusTd = document.createElement('td');
    statusTd.textContent = pedido.status;
    row.appendChild(statusTd);

    tabelaPedidos.appendChild(row);
  });
}