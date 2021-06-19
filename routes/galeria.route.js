/* -------------------------------------------------------------------------- */
/*                                   ROUTES                                   */
/* -------------------------------------------------------------------------- */

/*==========ROUTER==========*/
const { Router } = require('express');
const router = Router();

/*==========Controller==========*/
const { getAllImages, uploadImage, deleteImg, getImage } = require('../controllers/galeria.controller');

/* ----------------------------- GET ALL IMAGES ----------------------------- */
router.get('/', getAllImages);

/* -------------------------------- GET IMAGE ------------------------------- */

router.get('/:id', getImage);
/* ------------------------------ UPLOAD IMAGES ----------------------------- */
router.post('/upload', uploadImage);

/* ------------------------------ DELETE IMAGE ------------------------------ */
router.delete('/:id', deleteImg);




module.exports = router;