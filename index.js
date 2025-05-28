const express = require('express');

require('dotenv').config();

const database = require('./config/database.js');
database.connect();
const app = express();
const port = process.env.PORT;
const routes = require('./routes/clients/index.route.js');
const adminRoutes = require('./routes/admin/index.route.js');

app.use(express.static(`${__dirname}/public`));
routes(app);
adminRoutes(app);
app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});