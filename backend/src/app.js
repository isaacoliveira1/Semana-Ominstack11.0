const express = require('express');
const routes = require('./routes');
const cors = require('cors')
const {errors} = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors())

module.exports = app;

/*
- Rota / Recurso
*/

/*
- Métodos HTTP:

- GET: Buscar uma informação do back-end
- POST: Criar uma informação do back-end
- PUT: Alterar uma informação do back-end
- DELETE: Deletar uma informação do back-end
*/


/*
- Tipos Parâmetros:
- Query: Parâmetros nomeados enviados  na rota após o "?" (Filtro, paginação)
- Route Params: Parâmetros utilizados para indentificar recursos
- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
- SQL: Mysql, SQLite, POstgreeSQL, Oracle, Microsoft SQL Server.
- NoSQL: MongoDB, CouchDB.
*/

/**
 * Driver: SELECT * FROM users;
 * Query Builder: table(*users).select('*').where()
 */


