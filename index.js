const express =require('express');
const app = express();
const port = 8000;
const bodyParser = require("body-parser");

// connect to db
const db=require('./config/mongoose');





//set up the view engine
app.set('view engine','ejs');
app.set('views', './views')
app.use(express.static('assets'));

app.use(express.urlencoded());
app.use(bodyParser.json());


// use express router
app.use("/", require("./routes/index"));

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port : ${port}`);
});