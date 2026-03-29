// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {

    const btnConverter = document.getElementById('btnConverter');
    const displayResultado = document.getElementById('resultadoCâmbio');
    const textoFinal = document.getElementById('textoConversao');

    btnConverter.addEventListener('click', () => {
        
        // --- DECLARAÇÃO DE VARIÁVEIS ---
        // Pegando os valores dos inputs e convertendo explicitamente para Number
        let valorReal = Number(document.getElementById('valorReal').value);
        let cotacaoDolar = Number(document.getElementById('cotacaoDolar').value);

        // --- VALIDAÇÃO ---
        // Verificamos se o valor é maior que zero para evitar divisões por zero ou valores negativos
        if (valorReal <= 0 || cotacaoDolar <= 0) {
            alert("Por favor, insira valores válidos e maiores que zero.");
            return;
        }

        // --- TAREFA: CÁLCULO DE CONVERSÃO ---
        // Para saber quantos dólares temos, dividimos o Real pela Cotação
        const valorDolar = valorReal / cotacaoDolar;

        // --- SAÍDA ---
        // Exibindo o resultado concatenado com frase explicativa
        textoFinal.textContent = `Com R$ ${valorReal.toFixed(2)}, você pode comprar US$ ${valorDolar.toFixed(2)} (Cotação: ${cotacaoDolar.toFixed(2)}).`;

        // Mostra o resultado removendo a classe hidden
        displayResultado.classList.remove('hidden');

        /* -------------------------------------------------------------------------
           DESAFIO DE LÓGICA:
           Se a 'cotacaoDolar' fosse declarada acidentalmente como uma String (ex: "5.00"):
           
           No caso da DIVISÃO (/), o JavaScript realizaria a "Coerção Implícita", 
           convertendo a String para Number automaticamente e o resultado seria CORRETO.
           
           PORÉM, se estivéssemos fazendo uma SOMA (+), o JavaScript iria 
           concatenar (juntar os textos) em vez de somar os valores. 
           Exemplo: 100 + "5.00" viraria "1005.00".
           
           É uma boa prática sempre usar Number() para garantir a integridade dos cálculos!
           -------------------------------------------------------------------------
        */
    });
});