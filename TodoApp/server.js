const express= require("express");
const app = express();
const db = require('./config/mongoose');
const bodyParser = require('body-parser');

//middlewares
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('assets'));


app.use('/',require('./routes/index'));

app.listen(4000,  function(){
    console.log("server started on port 3000");
});
