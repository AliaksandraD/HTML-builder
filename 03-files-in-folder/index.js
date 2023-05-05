const fs = require('fs');
const path = require('path')
const folder = path.join(__dirname, 'secret-folder');

fs.readdir(folder, (err, file) => {
    if (err){
       return console.log(err);
    }
    console.log("\nCurrent directory:");
    file.forEach((element) => {
            fs.stat(path.join(folder, element), (err, stats) =>{
                 if (stats.isDirectory() != true){
                    console.log('Name: '+ element.split('.')[0] 
                    + '  -  Exctension: ' + path.extname(element).split('.')[1] 
                    + '  -  Size: '+ stats.size/1000 + 'kb');
                }
            })
    })
})
