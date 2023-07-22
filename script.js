var painelAtual = 1;
var totalPaineis = 9;

function mudarPainel(variavel) {
  painelAtual += variavel;

  if (painelAtual < 1) {
    painelAtual = totalPaineis;
  } else if (painelAtual > totalPaineis) {
    painelAtual = 1;
  }

  exibirPainel();
}

function exibirPainel() {
  var painel = document.getElementById('painel-atual');
  painel.innerHTML = obterConteudoPainel(painelAtual);
}

function obterConteudoPainel(numero) {
  switch (numero) {
    case 1:
      return `
        <h2>EX 1: Maior número entre dois números </h2>
        <input type="number" id="numero1" placeholder="Número 1">
        <input type="number" id="numero2" placeholder="Número 2">
        <button onclick="exibirMaiorNumero()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 2:
      return `
        <h2>EX 2: Exibir uma mensagem de acordo com a nota do usuário</h2>
        <input type="number" id="nota" placeholder="Nota">
        <button onclick="exibirMensagemNota()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 3:
      return `
        <h2>EX 3: Exibir a média dos números de um vetor</h2>
        <input type="text" id="vetor" placeholder="Ex: 1, 2, 3">
        <button onclick="calcularMedia()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 4:
      return `
        <h2>EX 4: Exibir uma mensagem de acordo com o valor de uma variável</h2>
        <input type="text" id="variavel" placeholder="ex: a">
        <button onclick="exibirMensagemVariavel()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 5:
      return `
        <h2>EX 5: Exibir a soma dos elementos de uma matriz</h2>
        <textarea id="matriz" placeholder="Ex:
1, 2, 3
4, 5, 6
7, 8, 9"></textarea>
        <button onclick="calcularSomaMatriz()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 6:
      return `
        <h2> EX 6: Exibir o fatorial de um número fornecido pelo usuário</h2>
        <input type="number" id="numero" placeholder="Número">
        <button onclick="calcularFatorial()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 7:
      return `
        <h2>EX 7: Exibir uma mensagem de acordo com a escolha do usuário em um menu de opções</h2>
        <select id="opcao">
          <option value="1">Opção 1</option>
          <option value="2">Opção 2</option>
          <option value="3">Opção 3</option>
        </select>
        <button onclick="exibirMensagemOpcaoEscolhida()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 8:
      return `
        <h2>EX 8: Exibir o maior número de um vetor</h2>
        <input type="text" id="vetor" placeholder="Ex: 1, 2, 3">
        <button onclick="exibirMaiorNumeroVetor()">Calcular</button>
        <div id="resultado"></div>
      `;
    case 9:
      return `
        <h2>EX 9: Exibir a média dos elementos de uma matriz</h2>
        <textarea id="matriz" placeholder="Ex:
        1, 2, 3
        4, 5, 6
        7, 8, 9"></textarea>
        <button onclick="calcularMediaMatriz()">Calcular</button>
        <div id="resultado"></div>
      `;
    default:
      return '';
  }
}

function exibirMaiorNumero() {
  var numero1 = document.getElementById('numero1').value;
  var numero2 = document.getElementById('numero2').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (numero1 && numero2) {
    var maiorNumero = Math.max(parseFloat(numero1), parseFloat(numero2));
    resultado.textContent = 'O maior número é: ' + maiorNumero;
  }
}

function exibirMensagemNota() {
  var nota = document.getElementById('nota').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (nota) {
    nota = parseFloat(nota);
    if (nota < 6) {
      resultado.textContent = 'Reprovado';
    } else if (nota < 8) {
      resultado.textContent = 'Aprovado';
    } else {
      resultado.textContent = 'Aprovado com louvor';
    }
  }
}

function calcularMedia() {
  var vetor = document.getElementById('vetor').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (vetor) {
    var vetor = vetor.split(',').map(function (item) {
      return parseFloat(item.trim());
    });

    var soma = vetor.reduce(function (acc, curr) {
      return acc + curr;
    }, 0);

    var media = soma / vetor.length;

    resultado.textContent = 'A média é: ' + media.toFixed(2);
  }
}

function exibirMensagemVariavel() {
  var variavel = document.getElementById('variavel').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (variavel) {
    if (variavel === 'a') {
      resultado.textContent = 'A';
    } else if (variavel === 'b') {
      resultado.textContent = 'B';
    } else {
      resultado.textContent = 'Outra letra';
    }
  }
}

function calcularSomaMatriz() {
  var matriz = document.getElementById('matriz').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (matriz) {
    var linhas = matriz.split('\n');
    var matriz = linhas.map(function (linha) {
      return linha.split(',').map(function (item) {
        return parseFloat(item.trim());
      });
    });

    var soma = matriz.reduce(function (acc, linha) {
      return acc + linha.reduce(function (acc, curr) {
        return acc + curr;
      }, 0);
    }, 0);

    resultado.textContent = 'A soma é: ' + soma;
  }
}

function calcularFatorial() {
  var numero = document.getElementById('numero').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (numero) {
    numero = parseInt(numero);

    if (numero >= 0) {
      var fatorial = 1;

      for (var i = 2; i <= numero; i++) {
        fatorial *= i;
      }

      resultado.textContent = 'O fatorial é: ' + fatorial;
    }
  }
}

function exibirMensagemOpcaoEscolhida() {
  var opcao = document.getElementById('opcao').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (opcao) {
    switch (opcao) {
      case '1':
        resultado.textContent = 'Opção 1 escolhida';
        break;
      case '2':
        resultado.textContent = 'Opção 2 escolhida';
        break;
      case '3':
        resultado.textContent = 'Opção 3 escolhida';
        break;
      default:
        resultado.textContent = 'Opção inválida';
    }
  }
}

function exibirMaiorNumeroVetor() {
  var vetor = document.getElementById('vetor').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (vetor) {
    var vetor = vetor.split(',').map(function (item) {
      return parseFloat(item.trim());
    });

    var maiorNumero = Math.max.apply(null, vetor);

    resultado.textContent = 'O maior número é: ' + maiorNumero;
  }
}

function calcularMediaMatriz() {
  var matriz = document.getElementById('matriz').value;

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (matriz) {
    var linhas = matriz.split('\n');
    var matriz = linhas.map(function (linha) {
      return linha.split(',').map(function (item) {
        return parseFloat(item.trim());
      });
    });

    var soma = matriz.reduce(function (acc, linha) {
      return acc + linha.reduce(function (acc, curr) {
        return acc + curr;
      }, 0);
    }, 0);

    var totalElementos = matriz.reduce(function (acc, linha) {
      return acc + linha.length;
    }, 0);

    var media = soma / totalElementos;

    resultado.textContent = 'A média é: ' + media.toFixed(2);
  }
}

exibirPainel();