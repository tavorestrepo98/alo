const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    apellido: {
        type: String
    },
    username: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'El correo electronico es necesario'],
        unique: true
    },
    estado: {
        type: Boolean,
        default: true
    },
    cuentas: {
        type: Array,
        default: []
    },
    fechaNacimiento: {
        type: Date,
        required: false
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    }
});

usuarioSchema.plugin(uniqueValidator, {
    message: '{PATH} debe ser unico'
});

module.exports = mongoose.model('usuarios', usuarioSchema);