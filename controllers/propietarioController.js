const Propietario = require('../models/propietarioModel');
const Casa = require('../models/casaModel');
const createPropietario = (req, res) => {
    const { rutPropietario, nombrePropietario, apellidoPropietario , correoPropietario, casasPropietario } = req.body;
    const newPropietario = new Propietario({
        rutPropietario,
        nombrePropietario,
        apellidoPropietario,
        correoPropietario,
        casasPropietario
    });
    newPropietario.save((err, propietarioModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al crear el propietario" })
        }
        return res.status(201).send(propietarioModel)
    })
}
const getPropietarios = (req, res) => {
    Propietario.find({}, (err, propietarioModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los propietarios" })
        }
        return res.status(200).send(propietarioModels)
    })
}
/*
const getPropietarioPorCasa = async(req, res) => {
    const { id } = req.params;
    console.log(Propietario.findById(id).populate('casamodels') )
    Propietario.findById(id).populate('casamodels').exec((err, propietarioModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el propietario" })
        }
        if (!propietarioModel) {
            return res.status(404).send({ message: "Propietario no encontrado" })
        }
        return res.status(200).send(propietarioModel)
    })
}*/

const getPropietarioPorCasa = (req,res) => {
    const {id} = req.params;
    Propietario.findById(id).populate('casamodels').exec((err,propietario)=>{
        if(err){
            return res.status(400).send({message:'Error al obtener el propietario'});
        }
        if(!propietario){
            return res.status(404).send({message:'Propietario no encontrado'});
        }
        return res.status(200).send(propietario);
    })
}


const deletePropietario = (req, res) => {
    const { id } = req.params;
    Propietario.findByIdAndDelete(id, (err, propietarioModel) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener el propietario" })
        }
        if (!propietarioModel) {
            return res.status(404).send({ message: "Propietario no encontrado" })
        }
        return res.status(200).send(propietarioModel)
    })
}


module.exports = {
    createPropietario,
    getPropietarios,
    deletePropietario,
    getPropietarioPorCasa
}