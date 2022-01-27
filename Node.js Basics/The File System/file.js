// import the needed module
const fs = require('fs');

// Reading files
fs.readFile('./blog.txt' , (err , data) =>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data.toString());
    }
});

// Write On Files
fs.writeFile('./blog.txt' , 'new hello world' , () => {
    console.log('its working for some reason!');
})

// Create and Delete folders
if(!fs.existsSync('./testFolder')){
    fs.mkdir('./testFolder' ,(err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log('Folder Has Been Created');
        }
    });
}
else{
    fs.rmdir('./testFolder' , (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder Has Been Deleted');
    });
}

// Deleting Files
if(fs.existsSync('./deleteme.txt')){
    fs.unlink('./deleteme.txt' , (err) =>{
        if(err){
            console.log(err);
        }
        console.log('File Has Been Deleted');
    })
}