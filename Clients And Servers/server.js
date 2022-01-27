// get the Http module
const Http = require('http');

// create our server
const server = Http.createServer((req , res) => {
    console.log("A request sent");
});

// make the server listening 
server.listen(3000 , 'localhost' , () => {
    console.log('Server now is listening to the port 3000');
})

