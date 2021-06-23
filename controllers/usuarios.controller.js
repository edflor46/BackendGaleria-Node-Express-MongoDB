const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcrypt');

/* -------------------------------------------------------------------------- */
/*                                GET ALL USERS                               */
/* -------------------------------------------------------------------------- */
const getAllUsers = (req, res) => {
    console.log('Get ALL USERS');
    res.json({ msg: 'GET ALL USERS' });
}

/* -------------------------------------------------------------------------- */
/*                                  GET USER                                  */
/* -------------------------------------------------------------------------- */
const getUser = (req, res) => {
    console.log('Get  USER');
    res.json({ msg: 'GET  USER' });
}

/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
const createUser = async (req, res) => {

    /*==========DATA USER=========*/
    const { nombre, correo, password, rol } = req.body;

    /*==========USER MODEL=========*/
    const user = new Usuario({ nombre, correo, password, rol });

    /*==========BCRYPT PASSWORD=========*/
    const crypt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, crypt);

    /*==========SAVE DATABASE=========*/
    await user.save();

    /*==========RESPONSE=========*/
    res.json(user);
}

/* -------------------------------------------------------------------------- */
/*                                 UPDATE USER                                */
/* -------------------------------------------------------------------------- */
const updateUser = async (req, res) => {
    /*==========ID USER==========*/
    const { id } = req.params;
    /*=========DESESTRUCTURING OBJECT===========*/
    const { _id, password, google, correo, ...data } = req.body;

    /*=========DB VALIDATE=========*/
    if (password) {

        /*=========CRYPT PASSWORD=========*/
        const salt = bcrypt.genSaltSync();
        data.password = bcrypt.hashSync(password, salt);
    }

    /*==========UPDATE USER==========*/
    user = await Usuario.findByIdAndUpdate(id, data);

    /*==========RESPONSE==========*/
    res.json(user);
}

/* -------------------------------------------------------------------------- */
/*                                 DELETE USER                                */
/* -------------------------------------------------------------------------- */
const deleteUser = (req, res) => {
    console.log('Delete user');
    res.json({ msg: 'Delete user' });
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}