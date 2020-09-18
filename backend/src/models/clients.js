import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    nome: { 
        type: String, 
        required: true 
    },
    valor: { 
        type: Mongoose.Schema.Types.Decimal128, 
        required: true 
    },
    dataPrimeiraInadimplencia: { 
        type: Date, 
        required: true
    }
})

export default Mongoose.model('Client', schema)