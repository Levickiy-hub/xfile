const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require("fs");



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
        res.send({path: prefix+'_'+file.name});
    });
}catch (e) {
        return res.status(500).send(e);
    }});

router.get('/:fileName',async (req, res) => {
    try{
        const {fileName} = req.params;
        const uploadsPath = path.join(__dirname, '..', 'uploads', fileName);
        if (fs.existsSync(uploadsPath)) {
            res.download(uploadsPath, fileName, (err) => {
                if (err) {
                    console.error('Ошибка при отправке файла:', err);
                    res.status(500).send('Ошибка при отправке файла');
                }
            });
        } else {
            res.status(404).send('Файл не найден');
        }
    }catch (e) {
        return res.status(500).send(e);
    }});

module.exports = router;