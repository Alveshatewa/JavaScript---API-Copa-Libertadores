# 🏆 API de Campeonatos - Copa Libertadores 2022

Este projeto consiste em uma API RESTful desenvolvida com **Node.js** e **Express** que permite consultar informações sobre campeonatos esportivos, tendo como exemplo base o campeonato da Copa Libertadores de 2022, incluindo campeões, vices e ano dos torneios. A API realiza consultas em um banco de dados MySQL utilizando conexões com **pool de conexões**.

## 🚀 Funcionalidades

- Buscar todos os campeonatos.
- Buscar campeonato por ID.
- Buscar campeonato por ano.
- Buscar campeonato por nome da equipe campeã.

## ⚙️ Tecnologias Utilizadas

- Node.js
- Express
- MySQL (com pool de conexões)
- ECMAScript Modules (ESM)

## 📡 Endpoints da API

- GET /championShip <br>
Retorna todos os campeonatos ou filtra por ano ou time:

Parâmetros opcionais:

- year: ano do campeonato (ex: ?year=2020)
- team: nome do time campeão (ex: ?team=Barcelona)

Exemplos:

```bash
GET /championShip
GET /championShip?year=2015
GET /championShip?team=Real Madrid
```

- GET /championShip/:id <br>
Retorna o campeonato correspondente ao ID informado.

Exemplo:
```bash
GET /championShip/3
```

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
