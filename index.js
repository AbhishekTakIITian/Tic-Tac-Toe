const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/xyz.txt`;
//fs.writeFileSync(filePath, "yoyo");
fs.readFile(filePath,"utf8",(err,item)=>{
    console.log(item);
})
fs.unlinkSync(filePath);