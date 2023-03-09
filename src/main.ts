import './style.css'

import { Personagem } from './game'
import { Monstro } from './game'
import { batalha } from './game'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<body>

<header>
  <h1>Seminário de TS</h1>
</header>


<div class="view">

<h1 class="titulo">Classes e Objetos</h1>
<h2 class="texto">Em Orientação a Objetos, uma classe é um modelo que define os atributos e comportamentos que os objetos que a ela pertencem terão. <br> Os objetos, por sua vez, são instâncias das classes.<br> Vamos ver um exemplo simples: </h2>




  <div class="code">
  
    <p>class Pessoa {</p>
      <p>&nbsp;&nbsp; nome: string;</p>
      <p>&nbsp;&nbsp; idade: number;</p>
      <p>&nbsp;&nbsp; constructor(nome: string, idade: number) {</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; this.nome = nome;</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; this.idade = idade;</p>
      <p>&nbsp;&nbsp; }</p>
      <p>&nbsp;&nbsp; saudar() {</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp; console.log(Olá, meu nome é {this.nome} e eu tenho {this.idade} anos.);</p>
      <p>&nbsp;&nbsp; }</p>
      <p>}</p>
      <p>const pessoa1 = new Pessoa("João", 25);</p>
      <p>pessoa1.saudar(); // "Olá, meu nome é João e eu tenho 25 anos."</p>
</div>

<h2 class="texto">Neste exemplo, criamos uma classe Pessoa que possui os atributos nome e idade, e o método saudar(). Em seguida, criamos um objeto pessoa1 a partir da classe Pessoa, passando os valores "João" e 25 como parâmetros para o construtor da classe. Finalmente, chamamos o método saudar() do objeto pessoa1, que exibe uma mensagem na saída padrão.</h2>

<br>
<br>
<br>
<h1 class="titulo">Herança</h1>
<h2 class="texto">Herança é um mecanismo pelo qual uma classe pode herdar os atributos e métodos de outra classe. Em TypeScript, podemos usar a palavra-chave extends para criar uma classe derivada a partir de uma classe base. Vejamos um exemplo:</h2>
<div class="code">
<p>class Funcionario extends Pessoa {</p>
  <p>&emsp; cargo: string;</p>
  <p>&emsp; constructor(nome: string, idade: number, cargo: string) {</p>
  <p>&emsp;&emsp; super(nome, idade);</p>
  <p>&emsp;&emsp; this.cargo = cargo;</p>
  <p>&emsp; }</p>
  <p>&emsp; trabalhar() {</p>
  <p>&emsp;&emsp; console.log(Estou trabalhando como {this.cargo}.);</p>
  <p>&emsp; }</p>
  <p>}</p>
  <p>const funcionario1 = new Funcionario("Maria", 30, "desenvolvedora");</p>
  <p>funcionario1.saudar(); // "Olá, meu nome é Maria e eu tenho 30 anos."</p>
  <p>funcionario1.trabalhar(); // "Estou trabalhando como desenvolvedora."</p>
</div>
<h2 class="texto">Neste exemplo, criamos uma classe Funcionario que estende a classe Pessoa, adicionando o atributo cargo e o método trabalhar(). Ao criar um objeto funcionario1 a partir da classe Funcionario, podemos acessar tanto os métodos e atributos da classe base Pessoa quanto os métodos e atributos adicionais da classe derivada Funcionario.</h2>
<br>
<br>
<br>

<h1 class="titulo">Polimorfismo</h1>
<h2 class="texto">Polimorfismo é um conceito que nos permite tratar objetos de diferentes classes de forma uniforme, usando interfaces comuns. Em TypeScript, podemos usar interfaces para definir as propriedades e métodos que as classes devem implementar para se conformar a um determinado contrato.</h2>
<div class="code">
<p>interface Animal {</p>
  <p>  nome: string;</p>
  <p>  emitirSom(): void;</p>
  <p>}</p>
  <p></p>
  <p>class Cachorro implements Animal {</p>
  <p>  nome: string;</p>
  <p>  </p>
  <p>  constructor(nome: string) {</p>
  <p>    this.nome = nome;</p>
  <p>  }</p>
  <p></p>
  <p>  emitirSom() {</p>
  <p>    console.log({this.nome} está latindo.);</p>
  <p>  }</p>
  <p>}</p>
  <p></p>
  <p>class Gato implements Animal {</p>
  <p>  nome: string;</p>
  <p>  </p>
  <p>  constructor(nome: string) {</p>
  <p>    this.nome = nome;</p>
  <p>  }</p>
  <p></p>
  <p>  emitirSom() {</p>
  <p>    console.log({this.nome} está miando.);</p>
  <p>  }</p>
  <p>}</p>
  <p></p>
  <p>function fazerBarulho(animal: Animal) {</p>
  <p>  animal.emitirSom();</p>
  <p>}</p>
  <p></p>
  <p>const cachorro1 = new Cachorro("Rex");</p>
  <p>const gato1 = new Gato("Mimi");</p>
  <p></p>
  <p>fazerBarulho(cachorro1); // "Rex está latindo."</p>
  <p>fazerBarulho(gato1); // "Mimi está miando."</p>
  
</div>

<br>
<br>
<br>

<h1 class="titulo">Atividade prática</h1>

<h2 class="texto">Para praticar os conceitos apresentados nesta palestra, vamos criar um programa em TypeScript que simula um jogo de RPG. O jogo deve ter os seguintes elementos:</h2>
<ul class="lista">
<li class="topico">Personagens: os personagens são objetos que possuem um nome, um nível e uma quantidade de pontos de vida (PV).</li>
<li class="topico">Batalha: a batalha é um processo em que dois personagens se enfrentam. O personagem que tiver mais pontos de vida no final da batalha é o vencedor.</li>
<li class="topico">Monstros: os monstros são personagens que podem ser derrotados pelos jogadores. Eles possuem um nome, um nível e uma quantidade de pontos de vida.</li>
</ul>
</div>


</body>
`



