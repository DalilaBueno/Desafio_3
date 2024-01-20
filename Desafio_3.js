class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    //Método para realizar o ataque
    atacar() {
        let ataque

    //Ataque com base no tipo de herói
        switch (this.tipo) {
            case "mago":
                ataque = "magia"
                break;
            case "guerreiro":
                ataque = "espada"
                break
            case "monge":
                ataque = "artes marciais"
                break
            case "ninja":
                ataque = "shuriken"
                break
            default:
                ataque = "ataque desconhecido"
        }
        //Mensagem de saída
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
        //Exemplo de herói
        let heroiA = new heroi("Herói", 18, "mago")
        let heroiB = new heroi("Herói Guerreiro", 35, "guerreiro");
        let heroiC = new heroi("Herói Monge", 28, "monge");
        let heroiD = new heroi("Herói Ninja", 25, "ninja");
        heroiA.atacar()
        heroiB.atacar()
        heroiC.atacar()
        heroiD.atacar()