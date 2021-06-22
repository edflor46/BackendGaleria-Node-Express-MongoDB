const Role = require('../models/roles.model');
const Usuario = require('../models/usuarios.model');

/* -------------------------------------------------------------------------- */
/*                                 EXISTE ROL                                 */
/* -------------------------------------------------------------------------- */
const rolValido = async (rol) => {
    /*==========Buscar rol en la base de datos==========*/
    const rolExist = await Role.findOne({ rol });
    
    /*==========Si no hay resultado envia un error==========*/
    if (!rolExist) {
        throw new Error(`El rol ${rol}, no es un rol valido`);
    }
}

/* -------------------------------------------------------------------------- */
/*                               EMAIL DUPLICADO                              */
/* -------------------------------------------------------------------------- */
const emailExist = async(correo) => {
    /*==========Buscar mail en la base de datos==========*/
    const emailDB = await Usuario.findOne({correo});
    
    /*==========Si hay resultado lanzar error==========*/
    if (emailDB) {
        throw new Error(`El correo ${correo} ya esta registrado, intenta otro`);
    }
}

module.exports = {
    rolValido,
    emailExist
}