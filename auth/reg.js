const express = require('express')
const router = express.Router();

router.get('/register', (req, res)=>{
    res.send("<h1>Hello</h1>")
})

router.post('/login', (req, res)=>{
    const username  = req.body.username;
    const password  = req.body.password;

    if(username == "abcd" && password == "abcd"){
        res.send("success")
    } else {
        res.sendStatus(401)
    }
})

module.exports = router;