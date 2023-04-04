const mongoose = require('mongoose')

const schema = mongoose.Schema({
    datetime: {
        type: Date,
        required: true,
        default: Date.now() //Data/Hora da gravação
    },
    number:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.ObjectId, //Tipo para chave estrangeira
        ref: 'Customer',         // Model estrangeiro
        required: true
    }
})

/*
    Parametros de mongoose.model:
    1º nome da model, para uso interno (convenção: primeira letra maiuscula e singular)
    2º relação de campos do esquema(constante schema)
    3º nome da collecrtion no banco de dados (convenção: mesmo nome do model, mas com letra minuscula e no plural)
*/


module.exports = mongoose.model('Sale', schema, 'sales')