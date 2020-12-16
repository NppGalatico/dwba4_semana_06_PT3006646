class Aluno {

    constructor(name, lastname, a, b) {

      this.primeiroNome = name;
      this.segundoNome = lastname;
      this.primeiraNota = a;
      this.segundaNota = b; 

    }
    nomeCompleto() {

        return (this.primeiroNome + " " + this.segundoNome);

    }
    media(){

        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);	

    }
    situacao(){

        if (this.media() > 6){

            return 'Aprovado';

        }

        return 'Reprovado';

    }

  }
  
  function criarAlunos(){

      var alunos = [new Aluno('Victor', 'Moreira', 8, 7.5), new Aluno('Tin', 'Robert', 8, 3), new Aluno('Edson', 'Vianna', 7, 2)];	

      alunos.forEach(mostrarAlunos);

  }
  
  function mostrarAlunos(item, index) {

      alert("Nome completo: " + item.nomeCompleto() + "\nMédia: " + item.media() + "\nSituação: " + item.situacao());

  }
  
  criarAlunos();