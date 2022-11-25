const Casa = require('../models/casaModel');
const Propietario = require('../models/propietarioModel');

const createCasa = (req, res) => {
    const { numeroCasa, deudasCasa } = req.body;
    const newCasa = new Casa({
        numeroCasa,
        deudasCasa
    });
    newCasa.save((err, casaModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear la casa" })
        }
        /*Propietario.findByIdAndUpdate(id, { casa_propietario: casaModel }, (err, propietarioModel) => {
            if (err) {
                return res.status(400).send({ message: "No se ha podido crear la categoria" })
            }
            if (!propietarioModel) {
                return res.status(404).send({ message: "No existe el producto" })
            }
            return res.status(201).send(casaModel)
        })*/
        return res.status(201).send(casaModel)
    })
}
const getCasas = (req, res) => {
    Casa.find({}, (err, casaModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener las casas" })
        }
        return res.status(200).send(casaModels)
    })
}



module.exports = {
    createCasa,
    getCasas
}