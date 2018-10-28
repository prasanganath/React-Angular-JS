const express = require('express');
const bodyParser = require('body-parser');
const cors = ('cors');
var Client = require('node-rest-client').Client;

var client = new Client();




const app = express();

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());
app.post('/getLocations' ,(req,res)=>{

    const typedWord = req.body.city;
    client.get("https://maps.googleapis.com/maps/api/place/textsearch/json?query="+typedWord+"&key=AIzaSyBOGgzEUpR82TcAabFHEwQ2fr38jic3B-M ", function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        //console.log(response);
    });
})

app.listen(3001,()=>{
    console.log('listening to port 3001')
})