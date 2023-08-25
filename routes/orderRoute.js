const express = require('express');
const router = express.Router();
const controller =require('../controllers/orderController')
const passport = require('passport'); // Импортируйте модуль passport


// Подключите стратегию JWT аутентификации
router.use(passport.authenticate('jwt', { session: false }));


router.post('/', async (req, res) => {
    await controller.postOrder(req,res)
});

router.get('/', async (req, res) => {
    await controller.getOrders(req,res)
});

router.get('/:id', async (req, res) => {
    await controller.getOrderById(req,res)
});
module.exports = router;