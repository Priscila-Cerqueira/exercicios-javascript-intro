// Aguarda o DOM (a estrutura da página) carregar completamente antes de rodar o JS
document.addEventListener('DOMContentLoaded', () => {

    // 1. Selecionando os elementos do HTML que vamos usar
    const inputCliente = document.getElementById('inputCliente'); // Campo de texto Nome
    const inputProduto = document.getElementById('inputProduto'); // Campo de texto Produto
    const btnGerar = document.getElementById('btnGerar');       // Botão
    const ticketArea = document.getElementById('ticketResultado'); // Área do Cartão do Ticket
    const mensagemFinal = document.getElementById('mensagemFormatada'); // Onde a frase vai

    // 2. Adicionando um "Ouvinte de Evento" (Event Listener) no botão
    btnGerar.addEventListener('click', function() {
        
        // --- COLETA E VALIDAÇÃO ---
        
        // Coletando os valores digitados e usando .trim() para remover espaços vazios nas pontas
        let nomeCapturado = inputCliente.value.trim();
        let produtoCapturado = inputProduto.value.trim();

        // Validação básica: se algum campo estiver vazio, avisa o usuário e para o script
        if (nomeCapturado === "" || produtoCapturado === "") {
            alert("Por favor, preencha o nome do cliente e o produto.");
            return; // O 'return' para a execução da função aqui
        }

        // --- LÓGICA DO SISTEMA ---

        // A) Protocolo: Gerando um número aleatório diferente a cada clique (Number)
        // Usamos Math.random() para um decimal > 0 e < 1, multiplicamos e arredondamos
        // com Math.floor() para obter um número inteiro grande.
        const protocoloGerado = Math.floor(Math.random() * 1000000);

        // B) Tempo Estimado: Sorteando o tempo entre 5 e 60 minutos (Number)
        // Lógica: Math.random() * (máx - mín + 1) + mín
        const tempoSorteado = Math.floor(Math.random() * (60 - 5 + 1)) + 5;

        // C) Cliente e Produto: Garantindo que sejam Strings (já vêm do input como String)
        const cliente = String(nomeCapturado);
        const produto = String(produtoCapturado);

        // --- RENDERIZAÇÃO NA TELA ---

        // Criando a frase formatada solicitada usando Template Literals (crases)
        const fraseFormatada = `Olá ${cliente}, seu chamado de número #${protocoloGerado} para o produto ${produto} foi registrado. Tempo estimado: ${tempoSorteado} min.`;

        // Colocando a frase final dentro do parágrafo correspondente no HTML
        mensagemFinal.textContent = fraseFormatada;

        // Revelando o ticket na tela (removendo a classe CSS '.hidden')
        ticketArea.classList.remove('hidden');

        // (Opcional) Limpando os campos após gerar o ticket
        inputCliente.value = '';
        inputProduto.value = '';
        inputCliente.focus(); // Coloca o cursor de volta no primeiro campo
    });
});