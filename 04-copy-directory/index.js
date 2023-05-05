const fs = require('fs');
const path = require('path')
const files = path.join(__dirname, 'files');
const copy = path.join(__dirname, 'files-copy');


fs.rm(copy, {recursive: true}, () => {
    fs.mkdir(copy, {recursive: true}, (err) => {
    if (err){
        throw err
    }


fs.readdir(files, (err, file) => {
    if (err){
        throw err
    }
    file.forEach((element) => {
        const name = path.join(files, element);
        const nameCopy = path.join(copy, element);
        fs.copyFile(name, nameCopy, (err) => {
            if (err) {
                throw err
            }
        })
    })
})
})
})