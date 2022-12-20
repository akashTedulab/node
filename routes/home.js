const express = require('express');

const router = express.Router();



router.get('/', (req, res)=>{
    res.send("<h1>This is home page </h1>")
})

router.get('/laptop/:name/:model', (req,res)=>{
    res.send("this is response from the server to your query:" + req.params.name + req.params.model)
})


module.exports = router