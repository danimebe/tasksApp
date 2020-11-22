const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;



app.get('/', (req, res) => {
    res.send({
        message: "Aplication of todo list"
    })
});

app.use(express.json());
app.use(require('./components/routes'));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});