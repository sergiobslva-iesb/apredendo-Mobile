// Exercício 2: Operadores Aritméticos e de Comparação


function operacoesMatematicas(num1: number, num2: number): void {
    // Soma
    const soma = num1 + num2;
    
    // Subtração
    const subtracao = num1 - num2;
    
    // Multiplicação
    const multiplicacao = num1 * num2;
    
    // Divisão
    const divisao = num1 / num2;
    
    // Verificar se o primeiro número é maior que o segundo
    const ehMaior = num1 > num2;
    
    // Exibir resultados
    console.log(`Soma: ${soma}`);
    console.log(`Subtração: ${subtracao}`);
    console.log(`Multiplicação: ${multiplicacao}`);
    console.log(`Divisão: ${divisao}`);
    console.log(`O primeiro número é maior que o segundo? ${ehMaior}`);
}

// Teste com os números 15 e 5
operacoesMatematicas(15, 5);
