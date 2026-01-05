
// função pra verificar a quantidade de números do cep digitados no input, aceitar somente números usando método "replace", fazer requisição da API e enviar os dados convertidos em json para função que trabalha tirando do console e colocando na tela.
async function pesquisaCep() { 
    const inputCep = document.querySelector("#input-cep");
    const cepLimpo = inputCep.value.replace(/\D/g,"");

    if (cepLimpo.length !== 8) {
        alert("Cep Inválido, tente novamente.");
        return;
    }

    const url = `http://viacep.com.br/ws/${cepLimpo}/json/`;

    const resp = await fetch(url);
    const data = await resp.json();

    detailsCepWindow(data);

    // limpeza do input

    inputCep.value = "";
}

// função para colocar os detalhes do objeto json na tela

function detailsCepWindow(dados) {
    const result = document.querySelector("#resultado-cep");

    // variável "result" coloca os conteúdos do APIviaCEP no HTML interno

    result.innerHTML =
    `
    <h2 class="title-item">Resultados de Pesquisa</h2>
    <p class="list-item">Cep → <strong>${dados.cep}</strong> </p>
    <p class="list-item">Logradouro → <strong>${dados.logradouro}</strong> </p>
    <p class="list-item">Complemento → <strong>${dados.complemento || "Nenhum"}</strong> </p>
    <p class="list-item">Bairro → <strong>${dados.bairro}</strong> </p>
    <p class="list-item">Estado → <strong>${dados.estado} | ${dados.uf}</strong></p>
    <p class="list-item">DDD → <strong>${dados.ddd}</strong></p>
    `
}





