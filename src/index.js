const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');
const { rawListeners } = require('./models/user');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users',(req, res, next) => {
    const user = new User(req.body);

    user.save().then(() => {
        res.send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.post('/tasks', (req, res, next) =>{
    const task = new Task(req.body);

    task.save().then(() => {
        res.status(201).send(task);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.listen(port);