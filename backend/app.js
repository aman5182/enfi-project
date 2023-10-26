var settings = require("./config/settings");
var express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
var sqlDb = require("mssql");
var cors = require('cors');
var {executeSql} = require('./config/db');



const app = express();
// Allow requests from http://localhost:3000
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(bodyParser.json());

// Define routes
app.use('/user-api', userRoutes);
app.use('/admin-api', adminRoutes);


executeSql()
var server = app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});
