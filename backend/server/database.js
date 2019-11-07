const mongoose = require('mongoose');
const URI = process.env.MONGODB_URI;

mongoose.connect(URI, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(db => console.log('conectado a la base de datos'))
    .catch(err => console.log({ err }));

module.exports = mongoose;