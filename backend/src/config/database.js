import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const config = {
  uri: 'mongodb://mongoadmin:secret@localhost:27888/desafio?authSource=admin',
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

export default {
  connect: () => mongoose.connect(config.uri, config.options)
}