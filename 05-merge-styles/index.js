const fs = require('fs');
const path = require('path')

const begin = path.join(__dirname, 'styles');
const end = path.join(__dirname, 'project-dist', 'bundle.css');

fs.writeFile(end, '', (err) =>{
    if (err){ throw err}
})

fs.readdir(begin, (err, fileCss) => {
    fileCss.forEach(element => {
        fs.stat(path.join(begin, element), (err, stats) =>{
            if (err) {
                throw err
            }
            if (stats.isFile() && path.extname(element) === '.css'){
                fs.readFile(path.join(begin, element), 'utf-8', (err, data) => {
                    fs.appendFile(end, data, err =>{
                        if (err) {
                            throw err
                        }
                        
                    })
                })
            }
        })
    })
})