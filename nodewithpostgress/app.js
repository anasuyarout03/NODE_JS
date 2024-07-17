const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 8700;


app.use(express.urlencoded({extended:false}));
app.use(express.json());

const Pool = require('pg').Pool;
const Pool = new Pool({
    user:'',
    host:'127.0.0.1',
    port:5432,
    database:'postgres'
});

app.get('/',(req,res) => {
    Pool.query('SELECT * FROM employee',(err,result) => {
        if(err) throw err;
        res.send(result.rows)
    });
});

app.post('/add',(req,res) => {
    let id = req.body.id;
    let fname = req.body.fname;
    let lname = req.body.lname;
    let role = req.body.role;
    Pool.query('insert into employee (id,fname,lname,role) values ($1,$2,$3,$4)',
    ([id,fname,lname,role]),(err,result) => {
        if(err) throw err;
        res.send(result.rows)
    })
})

app.listen(port,() => {
    console.log(`Listening on port ${port}`)
})