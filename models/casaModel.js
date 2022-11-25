const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CasaSchema = new Schema({
    numeroCasa: {
        type: Number,
        required: true
    },
    deudasCasa:[{type: Schema.Types.ObjectId, refs: 'gastoscomunesModel'}]
});

module.exports = mongoose.model('casamodel', CasaSchema);