'use strict'

import { doacoes } from "./api.js";
let dados = await doacoes();
console.log(dados)

const cardDoacao = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')


    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.nome_doador;

    const email = document.createElement('h2')
    email.classList.add('card__email')
    email.textContent = dados.email;

    const cpf = document.createElement('p')
    cpf.classList.add('card__cpf')
    cpf.textContent = dados.cpf;

    const tipo = document.createElement('p')
    tipo.classList.add('card__tipo')
    tipo.textContent = dados.tipo_doacao;

    const valor = document.createElement('p')
    valor.classList.add('card__valor')
    valor.textContent = dados.valor;

    text_container.append(name, email, cpf, tipo, valor)

    const img = document.createElement('img')
    img.classList.add('card__img')
    img.src = dados.imagem;

    card.append(text_container, img)

    return card
}

export const carregarDoacao = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.doacoes.map(cardDoacao)
    container.append(...cards)
}

carregarDoacao()