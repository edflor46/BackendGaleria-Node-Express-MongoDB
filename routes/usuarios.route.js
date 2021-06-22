/*==========IMPORTS==========*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/usuarios.controller');
const { rolValido, emailExist } = require('../helpers/db-validator');
const { validarCampos } = require('../middleweares/validar-campos');

const router = Router();

/* -------------------------------------------------------------------------- */
/*                                GET ALL USERS                               */
/* -------------------------------------------------------------------------- */
router.get('/', getAllUsers);

/* -------------------------------------------------------------------------- */
/*                                  GET USER                                  */
/* -------------------------------------------------------------------------- */
router.get('/:id', getUser);

/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
router.post('/create-user', [
    check('nombre', 'El nombre es obligatoria').not().isEmpty(),
    check('correo', 'Ingrese un correo valido').isEmail(),
    check('password', 'La contraseña debe tener al menos 6 caracteres').isLength({min:6}),
    check('correo').custom(emailExist),
    check('rol').custom(rolValido),
    validarCampos
],createUser);

/* -------------------------------------------------------------------------- */
/*                                 UPDATE USER                                */
/* -------------------------------------------------------------------------- */
router.put('/update-user/:id', updateUser);

/* -------------------------------------------------------------------------- */
/*                                 DELETE USER                                */
/* -------------------------------------------------------------------------- */
router.put('/delete-user/:id', deleteUser);


module.exports = router;
