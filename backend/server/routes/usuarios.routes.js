const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const path = require('path');



router.get('/', (req, res) => {
    // console.log(path.resolve(__dirname, '../views/registro.html'));

    res.render('registro_usuario');
    // res.send('hola');
});

router.post('/signup', (req, res) => {
    const { nombre, apellido, username, email, password } = req.body;
    let user = new Usuario({ nombre, apellido, username, email, password });
    console.log(user);
    user.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.redirect('signin');
    });

});


router.get('/signin', (req, res) => {
    res.render('login2');
});

// router.get('/', async(req, res) => {
//     let users = await Usuario.find({ estado: true });

//     if (users) {
//         res.json({
//             ok: true,
//             usuarios: users
//         });
//     } else {
//         res.json({
//             ok: false,
//             message: 'No hay usuarios'
//         });
//     }
// });

// router.get('/:id', async(req, res) => {
//     let id = req.params.id;
//     let user = await Usuario.find({ _id: id, estado: true }, 'nombre email estado');

//     res.json({
//         ok: true,
//         usuario: user
//     });
//     console.log('Get -- users');
// });

// router.post('/', (req, res) => {
//     let body = req.body;

//     let usuario = new Usuario({
//         codigo: body.codigo,
//         nombre: body.nombre,
//         email: body.email,
//         fechaNacimiento: body.fechaNacimiento,
//         password: bcrypt.hashSync(body.password, 10)
//     });

//     usuario.save()
//         .then(usuarioDB => {
//             res.json({
//                 ok: true,
//                 usuario: usuarioDB
//             })
//         })
//         .catch(err => {
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         });

//     console.log('POST--Users');


// });


module.exports = router;