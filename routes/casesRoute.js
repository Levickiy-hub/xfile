const express = require('express');
const router = express.Router();
const controller =require('../controllers/casesController')

router.post('/', async (req, res) => {
    await controller.postCases(req,res)
});

// router.get('/', async (req, res) => {
//     await controller.getOrders(req,res)
// });
//
// router.get('/:id', async (req, res) => {
//     await controller.getOrderById(req,res)
// });
module.exports = router;