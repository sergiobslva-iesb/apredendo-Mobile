// Exercicio 3: Estrutura de controle 

function verificarIdade(idade: number): void {
    if (idade < 18) {
        console.log("Você é menor de idade.");
    } else if (idade >= 18 && idade < 65) {
        console.log("Você é maior de idade.");
    } else if (idade >= 65) {
        console.log("Você é idoso.");
    }
}

// Teste com idade 70
verificarIdade(70);