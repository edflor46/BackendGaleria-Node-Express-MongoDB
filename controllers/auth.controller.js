const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcrypt');
const { generarJWT } = require('../helpers/generarJWT');

/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */

const login = async (req, res) => {

    /*==========REQ BODY==========*/
    const { correo, password } = req.body;

    try {
        /*==========CORREO EXISTS==========*/
        const user = await Usuario.findOne({ correo });

        if (!user) {
            return res.status(400).json({
                error: 'Usuario o contraseña incorrectos'
            });
        }

        /*==========USER ACTIVE==========*/
        if (!user.estado) {
            return res.status(400).json({
                error: 'El usuario ha sido dado de baja, contacte al administrador'
            });
        }

        /*==========VALID PASSWORD==========*/
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                error: 'Usuario o contraseña incorrectos'
            });
        }

        /*==========GENERATE JWT==========*/
        const token = await generarJWT(user.id);

        /*==========RESPONSE==========*/

        res.status(200).json({
            user,
            token
        })


    } catch (error) {
        /*==========ERROR AUTH==========*/
        console.log(error);
        res.status(500).json({
            msg: 'Error al validar los datos'
        })
    }
}


module.exports = { login };