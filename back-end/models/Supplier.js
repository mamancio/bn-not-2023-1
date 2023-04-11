const mongoose = require('mongoose')

const schema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },

    //Subdocumento incorporado

    address:{
        street:{
            type: String,
            required: true
        },
        number: {
            type: String,
            required: true
        },
        complement:{
            type: String,
            required: false
        },
        district:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip_code: {
            type: String,
            required: false
        }        
    }
})

/*
    Parametros de mongoose.model:
    1º nome da model, para uso interno (convenção: primeira letra maiuscula e singular)
    2º relação de campos do esquema(constante schema)
    3º nome da collecrtion no banco de dados (convenção: mesmo nome do model, mas com letra minuscula e no plural)
*/


module.exports = mongoose.model('Customer', schema, 'customers')