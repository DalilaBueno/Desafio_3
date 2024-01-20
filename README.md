# 3️⃣ Escrevendo as Classes de um Jogo

## - Desafio 3 proposto pelo Tech Lead Felipe Aguiar da ([DIO](https://web.dio.me/))

**O Que Deve Ser Utilizado**
- Variáveis
- Operadores
- Laços de Repetição
- Estruturas de Decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
- Nome
- Idade
- Tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado `atacar` que deve atender os seguintes requisitos:
- Exibir a mensagem: "o {tipo} atacou usando {ataque}"
  - Onde o {tipo} deve ser concatenado com o tipo que está na propriedade da classe
  - E no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:
    - Se mago -> no ataque exibir (usou magia)
    - Se guerreiro -> no ataque exibir (usou espada)
    - Se monge -> no ataque exibir (usou artes marciais)
    - Se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final, deve-se exibir uma mensagem:
- "o {tipo} atacou usando {ataque}"
  - Exemplo: mago atacou usando magia
            guerreiro atacou usando espada
