const express = require('express')
const bodyParser = require("body-parser");
var cors = require('cors');

const app = express()
// Mit app.use sind alle Middlewares verbunden.
app.use(bodyParser.json());
app.use(cors());

/* require("./routes/dataRoutes")(app); */
require("./Services/CloudStorage")(app);

// Get the Port from Production Server (Heroku) or if not declared use 5000.
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("200: Server Succesfully Started.");
