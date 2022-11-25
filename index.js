const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes')
const casaRoutes = require('./routes/casaRoutes')
const propietarioRoutes = require('./routes/propietarioRoutes')
const gastoscomunesRoutes = require('./routes/gastoscomunesRoutes')

app.use(cors())
app.use(express.json());
app.options('*', cors());
app.use('/api', productRoutes);
app.use('/api', categoryRoutes);
app.use('/api', casaRoutes);
app.use('/api', propietarioRoutes);
app.use('/api', gastoscomunesRoutes);



app.listen(process.env.PORT, () => {
    console.log('El proyecto esta corriendo en el puerto -> ', process.env.PORT)
});

mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.DB, (err) => {
    if (err) {
        return console.log('Error al conectar con la base de datos -> ', err)
    }
    return console.log('Conectado a la base de datos')
});