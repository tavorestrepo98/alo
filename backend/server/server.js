require('dotenv').config()

const app = require('./app');
require('./database');
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`escuchando puerto ${port}`);
});