//Importação do model
const Customer = require('../models/Customer')

const controller = {}   //Objeto vazio

//Arow function -> função de seta
/*
    ex: function somar (a,b){
        return a + b
    }
    ----------------------
    cont somar = (a,b) => a+b

*/

//Arow function
controller.create = async (req, res) =>{
    try{
        //Manda as informações que vieram em req.body
        //para serem gravadas no banco de dados
        await Customer.create(req.body)

        //HTTP 201: Created
        res.status(201).end()
    }
    catch(error){
        console.error(error)
        //HTTP 500: Internal SErver Error
        res.status(500).send(error)
    }
} 

module.exports = controller