const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(bodyParser.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true}
    );

    const connection = mongoose.connection;
    connection.once('open', ()=>{
        console.log("MongoDb database connection eastablished successfully");
    })

/*server.get("/demo",function(req,res){
    console.log("hello from demo api");
    res.send(req.query);
})*/

const exerciseRouter = require('./routes/exercises.js');
const userRouter = require('./routes/users.js');

server.use('/exercises',exerciseRouter);
server.use('/users',userRouter);

server.listen(8080,function(){
    console.log(`server started! : ${port}`);
})
