/* -------------------------------------------------------------------------- */
/*                              SERVIDOR EXPRESS                              */
/* -------------------------------------------------------------------------- */

/*=========VARIABLES==========*/
require('colors');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;


/* ------------------------------ NIDDLEWEARES ------------------------------ */

/*=========CORS==========*/
app.use(cors());

/*=========PARSE JSON==========*/
app.use(express.json());

/*=========DIRECTORIO==========*/
app.use(express.static('public'));


/* ------------------------------- SERVIDOR ON ------------------------------ */
app.listen(port, () => {
    console.log('\n\nServidor corriendo el en puerto'.magenta, port.cyan);
});
