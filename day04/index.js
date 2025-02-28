const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/apple.txt`


// create
// fs.writeFileSync(filePath, 'This is a single text file')

// read
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// })

// update
// fs.appendFile(filePath, 'and file name is apple.txt', (err) => {
//     if (!err) console.log(" file is updated");
// })

// rename
//     fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//         if (!err) console.log(" file name is updated");
// })

// delete
// fs.unlinkSync(`${dirPath}/fruit.txt`)