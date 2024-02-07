const express = require('express');
const mongoose = require('mongoose');
const path = require("path");

const CategoryApi = require('./backend/routers/category-api');
const EventApi = require('./backend/routers/event-api');
const Stats = require('./backend/controllers/stats');

const PORT_NUMBER = 8080;

const app = express();

app.listen(PORT_NUMBER, function() {
    console.log(`listening on port ${PORT_NUMBER}`);
});

app.use(express.static("node_modules/bootstrap/dist/css"));
app.use(express.static(path.join(__dirname, "./backend/images")));
app.use(express.static(path.join(__dirname, "./dist/fit2095")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/assignment-3');
}
connect()
.then(() => console.log('connected'))
.catch(err => console.log(err));

// Stats API endpoint
app.get('/api/v1/stats', Stats.getAll);

// Category API endpoints
app.post('/api/v1/category/32528558/add', CategoryApi.createOne);
app.get('/api/v1/category/32528558/view-all', CategoryApi.getAll);
app.put('/api/v1/category/32528558/edit', CategoryApi.updateOne);
app.delete('/api/v1/category/32528558/delete', CategoryApi.deleteOne);
app.get('/api/v1/category/32528558/view/:categoryId', CategoryApi.getOne);

// Event API endpoints
app.post('/api/v1/event/michael/add', EventApi.createOne);
app.get('/api/v1/event/michael/view-all', EventApi.getAll);
app.put('/api/v1/event/michael/edit', EventApi.updateOne);
app.delete('/api/v1/event/michael/delete', EventApi.deleteOne);
app.get('/api/v1/event/michael/view/:eventId', EventApi.getOne);