const Usuario = require('../models/usuarios.model');

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
    
    
    /*==========SAVE DATABASE=========*/
    // await user.save();
    console.log(user);
    res.json({ msg: 'Create user' });
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