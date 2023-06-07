async function createProduto(produto) {
    console.log(produto)
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
const descricao = document.getElementById("input-descricao");
const altura = document.getElementById("input-altura");
const largura = document.getElementById("input-largura");
const tamanho = document.getElementById("input-tamanho");
const categoria = document.getElementById("input-categoria");
const imagem = document.getElementById("input-imagem");

const button = document.getElementById('submit-button');

button.addEventListener("click", (e) => {
    e.preventDefault();
    // checkInputs();

    const produto = {
        "id": "",  
        "descricao": descricao.value,
        "nome": nome.value,
        "cor": cor.value,   
        "preco": preco.value,
        "imagem": imagem.value,
        "altura": altura.value,
        "largura": largura.value,
        "tamanho_sigla": tamanho.value,
        "categoria": categoria.value
    };

    createProduto(produto);
    console.log(produto);
});