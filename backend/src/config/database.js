const mongoose = require('mongoose')

mongoose.Promise = global.Promise


const URL = process.env.DATABASE_URL || 'localhost'

const config = {
  uri: 'mongodb://' + URL + ':27017/desafio',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
}

mongoose.connection.on('connected', () => {
	console.log('Conectado ao banco de dados!');
});

mongoose.connection.on('error', (err) => {
	console.log('Erro na conexão: ' + err);
});

mongoose.connection.on('disconnect', () => {
	console.log('Desconectado :(');
});

module.exports.connect = async () => {
  mongoose.connect(config.uri, config.options)
}