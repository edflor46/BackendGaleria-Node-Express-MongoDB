const jwt = require('jsonwebtoken');
require('colors');

const generarJWT = (uid) => {

    /*==========RETURN PROMUSE==========*/
    return new Promise((resolve, reject) => {
        
        /*==========SIGN TOKEN==========*/
        const payload = { uid };
        jwt.sign(payload, process.env.KEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se puso generar el Json Web Token'.red)

            } else {
                resolve(token)
            }
        });
    });
}
module.exports = {
    generarJWT
}