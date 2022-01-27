// get the file system file
const fs = require('fs');

// get the Http module
const Http = require('http');

// create our server
const server = Http.createServer((req , res) => {
    console.log(req.url , req.method);

    // set the header content
    res.setHeader('Content-type' , 'text/html');

    // figure out which path to use
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;           
            break;
        case '/about':
            path += 'about.html'
            res.statusCode = 200;
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    
    // respond an html page
    fs.readFile(path , (error , data) => {
        if(error){
            console.log(error);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
});

// make the server listening 
server.listen(3000 , 'localhost' , () => {
    console.log('Server now is listening to the port 3000');
})

