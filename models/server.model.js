/*==========IMPORTS==========*/
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../db/config');
require('colors');

class Server {

    constructor() {
        /*==========SERVER EXPRESS==========*/
        this.app = express();

        /*==========PORT==========*/
        this.port = process.env.PORT;

        /*==========PATHS==========*/
        this.paths = {
            usuarios: '/usuarios/',
            login: '/login'
        }

        /*==========CONECTARDB==========*/
        this.conectarDB();

        /*==========MIDDLEWEARES==========*/
        this.middleweares();

        /*==========ROUTES==========*/
        this.routes();

    }

    /* -------------------------------------------------------------------------- */
    /*                                   MONGODB                                  */
    /* -------------------------------------------------------------------------- */
    async conectarDB() {
        await dbConnection();
    }
    /* -------------------------------------------------------------------------- */
    /*                                MIDDLEWEARES                                */
    /* -------------------------------------------------------------------------- */
    middleweares() {
        /*=========CORS==========*/
        this.app.use(cors());
        /*=========PARSE JSON==========*/
        this.app.use(express.json());
        /*=========DIRECTORIO==========*/
        this.app.use(express.static('public'));
    }

    /* -------------------------------------------------------------------------- */
    /*                                   ROUTES                                   */
    /* -------------------------------------------------------------------------- */
    routes() {
        this.app.use(this.paths.usuarios , require('../routes/usuarios.route'));
        this.app.use(this.paths.login    , require('../routes/auth.route'));
    }
    /* -------------------------------------------------------------------------- */
    /*                                   LISTEN                                   */
    /* -------------------------------------------------------------------------- */
    listen() {
        this.app.listen(this.port, () => {
            console.log('\n\nServidor corriendo el en puerto'.magenta, this.port.cyan);
        });
    }
}

module.exports = Server;