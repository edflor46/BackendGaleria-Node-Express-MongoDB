const Usuario = require('../models/usuarios.model');
const bcrypt = require('bcrypt');


/* -------------------------------------------------------------------------- */
/*                                GET ALL USERS                               */
/* -------------------------------------------------------------------------- */
const getAllUsers = async (req, res) => {
    /*==========REQ QUERY==========*/
    const { limit = 2, page = 1 } = req.query;

    /*========CUSTOMIZE LABELS========*/
    const labels = {
        totalDocs: 'total_users',
        docs: 'users',
        limit: 'perPage',
        page: 'currentPage',
        nextPage: 'next',
        prevPage: 'prev',
        totalPages: 'pageCount',
        pagingCounter: 'slNo',
        meta: 'paginate',
    }
    /*========OPTIONS========*/
    const options = {
        page,
        limit,
        sort: { _id: -1 },
        customLabels: labels
    }

    const users = await Usuario.paginate({}, options);
    res.json(users);
}

/* -------------------------------------------------------------------------- */
/*                                  GET USER                                  */
/* -------------------------------------------------------------------------- */
const getUser = async (req, res) => {
    /*========REQ PARAMS========*/
    const { id } = req.params;

    /*========SEARCH FOR ID========*/
    const user = await Usuario.findById(id);

    /*========RES========*/
    res.json(user);
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
const deleteUser = async (req, res) => {
    /*==========ID PARAMS==========*/
    const { id } = req.params;

    /*==========FIND AND DELETE==========*/
    const user = await Usuario.findByIdAndUpdate(id, { estado: false });
    res.json(user);
}

module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}