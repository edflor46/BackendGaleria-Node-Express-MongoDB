/*==========IMPORTS==========*/
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuarios.model');

/* -------------------------------------------------------------------------- */
/*                                  VALID JWT                                 */
/* -------------------------------------------------------------------------- */

const validJWT = async(req, res, next) => {

    /*===========VALID TOKEN HEADER REQ=========*/
    const token = req.header('x-token');
    if (!token) {
        res.status(400).json({
            error: 'No hay token valido'
        });
    }
    
    try {
        
        /*===========VERIFY JWT=========*/
        const {uid} = jwt.verify(token, process.env.KEY);
        
        
        /*===========FIND USER BY ID=========*/
        const user = await Usuario.findById(uid);
        
        if (!user) {
            return res.status(400).json({
                error: 'Token no valido'
            });
        }
        
        /*===========VERIFY USER ACTIVE=========*/
        if (!user.estado) {
            return res.status(400).json({
                error: 'Token no valido, el usuario ha sido dado de baja'
            });
        }
        
        /*===========REQUEST=========*/
        req.user = user;
        next();
        
        
    } catch (error) {
        /*===========ERROR TOKEN=========*/
        console.log(error);
        res.status(400).json({
            error: 'Token no valido'
        })
    }

}

module.exports = {
    validJWT
}

