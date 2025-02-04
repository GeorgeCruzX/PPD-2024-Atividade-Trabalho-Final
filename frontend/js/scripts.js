document.getElementById('formProduto').addEventListener('submit', function(event) {
    event.preventDefault();
    const produto = {
        nome: document.getElementById('nomeProduto').value,
        descricao: document.getElementById('descricaoProduto').value,
        valor: document.getElementById('valorProduto').value
    };
    fetch('http://localhost:5001/produtos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    }).then(response => response.json())
      .then(data => alert(data.message));
});

document.getElementById('formCliente').addEventListener('submit', function(event) {
    event.preventDefault();
    const cliente = {
        nome: document.getElementById('nomeCliente').value,
        telefone: document.getElementById('telefoneCliente').value
    };
    fetch('http://localhost:5002/clientes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    }).then(response => response.json())
      .then(data => alert(data.message));
});

document.getElementById('formVenda').addEventListener('submit', function(event) {
    event.preventDefault();
    const venda = {
        cliente: document.getElementById('clienteVenda').value,
        produto: document.getElementById('produtoVenda').value
    };
    fetch('http://localhost:5003/vendas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(venda)
    }).then(response => response.json())
      .then(data => alert(data.message));
});

document.getElementById('listarProdutos').addEventListener('click', function() {
    fetch('http://localhost:5001/produtos')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaProdutos');
            lista.innerHTML = '';
            data.forEach(produto => {
                const item = document.createElement('li');
                item.textContent = `${produto.nome} - ${produto.descricao} - R$ ${produto.valor}`;
                lista.appendChild(item);
            });
        });
});

document.getElementById('listarClientes').addEventListener('click', function() {
    fetch('http://localhost:5002/clientes')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaClientes');
            lista.innerHTML = '';
            data.forEach(cliente => {
                const item = document.createElement('li');
                item.textContent = `${cliente.nome} - ${cliente.telefone}`;
                lista.appendChild(item);
            });
        });
});

document.getElementById('listarVendas').addEventListener('click', function() {
    fetch('http://localhost:5003/vendas')
        .then(response => response.json())
        .then(data => {
            const lista = document.getElementById('listaVendas');
            lista.innerHTML = '';
            data.forEach(venda => {
                const item = document.createElement('li');
                item.textContent = `${venda.cliente} comprou ${venda.produto}`;
                lista.appendChild(item);
            });
        });
});