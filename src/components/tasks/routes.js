const express = require('express');
const { GeneralResponse } = require('../response');
const { getAllTasks, saveTask } = require('./controller');

const router = express.Router();


router.get('/', async (req, res) => {
    res.send(await getAllTasks());
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    res.send({ id });
})

router.post('/', async (req, res) => {
    try {
        const { message, time } = req.body;


        const tasks = await saveTask(message, time);

        GeneralResponse(req, res, 200, tasks, 'Task saved successfully', true, false);

    } catch (error) {
        GeneralResponse(req, res, 500, null, error.message, false, {
            error: true,
            message: error.message,
            code: 700
        });
    }
})

module.exports = router;