const express = require('express');
const router = express.Router();
const controller =require('../controllers/indexController')

router.get('/', async (req, res) => {
    await controller.getData(req,res)
});

module.exports = router;