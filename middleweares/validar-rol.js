/* -------------------------------------------------------------------------- */
/*                             ROL ADMIN/MODERADOR                            */
/* -------------------------------------------------------------------------- */
const rolAdmin = (req, res, next) => {

    if (!req.user) {
        return res.status(500),json({
            error:'Error, no puedes verificar sin un token de accesso'
        });
    }

    const {rol, nombre} = req.user;

    if (rol !== 'ADMINISTRADOR') {
        return res.status(400).json({
            error: `El usuario ${nombre} no cuenta con los privilegios para realizar esta accion`
        });
    }
    next();
}

/* -------------------------------------------------------------------------- */
/*                            VALID ROL PRIVILEGES                            */
/* -------------------------------------------------------------------------- */
const rolPrivilege = (...roles) => {

    return (req, res, next) => {
        if (!req.user) {
            return res.status(500).json({
                error: 'Error, no se puede verificar el rol sin un token de accesso'
            });
        }

        if (!roles.includes(req.user.rol)) {
            return res.status(400).json({
                error: `La peticion requiere uno de estos roles: ${roles}`
            });
        }

        next();
    }

}



module.exports = {
    rolAdmin,
    rolPrivilege
}