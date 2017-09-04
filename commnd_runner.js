const cp = require('child_process'); 

process.stdin.resume(); 
process.stdin.setEncoding('utf8');



process.stdin.on('data', (data) => {
    data = data.trim(); 
    if (data === 'q' || data === 'quit') {
        console.log('Goodbai!! ;)')
        process.exit(); 
    } 
    else {
        let args = data.split(" ");
        let command = cp.spawn(args[0], [args[1]]); 

        command.stdout.on('data', (data) => {
            console.log (`STDOUT: ${data}`); 
        }); 

        command.stderr.on('data',(data) => {
            console.log(`Error: ${data}`); 

        });
        
        command.on('close',(code) => {
            console.log(`Exit: ${code}`); 

        }); 
        
    }

}); 
