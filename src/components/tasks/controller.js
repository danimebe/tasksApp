const {
    list,
    save
} = require('./persistence');

const getAllTasks = async () => {
    return await list();
}

const saveTask = async (message, time) => {
    if (!message || !time) {
        throw new Error('Missing message or time');
    }

    const task = {
        message,
        time
    }

    return await save(task);
}

module.exports = {
    getAllTasks,
    saveTask
}