const express = require('express');
const router = express.Router();
const controller =require('../controllers/organizationController')

router.post('/', async (req, res) => {
    await controller.postOrganization(req,res)
});

router.get('/', async (req, res) => {
    if(req.query.type)
        await controller.getAllOrganizationByType(req,res)
        else
        await controller.getAllOrganization(req,res)
});

router.get('/:id', async (req, res) => {
    await controller.getOrganizationById(req,res)
});

router.get('/:id/orders', async (req, res) => {
    await controller.getOrdersByOrganization(req,res)
});
module.exports = router;