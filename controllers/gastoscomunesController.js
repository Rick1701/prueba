const GastosComunes = require('../models/gastoscomunesModel');

const createGastoComun = (req, res) => {
    const { nombreGc, montoGc, fechavencimientoGc, estadoGc } = req.body;
    const newGastosComunes = new GastosComunes({
        nombreGc,
        montoGc,
        fechavencimientoGc,
        estadoGc
    });
    if(((nombreGc!='Luz')&&(nombreGc!='luz')&&(nombreGc!='Agua')&&(nombreGc!='agua')&&
        (nombreGc!='Gas')&&(nombreGc!='gas')&&(nombreGc!='Gastos comunes')&&(nombreGc!='gastos comunes'))){
            return res.send ({ message: "Error, la deuda no puede tener ese nombre"})
    }
    else{
        newGastosComunes.save((err, gastoscomunesModel) => {
        if (err) {
                return res.status(400).send({ message: "Error al crear el gasto ",nombreGc })
            }
            return res.status(201).send(gastoscomunesModel)
    })
    }
}
const getGastosComunes = (req, res) => {
    GastosComunes.find({}, (err, gastoscomunesModels) => {
        if (err) {
            return res.status(400).send({ message: "Error al obtener los gastos comunes" })
        }
        return res.status(200).send(gastoscomunesModels)
    })
}

const getSpecificGastoComun = (req,res) =>{
    const {id} = req.params;
    GastosComunes.findById(id, (err, gastoscomunesModel) =>{
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}

const updateGastoComun = (req, res) => {
    const { id } = req.params;
    GastosComunes.findByIdAndUpdate(id, req.body, (err, gastoscomunesModel) => {
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}

const deleteGastoComun = (req, res) => {
    const { id } = req.params;
    GastosComunes.findByIdAndDelete(id, (err, gastoscomunesModel) => {
        if(err){
            return res.status(400).send({message:"Error al obtener el gasto!!"})
        }
        if(!gastoscomunesModel){
            return res.status(404).send({ message: "Gasto no encontrado!!"})
        }
        return res.status(200).send(gastoscomunesModel)
    })
}


module.exports = {
    createGastoComun,
    getGastosComunes,
    getSpecificGastoComun,
    updateGastoComun,
    deleteGastoComun
}