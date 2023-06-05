async function createProjeto(projeto) {
    console.log(projeto)
    const url = 'http://localhost:8080/v1/tomorrows-water/projeto';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projeto)   
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
const nome = document.getElementById("input-nome-projeto");
const descricao = document.getElementById("input-descricao-projeto");
const imagem = document.getElementById("input-imagem-projeto");
const button = document.getElementById('submit-button-projeto');

button.addEventListener("click", (e) => {
    e.preventDefault();
    // checkInputs();

    const projeto = {
        "id": "",   
        "nome": nome.value,
        "descricao": descricao.value,
        "imagem": imagem.value,
    };

    createProjeto(projeto);
    console.log(projeto);
});