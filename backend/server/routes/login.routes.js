const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.json({
    //     ok: true
    // });
    res.render('perfil.hbs');
});

router.post('/principal', (req, res) => {
    console.log(req.body);
    res.render('perfil.hbs');
});


module.exports = router;