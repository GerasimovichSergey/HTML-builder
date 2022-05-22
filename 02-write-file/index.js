const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'myText.txt');
const stream = fs.createWriteStream(filePath);

stdout.write('Hello! Input some words\n');
stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        process.exit();
    }
    stream.write(data);
});

process.on('SIGINT', () => process.exit());
process.on('exit', () => stdout.write('Program closes! Good Luck!'));