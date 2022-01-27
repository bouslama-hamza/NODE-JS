// Streams : start using the data before loading the whole file

const fs = require('fs');

// Reading streams
const readStream = fs.createReadStream('./largefile.txt' , {encoding : 'utf8'});

readStream.on('data' , (chunk) => {
    console.log('----- New Data -------');
    console.log(chunk);
})

// Writing streams
const writeStream = fs.createWriteStream('./largefile2.txt');

writeStream.write('\n------ New Data ------\n');
writeStream.write('Some how this is really work');

// Use Piping : writing from a readstream into a writestream directly
readStream.pipe(writeStream);

