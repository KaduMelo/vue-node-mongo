# Run apllication

Vue, Express, Node, Mongo with Docker-compose setup for local development.

### Steps to Run

1. Clone this repository

`git clone https://github.com/KaduMelo/vue-node-mongo.git`

2. Navigate into the directory vue-node-mongo

`cd your-path-to/vue-node-mongo`

3. Build Docker Images

`docker-compose build`

4. Run the stack

`docker-compose up`

Your app should be running on (if using native docker).: 

http://localhost:8080

# Carga de dados

Caso você queira adicionar dados no mongo, basta você seguir os passos abaixo:

1. Instale uma IDE para o mongo, eu uso o Robo 3T (https://snapcraft.io/robo3t-snap)
2. Acesse o Robo 3T e conecta no banco com a conexão `localhost`, porta `27017`
3. Cria um database chamado `desafio`
4. Dentro do database desafio crie uma collection chamado `clients`
5. Dentro da collection execute o script:

```
db.getCollection('clients').insertMany([
    {
      "_id": "5f64f570599180f3f49ac093",
      "nome": "Cliente A",
      "valor": 100.5,
      "dataPrimeiraInadimplencia": "2013-10-02T01:11:18.965Z"
    },
    {
      "_id": "5f64f7a0599180f3f49ac1c4",
      "nome": "Cliente B",
      "valor": 100.5,
      "dataPrimeiraInadimplencia": "2013-10-02T01:11:18.965Z"
    },
    {
      "_id": "5f64f7aa599180f3f49ac1cc",
      "nome": "Cliente C",
      "valor": 14750.98,
      "dataPrimeiraInadimplencia": "2020-09-18T01:11:18.965Z"
    },
    {
      "_id": "5f64f7b3599180f3f49ac1d3",
      "nome": "Cliente D",
      "valor": 18000.74,
      "dataPrimeiraInadimplencia": "2020-09-01T01:11:18.965Z"
    },
    {
      "_id": "5f64f7ba599180f3f49ac1da",
      "nome": "Cliente E",
      "valor": 1154.45,
      "dataPrimeiraInadimplencia": "2020-09-02T01:11:18.965Z"
    },
    {
      "_id": "5f64f7c2599180f3f49ac1e1",
      "nome": "Cliente F",
      "valor": 1000.50,
      "dataPrimeiraInadimplencia": "2020-09-03T01:11:18.965Z"
    },
    {
      "_id": "5f64f7c9599180f3f49ac1ea",
      "nome": "Cliente G",
      "valor": 13500.05,
      "dataPrimeiraInadimplencia": "2020-09-04T01:11:18.965Z"
    }
  ])
