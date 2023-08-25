const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db/dbController')
const router = express.Router();

const jwtSecret = 'your-secret-key'; // Замените на свой секретный ключ


router.post('/',  async (req, res) => {
    try {
        const { type, personalNumber } = req.body;

        const user = await db.getUserByBankId(personalNumber);
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, jwtSecret, { expiresIn: '1h' });
        res.cookie('jwtToken', token, {
            httpOnly: true,
            secure: true, // Для HTTPS
            maxAge: 3600000, // Время жизни куки в миллисекундах (1 час)
            sameSite: 'strict', // Рекомендуется для безопасности
            path: '/',
        });

        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

module.exports = router;