const express = require('express');
const router = express.Router();
const controller =require('../controllers/organizationController')

router.post('/', async (req, res) => {
    await controller.postOrganization(req,res)
});

router.get('/', async (req, res) => {
    await controller.getAllOrganization(req,res)
});

router.get('/:id', async (req, res) => {
    await controller.getOrganizationById(req,res)
});
module.exports = router;