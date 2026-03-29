// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    
    // Referenciando os elementos do DOM
    const btnCalcular = document.getElementById('btnCalcular');
    const painel = document.getElementById('painelResultado');
    const displayMensagem = document.getElementById('mensagemSaida');

    // Escutando o clique do botão
    btnCalcular.addEventListener('click', () => {
        
        // --- ENTRADA DE DADOS ---
        // Coletamos os valores e convertemos para o tipo correto (String e Number)
        const nomeVendedor = String(document.getElementById('nomeVendedor').value.trim());
        
        // Convertendo os inputs de texto para Números Decimais (Float)
        const salarioBase = Number(document.getElementById('salarioBase').value);
        const totalVendasMes = Number(document.getElementById('totalVendas').value);

        // --- VALIDAÇÃO ---
        if (!nomeVendedor || isNaN(salarioBase) || isNaN(totalVendasMes)) {
            alert("Por favor, preencha todos os campos corretamente com valores numéricos.");
            return;
        }

        // --- CÁLCULOS ---
        // 1. Calculando a comissão de 12% (12 / 100 = 0.12)
        const taxaComissao = 0.12; 
        const comissao = totalVendasMes * taxaComissao;

        // 2. Calculando o salário final
        const salarioFinal = salarioBase + comissao;

        // --- SAÍDA FORMATADA ---
        // Usamos .toFixed(2) para garantir que o dinheiro tenha sempre 2 casas decimais (ex: 10.50)
        const mensagem = `O vendedor <strong>${nomeVendedor}</strong> receberá <strong>R$ ${salarioFinal.toFixed(2)}</strong> este mês, sendo <strong>R$ ${comissao.toFixed(2)}</strong> de bônus.`;

        // Exibindo o resultado no HTML
        displayMensagem.innerHTML = mensagem; // Usamos innerHTML para as tags <strong> funcionarem
        
        // Mostra a caixa de resultado removendo a classe 'hidden'
        painel.classList.remove('hidden');
    });
});