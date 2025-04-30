const express = require('express');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
const routes = require('./routes/clients/index.route.js');

app.use(express.static('public'));
routes(app);
app.set("views", "./views");
app.set("view engine", "pug");


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});