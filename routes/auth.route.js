/*==========IMPORTS==========*/
const {Router} = require('express');
const { check } = require('express-validator');
const { login } = require('../controllers/auth.controller');
const { validarCampos } = require('../middleweares/validar-campos');

const router = Router();


/* -------------------------------------------------------------------------- */
/*                                    LOGIN                                   */
/* -------------------------------------------------------------------------- */
router.post('/', [
    check('correo', 'Ingrese un correo valido').isEmail(),
    check('password', 'La contraseña es obligatoria').notEmpty(),
    validarCampos
],
login);
module.exports =  router ;
