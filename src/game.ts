export class Personagem {
  nome: string;
  nivel: number;
  pv: number;

  constructor(nome: string, nivel: number, pv: number) {
    this.nome = nome;
    this.nivel = nivel;
    this.pv = pv;
  }

  atacar(personagem: Personagem) {
    console.log(`${this.nome} está atacando ${personagem.nome}.`);
    personagem.perderPV(10);
  }

  perderPV(dano: number) {
    console.log(`${this.nome} perdeu ${dano} pontos de vida.`);
    this.pv -= dano;
  }
}

export class Monstro extends Personagem {
  constructor(nome: string, nivel: number, pv: number) {
    super(nome, nivel, pv);
  }

  atacar(personagem: Personagem) {
    console.log(`${this.nome} está atacando ${personagem.nome}.`);
    personagem.perderPV(20);
  }
}

export function batalha(personagem1: Personagem, personagem2: Personagem) {
  while (personagem1.pv > 0 && personagem2.pv > 0) {
    personagem1.atacar(personagem2);
    personagem2.atacar(personagem1);
  }

  if (personagem1.pv > 0) {
    console.log(`${personagem1.nome} venceu a batalha!`);
  } else {
    console.log(`${personagem2.nome} venceu a batalha!`);
  }
}


