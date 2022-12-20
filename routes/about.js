const express = require('express');

const router = express.Router();



router.get('/', (req, res)=>{
    res.send("<h1>This is about page </h1>")
})

router.get('/abcd/:name/:model([0-9]{4})', (req,res)=>{
    res.send(`name: ${req.params.name} model:${req.params.model}`)
})


module.exports = router