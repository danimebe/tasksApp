const router = require('express').Router();

router.use('/tasks', require('./tasks/routes'));

module.exports = router;