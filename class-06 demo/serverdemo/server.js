'use strict';

//to access and use the express package
let express = require('express'); 
//app is an object that responsible to map requests that am getting and send responses.
let app = express();
//configure the dotenv
require('dotenv').config();
//returns me the port number
//usually we deal with the environment variables in upperCase
let PORT = process.env.PORT;
//get request to my server on the home link
app.get('/home' , handleHome)
//the function that will be called when anybody hits th home link
function handleHome(request,response){
    //request & response is objects created by JS.
    //we're using response.send to send data to the browser(client-side)
    response.send('this is the home page');
    //to get back to the client without data, just telling them that the request has arrived successfully
    // response.status(200).send('');
    //to know the properties of the request and response objects
    // console.log(request,response);
}

//listen to the port - always must be at the end
app.listen(PORT , () =>{
    console.log('port is listening on ' , PORT);
    console.log(process.env.PORT);  
});
