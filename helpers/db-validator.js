const Rol = require('../models/roles.model');

/* -------------------------------------------------------------------------- */
/*                                 EXISTE ROL                                 */
/* -------------------------------------------------------------------------- */
const rolValido = async (rol) => {
    /*==========Buscar rol en la base de datos==========*/
    const rolExist = await Rol.findOne({ rol });
    
    /*==========Si no hay resultado envia un error==========*/
    if (!rolExist) {
        throw new Error(`El rol ${rol}, no es un rol valido`);
    }
}

module.exports = {
    rolValido
}