<p align="center">
   <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3BwOXhjYXphcGswNjFrcGlqZXp2dmxmZTM4dzZhbGdzcjMzZmZwbiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/7cYoERt3yza1A1iV0q/giphy.gif" alt="movie" width="280"/>
</p>

<h1 align="center"></h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/agostinhomarcia/back-end-car-reservations?color=d910e0">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/agostinhomarcia/back-end-car-reservations?color=d910e0">

  <img alt="License" src="https://img.shields.io/github/license/agostinhomarcia/back-end-car-reservations?color=d910e0">

   <img alt="Github issues" src="https://img.shields.io/github/issues/agostinhomarcia/back-end-car-reservations?color=d910e0" />
>

</p>

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/agostinhomarcia" target="_blank">Author</a>&#xa0; | &#xa0
  <a href="#" target="_blank" rel="noopener noreferrer">Projeto</a>
</p>

<br>

# Car Reservation Backend

Este é o backend para o sistema de reservas de carros. Este projeto fornece uma API RESTful para gerenciar reservas de carros, permitindo criar, atualizar, deletar e listar reservas.

## Tecnologias

- Node.js
- Express.js
- Body-parser
- CORS

## Funcionalidades

- **Criar Reserva:** Permite criar uma nova reserva de carro.
- **Listar Reservas:** Permite listar todas as reservas de carros.
- **Atualizar Reserva:** Permite atualizar uma reserva existente.
- **Deletar Reserva:** Permite deletar uma reserva existente.

## Instalação

Siga as instruções abaixo para rodar o projeto na sua máquina local.

### Pré-requisitos

- Node.js (https://nodejs.org/)
- npm (https://www.npmjs.com/)

### Passos para Instalação

1. Clone o repositório para a sua máquina local:

   ```bash
   git clone https://github.com/agostinhomarcia/back-end-car-reservations.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd back-end-car-reservations
   ```

3. Instale as dependências do projeto:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   node server.js
   ```

5. O servidor estará rodando na porta 3000. Você pode acessar a API em `http://localhost:3000`.

## Endpoints da API

### Criar uma Nova Reserva

- **URL:** `/reservations`
- **Método:** `POST`
- **Corpo da Requisição:**
  ```json
  {
    "car": "Carro 1",
    "model": "Sedan",
    "year": "2020",
    "startDate": "2024-07-20T00:00:00.000Z",
    "endDate": "2024-07-25T00:00:00.000Z",
    "pricePerDay": 50,
    "totalPrice": 250
  }
  ```

### Deletar uma Reserva

URL: /reservations/:id

Método: DELETE

## :memo: License

This project is under the [MIT license](./License).

Made with love by [Márcia Agostinho](https://github.com/agostinhomarcia) 🚀.

<p align="center">
   <img src="https://media.giphy.com/media/ifM99v5HzxZNlUyJEb/giphy.gif?cid=790b761152i9hs135j1u525e4123yjidop5h8bs94kkqgiqj&ep=v1_stickers_search&rid=giphy.gif&ct=s" alt="movies" width="230"/>
</p>

&#xa0;

<a href="#top">Back to top </a>
