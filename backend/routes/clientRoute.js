import ClientsModel from '../models/clients'

const routes = (app) => {
    
    app.route('/clients?')
        .get(async (req, res) => {
            const { nome } = req.params
            const query = {};

            if (nome) {
                query._id = nome
            }

            try {

                const clients = await ClientsModel.find(query)
                res.send({ clients })
                
            } catch (error) {
                res.status(400).send({ error: 'Failed to find user' })
            }
        })
}

module.exports = routes