const express = require('express');
const bodyParser = require("body-parser");
const cors = ('cors');


const app = express();

app.listen(3001,()=>{
    console.log('listening to port 3001')
})