class Estudante {
  constructor(nome, email, ra, curso, ...disciplinas) {
    (this.nome = nome),
      (this.email = email),
      (this.ra = ra),
      (this.curso = curso),
      (this.disciplinas = disciplinas);
  }
}

const estudante01 = new Estudante(
  "David",
  "david@gmail.com",
  "1234",
  "ADS",
  "Prog WEB",
  "Estrutura de Dados",
  "Gestão de Projetos"
);

const estudante02 = new Estudante(
  "Joãozinho",
  "joãozinho@gmail.com",
  "1234",
  "ADS",
  "Prog WEB",
  "Estrutura de Dados",
  "Gestão de Projetos",
  "TG"
);

console.log(estudante01);
console.log(estudante02);
