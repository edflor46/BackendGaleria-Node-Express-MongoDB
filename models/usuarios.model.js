/* -------------------------------------------------------------------------- */
/*                              MODELO DB USUARIO                             */
/* -------------------------------------------------------------------------- */
const mongoosePaginate = require('mongoose-paginate-v2');

const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({

    nombre: {
        type: String,
        require: [true, 'El nombre es obligatorio']
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
        default: 'USUARIO',
        emun: ['USUARIO', 'MODERADOR']
    },

    img_perfil: {
        type: String,
    },

    estado: {
        type: Boolean,
        default: true,
    },

    google: {
        type: Boolean,
        default: false
    },

    fecha: {
        type: Date,
        default: Date.now
    }
});

/*==========PAGINATE==========*/
usuarioSchema.plugin(mongoosePaginate);

/*==========PROCESS DATA==========*/
usuarioSchema.methods.toJSON = function () {
    const { __v, password, _id, ...usuario } = this.toObject();
    usuario.uid = _id;
    return usuario;
}

module.exports = model('Usuario', usuarioSchema);
