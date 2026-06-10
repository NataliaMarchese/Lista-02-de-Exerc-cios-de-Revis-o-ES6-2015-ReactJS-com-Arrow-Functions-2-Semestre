const resultado = document.getElementById("resultado");

function exibir(titulo, conteudo) {
  resultado.innerHTML += `
    <div class="card">
      <h2>${titulo}</h2>
      <p>${conteudo}</p>
    </div>
  `;

  console.log(`${titulo}:`, conteudo);
}

// =====================================
// 11. Filtrar Positivos
// =====================================

const numeros = [-5, 10, -2, 15, -1, 3];

const positivos =
  numeros.filter(n => n > 0);

exibir(
  "11. Filtrar Positivos",
  positivos.join(", ")
);

// =====================================
// 12. Nomes em Maiúsculo
// =====================================

const nomes = [
  "Natalia",
  "Vera",
  "Felipe"
];

const maiusculos =
  nomes.map(nome => nome.toUpperCase());

exibir(
  "12. Nomes em Maiúsculo",
  maiusculos.join(", ")
);

// =====================================
// 13. Busca de Usuário
// =====================================

const usuarios = [
  { id: 1, nome: "Natalia" },
  { id: 2, nome: "Vera" },
  { id: 3, nome: "Felipe" }
];

const usuario =
  usuarios.find(u => u.id === 3);

exibir(
  "13. Busca de Usuário",
  `${usuario.nome} (ID: ${usuario.id})`
);

// =====================================
// 14. Cálculo de Imposto
// =====================================

const precos = [
  100,
  200,
  300
];

const comImposto =
  precos.map(
    preco => Number((preco * 1.15).toFixed(2))
  );

exibir(
  "14. Cálculo de Imposto",
  comImposto.join(", ")
);

// =====================================
// 15. Contagem de Caracteres
// =====================================

const palavras = [
  "JavaScript",
  "React",
  "HTML",
  "CSS"
];

const tamanhos =
  palavras.map(
    palavra => palavra.length
  );

exibir(
  "15. Contagem de Caracteres",
  tamanhos.join(", ")
);

// =====================================
// 16. Filtrar entre 10 e 50
// =====================================

const numerosFiltro = [
  5,
  12,
  25,
  55,
  40,
  8
];

const filtrados =
  numerosFiltro.filter(
    numero =>
      numero > 10 &&
      numero < 50
  );

exibir(
  "16. Filtrar entre 10 e 50",
  filtrados.join(", ")
);

// =====================================
// 17. Soma do Carrinho
// =====================================

const carrinho = [
  100,
  250,
  50,
  80
];

const total =
  carrinho.reduce(
    (acc, valor) =>
      acc + valor,
    0
  );

exibir(
  "17. Soma do Carrinho",
  `R$ ${total}`
);

// =====================================
// 18. Existe Admin
// =====================================

const usuariosSistema = [
  "Vera",
  "Felipe",
  "Natalia",
  "Carlos"
];

const existeAdmin =
  usuariosSistema.some(
    usuario => usuario === "Admin"
  );

exibir(
  "18. Existe Admin?",
  existeAdmin
);

// =====================================
// 19. Todos Positivos
// =====================================

const listaNumeros = [
  5,
  10,
  20,
  30
];

const todosPositivos =
  listaNumeros.every(
    numero => numero > 0
  );

exibir(
  "19. Todos Positivos?",
  todosPositivos
);

// =====================================
// 20. Objeto Curto
// =====================================

const criarProduto =
  (nome, categoria) => ({
    nome,
    categoria
  });

const produto =
  criarProduto(
    "Teclado",
    "Informática"
  );

exibir(
  "20. Objeto Curto",
  `${produto.nome} - ${produto.categoria}`
);

