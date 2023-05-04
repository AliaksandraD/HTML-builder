const fs = require('fs');
const path = require('node:path')
const readline = require('readline')
const stream = fs.createWriteStream(path.join(__dirname, 'text.txt'))

const text = readline.createInterface(
    { input: process.stdin,
      output: process.stdout}
)
text.write('Проверяющий, добрый день!\n');
text.on('line', (data) => {
    if (data === 'exit'){
        text.close()
    } else {
        stream.write(`${data}\n`);
    }
}).on('close', () => {
    text.write('Хорошего Вам дня!')
    process.exit()
})
