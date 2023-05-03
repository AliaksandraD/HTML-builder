const fs = require('fs');
const path = require('node:path')
const stream = fs.createReadStream(path.join(__dirname, 'text.txt'))
// const stream = fs.createReadStream("01-read-file/text.txt") // - Рабочий Вариант
stream.on("data", (data) => console.log(data.toString()))