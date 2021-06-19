const mongoose = require('mongoose');
require('colors');
const dbConnection = async() => {

    try {
        
        await mongoose.connect(process.env.MONGO_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });

        console.log('\nBase de datos en linea...'.yellow);

    } catch (error) {
        console.log(error);
        throw new Error('Error al iniicializar la base de datos');
    }
}


module.exports = {
    dbConnection
}