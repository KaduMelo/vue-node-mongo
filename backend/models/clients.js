import Mongoose from 'mongoose'

const schema = new Mongoose.Schema({
    nome: { type: String, required: true },
    valor: { type: Schema.Types.Decimal128, required: true },
    primeiraInadimplencia: { type: Date, required: true }
})

export default Mongoose.model('Client', schema)