async function loginAdm(administrador) {
    console.log(administrador)
    const url = 'http://localhost:8080/v1/tomorrows-water/administrador/login';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(administrador)   
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
const email = document.getElementById("input-email");
const senha = document.getElementById("input-senha");


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector(".error-message");

    // // Adiciona a mensagem de erro
    // small.innerText = message;

    // Adiciona a classe de erro
    formControl.classList.remove("success");
    formControl.classList.add("error");
}

function setSuccessFor(input) {
    const formControl = input.parentElement;

    // Adicionar a classe de sucesso
    formControl.classList.remove("error");
    formControl.classList.add("success");
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkInputs() {
    if (email.value === "") {
        setErrorFor(email, "O e-mail é obrigatório.");
    } else if (!checkEmail(email.value)) {
        setErrorFor(email, "Por favor, insira um e-mail válido.");
    } else {
        setSuccessFor(email);
    }

    if (senha.value === "") {
        setErrorFor(senha, "A senha é obrigatória!");
    } else if (!checkSenha(senha.value)) {
        setErrorFor(senha, "Por favor, insira uma senha válida.");
    } else {
        setSuccessFor(senha);
    }

    const formControls = form.querySelectorAll(".validation");

    const formIsValid = [...formControls].every((formControl) => {
        return formControl.classList.contains("success");
    });

    if (formIsValid) {
        console.log("O formulário está 100% válido!");
    }
}
function checkSenha(senha) {
    // Adicione aqui a expressão regular para validar a senha
    // Exemplo de expressão regular que verifica se a senha tem pelo menos 8 caracteres:
    return senha.length >= 50;
}



const button = document.getElementById('input-enviar');

button.addEventListener("click", (e) => {
    e.preventDefault();
    checkInputs();

    const administrador = {
        "id": "",   
        "email": email.value,
        "senha": senha.value,
        // "nome": nome.value
    };

    loginAdm(administrador);
    console.log(administrador);
});