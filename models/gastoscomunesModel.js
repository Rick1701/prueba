const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GastosComunesSchema = new Schema({
    nombreGc: {
        type: String,
        required: true
    },
    montoGc:{
        type: Number,
        required: true
    },
    fechavencimientoGc:{
        type: Date,
        required: true
    },
    estadoGc:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('gastoscomunesModel', GastosComunesSchema);