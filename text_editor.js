process.stdin.resume(); 
process.stdin.setEncoding('utf8');

const fs = require('fs')

const pry = require('pryjs')

let dataToWrite = ''

process.stdin.on('data', (data) => {
    if (data.trim() === '\\q') {
        fs.writeFile('./data/input.txt',dataToWrite, (err)=> {
            console.log('')
            if (err) throw err; 
            console.log('File Saved')
            console.log('Exit')
            process.exit(); 
            
        }); 
    } else {
        console.log(data);
        dataToWrite += data; 
    } 
}); 


