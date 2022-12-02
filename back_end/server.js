const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');
require('dotenv').config()
const router = require('./Routes/bookRouter')
//*************Global Variables */
global.appRoot = __dirname;
const port =process.env.node_port;

//***************APP */
const app = express();
app.set("view engine", "ejs");
app.set("views", "./views"); 
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
app.use(cors({origin: '*',methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD','DELETE'],credentials: true}));
//===========Endpoints============
app.use('/', router);
//===========EndEndpoints===============================================

//********************************************************* */
app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})

//********************************************* */
