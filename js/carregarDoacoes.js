'use strict'

import { voluntarios } from "./api.js";
let dados = await voluntarios();
console.log(dados)

const cardVoluntario = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')


    const text_container = document.createElement('div')
    card.classList.add('text_container')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.nome;

    const email = document.createElement('h2')
    email.classList.add('card__email')
    email.textContent = dados.email;

    const cpf = document.createElement('p')
    cpf.classList.add('card__cpf')
    cpf.textContent = dados.cpf;

    const genero = document.createElement('p')
    genero.classList.add('card__genero')
    genero.textContent = dados.genero;

    const data = document.createElement('p')
    data.classList.add('card__data')
    data.textContent = dados.data_nascimento;

    const telefone = document.createElement('p')
    telefone.classList.add('card__telefone')
    telefone.textContent = dados.numero;


    text_container.append(name, email, cpf, genero, data, telefone)


    card.append(text_container)

    return card
}

export const carregarVoluntario = async () => {

    const container = document.getElementById('container-collections')
    const cards = dados.voluntarios.telefones.map(cardVoluntario)
    container.append(...cards)
}

carregarVoluntario()