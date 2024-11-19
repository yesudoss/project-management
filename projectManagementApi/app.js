require('dotenv').config()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const cors = require('cors');
const bloodGroupRoutes = require("./routes/Ancillary/BloodGroupRoute")

//Database Connection
const db = require('./config/Database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const app = express();

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors("*"));

//routes
app.use('/api', bloodGroupRoutes);

const PORT = process.env.PORT || 6969;


db.sync().then(() => {
    app.listen(PORT, console.log(`Server started on port ${PORT}`));
}).catch(err => console.log("Error: " + err));
