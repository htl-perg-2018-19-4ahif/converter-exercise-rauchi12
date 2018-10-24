const convert = require('convert-units');
try {
    if (process.argv.length == 6 && process.argv[4] == 'to' && !isNaN(process.argv[2])) {
        console.log(process.argv[2] + " " + process.argv[3] + " are " + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]) + " " + process.argv[5]);
    } else
        console.log('Invalid parameters');
        
} catch (e) {
    console.log('Invalid parameters');
}