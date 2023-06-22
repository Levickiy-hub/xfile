const express = require('express');
const router = express.Router();
const controller =require('../controllers/usersController')

router.post('/', async (req, res) => {
    await controller.postUser(req,res)
});

router.get('/', async (req, res) => {
    if(req.query.number)
        await controller.getUser(req,res)
    else
        await controller.getAllUsers(req,res)
});


router.get('/:id/templates', async (req, res) => {
    await controller.getTemplates(req,res)
});
router.post('/:id/templates', async (req, res) => {
    await controller.createTemplates(req,res)
});
module.exports = router;