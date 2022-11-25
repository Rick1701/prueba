const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PropietarioSchema = new Schema({
    rutPropietario: {
        type: String,
        required: true
    },
    nombrePropietario:{
        type: String,
        required: true
    },
    apellidoPropietario:{
        type: String,
        required: true
    },
    correoPropietario:{
        type: String,
        required: true
    },
    casasPropietario:[{
        type: Schema.ObjectId,
        refs: 'casamodel'
    }]
});

module.exports = mongoose.model('propietarioModel', PropietarioSchema);