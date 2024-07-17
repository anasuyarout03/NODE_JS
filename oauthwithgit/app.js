let express = require('express');
let app = express();
let superagent = require('superagent');
let cors = require('cors');
let request = require('request');
let port = process.env.PORT || 8911;

app.get('/',(req,res) => {
    res.send('<a href="https://github.com/login/oauth/authorize?client_id=47cb2c8c14ef1a1e25db">Login With Git</a>')
})

app.get('/profile',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message:'Code is required'
        })
    };
    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_id:'47cb2c8c14ef1a1e25db',
            client_secret:'7adfc094e6eeeb0bcecfbc52c82f438ac4c7fc4a',
            code:code

        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            let access_token = result.body.access_token;
            const option = {
                url:'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':`Bearer ${access_token}`,
                    'User-Agent':'mycode'
                }
            }
            request(option,(err,response,body) => {
                res.send(body)
            })
        })
});


app.listen(port,() => {
    console.log(`listening on port ${port}`)
})