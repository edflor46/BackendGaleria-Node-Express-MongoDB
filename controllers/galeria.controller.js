/* -------------------------------------------------------------------------- */
/*                                 CONTROLLERS                                */
/* -------------------------------------------------------------------------- */

/* ----------------------------- GET ALL IMAGES ----------------------------- */
const getAllImages = (req, res) => {
    res.json({msg: 'GET ALL'})
    console.log('get all');
}

/* -------------------------------- GET IMAGE ------------------------------- */

const getImage = (req, res) => {
    res.json({msg: 'GET IMAGE'})
    console.log('get image');
}

/* ------------------------------- UPLOAD IMG ------------------------------- */
const uploadImage = (req, res) => {
    res.json({msg: 'Upload image'})
    console.log('Upload image');
}

/* ------------------------------- DELETE IMG ------------------------------- */
const deleteImg = (req, res) => {
    res.json({msg: 'Delete Image'})
    console.log('Delete Image');
}


module.exports = {
    getAllImages,
    getImage,
    uploadImage,
    deleteImg
}
