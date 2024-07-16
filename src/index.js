class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    calcularNivel () {
        if (this.xp < 1000) {
            return "Ferro";
        } else if (this.xp >= 1001 && this.xp <= 2000) {
            return "Bronze";
        } else if (this.xp >= 2001 && this.xp <= 5000) {
            return "Prata";
        } else if (this.xp >= 5001 && this.xp <= 7000) {
            return "Ouro";
        } else if (this.xp >= 7001 && this.xp <= 8000) {
            return "Platina";
        } else if (this.xp >= 8001 && this.xp <= 9000) {
            return "Ascendente";
        } else if (this.xp >= 9001 && this.xp <= 10000) {
            return "Imortal";
        } else {
            return "Radiante";
        }
    }

    atacar() {
        let ataque = " ";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case 'ninja':
                ataque = "shuriken";
                break;
            default:
                ataque = "atacou";
                break;
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const heroi1 = new Heroi("Aragorn", 30, "guerreiro")
const heroi2 = new Heroi("Gandalf", 1000, "mago")
const heroi3 = new Heroi("Bruce Lee", 35, "monge")
const heroi4 = new Heroi("Hanzo", 28, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()
