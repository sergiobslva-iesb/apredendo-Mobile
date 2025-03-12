// Exercício 1: Manipulação de Strings
let strings = ["quaresma", "paixao", "penitencia"];

function manipularString(palavras) {
    palavras.forEach(palavra => {
        // Converter para maiúsculas
        const maiusculas = palavra.toUpperCase();
        
        // Converter para minúsculas
        const minusculas = palavra.toLowerCase();
        
        // Inverter a string
        const invertida = palavra.split('').reverse().join('');
        
        // Substituir caracteres (exemplo: trocar "a" por "x")
        const letraAntiga = "a"; // Letra a ser substituída
        const letraNova = "x"; // Nova letra
        const substituida = palavra.split(letraAntiga).join(letraNova);
        
        // Exibir resultados
        console.log(`Palavra original: ${palavra}`);
        console.log(`Maiúsculas: ${maiusculas}`);
        console.log(`Minúsculas: ${minusculas}`);
        console.log(`Invertida: ${invertida}`);
        console.log(`Substituída: ${substituida}`);
        console.log("---------------------------");
    });
}

manipularString(strings);



