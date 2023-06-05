async function createProduto(produto) {
    const url = 'http://localhost:8080/v1/tomorrows-water/produto';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            console.log('Dados enviados com sucesso para o servidor.');
        } else {
            console.log('Ocorreu um erro ao enviar os dados para o servidor.');
        }
    } catch (error) {
        console.error('Ocorreu um erro na requisição:', error);
    }
}

const form = document.querySelector(".forms");
const nome = document.getElementById("input-nome");
const cor = document.getElementById("input-cor");
const preco = document.getElementById("input-preco");
const altura = document.getElementById("input-altura");
const largura = document.getElementById("input-largura");
const descricao = document.getElementById("input-descricao");
const imagem = document.getElementById("input-imagem");

const button = document.getElementById('submit-button');

button.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();

    const produto = {
        "id": "",
        "nome": nome.value,
        "descricao": descricao.value,
        "cor": cor.value,
        "preco": preco.value,
        "imagem": imagem.value,
        "altura": altura.value,
        "largura": largura.value,
        /* "tamanho_sigla": message.value,
        "categoria": message.value, */
    };

    createProduto(produto);
    console.log(produto);
});