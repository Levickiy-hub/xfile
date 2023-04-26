const express = require('express');
const router = express.Router();
const path = require('path');



router.post('/',async (req, res) => {
    try{
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('Не выбран файл для загрузки');
    }

    const file = req.files.file;
    const date = new Date();
    const  prefix =date.getHours().toString()+date.getMinutes().toString()+date.getDate().toString()+date.getMonth().toString()+date.getFullYear().toString()
    // Сохраняем загруженный файл
    await file.mv(path.join(__dirname, '..', 'uploads', prefix+'_'+file.name), (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }
        res.send({path:path.join(__dirname, '..', 'uploads', prefix+'_'+file.name)});
    });
}catch (e) {
        return res.status(500).send(e);
    }});

module.exports = router;