/*
  Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
*/

var readline = require("readline-sync");

class Hero {
  constructor(heroName, age, heroType) {
    this.heroName = heroName;
    this.age = age;
    this.heroType = heroType;
    this.attackForm =
      heroType == "mago"
        ? "magia"
        : heroType == "guerreiro"
        ? "espada"
        : heroType == "monge"
        ? "artes marciais"
        : heroType == "ninja"
        ? "shuriken"
        : "ataque inválido";
  }
}

function getHeroAttackType() {
  let name = readline.question("Digite o nome do Heroi: ");
  let age = readline.questionInt("Digite a idade do Heroi: ");
  let heroType = readline.question("Digite o tipo do Heroi: ").toLowerCase();

  while (
    heroType != "mago" &&
    heroType != "guerreiro" &&
    heroType != "monge" &&
    heroType != "ninja"
  ) {
    heroType = readline
      .question("Tipo invalido!!!\nDigite o tipo do Heroi correto: ")
      .toLowerCase();
  }

  const hero = new Hero(name, age, heroType);

  console.log(`${hero.heroType} atacou usando ${hero.attackForm}`);
}

do {
  getHeroAttackType();

  resp = readline.question("Digite 'sim' para continuar...\t");
  console.clear();
} while (resp == "sim");
