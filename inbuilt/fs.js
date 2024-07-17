let fs = require('fs')

/* fs.writeFile('myFile.txt','My Code Node js App',function(){
    console.log('File Created')
}) */


/* fs.appendFile('myCode.txt','Code for Fs \n',function(){
    console.log('file Appended')
}) */


/* fs.readFile('db.json','utf-8',function(err,data){
    if(err) throw err;
    console.log(data)
}) */


/* fs.writeFile('myFile.txt','My Code Node js App',function(){
    console.log('File Created')
    fs.readFile('myFile.txt','utf-8',function(err,data){
        if(err) throw err;
        console.log(data)
    })
}) */

/* let data = fs.readFileSync('db.json',{encoding:'utf-8',flag:'r'})
console.log(">>>",data)

let data1 = fs.readFileSync('myFile.txt',{encoding:'utf-8',flag:'r'})
console.log(">>>",data1) */


/* fs.rename('mtText.txt','myText.txt',function(err){
    if(err) throw err;
    console.log("File Renamed")
}) */


fs.unlink('myText.txt',function(err){
    if(err) throw err;
    console.log("file deleted")
})