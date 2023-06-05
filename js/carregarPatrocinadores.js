'use strict'

import { patrocinadores } from "./api.js";
let dados = await patrocinadores();
console.log(dados)

const cardPatrocinador = (dados, telefones) => {

    const card = document.createElement('div')
    card.classList.add('card')


    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.razao_social;

    const email = document.createElement('h2')
    email.classList.add('card__email')
    email.textContent = dados.email;

    const cnpj = document.createElement('p')
    cnpj.classList.add('card__cpf')
    cnpj.textContent = "CNPJ:" + dados.cnpj;


    const telefone = document.createElement('p')
    telefone.classList.add('card__telefone')
    telefone.textContent = telefones.numero;


    text_container.append(name, email, cnpj, telefone)


    card.append(text_container)

    return card
}

export const carregarPatrocinador= async () => {

    const container = document.getElementById('container-collections')
    const dados = await patrocinadores(); // Obtém os dados dos voluntários
  
    dados.patrocinador.forEach((patrocinadores) => {
        patrocinadores.telefones.forEach((telefone) => {
          const card = cardPatrocinador(patrocinadores, telefone); // Chama a função cardVoluntario com o objeto completo do voluntário e o telefone
          container.appendChild(card); // Adiciona o card ao container
        });
      });
    }

carregarPatrocinador();