const tasks = [];

const getAllTasks = async () => {
    return tasks;
};

const saveTask = async (task) => {
    tasks.push(task);
    return tasks;
}

module.exports = {
    list: getAllTasks,
    save: saveTask
}