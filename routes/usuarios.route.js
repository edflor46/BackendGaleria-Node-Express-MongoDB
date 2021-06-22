/*==========IMPORTS==========*/
const {Router} = require('express');
const { check } = require('express-validator');
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/usuarios.controller');
const { rolValido, emailExist, idValid } = require('../helpers/db-validator');
const { validarCampos } = require('../middleweares/validar-campos');
const { rolModeradorAdmin, rolPrivilege } = require('../middleweares/validar-rol');
const { validJWT } = require('../middleweares/validarJWT');

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
router.put('/update-user/:id', [
    validJWT,
    rolPrivilege('ADMINISTRADOR', 'MODERADOR'),
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(idValid),
    validarCampos
],updateUser);

/* -------------------------------------------------------------------------- */
/*                                 DELETE USER                                */
/* -------------------------------------------------------------------------- */
router.put('/delete-user/:id', deleteUser);


module.exports = router;
