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
const getUser= (req, res) => {
    console.log('Get  USER');
    res.json({ msg: 'GET  USER' });
}

/* -------------------------------------------------------------------------- */
/*                                 CREATE USER                                */
/* -------------------------------------------------------------------------- */
const createUser = async(req, res) => {

    /*==========DATA USER=========*/
    const {nombre, correo, password, rol } = req.body;
    
    /*==========USER MODEL=========*/
    const user = new Usuario({nombre, correo, password, rol});
    
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
const updateUser = (req, res) => {
    console.log('Update user');
    res.json({ msg: 'Update user' });
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