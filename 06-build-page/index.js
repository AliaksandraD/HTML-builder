const fs = require('fs');
const path = require('node:path')
const readline = require('readline')
const folderProject = path.join(__dirname, 'project-dist');




    fs.mkdir(folderProject,{recursive: true}, (err) => {
        if (err) {throw err}
    })

    fs.mkdir(path.join(folderProject, "assets"), {recursive: true}, (err) => {
        if (err) {throw err}
    })


const begin = path.join(__dirname, 'styles');
const end = path.join(__dirname, 'project-dist', 'style.css');

function mergeStyles () {    
fs.writeFile(end, '', (err) =>{
    if (err){ throw err}
})

fs.readdir(begin, (err, fileCss) => {
    // if (err) {throw err}
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
}
mergeStyles ()