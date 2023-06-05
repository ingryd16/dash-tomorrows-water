 
 const form = document.querySelector(".validation");
 const email = document.getElementById("input-email");
 const senha = document.getElementById("input-senha");

const button = document.getElementById('input-enviar');

button.addEventListener("click", async (e) => {
  e.preventDefault();

  const administrador = {   
    "id": "",
    "email": email.value,
    "senha": senha.value,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(administrador)
  };

  
    const response = await fetch('http://localhost:8080/v1/tomorrows-water/administrador/login', options);
    const data = await response.json();
    console.log(response)
    if (response.ok) {
      // Acesso autorizado, redirecionar para outra página HTML
      window.location.href = '../dash_cadastro/index.html';
    } else {
      // Acesso negado, exibir mensagem de erro
      console.log(data.message);
    }
  
});
