const ClientsModel = require('../models/clients.js')

const routes = (app) => {
    
    app.route('/clients')
        .get(async (req, res) => {
            const { nome } = req.query
            const query = {}

            if (nome) {
                query.nome = { $regex: '.*' + nome + '.*', $options: 'i' }
            }

            try {
                
                const clients = await ClientsModel.find(query)
                res.send({ clients })
                
            } catch (error) {
                res.status(400).send({ error: 'Failed to find clients\n' + error })
            }
        })
}

module.exports = routes