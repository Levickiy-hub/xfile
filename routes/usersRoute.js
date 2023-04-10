const express = require('express');
const router = express.Router();
const controller =require('../controllers/usersController')

router.post('/', async (req, res) => {
    await controller.postUser(req,res)
});

router.get('/', async (req, res) => {
    await controller.getAllUsers(req,res)
});

router.get('/:id', async (req, res) => {
    await controller.getAllUsers(req,res)
});
module.exports = router;