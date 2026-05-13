let soma = 0;
let qtd = 0;
let n;

while (n = Number(prompt("Digite um número (0 para sair)"))) {
    soma += n;
    qtd++;
}

alert(`Quantidade: ${qtd}\nSoma: ${soma}\nMédia: ${soma / qtd || 0}`);