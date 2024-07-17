import express from 'express';
import formidable from 'formidable';
let app = express();
let port = 8877;
import fs from 'fs';

app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs');

app.get('/',(req,res) => {
    res.render('index')
})

app.post('/upload',async(req,res) => {
    let form = formidable({});

    form.parse(req,(err,fields,files) => {
        if(err) throw err;
        // console.log(files)
        // res.json({fields,files});
        let oldpath = files.uimage[0].filepath;
        let newpath = `${__dirname}/public/images/${files.uimage[0].originalFilename}`
        fs.rename(oldpath,newpath,(err) => {
            if(err) throw err;
            res.render('display',{image:`${files.uimage[0].originalFilename}`});
        })
    })
    // res.send('ok');
})

app.listen(port,(err) => {
    console.log(`Running port ${port}`)
})