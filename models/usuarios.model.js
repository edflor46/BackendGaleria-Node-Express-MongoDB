/* -------------------------------------------------------------------------- */
/*                              MODELO DB USUARIO                             */
/* -------------------------------------------------------------------------- */

const {Schema, model} = require('mongoose');

const usaurioSchema = Schema({

    nombre: {
        type: String,
        require:[true, 'El nombre es obligatorio']
    },

    correo: {
        type: String,
        require: [true, 'El correo es obligatorio']
    },

    password: {
        type: String,
        require: [true, 'La contraseña es obligatoria']
    },
    
    rol: {
        type: String,
        require: true,
        default: 'USER_ROLE',
        emun: ['ADMIN_ROLE', 'USER_ROLE']
    },

    img_perfil: {
        type: String,
    },

    google: {
        type: Boolean,
        default: false
    }
});

usaurioSchema.methods.toJSON = function(){
    const {__v, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model('Usuario', usaurioSchema);
